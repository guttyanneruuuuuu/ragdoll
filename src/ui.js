// ============================================================
// UI manager — DOM screens, HUD, menus, transitions
// ============================================================
import { PART } from './config.js';
import { InputManager } from './input.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const LIMB_GROUPS = [
  { key: PART.HEAD, icon: '🙂' },
  { key: PART.UPPER_ARM_R, icon: '💪' },
  { key: PART.UPPER_ARM_L, icon: '🤚' },
  { key: PART.UPPER_LEG_R, icon: '🦵' },
  { key: PART.UPPER_LEG_L, icon: '🦶' },
];

export class UIManager {
  constructor() {
    this.input = new InputManager();
    this.callbacks = {};
    this._buildHandlers();
    this._initLimbDots();

    // damage flash element
    this.flash = document.createElement('div');
    this.flash.className = 'dmg-flash';
    document.getElementById('app').appendChild(this.flash);
  }

  on(event, cb) { this.callbacks[event] = cb; }
  _emit(event, ...args) { this.callbacks[event]?.(...args); }

  _buildHandlers() {
    // menu mode buttons
    $$('#menu .btn').forEach(b => b.addEventListener('click', () => {
      const mode = b.dataset.mode;
      this._emit('userInteract');
      if (mode === 'ai') this.show('ai-setup');
      else if (mode === 'online') this.show('online-setup');
      else if (mode === 'practice') this._emit('startPractice');
    }));

    // back buttons
    $$('[data-back]').forEach(b => b.addEventListener('click', () => this.show('menu')));

    // segmented controls
    $$('.seg').forEach(seg => {
      seg.addEventListener('click', (e) => {
        const btn = e.target.closest('button'); if (!btn) return;
        seg.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // AI start
    $('#start-ai').addEventListener('click', () => {
      const difficulty = $('#difficulty .active').dataset.val;
      const weapon = $('#weapon-ai .active').dataset.val;
      const stage = $('#stage-ai .active').dataset.val;
      this._emit('startAI', { difficulty, weapon, stage });
    });

    // online tabs
    $$('.online-tabs .tab').forEach(t => t.addEventListener('click', () => {
      $$('.online-tabs .tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const tab = t.dataset.tab;
      $$('.tab-content').forEach(c => c.classList.toggle('hidden', c.dataset.content !== tab));
    }));

    // online create / join
    $('#create-room').addEventListener('click', () => {
      const name = $('#player-name').value.trim() || 'Player';
      const weapon = $('#weapon-host .active').dataset.val;
      this._emit('createRoom', { name, weapon });
    });
    $('#join-room').addEventListener('click', () => {
      const name = $('#player-name').value.trim() || 'Player';
      const code = $('#join-code').value.trim().toUpperCase();
      const weapon = $('#weapon-guest .active').dataset.val;
      this._emit('joinRoom', { name, code, weapon });
    });
    $('#copy-link').addEventListener('click', () => {
      const code = $('#room-code').textContent;
      const url = `${location.origin}${location.pathname}?room=${code}`;
      navigator.clipboard?.writeText(url);
      $('#copy-link').textContent = '✓ コピーしました';
      setTimeout(() => { $('#copy-link').textContent = '🔗 招待リンクをコピー'; }, 1500);
    });

    // pause
    $('#pause-btn').addEventListener('click', () => this._emit('togglePause'));

    // result
    $('#rematch').addEventListener('click', () => { this.hide('result'); this._emit('rematch'); });
    $('#to-menu').addEventListener('click', () => { this.hide('result'); this.hideHUD(); this._emit('toMenu'); });
  }

  _initLimbDots() {
    for (const side of ['1', '2']) {
      const el = document.getElementById('limbs' + side);
      el.innerHTML = '';
      for (const g of LIMB_GROUPS) {
        const d = document.createElement('div');
        d.className = 'limb-dot';
        d.dataset.part = g.key;
        d.textContent = g.icon;
        el.appendChild(d);
      }
    }
  }

  // ---- screen management ----
  show(id) {
    ['loading', 'menu', 'ai-setup', 'online-setup', 'result'].forEach(s => {
      document.getElementById(s)?.classList.add('hidden');
    });
    document.getElementById(id)?.classList.remove('hidden');
  }
  hide(id) { document.getElementById(id)?.classList.add('hidden'); }

  setLoading(pct, msg) {
    $('#loading-fill').style.width = pct + '%';
    if (msg) $('#loading-msg').textContent = msg;
  }

  showHUD(names, stage) {
    $('#hud').classList.remove('hidden');
    $('#hud-name1').textContent = names[0];
    $('#hud-name2').textContent = names[1];
    $('#pause-btn').style.display = 'block';
    // controls
    if (this.input.isTouch) {
      $('#touch-controls').classList.remove('hidden');
      this.input.initTouch();
    } else {
      $('#desktop-hint').classList.remove('hidden');
    }
  }

  hideHUD() {
    $('#hud').classList.add('hidden');
    $('#touch-controls').classList.add('hidden');
    $('#desktop-hint').classList.add('hidden');
  }

  setHealth(i, hp) {
    const el = document.getElementById('health' + (i + 1));
    if (el) el.style.width = (hp * 100) + '%';
  }

  setLimbs(i, doll) {
    const el = document.getElementById('limbs' + (i + 1));
    el.querySelectorAll('.limb-dot').forEach(d => {
      const part = d.dataset.part;
      d.classList.toggle('severed', doll.severed.has(part));
      d.classList.toggle('broken', doll.locked.has(part) && !doll.severed.has(part));
    });
  }

  setTimer(sec) { $('#match-timer').textContent = sec; }

  updateRoundPips(scores, toWin) {
    const total = toWin * 2 - 1;
    const el = $('#round-pips');
    el.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const p = document.createElement('div');
      p.className = 'pip';
      if (i < scores[0]) p.classList.add('win');
      el.appendChild(p);
    }
  }

  banner(text, type = 'round') {
    const el = $('#round-banner');
    el.textContent = text;
    el.className = 'round-banner';
    void el.offsetWidth;
    el.classList.add('show');
    el.classList.remove('hidden');
    if (type === 'fight') el.style.color = '#ffd24a';
    else if (type === 'count') el.style.color = '#00e5ff';
    else el.style.color = '#fff';
  }

  damageFlash() {
    this.flash.classList.remove('active');
    void this.flash.offsetWidth;
    this.flash.classList.add('active');
  }

  showResult(won, winnerName) {
    this.show('result');
    const t = $('#result-title');
    t.textContent = won ? 'VICTORY' : 'DEFEAT';
    t.className = won ? 'win' : 'lose';
    $('#result-sub').textContent = won ? 'あなたの勝利！' : `${winnerName} の勝利`;
  }

  // online helpers
  showRoomCode(code) {
    $('#room-info').classList.remove('hidden');
    $('#room-code').textContent = code;
  }
  setWaiting(msg) { $('#waiting-msg').textContent = msg; }
  setConnStatus(msg) { $('#conn-status').textContent = msg; }
}
