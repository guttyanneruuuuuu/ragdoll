// ============================================================
// Entry point — boots Rapier, wires UI ⇄ Game ⇄ Net.
// ============================================================
import RAPIER from '@dimforge/rapier3d-compat';
import { Game } from './game.js';
import { UIManager } from './ui.js';
import { NetClient } from './net.js';
import { audio } from './audio.js';

const canvas = document.getElementById('game-canvas');
const ui = new UIManager();

let game = null;
let net = null;

async function boot() {
  ui.setLoading(15, '物理エンジンを初期化中...');
  await RAPIER.init();
  ui.setLoading(60, 'アリーナを構築中...');
  game = new Game(RAPIER, canvas, ui);
  game.ui.input.initDesktop(canvas);
  ui.setLoading(100, '準備完了！');
  await new Promise(r => setTimeout(r, 350));
  ui.show('menu');

  // auto-join via ?room=CODE
  const params = new URLSearchParams(location.search);
  const roomParam = params.get('room');
  if (roomParam) {
    ui.show('online-setup');
    document.querySelector('.online-tabs .tab[data-tab="join"]')?.click();
    document.getElementById('join-code').value = roomParam.toUpperCase();
  }
}

// ---- audio unlock on first interaction ----
ui.on('userInteract', () => { audio.init(); audio.resume(); });
window.addEventListener('pointerdown', () => { audio.init(); audio.resume(); }, { once: true });

// ---- AI / practice ----
ui.on('startAI', ({ difficulty, weapon, stage }) => {
  audio.init();
  ui.hide('ai-setup');
  game.net = null;
  game.startMatch({
    mode: 'ai', difficulty, weapons: [weapon, weapon], stage,
    names: ['YOU', 'CPU (' + diffLabel(difficulty) + ')'], localIndex: 0,
  });
});

ui.on('startPractice', () => {
  audio.init();
  game.net = null;
  game.startMatch({
    mode: 'ai', difficulty: 'easy', weapons: ['katana', 'katana'], stage: 'arena',
    names: ['YOU', 'TRAINING'], localIndex: 0,
  });
});

// ---- pause / result ----
ui.on('togglePause', () => { game.pause(!game.paused); });
ui.on('rematch', () => game.rematch());
ui.on('toMenu', () => { game.stop(); net?.close(); net = null; ui.show('menu'); });

// ============================================================
// ONLINE MODE
// ============================================================
ui.on('createRoom', async ({ name, weapon }) => {
  audio.init();
  ui.setWaiting('サーバーに接続中...');
  net = new NetClient();
  wireNet(net);
  try {
    await net.connect();
    net.createRoom(name, weapon);
    ui._pendingName = name; ui._pendingWeapon = weapon;
  } catch (e) {
    ui.setWaiting('⚠ 接続できません。サーバー未起動の可能性があります。');
  }
});

ui.on('joinRoom', async ({ name, code, weapon }) => {
  if (!code) { ui.setConnStatus('⚠ ルームコードを入力してください'); return; }
  audio.init();
  ui.setConnStatus('接続中...');
  net = new NetClient();
  wireNet(net);
  try {
    await net.connect();
    net.joinRoom(code, name, weapon);
    ui._pendingName = name; ui._pendingWeapon = weapon;
  } catch (e) {
    ui.setConnStatus('⚠ 接続できません。');
  }
});

function wireNet(n) {
  n.on('roomCreated', (code) => { ui.showRoomCode(code); ui.setWaiting('相手の参加を待っています...'); });
  n.on('peerJoined', (msg) => {
    // host: both ready → start as authority
    ui.setWaiting('相手が参加しました！開始します...');
    startOnlineMatch(0, [ui._pendingWeapon || 'katana', msg.weapon || 'katana'], [ui._pendingName || 'YOU', msg.name || 'P2']);
  });
  n.on('joinedRoom', (msg) => {
    // guest: start as client (local index 1)
    ui.setConnStatus('✓ 参加成功！開始します...');
    startOnlineMatch(1, [msg.hostWeapon || 'katana', ui._pendingWeapon || 'katana'], [msg.hostName || 'P1', ui._pendingName || 'YOU']);
  });
  n.on('netError', (m) => { ui.setConnStatus('⚠ ' + m); ui.setWaiting('⚠ ' + m); });
  n.on('peerLeft', () => { ui.banner('相手が退出しました', 'count'); setTimeout(() => { game.stop(); ui.show('menu'); }, 1800); });
  n.on('disconnect', () => {});

  // gameplay sync
  n.on('remoteInput', (data) => {
    // host applies guest input to fighter[1]
    if (n.isHost && game.fighters[1]) {
      const d = game.fighters[1].doll;
      d.moveDir = data.moveX; if (data.jump) d.wantJump = true;
      d.blocking = data.block; if (data.aim !== undefined) d.setAim(data.aim);
    }
  });
  n.on('remoteSwing', (dir) => {
    const idx = n.isHost ? 1 : 0;
    const d = game.fighters[idx]?.doll;
    if (d) { d.startSwing(dir.x, dir.y); audio.swing(); }
  });
  n.on('snapshot', (data) => {
    // guest applies authoritative snapshot
    if (!n.isHost && game.fighters.length === 2) {
      game.fighters[0].doll.applySnapshot(data.a, 0.5);
      game.fighters[1].doll.applySnapshot(data.b, 0.5);
    }
  });
  n.on('roundEnd', (winner, scores) => {
    if (!n.isHost) { game.scores = scores; game.ui.updateRoundPips(scores, 2); }
  });
}

function startOnlineMatch(localIndex, weapons, names) {
  ui.hide('online-setup');
  game.net = net;
  // guest fighters are remote-authority; configure
  game.startMatch({
    mode: 'online', weapons, stage: 'arena', names, localIndex,
  });
  // net stat display
  document.getElementById('net-stat')?.classList.remove('hidden');
  setInterval(() => {
    const el = document.getElementById('net-stat');
    if (el && net) el.textContent = `ping: ${net.ping} ms ${net.isHost ? '(host)' : '(guest)'}`;
  }, 1000);
}

function diffLabel(d) {
  return { easy: 'かんたん', normal: 'ふつう', hard: 'むずかしい', insane: '鬼' }[d] || d;
}

boot();
