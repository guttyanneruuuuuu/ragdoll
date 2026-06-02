// ============================================================
// Ragdoll Blade Arena — relay server.
// Serves the built client (dist) + WebSocket room relay at /ws.
// Run: npm run build && npm start   (or node server/index.js)
// ============================================================
import { WebSocketServer } from 'ws';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PORT = process.env.PORT || 3001;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.wasm': 'application/wasm',
};

const server = http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); res.end('ok'); return; }
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  let filePath = path.join(DIST, urlPath);
  if (!filePath.startsWith(DIST)) { res.writeHead(403); res.end(); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA fallback
      fs.readFile(path.join(DIST, 'index.html'), (e2, html) => {
        if (e2) { res.writeHead(404); res.end('not found (run npm run build)'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html' }); res.end(html);
      });
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

const wss = new WebSocketServer({ server, path: '/ws' });

const rooms = new Map(); // code -> { host, clients: Set, opts }
let nextId = 1;
const code = () => {
  const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = ''; for (let i = 0; i < 4; i++) s += c[Math.floor(Math.random() * c.length)];
  return rooms.has(s) ? code() : s;
};

function broadcast(room, msg, except = null) {
  const r = rooms.get(room); if (!r) return;
  const data = JSON.stringify(msg);
  for (const c of r.clients) if (c !== except && c.readyState === 1) c.send(data);
}

wss.on('connection', (ws) => {
  ws.id = 'P' + (nextId++);
  ws.room = null;
  ws.name = 'Player';
  ws.send(JSON.stringify({ type: 'welcome', id: ws.id }));

  ws.on('message', (raw) => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    switch (m.type) {
      case 'create': {
        const c = code();
        rooms.set(c, { host: ws, clients: new Set([ws]), opts: m.opts || {} });
        ws.room = c; ws.name = m.name || 'Host';
        ws.send(JSON.stringify({ type: 'created', room: c, id: ws.id }));
        break;
      }
      case 'join': {
        const r = rooms.get(m.room);
        if (!r) { ws.send(JSON.stringify({ type: 'error', msg: 'ルームが見つかりません' })); break; }
        if (r.clients.size >= 8) { ws.send(JSON.stringify({ type: 'error', msg: 'ルームが満員です' })); break; }
        r.clients.add(ws); ws.room = m.room; ws.name = m.name || 'Guest';
        ws.send(JSON.stringify({ type: 'joined', room: m.room, id: ws.id,
          peers: [...r.clients].map(c => ({ id: c.id, name: c.name })), opts: r.opts }));
        broadcast(m.room, { type: 'peer-join', id: ws.id, name: ws.name }, ws);
        break;
      }
      case 'start': {
        const r = rooms.get(ws.room);
        if (r && r.host === ws) broadcast(ws.room, { type: 'start', opts: m.opts });
        break;
      }
      case 'state':
        broadcast(ws.room, { type: 'state', id: ws.id, s: m.s }, ws);
        break;
      case 'input':
        broadcast(ws.room, { type: 'input', id: ws.id, i: m.i }, ws);
        break;
      case 'event':
        broadcast(ws.room, { type: 'event', id: ws.id, e: m.e }, ws);
        break;
      case 'leave':
        leave(ws); break;
    }
  });

  ws.on('close', () => leave(ws));
});

function leave(ws) {
  const r = rooms.get(ws.room); if (!r) return;
  r.clients.delete(ws);
  broadcast(ws.room, { type: 'peer-leave', id: ws.id });
  if (r.clients.size === 0) rooms.delete(ws.room);
  else if (r.host === ws) r.host = [...r.clients][0]; // promote
  ws.room = null;
}

server.listen(PORT, '0.0.0.0', () => {
  console.log(`⚔  Ragdoll Blade Arena server on :${PORT}`);
});
