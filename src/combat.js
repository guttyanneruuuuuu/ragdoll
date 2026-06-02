// ============================================================
// Combat resolution — swept blade vs body parts, clashes, damage.
// Uses simple segment-vs-AABB tests on the blade each tick.
// ============================================================
import * as THREE from 'three';
import { DAMAGE, PART } from './config.js';

export class CombatSystem {
  constructor(effects, audio) {
    this.effects = effects;
    this.audio = audio;
    this._prevTips = new Map(); // doll.id -> Vector3
    this.onHit = null;          // callback(attacker, defender, part, killed)
    this.onClash = null;
  }

  // segment vs box (part) intersection
  _segHitsPart(p0, p1, part) {
    const t = part.body.translation();
    const r = part.body.rotation();
    const q = new THREE.Quaternion(r.x, r.y, r.z, r.w).invert();
    const center = new THREE.Vector3(t.x, t.y, t.z);
    // transform segment into part local space
    const a = p0.clone().sub(center).applyQuaternion(q);
    const b = p1.clone().sub(center).applyQuaternion(q);
    const half = new THREE.Vector3(part.dims[0] / 2 + 0.04, part.dims[1] / 2 + 0.04, part.dims[2] / 2 + 0.04);
    return this._segAABB(a, b, half);
  }

  _segAABB(p0, p1, half) {
    const d = p1.clone().sub(p0);
    let tmin = 0, tmax = 1;
    for (const ax of ['x', 'y', 'z']) {
      if (Math.abs(d[ax]) < 1e-8) {
        if (p0[ax] < -half[ax] || p0[ax] > half[ax]) return null;
      } else {
        let t1 = (-half[ax] - p0[ax]) / d[ax];
        let t2 = (half[ax] - p0[ax]) / d[ax];
        if (t1 > t2) [t1, t2] = [t2, t1];
        tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
        if (tmin > tmax) return null;
      }
    }
    return p0.clone().addScaledVector(d, tmin);
  }

  // returns the magnitude of blade swing velocity
  _bladeSpeed(doll) {
    const seg = doll.getBladeSegment();
    if (!seg) return 0;
    const v = seg.vel;
    return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
  }

  update(attacker, defender) {
    if (!attacker.weaponObj || attacker.weaponDropped) return;
    const seg = attacker.getBladeSegment();
    if (!seg) return;

    // swept segment: from previous tip to current tip + along blade
    const prevTip = this._prevTips.get(attacker.id) || seg.tip.clone();
    this._prevTips.set(attacker.id, seg.tip.clone());

    const speed = this._bladeSpeed(attacker);
    const swinging = attacker.swingPhase > 0 || speed > 4.5;
    if (!swinging) return;

    // ---- blade-vs-blade clash (parry) ----
    if (defender.weaponObj && !defender.weaponDropped && defender.blocking) {
      const dseg = defender.getBladeSegment();
      if (dseg) {
        const mid = seg.base.clone().lerp(seg.tip, 0.6);
        const dmid = dseg.base.clone().lerp(dseg.tip, 0.6);
        if (mid.distanceTo(dmid) < 0.55) {
          if (!attacker._didHitThisSwing) {
            attacker._didHitThisSwing = true;
            this.audio?.clash();
            this.effects?.sparks(mid);
            this.effects?.shake(0.25, 4);
            this.effects?.triggerHitstop(0.04);
            // knockback both
            const dir = mid.clone().sub(dmid).normalize();
            attacker.parts[PART.LOWER_ARM_R]?.body.applyImpulse({ x: dir.x * 2, y: 1, z: 0 }, true);
            this.onClash?.(mid);
          }
          return; // parried, no damage
        }
      }
    }

    if (attacker._didHitThisSwing) return;

    // ---- blade vs each defender part ----
    // test two segments: leading edge sweep + blade body
    const tests = [
      [prevTip, seg.tip],
      [seg.base, seg.tip],
    ];
    for (const partName in defender.parts) {
      if (defender.severed.has(partName)) continue;
      const part = defender.parts[partName];
      for (const [a, b] of tests) {
        const hit = this._segHitsPart(a, b, part);
        if (hit) {
          this._resolveHit(attacker, defender, partName, hit, speed);
          return;
        }
      }
    }
  }

  _resolveHit(attacker, defender, partName, point, speed) {
    attacker._didHitThisSwing = true;
    const w = attacker.weapon;
    const energy = DAMAGE.HIT_BASE * w.damage * (0.6 + Math.min(2.2, speed / 6));

    const res = defender.applyDamage(partName, energy, point);

    // knockback the hit part
    const part = defender.parts[partName];
    if (part) {
      const dir = new THREE.Vector3(attacker.facing, 0.4, 0).normalize();
      part.body.applyImpulse({ x: dir.x * energy * 0.04, y: dir.y * energy * 0.03, z: 0 }, true);
    }

    // feedback
    if (w.blunt) this.audio?.thud(); else this.audio?.slice();
    this.effects?.blood(point);
    if (res.severed || res.killed) {
      this.effects?.shake(0.7, 4);
      this.effects?.triggerHitstop(res.killed ? 0.18 : 0.1);
    } else {
      this.effects?.shake(0.35, 5);
      this.effects?.triggerHitstop(0.07);
    }

    this.onHit?.(attacker, defender, partName, res);
  }

  reset() { this._prevTips.clear(); }
}
