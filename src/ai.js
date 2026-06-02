// ============================================================
// AI opponent — drives a Fighter using simple but lively logic:
// approach, circle, attack windows, dodge on incoming swings.
// ============================================================
import { AI_PROFILES } from './config.js';

export class AIController {
  constructor(fighter, profile = 'normal') {
    this.f = fighter;
    this.prof = AI_PROFILES[profile] ?? AI_PROFILES.normal;
    this.timer = 0;
    this.state = 'approach';
    this.decisionT = 0;
  }

  update(dt, target) {
    const f = this.f;
    if (!f.alive || !target) { f.setMove(0, 0); return; }
    this.decisionT -= dt;

    const fp = f.nodes.hip.p, tp = target.nodes.hip.p;
    const dx = tp.x - fp.x, dz = tp.z - fp.z;
    const distXZ = Math.hypot(dx, dz);
    const nx = dx / (distXZ || 1), nz = dz / (distXZ || 1);
    const reach = f.weapon.reach + 1.4;

    // react to opponent swinging -> dodge
    if (target.swinging && distXZ < reach + 1 && Math.random() < this.prof.dodge * dt * 12) {
      // strafe sideways
      f.setMove(-nz, nx);
      if (Math.random() < this.prof.dodge) f.setBlock(true);
      return;
    }
    f.setBlock(false);

    if (this.decisionT <= 0) {
      this.decisionT = this.prof.react + Math.random() * 0.2;
      if (distXZ > reach) this.state = 'approach';
      else if (Math.random() < this.prof.aggression) this.state = 'attack';
      else this.state = 'circle';
    }

    if (this.state === 'approach') {
      f.setMove(nx, nz);
    } else if (this.state === 'circle') {
      f.setMove(-nz * 0.8, nx * 0.8);
    } else if (this.state === 'attack') {
      // move in slightly then swing
      f.setMove(nx * 0.4, nz * 0.4);
      if (distXZ < reach && !f.swinging && Math.random() < this.prof.aggression * dt * 14) {
        // swing toward target (downward diagonal)
        const sdx = nx * this.prof.swingPower;
        const sdy = -0.4 + Math.random() * 0.4;
        f.setSwing(sdx, sdy < 0 ? sdy : -0.6);
      }
    }
  }
}
