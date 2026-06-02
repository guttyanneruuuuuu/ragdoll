// ============================================================
//  game.js — Game manager / orchestrator
//  Sets up the world, spawns fighters, runs the loop, manages
//  game modes (AI / 2P local), rounds, scoring and win states.
// ============================================================

import { World } from './physics.js';
import { Ragdoll } from './ragdoll.js';
import { CombatSystem } from './combat.js';
import { Renderer, ARENAS } from './render.js';
import { FighterAI } from './ai.js';
import { InputManager } from './input.js';
import { SoundFX } from './audio.js';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new Renderer(canvas);
    this.input = new InputManager();
    this.sfx = new SoundFX();
    this.world = null;
    this.combat = null;
    this.fighters = [];
    this.ais = [];
    this.mode = 'ai';           // 'ai' | 'versus'
    this.difficulty = 'normal';
    this.arenaKey = 'grass';
    this.running = false;
    this.t = 0;
    this.scores = [0, 0];
    this.roundOver = false;
    this.roundOverTimer = 0;
    this.winner = -1;
    this.onRoundEnd = null;     // callback(winnerIndex)
    this.onScore = null;        // callback(scores)
    this._loop = this._loop.bind(this);
    this._resize();
    window.addEventListener('resize', () => this._resize());
  }

  _resize() {
    const rect = this.canvas.getBoundingClientRect();
    const w = Math.max(640, rect.width || window.innerWidth);
    const h = Math.max(360, rect.height || window.innerHeight);
    this.renderer.resize(w, h);
    if (this.world) this.world.resize(w, h);
  }

  /** Start a new match with the given config. */
  start(opts = {}) {
    this.mode = opts.mode || this.mode;
    this.difficulty = opts.difficulty || this.difficulty;
    this.arenaKey = opts.arena || this.arenaKey;
    this.bestOf = opts.bestOf || 3;
    this.scores = [0, 0];
    this.names = opts.names || (this.mode === 'ai' ? ['You', 'CPU'] : ['Player 1', 'Player 2']);
    this.renderer.setArena(this.arenaKey);
    this._newRound();
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this._loop);
    }
  }

  _newRound() {
    const W = this.renderer.W, H = this.renderer.H;
    this.world = new World(W, H);
    this.combat = new CombatSystem(this.world);
    this.combat.onHit = (att, vic, tag) => {
      this.sfx.slice();
    };
    const groundY = this.world.groundY;
    const spawnY = groundY - 60;

    const p1 = new Ragdoll(this.world, W * 0.32, spawnY, {
      color: '#f2c14e', facing: 1, name: this.names[0]
    });
    const p2 = new Ragdoll(this.world, W * 0.68, spawnY, {
      color: '#5ea2e0', facing: -1, name: this.names[1]
    });
    this.fighters = [p1, p2];

    this.ais = [];
    if (this.mode === 'ai') {
      this.ais.push({ index: 1, ai: new FighterAI(p2, p1, { difficulty: this.difficulty }) });
    }

    this.roundOver = false;
    this.winner = -1;
    this.roundOverTimer = 0;
  }

  nextRoundOrEnd() {
    const needed = Math.ceil(this.bestOf / 2);
    if (this.scores[0] >= needed || this.scores[1] >= needed) {
      // match over
      const mwinner = this.scores[0] > this.scores[1] ? 0 : 1;
      if (this.onRoundEnd) this.onRoundEnd(mwinner, true);
    } else {
      this._newRound();
    }
  }

  _applyIntents() {
    for (let i = 0; i < this.fighters.length; i++) {
      const f = this.fighters[i];
      if (f.dead) continue;
      // AI controls slot if applicable
      const ai = this.ais.find(a => a.index === i);
      if (ai) continue; // handled separately
      const it = this.input.intent(i);
      if (it.left) f.move(-1, 1);
      if (it.right) f.move(1, 1);
      if (it.jump) f.jump();
      if (it.swing) {
        if (f.swingTimer === 0) this.sfx.swing();
        f.swing();
      }
    }
    // AI
    for (const a of this.ais) {
      const before = this.fighters[a.index].swingTimer;
      a.ai.update();
      if (before === 0 && this.fighters[a.index].swingTimer > 0) this.sfx.swing();
    }
  }

  _loop() {
    if (!this.running) return;
    this.t++;

    const steps = (this.combat && this.combat.slowmo > 0) ? 1 : 1;

    // input & control
    if (!this.roundOver) {
      this._applyIntents();
      for (const f of this.fighters) f.control();
    }

    // physics
    const subSteps = (this.combat && this.combat.slowmo > 0) ? 1 : 1;
    this.world.step();

    // combat resolution
    this.combat.update(this.fighters);

    // death / round end check
    if (!this.roundOver) {
      const alive = this.fighters.filter(f => !f.dead);
      if (alive.length <= 1) {
        this.roundOver = true;
        this.roundOverTimer = 120;
        this.winner = alive.length === 1 ? this.fighters.indexOf(alive[0]) : -1;
        if (this.winner >= 0) {
          this.scores[this.winner]++;
          this.sfx.win();
          if (this.onScore) this.onScore([...this.scores], this.winner);
        }
      }
    } else {
      this.roundOverTimer--;
      if (this.roundOverTimer <= 0) {
        this.nextRoundOrEnd();
      }
    }

    this._render();
    requestAnimationFrame(this._loop);
  }

  _render() {
    const r = this.renderer;
    r.clear(this.combat.shake);
    r.drawArena(this.world, this.t);
    for (const f of this.fighters) r.drawRagdoll(f);
    r.drawParticles(this.combat);
    r.restore();
  }

  stop() {
    this.running = false;
  }

  static arenaList() {
    return Object.keys(ARENAS).map(k => ({ key: k, name: ARENAS[k].name }));
  }
}
