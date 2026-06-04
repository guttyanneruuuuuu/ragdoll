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
import { haptics } from './haptics.js';
import { AIController } from './ai.js';
import { COLORS, DAMAGE, WEAPONS } from './config.js';

export class Game {
  constructor(canvas, ui, input) {
    this.canvas = canvas;
    this.ui = ui;
    this.input = input;
    this.net = null;

    // ---- Performance / device tier detection ----
    // High-DPI phones report devicePixelRatio of 3-4, which means the GPU
    // has to draw 9-16x more pixels than necessary. That is the #1 cause of
    // "the game takes forever to load / runs at 5fps / won't open" on mobile.
    // We cap the pixel ratio and scale shadow quality to the device.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
      || (('ontouchstart' in window) && window.innerWidth < 900);
    this.isMobile = isMobile;
    // On phones, render at a slightly reduced pixel ratio for a big perf win.
    const effectiveDpr = isMobile ? Math.min(dpr, 1.5) : dpr;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,                 // MSAA is expensive on mobile GPUs
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false,  // never refuse to start
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(effectiveDpr);
    this.renderer.shadowMap.enabled = true;
    // PCFSoft is pretty; basic PCF is much cheaper on mobile.
    this.renderer.shadowMap.type = isMobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;

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
    // Smaller shadow map on phones = big memory + fill-rate savings.
    const shadowRes = this.isMobile ? 1024 : 2048;
    dir.shadow.mapSize.set(shadowRes, shadowRes);
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
    // Re-clamp pixel ratio on rotate / resize so a big window doesn't tank fps.
    const dpr = Math.min(window.devicePixelRatio || 1, this.isMobile ? 1.5 : 2);
    this.renderer.setPixelRatio(dpr);
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
    // Sword-vs-sword clash is checked FIRST so that two simultaneous
    // attacks parry each other instead of both landing on the body.
    const clashed = this.checkSwordClash(a, b);
    if (!clashed) {
      this.checkSwordHits(a, b);
      this.checkSwordHits(b, a);
    }
  }

  // Vibration helper — delegates to the robust haptics module which
  // throttles bursts (so rapid hits don't cancel each other), unlocks
  // after a user gesture, and falls back to an audio "thump" on devices
  // with no vibration motor (e.g. iOS Safari).
  _vibrate(pattern) {
    haptics.buzz(pattern);
  }

  _isLocalFighter(f) {
    if (this.mode === 'local') return true; // both players are local
    return f === this.fighters[this.localIndex];
  }

