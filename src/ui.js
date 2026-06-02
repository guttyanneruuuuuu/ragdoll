// ============================================================
// UIManager — screens, HUD, event bus between DOM and game.
// ============================================================
import { WEAPONS, STAGES, AI_PROFILES } from './config.js';

export class UIManager {
  constructor() {
    this.handlers = {};
    this.screens = {};
    this.input = null;
    document.querySelectorAll('[data-screen]').forEach(el => { this.screens[el.dataset.screen] = el; });
    this.bind();
  }
  on(ev, fn) { (this.handlers[ev] ||= []).push(fn); }
  emit(ev, data) { (this.handlers[ev] || []).forEach(f => f(data)); }

  show(name) {
    // hide the boot loading overlay once any screen is shown
    document.getElementById('loading')?.classList.remove('show');
    for (const [k, el] of Object.entries(this.screens)) el.classList.toggle('active', k === name);
    const isGame = name === 'game';
    document.getElementById('touch-controls').style.display = isGame ? 'block' : 'none';
    document.getElementById('hud').style.display = isGame ? 'flex' : 'none';
    document.getElementById('btn-pause').style.display = isGame ? 'block' : 'none';

    // re-init touch if entering game to fix nipplejs sizing issues when elements were hidden
    if (isGame && this.input) {
      this.input.initTouch(document.getElementById('joy-left'), document.getElementById('joy-right'));
    }
  }
  hide(name) { this.screens[name]?.classList.remove('active'); }

  setLoading(pct, text) {
    const bar = document.getElementById('load-bar');
    const txt = document.getElementById('load-text');
    if (bar) bar.style.width = pct + '%';
    if (txt && text) txt.textContent = text;
  }

  bind() {
    const $ = (id) => document.getElementById(id);
    const click = (id, fn) => { const e = $(id); if (e) e.addEventListener('click', () => { this.emit('userInteract'); fn(); }); };

    // main menu
    click('btn-ai', () => this.show('ai-setup'));
    click('btn-local', () => this.show('local-setup'));
    click('btn-online', () => this.show('online-setup'));
    click('btn-howto', () => this.show('howto'));
    document.querySelectorAll('[data-back]').forEach(b =>
      b.addEventListener('click', () => this.show(b.dataset.back)));

    // populate weapon & stage selectors
    this.fillSelect('ai-weapon', WEAPONS, k => WEAPONS[k].name);
    this.fillSelect('ai-stage', STAGES, k => STAGES[k].name);
    this.fillSelect('local-weapon1', WEAPONS, k => WEAPONS[k].name);
    this.fillSelect('local-weapon2', WEAPONS, k => WEAPONS[k].name);
    this.fillSelect('local-stage', STAGES, k => STAGES[k].name);
    this.fillSelect('online-weapon', WEAPONS, k => WEAPONS[k].name);
    this.fillSelect('online-stage', STAGES, k => STAGES[k].name);

    // AI difficulty buttons
    document.querySelectorAll('#ai-diff .diff-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('#ai-diff .diff-btn').forEach(x => x.classList.remove('sel'));
        b.classList.add('sel');
      });
    });

    click('ai-start', () => {
      const difficulty = document.querySelector('#ai-diff .diff-btn.sel')?.dataset.diff || 'normal';
      this.emit('startAI', { difficulty, weapon: $('ai-weapon').value, stage: $('ai-stage').value });
    });

    click('local-start', () => {
      this.emit('startLocal', {
        weapons: [$('local-weapon1').value, $('local-weapon2').value],
        stage: $('local-stage').value,
      });
    });

    // online tabs
    document.querySelectorAll('.online-tabs .tab').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.online-tabs .tab').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        $('host-panel').style.display = t.dataset.tab === 'host' ? 'block' : 'none';
        $('join-panel').style.display = t.dataset.tab === 'join' ? 'block' : 'none';
      });
    });
    click('host-create', () => this.emit('hostRoom', {
      name: $('host-name').value || 'Host',
      weapon: $('online-weapon').value, stage: $('online-stage').value,
    }));
    click('join-go', () => this.emit('joinRoom', {
      code: $('join-code').value, name: $('join-name').value || 'Guest',
    }));
    click('online-start-match', () => this.emit('onlineStart'));
    click('copy-link', () => {
      const code = $('room-code-display').textContent;
      const link = `${location.origin}${location.pathname}?room=${code}`;
      navigator.clipboard?.writeText(link);
      const btn = $('copy-link'); const o = btn.textContent;
      btn.textContent = 'コピーしました！'; setTimeout(() => btn.textContent = o, 1500);
    });

    // pause / result
    click('btn-pause', () => { $('pause-overlay').classList.add('show'); });
    click('resume', () => { $('pause-overlay').classList.remove('show'); });
    click('quit', () => { $('pause-overlay').classList.remove('show'); this.emit('quit'); });
    click('result-menu', () => { $('result-overlay').classList.remove('show'); this.emit('quit'); });
    click('result-rematch', () => { $('result-overlay').classList.remove('show'); this.emit('rematch'); });
  }

  fillSelect(id, map, label) {
    const el = document.getElementById(id); if (!el) return;
    el.innerHTML = '';
    for (const k of Object.keys(map)) {
      const o = document.createElement('option'); o.value = k; o.textContent = label(k);
      el.appendChild(o);
    }
  }

  // ---- room lobby ----
  showRoomCode(code, peers = []) {
    this.show('online-lobby');
    document.getElementById('room-code-display').textContent = code;
    this.updatePeers(peers);
    const link = `${location.origin}${location.pathname}?room=${code}`;
    document.getElementById('room-link').textContent = link;
  }
  updatePeers(peers) {
    const list = document.getElementById('peer-list'); if (!list) return;
    list.innerHTML = '';
    peers.forEach(p => {
      const li = document.createElement('li'); li.textContent = '⚔ ' + (p.name || p.id);
      list.appendChild(li);
    });
  }
  setHostControls(isHost) {
    const b = document.getElementById('online-start-match');
    if (b) b.style.display = isHost ? 'inline-block' : 'none';
    const w = document.getElementById('waiting-host');
    if (w) w.style.display = isHost ? 'none' : 'block';
  }

  // ---- HUD ----
  setupHUD(names, scores) {
    document.getElementById('hud-name1').textContent = names[0];
    document.getElementById('hud-name2').textContent = names[1];
    this.updateScore(scores);
    document.getElementById('hud').style.display = 'flex';
  }
  updateScore(scores) {
    document.getElementById('hud-score1').textContent = scores[0];
    document.getElementById('hud-score2').textContent = scores[1];
  }
  updateBars(fighters) {
    // health = inverse of locked joints / severed
    fighters.forEach((f, i) => {
      const locked = f.jointLockCount();
      const sev = Object.keys(f.severed).length;
      const hp = Math.max(0, 100 - locked * 22 - sev * 30);
      const bar = document.getElementById('hud-hp' + (i + 1));
      if (bar) bar.style.width = (f.alive ? hp : 0) + '%';
    });
  }
  announce(text) {
    const el = document.getElementById('announce');
    if (!el) return;
    el.textContent = text; el.classList.remove('show');
    void el.offsetWidth; el.classList.add('show');
  }
  showResult(text, win) {
    const ov = document.getElementById('result-overlay');
    document.getElementById('result-text').textContent = text;
    document.getElementById('result-text').className = win ? 'win' : 'lose';
    ov.classList.add('show');
  }
  toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  }
}
