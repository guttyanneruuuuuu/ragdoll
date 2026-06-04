// ============================================================
// Entry — boots Three.js game (no WASM = instant load),
// wires UI ⇄ Game ⇄ Net. Virtual joysticks + AI + online.
// ============================================================
import { Game } from './game.js';
import { UIManager } from './ui.js';
import { InputManager } from './input.js';
import { NetClient } from './net.js';
import { audio } from './audio.js';
import { AI_PROFILES } from './config.js';

const canvas = document.getElementById('game-canvas');
const ui = new UIManager();
const input = new InputManager();
ui.input = input;

// Lightweight debug hook so automated tests (and the console) can inspect
// the live input state. Harmless in production.
if (typeof window !== 'undefined') {
  Object.defineProperty(window, '__inputMove', { get: () => input.move });
  window.__input = input;
}

let game = null;
let net = null;

// Detect touch-capable device. On hybrid devices we enable BOTH paths.
const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const isMobileWidth = window.innerWidth < 900;

// Yield to the browser so the loading bar actually paints between steps,
// and so a slow WebGL context creation never freezes the page on a white
// screen ("the game won't open" bug). Each await lets the UI breathe.
const nextFrame = () => new Promise(r => requestAnimationFrame(() => r()));

async function boot() {
  try {
    ui.setLoading(20, 'シーンを構築中...');
    await nextFrame();

    game = new Game(canvas, ui, input);

    ui.setLoading(65, 'コントロールを準備中...');
    await nextFrame();

    // Single-stick controls: only the LEFT joystick is used now (sword +
    // body follow). The right zone is kept hidden for layout but disabled.
    if (hasTouch) {
      input.initTouch(document.getElementById('joy-left'), document.getElementById('joy-right'));
    } else {
      document.getElementById('joy-left')?.style.setProperty('pointer-events', 'none');
      document.getElementById('joy-right')?.style.setProperty('pointer-events', 'none');
      document.querySelectorAll('.joy-hint').forEach(el => el.style.display = 'none');
    }
    input.initDesktop(canvas);

    ui.setLoading(100, '準備完了！');
    await nextFrame();

    ui.show('menu');
    // Dev/test hook: ?autostart=ai jumps straight into an AI match so the
    // 3D scene can be smoke-tested headlessly. Harmless in production.
    const auto = new URLSearchParams(location.search).get('autostart');
    if (auto === 'ai') {
      setTimeout(() => ui.emit('startAI', { difficulty: 'normal', weapon: 'katana', stage: 'arena' }), 200);
    }
    const room = new URLSearchParams(location.search).get('room');
    if (room) {
      ui.show('online-setup');
      document.querySelector('.online-tabs .tab[data-tab="join"]')?.click();
      const jc = document.getElementById('join-code');
      if (jc) jc.value = room.toUpperCase();
    }
  } catch (err) {
    // Never leave the user stuck on the loading screen. Surface the error.
    console.error('[boot] failed:', err);
    ui.setLoading(100, '読み込みエラー');
    const lt = document.getElementById('load-text');
    if (lt) lt.textContent = '起動に失敗しました: ' + (err?.message || err);
  }
}

// audio unlock — iOS Safari only unlocks audio after a touchstart/pointerdown
const unlock = () => { audio.init(); audio.resume(); };
ui.on('userInteract', unlock);
window.addEventListener('pointerdown', unlock, { once: true });
window.addEventListener('touchstart', unlock, { once: true, passive: true });
window.addEventListener('keydown', unlock, { once: true });

// ---- AI mode ----
ui.on('startAI', ({ difficulty, weapon, stage }) => {
  audio.init();
  game.aiDifficulty = difficulty;
  game.net = null;
  game.startMatch({
    mode: 'ai', difficulty, weapons: [weapon, weapon], stage,
    names: ['YOU', 'CPU (' + (AI_PROFILES[difficulty]?.label || 'NORMAL') + ')'], localIndex: 0,
  });
  ui.announce('FIGHT!');
});

// ---- local 2P (shared keyboard - both on one device for fun) ----
ui.on('startLocal', ({ weapons, stage }) => {
  audio.init();
  game.net = null;
  game.startMatch({
    mode: 'local', weapons, stage,
    names: ['PLAYER 1', 'PLAYER 2'], localIndex: 0,
  });
  ui.announce('FIGHT!');
});

// ---- online ----
function ensureNet() {
  if (net && net.connected) return Promise.resolve(net);
  net = new NetClient();
  setupNetHandlers();
  return net.connect().then(() => net);
}

function setupNetHandlers() {
  net.on('created', (m) => {
    game.pendingOpts = net._opts;
    ui.showRoomCode(m.room, [{ id: m.id, name: net._opts.name }]);
    ui.setHostControls(true);
  });
  net.on('joined', (m) => {
    ui.showRoomCode(m.room, m.peers);
    ui.setHostControls(false);
    game.pendingOpts = m.opts;
  });
  net.on('peer-join', (m) => {
    ui.toast((m.name || 'プレイヤー') + ' が参加しました');
    // refresh peer list (host tracks simply)
    const list = document.getElementById('peer-list');
    const li = document.createElement('li'); li.textContent = '⚔ ' + (m.name || m.id);
    list?.appendChild(li);
  });
  net.on('peer-leave', () => ui.toast('プレイヤーが退出しました'));
  net.on('start', (m) => startOnlineMatch(m.opts));
  net.on('state', (m) => game.applyRemoteState(m.s));
  net.on('neterror', (m) => ui.toast(m.msg || 'ネットワークエラー'));
  net.on('close', () => ui.toast('接続が切れました'));
}

ui.on('hostRoom', (opts) => {
  ensureNet().then(() => {
    net._opts = opts;
    net.createRoom(opts.name, opts);
  }).catch(() => ui.toast('サーバーに接続できません（ローカルではnpm start が必要）'));
});

ui.on('joinRoom', ({ code, name }) => {
  if (!code) { ui.toast('ルームコードを入力してください'); return; }
  ensureNet().then(() => {
    net._opts = { name };
    net.joinRoom(code, name);
  }).catch(() => ui.toast('サーバーに接続できません'));
});

ui.on('onlineStart', () => {
  const opts = game.pendingOpts || {};
  const matchOpts = {
    weapons: [opts.weapon || 'katana', opts.weapon || 'katana'],
    stage: opts.stage || 'arena',
  };
  net.startMatch(matchOpts);
  // host also starts locally as player 0
  startOnlineMatch(matchOpts, true);
});

function startOnlineMatch(opts, isHost) {
  const host = isHost ?? net.isHost;
  game.net = net;
  game.startMatch({
    mode: 'online',
    weapons: opts.weapons || ['katana', 'katana'],
    stage: opts.stage || 'arena',
    names: host ? ['YOU (HOST)', 'OPPONENT'] : ['OPPONENT', 'YOU'],
    localIndex: host ? 0 : 1,
  });
  ui.announce('FIGHT!');
}

// ---- pause / quit / rematch ----
ui.on('quit', () => { if (net) net.leave(); game.quitToMenu(); });
ui.on('rematch', () => {
  if (game.mode === 'ai') {
    ui.emit('startAI', { difficulty: game.aiDifficulty, weapon: game.fighters[0]?.weaponKey || 'katana', stage: game.arena.stageKey });
  } else {
    game.quitToMenu();
  }
});

boot();
