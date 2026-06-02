// ============================================================
// Central config: weapons, stages, colors, tuning constants.
// All gameplay numbers live here so balancing is one-stop.
// ============================================================

export const WORLD = {
  gravity: -38,          // verlet gravity (units/s^2-ish, tuned for feel)
  ground: 0,             // ground plane y
  arenaRadius: 11,       // ring-out radius for "arena" stage
  damping: 0.86,         // velocity damping per substep
  groundFriction: 0.78,  // horizontal friction when touching ground
  substeps: 3,           // physics substeps per frame
  constraintIters: 12,   // stick constraint relaxation iterations
};

// Weapon definitions. reach = blade length, mass affects swing inertia,
// dmg = energy delivered per unit of impact speed.
export const WEAPONS = {
  katana:  { name: '刀',     reach: 2.2, mass: 1.0, dmg: 1.0,  color: 0xdfe6ee, width: 0.10, swing: 1.25 },
  greatsword:{ name: '大剣', reach: 2.9, mass: 1.7, dmg: 1.5,  color: 0xc7cdd6, width: 0.18, swing: 0.85 },
  rapier:  { name: 'レイピア', reach: 2.5, mass: 0.7, dmg: 0.8,  color: 0xe9eef5, width: 0.06, swing: 1.55 },
  axe:     { name: '斧',     reach: 1.9, mass: 1.9, dmg: 1.7,  color: 0xb9b2a7, width: 0.22, swing: 0.8 },
  spear:   { name: '槍',     reach: 3.2, mass: 1.1, dmg: 1.1,  color: 0xd8cbb0, width: 0.07, swing: 1.0 },
  hammer:  { name: 'ハンマー', reach: 1.8, mass: 2.3, dmg: 2.0,  color: 0x9aa0a8, width: 0.30, swing: 0.7 },
};

export const STAGES = {
  arena:   { name: 'ネオン闘技場', ground: 0x161a2e, accent: 0x00e5ff, sky: 0x0a0c1a, ringOut: true,  fog: 0x0a0c1a, hazard: null },
  meadow:  { name: '草原',         ground: 0x4caf50, accent: 0xfff3b0, sky: 0x9fd6ff, ringOut: false, fog: 0xbfe6ff, hazard: null },
  cliff:   { name: '断崖',         ground: 0x6d5a44, accent: 0xff8a3d, sky: 0xffc48a, ringOut: true,  fog: 0xffd9a8, hazard: 'cliff' },
  saw:     { name: '回転刃',       ground: 0x20242e, accent: 0xff3b5c, sky: 0x12141c, ringOut: true,  fog: 0x12141c, hazard: 'saw' },
};

// Body part radii / sizes used by both physics & visuals.
export const BODY = {
  // node name -> radius (for collision & sphere visual)
  head:  0.42,
  chest: 0.40,
  hip:   0.36,
  hand:  0.16,
  foot:  0.18,
  // bone (stick) rest lengths
  bones: {
    neck:    [ 'head',  'chest', 0.62 ],
    spine:   [ 'chest', 'hip',   0.78 ],
    armL:    [ 'chest', 'handL', 1.15 ],
    armR:    [ 'chest', 'handR', 1.15 ],
    legL:    [ 'hip',   'footL', 1.25 ],
    legR:    [ 'hip',   'footR', 1.25 ],
  },
};

export const DAMAGE = {
  // impact speed above this counts as a hit
  hitThreshold: 7.5,
  // energy needed to lock a joint
  lockEnergy: 22,
  // energy needed to sever (visually detach + heavy stagger)
  severEnergy: 46,
  // KO when this many joints locked OR head/hip severed
  koLockedJoints: 4,
  // self-stagger time on big hit (seconds)
  staggerTime: 0.55,
};

export const COLORS = {
  p1: 0xffd633,   // classic ragdoll yellow
  p2: 0xff5a4d,   // red rival
  stump: 0xcc2222,
};

export const AI_PROFILES = {
  easy:   { react: 0.55, aggression: 0.4, swingPower: 0.7,  dodge: 0.15, label: 'EASY' },
  normal: { react: 0.32, aggression: 0.65, swingPower: 1.0, dodge: 0.35, label: 'NORMAL' },
  hard:   { react: 0.16, aggression: 0.85, swingPower: 1.25, dodge: 0.6, label: 'HARD' },
  insane: { react: 0.08, aggression: 1.0, swingPower: 1.5,  dodge: 0.8,  label: 'INSANE' },
};
