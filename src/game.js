// ============================================================
// Game — orchestrates physics world, fighters, camera, loop,
// match flow (rounds), and mode (AI / online / practice).
// ============================================================
import * as THREE from 'three';
import { PHYS, FIGHTER_COLORS, MATCH, PART } from './config.js';
import { Ragdoll } from './ragdoll.js';
import { Arena } from './arena.js';
import { Effects } from './effects.js';
import { CombatSystem } from './combat.js';
import { AIController } from './ai.js';
import { audio } from './audio.js';

export class Game {
  constructor(RAPIER, canvas, ui) {
    this.RAPIER = RAPIER;
    this.canvas = canvas;
    this.ui = ui;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
    this.camera.position.set(0, 4.5, 13);
    this.camera.lookAt(0, 2.2, 0);
    this._camBase = this.camera.position.clone();

    this.effects = new Effects(this.scene, this.camera);
    this.combat = new CombatSystem(this.effects, audio);

    this.running = false;
    this.paused = false;
    this.mode = 'ai';
    this._acc = 0;
    this._last = performance.now();

    this.fighters = [];
    this.scores = [0, 0];
    this.roundActive = false;
    this.matchOver = false;

    this._resize();
    window.addEventListener('resize', () => this._resize());

    this.combat.onHit = (atk, def, part, res) => this._onHit(atk, def, part, res);

    // network hook (set by NetGame)
    this.net = null;
    this.localPlayerIndex = 0;
  }

  _resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // ----------------------------------------------------------
  setupWorld(stageKey) {
    if (this.world) this._teardownWorld();
    const g = { x: 0, y: PHYS.GRAVITY, z: 0 };
    this.world = new this.RAPIER.World(g);
    this.world.integrationParameters.dt = PHYS.TIMESTEP;
    this.arena = new Arena(this.RAPIER, this.world, this.scene, stageKey);
    this.eventQueue = new this.RAPIER.EventQueue(true);
  }

  _teardownWorld() {
    for (const f of this.fighters) f.doll.destroy();
    this.fighters = [];
    this.arena?.destroy();
    this.combat.reset();
    if (this.world) { this.world.free(); this.world = null; }
  }

  // ----------------------------------------------------------
  startMatch({ mode, difficulty, weapons, stage, names, localIndex = 0 }) {
    this.mode = mode;
    this.localPlayerIndex = localIndex;
    this.scores = [0, 0];
    this.matchOver = false;
    this.names = names || ['YOU', mode === 'ai' ? 'CPU' : 'P2'];
    this.difficulty = difficulty || 'normal';
    this.weapons = weapons || ['katana', 'katana'];
    this.stage = stage || 'arena';

    this.setupWorld(this.stage);
    this.ui.showHUD(this.names, this.stage);
    this.running = true;
    this.paused = false;
    audio.startMusic();

    this._startRound();
    this._last = performance.now();
    if (!this._raf) this._loop();
  }

  _spawnFighters() {
    const p1 = new Ragdoll(this.RAPIER, this.world, this.scene, {
      id: 'p1', color: FIGHTER_COLORS.p1, x: -3, facing: 1, weapon: this.weapons[0],
    });
    const p2 = new Ragdoll(this.RAPIER, this.world, this.scene, {
      id: 'p2', color: FIGHTER_COLORS.p2, x: 3, facing: -1, weapon: this.weapons[1],
    });
    this.fighters = [
      { doll: p1, ai: null },
      { doll: p2, ai: null },
    ];

    if (this.mode === 'ai') {
      this.fighters[1].ai = new AIController(p2, this.difficulty);
    } else if (this.mode === 'online') {
      // remote fighter is the non-local one
      const remoteIdx = this.localPlayerIndex === 0 ? 1 : 0;
      this.fighters[remoteIdx].doll.makeRemote();
      this.fighters[remoteIdx].remote = true;
    }
  }

  _startRound() {
    this.roundActive = false;
    // clear existing
    for (const f of this.fighters) f.doll.destroy();
    this.fighters = [];
    this.combat.reset();
    this._spawnFighters();

    this.roundTime = MATCH.ROUND_TIME;
    this.ui.updateRoundPips(this.scores, MATCH.ROUNDS_TO_WIN);
    this.ui.banner('ROUND ' + (this.scores[0] + this.scores[1] + 1), 'round');

    // countdown then go
    let n = 3;
    const tick = () => {
      if (!this.running) return;
      if (n > 0) { audio.countdown(n); this.ui.banner(String(n), 'count'); n--; setTimeout(tick, 700); }
      else { audio.countdown(0); this.ui.banner('FIGHT!', 'fight'); this.roundActive = true; }
    };
    setTimeout(tick, 900);
  }

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const now = performance.now();
    let dt = (now - this._last) / 1000;
    this._last = now;
    if (dt > 0.05) dt = 0.05;

