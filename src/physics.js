// ============================================================
// Lightweight Verlet physics — pure JS, no WASM, instant load.
//
// Particles integrate with Verlet; rigid bones are distance
// constraints relaxed over several iterations. This gives a
// believable "ragdoll" feel that is cheap, deterministic and
// trivially network-syncable (just send particle positions).
// ============================================================
import { WORLD } from './config.js';

const V = () => ({ x: 0, y: 0, z: 0 });

export class Particle {
  constructor(x, y, z, radius = 0.3, mass = 1) {
    this.p = { x, y, z };          // current position
    this.pp = { x, y, z };         // previous position (verlet)
    this.acc = V();
    this.radius = radius;
    this.invMass = mass > 0 ? 1 / mass : 0;
    this.pinned = false;
    this.onGround = false;
  }
  addForce(fx, fy, fz) {
    this.acc.x += fx * this.invMass;
    this.acc.y += fy * this.invMass;
    this.acc.z += fz * this.invMass;
  }
  setPos(x, y, z) { this.p.x = x; this.p.y = y; this.p.z = z; this.pp.x = x; this.pp.y = y; this.pp.z = z; }
  vel() { return { x: this.p.x - this.pp.x, y: this.p.y - this.pp.y, z: this.p.z - this.pp.z }; }
}

// Distance constraint (a "bone"). stiffness 0..1
export class Stick {
  constructor(a, b, length = null, stiffness = 1) {
    this.a = a; this.b = b;
    this.len = length ?? dist(a.p, b.p);
    this.stiffness = stiffness;
  }
  solve() {
    const a = this.a, b = this.b;
    let dx = b.p.x - a.p.x, dy = b.p.y - a.p.y, dz = b.p.z - a.p.z;
    let d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
    const diff = ((d - this.len) / d) * this.stiffness;
    const im = a.invMass + b.invMass; if (im === 0) return;
    const sa = a.invMass / im, sb = b.invMass / im;
    dx *= diff; dy *= diff; dz *= diff;
    a.p.x += dx * sa; a.p.y += dy * sa; a.p.z += dz * sa;
    b.p.x -= dx * sb; b.p.y -= dy * sb; b.p.z -= dz * sb;
  }
}

// Angular spring that nudges a node toward a target offset from
// an anchor — used as "active ragdoll muscles" to stand upright
// and to drive sword swings.
export class Muscle {
  constructor(node, anchor, offset, strength = 0.5) {
    this.node = node; this.anchor = anchor;
    this.offset = offset; this.strength = strength;
    this.enabled = true;
  }
  solve() {
    if (!this.enabled) return;
    const tx = this.anchor.p.x + this.offset.x;
    const ty = this.anchor.p.y + this.offset.y;
    const tz = this.anchor.p.z + this.offset.z;
    this.node.p.x += (tx - this.node.p.x) * this.strength;
    this.node.p.y += (ty - this.node.p.y) * this.strength;
    this.node.p.z += (tz - this.node.p.z) * this.strength;
  }
}

export function dist(a, b) {
  const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export class PhysicsWorld {
  constructor() {
    this.particles = [];
    this.sticks = [];
    this.muscles = [];
    this.ground = WORLD.ground;
    this.arenaRadius = Infinity; // set per-stage; Infinity = no ring-out floor limit
    this.cliffEdge = false;
  }
  add(p) { this.particles.push(p); return p; }
  addStick(s) { this.sticks.push(s); return s; }
  addMuscle(m) { this.muscles.push(m); return m; }

  remove(particle) {
    this.particles = this.particles.filter(p => p !== particle);
    this.sticks = this.sticks.filter(s => s.a !== particle && s.b !== particle);
    this.muscles = this.muscles.filter(m => m.node !== particle && m.anchor !== particle);
  }
  removeStick(s) { this.sticks = this.sticks.filter(x => x !== s); }

  step(dt) {
    const sub = WORLD.substeps;
    const h = dt / sub;
    for (let s = 0; s < sub; s++) this.substep(h);
  }

  substep(h) {
    const g = WORLD.gravity;
    const damp = WORLD.damping;
    // integrate
    for (const p of this.particles) {
      if (p.pinned) { p.acc.x = p.acc.y = p.acc.z = 0; continue; }
      p.addForce(0, g, 0);
      const vx = (p.p.x - p.pp.x) * damp;
      const vy = (p.p.y - p.pp.y) * damp;
      const vz = (p.p.z - p.pp.z) * damp;
      p.pp.x = p.p.x; p.pp.y = p.p.y; p.pp.z = p.p.z;
      p.p.x += vx + p.acc.x * h * h;
      p.p.y += vy + p.acc.y * h * h;
      p.p.z += vz + p.acc.z * h * h;
      p.acc.x = p.acc.y = p.acc.z = 0;
    }
    // muscles (active ragdoll)
    for (const m of this.muscles) m.solve();
    // constraints
    for (let it = 0; it < WORLD.constraintIters; it++) {
      for (const s of this.sticks) s.solve();
      this.collisions();
    }
  }

  collisions() {
    const r2 = this.arenaRadius;
    for (const p of this.particles) {
      p.onGround = false;
      // ground plane
      if (p.p.y - p.radius < this.ground) {
        // off the ring (ring-out): let them fall through floor
        const distXZ = Math.sqrt(p.p.x * p.p.x + p.p.z * p.p.z);
        const inside = !isFinite(r2) || distXZ < r2;
        const overCliff = this.cliffEdge && Math.abs(p.p.z) > 6.5;
        if (inside && !overCliff) {
          p.p.y = this.ground + p.radius;
          // friction
          const f = WORLD.groundFriction;
          p.pp.x = p.p.x - (p.p.x - p.pp.x) * f;
          p.pp.z = p.p.z - (p.p.z - p.pp.z) * f;
          // restitution-ish: kill downward velocity
          if (p.pp.y < p.p.y) p.pp.y = p.p.y;
          p.onGround = true;
        }
      }
    }
  }
}