  checkSwordHits(attacker, victim) {
    if (!attacker.alive || !attacker.swinging || attacker.locked.armR) return;
    const tip = attacker.swordTip();
    const hand = attacker.nodes.handR.p;
    // sword segment from hand->tip; test against victim nodes
    for (const [name, node] of Object.entries(victim.nodes)) {
      if (victim.severed[name]) continue;
      const d = pointSegDist(node.p, hand, tip);
      // Slightly more generous hit radius for better feel
      if (d < node.radius + 0.5) {
        // compute hand velocity as impact energy
        const v = attacker.nodes.handR.vel();
        const speed = Math.hypot(v.x, v.y, v.z) * 60; // per-second-ish
        if (speed < DAMAGE.hitThreshold * 0.85) continue;
        if (victim.blocking && this.blockChance(attacker, victim)) {
          audio.clang();
          // Both players feel the parry (the blocker REALLY feels it)
          if (this._isLocalFighter(attacker)) this._vibrate(20);
          if (this._isLocalFighter(victim))   this._vibrate([15, 30, 15]);
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

        // ---- Haptic feedback on hit ----
        // Stronger pattern for clean hits, even bigger for headshots / severing energy
        const heavy = energy > DAMAGE.severEnergy * 0.7 || name === 'head';
        if (this._isLocalFighter(attacker)) {
          this._vibrate(heavy ? [60, 30, 80] : [40]);
        }
        if (this._isLocalFighter(victim)) {
          // Victim feels a longer rumble when struck
          this._vibrate(heavy ? [90, 40, 50] : [55]);
        }

        this.effects.burst(node.p.x, node.p.y, node.p.z, 22, 0xff4422);
        this.effects.shake(heavy ? 0.55 : 0.35, heavy ? 0.25 : 0.18);
        this.effects.stop(heavy ? 0.09 : 0.05);
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

  // ---- Sword-vs-Sword clash (blade-on-blade hit detection) ----
  // Triggers whenever the two blades intersect closely, regardless of
  // whether each fighter is swinging or just holding. This gives the
  // "katanas crossing" feel that was missing.
  checkSwordClash(a, b) {
    if (!a.alive || !b.alive) return false;
    if (a.locked.armR || b.locked.armR) return false;
    if (a.severed.handR || b.severed.handR) return false;

    const tipA = a.swordTip(), handA = a.nodes.handR.p;
    const tipB = b.swordTip(), handB = b.nodes.handR.p;

    // segment-segment distance between the two blades
    const { d, p1, p2 } = segSegDist(handA, tipA, handB, tipB);

    // Generous threshold — blades have thickness in reality
    if (d >= 0.55) return false;

    // Throttle clashes so they don't fire every frame while blades drag.
    // Per-pair cooldown of ~200ms.
    const now = performance.now();
    this._lastClashTime = this._lastClashTime || 0;
    if (now - this._lastClashTime < 180) return false;
    this._lastClashTime = now;

    // Compute combined impact energy from both hands
    const va = a.nodes.handR.vel(), vb = b.nodes.handR.vel();
    const speedA = Math.hypot(va.x, va.y, va.z) * 60;
    const speedB = Math.hypot(vb.x, vb.y, vb.z) * 60;
    const intensity = Math.min(1, (speedA + speedB) / 24);

    audio.clang();
    // Vibrate BOTH local players — clash should feel symmetric
    if (this._isLocalFighter(a)) this._vibrate([25, 20, 35]);
    if (this._isLocalFighter(b)) this._vibrate([25, 20, 35]);

    const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2, mz = (p1.z + p2.z) / 2;
    // Bigger, brighter sparks scaled by intensity
    this.effects.burst(mx, my, mz, 18 + Math.floor(intensity * 22), 0xffee88);
    this.effects.burst(mx, my, mz, 8 + Math.floor(intensity * 10), 0xffffff);
    this.effects.shake(0.25 + intensity * 0.4, 0.15 + intensity * 0.15);
    this.effects.stop(0.04 + intensity * 0.05);

    // Push both hands apart along the clash normal (perpendicular-ish bounce)
    const nx = (handA.x - handB.x), ny = (handA.y - handB.y), nz = (handA.z - handB.z);
    const nm = Math.hypot(nx, ny, nz) || 1;
    const push = 0.35 + intensity * 0.45;
    a.nodes.handR.pp.x = a.nodes.handR.p.x - (nx / nm) * push * 0.5;
    a.nodes.handR.pp.y = a.nodes.handR.p.y - (ny / nm) * push * 0.5;
    b.nodes.handR.pp.x = b.nodes.handR.p.x + (nx / nm) * push * 0.5;
    b.nodes.handR.pp.y = b.nodes.handR.p.y + (ny / nm) * push * 0.5;

    // Stronger clashes can stagger both fighters briefly
    if (intensity > 0.55) {
      a.stagger = Math.max(a.stagger, 0.18);
      b.stagger = Math.max(b.stagger, 0.18);
    }

    // Cancel ongoing swings — the parry interrupts them
    if (a.swinging) a.swinging = false;
    if (b.swinging) b.swinging = false;

    return true;
  }

  // ---- apply local input ----
  applyLocalInput() {
    // In local 2P, P1 uses WASD only so arrows are free for P2.
    this.input.pollDesktop(this.mode === 'local');

    // In LOCAL 2P, P2 is driven by arrow keys + Enter to swing.
    if (this.mode === 'local' && this.fighters[1]) {
      this._applyLocalP2();
    }

    const f = this.fighters[this.localIndex];
    if (!f || !f.alive) return;
    f.setMove(this.input.move.x, this.input.move.z);
    // Single-stick: feed the live sword aim so the blade follows the stick
    // and the body leans toward it.
    if (this.input.swordVec) f.setAim(this.input.swordVec.x, this.input.swordVec.y);
    f.setBlock(this.input.blocking);
    const sw = this.input.consumeSwing();
    if (sw) { f.setSwing(sw.dx, sw.dy); audio.slash(); }
  }

  // P2 control for local 2P: arrow keys move, "/" or Enter swings,
  // "RShift" blocks. Touch P2 is not supported (one device, one stick).
  _applyLocalP2() {
    const k = this.input.keys || {};
    const f2 = this.fighters[1];
    if (!f2 || !f2.alive) return;
    let x = 0, z = 0;
    if (k['ArrowUp']) z -= 1;
    if (k['ArrowDown']) z += 1;
    if (k['ArrowLeft']) x -= 1;
    if (k['ArrowRight']) x += 1;
    const m = Math.hypot(x, z);
    if (m > 0) { x /= m; z /= m; }
    f2.setMove(x, z);
    f2.setBlock(!!(k['ShiftRight'] || k['Slash']));
    // P2 swing on Enter / NumpadEnter
    if (!this._p2SwingHeld && (k['Enter'] || k['NumpadEnter'])) {
      this._p2SwingHeld = true;
      // swing toward P1
      const dx = this.fighters[0].nodes.hip.p.x - f2.nodes.hip.p.x;
      f2.setSwing(dx >= 0 ? 1 : -1, 0.4);
      audio.slash();
    } else if (!(k['Enter'] || k['NumpadEnter'])) {
      this._p2SwingHeld = false;
    }
    // P1 in local mode uses WASD only; suppress the shared 'move' override
    // for P1 by NOT touching it here — pollDesktop already populated move.
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

// distance between two segments L1(P1, P2) and L2(P3, P4)
function segSegDist(p1, p2, p3, p4) {
  const ux = p2.x - p1.x, uy = p2.y - p1.y, uz = p2.z - p1.z;
  const vx = p4.x - p3.x, vy = p4.y - p3.y, vz = p4.z - p3.z;
  const wx = p1.x - p3.x, wy = p1.y - p3.y, wz = p1.z - p3.z;
  const a = ux * ux + uy * uy + uz * uz;
  const b = ux * vx + uy * vy + uz * vz;
  const c = vx * vx + vy * vy + vz * vz;
  const d = ux * wx + uy * wy + uz * wz;
  const e = vx * wx + vy * wy + vz * wz;
  const D = a * c - b * b;
  let sc, tc;
  if (D < 1e-6) { sc = 0.0; tc = (b > c ? d / b : e / c); }
  else {
    sc = (b * e - c * d) / D;
    tc = (a * e - b * d) / D;
  }
  sc = Math.max(0, Math.min(1, sc));
  tc = Math.max(0, Math.min(1, tc));
  const c1 = { x: p1.x + sc * ux, y: p1.y + sc * uy, z: p1.z + sc * uz };
  const c2 = { x: p3.x + tc * vx, y: p3.y + tc * vy, z: p3.z + tc * vz };
  return { d: Math.hypot(c1.x - c2.x, c1.y - c2.y, c1.z - c2.z), p1: c1, p2: c2 };
}
