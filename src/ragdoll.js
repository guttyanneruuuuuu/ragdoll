// ============================================================
// Ragdoll fighter — Rapier physics body + Three.js visuals
// Builds a humanoid ragdoll out of rigid bodies linked by joints,
// holds a sword, supports "active ragdoll" upright muscles, and
// joint-lock / sever damage.
// ============================================================
import * as THREE from 'three';
import { PART, WEAPONS, DAMAGE } from './config.js';

// helper: little rounded-capsule-ish box geometry
function partGeo(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d, 1, 1, 1);
  return g;
}

export class Ragdoll {
  /**
   * @param {RAPIER} RAPIER  rapier module
   * @param {RAPIER.World} world
   * @param {THREE.Scene} scene
   * @param {object} opts { color, x, facing, weapon }
   */
  constructor(RAPIER, world, scene, opts) {
    this.RAPIER = RAPIER;
    this.world = world;
    this.scene = scene;
    this.color = opts.color ?? 0xffd633;
    this.facing = opts.facing ?? 1; // +1 faces right, -1 faces left
    this.weaponKey = opts.weapon ?? 'katana';
    this.weapon = WEAPONS[this.weaponKey];
    this.startX = opts.x ?? 0;
    this.id = opts.id ?? 'p';

    this.parts = {};        // name -> { body, mesh, collider, dims }
    this.joints = {};       // name -> rapier joint (impulse joint)
    this.jointMeta = {};    // name -> { bodyA, bodyB }
    this.colliderToPart = new Map(); // collider handle -> part name

    this.damage = {};       // part -> accumulated energy
    this.severed = new Set();
    this.locked = new Set();
    this.alive = true;
    this.dead = false;

    // active-ragdoll control state
    this.moveDir = 0;       // -1..1 desired horizontal
    this.wantJump = false;
    this.blocking = false;
    this.swingPhase = 0;    // 0 idle; >0 swinging timer
    this.swingDir = new THREE.Vector2(1, 1);
    this.aimAngle = 0;      // sword target angle (radians)
    this.grounded = false;

    this.group = new THREE.Group();
    scene.add(this.group);

    this._build();
  }

  // ---------------------------------------------------------
  _makePart(name, w, h, d, x, y, z, density = 1.0, colorOverride) {
    const { RAPIER, world } = this;
    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(x, y, z)
      .setLinearDamping(0.25)
      .setAngularDamping(0.65)
      .setCanSleep(false);
    const body = world.createRigidBody(bodyDesc);
    const colDesc = RAPIER.ColliderDesc.cuboid(w / 2, h / 2, d / 2)
      .setDensity(density)
      .setFriction(0.8)
      .setRestitution(0.05);
    const collider = world.createCollider(colDesc, body);

    const mat = new THREE.MeshStandardMaterial({
      color: colorOverride ?? this.color,
      roughness: 0.32, metalness: 0.12,
      emissive: colorOverride ?? this.color, emissiveIntensity: 0.04,
    });
    const mesh = new THREE.Mesh(partGeo(w, h, d), mat);
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.group.add(mesh);

    this.parts[name] = { body, mesh, collider, dims: [w, h, d], baseColor: colorOverride ?? this.color };
    this.colliderToPart.set(collider.handle, name);
    this.damage[name] = 0;
    return body;
  }

  _spherical(bodyA, bodyB, anchorA, anchorB, name) {
    const { RAPIER, world } = this;
    const params = RAPIER.JointData.spherical(
      { x: anchorA[0], y: anchorA[1], z: anchorA[2] },
      { x: anchorB[0], y: anchorB[1], z: anchorB[2] }
    );
    const j = world.createImpulseJoint(params, bodyA, bodyB, true);
    this.joints[name] = j;
    this.jointMeta[name] = { a: bodyA, b: bodyB };
    return j;
  }

