// ============================================================
// Procedural audio via WebAudio — no asset files to load.
// Metal clangs, slashes, impacts, UI blips, ambient drone.
// ============================================================
class AudioEngine {
  constructor() { this.ctx = null; this.master = null; this.enabled = true; this._music = null; }

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.4;
      this.master.connect(this.ctx.destination);
    } catch (e) { this.enabled = false; }
  }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }

  tone(freq, dur, type = 'sine', vol = 0.3, slideTo = null) {
    if (!this.ctx || !this.enabled) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq;
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, this.ctx.currentTime + dur);
    g.gain.setValueAtTime(vol, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    o.connect(g); g.connect(this.master);
    o.start(); o.stop(this.ctx.currentTime + dur);
  }

  noise(dur, vol = 0.3, filterFreq = 2000) {
    if (!this.ctx || !this.enabled) return;
    const n = Math.floor(this.ctx.sampleRate * dur);
    const buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = this.ctx.createBufferSource(); src.buffer = buf;
    const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = filterFreq;
    const g = this.ctx.createGain(); g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start();
  }

  slash() { this.noise(0.18, 0.25, 3500); this.tone(900, 0.12, 'sawtooth', 0.08, 400); }
  clang() { this.tone(1400, 0.25, 'square', 0.18, 600); this.tone(2100, 0.2, 'triangle', 0.1); this.noise(0.1, 0.15, 5000); }
  hit()   { this.noise(0.2, 0.35, 800); this.tone(120, 0.25, 'sine', 0.3, 60); }
  sever() { this.noise(0.35, 0.4, 500); this.tone(80, 0.4, 'sawtooth', 0.3, 40); }
  ko()    { this.tone(440, 0.6, 'square', 0.25, 110); this.tone(220, 0.6, 'sine', 0.2, 80); }
  win()   { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => this.tone(f, 0.3, 'triangle', 0.2), i * 120)); }
  lose()  { [392, 330, 262, 196].forEach((f, i) => setTimeout(() => this.tone(f, 0.35, 'sine', 0.2), i * 140)); }
  blip()  { this.tone(660, 0.08, 'square', 0.12); }

  // Tactile fallback for devices without a vibration motor (e.g. iOS).
  // A short low-frequency sine "thump" the body feels through the speaker.
  // strength 0..1 scales loudness & duration.
  thump(strength = 0.5) {
    if (!this.ctx || !this.enabled) return;
    const s = Math.max(0.05, Math.min(1, strength));
    const dur = 0.05 + s * 0.09;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(160, this.ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + dur);
    g.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.35 * s, this.ctx.currentTime + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + dur);
    o.connect(g); g.connect(this.master);
    o.start(); o.stop(this.ctx.currentTime + dur + 0.02);
  }

  startMusic() {
    if (!this.ctx || this._music) return;
    // simple synthwave drone + pulse
    const g = this.ctx.createGain(); g.gain.value = 0.06; g.connect(this.master);
    const o1 = this.ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 55;
    const o2 = this.ctx.createOscillator(); o2.type = 'sawtooth'; o2.frequency.value = 82.4;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 400;
    o1.connect(f); o2.connect(f); f.connect(g);
    o1.start(); o2.start();
    this._music = { g, o1, o2, f };
    // pulse arp
    this._arp = setInterval(() => {
      if (!this.ctx) return;
      const notes = [110, 138.6, 164.8, 138.6];
      const n = notes[Math.floor(Math.random() * notes.length)];
      this.tone(n, 0.2, 'square', 0.04);
    }, 480);
  }
  stopMusic() {
    if (this._music) { try { this._music.o1.stop(); this._music.o2.stop(); } catch (e) {} this._music = null; }
    if (this._arp) { clearInterval(this._arp); this._arp = null; }
  }
}

export const audio = new AudioEngine();
