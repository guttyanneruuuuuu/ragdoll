// ============================================================
// Procedural audio via Web Audio API (no external assets)
// ============================================================
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.master = null;
    this.musicGain = null;
    this._musicNodes = [];
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.6;
    this.master.connect(this.ctx.destination);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.18;
    this.musicGain.connect(this.master);
  }

  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }

  _env(node, t0, attack, decay, peak = 1) {
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay);
    node.connect(g);
    return g;
  }

  swing() {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const noise = this._noise(0.18);
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.setValueAtTime(800, t);
    bp.frequency.exponentialRampToValueAtTime(3000, t + 0.15);
    const g = this._env(bp, t, 0.01, 0.16, 0.5);
    noise.connect(bp); g.connect(this.master); noise.start(t); noise.stop(t + 0.2);
  }

  clash() {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const o = this.ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.setValueAtTime(2400 + Math.random() * 2000, t);
      o.frequency.exponentialRampToValueAtTime(900, t + 0.1);
      const g = this._env(o, t, 0.002, 0.12, 0.35);
      g.connect(this.master); o.start(t); o.stop(t + 0.14);
    }
    const noise = this._noise(0.08);
    const hp = this.ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 4000;
    const g = this._env(hp, t, 0.001, 0.07, 0.4);
    noise.connect(hp); g.connect(this.master); noise.start(t); noise.stop(t + 0.09);
  }

  slice() {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const noise = this._noise(0.25);
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.setValueAtTime(2600, t);
    bp.frequency.exponentialRampToValueAtTime(400, t + 0.22);
    const g = this._env(bp, t, 0.005, 0.24, 0.6);
    noise.connect(bp); g.connect(this.master); noise.start(t); noise.stop(t + 0.28);
    // low thud
    const o = this.ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(50, t + 0.2);
    const g2 = this._env(o, t, 0.005, 0.22, 0.5); g2.connect(this.master); o.start(t); o.stop(t + 0.24);
  }

  thud() {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.18);
    const g = this._env(o, t, 0.004, 0.2, 0.6); g.connect(this.master); o.start(t); o.stop(t + 0.22);
  }

  win() { this._jingle([523, 659, 784, 1047], 0.12); }
  lose() { this._jingle([392, 330, 262, 196], 0.16); }

  _jingle(notes, dur) {
    if (!this.ctx || !this.enabled) return;
    let t = this.ctx.currentTime;
    for (const f of notes) {
      const o = this.ctx.createOscillator(); o.type = 'square';
      o.frequency.value = f;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur); t += dur * 0.9;
    }
  }

  countdown(n) {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator(); o.type = 'sine';
    o.frequency.value = n === 0 ? 880 : 440;
    const g = this._env(o, t, 0.01, 0.25, 0.4); g.connect(this.master); o.start(t); o.stop(t + 0.3);
  }

  _noise(dur) {
    const sr = this.ctx.sampleRate;
    const buf = this.ctx.createBuffer(1, sr * dur, sr);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource(); src.buffer = buf; return src;
  }

  // simple ambient synthwave loop (taiko-ish pulse)
  startMusic() {
    if (!this.ctx || this._musicPlaying) return;
    this._musicPlaying = true;
    const bpm = 120, beat = 60 / bpm;
    const loop = () => {
      if (!this._musicPlaying) return;
      const t = this.ctx.currentTime;
      // kick
      const o = this.ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.4, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      o.connect(g); g.connect(this.musicGain); o.start(t); o.stop(t + 0.2);
      this._beat = (this._beat || 0) + 1;
      // bass note every 2 beats
      if (this._beat % 2 === 0) {
        const notes = [55, 65, 49, 73];
        const bo = this.ctx.createOscillator(); bo.type = 'sawtooth';
        bo.frequency.value = notes[(this._beat / 2) % notes.length | 0];
        const bg = this.ctx.createGain();
        bg.gain.setValueAtTime(0.0001, t); bg.gain.linearRampToValueAtTime(0.12, t + 0.05);
        bg.gain.exponentialRampToValueAtTime(0.0001, t + beat * 1.8);
        const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 600;
        bo.connect(lp); lp.connect(bg); bg.connect(this.musicGain); bo.start(t); bo.stop(t + beat * 2);
      }
      this._musicTimer = setTimeout(loop, beat * 1000);
    };
    loop();
  }

  stopMusic() {
    this._musicPlaying = false;
    if (this._musicTimer) clearTimeout(this._musicTimer);
  }

  setEnabled(v) { this.enabled = v; if (this.master) this.master.gain.value = v ? 0.6 : 0; }
}

export const audio = new AudioEngine();