  // ---------------------------------------------------------
  _build() {
    const x0 = this.startX;
    const f = this.facing;
    // proportions (meters) — big head, noodle limbs (Ragdoll Blade style)
    const P = {
      pelvis:   [0.34, 0.24, 0.22],
      torso:    [0.42, 0.46, 0.24],
      head:     [0.40, 0.40, 0.40],
      uArm:     [0.13, 0.34, 0.13],
      lArm:     [0.11, 0.32, 0.11],
      uLeg:     [0.16, 0.40, 0.16],
      lLeg:     [0.14, 0.40, 0.14],
    };
    const baseY = 1.6;

    // Core
    const pelvis = this._makePart(PART.PELVIS, ...P.pelvis, x0, baseY, 0, 1.2);
    const torso  = this._makePart(PART.TORSO, ...P.torso, x0, baseY + 0.36, 0, 1.0);
    const head   = this._makePart(PART.HEAD, ...P.head, x0, baseY + 0.86, 0, 0.7);

    // joints core
    this._spherical(pelvis, torso, [0, 0.12, 0], [0, -0.23, 0], 'spine');
    this._spherical(torso, head, [0, 0.23, 0], [0, -0.22, 0], 'neck');

    // Arms (left = -x, right = +x)
    const shoulderY = baseY + 0.5;
    const uAL = this._makePart(PART.UPPER_ARM_L, ...P.uArm, x0 - 0.28, shoulderY, 0, 0.6);
    const lAL = this._makePart(PART.LOWER_ARM_L, ...P.lArm, x0 - 0.28, shoulderY - 0.34, 0, 0.6);
    const uAR = this._makePart(PART.UPPER_ARM_R, ...P.uArm, x0 + 0.28, shoulderY, 0, 0.6);
    const lAR = this._makePart(PART.LOWER_ARM_R, ...P.lArm, x0 + 0.28, shoulderY - 0.34, 0, 0.6);
    this._spherical(torso, uAL, [-0.21, 0.18, 0], [0, 0.17, 0], 'shoulderL');
    this._spherical(uAL, lAL, [0, -0.17, 0], [0, 0.16, 0], 'elbowL');
    this._spherical(torso, uAR, [0.21, 0.18, 0], [0, 0.17, 0], 'shoulderR');
    this._spherical(uAR, lAR, [0, -0.17, 0], [0, 0.16, 0], 'elbowR');

    // Legs
    const hipY = baseY - 0.22;
    const uLL = this._makePart(PART.UPPER_LEG_L, ...P.uLeg, x0 - 0.1, hipY, 0, 0.9);
    const lLL = this._makePart(PART.LOWER_LEG_L, ...P.lLeg, x0 - 0.1, hipY - 0.4, 0, 0.9);
    const uLR = this._makePart(PART.UPPER_LEG_R, ...P.uLeg, x0 + 0.1, hipY, 0, 0.9);
    const lLR = this._makePart(PART.LOWER_LEG_R, ...P.lLeg, x0 + 0.1, hipY - 0.4, 0, 0.9);
    this._spherical(pelvis, uLL, [-0.1, -0.12, 0], [0, 0.2, 0], 'hipL');
    this._spherical(uLL, lLL, [0, -0.2, 0], [0, 0.2, 0], 'kneeL');
    this._spherical(pelvis, uLR, [0.1, -0.12, 0], [0, 0.2, 0], 'hipR');
    this._spherical(uLR, lLR, [0, -0.2, 0], [0, 0.2, 0], 'kneeR');

    // Eyes (cosmetic) attached to head mesh
    this._addFace();

    // Weapon held in right hand (lower arm R)
    this._buildWeapon(lAR);
  }

