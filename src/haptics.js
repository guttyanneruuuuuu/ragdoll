// ============================================================
// Haptics — robust vibration wrapper.
//
// Problems this solves vs. calling navigator.vibrate() directly:
//   1. iOS Safari has NO navigator.vibrate at all -> we detect & skip,
//      and (optionally) fall back to a short WebAudio "thump" so the
//      hit still feels punchy on iPhones.
//   2. Each navigator.vibrate() call CANCELS the previous one. During a
//      flurry of hits this means only the last buzz is felt (or none).
//      We throttle to a minimum interval and merge nearby requests so the
//      strongest pattern in a window actually plays.
//   3. Vibration only works after a user gesture. We track an "unlocked"
//      flag set on the first pointer/touch/key event.
//   4. Respects a global mute (set by user setting / reduced-motion).
// ============================================================
import { audio } from './audio.js';

class Haptics {
  constructor() {
    this.supported = typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
    this.unlocked = false;
    this.enabled = true;
    // Honour OS-level "reduce motion" as a hint to soften haptics.
    try {
      this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (_) { this.reduceMotion = false; }

    this._minInterval = 30;   // ms — don't spam the motor
    this._lastFire = 0;
    this._pendingStrength = 0; // remembers the strongest queued buzz in a window
    this._pending = null;
    this._flushTimer = null;

    // Unlock on first user gesture (vibration is gated behind one).
    const unlock = () => { this.unlocked = true; };
    if (typeof window !== 'undefined') {
      window.addEventListener('pointerdown', unlock, { once: true });
      window.addEventListener('touchstart', unlock, { once: true, passive: true });
      window.addEventListener('keydown', unlock, { once: true });
      window.addEventListener('mousedown', unlock, { once: true });
    }
  }

  setEnabled(on) { this.enabled = !!on; }

  // Normalise a request into a numeric "strength" so we can compare which
  // queued buzz is the strongest within a throttle window.
  _strength(pattern) {
    if (typeof pattern === 'number') return pattern;
    if (Array.isArray(pattern)) return pattern.reduce((a, b) => a + b, 0);
    return 0;
  }

  // Public API: vibrate with a number (ms) or pattern array.
  buzz(pattern) {
    if (!this.enabled || !this.unlocked) return;

    // Soften when the user prefers reduced motion.
    if (this.reduceMotion) {
      pattern = typeof pattern === 'number'
        ? Math.round(pattern * 0.4)
        : (Array.isArray(pattern) ? pattern.map(v => Math.round(v * 0.4)) : pattern);
    }

    const now = performance.now();
    const since = now - this._lastFire;

    if (since >= this._minInterval) {
      this._fire(pattern);
    } else {
      // Within throttle window: remember only the strongest pattern, then
      // flush it once the window elapses. This prevents a burst of weak
      // buzzes from cancelling a strong one (the core "vibration feels
      // broken" complaint).
      const s = this._strength(pattern);
      if (s > this._pendingStrength) {
        this._pendingStrength = s;
        this._pending = pattern;
      }
      if (!this._flushTimer) {
        const wait = this._minInterval - since;
        this._flushTimer = setTimeout(() => {
          this._flushTimer = null;
          if (this._pending != null) {
            const p = this._pending;
            this._pending = null;
            this._pendingStrength = 0;
            this._fire(p);
          }
        }, Math.max(0, wait));
      }
    }
  }

  _fire(pattern) {
    this._lastFire = performance.now();
    if (this.supported) {
      try { navigator.vibrate(pattern); } catch (_) {}
    } else {
      // iOS / unsupported: synthesize a tactile-ish audio thump so hits
      // still land with impact. Cheap and only on real hits.
      this._audioThump(pattern);
    }
  }

  // Fallback "feel" for devices without a vibration motor.
  _audioThump(pattern) {
    const strength = this._strength(pattern);
    if (strength <= 0) return;
    try {
      if (audio && typeof audio.thump === 'function') {
        audio.thump(Math.min(1, strength / 120));
      }
    } catch (_) {}
  }

  // Convenience presets used across the game for consistent feel.
  light()  { this.buzz(18); }
  hit()    { this.buzz([40]); }
  heavy()  { this.buzz([60, 30, 80]); }
  hurt()   { this.buzz([55]); }
  hurtBig(){ this.buzz([90, 40, 50]); }
  clash()  { this.buzz([25, 20, 35]); }
}

export const haptics = new Haptics();
