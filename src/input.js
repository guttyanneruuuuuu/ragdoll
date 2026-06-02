// ============================================================
// Input — virtual joysticks (touch) + keyboard/mouse (desktop)
// Produces a normalized control state consumed by the local fighter.
// ============================================================
import nipplejs from 'nipplejs';

export class InputManager {
  constructor() {
    this.state = {
      moveX: 0,          // -1..1
      jump: false,
      block: false,
      swing: false,      // edge-triggered (consumed)
      swingDir: { x: 1, y: 0 },  // direction of sword swing
      aimAngle: 0,
    };
    this._keys = {};
    this._moveJoy = null;
    this._swordJoy = null;
    this._swingQueued = false;
    this.isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  }

  initTouch() {
    const moveZone = document.getElementById('joystick-move');
    const swordZone = document.getElementById('joystick-sword');

    this._moveJoy = nipplejs.create({
      zone: moveZone, mode: 'static', position: { left: '50%', top: '55%' },
      color: 'rgba(0,229,255,0.6)', size: 110,
    });
    this._moveJoy.on('move', (e, d) => {
      this.state.moveX = Math.cos(d.angle.radian) * Math.min(1, d.distance / 50);
      if (d.vector.y > 0.6) this.state.jump = true;
    });
    this._moveJoy.on('end', () => { this.state.moveX = 0; });

    this._swordJoy = nipplejs.create({
      zone: swordZone, mode: 'static', position: { left: '50%', top: '55%' },
      color: 'rgba(255,45,117,0.6)', size: 120,
    });
    let lastDir = { x: 1, y: 0 };
    this._swordJoy.on('move', (e, d) => {
      const x = Math.cos(d.angle.radian);
      const y = Math.sin(d.angle.radian);
      lastDir = { x, y };
      this.state.aimAngle = Math.atan2(y, x);
    });
    this._swordJoy.on('end', () => {
      // releasing the sword stick triggers a swing in last direction
      this.state.swingDir = { ...lastDir };
      this._swingQueued = true;
    });

    // action buttons
    const jumpBtn = document.getElementById('btn-jump');
    const blockBtn = document.getElementById('btn-block');
    const press = (el, on, off) => {
      el.addEventListener('touchstart', (e) => { e.preventDefault(); on(); }, { passive: false });
      el.addEventListener('touchend', (e) => { e.preventDefault(); off?.(); }, { passive: false });
      el.addEventListener('mousedown', on);
      el.addEventListener('mouseup', () => off?.());
    };
    press(jumpBtn, () => { this.state.jump = true; });
    press(blockBtn, () => { this.state.block = true; }, () => { this.state.block = false; });
  }

  initDesktop(canvas) {
    window.addEventListener('keydown', (e) => {
      this._keys[e.code] = true;
      if (e.code === 'Space') e.preventDefault();
    });
    window.addEventListener('keyup', (e) => { this._keys[e.code] = false; });

    // mouse aim
    this._mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      this._mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      this._mouse.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    });
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        // swing toward mouse aim
        this.state.swingDir = { x: this._mouse.x >= 0 ? 1 : -1, y: this._mouse.y };
        this._swingQueued = true;
      } else if (e.button === 2) {
        this.state.block = true;
      }
    });
    canvas.addEventListener('mouseup', (e) => { if (e.button === 2) this.state.block = false; });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  poll() {
    // desktop keyboard
    if (!this.isTouch || this._keys) {
      let mx = 0;
      if (this._keys['KeyA'] || this._keys['ArrowLeft']) mx -= 1;
      if (this._keys['KeyD'] || this._keys['ArrowRight']) mx += 1;
      if (mx !== 0) this.state.moveX = mx;
      else if (!this._moveJoy?.ids?.length && !this.isTouch) this.state.moveX = 0;

      if (this._keys['KeyW'] || this._keys['ArrowUp'] || this._keys['Space']) this.state.jump = true;
      this.state.block = !!(this._keys['ShiftLeft'] || this._keys['ShiftRight']) || this.state.block;
      if (this._keys['KeyF']) { this._swingQueued = true; this.state.swingDir = { x: 1, y: 0.3 }; }

      // aim with mouse
      if (this._mouse) this.state.aimAngle = Math.atan2(this._mouse.y, this._mouse.x);
    }

    const out = { ...this.state };
    out.swing = this._swingQueued;
    this._swingQueued = false;
    // consume one-frame flags
    this.state.jump = false;
    if (!this._keys['ShiftLeft'] && !this._keys['ShiftRight']) {
      // block handled by buttons / rmb separately
    }
    return out;
  }

  destroy() {
    this._moveJoy?.destroy();
    this._swordJoy?.destroy();
  }
}