  _addFace() {
    const head = this.parts[PART.HEAD];
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const pupMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.3 });
    const eyeGeo = new THREE.SphereGeometry(0.07, 12, 12);
    const pupGeo = new THREE.SphereGeometry(0.035, 10, 10);
    for (const sx of [-0.1, 0.1]) {
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.position.set(sx, 0.04, 0.2 * this.facing);
      const pup = new THREE.Mesh(pupGeo, pupMat);
      pup.position.set(sx, 0.04, 0.235 * this.facing);
      head.mesh.add ? null : null; // eyes follow head via update (added to group)
      this.group.add(eye); this.group.add(pup);
      head._eyes = head._eyes || [];
      head._eyes.push({ eye, pup, off: new THREE.Vector3(sx, 0.04, 0.2 * this.facing), poff: new THREE.Vector3(sx, 0.04, 0.235 * this.facing) });
    }
  }

  _buildWeapon(handBody) {
    const { RAPIER, world } = this;
    const w = this.weapon;
    const hp = handBody.translation();

    // weapon rigid body
    const desc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(hp.x + 0.3 * this.facing, hp.y, hp.z)
      .setLinearDamping(0.2).setAngularDamping(0.4).setCanSleep(false);
    const body = world.createRigidBody(desc);

    // blade collider (long thin box) + handle
    const bladeCol = RAPIER.ColliderDesc.cuboid(w.bladeWidth, w.bladeLen / 2, 0.02)
      .setDensity(w.mass * 0.4).setFriction(0.4).setRestitution(0.1);
    const collider = world.createCollider(bladeCol, body);

    // visual: handle + guard + blade group
    const grp = new THREE.Group();
    const bladeMat = new THREE.MeshStandardMaterial({ color: w.color, roughness: 0.18, metalness: 0.85, emissive: 0x223344, emissiveIntensity: 0.1 });
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x2a1d12, roughness: 0.7, metalness: 0.1 });
    const guardMat = new THREE.MeshStandardMaterial({ color: w.guardColor, roughness: 0.4, metalness: 0.6 });

    let bladeMesh;
    if (w.blunt) {
      bladeMesh = new THREE.Mesh(new THREE.BoxGeometry(w.bladeWidth * 1.6, w.bladeLen * 0.5, w.bladeWidth * 1.6), bladeMat);
      bladeMesh.position.y = w.bladeLen * 0.4;
    } else {
      bladeMesh = new THREE.Mesh(new THREE.BoxGeometry(w.bladeWidth * 2, w.bladeLen, 0.03), bladeMat);
      bladeMesh.position.y = w.bladeLen / 2;
    }
    bladeMesh.castShadow = true;
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, w.handleLen, 8), handleMat);
    handle.position.y = -w.handleLen / 2;
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.05, 0.06), guardMat);
    guard.position.y = 0;
    grp.add(bladeMesh); grp.add(handle); grp.add(guard);
    this.group.add(grp);

    // fixed-ish joint to hand: use spherical with stiff motor-like via small offset
    const params = RAPIER.JointData.spherical(
      { x: 0, y: -0.16, z: 0 },          // hand anchor (grip)
      { x: 0, y: -w.handleLen, z: 0 }    // weapon anchor (bottom of handle)
    );
    const j = world.createImpulseJoint(params, handBody, body, true);

    this.weaponObj = { body, collider, mesh: grp, joint: j, blade: bladeMesh };
    this.colliderToPart.set(collider.handle, 'weapon');
  }

  // ---------------------------------------------------------
  // Per-frame control forces ("active ragdoll" muscles)
  applyControl(dt, opponent) {
    if (this.dead) return;
    const { parts } = this;
    const pelvis = parts[PART.PELVIS].body;
    const torso = parts[PART.TORSO].body;
    const head = parts[PART.HEAD].body;

    // ground check
    const pt = pelvis.translation();
    this.grounded = pt.y < 1.15;

    // ---- balance: keep torso/head upright ----
    if (!this._isCriticallyHurt()) {
      this._uprightTorque(torso, 14);
      this._uprightTorque(head, 6);
      // lift if crouched too low
      if (pt.y < 1.0 && this.grounded) {
        pelvis.applyImpulse({ x: 0, y: 5.5, z: 0 }, true);
      }
    }

    // face the opponent (rotate around Y toward target)
    if (opponent && opponent.parts) {
      const op = opponent.getCenter();
      const desiredFacing = op.x > pt.x ? 1 : -1;
      this.facing = desiredFacing;
    }

    // ---- locomotion ----
    if (this.moveDir !== 0 && !this._isCriticallyHurt()) {
      const force = 16 * this.moveDir;
      pelvis.applyImpulse({ x: force * dt * 60 * 0.06, y: 0, z: 0 }, true);
      // step legs alternately
      this._walkLegs(dt);
    }
    // clamp z drift (keep on 2.5D plane)
    this._constrainZ(pelvis, torso, head);

    // ---- jump ----
    if (this.wantJump && this.grounded && !this._isCriticallyHurt()) {
      pelvis.applyImpulse({ x: 0, y: 8.0, z: 0 }, true);
      torso.applyImpulse({ x: 0, y: 3.0, z: 0 }, true);
      this.wantJump = false;
    }

    // ---- arms: aim & swing ----
    this._controlArms(dt, opponent);
  }

  _constrainZ(...bodies) {
    for (const b of bodies) {
      const t = b.translation();
      if (Math.abs(t.z) > 0.05) {
        const v = b.linvel();
        b.setLinvel({ x: v.x, y: v.y, z: v.z - t.z * 6 }, true);
      }
    }
  }

  _uprightTorque(body, strength) {
    const rot = body.rotation(); // quaternion
    const q = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
    const target = new THREE.Vector3(0, 1, 0);
    const axis = new THREE.Vector3().crossVectors(up, target);
    const angle = up.angleTo(target);
    const av = body.angvel();
    body.applyTorqueImpulse({
      x: axis.x * angle * strength - av.x * 0.6,
      y: -av.y * 0.4,
      z: axis.z * angle * strength - av.z * 0.6,
    }, true);
  }

  _walkLegs(dt) {
    this._walkPhase = (this._walkPhase || 0) + dt * 9;
    const swing = Math.sin(this._walkPhase) * 2.2 * this.moveDir;
    const uLL = this.parts[PART.UPPER_LEG_L]?.body;
    const uLR = this.parts[PART.UPPER_LEG_R]?.body;
    if (uLL && !this.severed.has(PART.UPPER_LEG_L)) uLL.applyTorqueImpulse({ x: 0, y: 0, z: swing * 0.06 }, true);
    if (uLR && !this.severed.has(PART.UPPER_LEG_R)) uLR.applyTorqueImpulse({ x: 0, y: 0, z: -swing * 0.06 }, true);
  }

  _controlArms(dt, opponent) {
    const uAR = this.parts[PART.UPPER_ARM_R];
    const lAR = this.parts[PART.LOWER_ARM_R];
    if (!uAR || this.severed.has(PART.UPPER_ARM_R)) return;
    if (this.locked.has(PART.UPPER_ARM_R)) return;

    const torso = this.parts[PART.TORSO].body;
    const tp = torso.translation();

    // Determine target arm direction
    let targetAng = this.aimAngle;
    if (this.swingPhase > 0) {
      // sweeping swing arc
      const prog = 1 - (this.swingPhase / this.swingDuration);
      targetAng = this.swingStartAng + (this.swingEndAng - this.swingStartAng) * this._easeSwing(prog);
      this.swingPhase -= dt;
      if (this.swingPhase <= 0) this.swingPhase = 0;
    }

    // drive upper arm toward target angle by torque on Z (in-plane)
    const arm = uAR.body;
    const rot = arm.rotation();
    const q = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);
    const dir = new THREE.Vector3(0, -1, 0).applyQuaternion(q);
    const curAng = Math.atan2(dir.y, dir.x);
    let diff = targetAng - curAng;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    const strength = this.swingPhase > 0 ? 9.0 * this.weapon.swingPower : 3.2;
    const av = arm.angvel();
    arm.applyTorqueImpulse({ x: -av.x * 0.3, y: -av.y * 0.3, z: diff * strength - av.z * 0.5 }, true);

    // forearm: extend during swing, fold when blocking
    if (lAR && !this.severed.has(PART.LOWER_ARM_R)) {
      const fb = lAR.body;
      const fav = fb.angvel();
      const extend = this.blocking ? 1.5 : (this.swingPhase > 0 ? 0.2 : 0.6);
      fb.applyTorqueImpulse({ x: 0, y: 0, z: (extend * this.facing) - fav.z * 0.4 }, true);
    }
  }

  _easeSwing(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

  startSwing(dirX, dirY) {
    if (this.dead || this.swingPhase > 0) return false;
    if (this.severed.has(PART.UPPER_ARM_R) || this.locked.has(PART.UPPER_ARM_R)) return false;
    // build a swing arc from raised to target direction
    const targetAng = Math.atan2(dirY, dirX * this.facing) ;
    this.swingDuration = this.weapon.isThrust ? 0.22 : 0.34;
    this.swingPhase = this.swingDuration;
    // start from "raised" overhead, sweep across to target
    this.swingStartAng = targetAng + 1.6 * this.facing;
    this.swingEndAng = targetAng - 1.4 * this.facing;
    this.aimAngle = targetAng;
    this._didHitThisSwing = false;
    return true;
  }

  setAim(angle) { if (this.swingPhase <= 0) this.aimAngle = angle; }

  // ---------------------------------------------------------
  // Damage handling
  applyDamage(partName, energy, hitPoint) {
    if (this.severed.has(partName) || this.dead) return { killed: false };
    this.damage[partName] = (this.damage[partName] || 0) + energy;
    const d = this.damage[partName];

    let killed = false;
    // lethal parts
    if (partName === PART.HEAD && d >= DAMAGE.HEAD_KILL) {
      this._sever(partName); killed = true;
    } else if ((partName === PART.TORSO || partName === PART.PELVIS) && d >= DAMAGE.TORSO_KILL) {
      this._sever(partName); killed = true;
    } else if (d >= DAMAGE.SEVER_THRESHOLD && this._isLimb(partName)) {
      this._sever(partName);
    } else if (d >= DAMAGE.LOCK_THRESHOLD && !this.locked.has(partName)) {
      this.locked.add(partName);
    }

    if (killed) { this.dead = true; this.alive = false; }
    return { killed, severed: this.severed.has(partName), locked: this.locked.has(partName) };
  }

  _isLimb(p) {
    return [PART.UPPER_ARM_L, PART.LOWER_ARM_L, PART.UPPER_ARM_R, PART.LOWER_ARM_R,
            PART.UPPER_LEG_L, PART.LOWER_LEG_L, PART.UPPER_LEG_R, PART.LOWER_LEG_R, PART.HEAD].includes(p);
  }

  _sever(partName) {
    if (this.severed.has(partName)) return;
    this.severed.add(partName);
    // remove the joint connecting this part to its parent
    const jointName = this._parentJointOf(partName);
    if (jointName && this.joints[jointName]) {
      this.world.removeImpulseJoint(this.joints[jointName], true);
      delete this.joints[jointName];
    }
    // visual: red cut cap (tint emissive)
    const part = this.parts[partName];
    if (part) {
      part.mesh.material.color.setHex(0xaa1122);
      part.mesh.material.emissive.setHex(0x440000);
      // give it a little kick
      part.body.applyImpulse({ x: this.facing * 2, y: 3, z: (Math.random() - 0.5) * 2 }, true);
    }
    // dropping weapon if right arm severed
    if (partName === PART.LOWER_ARM_R || partName === PART.UPPER_ARM_R) {
      this._dropWeapon();
    }
  }

  _dropWeapon() {
    if (this.weaponObj && this.weaponObj.joint) {
      try { this.world.removeImpulseJoint(this.weaponObj.joint, true); } catch (e) {}
      this.weaponObj.joint = null;
      this.weaponDropped = true;
    }
  }

  _parentJointOf(part) {
    const map = {
      [PART.HEAD]: 'neck', [PART.TORSO]: 'spine',
      [PART.UPPER_ARM_L]: 'shoulderL', [PART.LOWER_ARM_L]: 'elbowL',
      [PART.UPPER_ARM_R]: 'shoulderR', [PART.LOWER_ARM_R]: 'elbowR',
      [PART.UPPER_LEG_L]: 'hipL', [PART.LOWER_LEG_L]: 'kneeL',
      [PART.UPPER_LEG_R]: 'hipR', [PART.LOWER_LEG_R]: 'kneeR',
    };
    return map[part];
  }

  _isCriticallyHurt() {
    // can't stand if both legs compromised or torso severed
    if (this.severed.has(PART.TORSO) || this.severed.has(PART.PELVIS)) return true;
    const legL = this.severed.has(PART.UPPER_LEG_L) || this.locked.has(PART.UPPER_LEG_L);
    const legR = this.severed.has(PART.UPPER_LEG_R) || this.locked.has(PART.UPPER_LEG_R);
    return legL && legR;
  }

  getCenter() {
    const t = this.parts[PART.TORSO].body.translation();
    return new THREE.Vector3(t.x, t.y, t.z);
  }

  // sword tip world position & previous (for swept hit)
  getBladeSegment() {
    if (!this.weaponObj) return null;
    const b = this.weaponObj.body;
    const t = b.translation();
    const r = b.rotation();
    const q = new THREE.Quaternion(r.x, r.y, r.z, r.w);
    const base = new THREE.Vector3(t.x, t.y, t.z);
    const tip = new THREE.Vector3(0, this.weapon.bladeLen, 0).applyQuaternion(q).add(base);
    const seg = { base, tip, vel: b.linvel() };
    return seg;
  }

  // ---------------------------------------------------------
  // sync visuals from physics
  sync() {
    for (const name in this.parts) {
      const p = this.parts[name];
      const t = p.body.translation();
      const r = p.body.rotation();
      p.mesh.position.set(t.x, t.y, t.z);
      p.mesh.quaternion.set(r.x, r.y, r.z, r.w);
      if (p._eyes) {
        for (const e of p._eyes) {
          const off = e.off.clone().applyQuaternion(p.mesh.quaternion).add(p.mesh.position);
          const poff = e.poff.clone().applyQuaternion(p.mesh.quaternion).add(p.mesh.position);
          e.eye.position.copy(off); e.eye.quaternion.copy(p.mesh.quaternion);
          e.pup.position.copy(poff); e.pup.quaternion.copy(p.mesh.quaternion);
        }
      }
    }
    if (this.weaponObj) {
      const t = this.weaponObj.body.translation();
      const r = this.weaponObj.body.rotation();
      this.weaponObj.mesh.position.set(t.x, t.y, t.z);
      this.weaponObj.mesh.quaternion.set(r.x, r.y, r.z, r.w);
    }
  }

  // ---------------------------------------------------------
  // network snapshot (positions + rotations of all bodies)
  snapshot() {
    const s = { parts: {}, dead: this.dead, severed: [...this.severed], locked: [...this.locked] };
    for (const name in this.parts) {
      const t = this.parts[name].body.translation();
      const r = this.parts[name].body.rotation();
      s.parts[name] = [
        +t.x.toFixed(3), +t.y.toFixed(3), +t.z.toFixed(3),
        +r.x.toFixed(3), +r.y.toFixed(3), +r.z.toFixed(3), +r.w.toFixed(3),
      ];
    }
    if (this.weaponObj) {
      const t = this.weaponObj.body.translation();
      const r = this.weaponObj.body.rotation();
      s.weapon = [
        +t.x.toFixed(3), +t.y.toFixed(3), +t.z.toFixed(3),
        +r.x.toFixed(3), +r.y.toFixed(3), +r.z.toFixed(3), +r.w.toFixed(3),
      ];
    }
    return s;
  }

  // apply a network snapshot (remote-controlled doll: kinematic-style lerp)
  applySnapshot(s, lerp = 0.4) {
    for (const name in s.parts) {
      const p = this.parts[name];
      if (!p) continue;
      const d = s.parts[name];
      const cur = p.body.translation();
      p.body.setTranslation({
        x: cur.x + (d[0] - cur.x) * lerp,
        y: cur.y + (d[1] - cur.y) * lerp,
        z: cur.z + (d[2] - cur.z) * lerp,
      }, true);
      p.body.setRotation({ x: d[3], y: d[4], z: d[5], w: d[6] }, true);
      p.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      p.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
    }
    if (s.weapon && this.weaponObj) {
      const d = s.weapon;
      const cur = this.weaponObj.body.translation();
      this.weaponObj.body.setTranslation({
        x: cur.x + (d[0] - cur.x) * lerp,
        y: cur.y + (d[1] - cur.y) * lerp,
        z: cur.z + (d[2] - cur.z) * lerp,
      }, true);
      this.weaponObj.body.setRotation({ x: d[3], y: d[4], z: d[5], w: d[6] }, true);
    }
    // sync sever/lock state visuals
    for (const part of s.severed) if (!this.severed.has(part)) this._sever(part);
    for (const part of s.locked) this.locked.add(part);
    this.dead = s.dead;
  }

  // make remote doll's bodies kinematic so we just set transforms
  makeRemote() {
    this.remote = true;
    for (const name in this.parts) {
      this.parts[name].body.setBodyType(this.RAPIER.RigidBodyType.KinematicPositionBased, true);
    }
    if (this.weaponObj) this.weaponObj.body.setBodyType(this.RAPIER.RigidBodyType.KinematicPositionBased, true);
  }

  destroy() {
    for (const name in this.parts) {
      this.world.removeRigidBody(this.parts[name].body);
    }
    if (this.weaponObj) this.world.removeRigidBody(this.weaponObj.body);
    this.scene.remove(this.group);
    this.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose?.(); });
  }
}
