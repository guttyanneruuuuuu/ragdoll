// ============================================================
// Fighter — a ragdoll humanoid built from verlet particles.
//   nodes: head, chest, hip, handL/R (sword hand), footL/R
//   Active "muscles" keep it upright & let it walk; the sword
//   hand is driven toward a swing target for slashing.
// ============================================================
import * as THREE from 'three';
import { Particle, Stick, Muscle, dist } from './physics.js';
import { BODY, WEAPONS, DAMAGE, COLORS } from './config.js';

export class Fighter {
  constructor(world, scene, opts = {}) {
    this.world = world;
    this.scene = scene;
    this.color = opts.color ?? COLORS.p1;
    this.facing = opts.facing ?? 1;
    this.weaponKey = opts.weapon ?? 'katana';
    this.weapon = WEAPONS[this.weaponKey];
    this.id = opts.id ?? 'p';
    this.name = opts.name ?? 'PLAYER';
    const x = opts.x ?? 0, z = opts.z ?? 0;

    this.alive = true;
    this.locked = {};        // joint name -> true
    this.severed = {};       // node name -> true
    this.energy = {};        // node -> accumulated damage energy
    this.stagger = 0;        // remaining stagger seconds
    this.swingT = 0;         // swing animation timer
    this.swinging = false;
    this.blocking = false;
    this.moveDir = { x: 0, z: 0 };
    this.swingDir = { x: 0, y: 0 };
    // Live aim of the sword from the single stick (screen x:right, y:up).
    // Held continuously so the blade points where the stick points and the
    // body leans/drifts to "follow the sword".
    this.aim = { x: 0, y: 0 };
    this.koTimer = 0;

    this.nodes = {};
    this.bones = {};
    this.muscles = {};

    this.buildBody(x, z);
    this.buildVisuals();
  }

  // ---- build physics ragdoll ----
  buildBody(x, z) {
    const w = this.world;
    const n = (name, dx, dy, dz, r, mass) => {
      const p = new Particle(x + dx, dy, z + dz, r, mass);
      this.nodes[name] = p; w.add(p); this.energy[name] = 0; return p;
    };
    n('head',  0, 3.4, 0, BODY.head, 1.0);
    n('chest', 0, 2.7, 0, BODY.chest, 2.2);
    n('hip',   0, 1.9, 0, BODY.hip, 2.5);
    n('handL', -0.7, 2.4, 0, BODY.hand, 0.8);
    n('handR',  0.7 * this.facing, 2.4, 0, BODY.hand, 0.8); // sword hand
    n('footL', -0.4, 0.2, 0, BODY.foot, 1.2);
    n('footR',  0.4, 0.2, 0, BODY.foot, 1.2);

    const link = (key, a, b, len, stiff = 1) => {
      const s = new Stick(this.nodes[a], this.nodes[b], len, stiff);
      this.bones[key] = s; w.addStick(s); return s;
    };
    link('neck', 'head', 'chest', 0.7, 0.9);
    link('spine', 'chest', 'hip', 0.85, 1);
    link('armL', 'chest', 'handL', 1.15, 0.55);
    link('armR', 'chest', 'handR', 1.15, 0.55);
    link('legL', 'hip', 'footL', 1.7, 0.85);
    link('legR', 'hip', 'footR', 1.7, 0.85);
    // cross brace for some rigidity
    link('braceL', 'hip', 'handL', 1.7, 0.18);
    link('braceR', 'hip', 'handR', 1.7, 0.18);

    // active-ragdoll muscles: keep upright by pulling head/chest above hip
    const M = (name, node, anchor, off, str) => {
      const m = new Muscle(this.nodes[node], this.nodes[anchor], off, str);
      this.muscles[name] = m; w.addMuscle(m); return m;
    };
    M('standChest', 'chest', 'hip', { x: 0, y: 0.85, z: 0 }, 0.22);
    M('standHead', 'head', 'chest', { x: 0, y: 0.7, z: 0 }, 0.18);
  }

