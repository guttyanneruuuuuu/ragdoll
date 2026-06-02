// ============================================================
//  render.js — Canvas2D renderer
//  Draws capsule-limb ragdolls (yellow body, red severed caps),
//  swords, blood, sparks, and themed arenas with parallax.
//  All visuals are drawn procedurally — no external image assets.
// ============================================================

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.W = canvas.width;
    this.H = canvas.height;
    this.theme = ARENAS.grass;
  }

  resize(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
    this.W = w; this.H = h;
  }

  setArena(key) { this.theme = ARENAS[key] || ARENAS.grass; }

  clear(shake = 0) {
    const ctx = this.ctx;
    ctx.save();
    if (shake > 0) {
      ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
    }
  }
  restore() { this.ctx.restore(); }

  // ---- Arena background ----------------------------------------------------
  drawArena(world, t = 0) {
    const ctx = this.ctx, W = this.W, H = this.H, th = this.theme;
    // sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, th.skyTop);
    sky.addColorStop(1, th.skyBottom);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // sun / moon glow
    ctx.save();
    ctx.globalAlpha = 0.5;
    const glow = ctx.createRadialGradient(W * 0.8, H * 0.22, 8, W * 0.8, H * 0.22, 180);
    glow.addColorStop(0, th.glow);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    // back hills / cliffs (parallax)
    th.drawBack(ctx, W, H, t);

    // ground
    const g = world.groundY;
    ctx.fillStyle = th.ground;
    ctx.fillRect(0, g, W, H - g);
    // ground top edge
    ctx.fillStyle = th.groundEdge;
    ctx.fillRect(0, g, W, 10);
    th.drawGroundDetail(ctx, W, H, g, t);

    // side walls / cliffs
    th.drawWalls(ctx, world, H);
  }

  // ---- Particles -----------------------------------------------------------
  drawParticles(combat) {
    const ctx = this.ctx;
    for (const p of combat.particles) {
      ctx.globalAlpha = Math.min(1, p.life / 20);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const s of combat.sparks) {
      ctx.globalAlpha = Math.min(1, s.life / 10);
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  // ---- Ragdoll -------------------------------------------------------------
  drawRagdoll(r) {
    const ctx = this.ctx;
    // shadow
    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = '#000';
    const sx = (r.footR.x + r.footL.x) / 2;
    ctx.beginPath();
    ctx.ellipse(sx, r.world.groundY + 4, 34 * r.scale, 7 * r.scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // draw bones as capsules
    for (const s of r.bodySticks) {
      if (s.broken || !s.visible) continue;
      this._capsule(s.a, s.b, s.thickness, s.color || r.color, r.darkColor);
    }

    // head
    this._circle(r.head, r.head.radius, r.color, r.darkColor);
    // simple face dot to show facing
    ctx.fillStyle = 'rgba(60,40,10,0.55)';
    ctx.beginPath();
    ctx.arc(r.head.x + r.facing * r.head.radius * 0.4, r.head.y - 2, 2.4 * r.scale, 0, Math.PI * 2);
    ctx.fill();

    // red severed caps
    for (const s of r.bodySticks) {
      if (!s.broken) continue;
    }
    for (const p of r.allCorePoints) {
      if (p.severed) {
        ctx.fillStyle = '#b91c2b';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.85, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // sword
    this._sword(r);

    // dead overlay tint
    if (r.dead) {
      ctx.save();
      ctx.globalAlpha = 0.0;
      ctx.restore();
    }
  }

  _sword(r) {
    if (r.sBlade.broken) return;
    const ctx = this.ctx;
    const h = r.swordHandle, t = r.swordTip;
    // blade
    const ang = Math.atan2(t.y - h.y, t.x - h.x);
    const w = 5 * r.scale;
    const nx = Math.cos(ang + Math.PI / 2);
    const ny = Math.sin(ang + Math.PI / 2);
    ctx.fillStyle = '#d9dde3';
    ctx.beginPath();
    ctx.moveTo(h.x + nx * w, h.y + ny * w);
    ctx.lineTo(h.x - nx * w, h.y - ny * w);
    ctx.lineTo(t.x, t.y); // pointed tip
    ctx.closePath();
    ctx.fill();
    // blade shine
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(h.x + nx * w * 0.3, h.y + ny * w * 0.3);
    ctx.lineTo(t.x, t.y);
    ctx.stroke();
    // guard
    ctx.strokeStyle = '#6b4a25';
    ctx.lineWidth = 4 * r.scale;
    ctx.beginPath();
    ctx.moveTo(h.x + nx * (w + 5), h.y + ny * (w + 5));
    ctx.lineTo(h.x - nx * (w + 5), h.y - ny * (w + 5));
    ctx.stroke();
    // grip
    ctx.strokeStyle = '#3a2a16';
    ctx.lineWidth = 6 * r.scale;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(r.handR.x, r.handR.y);
    ctx.lineTo(h.x, h.y);
    ctx.stroke();
    ctx.lineCap = 'butt';

    // swing trail
    if (r.swingTimer > 6) {
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(h.x, h.y);
      ctx.lineTo(t.x, t.y);
      ctx.stroke();
    }
  }

  _capsule(a, b, thickness, fill, stroke) {
    const ctx = this.ctx;
    const ang = Math.atan2(b.y - a.y, b.x - a.x);
    const r = thickness / 2;
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(a.x, a.y, r, ang + Math.PI / 2, ang - Math.PI / 2);
    ctx.arc(b.x, b.y, r, ang - Math.PI / 2, ang + Math.PI / 2);
    ctx.closePath();
    ctx.fill();
  }

  _circle(p, r, fill, stroke) {
    const ctx = this.ctx;
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

// ============================================================
//  Arena themes — each provides colors + procedural detail fns
// ============================================================
export const ARENAS = {
  grass: {
    name: 'Verdant Field',
    skyTop: '#7ec0f0', skyBottom: '#cdeeff', glow: 'rgba(255,250,200,0.8)',
    ground: '#5aa83c', groundEdge: '#6dc24a',
    drawBack(ctx, W, H, t) {
      ctx.fillStyle = '#4f9e54';
      for (let i = 0; i < 4; i++) {
        const x = (i * W) / 3;
        ctx.beginPath();
        ctx.moveTo(x - 160, H - 70);
        ctx.quadraticCurveTo(x, H - 320 - i * 10, x + 200, H - 70);
        ctx.fill();
      }
      ctx.fillStyle = '#3f8444';
      for (let i = 0; i < 3; i++) {
        const x = (i * W) / 2 + 80;
        ctx.beginPath();
        ctx.moveTo(x - 120, H - 70);
        ctx.quadraticCurveTo(x, H - 220, x + 160, H - 70);
        ctx.fill();
      }
    },
    drawGroundDetail(ctx, W, H, g) {
      ctx.strokeStyle = 'rgba(40,90,30,0.5)';
      ctx.lineWidth = 2;
      for (let x = 8; x < W; x += 22) {
        const h = 6 + ((x * 13) % 7);
        ctx.beginPath();
        ctx.moveTo(x, g);
        ctx.lineTo(x + 2, g - h);
        ctx.stroke();
      }
    },
    drawWalls(ctx, world, H) {
      ctx.fillStyle = '#3a6b2c';
      ctx.fillRect(0, 0, world.walls.left, H);
      ctx.fillRect(world.walls.right, 0, world.width - world.walls.right, H);
    }
  },

  canyon: {
    name: 'Stone Canyon',
    skyTop: '#9aa3ad', skyBottom: '#d7d2c8', glow: 'rgba(255,240,210,0.5)',
    ground: '#8a8175', groundEdge: '#a59a8a',
    drawBack(ctx, W, H, t) {
      ctx.fillStyle = '#6e6a63';
      ctx.fillRect(0, 0, 90, H);
      ctx.fillRect(W - 90, 0, 90, H);
      ctx.fillStyle = '#7c776e';
      for (let i = 0; i < 6; i++) {
        const y = (i * H) / 6;
        ctx.fillRect(0, y, 90, 6);
        ctx.fillRect(W - 90, y + 14, 90, 6);
      }
    },
    drawGroundDetail(ctx, W, H, g) {
      ctx.strokeStyle = 'rgba(80,72,60,0.6)';
      ctx.lineWidth = 2;
      for (let x = 0; x < W; x += 40) {
        ctx.strokeRect(x, g + 12, 38, 20);
      }
    },
    drawWalls(ctx, world, H) {
      ctx.fillStyle = '#5d574e';
      ctx.fillRect(0, 0, world.walls.left, H);
      ctx.fillRect(world.walls.right, 0, world.width - world.walls.right, H);
    }
  },

  ice: {
    name: 'Frozen Lake',
    skyTop: '#7fb4d8', skyBottom: '#dff1fb', glow: 'rgba(220,245,255,0.7)',
    ground: '#bfe3f2', groundEdge: '#e7f6fc',
    drawBack(ctx, W, H, t) {
      ctx.fillStyle = '#a9d8ec';
      ctx.beginPath();
      ctx.moveTo(W * 0.5 - 200, H - 70);
      ctx.lineTo(W * 0.5, H - 360);
      ctx.lineTo(W * 0.5 + 220, H - 70);
      ctx.fill();
      ctx.fillStyle = '#c7e8f6';
      ctx.beginPath();
      ctx.moveTo(W * 0.5 - 60, H - 70);
      ctx.lineTo(W * 0.5 + 30, H - 250);
      ctx.lineTo(W * 0.5 + 140, H - 70);
      ctx.fill();
    },
    drawGroundDetail(ctx, W, H, g) {
      ctx.strokeStyle = 'rgba(150,200,225,0.7)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 14; i++) {
        const x = (i * 97) % W;
        ctx.beginPath();
        ctx.moveTo(x, g + 6);
        ctx.lineTo(x + 30, g + 26);
        ctx.lineTo(x + 70, g + 14);
        ctx.stroke();
      }
    },
    drawWalls(ctx, world, H) {
      ctx.fillStyle = '#9ccbe0';
      ctx.fillRect(0, 0, world.walls.left, H);
      ctx.fillRect(world.walls.right, 0, world.width - world.walls.right, H);
    }
  }
};
