// ============================================================
// Arena / stage — ground, walls, lighting, themed environments
// ============================================================
import * as THREE from 'three';

const STAGES = {
  arena: {
    name: '闘技場', floor: 0x141422, grid: 0xff2d75, fog: 0x0a0a16,
    sky: [0x1a0b2e, 0x0a0a16], accents: 0x00e5ff,
  },
  snow: {
    name: '雪山', floor: 0xdfeaf5, grid: 0x88bbdd, fog: 0xcfe0f0,
    sky: [0xbcd4ec, 0x8fb3d9], accents: 0x66ccff,
  },
  factory: {
    name: '工場', floor: 0x2a2a30, grid: 0xffaa22, fog: 0x15151a,
    sky: [0x2a2a35, 0x101015], accents: 0xffaa22,
  },
};

export class Arena {
  constructor(RAPIER, world, scene, stageKey = 'arena') {
    this.RAPIER = RAPIER;
    this.world = world;
    this.scene = scene;
    this.cfg = STAGES[stageKey] || STAGES.arena;
    this.halfWidth = 9;
    this.objects = [];
    this._build();
  }

  _build() {
    const { scene, world, RAPIER, cfg } = this;

    // background gradient
    scene.background = new THREE.Color(cfg.sky[1]);
    scene.fog = new THREE.Fog(cfg.fog, 14, 38);

    // ground physics (static)
    const groundBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -0.5, 0));
    world.createCollider(RAPIER.ColliderDesc.cuboid(this.halfWidth, 0.5, 6).setFriction(1.0), groundBody);

    // ground visual
    const floorMat = new THREE.MeshStandardMaterial({ color: cfg.floor, roughness: 0.85, metalness: 0.1 });
    const floor = new THREE.Mesh(new THREE.BoxGeometry(this.halfWidth * 2, 1, 12), floorMat);
    floor.position.y = -0.5; floor.receiveShadow = true;
    scene.add(floor); this.objects.push(floor);

    // grid overlay
    const grid = new THREE.GridHelper(this.halfWidth * 2, 28, cfg.grid, cfg.grid);
    grid.position.y = 0.01;
    grid.material.transparent = true; grid.material.opacity = 0.25;
    scene.add(grid); this.objects.push(grid);

    // arena walls (invisible physics + neon visual edges)
    for (const side of [-1, 1]) {
      const wallBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(side * (this.halfWidth + 0.5), 3, 0));
      world.createCollider(RAPIER.ColliderDesc.cuboid(0.5, 4, 6).setRestitution(0.3), wallBody);
      // neon pillar
      const pillarMat = new THREE.MeshStandardMaterial({ color: cfg.accents, emissive: cfg.accents, emissiveIntensity: 0.8, roughness: 0.3 });
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 8, 12), pillarMat);
      pillar.position.set(side * (this.halfWidth + 0.3), 3.5, -3);
      scene.add(pillar); this.objects.push(pillar);
      const pillar2 = pillar.clone(); pillar2.position.z = 3; scene.add(pillar2); this.objects.push(pillar2);
    }

    // back wall (z) physics
    for (const z of [-6, 6]) {
      const zBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, 3, z));
      world.createCollider(RAPIER.ColliderDesc.cuboid(this.halfWidth, 4, 0.5), zBody);
    }

    // ---- lighting ----
    const amb = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(amb);
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(6, 14, 8);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -14; key.shadow.camera.right = 14;
    key.shadow.camera.top = 14; key.shadow.camera.bottom = -8;
    key.shadow.camera.near = 1; key.shadow.camera.far = 40;
    key.shadow.bias = -0.0004;
    scene.add(key); this.objects.push(key);

    const rim1 = new THREE.PointLight(this.cfg.accents, 2.0, 30);
    rim1.position.set(-8, 6, 4); scene.add(rim1); this.objects.push(rim1);
    const rim2 = new THREE.PointLight(0xff2d75, 1.6, 30);
    rim2.position.set(8, 6, -4); scene.add(rim2); this.objects.push(rim2);

    // crowd / backdrop blocks for depth
    const bdMat = new THREE.MeshStandardMaterial({ color: cfg.floor, roughness: 0.9, emissive: 0x000000 });
    for (let i = 0; i < 24; i++) {
      const h = 1 + Math.random() * 3;
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.8, h, 0.8), bdMat);
      const side = i % 2 === 0 ? -1 : 1;
      b.position.set((Math.random() - 0.5) * 18, h / 2 - 1, side * (7 + Math.random() * 4));
      scene.add(b); this.objects.push(b);
    }
  }

  get name() { return this.cfg.name; }

  destroy() {
    for (const o of this.objects) {
      this.scene.remove(o);
      o.geometry?.dispose?.(); o.material?.dispose?.();
    }
    this.objects = [];
  }
}
