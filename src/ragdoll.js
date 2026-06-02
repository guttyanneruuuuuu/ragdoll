// ============================================================
//  ragdoll.js — Active ragdoll fighter
//  An original "stick-figure with capsule limbs" built on the
//  Verlet world. Supports active muscle posing, walking, jumping,
//  sword swinging, and limb severing when sliced.
// ============================================================

import { Point, Stick, AngleConstraint, rotatePointAround } from './physics.js';

let GROUP_ID = 0;

export class Ragdoll {
  /**
   * @param {World} world
   * @param {number} x spawn x
   * @param {number} y spawn y (of the hip)
   * @param {object} opts { color, facing, scale }
   */
  constructor(world, x, y, opts = {}) {
    this.world = world;
    this.group = ++GROUP_ID;
    this.color = opts.color ?? '#f2c14e';
    this.darkColor = shade(this.color, -28);
    this.facing = opts.facing ?? 1; // 1 = right, -1 = left
    this.scale = opts.scale ?? 1;
    this.dead = false;
    this.alive = true;
    this.health = 100;
    this.swingTimer = 0;
    this.swingDir = 1;
    this.jumpCooldown = 0;
    this.bloodEmit = 0;
    this.name = opts.name ?? 'Fighter';

    this._build(x, y);
  }

  _build(x, y) {
    const s = this.scale;
    const W = this.world;
    const mk = (px, py, o = {}) => W.addPoint(new Point(px, py, { group: this.group, ...o }));

    // Core skeleton points
    this.hip    = mk(x, y,            { radius: 11 * s, mass: 2.2, tag: 'hip' });
    this.chest  = mk(x, y - 38 * s,   { radius: 12 * s, mass: 2.0, tag: 'chest' });
    this.head   = mk(x, y - 70 * s,   { radius: 17 * s, mass: 1.5, tag: 'head' });

    // Arms (shoulder anchored at chest)
    this.elbowR = mk(x + 18 * s, y - 22 * s, { radius: 7 * s, mass: 0.7, tag: 'arm' });
    this.handR  = mk(x + 34 * s, y - 8 * s,  { radius: 8 * s, mass: 0.7, tag: 'hand' });
    this.elbowL = mk(x - 18 * s, y - 22 * s, { radius: 7 * s, mass: 0.7, tag: 'arm' });
    this.handL  = mk(x - 30 * s, y - 10 * s, { radius: 8 * s, mass: 0.7, tag: 'hand' });

    // Legs (hip anchored)
    this.kneeR  = mk(x + 9 * s,  y + 30 * s, { radius: 8 * s, mass: 1.0, tag: 'leg' });
    this.footR  = mk(x + 11 * s, y + 60 * s, { radius: 9 * s, mass: 1.1, tag: 'foot' });
    this.kneeL  = mk(x - 9 * s,  y + 30 * s, { radius: 8 * s, mass: 1.0, tag: 'leg' });
    this.footL  = mk(x - 11 * s, y + 60 * s, { radius: 9 * s, mass: 1.1, tag: 'foot' });

    const stick = (a, b, o = {}) =>
      W.addStick(new Stick(a, b, { stiffness: 1, group: this.group, ...o }));

    // Spine
    this.sSpine1 = stick(this.hip, this.chest, { thickness: 22 * s, color: this.color, tag: 'spine' });
    this.sNeck   = stick(this.chest, this.head, { thickness: 16 * s, color: this.color, tag: 'neck' });

    // Arms
    this.sUarmR = stick(this.chest, this.elbowR, { thickness: 12 * s, color: this.color, tag: 'arm' });
    this.sFarmR = stick(this.elbowR, this.handR, { thickness: 11 * s, color: this.color, tag: 'arm' });
    this.sUarmL = stick(this.chest, this.elbowL, { thickness: 12 * s, color: this.color, tag: 'arm' });
    this.sFarmL = stick(this.elbowL, this.handL, { thickness: 11 * s, color: this.color, tag: 'arm' });

    // Legs
    this.sUlegR = stick(this.hip, this.kneeR, { thickness: 14 * s, color: this.color, tag: 'leg' });
    this.sLlegR = stick(this.kneeR, this.footR, { thickness: 12 * s, color: this.color, tag: 'leg' });
    this.sUlegL = stick(this.hip, this.kneeL, { thickness: 14 * s, color: this.color, tag: 'leg' });
    this.sLlegL = stick(this.kneeL, this.footL, { thickness: 12 * s, color: this.color, tag: 'leg' });

    // Structural support (keep torso rigid-ish)
    stick(this.hip, this.head, { stiffness: 0.06, visible: false, breakable: false, tag: 'support' });

    // Sword: handle attached to right hand, blade extends out
    this.swordHandle = mk(this.handR.x + 6 * s, this.handR.y, { radius: 5 * s, mass: 0.5, tag: 'swordhandle' });
    this.swordTip    = mk(this.handR.x + 6 * s, this.handR.y - 64 * s, { radius: 4 * s, mass: 0.4, tag: 'swordtip' });
    this.sGrip = stick(this.handR, this.swordHandle, { length: 10 * s, stiffness: 1, breakable: false, visible: false });
    this.sBlade = stick(this.swordHandle, this.swordTip, { length: 64 * s, stiffness: 1, breakable: false, visible: false, tag: 'blade' });
    // Keep sword roughly aligned with forearm
    this.sSwordAlign = stick(this.elbowR, this.swordTip, { stiffness: 0.5, visible: false, breakable: false });

    this.allCorePoints = [
      this.hip, this.chest, this.head, this.elbowR, this.handR,
      this.elbowL, this.handL, this.kneeR, this.footR, this.kneeL, this.footL
    ];
    this.bodySticks = [
      this.sSpine1, this.sNeck, this.sUarmR, this.sFarmR, this.sUarmL,
      this.sFarmL, this.sUlegR, this.sLlegR, this.sUlegL, this.sLlegL
    ];
  }

