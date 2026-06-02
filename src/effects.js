// ============================================================
// Juice: spark particles, slash trails, camera shake, hitstop.
// ============================================================
import * as THREE from 'three';

export class Effects {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.sparks = [];
    this.shakeAmt = 0;
    this.shakeT = 0;
    this.hitstop = 0;
    this.baseCamPos = new THREE.Vector3();

    // spark pool
    this.sparkGeo = new THREE.BufferGeometry();
    const N = 400;
    this.maxSparks = N;
    const pos = new Float32Array(N * 3);
    this.sparkGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.sparkMat = new THREE.PointsMaterial({ color: 0xffd24a, size: 0.22, transparent: true,
      opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false });
    this.sparkPoints = new THREE.Points(this.sparkGeo, this.sparkMat);
    this.scene.add(this.sparkPoints);
    this.live = []; // {x,y,z,vx,vy,vz,life}
  }

  burst(x, y, z, count = 20, color = 0xffd24a) {
    this.sparkMat.color.setHex(color);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const e = Math.random() * Math.PI;
      const sp = 6 + Math.random() * 12;
      this.live.push({
        x, y, z,
        vx: Math.sin(e) * Math.cos(a) * sp,
        vy: Math.cos(e) * sp + 4,
        vz: Math.sin(e) * Math.sin(a) * sp,
        life: 0.4 + Math.random() * 0.4,
      });
    }
    if (this.live.length > this.maxSparks) this.live.splice(0, this.live.length - this.maxSparks);
  }

  shake(amt = 0.4, time = 0.25) {
    this.shakeAmt = Math.max(this.shakeAmt, amt);
    this.shakeT = Math.max(this.shakeT, time);
  }
  stop(t = 0.05) { this.hitstop = Math.max(this.hitstop, t); }

  update(dt) {
    // particles
    const pos = this.sparkGeo.attributes.position.array;
    let n = 0;
    for (let i = this.live.length - 1; i >= 0; i--) {
      const s = this.live[i];
      s.life -= dt;
      if (s.life <= 0) { this.live.splice(i, 1); continue; }
      s.vy -= 28 * dt;
      s.x += s.vx * dt; s.y += s.vy * dt; s.z += s.vz * dt;
      if (n < this.maxSparks) {
        pos[n * 3] = s.x; pos[n * 3 + 1] = s.y; pos[n * 3 + 2] = s.z; n++;
      }
    }
    this.sparkGeo.setDrawRange(0, n);
    this.sparkGeo.attributes.position.needsUpdate = true;
    this.sparkMat.opacity = 0.95;

    // camera shake
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const a = this.shakeAmt * (this.shakeT > 0 ? 1 : 0);
      this.shakeOffset = new THREE.Vector3(
        (Math.random() - 0.5) * a,
        (Math.random() - 0.5) * a,
        (Math.random() - 0.5) * a
      );
    } else {
      this.shakeOffset = new THREE.Vector3();
    }
  }
}
