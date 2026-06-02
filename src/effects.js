// ============================================================
// Visual effects — sparks, blood, hitstop, camera shake
// ============================================================
import * as THREE from 'three';

export class Effects {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.particles = [];
    this.shakeAmt = 0;
    this.shakeDecay = 0;
    this.hitstop = 0;
    this._baseCamPos = new THREE.Vector3();
    this._pool = [];
  }

  _spawn(pos, color, count, speed, life, size) {
    const geo = new THREE.SphereGeometry(size, 6, 6);
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 });
      const m = new THREE.Mesh(geo, mat);
      m.position.copy(pos);
      this.scene.add(m);
      const a = Math.random() * Math.PI * 2;
      const b = (Math.random() - 0.5) * Math.PI;
      const sp = speed * (0.5 + Math.random());
      this.particles.push({
        mesh: m,
        vel: new THREE.Vector3(Math.cos(a) * Math.cos(b), Math.abs(Math.sin(b)) + 0.3, Math.sin(a) * Math.cos(b)).multiplyScalar(sp),
        life, maxLife: life, gravity: -9,
      });
    }
  }

  sparks(pos) {
    this._spawn(pos, 0xffdd66, 14, 6, 0.4, 0.04);
    this._spawn(pos, 0xffffff, 6, 8, 0.3, 0.03);
  }

  blood(pos) {
    this._spawn(pos, 0xcc1133, 22, 5, 0.7, 0.06);
    this._spawn(pos, 0x880022, 10, 3, 0.9, 0.08);
  }

  shake(amt = 0.4, decay = 3) {
    this.shakeAmt = Math.max(this.shakeAmt, amt);
    this.shakeDecay = decay;
  }

  triggerHitstop(dur = 0.08) { this.hitstop = Math.max(this.hitstop, dur); }

  update(dt) {
    // hitstop consumes time
    if (this.hitstop > 0) { this.hitstop -= dt; }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.scene.remove(p.mesh); p.mesh.material.dispose();
        this.particles.splice(i, 1); continue;
      }
      p.vel.y += p.gravity * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      p.mesh.material.opacity = p.life / p.maxLife;
      const s = 0.5 + 0.5 * (p.life / p.maxLife);
      p.mesh.scale.setScalar(s);
    }
  }

  applyCameraShake(dt, basePos) {
    if (this.shakeAmt > 0.001) {
      const s = this.shakeAmt;
      this.camera.position.x = basePos.x + (Math.random() - 0.5) * s;
      this.camera.position.y = basePos.y + (Math.random() - 0.5) * s;
      this.camera.position.z = basePos.z + (Math.random() - 0.5) * s * 0.5;
      this.shakeAmt -= this.shakeDecay * dt;
      if (this.shakeAmt < 0) this.shakeAmt = 0;
    } else {
      this.camera.position.copy(basePos);
    }
  }

  isHitstopped() { return this.hitstop > 0; }
}
