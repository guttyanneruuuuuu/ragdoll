// ============================================================
//  combat.js — Slicing, severing & blood particle systems
//  Original logic. When an active blade segment crosses a
//  ragdoll's bone, the bone is severed and the limb becomes a
//  free-floating body, spraying blood particles.
// ============================================================

import { segIntersect } from './physics.js';

export class Particle {
  constructor(x, y, vx, vy, opts = {}) {
    this.x = x; this.y = y;
    this.vx = vx; this.vy = vy;
    this.life = opts.life ?? 40;
    this.maxLife = this.life;
    this.size = opts.size ?? 3;
    this.color = opts.color ?? '#c0202a';
    this.gravity = opts.gravity ?? 0.45;
    this.kind = opts.kind ?? 'blood';
  }
  step() {
    this.vx *= 0.98;
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
  }
}

export class CombatSystem {
  constructor(world) {
    this.world = world;
    this.particles = [];
    this.sparks = [];
    this.shake = 0;
    this.slowmo = 0;
    this.onHit = null;     // callback(attacker, victim, severedTag)
    this.lastBlade = new Map(); // ragdoll -> {hx,hy,tx,ty}
  }

  spawnBlood(x, y, dir = 0, amount = 14) {
    for (let i = 0; i < amount; i++) {
      const a = (dir || 0) + (Math.random() - 0.5) * 2.4;
      const sp = 2 + Math.random() * 6;
      this.particles.push(new Particle(
        x, y,
        Math.cos(a) * sp,
        Math.sin(a) * sp - 1,
        {
          life: 30 + Math.random() * 40,
          size: 2 + Math.random() * 4,
          color: Math.random() < 0.15 ? '#8c1118' : '#cf2531'
        }
      ));
    }
  }

  spawnSpark(x, y) {
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 2 + Math.random() * 4;
      this.sparks.push(new Particle(x, y, Math.cos(a) * sp, Math.sin(a) * sp, {
        life: 10 + Math.random() * 10, size: 1.5 + Math.random() * 2,
        color: Math.random() < 0.5 ? '#fff4c2' : '#ffd24a', gravity: 0.05, kind: 'spark'
      }));
    }
  }

  /**
   * Test every fighter's active blade against every other fighter's bones.
   * @param {Ragdoll[]} fighters
   */
  update(fighters) {
    // blade vs bones
    for (const att of fighters) {
      const seg = att.bladeSegment ? att.bladeSegment() : null;
      if (!seg) continue;
      const prev = this.lastBlade.get(att);
      const cur = { hx: seg.a.x, hy: seg.a.y, tx: seg.b.x, ty: seg.b.y };
      this.lastBlade.set(att, cur);
      if (!att.bladeIsActive()) continue;

      for (const vic of fighters) {
        if (vic === att || vic.dead) continue;
        this._sliceFighter(att, vic, seg);
      }
      // Blade-vs-blade clash (parry sparks)
      for (const other of fighters) {
        if (other === att) continue;
        const oseg = other.bladeSegment ? other.bladeSegment() : null;
        if (!oseg) continue;
        const hit = segIntersect(seg.a, seg.b, oseg.a, oseg.b);
        if (hit && (att.bladeIsActive() || other.bladeIsActive())) {
          this.spawnSpark(hit.x, hit.y);
          this.shake = Math.max(this.shake, 4);
          // push apart
          const dx = att.handR.x - other.handR.x;
          att.handR.addForce(Math.sign(dx) * 1.2, -0.5);
          other.handR.addForce(-Math.sign(dx) * 1.2, -0.5);
        }
      }
    }

    this._stepParticles();
  }

  _sliceFighter(att, vic, seg) {
    for (const stick of vic.bodySticks) {
      if (stick.broken || !stick.breakable) continue;
      const hit = segIntersect(seg.a, seg.b, stick.a, stick.b);
      if (!hit) continue;

      // Sever it!
      stick.broken = true;
      const tag = stick.tag;
      const dir = Math.atan2(seg.b.y - seg.a.y, seg.b.x - seg.a.x) + Math.PI / 2;
      this.spawnBlood(hit.x, hit.y, dir, 18);
      this.spawnBlood(hit.x, hit.y, dir + Math.PI, 12);

      // Mark cut ends for red-cap rendering
      stick.a.severed = true; stick.a.damage = 1;
      stick.b.severed = true; stick.b.damage = 1;

      // Impulse from the blade swing
      const bvx = (seg.b.x - (this.lastBlade.get(att)?.tx ?? seg.b.x));
      const force = 6 + Math.abs(bvx) * 0.4;
      const fa = Math.cos(dir), fb = Math.sin(dir);
      stick.a.addForce(fa * force, fb * force - 2);
      stick.b.addForce(fa * force, fb * force - 2);

      vic.health -= 34;
      this.shake = Math.max(this.shake, 9);
      this.slowmo = Math.max(this.slowmo, 8);
      if (this.onHit) this.onHit(att, vic, tag);

      vic.checkDeath();
      break; // one cut per blade per frame per victim
    }
  }

  _stepParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.step();
      // pool blood on ground
      if (p.y > this.world.groundY) {
        p.y = this.world.groundY;
        p.vx *= 0.6; p.vy = 0; p.gravity = 0;
        p.life -= 2;
      }
      if (p.life <= 0) this.particles.splice(i, 1);
    }
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const s = this.sparks[i];
      s.step();
      if (s.life <= 0) this.sparks.splice(i, 1);
    }
    if (this.shake > 0) this.shake *= 0.85;
    if (this.shake < 0.2) this.shake = 0;
    if (this.slowmo > 0) this.slowmo--;
  }
}
