// ============================================================
// Input — SINGLE-STICK "sword-follow" control.
//
//   ONE virtual joystick (anywhere on screen) drives EVERYTHING:
//     • The stick direction  -> where the sword points / reaches.
//     • The body (hips/feet)  -> drifts toward the stick so the
//       fighter "follows the sword" (swing the blade, the body comes
//       along). This is the "剣を振り回すと体がついてくる" feel.
//     • A fast FLICK of the stick -> a slash in that direction.
//       (so you can both aim slowly AND whip-attack with one thumb.)
//     • A quick TAP (no drag)  -> a forward slash.
//
// WHY one stick?  Two sticks (move + aim) are fiddly on a phone. With a
// single stick the sword IS the controller: aim it, flick it, your body
// chases it. Far simpler and more "ragdoll-blade" feeling.
//
// Implemented with raw Pointer Events (not nipplejs) for reliability:
// nipplejs measures its zone on creation and silently fails if the zone
// was display:none. Our self-contained pad works the instant it's shown.
//
// DESKTOP: WASD/arrows = body drift, mouse drag = sword aim+slash,
//          mouse hold = aim, Shift / right-click = guard.
// ============================================================

export class InputManager {
  constructor() {
    // body drift direction (what the legs chase). On mobile this is derived
    // from the stick; on desktop from WASD.
    this.move = { x: 0, z: 0 };
    // current sword aim vector in screen space (x:right, y:up). Magnitude
    // 0..~1.4 encodes how far the stick is pushed (= reach / commitment).
    this.swordVec = { x: 0, y: 0 };
    // a queued slash {dx,dy} produced by a flick / release / tap.
    this.swingQueued = null;
    this.blocking = false;

    this.keys = {};
    this._touchEls = null;
    this._sticks = [];
    this._maxRadius = 64;        // px travel of the knob
    this._stickActive = false;   // is a touch stick currently held?
  }

  // leftEl is now the ONLY stick. rightEl is accepted for backwards
  // compatibility but no stick is built on it.
  initTouch(leftEl, rightEl) {
    this.destroy();
    if (!leftEl) return;
    this._touchEls = { left: leftEl };
    // Make the left zone cover the whole control area so the player can
    // grab the stick anywhere comfortable.
    this._makeStick(leftEl, 'sword');
    // Right zone is unused in single-stick mode — make it inert.
    if (rightEl) {
      rightEl.style.pointerEvents = 'none';
      const oldBase = rightEl.querySelector('.vjoy-base');
      if (oldBase) oldBase.remove();
    }
  }

