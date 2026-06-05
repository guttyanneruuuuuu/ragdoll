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

  // ---- build three.js visuals ----
  buildVisuals() {
    this.group = new THREE.Group();
    this.scene.add(this.group);
    const mat = new THREE.MeshStandardMaterial({
      color: this.color, roughness: 0.25, metalness: 0.1,
      emissive: new THREE.Color(this.color).multiplyScalar(0.06),
    });
    this.mat = mat;

    this.meshes = {};
    const sphere = (name, r) => {
      let geo;
      if (name === 'chest' || name === 'hip') {
        geo = new THREE.CapsuleGeometry(r * 0.8, r * 1.2, 4, 12);
      } else {
        geo = new THREE.SphereGeometry(r, 18, 14);
      }
      const m = new THREE.Mesh(geo, mat);
      m.castShadow = true; this.group.add(m); this.meshes[name] = m;
    };
    sphere('head', BODY.head * 0.85); // 頭を少し小さくして等身を上げる
    sphere('chest', BODY.chest);
    sphere('hip', BODY.hip);
    sphere('handL', BODY.hand * 0.7);
    sphere('handR', BODY.hand * 0.7);
    sphere('footL', BODY.foot * 0.8);
    sphere('footR', BODY.foot * 0.8);

    // face on head (eyes) — smaller and more focused
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const eyeGeo = new THREE.SphereGeometry(0.06, 8, 8);
    this.eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    this.eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    const eyeW = new THREE.MeshBasicMaterial({ color: 0xf0f0f0 });
    this.eyeWL = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), eyeW);
    this.eyeWR = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), eyeW);
    this.meshes.head.add(this.eyeWL, this.eyeWR);
    this.eyeWL.add(this.eyeL); this.eyeWR.add(this.eyeR);

    // limb tubes (cylinders connecting nodes)
    this.tubes = {};
    const tubeMat = new THREE.MeshStandardMaterial({ color: this.color, roughness: 0.3, metalness: 0.1 });
    this.tubeMat = tubeMat;
    const tube = (key, rad) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(rad, rad, 1, 12), tubeMat);
      m.castShadow = true; this.group.add(m); this.tubes[key] = m;
    };
    tube('neck', 0.12); tube('spine', 0.28);
    tube('armL', 0.12); tube('armR', 0.12);
    tube('legL', 0.16); tube('legR', 0.16);

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
    const m = this.meshes, n = this.nodes;
    for (const key of Object.keys(m)) {
      if (n[key]) {
        m[key].position.set(n[key].p.x, n[key].p.y, n[key].p.z);
        m[key].visible = !this.severed[key];
      }
    }
    // eyes face the way we look
    const eo = 0.18, ez = BODY.head * 0.85 * this.facing;
    this.eyeWL.position.set(-eo, 0.08, Math.abs(ez));
    this.eyeWR.position.set(eo, 0.08, Math.abs(ez));
    this.eyeWL.position.x *= this.facing; this.eyeWR.position.x *= this.facing;
    this.eyeL.position.set(0, 0, 0.08 * this.facing);
    this.eyeR.position.set(0, 0, 0.08 * this.facing);

    // tubes between nodes
    this.setTube('neck', n.head, n.chest);
    this.setTube('spine', n.chest, n.hip);
    this.setTube('armL', n.chest, n.handL);
    this.setTube('armR', n.chest, n.handR);
    this.setTube('legL', n.hip, n.footL);
    this.setTube('legR', n.hip, n.footR);

    // sword pinned to right hand, oriented along swordWorldDir
    const hp = n.handR.p, d = this.swordWorldDir;
    this.sword.position.set(hp.x, hp.y, hp.z);
    this.sword.visible = !this.severed.handR;
    const up = new THREE.Vector3(0, 1, 0);
    const dir = new THREE.Vector3(d.x, d.y, d.z).normalize();
    this.sword.quaternion.setFromUnitVectors(up, dir);
  }

  setTube(key, a, b) {
    const t = this.tubes[key]; if (!t) return;
    const ax = a.p.x, ay = a.p.y, az = a.p.z;
    const bx = b.p.x, by = b.p.y, bz = b.p.z;
    const mx = (ax + bx) / 2, my = (ay + by) / 2, mz = (az + bz) / 2;
    t.position.set(mx, my, mz);
    const len = Math.hypot(bx - ax, by - ay, bz - az);
    t.scale.y = len;
    const up = new THREE.Vector3(0, 1, 0);
    const dir = new THREE.Vector3(bx - ax, by - ay, bz - az).normalize();
    t.quaternion.setFromUnitVectors(up, dir);
    const sev = (key === 'neck' && this.severed.head) ||
                (key === 'armR' && this.severed.handR) ||
                (key === 'armL' && this.severed.handL);
    t.visible = !sev;
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