  /** Center of mass-ish reference for AI / camera. */
  get cx() { return this.hip.x; }
  get cy() { return this.hip.y; }

  isOnGround() {
    return (this.footR.y > this.world.groundY - 30) || (this.footL.y > this.world.groundY - 30);
  }

  /** Count how many key joints remain attached. */
  vitality() {
    let alive = 0;
    if (!this.sNeck.broken) alive += 2;   // head attached is critical
    if (!this.sSpine1.broken) alive += 2;
    if (!this.sUlegR.broken) alive += 1;
    if (!this.sUlegL.broken) alive += 1;
    return alive;
  }

  checkDeath() {
    if (this.dead) return;
    // Dead if head detached, spine cut, or health gone
    if (this.sNeck.broken || this.sSpine1.broken || this.health <= 0) {
      this.die();
    }
  }

  die() {
    this.dead = true;
    this.alive = false;
    // Go limp: disable all muscle angle constraints belonging to this group
    for (const a of this.world.angles) {
      if (a.pivot.group === this.group) a.enabled = false;
    }
  }

  // ---- Active control "muscles" -----------------------------------------

  /**
   * Move horizontally by pushing feet & leaning torso.
   * dir: -1 left, +1 right, 0 idle.
   */
  move(dir, power = 1) {
    if (this.dead) return;
    const onGround = this.isOnGround();
    const sp = 0.9 * power;
    if (dir !== 0) {
      this.facing = dir;
      // lean & step
      this.chest.addForce(dir * sp * 0.9, 0);
      this.hip.addForce(dir * sp * 0.55, 0);
      // alternate "walking" by nudging feet forward in the travel direction
      const t = performance.now() * 0.012;
      const swing = Math.sin(t) * 5 * power;
      if (onGround) {
        this.footR.addForce(dir * (sp + Math.max(0, swing)), 0);
        this.footL.addForce(dir * (sp + Math.max(0, -swing)), 0);
      }
    }
  }

  jump() {
    if (this.dead || !this.isOnGround() || this.jumpCooldown > 0) return;
    // Negative Y = upward (canvas Y grows downward)
    this.hip.addForce(0, -13);
    this.chest.addForce(0, -10);
    this.footR.addForce(0, -5);
    this.footL.addForce(0, -5);
    this.jumpCooldown = 20; // suspends leg spring so the doll actually leaves ground
  }

  /** Begin a sword swing animation. */
  swing() {
    if (this.dead || this.swingTimer > 0) return;
    this.swingTimer = 22;
    this.swingDir = this.facing;
  }