  // Build the single dynamic sword-stick inside `zone`.
  _makeStick(zone, role) {
    zone.style.touchAction = 'none';
    zone.style.userSelect = 'none';

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

    const accent = '#ffd24a';            // sword = gold
    base.style.borderColor = accent;
    knob.style.background = accent;

    const state = {
      active: false, pointerId: null, cx: 0, cy: 0,
      lastX: 0, lastY: 0, lastT: 0, peakFlick: 0, flickVec: { x: 0, y: 0 },
    };

    const setVec = (dx, dy) => {
      const mag = Math.hypot(dx, dy);
      const r = this._maxRadius;
      let kx = dx, ky = dy;
      if (mag > r) { kx = (dx / mag) * r; ky = (dy / mag) * r; }
      knob.style.transform = `translate(${kx}px, ${ky}px)`;
      const force = Math.min(mag / r, 1.4);
      // screen-space angle: up = +y. (dy is +down, so negate.)
      const ang = Math.atan2(-dy, dx);
      const ux = Math.cos(ang), uy = Math.sin(ang);
      // Sword points where the stick points (uy>0 = up on screen).
      this.swordVec = { x: ux * force, y: uy * force };
      // Body chases the stick on the ground plane.
      //   screen-x -> world-x, screen-up(-dy) -> world-forward(-z).
      this.move.x = ux * force;
      this.move.z = -uy * force;
    };

    const onDown = (e) => {
      if (state.active) return;
      e.preventDefault();
      state.active = true;
      this._stickActive = true;
      state.pointerId = e.pointerId;
      const rect = zone.getBoundingClientRect();
      state.cx = e.clientX; state.cy = e.clientY;
      state.lastX = e.clientX; state.lastY = e.clientY;
      state.lastT = performance.now();
      state.peakFlick = 0; state.flickVec = { x: 0, y: 0 };
      base.style.left = (e.clientX - rect.left) + 'px';
      base.style.top = (e.clientY - rect.top) + 'px';
      base.style.display = 'block';
      knob.style.transform = 'translate(0px,0px)';
      try { zone.setPointerCapture(e.pointerId); } catch (_) {}
    };

    const onMove = (e) => {
      if (!state.active || e.pointerId !== state.pointerId) return;
      e.preventDefault();
      const dx = e.clientX - state.cx, dy = e.clientY - state.cy;
      setVec(dx, dy);

      // ---- flick detection: fast pointer speed => slash ----
      const now = performance.now();
      const dt = Math.max(1, now - state.lastT);
      const vx = (e.clientX - state.lastX) / dt;   // px / ms
      const vy = (e.clientY - state.lastY) / dt;
      const speed = Math.hypot(vx, vy);
      state.lastX = e.clientX; state.lastY = e.clientY; state.lastT = now;
      if (speed > state.peakFlick) {
        state.peakFlick = speed;
        state.flickVec = { x: vx, y: -vy };        // world-up = -screen-y
      }
      // Trigger a slash mid-drag when a sharp flick happens (whip attack).
      // ~1.1 px/ms ≈ a deliberate fast whip; tuned to avoid accidental fires.
      if (speed > 1.1 && now - (this._lastFlickFire || 0) > 220) {
        this._lastFlickFire = now;
        const m = Math.hypot(state.flickVec.x, state.flickVec.y) || 1;
        this.swingQueued = { dx: state.flickVec.x / m, dy: state.flickVec.y / m };
      }
    };

    const onUp = (e) => {
      if (!state.active || e.pointerId !== state.pointerId) return;
      e.preventDefault();
      state.active = false;
      this._stickActive = false;
      state.pointerId = null;
      base.style.display = 'none';
      knob.style.transform = 'translate(0px,0px)';
      try { zone.releasePointerCapture(e.pointerId); } catch (_) {}

      // On release: only swing if no flick was already triggered mid-drag.
      // This allows mid-drag flicks to work while keeping the release-swing
      // as a fallback for slow/deliberate swipes.
      const now = performance.now();
      const timeSinceLastFlick = now - (this._lastFlickFire || 0);
      
      // If a flick was just fired (within 100ms), don't double-swing on release
      if (timeSinceLastFlick > 100) {
        const svMag = Math.hypot(this.swordVec.x, this.swordVec.y);
        // On release: if we were pushing the stick, swing toward where it
        // pointed; a near-zero push counts as a quick tap = forward slash.
        if (svMag > 0.3) {
          this.swingQueued = { dx: this.swordVec.x, dy: this.swordVec.y };
        } else {
          this.swingQueued = { dx: 1, dy: 0.35 };   // tap = forward slash
        }
      }
      // reset to neutral
      this.swordVec = { x: 0, y: 0 };
      this.move.x = 0; this.move.z = 0;
    }

    zone.addEventListener('pointerdown', onDown, { passive: false });
    zone.addEventListener('pointermove', onMove, { passive: false });
    zone.addEventListener('pointerup', onUp, { passive: false });
    zone.addEventListener('pointercancel', onUp, { passive: false });
    zone.addEventListener('lostpointercapture', onUp, { passive: false });

    this._sticks.push({ zone, base, knob, role, handlers: { onDown, onMove, onUp } });
  }

  initDesktop(canvas) {
    window.addEventListener('keydown', (e) => { this.keys[e.code] = true; });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    // mouse: drag to aim+swing the sword; the body follows the aim too.
    let down = false, sx = 0, sy = 0, lx = 0, ly = 0, lt = 0;
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 2) { this.blocking = true; return; }
      down = true; sx = e.clientX; sy = e.clientY;
      lx = e.clientX; ly = e.clientY; lt = performance.now();
    });
    canvas.addEventListener('mousemove', (e) => {
      if (!down) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      const r = 90, mag = Math.hypot(dx, dy);
      const f = Math.min(mag / r, 1.4);
      const ang = Math.atan2(-dy, dx);
      this.swordVec = { x: Math.cos(ang) * f, y: Math.sin(ang) * f };
      // flick slash on fast mouse motion
      const now = performance.now(), dt = Math.max(1, now - lt);
      const speed = Math.hypot((e.clientX - lx) / dt, (e.clientY - ly) / dt);
      lx = e.clientX; ly = e.clientY; lt = now;
      if (speed > 1.4 && now - (this._lastFlickFire || 0) > 200) {
        this._lastFlickFire = now;
        this.swingQueued = { dx: this.swordVec.x, dy: this.swordVec.y };
      }
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 2) { this.blocking = false; return; }
      if (down) {
        // Only swing on release if no flick was already triggered mid-drag
        const now = performance.now();
        const timeSinceLastFlick = now - (this._lastFlickFire || 0);
        if (timeSinceLastFlick > 100) {
          const dx = e.clientX - sx, dy = sy - e.clientY;
          if (Math.hypot(dx, dy) > 12) this.swingQueued = { dx, dy };
          else this.swingQueued = { dx: 0, dy: 1 };
        }
        this.swordVec = { x: 0, y: 0 };
      }
      down = false;
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    this._desktop = true;
  }

  // wasdOnly=true is used in LOCAL-2P mode so arrow keys don't bleed into P1.
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
    // keyboard movement overrides only when keys are pressed (so mouse-aim
    // body-follow still works otherwise).
    if (m > 0 || this._lastKeyMove) { this.move.x = x; this.move.z = z; }
    this._lastKeyMove = m > 0;
    if (this.keys['KeyF'] || this.keys['Space']) this.swingQueued = { dx: 1, dy: 0.35 };
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
    this.swordVec = { x: 0, y: 0 };
  }
}
