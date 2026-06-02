// ============================================================
//  audio.js — Procedural sound effects via Web Audio API
//  Generates swing whooshes, blade clashes, slices and thuds at
//  runtime — no audio files required.
// ============================================================

export class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  _ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  _tone(freq, dur, type = 'sine', gain = 0.2, slideTo = null) {
    const ctx = this._ensure();
    if (!ctx || !this.enabled) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, ctx.currentTime);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, ctx.currentTime + dur);
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + dur);
  }

  _noise(dur, gain = 0.3, filterFreq = 1200) {
    const ctx = this._ensure();
    if (!ctx || !this.enabled) return;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const flt = ctx.createBiquadFilter();
    flt.type = 'bandpass';
    flt.frequency.value = filterFreq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    src.connect(flt).connect(g).connect(ctx.destination);
    src.start();
  }

  swing()  { this._noise(0.18, 0.12, 1800); this._tone(420, 0.15, 'sine', 0.05, 180); }
  clash()  { this._tone(1400, 0.12, 'square', 0.18, 600); this._noise(0.1, 0.2, 3500); }
  slice()  { this._noise(0.22, 0.35, 900); this._tone(160, 0.25, 'sawtooth', 0.15, 60); }
  thud()   { this._tone(90, 0.2, 'sine', 0.3, 40); }
  win()    { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => this._tone(f, 0.25, 'triangle', 0.2), i * 110)); }
  click()  { this._tone(660, 0.06, 'square', 0.12); }
}
