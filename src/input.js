// ============================================================
// Input — dual virtual joysticks (move + sword) via nipplejs,
// plus desktop keyboard/mouse fallback.
//   left stick  -> movement direction
//   right stick -> sword swing direction (release = slash)
//
// NOTE: We use mode: 'semi' so the joystick appears wherever the
// player first touches inside the zone. This solves "I tap but
// nothing happens" complaints from mode: 'static' where the pad
// is invisible/fixed and players miss it.
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
    this._touchEls = null;
  }

  initTouch(leftEl, rightEl) {
    this.destroy();
    if (!leftEl || !rightEl) return;
    this._touchEls = { left: leftEl, right: rightEl };

    // Make sure layout is settled before nipplejs measures the zones.
    // Without this, zones can have width/height = 0 and the joystick
    // never receives touchstart events (the classic "stick doesn't react").
    const create = () => {
      // double-check zones have non-zero size; if not, retry next frame
      const lr = leftEl.getBoundingClientRect();
      const rr = rightEl.getBoundingClientRect();
      if (lr.width < 10 || lr.height < 10 || rr.width < 10 || rr.height < 10) {
        requestAnimationFrame(create);
        return;
      }
      this._buildJoysticks(leftEl, rightEl);
    };
    // Wait two RAFs so any display:none -> block change is fully applied
    requestAnimationFrame(() => requestAnimationFrame(create));
  }

  _buildJoysticks(leftEl, rightEl) {
    // ---- LEFT: movement ----
    // semi mode = stick appears where you press; restJoystick=false means
    // it stays where you put it until release. Much better UX than 'static'.
    const left = nipplejs.create({
      zone: leftEl,
      mode: 'semi',
      catchDistance: 200,
      color: '#00e5ff',
      size: 130,
      restJoystick: true,
      restOpacity: 0.6,
      threshold: 0.05,
      fadeTime: 80,
    });
    left.on('start move', (e, d) => {
      if (!d || !d.angle) return;
      const a = d.angle.radian;
      const f = Math.min(d.force, 1.4);
      this.move.x = Math.cos(a) * f;
      this.move.z = -Math.sin(a) * f;
    });
    left.on('end', () => { this.move.x = 0; this.move.z = 0; });

    // ---- RIGHT: sword swing direction ----
    const right = nipplejs.create({
      zone: rightEl,
      mode: 'semi',
      catchDistance: 200,
      color: '#ffd24a',
      size: 140,
      restJoystick: true,
      restOpacity: 0.6,
      threshold: 0.05,
      fadeTime: 80,
    });
    right.on('start move', (e, d) => {
      if (!d || !d.angle) return;
      const a = d.angle.radian;
      const f = Math.min(d.force, 1.8);
      this._rightVec = { x: Math.cos(a) * f, y: Math.sin(a) * f };
    });
    right.on('end', () => {
      // fire a slash in the held direction (or a default forward slash if tap)
      const v = this._rightVec;
      const mag = Math.hypot(v.x, v.y);
      if (mag > 0.25) {
        this.swingQueued = { dx: v.x, dy: v.y };
      } else {
        // simple tap = horizontal slash in facing direction (handled by fighter)
        this.swingQueued = { dx: 1, dy: 0.3 };
      }
      this._rightVec = { x: 0, y: 0 };
    });

    this._joysticks = [left, right];

    // Stop the canvas from receiving these touches and swallowing them.
    // touch-action: none also prevents browser pinch/scroll on the pads.
    for (const el of [leftEl, rightEl]) {
      el.style.touchAction = 'none';
      // Belt-and-suspenders: prevent default on touchstart so the
      // browser doesn't fire synthesized mouseevents to the canvas.
      el.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
      el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    }
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

  // wasdOnly=true is used in LOCAL-2P mode so arrow keys don't bleed into P1's
  // movement (arrows are P2's controls there).
  pollDesktop(wasdOnly = false) {
    if (!this._desktop) return;
    let x = 0, z = 0;
    if (this.keys['KeyW']) z -= 1;
    if (this.keys['KeyS']) z += 1;
    if (this.keys['KeyA']) x -= 1;
    if (this.keys['KeyD']) x += 1;
    if (!wasdOnly) {
      if (this.keys['ArrowUp']) z -= 1;
      if (this.keys['ArrowDown']) z += 1;
      if (this.keys['ArrowLeft']) x -= 1;
      if (this.keys['ArrowRight']) x += 1;
    }
    const m = Math.hypot(x, z);
    if (m > 0) { x /= m; z /= m; }
    // only override touch move when keys pressed
    if (m > 0 || this._lastKeyMove) { this.move.x = x; this.move.z = z; }
    this._lastKeyMove = m > 0;
    // F = swing forward; LeftShift = block
    if (this.keys['KeyF']) this.swingQueued = { dx: 1, dy: 0.3 };
    this.blocking = !!this.keys['ShiftLeft'];
  }

  consumeSwing() { const s = this.swingQueued; this.swingQueued = null; return s; }

  destroy() {
    for (const j of this._joysticks) try { j.destroy(); } catch (e) {}
    this._joysticks = [];
  }
}