    if (this.running && !this.paused) {
      if (!this.effects.isHitstopped()) {
        this._step(dt);
      } else {
        // during hitstop still render & update particles slowly
        this.effects.update(dt * 0.15);
      }
    }
    this._render(dt);
  }

  _step(dt) {
    this._acc += dt;
    const localFighter = this.fighters[this.localPlayerIndex];

    // apply local input
    if (this.roundActive && localFighter && !localFighter.doll.dead) {
      const inp = this.ui.input.poll();
      const d = localFighter.doll;
      d.moveDir = inp.moveX;
      if (inp.jump) d.wantJump = true;
      d.blocking = inp.block;
      if (inp.aimAngle !== undefined) d.setAim(inp.aimAngle);
      if (inp.swing) {
        if (d.startSwing(inp.swingDir.x, inp.swingDir.y)) audio.swing();
        this.net?.sendSwing(inp.swingDir);
      }
      // send input to net
      this.net?.sendInput({ moveX: inp.moveX, jump: inp.jump, block: inp.block, aim: inp.aimAngle });
    }

    // AI
    if (this.roundActive) {
      for (let i = 0; i < this.fighters.length; i++) {
        const f = this.fighters[i];
        if (f.ai) f.ai.update(dt, this.fighters[1 - i].doll);
      }
    }

    // physics substeps
    const opp = (i) => this.fighters[1 - i].doll;
    for (const [i, f] of this.fighters.entries()) {
      if (!f.remote) f.doll.applyControl(dt, opp(i));
    }

    this.world.step(this.eventQueue);

    // sync visuals
    for (const f of this.fighters) f.doll.sync();

    // combat resolution (skip if remote authority? here host is authority)
    if (this.roundActive && (this.mode !== 'online' || this.net?.isHost)) {
      this.combat.update(this.fighters[0].doll, this.fighters[1].doll);
      this.combat.update(this.fighters[1].doll, this.fighters[0].doll);
    }

    // network broadcast
    this.net?.tick(dt, this.fighters);

    this.effects.update(dt);
    this._updateHUD();

    // round timer
    if (this.roundActive && MATCH.ROUND_TIME > 0) {
      this.roundTime -= dt;
      if (this.roundTime <= 0) this._endRoundByTime();
    }

    // check round end
    if (this.roundActive) {
      const dead0 = this.fighters[0].doll.dead;
      const dead1 = this.fighters[1].doll.dead;
      if (dead0 || dead1) this._endRound(dead1 ? 0 : 1);
    }
  }

  _endRound(winner) {
    if (!this.roundActive) return;
    this.roundActive = false;
    this.scores[winner]++;
    this.ui.updateRoundPips(this.scores, MATCH.ROUNDS_TO_WIN);
    this.effects.shake(0.5, 3);
    this.net?.sendRoundEnd?.(winner, this.scores);

    if (this.scores[winner] >= MATCH.ROUNDS_TO_WIN) {
      this._endMatch(winner);
    } else {
      this.ui.banner(this.names[winner] + ' WINS!', winner === this.localPlayerIndex ? 'fight' : 'count');
      setTimeout(() => { if (this.running) this._startRound(); }, 2200);
    }
  }

  _endRoundByTime() {
    // most-intact fighter wins
    const dmg = this.fighters.map(f => {
      let total = 0; for (const p in f.doll.damage) total += f.doll.damage[p];
      return total + f.doll.severed.size * 100;
    });
    const winner = dmg[0] <= dmg[1] ? 0 : 1;
    this._endRound(winner);
  }

  _endMatch(winner) {
    this.matchOver = true;
    this.roundActive = false;
    const won = winner === this.localPlayerIndex;
    if (won) audio.win(); else audio.lose();
    audio.stopMusic();
    setTimeout(() => this.ui.showResult(won, this.names[winner]), 1400);
  }

  _onHit(atk, def, part, res) {
    // damage flash if local player hit
    const localDoll = this.fighters[this.localPlayerIndex]?.doll;
    if (def === localDoll) this.ui.damageFlash();
    if (res.killed) this.ui.banner('FATAL!', 'fight');
  }

  _updateHUD() {
    for (let i = 0; i < 2; i++) {
      const d = this.fighters[i]?.doll;
      if (!d) continue;
      // health = inverse of damage on vital parts
      const vital = (d.damage[PART.HEAD] || 0) / 55 + (d.damage[PART.TORSO] || 0) / 130;
      const hp = Math.max(0, 1 - vital);
      this.ui.setHealth(i, hp);
      this.ui.setLimbs(i, d);
    }
    if (MATCH.ROUND_TIME > 0 && this.roundActive) {
      this.ui.setTimer(Math.ceil(this.roundTime));
    }
  }

  _render(dt) {
    // camera follows midpoint of fighters
    if (this.fighters.length === 2) {
      const c0 = this.fighters[0].doll.getCenter();
      const c1 = this.fighters[1].doll.getCenter();
      const mid = c0.clone().add(c1).multiplyScalar(0.5);
      const spread = Math.abs(c0.x - c1.x);
      const targetZ = 11 + spread * 0.5;
      this._camBase.x += (mid.x * 0.6 - this._camBase.x) * 0.05;
      this._camBase.y += (3.6 + mid.y * 0.3 - this._camBase.y) * 0.05;
      this._camBase.z += (targetZ - this._camBase.z) * 0.05;
      this.camera.lookAt(mid.x * 0.6, 2.2, 0);
    }
    this.effects.applyCameraShake(dt, this._camBase);
    this.renderer.render(this.scene, this.camera);
  }

  pause(v) { this.paused = v; if (v) audio.stopMusic(); else audio.startMusic(); }

  rematch() {
    this.scores = [0, 0]; this.matchOver = false;
    this.startMatch({
      mode: this.mode, difficulty: this.difficulty, weapons: this.weapons,
      stage: this.stage, names: this.names, localIndex: this.localPlayerIndex,
    });
  }

  stop() {
    this.running = false;
    audio.stopMusic();
    this._teardownWorld();
  }
}