  /** Apply postural muscle forces each frame to keep the doll upright & swing. */
  control() {
    if (this.dead) return;
    const s = this.scale;

    if (this.jumpCooldown > 0) this.jumpCooldown--;

    // Are the legs still able to provide support?
    const legR = !this.sUlegR.broken && !this.sLlegR.broken;
    const legL = !this.sUlegL.broken && !this.sLlegL.broken;
    const legsOk = legR || legL;

    // --- Leg spring: hold the hip up at standing height above the GROUND ---
    // We spring the hip toward a target height above the ground line (where the
    // feet rest under gravity), rather than chasing the feet (which caused the
    // whole body to levitate). Gravity + ground collision keep the feet planted.
    // Suspended briefly after a jump so the doll can actually leave the ground.
    if (legsOk && this.jumpCooldown <= 0) {
      const targetHipY = this.world.groundY - 64 * s;
      const hipErr = this.hip.y - targetHipY; // positive when sunk too low
      if (hipErr > 0) {
        this.hip.addForce(0, hipErr * 0.16);
        this.chest.addForce(0, hipErr * 0.04);
      }
    }

    // --- Upright torso: drive head & chest to sit directly ABOVE the hip ---
    // Target positions are relative to the hip, forcing a vertical stack.
    const tChestX = this.hip.x;
    const tChestY = this.hip.y - 38 * s;
    this.chest.addForce((tChestX - this.chest.x) * 0.10, (tChestY - this.chest.y) * 0.10);

    const tHeadX = this.hip.x;
    const tHeadY = this.hip.y - 72 * s;
    this.head.addForce((tHeadX - this.head.x) * 0.09, (tHeadY - this.head.y) * 0.09);

    // Keep balance: nudge hip back over the support feet
    const feetMid = (this.footR.x + this.footL.x) / 2;
    this.hip.addForce(-(this.hip.x - feetMid) * 0.02, 0);
    // Gently keep a planted stance: feet track under the hip horizontally only
    if (this.isOnGround()) {
      this.footR.addForce((this.hip.x + 12 * s - this.footR.x) * 0.04, 0);
      this.footL.addForce((this.hip.x - 12 * s - this.footL.x) * 0.04, 0);
    }

    // Sword swing dynamics
    if (this.swingTimer > 0) {
      this.swingTimer--;
      const phase = 1 - this.swingTimer / 22;
      // arc the hand & sword tip over the head and down
      const dir = this.swingDir;
      const angle = (-1.4 + phase * 3.0) * dir;
      const reach = 42 * s;
      const sx = this.chest.x + Math.cos(angle - Math.PI / 2) * reach * dir;
      const sy = this.chest.y + Math.sin(angle - Math.PI / 2) * reach - 8 * s;
      this.handR.addForce((sx - this.handR.x) * 0.55, (sy - this.handR.y) * 0.55);
      this.swordTip.addForce(dir * 2.2, -1.0);
    } else {
      // Rest pose: hold sword up-ish in front
      const restX = this.chest.x + this.facing * 26 * s;
      const restY = this.chest.y + 4 * s;
      this.handR.addForce((restX - this.handR.x) * 0.10, (restY - this.handR.y) * 0.10);
      // left hand relaxed by side
      const lx = this.chest.x - this.facing * 20 * s;
      const ly = this.chest.y + 14 * s;
      this.handL.addForce((lx - this.handL.x) * 0.06, (ly - this.handL.y) * 0.06);
    }
  }

  /** The active blade segment used for slicing (handle -> tip). */
  bladeSegment() {
    if (this.sBlade.broken) return null;
    return { a: this.swordHandle, b: this.swordTip };
  }

  bladeIsActive() {
    return this.swingTimer > 4; // only damaging mid-swing
  }
}

// ---- helpers --------------------------------------------------------------
function shade(hex, amt) {
  const c = hex.replace('#', '');
  let r = parseInt(c.substr(0, 2), 16);
  let g = parseInt(c.substr(2, 2), 16);
  let b = parseInt(c.substr(4, 2), 16);
  r = Math.max(0, Math.min(255, r + amt));
  g = Math.max(0, Math.min(255, g + amt));
  b = Math.max(0, Math.min(255, b + amt));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
