// ============================================================
// Arena / stage builder — Three.js scenery + hazards.
// Replicates the low-poly colorful look from Ragdoll Blade.
// ============================================================
import * as THREE from 'three';
import { STAGES, WORLD } from './config.js';

export class Arena {
  constructor(scene, world, stageKey = 'arena') {
    this.scene = scene;
    this.world = world;
    this.stageKey = stageKey;
    this.stage = STAGES[stageKey] ?? STAGES.arena;
    this.props = new THREE.Group();
    this.hazards = [];
    scene.add(this.props);
    this.build();
  }

  clear() {
    this.scene.remove(this.props);
    this.props = new THREE.Group();
    this.scene.add(this.props);
    this.hazards = [];
  }

  build() {
    const s = this.stage;
    this.scene.background = new THREE.Color(s.sky);
    this.scene.fog = new THREE.Fog(s.fog, 18, 80);

    // ground disc
    const radius = s.ringOut ? WORLD.arenaRadius : 40;
    this.world.arenaRadius = s.ringOut ? WORLD.arenaRadius : Infinity;
    this.world.cliffEdge = s.hazard === 'cliff';

    const groundGeo = new THREE.CylinderGeometry(radius, radius, 1, 48);
    const groundMat = new THREE.MeshStandardMaterial({ color: s.ground, roughness: 0.9, metalness: 0.05 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    this.props.add(ground);

    // glowing ring edge
    const ringGeo = new THREE.TorusGeometry(radius, 0.22, 16, 80);
    const ringMat = new THREE.MeshStandardMaterial({ color: s.accent, emissive: s.accent,
      emissiveIntensity: 1.5, roughness: 0.3 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.02;
    this.props.add(ring);
    this.ring = ring;

    if (this.stageKey === 'arena') this.buildArenaDecor(radius, s);
    else if (this.stageKey === 'meadow') this.buildMeadow(radius, s);
    else if (this.stageKey === 'cliff') this.buildCliff(radius, s);
    else if (this.stageKey === 'saw') this.buildSaw(radius, s);
  }

  buildArenaDecor(radius, s) {
    // grid floor pattern via subtle lines + neon pillars
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const pillar = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 6, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x1a1f3a, emissive: s.accent, emissiveIntensity: 0.3 })
      );
      pillar.position.set(Math.cos(a) * (radius + 2.5), 3, Math.sin(a) * (radius + 2.5));
      this.props.add(pillar);
      const light = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 10, 10),
        new THREE.MeshBasicMaterial({ color: s.accent })
      );
      light.position.set(Math.cos(a) * (radius + 2.5), 6, Math.sin(a) * (radius + 2.5));
      this.props.add(light);
    }
    // grid texture
    const grid = new THREE.GridHelper(radius * 2, 24, s.accent, 0x223052);
    grid.position.y = 0.03;
    grid.material.opacity = 0.25; grid.material.transparent = true;
    this.props.add(grid);
  }

  buildMeadow(radius, s) {
    // scatter low-poly rocks, ferns, flowers
    const rockMat = new THREE.MeshStandardMaterial({ color: 0xe8e8e8, roughness: 1, flatShading: true });
    const fernMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 1, flatShading: true });
    const flowerMat = new THREE.MeshStandardMaterial({ color: 0x9c4dcc, roughness: 1 });
    for (let i = 0; i < 40; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = radius * (0.4 + Math.random() * 0.7);
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const t = Math.random();
      let m;
      if (t < 0.4) { m = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3 + Math.random() * 0.4), rockMat); }
      else if (t < 0.8) { m = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.8, 5), fernMat); }
      else { m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.25), flowerMat); }
      m.position.set(x, 0.2, z); m.castShadow = true;
      m.rotation.y = Math.random() * Math.PI;
      this.props.add(m);
    }
    // distant mountains
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const mt = new THREE.Mesh(
        new THREE.ConeGeometry(10 + Math.random() * 6, 18 + Math.random() * 8, 6),
        new THREE.MeshStandardMaterial({ color: 0x5a7f3f, flatShading: true, roughness: 1 })
      );
      mt.position.set(Math.cos(a) * 55, 6, Math.sin(a) * 55);
      this.props.add(mt);
    }
    // sky clouds
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, transparent: true });
    cloudMat.opacity = 0.4;
    for (let i = 0; i < 6; i++) {
      const cloud = new THREE.Mesh(new THREE.SphereGeometry(3 + Math.random() * 2, 8, 8), cloudMat);
      cloud.position.set((Math.random() - 0.5) * 80, 30 + Math.random() * 10, (Math.random() - 0.5) * 80);
      this.props.add(cloud);
    }
  }

  buildCliff(radius, s) {
    // narrow bridge platform — falling off z edges = ring out
    const plat = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 2, 1, 12),
      new THREE.MeshStandardMaterial({ color: s.ground, roughness: 1, flatShading: true })
    );
    plat.position.y = -0.5; plat.receiveShadow = true;
    this.props.add(plat);
    // sky gradient pillars
    for (let i = 0; i < 6; i++) {
      const spire = new THREE.Mesh(
        new THREE.ConeGeometry(2, 20, 5),
        new THREE.MeshStandardMaterial({ color: 0x8a6d4f, flatShading: true })
      );
      spire.position.set((i - 3) * 9, -14, (i % 2 ? 14 : -14));
      this.props.add(spire);
    }
  }

  buildSaw(radius, s) {
    // spinning saw blades that deal damage
    const sawMat = new THREE.MeshStandardMaterial({ color: 0xb0b0b8, metalness: 0.9, roughness: 0.2,
      emissive: s.accent, emissiveIntensity: 0.2 });
    const positions = [[0, 0], [radius * 0.55, 0], [-radius * 0.55, 0]];
    for (const [px, pz] of positions) {
      const saw = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.2, 16), sawMat);
      saw.rotation.z = Math.PI / 2;
      saw.position.set(px, 1.6, pz);
      // teeth
      for (let t = 0; t < 12; t++) {
        const a = (t / 12) * Math.PI * 2;
        const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.5, 4), sawMat);
        tooth.position.set(Math.cos(a) * 1.7, 0, Math.sin(a) * 1.7);
        tooth.rotation.z = -a + Math.PI / 2;
        saw.add(tooth);
      }
      this.props.add(saw);
      this.hazards.push({ mesh: saw, type: 'saw', x: px, z: pz, r: 1.9 });
    }
  }

  update(dt, fighters) {
    if (this.ring) this.ring.material.emissiveIntensity = 1.0 + Math.sin(performance.now() * 0.004) * 0.3;
    // spin saws & damage fighters
    for (const h of this.hazards) {
      if (h.type === 'saw') {
        h.mesh.rotation.x += dt * 8;
        for (const f of fighters) {
          if (!f.alive) continue;
          for (const node of ['chest', 'hip', 'head']) {
            const p = f.nodes[node].p;
            const d = Math.hypot(p.x - h.x, p.z - h.z);
            if (d < h.r && Math.abs(p.y - 1.6) < 1.2) {
              f.applyImpact(node, 30, { x: (p.x - h.x) * 20, y: 8, z: (p.z - h.z) * 20 });
            }
          }
        }
      }
    }
  }
}
