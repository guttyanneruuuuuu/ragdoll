// ============================================================
// Input — dual virtual joysticks (move + sword), implemented with
// raw Pointer Events for maximum reliability across browsers.
//   left stick  -> movement direction
//   right stick -> sword swing direction (release = slash)
//
// WHY NOT nipplejs?
//   nipplejs measures the zone on creation; if the zone is display:none
//   (as the touch-controls are until the game screen is shown) the pads
//   silently fail to bind, producing the classic "I tap but nothing
//   happens" bug. A small self-contained pointer-events implementation
//   avoids that entirely, draws its own visual stick, and works the
//   instant the zone becomes visible — no RAF timing games required.
//
// DYNAMIC mode: the stick base appears wherever the finger first lands
// inside the zone and follows release, so players never "miss" the pad.
// ============================================================

export class InputManager {
  constructor() {
    this.move = { x: 0, z: 0 };
    this.swingQueued = null;     // {dx,dy} when a swing is fired
    this.blocking = false;
    this._rightVec = { x: 0, y: 0 };
    this.keys = {};
    this._touchEls = null;
    this._sticks = [];           // {el, base, knob, pointerId, handlers}
    this._maxRadius = 60;        // px travel of the knob
  }

  // leftEl / rightEl are the .joy-zone containers.
  initTouch(leftEl, rightEl) {
    this.destroy();
    if (!leftEl || !rightEl) return;
    this._touchEls = { left: leftEl, right: rightEl };

    this._makeStick(leftEl, 'move');
    this._makeStick(rightEl, 'sword');
  }

  // Build a single dynamic pointer joystick inside `zone`.
  _makeStick(zone, role) {
    // Ensure the zone can host absolutely-positioned children & catch touches.
    zone.style.touchAction = 'none';
    zone.style.userSelect = 'none';

    // Visual elements (created once, reused). Hidden until touched.
    let base = zone.querySelector('.vjoy-base');
    let knob;
    if (!base) {
      base = document.createElement('div');
      base.className = 'vjoy-base';
      knob = document.createElement('div');
      knob.className = 'vjoy-knob';
      base.appendChild(knob);
      zone.appendChild(base);
    } else {
      knob = base.querySelector('.vjoy-knob');
    }
    base.style.display = 'none';

    const accent = role === 'move' ? '#00e5ff' : '#ffd24a';
    base.style.borderColor = accent;
    knob.style.background = accent;

    const state = { active: false, pointerId: null, cx: 0, cy: 0 };

    const setVec = (dx, dy) => {
      // clamp to max radius
      const mag = Math.hypot(dx, dy);
      const r = this._maxRadius;
      let kx = dx, ky = dy;
      if (mag > r) { kx = (dx / mag) * r; ky = (dy / mag) * r; }
      knob.style.transform = `translate(${kx}px, ${ky}px)`;
      const force = Math.min(mag / r, 1.4);
      // screen-space: +x right, +y down. angle in radians.
      const ang = Math.atan2(-dy, dx); // up = +PI/2
      if (role === 'move') {
        this.move.x = Math.cos(ang) * force;
        this.move.z = -Math.sin(ang) * force;
      } else {
        this._rightVec = { x: Math.cos(ang) * Math.min(force, 1.8), y: Math.sin(ang) * Math.min(force, 1.8) };
      }
    };

    const onDown = (e) => {
      if (state.active) return;
      e.preventDefault();
      state.active = true;
      state.pointerId = e.pointerId;
      const rect = zone.getBoundingClientRect();
      state.cx = e.clientX;
      state.cy = e.clientY;
      // place the base at the touch point (dynamic mode)
      base.style.left = (e.clientX - rect.left) + 'px';
      base.style.top = (e.clientY - rect.top) + 'px';
      base.style.display = 'block';
      knob.style.transform = 'translate(0px,0px)';
      try { zone.setPointerCapture(e.pointerId); } catch (_) {}
    };

    const onMove = (e) => {
      if (!state.active || e.pointerId !== state.pointerId) return;
      e.preventDefault();
      setVec(e.clientX - state.cx, e.clientY - state.cy);
    };

    const onUp = (e) => {
      if (!state.active || e.pointerId !== state.pointerId) return;
      e.preventDefault();
      state.active = false;
      state.pointerId = null;
      base.style.display = 'none';
      knob.style.transform = 'translate(0px,0px)';
      try { zone.releasePointerCapture(e.pointerId); } catch (_) {}

      if (role === 'move') {
        this.move.x = 0; this.move.z = 0;
      } else {
        const v = this._rightVec;
        const mag = Math.hypot(v.x, v.y);
        if (mag > 0.25) this.swingQueued = { dx: v.x, dy: v.y };
        else this.swingQueued = { dx: 1, dy: 0.3 }; // tap = forward slash
        this._rightVec = { x: 0, y: 0 };
      }
    };

    zone.addEventListener('pointerdown', onDown, { passive: false });
    zone.addEventListener('pointermove', onMove, { passive: false });
    zone.addEventListener('pointerup', onUp, { passive: false });
    zone.addEventListener('pointercancel', onUp, { passive: false });
    // Fallback for very old browsers that synthesize touch but no pointer events.
    zone.addEventListener('lostpointercapture', onUp, { passive: false });

    this._sticks.push({
      zone, base, knob, role,
      handlers: { onDown, onMove, onUp },
    });
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
    for (const s of this._sticks) {
      const { zone, handlers } = s;
      zone.removeEventListener('pointerdown', handlers.onDown);
      zone.removeEventListener('pointermove', handlers.onMove);
      zone.removeEventListener('pointerup', handlers.onUp);
      zone.removeEventListener('pointercancel', handlers.onUp);
      zone.removeEventListener('lostpointercapture', handlers.onUp);
      if (s.base && s.base.parentNode) s.base.parentNode.removeChild(s.base);
    }
    this._sticks = [];
    this.move = { x: 0, z: 0 };
    this._rightVec = { x: 0, y: 0 };
  }
}
