// ============================================================
// Global configuration & tuning constants
// ============================================================

export const PHYS = {
  GRAVITY: -22.0,
  TIMESTEP: 1 / 60,
  SUBSTEPS: 2,
};

// Body part colors per fighter
export const FIGHTER_COLORS = {
  p1: 0xffd633, // yellow
  p2: 0xff3b5c, // red
};

// Weapon definitions — reach, mass, swingPower, damage
export const WEAPONS = {
  katana: {
    name: '刀', bladeLen: 1.15, bladeWidth: 0.05, mass: 1.0,
    swingPower: 1.0, damage: 1.0, color: 0xdfe6f0, guardColor: 0x222233,
    handleLen: 0.28,
  },
  greatsword: {
    name: '大剣', bladeLen: 1.6, bladeWidth: 0.11, mass: 2.2,
    swingPower: 1.35, damage: 1.5, color: 0xc9d2e0, guardColor: 0x3a2a1a,
    handleLen: 0.42,
  },
  spear: {
    name: '槍', bladeLen: 1.9, bladeWidth: 0.04, mass: 1.3,
    swingPower: 0.85, damage: 1.1, color: 0xe2e8f2, guardColor: 0x4a3520,
    handleLen: 0.6, isThrust: true,
  },
  hammer: {
    name: 'ハンマー', bladeLen: 1.1, bladeWidth: 0.22, mass: 3.0,
    swingPower: 1.6, damage: 1.8, color: 0x8893a5, guardColor: 0x2a2a2a,
    handleLen: 0.5, blunt: true,
  },
};

// Body part identifiers
export const PART = {
  HEAD: 'head',
  TORSO: 'torso',
  PELVIS: 'pelvis',
  UPPER_ARM_L: 'upperArmL',
  LOWER_ARM_L: 'lowerArmL',
  UPPER_ARM_R: 'upperArmR',
  LOWER_ARM_R: 'lowerArmR',
  UPPER_LEG_L: 'upperLegL',
  LOWER_LEG_L: 'lowerLegL',
  UPPER_LEG_R: 'upperLegR',
  LOWER_LEG_R: 'lowerLegR',
};

// Damage thresholds — how much accumulated hit energy locks/severs a joint
export const DAMAGE = {
  LOCK_THRESHOLD: 30,    // joint stops working (joint-lock)
  SEVER_THRESHOLD: 70,   // limb detaches
  HEAD_KILL: 55,         // headshot lethal
  TORSO_KILL: 130,       // body-cut lethal
  HIT_BASE: 22,          // base hit energy
};

export const MATCH = {
  ROUNDS_TO_WIN: 2,      // best of 3
  ROUND_TIME: 60,        // seconds (0 = infinite)
};

// AI difficulty profiles
export const AI_PROFILES = {
  easy:   { react: 0.55, aggression: 0.4, accuracy: 0.55, blockChance: 0.15, swingCooldown: 1.1 },
  normal: { react: 0.32, aggression: 0.62, accuracy: 0.72, blockChance: 0.35, swingCooldown: 0.75 },
  hard:   { react: 0.18, aggression: 0.8, accuracy: 0.86, blockChance: 0.55, swingCooldown: 0.5 },
  insane: { react: 0.08, aggression: 0.95, accuracy: 0.96, blockChance: 0.75, swingCooldown: 0.32 },
};

export const NET = {
  // public signaling/relay server. Falls back to same-origin in production.
  SIGNAL_URL: (() => {
    const host = location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') return `ws://${location.hostname}:8787`;
    // same origin, ws path
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    return `${proto}://${location.host}/ws`;
  })(),
  TICK: 20,            // network broadcast Hz
};