  // ---- build three.js visuals: a proper humanoid ----
  // The physics is still 7 verlet nodes (head/chest/hip/hands/feet), but the
  // VISUAL is a real human shape: skinned head with neck, a torso with
  // shoulders, two-segment arms (upper+fore-arm w/ elbow), hands, a pelvis,
  // two-segment legs (thigh+shin w/ knee) and boots. The intermediate joints
  // (shoulder/elbow/knee) are derived each frame from the node positions.
  buildVisuals() {
    this.group = new THREE.Group();
    this.scene.add(this.group);

    const skin = new THREE.MeshStandardMaterial({
      color: this.color, roughness: 0.45, metalness: 0.05,
      emissive: new THREE.Color(this.color).multiplyScalar(0.05),
    });
    this.mat = skin;
    // Slightly darker armour tone for torso/limbs for visual depth.
    const armour = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.color).multiplyScalar(0.82),
      roughness: 0.5, metalness: 0.15,
    });
    this.armourMat = armour;
    const skinTone = new THREE.MeshStandardMaterial({ color: 0xf1c8a0, roughness: 0.6 });
    this.skinTone = skinTone;
    const dark = new THREE.MeshStandardMaterial({ color: 0x2a2d36, roughness: 0.7 });
    this.darkMat = dark;

    this.meshes = {};
    this.parts = {};

    const addPart = (key, geo, mat) => {
      const m = new THREE.Mesh(geo, mat);
      m.castShadow = true; this.group.add(m); this.parts[key] = m; return m;
    };

    // --- HEAD (skin sphere) + simple hair cap ---
    const headR = BODY.head * 0.8;
    const head = new THREE.Mesh(new THREE.SphereGeometry(headR, 20, 16), skinTone);
    head.castShadow = true; this.group.add(head); this.meshes.head = head; this.headR = headR;
    // hair / helmet cap in team colour
    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(headR * 1.05, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.62), skin);
    hair.position.y = headR * 0.12; head.add(hair);

    // eyes (whites + pupils), parented to head
    const eyeW = new THREE.MeshBasicMaterial({ color: 0xf6f6f6 });
    const eyeB = new THREE.MeshBasicMaterial({ color: 0x101014 });
    this.eyeWL = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.26, 10, 10), eyeW);
    this.eyeWR = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.26, 10, 10), eyeW);
    this.eyeL = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.13, 8, 8), eyeB);
    this.eyeR = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.13, 8, 8), eyeB);
    head.add(this.eyeWL, this.eyeWR); this.eyeWL.add(this.eyeL); this.eyeWR.add(this.eyeR);

    // --- TORSO (chest = broad upper body, capsule) ---
    addPart('neck', new THREE.CylinderGeometry(0.13, 0.16, 1, 10), skinTone);
    const chest = addPart('chest',
      new THREE.CapsuleGeometry(BODY.chest * 0.62, BODY.chest * 1.1, 6, 14), armour);
    // shoulders for breadth
    addPart('shoulderL', new THREE.SphereGeometry(0.22, 12, 10), armour);
    addPart('shoulderR', new THREE.SphereGeometry(0.22, 12, 10), armour);
    // pelvis
    addPart('hip', new THREE.CapsuleGeometry(BODY.hip * 0.6, BODY.hip * 0.7, 6, 12), armour);

    // --- ARMS: upper + forearm + hand, both sides ---
    const armR = 0.13;
    for (const s of ['L', 'R']) {
      addPart('upperArm' + s, new THREE.CylinderGeometry(armR, armR * 0.92, 1, 10), skin);
      addPart('foreArm' + s, new THREE.CylinderGeometry(armR * 0.9, armR * 0.8, 1, 10), skinTone);
      addPart('hand' + s, new THREE.SphereGeometry(0.15, 12, 10), skinTone);
    }

    // --- LEGS: thigh + shin + boot, both sides ---
    const legR = 0.17;
    for (const s of ['L', 'R']) {
      addPart('thigh' + s, new THREE.CylinderGeometry(legR, legR * 0.9, 1, 10), armour);
      addPart('shin' + s, new THREE.CylinderGeometry(legR * 0.85, legR * 0.7, 1, 10), dark);
      const boot = addPart('foot' + s, new THREE.BoxGeometry(0.26, 0.18, 0.46), dark);
      boot.geometry.translate(0, 0, 0.08);
    }

    this.buildSword();
  }

  buildSword() {
    if (this.sword) this.group.remove(this.sword);
    const wpn = this.weapon;
    const swordGroup = new THREE.Group();
    // hilt
    const hilt = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, 0.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.6, metalness: 0.3 })
    );
    // guard
    const guard = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.08, 0.12),
      new THREE.MeshStandardMaterial({ color: 0x8a6d3b, metalness: 0.5, roughness: 0.4 })
    );
    guard.position.y = 0.25;
    // blade
    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(wpn.width, wpn.reach, 0.05),
      new THREE.MeshStandardMaterial({ color: wpn.color, metalness: 0.85, roughness: 0.18,
        emissive: 0x222222 })
    );
    blade.position.y = 0.3 + wpn.reach / 2;
    blade.castShadow = true;
    swordGroup.add(hilt, guard, blade);
    this.sword = swordGroup;
    this.bladeMesh = blade;
    this.group.add(swordGroup);
  }

  setWeapon(key) {
    this.weaponKey = key; this.weapon = WEAPONS[key];
    this.buildSword();
  }

  // tip of the sword in world space (for hit detection)
  swordTip(out = {}) {
    const hand = this.nodes.handR.p;
    const dir = this.swordWorldDir;
    const reach = this.weapon.reach + 0.5;
    out.x = hand.x + dir.x * reach;
    out.y = hand.y + dir.y * reach;
    out.z = hand.z + dir.z * reach;
    return out;
  }

  // ---- control inputs from player / AI / net ----
  setMove(x, z) { this.moveDir.x = x; this.moveDir.z = z; }
  // Continuous sword aim from the stick (single-stick control).
  setAim(x, y) { this.aim.x = x; this.aim.y = y; }
  setSwing(dx, dy) {
    // dx,dy normalized direction of swipe; triggers a slash
    const mag = Math.hypot(dx, dy);
    if (mag < 0.15) return;
    this.swingDir.x = dx / mag; this.swingDir.y = dy / mag;
    this.swinging = true; this.swingT = 0;
  }
  setBlock(b) { this.blocking = b; }

  jointLockCount() { return Object.keys(this.locked).length; }

  applyImpact(node, energy, hitVel) {
    if (this.severed[node]) return;
    this.energy[node] += energy;
    // knockback
    const p = this.nodes[node];
    if (p) {
      p.pp.x = p.p.x - hitVel.x * 0.04;
      p.pp.y = p.p.y - hitVel.y * 0.04;
      p.pp.z = p.p.z - hitVel.z * 0.04;
    }
    this.stagger = Math.max(this.stagger, DAMAGE.staggerTime);

    // lock the joint nearest the node
    const jointMap = { head: 'neck', handR: 'armR', handL: 'armL', footR: 'legR', footL: 'legL', chest: 'spine', hip: 'spine' };
    const jk = jointMap[node];
    if (this.energy[node] >= DAMAGE.lockEnergy && jk && !this.locked[jk]) {
      this.locked[jk] = true;
      if (this.bones[jk]) this.bones[jk].stiffness *= 0.25; // floppy
      // weaken upright muscle when core is hit
      if (jk === 'spine' && this.muscles.standChest) this.muscles.standChest.strength *= 0.4;
    }
    if (this.energy[node] >= DAMAGE.severEnergy && !this.severed[node]) {
      this.severed[node] = true;
      if (jk && this.bones[jk]) { this.world.removeStick(this.bones[jk]); this.bones[jk] = null; }
      this.onSever?.(node);
    }
    this.checkKO();
  }

  checkKO() {
    if (!this.alive) return;
    const locked = this.jointLockCount();
    const fatal = this.severed.head || this.severed.hip || this.severed.chest;
    if (locked >= DAMAGE.koLockedJoints || fatal) {
      this.alive = false;
      // disable upright muscles -> collapse
      for (const m of Object.values(this.muscles)) m.enabled = false;
      this.onKO?.();
    }
  }

  // ---- per-frame update ----
  update(dt, opponent) {
    if (this.stagger > 0) this.stagger -= dt;

    // movement: nudge feet & hip toward move direction when alive
    if (this.alive && this.stagger <= 0) {
      const speed = 7.5;
      const mvx = this.moveDir.x * speed, mvz = this.moveDir.z * speed;
      for (const f of ['footL', 'footR', 'hip']) {
        const p = this.nodes[f];
        if (p.onGround || f === 'hip') {
          p.pp.x -= mvx * dt * (f === 'hip' ? 0.6 : 1);
          p.pp.z -= mvz * dt * (f === 'hip' ? 0.6 : 1);
        }
      }
      // face the opponent
      if (opponent) {
        const dx = opponent.nodes.hip.p.x - this.nodes.hip.p.x;
        this.facing = dx >= 0 ? 1 : -1;
      } else if (Math.abs(this.moveDir.x) > 0.05) {
        this.facing = this.moveDir.x > 0 ? 1 : -1;
      }
    }

    this.updateSword(dt, opponent);
    this.syncVisuals();
  }

  updateSword(dt, opponent) {
    const hand = this.nodes.handR;
    const chest = this.nodes.chest.p;
    // default rest direction of blade (held up-ish, toward facing)
    let dir = { x: this.facing * 0.4, y: 0.9, z: 0 };

    // Aim magnitude tells us how hard the stick is pushed (0..~1.4).
    const aimMag = Math.hypot(this.aim.x, this.aim.y);

    if (this.alive && !this.locked.armR) {
      if (this.swinging) {
        this.swingT += dt * (3.2 * this.weapon.swing);
        const t = this.swingT;
        // sweep the sword along the swing direction
        const arc = Math.sin(Math.min(t, Math.PI));
        dir = {
          x: this.swingDir.x * 1.2 * arc + this.facing * 0.3,
          y: 0.4 + this.swingDir.y * 1.1 * arc,
          z: 0.25 * Math.cos(t),
        };
        // drive the hand toward swing for momentum
        const reach = 1.0;
        const tx = chest.x + dir.x * reach;
        const ty = chest.y + dir.y * reach;
        const tz = chest.z + dir.z * reach;
        hand.p.x += (tx - hand.p.x) * 0.5;
        hand.p.y += (ty - hand.p.y) * 0.5;
        hand.p.z += (tz - hand.p.z) * 0.5;
        if (t >= Math.PI) { this.swinging = false; this.swingT = 0; }
      } else if (aimMag > 0.12) {
        // ---- SINGLE-STICK AIM: blade points where the stick points ----
        // Map screen aim (x:right, y:up) onto the world. The blade rises
        // with up-aim and sweeps left/right toward the opponent's side.
        const ax = this.aim.x, ay = this.aim.y;
        dir = {
          x: ax * 1.2 + this.facing * 0.25,
          y: 0.45 + ay * 1.0,
          z: 0,
        };
        // The hand reaches out along the aim — the further you push the
        // stick, the more the arm extends (and the more the body leans).
        const reach = 0.55 + Math.min(aimMag, 1.2) * 0.7;
        const tx = chest.x + dir.x * reach;
        const ty = chest.y + dir.y * reach;
        hand.p.x += (tx - hand.p.x) * 0.35;
        hand.p.y += (ty - hand.p.y) * 0.35;
        // "Body follows the sword": pull the chest slightly toward the aim
        // so leaning the blade tilts the torso. Subtle so it stays stable.
        chest.x += ax * reach * 0.12 * (this.locked.spine ? 0.3 : 1);
      } else if (this.blocking) {
        dir = { x: this.facing * 0.2, y: 1.0, z: 0 };
        const tx = chest.x + dir.x, ty = chest.y + dir.y, tz = chest.z;
        hand.p.x += (tx - hand.p.x) * 0.3;
        hand.p.y += (ty - hand.p.y) * 0.3;
      }
    } else {
      // arm locked or dead: sword droops
      dir = { x: this.facing * 0.1, y: -0.3, z: 0 };
    }
    // normalize
    const mag = Math.hypot(dir.x, dir.y, dir.z) || 1;
    this.swordWorldDir = { x: dir.x / mag, y: dir.y / mag, z: dir.z / mag };
  }

  syncVisuals() {
    const n = this.nodes, P = this.parts;
    const V = THREE.Vector3;
    const head = n.head.p, chest = n.chest.p, hip = n.hip.p;
    const handL = n.handL.p, handR = n.handR.p, footL = n.footL.p, footR = n.footR.p;

    // ---- HEAD ----
    this.meshes.head.position.set(head.x, head.y, head.z);
    this.meshes.head.visible = !this.severed.head;
    // head tilts to look toward facing
    this.meshes.head.rotation.set(0, this.facing > 0 ? 0 : Math.PI, 0);
    // eyes on the front of the face
    const er = this.headR;
    this.eyeWL.position.set(-er * 0.42, er * 0.12, er * 0.78);
    this.eyeWR.position.set(er * 0.42, er * 0.12, er * 0.78);
    this.eyeL.position.set(0, 0, er * 0.22);
    this.eyeR.position.set(0, 0, er * 0.22);

    // ---- derive shoulders & hips offsets (breadth) in screen-flat plane ----
    const side = 0.34; // half shoulder width
    const shL = { x: chest.x - side, y: chest.y + 0.12, z: chest.z };
    const shR = { x: chest.x + side, y: chest.y + 0.12, z: chest.z };
    const hpL = { x: hip.x - 0.22, y: hip.y, z: hip.z };
    const hpR = { x: hip.x + 0.22, y: hip.y, z: hip.z };

    // ---- NECK / TORSO / PELVIS ----
    this._segment('neck', head, chest, 0.55, 1.0);
    // chest capsule sits at chest node, oriented along spine
    this._orientCapsule('chest', chest, hip, 0.0);
    P.shoulderL.position.set(shL.x, shL.y, shL.z);
    P.shoulderR.position.set(shR.x, shR.y, shR.z);
    P.hip.position.set(hip.x, hip.y, hip.z);

    // ---- ARMS: shoulder -> elbow -> hand (two segments with a bent elbow) ----
    this._limb('L', shL, handL, 'upperArmL', 'foreArmL', 'handL', n.handL, true);
    this._limb('R', shR, handR, 'upperArmR', 'foreArmR', 'handR', n.handR, true);

    // ---- LEGS: hip -> knee -> foot ----
    this._limb('legL', hpL, footL, 'thighL', 'shinL', 'footL', n.footL, false);
    this._limb('legR', hpR, footR, 'thighR', 'shinR', 'footR', n.footR, false);

    // boots point toward facing
    P.footL.rotation.set(0, this.facing > 0 ? 0 : Math.PI, 0);
    P.footR.rotation.set(0, this.facing > 0 ? 0 : Math.PI, 0);

    // ---- SWORD pinned to right hand ----
    const hp = handR, d = this.swordWorldDir;
    this.sword.position.set(hp.x, hp.y, hp.z);
    this.sword.visible = !this.severed.handR;
    const up = new V(0, 1, 0);
    const dir = new V(d.x, d.y, d.z).normalize();
    this.sword.quaternion.setFromUnitVectors(up, dir);
  }

  // Place & orient a cylinder part between two points, scaling its length.
  _segment(part, a, b, radiusScale = 1, lenScale = 1) {
    const t = this.parts[part]; if (!t) return;
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, mz = (a.z + b.z) / 2;
    t.position.set(mx, my, mz);
    const len = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z);
    t.scale.y = len * lenScale;
    const dir = new THREE.Vector3(b.x - a.x, b.y - a.y, b.z - a.z).normalize();
    t.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  }

  // Capsule orient (chest/hip) along a -> b axis, kept at `a`.
  _orientCapsule(part, a, b) {
    const t = this.parts[part]; if (!t) return;
    t.position.set(a.x, a.y, a.z);
    const dir = new THREE.Vector3(b.x - a.x, b.y - a.y, b.z - a.z).normalize();
    t.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  }

  // Two-segment limb with a procedurally-bent middle joint (elbow/knee).
  // root -> end are the anchor (shoulder/hip) and the verlet end node
  // (hand/foot). We synthesise a midpoint pushed outward to fake a joint.
  _limb(tag, root, end, upperPart, lowerPart, endPart, endNode, isArm) {
    const dx = end.x - root.x, dy = end.y - root.y, dz = end.z - root.z;
    const len = Math.hypot(dx, dy, dz) || 1e-6;
    // mid point pushed perpendicular so the elbow/knee bends naturally.
    const mid = { x: (root.x + end.x) / 2, y: (root.y + end.y) / 2, z: (root.z + end.z) / 2 };
    const bend = isArm ? 0.12 : 0.16;
    // arms bow outward/forward; legs bend forward (knee) downward-forward.
    if (isArm) {
      mid.z += len * bend * this.facing * 0.0 + len * bend; // forward bow
      mid.x += (tag === 'L' ? -1 : 1) * len * bend * 0.5;
    } else {
      mid.z += len * bend;           // knee forward
      mid.y += len * 0.04;           // slight lift so legs aren't ramrod
    }
    this._segment(upperPart, root, mid);
    this._segment(lowerPart, mid, end);
    // end cap (hand / foot)
    const cap = this.parts[endPart];
    if (cap) {
      cap.position.set(end.x, end.y, end.z);
      cap.visible = !this.severed[endPart];
    }
    // hide segments if that limb's end node was severed
    const sev = !!this.severed[endPart];
    this.parts[upperPart].visible = !sev;
    this.parts[lowerPart].visible = !sev;
  }

  // network: export minimal state
  serialize() {
    const out = {};
    for (const [k, p] of Object.entries(this.nodes)) {
      out[k] = [round(p.p.x), round(p.p.y), round(p.p.z)];
    }
    return { nodes: out, facing: this.facing, swinging: this.swinging,
      alive: this.alive, locked: Object.keys(this.locked), severed: Object.keys(this.severed) };
  }
  applyState(s) {
    if (!s || !s.nodes) return;
    for (const [k, v] of Object.entries(s.nodes)) {
      const p = this.nodes[k];
      if (p) {
        // smooth toward networked pos
        p.p.x += (v[0] - p.p.x) * 0.5;
        p.p.y += (v[1] - p.p.y) * 0.5;
        p.p.z += (v[2] - p.p.z) * 0.5;
        p.pp.x = p.p.x; p.pp.y = p.p.y; p.pp.z = p.p.z;
      }
    }
    this.facing = s.facing;
    this.alive = s.alive;
    this.swinging = !!s.swinging;
    for (const j of s.locked || []) this.locked[j] = true;
    for (const nse of s.severed || []) this.severed[nse] = true;
  }

  destroy() {
    this.scene.remove(this.group);
    for (const p of Object.values(this.nodes)) this.world.remove(p);
  }
}

function round(v) { return Math.round(v * 100) / 100; }
