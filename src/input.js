// ============================================================
// Input — dual virtual joysticks (move + sword) via nipplejs,
// plus desktop keyboard/mouse fallback.
//   left stick  -> movement direction
//   right stick -> sword swing direction (release = slash)
// ============================================================
import nipplejs from 'nipplejs';

export class InputManager {
  constructor() {
    this.move = { x: 0, z: 0 };
    this.swingQueued = null;     // {dx,dy} when a swing is fired
    this.blocking = false;
    this._rightVec = { x: 0, y: 0 };
    this._joysticks = [];
    this.keys = {};
  }

  initTouch(leftEl, rightEl) {
    this.destroy();
    const left = nipplejs.create({
      zone: leftEl, mode: 'static', position: { left: '50%', top: '50%' },
      color: '#00e5ff', size: 130,
    });
    left.on('move', (e, d) => {
      const a = d.angle.radian;
      const f = Math.min(d.force, 1.4);
      this.move.x = Math.cos(a) * f;
      this.move.z = -Math.sin(a) * f;
    });
    left.on('end', () => { this.move.x = 0; this.move.z = 0; });

    const right = nipplejs.create({
      zone: rightEl, mode: 'static', position: { left: '50%', top: '50%' },
      color: '#ffd24a', size: 140,
    });
    right.on('move', (e, d) => {
      const a = d.angle.radian;
      const f = Math.min(d.force, 1.8);
      this._rightVec = { x: Math.cos(a) * f, y: Math.sin(a) * f };
    });
    right.on('end', () => {
      // fire a slash in the held direction
      const v = this._rightVec;
      if (Math.hypot(v.x, v.y) > 0.15) this.swingQueued = { dx: v.x, dy: v.y };
      this._rightVec = { x: 0, y: 0 };
    });

    this._joysticks = [left, right];
  }

  initDesktop(canvas) {
    window.addEventListener('keydown', (e) => { this.keys[e.code] = true; });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    // mouse: drag to swing
    let down = false, sx = 0, sy = 0;
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 2) { this.blocking = true; return; }
      down = true; sx = e.clientX; sy = e.clientY;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 2) { this.blocking = false; return; }
      if (down) {
        const dx = e.clientX - sx, dy = sy - e.clientY;
        if (Math.hypot(dx, dy) > 12) this.swingQueued = { dx, dy };
        else this.swingQueued = { dx: 0, dy: 1 }; // tap = upward slash
      }
      down = false;
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    this._desktop = true;
  }

  pollDesktop() {
    if (!this._desktop) return;
    let x = 0, z = 0;
    if (this.keys['KeyW'] || this.keys['ArrowUp']) z -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) z += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) x -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) x += 1;
    const m = Math.hypot(x, z);
    if (m > 0) { x /= m; z /= m; }
    // only override touch move when keys pressed
    if (m > 0 || this._lastKeyMove) { this.move.x = x; this.move.z = z; }
    this._lastKeyMove = m > 0;
    this.blocking = !!this.keys['Space'];
  }

  consumeSwing() { const s = this.swingQueued; this.swingQueued = null; return s; }

  destroy() {
    for (const j of this._joysticks) try { j.destroy(); } catch (e) {}
    this._joysticks = [];
  }
}
