// ============================================================
//  physics.js — Verlet integration physics engine
//  Original implementation for "Ragdoll Blade Arena".
//  Provides: Point masses, distance constraints (sticks),
//  angle/joint stiffness, broad-phase free world simulation.
// ============================================================

export const GRAVITY = 0.55;
export const FRICTION = 0.985;        // air drag
export const GROUND_FRICTION = 0.72;  // horizontal damping when touching ground
export const BOUNCE = 0.30;           // restitution off the ground

/**
 * A single point mass simulated with Verlet integration.
 * Position is derived implicitly from (pos - prev).
 */
export class Point {
  constructor(x, y, opts = {}) {
    this.x = x;
    this.y = y;
    this.px = x - (opts.vx || 0);
    this.py = y - (opts.vy || 0);
    this.radius = opts.radius ?? 8;
    this.mass = opts.mass ?? 1;
    this.pinned = opts.pinned ?? false;
    this.damage = 0;          // visual cut indicator strength
    this.severed = false;     // becomes its own free body when cut
    this.group = opts.group ?? null; // which ragdoll owns it
    this.tag = opts.tag ?? 'limb';   // head, torso, hand, foot ...
  }

  /** Apply an impulse (instant velocity change). */
  addForce(fx, fy) {
    this.px -= fx / this.mass;
    this.py -= fy / this.mass;
  }

  setVelocity(vx, vy) {
    this.px = this.x - vx;
    this.py = this.y - vy;
  }

  get vx() { return this.x - this.px; }
  get vy() { return this.y - this.py; }
}

/**
 * Distance constraint between two points ("bone" / "stick").
 * Keeps points at a target rest length with adjustable stiffness.
 * Can be broken (severed) when stress exceeds its threshold or on a slice.
 */
export class Stick {
  constructor(a, b, opts = {}) {
    this.a = a;
    this.b = b;
    const dx = b.x - a.x, dy = b.y - a.y;
    this.length = opts.length ?? Math.hypot(dx, dy);
    this.stiffness = opts.stiffness ?? 1;
    this.broken = false;
    this.breakable = opts.breakable ?? true;
    this.visible = opts.visible ?? true;
    this.thickness = opts.thickness ?? 10;
    this.color = opts.color ?? null;
    this.tag = opts.tag ?? 'bone';
  }

  solve() {
    if (this.broken) return;
    const a = this.a, b = this.b;
    let dx = b.x - a.x;
    let dy = b.y - a.y;
    let dist = Math.hypot(dx, dy) || 0.0001;
    const diff = (this.length - dist) / dist;
    const offset = diff * 0.5 * this.stiffness;
    const ox = dx * offset;
    const oy = dy * offset;
    const im1 = a.pinned ? 0 : 1 / a.mass;
    const im2 = b.pinned ? 0 : 1 / b.mass;
    const sum = im1 + im2 || 1;
    a.x -= ox * (im1 / sum) * 2;
    a.y -= oy * (im1 / sum) * 2;
    b.x += ox * (im2 / sum) * 2;
    b.y += oy * (im2 / sum) * 2;
  }
}

/**
 * Soft angular constraint that nudges a joint toward a rest angle.
 * Used to give the ragdoll "muscle" so the active controller can
 * pose it, and so severed joints go limp.
 */
export class AngleConstraint {
  constructor(pivot, a, b, restAngle, stiffness = 0.08) {
    this.pivot = pivot;
    this.a = a;
    this.b = b;
    this.restAngle = restAngle;
    this.stiffness = stiffness;
    this.enabled = true;
  }

  solve() {
    if (!this.enabled) return;
    const { pivot, a, b } = this;
    const a1 = Math.atan2(a.y - pivot.y, a.x - pivot.x);
    const a2 = Math.atan2(b.y - pivot.y, b.x - pivot.x);
    let diff = a2 - a1 - this.restAngle;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    const correction = diff * this.stiffness;
    rotatePointAround(b, pivot, -correction * 0.5);
    rotatePointAround(a, pivot, correction * 0.5);
  }
}

export function rotatePointAround(p, origin, angle) {
  if (p.pinned) return;
  const s = Math.sin(angle), c = Math.cos(angle);
  const dx = p.x - origin.x, dy = p.y - origin.y;
  p.x = origin.x + dx * c - dy * s;
  p.y = origin.y + dx * s + dy * c;
}

/**
 * The physics world: integrates points, solves constraints,
 * resolves ground/wall collisions, and exposes hooks for slicing.
 */
export class World {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.groundY = height - 70;
    this.points = [];
    this.sticks = [];
    this.angles = [];
    this.iterations = 6;
    this.walls = { left: 30, right: width - 30 };
  }

  resize(w, h) {
    this.width = w;
    this.height = h;
    this.groundY = h - 70;
    this.walls.right = w - 30;
  }

  addPoint(p) { this.points.push(p); return p; }
  addStick(s) { this.sticks.push(s); return s; }
  addAngle(a) { this.angles.push(a); return a; }

  removePoint(p) {
    const i = this.points.indexOf(p);
    if (i >= 0) this.points.splice(i, 1);
  }

  step(dt = 1) {
    // 1. integrate
    for (const p of this.points) {
      if (p.pinned) continue;
      const vx = (p.x - p.px) * FRICTION;
      const vy = (p.y - p.py) * FRICTION;
      p.px = p.x;
      p.py = p.y;
      p.x += vx;
      p.y += vy + GRAVITY;
    }

    // 2. solve constraints (relaxation)
    for (let i = 0; i < this.iterations; i++) {
      for (const s of this.sticks) s.solve();
      for (const a of this.angles) a.solve();
      this.collide();
    }
  }

  collide() {
    const g = this.groundY;
    for (const p of this.points) {
      if (p.pinned) continue;
      // ground
      if (p.y + p.radius > g) {
        const vx = p.x - p.px;
        const vy = p.y - p.py;
        p.y = g - p.radius;
        p.py = p.y + vy * BOUNCE;
        // horizontal ground friction
        p.px = p.x - vx * GROUND_FRICTION;
      }
      // walls
      if (p.x - p.radius < this.walls.left) {
        const vx = p.x - p.px;
        p.x = this.walls.left + p.radius;
        p.px = p.x + vx * BOUNCE;
      } else if (p.x + p.radius > this.walls.right) {
        const vx = p.x - p.px;
        p.x = this.walls.right - p.radius;
        p.px = p.x + vx * BOUNCE;
      }
      // ceiling
      if (p.y - p.radius < 0) {
        const vy = p.y - p.py;
        p.y = p.radius;
        p.py = p.y + vy * BOUNCE;
      }
    }
  }
}

/** Segment intersection test — used by the blade to slice bones. */
export function segIntersect(p1, p2, p3, p4) {
  const d = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
  if (d === 0) return null;
  const ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / d;
  const ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / d;
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return null;
  return { x: p1.x + ua * (p2.x - p1.x), y: p1.y + ua * (p2.y - p1.y), t: ua };
}
