// ============================================================
//  main.js — UI controller & app bootstrap
//  Wires menus, mode selection, HUD and game lifecycle together.
// ============================================================

import { Game } from './game.js';

const canvas = document.getElementById('game');
const game = new Game(canvas);

// --- element helpers ---
const $ = (id) => document.getElementById(id);
const show = (el) => el.classList.remove('hidden');
const hide = (el) => el.classList.add('hidden');
const screens = {
  menu: $('menu'),
  ai: $('screen-ai'),
  versus: $('screen-versus'),
  howto: $('screen-howto'),
  pause: $('screen-pause'),
  result: $('screen-result'),
};
function hideAllOverlays() { Object.values(screens).forEach(hide); }
function goScreen(name) { hideAllOverlays(); show(screens[name]); game.sfx.click(); }

// --- populate arena chips ---
function buildArenaChips(containerId) {
  const c = $(containerId);
  c.innerHTML = '';
  Game.arenaList().forEach((a, i) => {
    const b = document.createElement('button');
    b.className = 'chip' + (i === 0 ? ' active' : '');
    b.dataset.val = a.key;
    b.textContent = a.name;
    c.appendChild(b);
  });
}
buildArenaChips('arena-ai');
buildArenaChips('arena-vs');

// --- generic chip group selection ---
function bindChipGroup(containerId) {
  const c = $(containerId);
  c.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    c.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    chip.classList.add('active');
    game.sfx.click();
  });
}
['difficulty', 'arena-ai', 'bestof-ai', 'arena-vs', 'bestof-vs'].forEach(bindChipGroup);
function chipVal(containerId) {
  const a = $(containerId).querySelector('.chip.active');
  return a ? a.dataset.val : null;
}

// --- main menu navigation ---
$('menu').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-screen]');
  if (btn) goScreen(btn.dataset.screen);
});
document.querySelectorAll('[data-back]').forEach(b =>
  b.addEventListener('click', () => goScreen('menu')));

// --- HUD setup ---
const hud = $('hud');
const touch = $('touch');
function setupHud(names) {
  $('name1').textContent = names[0];
  $('name2').textContent = names[1];
  renderPips([0, 0]);
}
function renderPips(scores) {
  const needed = Math.ceil(game.bestOf / 2);
  for (let p = 0; p < 2; p++) {
    const el = $('pips' + (p + 1));
    el.innerHTML = '';
    for (let i = 0; i < needed; i++) {
      const d = document.createElement('div');
      d.className = 'pip' + (i < scores[p] ? ' win' + (p + 1) : '');
      el.appendChild(d);
    }
  }
}
function banner(text, ms = 1400) {
  const b = $('round-banner');
  b.textContent = text;
  b.classList.add('show');
  clearTimeout(banner._t);
  banner._t = setTimeout(() => b.classList.remove('show'), ms);
}

// --- detect touch device ---
const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

// --- start match ---
function beginMatch(mode) {
  const arena = mode === 'ai' ? chipVal('arena-ai') : chipVal('arena-vs');
  const bestOf = parseInt(mode === 'ai' ? chipVal('bestof-ai') : chipVal('bestof-vs'), 10);
  const difficulty = chipVal('difficulty') || 'normal';
  const names = mode === 'ai' ? ['YOU', 'CPU'] : ['PLAYER 1', 'PLAYER 2'];

  hideAllOverlays();
  show(hud);
  $('hudArena').textContent = Game.arenaList().find(a => a.key === arena)?.name || '';
  if (isTouch && mode === 'ai') show(touch); else hide(touch);
  $('pauseBtn').style.display = 'block';

  game.start({ mode, difficulty, arena, bestOf, names });
  setupHud(names);
  banner('ラウンド 1 — ファイト!');
  game.sfx.click();
}
$('startAI').addEventListener('click', () => beginMatch('ai'));
$('startVS').addEventListener('click', () => beginMatch('versus'));

