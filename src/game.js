// ============================================================
// Game — owns the renderer, physics world, fighters, camera,
// match loop, combat resolution, and modes (ai / local / online).
// ============================================================
import * as THREE from 'three';
import { PhysicsWorld, dist } from './physics.js';
import { Fighter } from './fighter.js';
import { Arena } from './arena.js';
import { Effects } from './effects.js';
import { audio } from './audio.js';
import { AIController } from './ai.js';
import { COLORS, DAMAGE, WEAPONS } from './config.js';

export class Game {
  constructor(canvas, ui, input) {
    this.canvas = canvas;
    this.ui = ui;
    this.input = input;
    this.net = null;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    this.camera.position.set(0, 10, 18);
    this.camera.lookAt(0, 2.5, 0);

    this.setupLights();
    this.effects = new Effects(this.scene, this.camera);

    this.world = new PhysicsWorld();
    this.fighters = [];
    this.arena = null;
    this.running = false;
    this.matchOver = false;
    this.localIndex = 0;
    this.aiCtrl = null;
    this.clock = new THREE.Clock();
    this.lastNetSend = 0;

    window.addEventListener('resize', () => this.onResize());
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  setupLights() {
    const amb = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(amb);
    const dir = new THREE.DirectionalLight(0xffffff, 1.3);
    dir.position.set(10, 20, 12);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.camera.left = -25; dir.shadow.camera.right = 25;
    dir.shadow.camera.top = 25; dir.shadow.camera.bottom = -25;
    dir.shadow.bias = -0.0005;
    this.scene.add(dir);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.6);
    fill.position.set(-12, 10, -10);
    this.scene.add(fill);
    const back = new THREE.DirectionalLight(0xff8844, 0.3);
    back.position.set(0, 5, -20);
    this.scene.add(back);
    this.dirLight = dir;
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ---- start a match ----
  startMatch(opts) {
    this.cleanup();
    this.mode = opts.mode;            // 'ai' | 'local' | 'online'
    this.localIndex = opts.localIndex ?? 0;
    this.matchOver = false;
    this.round = 1;
    this.scores = [0, 0];
    const stage = opts.stage || 'arena';
    this.arena = new Arena(this.scene, this.world, stage);

    const weapons = opts.weapons || ['katana', 'katana'];
    const names = opts.names || ['P1', 'P2'];

    const f1 = new Fighter(this.world, this.scene, {
      id: 'p0', color: COLORS.p1, x: -5, facing: 1, weapon: weapons[0], name: names[0],
    });
    const f2 = new Fighter(this.world, this.scene, {
      id: 'p1', color: COLORS.p2, x: 5, facing: -1, weapon: weapons[1], name: names[1],
    });
    this.fighters = [f1, f2];
    this.bindFighterEvents();

    if (this.mode === 'ai') {
      this.aiCtrl = new AIController(f2, opts.difficulty || 'normal');
    } else {
      this.aiCtrl = null;
    }

    this.ui.setupHUD(names, this.scores);
    this.running = true;
    audio.startMusic();
    this.ui.show('game');
  }

  bindFighterEvents() {
    for (const f of this.fighters) {
      f.onSever = (node) => {
        audio.sever();
        this.effects.burst(f.nodes[node]?.p.x || 0, f.nodes[node]?.p.y || 2, f.nodes[node]?.p.z || 0, 30, 0xff3344);
        this.effects.shake(0.6, 0.3); this.effects.stop(0.08);
      };
      f.onKO = () => this.onKO(f);
    }
  }

  onKO(loser) {
    if (this.matchOver) return;
    const li = this.fighters.indexOf(loser);
    const winner = 1 - li;
    this.scores[winner]++;
    audio.ko();
    this.effects.shake(0.8, 0.5); this.effects.stop(0.12);
    this.ui.updateScore(this.scores);

    const needed = 2; // best of 3
    if (this.scores[winner] >= needed) {
      this.matchOver = true;
      this.running = false;
      audio.stopMusic();
      const youWon = winner === this.localIndex || (this.mode === 'local');
      setTimeout(() => {
        if (this.mode === 'local') this.ui.showResult(`PLAYER ${winner + 1} WINS!`, true);
        else this.ui.showResult(youWon ? 'YOU WIN!' : 'YOU LOSE...', youWon);
        if (youWon) audio.win(); else audio.lose();
      }, 1200);
    } else {
      // next round
      setTimeout(() => this.nextRound(), 1600);
    }
  }

  nextRound() {
    this.round++;
    const weapons = this.fighters.map(f => f.weaponKey);
    const names = this.fighters.map(f => f.name);
    const stage = this.arena.stageKey;
    // rebuild fighters fresh
    for (const f of this.fighters) f.destroy();
    const f1 = new Fighter(this.world, this.scene, { id: 'p0', color: COLORS.p1, x: -5, facing: 1, weapon: weapons[0], name: names[0] });
    const f2 = new Fighter(this.world, this.scene, { id: 'p1', color: COLORS.p2, x: 5, facing: -1, weapon: weapons[1], name: names[1] });
    this.fighters = [f1, f2];
    this.bindFighterEvents();
    if (this.mode === 'ai') this.aiCtrl = new AIController(f2, this.aiDifficulty || 'normal');
    this.ui.announce(`ROUND ${this.round}`);
    this.running = true;
  }

  // ---- combat resolution: sword vs body ----
  resolveCombat(dt) {
    const [a, b] = this.fighters;
    if (!a || !b) return;
    this.checkSwordHits(a, b);
    this.checkSwordHits(b, a);
    this.checkSwordClash(a, b);
  }

  checkSwordHits(attacker, victim) {
    if (!attacker.alive || !attacker.swinging || attacker.locked.armR) return;
    const tip = attacker.swordTip();
    const hand = attacker.nodes.handR.p;
    // sword segment from hand->tip; test against victim nodes
    for (const [name, node] of Object.entries(victim.nodes)) {
      if (victim.severed[name]) continue;
      const d = pointSegDist(node.p, hand, tip);
      if (d < node.radius + 0.4) {
        // compute hand velocity as impact energy
        const v = attacker.nodes.handR.vel();
        const speed = Math.hypot(v.x, v.y, v.z) * 60; // per-second-ish
        if (speed < DAMAGE.hitThreshold * 0.85) continue;
        if (victim.blocking && this.blockChance(attacker, victim)) {
          audio.clang();
          this.effects.burst(tip.x, tip.y, tip.z, 18, 0x88ddff);
          this.effects.shake(0.2, 0.12);
          // bounce attacker back
          attacker.nodes.handR.pp.x = attacker.nodes.handR.p.x;
          continue;
        }
        const energy = speed * attacker.weapon.dmg * 0.6;
        const hv = { x: v.x * 60, y: Math.abs(v.y * 60) + 3, z: v.z * 60 };
        victim.applyImpact(name, energy, hv);
        audio.hit();
        this.effects.burst(node.p.x, node.p.y, node.p.z, 22, 0xff4422);
        this.effects.shake(0.35, 0.18); this.effects.stop(0.05);
        attacker.swinging = false; // one hit per swing
        break;
      }
    }
  }

  blockChance(attacker, victim) {
    // block works if victim faces attacker
    const dx = attacker.nodes.hip.p.x - victim.nodes.hip.p.x;
    const facingRight = victim.facing > 0;
    return (dx > 0) === facingRight ? Math.random() < 0.85 : Math.random() < 0.2;
  }

  checkSwordClash(a, b) {
    if (!a.swinging || !b.swinging) return;
    const ta = a.swordTip(), tb = b.swordTip();
    if (dist(ta, tb) < 0.9) {
      audio.clang();
      const mx = (ta.x + tb.x) / 2, my = (ta.y + tb.y) / 2, mz = (ta.z + tb.z) / 2;
      this.effects.burst(mx, my, mz, 24, 0xffee88);
      this.effects.shake(0.3, 0.15);
      a.swinging = false; b.swinging = false;
    }
  }

  // ---- apply local input ----
  applyLocalInput() {
    const f = this.fighters[this.localIndex];
    if (!f || !f.alive) return;
    this.input.pollDesktop();
    f.setMove(this.input.move.x, this.input.move.z);
    f.setBlock(this.input.blocking);
    const sw = this.input.consumeSwing();
    if (sw) { f.setSwing(sw.dx, sw.dy); audio.slash(); }
  }

  updateCamera(dt) {
    // frame both fighters
    if (this.fighters.length < 2) return;
    const a = this.fighters[0].nodes.hip.p, b = this.fighters[1].nodes.hip.p;
    const cx = (a.x + b.x) / 2, cz = (a.z + b.z) / 2;
    const spread = Math.hypot(a.x - b.x, a.z - b.z);
    const dist = THREE.MathUtils.clamp(15 + spread * 0.7, 15, 28);
    const target = new THREE.Vector3(cx, 11, cz + dist);
    this.camera.position.lerp(target, 1 - Math.pow(0.0008, dt));
    const look = new THREE.Vector3(cx, 3, cz);
    this._look = this._look || look.clone();
    this._look.lerp(look, 1 - Math.pow(0.0008, dt));
    const off = this.effects.shakeOffset || new THREE.Vector3();
    this.camera.position.add(off);
    this.camera.lookAt(this._look);
  }

  loop() {
    requestAnimationFrame(this.loop);
    let dt = Math.min(this.clock.getDelta(), 0.05);
    this.effects.update(dt);

    if (this.running && this.fighters.length === 2) {
      if (this.effects.hitstop > 0) { this.effects.hitstop -= dt; dt *= 0.15; }

      // inputs
      if (this.mode === 'online' && this.net) {
        this.applyLocalInput();
        this.networkSync(dt);
      } else {
        this.applyLocalInput();
        if (this.aiCtrl) this.aiCtrl.update(dt, this.fighters[this.localIndex]);
      }

      // physics
      this.world.step(dt);
      const opp = [this.fighters[1], this.fighters[0]];
      this.fighters.forEach((f, i) => f.update(dt, opp[i]));
      this.resolveCombat(dt);
      this.arena.update(dt, this.fighters);
      this.updateCamera(dt);

      // ring-out detection
      this.checkRingOut();
      this.ui.updateBars(this.fighters);
    } else {
      this.updateMenuCamera(dt);
    }

    this.renderer.render(this.scene, this.camera);
  }

  checkRingOut() {
    if (this.matchOver) return;
    for (const f of this.fighters) {
      if (f.alive && f.nodes.hip.p.y < -8) {
        f.alive = false;
        for (const m of Object.values(f.muscles)) m.enabled = false;
        this.onKO(f);
      }
    }
  }

  updateMenuCamera(dt) {
    const t = performance.now() * 0.0003;
    this.camera.position.set(Math.cos(t) * 16, 9, Math.sin(t) * 16);
    this.camera.lookAt(0, 2, 0);
  }

  networkSync(dt) {
    this.lastNetSend += dt;
    if (this.lastNetSend > 0.05) {
      this.lastNetSend = 0;
      const f = this.fighters[this.localIndex];
      this.net.sendState(f.serialize());
    }
  }

  applyRemoteState(s) {
    const remoteIdx = 1 - this.localIndex;
    const f = this.fighters[remoteIdx];
    if (f) f.applyState(s);
  }

  cleanup() {
    for (const f of this.fighters) f.destroy();
    this.fighters = [];
    if (this.arena) this.arena.clear();
    this.world = new PhysicsWorld();
    this.aiCtrl = null;
  }

  quitToMenu() {
    this.running = false;
    this.matchOver = true;
    audio.stopMusic();
    this.cleanup();
    this.ui.show('menu');
  }
}

// distance from point P to segment AB
function pointSegDist(p, a, b) {
  const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
  const apx = p.x - a.x, apy = p.y - a.y, apz = p.z - a.z;
  const ab2 = abx * abx + aby * aby + abz * abz || 1e-6;
  let t = (apx * abx + apy * aby + apz * abz) / ab2;
  t = Math.max(0, Math.min(1, t));
  const cx = a.x + abx * t, cy = a.y + aby * t, cz = a.z + abz * t;
  return Math.hypot(p.x - cx, p.y - cy, p.z - cz);
}
