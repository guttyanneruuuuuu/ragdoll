// ============================================================
// AI opponent controller — drives a Ragdoll using a profile.
// Strategy: approach, maintain spacing, swing at openings, block,
// target damaged/locked limbs to disarm or finish.
// ============================================================
import { AI_PROFILES, PART } from './config.js';

export class AIController {
  constructor(ragdoll, difficulty = 'normal') {
    this.doll = ragdoll;
    this.p = AI_PROFILES[difficulty] || AI_PROFILES.normal;
    this.swingTimer = 0;
    this.reactTimer = 0;
    this.decision = 'approach';
    this.blockTimer = 0;
  }

  update(dt, opponent) {
    const me = this.doll;
    if (me.dead || !opponent) return;

    this.swingTimer -= dt;
    this.reactTimer -= dt;
    this.blockTimer -= dt;

    const myC = me.getCenter();
    const opC = opponent.getCenter();
    const dx = opC.x - myC.x;
    const dist = Math.abs(dx);
    const reach = me.weapon.bladeLen + 1.1;

    // ----- reaction-gated decisions -----
    if (this.reactTimer <= 0) {
      this.reactTimer = this.p.react * (0.6 + Math.random() * 0.8);
      this._decide(dist, reach, opponent);
    }

    // ----- movement -----
    if (this.decision === 'approach') {
      me.moveDir = Math.sign(dx) * this.p.aggression;
    } else if (this.decision === 'retreat') {
      me.moveDir = -Math.sign(dx) * 0.8;
    } else if (this.decision === 'circle') {
      me.moveDir = Math.sign(dx) * 0.3;
    } else {
      me.moveDir = 0;
    }

    // jump occasionally / dodge
    if (this.decision === 'dodge' && me.grounded && Math.random() < 0.5) {
      me.wantJump = true;
    }

    // ----- aim sword toward opponent torso/head -----
    const aimDy = (opC.y - myC.y);
    me.setAim(Math.atan2(aimDy * 0.5 + 0.2, Math.sign(dx)));

    // ----- attack -----
    if (dist < reach && this.swingTimer <= 0 && me.swingPhase <= 0) {
      if (Math.random() < this.p.aggression) {
        // accuracy → aim at vulnerable target
        let ty = 0.2;
        if (Math.random() < this.p.accuracy) {
          // aim higher to go for head/torso kill
          ty = 0.5 + Math.random() * 0.4;
        }
        me.startSwing(Math.sign(dx), ty);
        this.swingTimer = this.p.swingCooldown * (0.7 + Math.random() * 0.6);
      }
    }

    // ----- blocking -----
    if (this.blockTimer > 0) {
      me.blocking = true;
    } else {
      me.blocking = false;
      // start blocking if opponent is swinging and within range
      if (opponent.swingPhase > 0 && dist < reach + 0.6 && Math.random() < this.p.blockChance) {
        this.blockTimer = 0.4;
      }
    }
  }

  _decide(dist, reach, opponent) {
    const r = Math.random();
    if (opponent.swingPhase > 0 && dist < reach + 0.5) {
      this.decision = r < 0.5 ? 'dodge' : 'retreat';
    } else if (dist > reach + 1.5) {
      this.decision = 'approach';
    } else if (dist < reach - 0.5) {
      this.decision = r < 0.4 ? 'retreat' : 'circle';
    } else {
      this.decision = r < this.p.aggression ? 'approach' : 'circle';
    }
  }
}
