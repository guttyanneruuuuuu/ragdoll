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

let game = null;
let net = null;

// Detect touch-capable device. On hybrid devices we enable BOTH paths.
const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const isMobileWidth = window.innerWidth < 900;

function boot() {
  ui.setLoading(30, 'シーンを構築中...');
  game = new Game(canvas, ui, input);
  ui.setLoading(70, 'コントロールを準備中...');
  // touch joysticks (always init so hybrid devices work)
  if (hasTouch) {
    input.initTouch(document.getElementById('joy-left'), document.getElementById('joy-right'));
  } else {
    // On pure desktop, completely disable pointer events on joy zones so
    // clicking the bottom half of the canvas doesn't summon a joystick.
    document.getElementById('joy-left')?.style.setProperty('pointer-events', 'none');
    document.getElementById('joy-right')?.style.setProperty('pointer-events', 'none');
    document.querySelectorAll('.joy-hint').forEach(el => el.style.display = 'none');
  }
  input.initDesktop(canvas);
  ui.setLoading(100, '準備完了！');
  setTimeout(() => {
    ui.show('menu');
    // auto-join via ?room=CODE
    const room = new URLSearchParams(location.search).get('room');
    if (room) {
      ui.show('online-setup');
      document.querySelector('.online-tabs .tab[data-tab="join"]')?.click();
      document.getElementById('join-code').value = room.toUpperCase();
    }
  }, 250);
}

// audio unlock
const unlock = () => { audio.init(); audio.resume(); };
ui.on('userInteract', unlock);
window.addEventListener('pointerdown', unlock, { once: true });

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
