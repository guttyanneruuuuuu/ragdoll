// ============================================================
// Network client — WebSocket relay for friend battles.
// Room codes; host is authoritative for match flow.
// Falls back gracefully when no server is reachable.
// ============================================================

export class NetClient {
  constructor() {
    this.ws = null;
    this.connected = false;
    this.room = null;
    this.id = null;
    this.isHost = false;
    this.handlers = {};
    this.peers = {};
  }

  on(ev, fn) { (this.handlers[ev] ||= []).push(fn); }
  emit(ev, data) { (this.handlers[ev] || []).forEach(f => f(data)); }

  url() {
    // same-origin ws, path /ws — works behind the sandbox proxy
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    return `${proto}://${location.host}/ws`;
  }

  connect() {
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(this.url());
      } catch (e) { reject(e); return; }
      const to = setTimeout(() => { reject(new Error('timeout')); }, 6000);
      this.ws.onopen = () => { clearTimeout(to); this.connected = true; resolve(); };
      this.ws.onerror = (e) => { clearTimeout(to); reject(e); };
      this.ws.onclose = () => { this.connected = false; this.emit('close'); };
      this.ws.onmessage = (e) => {
        let msg; try { msg = JSON.parse(e.data); } catch { return; }
        this.handle(msg);
      };
    });
  }

  send(type, data = {}) {
    if (this.ws && this.connected) this.ws.send(JSON.stringify({ type, ...data }));
  }

  handle(msg) {
    switch (msg.type) {
      case 'welcome': this.id = msg.id; break;
      case 'created': this.room = msg.room; this.isHost = true; this.emit('created', msg); break;
      case 'joined': this.room = msg.room; this.isHost = false; this.emit('joined', msg); break;
      case 'peer-join': this.emit('peer-join', msg); break;
      case 'peer-leave': this.emit('peer-leave', msg); break;
      case 'start': this.emit('start', msg); break;
      case 'state': this.emit('state', msg); break;
      case 'input': this.emit('input', msg); break;
      case 'event': this.emit('event', msg); break;
      case 'error': this.emit('neterror', msg); break;
      case 'rooms': this.emit('rooms', msg); break;
    }
  }

  createRoom(name, opts) { this.send('create', { name, opts }); }
  joinRoom(code, name) { this.send('join', { room: code.toUpperCase(), name }); }
  leave() { this.send('leave'); this.room = null; }
  startMatch(opts) { this.send('start', { opts }); }
  sendState(s) { this.send('state', { s }); }
  sendInput(i) { this.send('input', { i }); }
  sendEvent(e) { this.send('event', { e }); }
}