// --- game callbacks ---
game.onScore = (scores, winnerIdx) => {
  renderPips(scores);
  banner((winnerIdx === 0 ? game.names[0] : game.names[1]) + ' が勝利!', 1600);
};
game.onRoundEnd = (winnerIdx, matchOver) => {
  if (matchOver) {
    game.stop();
    hide(hud); hide(touch);
    $('pauseBtn').style.display = 'none';
    const name = winnerIdx === 0 ? game.names[0] : game.names[1];
    $('resultTitle').textContent = '🏆 ' + name + ' の勝利!';
    $('resultSub').textContent = `最終スコア ${game.scores[0]} - ${game.scores[1]}`;
    show(screens.result);
  } else {
    const roundNo = game.scores[0] + game.scores[1] + 1;
    banner('ラウンド ' + roundNo + ' — ファイト!');
  }
};

// --- pause ---
let paused = false;
$('pauseBtn').addEventListener('click', () => togglePause());
function togglePause() {
  if (!game.running && !paused) return;
  paused = !paused;
  if (paused) {
    game.running = false;
    show(screens.pause);
  } else {
    hide(screens.pause);
    game.running = true;
    requestAnimationFrame(game._loop);
  }
}
$('resumeBtn').addEventListener('click', () => togglePause());
$('quitBtn').addEventListener('click', () => {
  paused = false;
  game.stop();
  hideAllOverlays();
  hide(hud); hide(touch);
  $('pauseBtn').style.display = 'none';
  show(screens.menu);
});
$('soundToggle').addEventListener('change', (e) => { game.sfx.enabled = e.target.checked; });

window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && (game.running || paused)) togglePause();
});

// --- result buttons ---
$('rematchBtn').addEventListener('click', () => {
  hide(screens.result);
  show(hud);
  if (isTouch && game.mode === 'ai') show(touch);
  $('pauseBtn').style.display = 'block';
  game.start({
    mode: game.mode, difficulty: game.difficulty,
    arena: game.arenaKey, bestOf: game.bestOf, names: game.names
  });
  setupHud(game.names);
  banner('ラウンド 1 — ファイト!');
});
$('resultMenuBtn').addEventListener('click', () => {
  hide(screens.result);
  hide(hud); hide(touch);
  $('pauseBtn').style.display = 'none';
  show(screens.menu);
});

// --- touch button bindings (player 0) ---
touch.querySelectorAll('.tbtn').forEach(btn => {
  const act = btn.dataset.act;
  const set = (v) => game.input.setTouch(0, act, v);
  btn.addEventListener('touchstart', (e) => { e.preventDefault(); set(true); }, { passive: false });
  btn.addEventListener('touchend', (e) => { e.preventDefault(); set(false); }, { passive: false });
  btn.addEventListener('mousedown', () => set(true));
  btn.addEventListener('mouseup', () => set(false));
  btn.addEventListener('mouseleave', () => set(false));
});

// resume audio on first interaction
window.addEventListener('pointerdown', () => game.sfx._ensure(), { once: true });

// --- debug auto-start (append #autostart=ai|versus to URL) ---
if (location.hash.includes('autostart')) {
  setTimeout(() => {
    const m = location.hash.includes('versus') ? 'versus' : 'ai';
    try {
      beginMatch(m);
      // sanity probe after a few seconds
      setTimeout(() => {
        const f = game.fighters;
        // sample the canvas to confirm rendering produced varied pixels
        const ctx = canvas.getContext('2d');
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const colors = new Set();
        for (let i = 0; i < data.length; i += 4000) {
          colors.add(data[i] + ',' + data[i + 1] + ',' + data[i + 2]);
        }
        console.log('AUTOSTART_OK fighters=' + f.length +
          ' headAboveHip=' + (f[0].head.y < f[0].hip.y) +
          ' running=' + game.running +
          ' distinctColors=' + colors.size +
          ' canvas=' + canvas.width + 'x' + canvas.height);
      }, 2500);
    } catch (err) {
      console.error('AUTOSTART_FAIL', err.message);
    }
  }, 300);
}

console.log('⚔️ Ragdoll Blade Arena ready');
