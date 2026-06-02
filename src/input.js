// ============================================================
//  input.js — Keyboard, touch & on-screen control manager
//  Maps inputs to per-player intents: moveLeft/right, jump, swing.
//  Supports 2-player local keyboard layout + touch buttons.
// ============================================================

export class InputManager {
  constructor() {
    this.keys = new Set();
    this._bind();
    // intents per player slot
    this.touch = {
      0: { left: false, right: false, jump: false, swing: false },
      1: { left: false, right: false, jump: false, swing: false },
    };
  }

  _bind() {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      // prevent page scroll on space/arrows during play
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
    }, { passive: false });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
  }

  down(code) { return this.keys.has(code); }

  /**
   * Player 1 controls: A/D move, W jump, F or Space swing.
   * Player 2 controls: ← → move, ↑ jump, . (Period) or Enter swing.
   */
  intent(playerIndex) {
    const t = this.touch[playerIndex] || {};
    if (playerIndex === 0) {
      return {
        left:  this.down('KeyA') || t.left,
        right: this.down('KeyD') || t.right,
        jump:  this.down('KeyW') || t.jump,
        swing: this.down('KeyF') || this.down('Space') || t.swing,
      };
    } else {
      return {
        left:  this.down('ArrowLeft') || t.left,
        right: this.down('ArrowRight') || t.right,
        jump:  this.down('ArrowUp') || t.jump,
        swing: this.down('Enter') || this.down('Period') || t.swing,
      };
    }
  }

  setTouch(playerIndex, action, value) {
    if (!this.touch[playerIndex]) this.touch[playerIndex] = {};
    this.touch[playerIndex][action] = value;
  }
}
