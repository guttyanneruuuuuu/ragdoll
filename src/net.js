// ============================================================
// Networking — WebSocket relay client for online friend battles.
// Host is physics-authority; guest sends inputs, host broadcasts
// authoritative snapshots. Falls back gracefully if server down.
// ============================================================
import { NET } from './config.js';

export class NetClient {
  constructor() {
    this.ws = null;
    this.isHost = false;
    this.roomCode = null;
    this.connected = false;
    this.peerJoined = false;
    this.handlers = {};
    this._tickAcc = 0;
    this._pingTimer = null;
    this.ping = 0;
  }

  on(event, cb) { this.handlers[event] = cb; }
  _emit(event, ...a) { this.handlers[event]?.(...a); }

  connect() {
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(NET.SIGNAL_URL);
      } catch (e) { reject(e); return; }
      const to = setTimeout(() => reject(new Error('connection timeout')), 6000);
      this.ws.onopen = () => { clearTimeout(to); this.connected = true; this._startPing(); resolve(); };
      this.ws.onerror = (e) => { clearTimeout(to); reject(e); };
      this.ws.onclose = () => { this.connected = false; this._emit('disconnect'); if (this._pingTimer) clearInterval(this._pingTimer); };
      this.ws.onmessage = (ev) => this._handle(JSON.parse(ev.data));
    });
  }

  _send(obj) { if (this.ws && this.connected) this.ws.send(JSON.stringify(obj)); }

  _startPing() {
    this._pingTimer = setInterval(() => {
      this._pingSent = performance.now();
      this._send({ t: 'ping' });
    }, 2000);
  }

  createRoom(name, weapon) {
    this.isHost = true;
    this.playerName = name; this.weapon = weapon;
    this._send({ t: 'create', name, weapon });
  }

  joinRoom(code, name, weapon) {
    this.isHost = false;
    this.playerName = name; this.weapon = weapon; this.roomCode = code;
    this._send({ t: 'join', code, name, weapon });
  }

  _handle(msg) {
    switch (msg.t) {
      case 'created':
        this.roomCode = msg.code;
        this._emit('roomCreated', msg.code);
        break;
      case 'joined':
        // guest received confirmation + host info
        this._emit('joinedRoom', msg);
        break;
      case 'peerJoined':
        this.peerJoined = true;
        this._emit('peerJoined', msg);
        break;
      case 'start':
        this._emit('matchStart', msg);
        break;
      case 'input':
        this._emit('remoteInput', msg.data);
        break;
      case 'swing':
        this._emit('remoteSwing', msg.data);
        break;
      case 'snapshot':
        this._emit('snapshot', msg.data);
        break;
      case 'roundEnd':
        this._emit('roundEnd', msg.winner, msg.scores);
        break;
      case 'peerLeft':
        this._emit('peerLeft');
        break;
      case 'error':
        this._emit('netError', msg.msg);
        break;
      case 'pong':
        if (this._pingSent) this.ping = Math.round(performance.now() - this._pingSent);
        break;
    }
  }

  // ---- game-side API ----
  sendInput(data) {
    if (!this.isHost) this._send({ t: 'input', data });
  }
  sendSwing(dir) {
    this._send({ t: 'swing', data: dir });
  }
  sendRoundEnd(winner, scores) {
    if (this.isHost) this._send({ t: 'roundEnd', winner, scores });
  }

  // host broadcasts authoritative snapshot at NET.TICK Hz
  tick(dt, fighters) {
    if (!this.isHost) return;
    this._tickAcc += dt;
    if (this._tickAcc < 1 / NET.TICK) return;
    this._tickAcc = 0;
    const data = {
      a: fighters[0].doll.snapshot(),
      b: fighters[1].doll.snapshot(),
    };
    this._send({ t: 'snapshot', data });
  }

  close() {
    if (this._pingTimer) clearInterval(this._pingTimer);
    this.ws?.close();
  }
}
