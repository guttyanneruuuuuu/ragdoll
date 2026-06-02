// ============================================================
//  ai.js — Combat AI for the ragdoll fighter
//  A finite-state behaviour: approach, strike, retreat, dodge.
//  Difficulty scales reaction speed, aggression and accuracy.
//  Entirely original logic.
// ============================================================

export class FighterAI {
  /**
   * @param {Ragdoll} self
   * @param {Ragdoll} target
   * @param {object} opts { difficulty: 'easy'|'normal'|'hard' }
   */
  constructor(self, target, opts = {}) {
    this.self = self;
    this.target = target;
    this.diff = opts.difficulty || 'normal';
    this.state = 'approach';
    this.timer = 0;
    this.decisionTimer = 0;

    const cfg = {
      easy:   { reaction: 38, aggression: 0.35, range: 95,  retreat: 70, jumpChance: 0.005, mistake: 0.45 },
      normal: { reaction: 22, aggression: 0.6,  range: 105, retreat: 60, jumpChance: 0.012, mistake: 0.2 },
      hard:   { reaction: 10, aggression: 0.85, range: 118, retreat: 50, jumpChance: 0.02,  mistake: 0.05 },
    }[this.diff];
    this.cfg = cfg;
  }

  update() {
    const s = this.self, t = this.target;
    if (s.dead) return;
    if (t.dead) { this.state = 'idle'; return; }

    const dx = t.cx - s.cx;
    const dist = Math.abs(dx);
    const dir = Math.sign(dx) || 1;

    this.decisionTimer--;

    // Face & move toward target generally
    if (this.decisionTimer <= 0) {
      this.decisionTimer = this.cfg.reaction + Math.random() * 10;
      // pick a state
      if (dist < this.cfg.retreat && Math.random() < 0.4) {
        this.state = 'retreat';
        this.timer = 18 + Math.random() * 14;
      } else if (dist < this.cfg.range) {
        this.state = (Math.random() < this.cfg.aggression) ? 'strike' : 'approach';
      } else {
        this.state = 'approach';
      }
    }

    switch (this.state) {
      case 'approach':
        s.move(dir, 1);
        // occasional hop to look lively / cross gaps
        if (Math.random() < this.cfg.jumpChance) s.jump();
        if (dist < this.cfg.range && Math.random() < this.cfg.aggression * 0.3) {
          this.state = 'strike';
        }
        break;

      case 'strike':
        s.facing = dir;
        // small step in then swing
        if (dist > this.cfg.range * 0.7) s.move(dir, 1);
        if (Math.random() > this.cfg.mistake) {
          s.swing();
        }
        this.state = 'approach';
        break;

      case 'retreat':
        s.move(-dir, 1);
        // counter-swing while backing off
        if (dist < 90 && Math.random() < 0.2) s.swing();
        this.timer--;
        if (this.timer <= 0) this.state = 'approach';
        break;

      case 'idle':
      default:
        // victory shuffle
        if (Math.random() < 0.02) s.jump();
        break;
    }

    // Defensive: if a blade is incoming and very close, sometimes jump/dodge
    if (!s.dead && dist < 70 && t.bladeIsActive && t.bladeIsActive()) {
      if (Math.random() < this.cfg.aggression * 0.15) s.jump();
    }
  }
}
