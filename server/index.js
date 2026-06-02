// ============================================================
// Lightweight WebSocket relay server for RAGBLADE ARENA.
// - Hosts create rooms (4-char code); guests join.
// - Relays input/swing/snapshot/roundEnd between the two peers.
// - Host is the physics authority; server is a dumb relay.
//
// Run:  npm run server   (default port 8787, override with PORT)
// In production behind the static site, mount at path /ws.
// ============================================================
import { WebSocketServer } from 'ws';
import http from 'http';

const PORT = process.env.PORT || 8787;
const rooms = new Map(); // code -> { host, guest, hostInfo }

function code4() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let c = '';
  for (let i = 0; i < 5; i++) c += chars[Math.floor(Math.random() * chars.length)];
  return c;
}

const server = http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); res.end('ok'); return; }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('RAGBLADE ARENA relay server\n');
});

const wss = new WebSocketServer({ server, path: undefined });

function send(ws, obj) {
  if (ws && ws.readyState === ws.OPEN) ws.send(JSON.stringify(obj));
}

wss.on('connection', (ws) => {
  ws.room = null;
  ws.role = null;

  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }

    switch (msg.t) {
      case 'ping': send(ws, { t: 'pong' }); break;

      case 'create': {
        let code = code4();
        while (rooms.has(code)) code = code4();
        rooms.set(code, { host: ws, guest: null, hostInfo: { name: msg.name, weapon: msg.weapon } });
        ws.room = code; ws.role = 'host';
        send(ws, { t: 'created', code });
        break;
      }

      case 'join': {
        const room = rooms.get(msg.code);
        if (!room) { send(ws, { t: 'error', msg: 'ルームが見つかりません' }); break; }
        if (room.guest) { send(ws, { t: 'error', msg: 'ルームが満員です' }); break; }
        room.guest = ws; ws.room = msg.code; ws.role = 'guest';
        // tell guest about host
        send(ws, { t: 'joined', hostName: room.hostInfo.name, hostWeapon: room.hostInfo.weapon, code: msg.code });
        // tell host about guest
        send(room.host, { t: 'peerJoined', name: msg.name, weapon: msg.weapon });
        break;
      }

      // relay everything else to the other peer
      case 'input': case 'swing': case 'snapshot': case 'roundEnd': {
        const room = rooms.get(ws.room);
        if (!room) break;
        const peer = ws.role === 'host' ? room.guest : room.host;
        send(peer, msg);
        break;
      }
    }
  });

  ws.on('close', () => {
    const room = rooms.get(ws.room);
    if (!room) return;
    const peer = ws.role === 'host' ? room.guest : room.host;
    send(peer, { t: 'peerLeft' });
    rooms.delete(ws.room);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`⚔️  RAGBLADE relay server listening on :${PORT}`);
});
