# ⚔️ Ragdoll Blade Arena

A browser‑based, physics‑driven sword‑fighting game inspired by the *Ragdoll Blade* concept — rebuilt from scratch with **100% original code** and **procedurally‑drawn visuals** (no external image/audio assets). Control a floppy ragdoll, swing your blade, and slice your opponent's limbs (and head!) clean off.

🎮 **Two ways to fight:**
- 🤖 **AI対戦 (1P)** — battle a CPU opponent with selectable difficulty (Easy / Normal / Hard)
- 👥 **友達対戦 (2P)** — local same‑keyboard friend vs. friend duels

## ✨ Features

- **Verlet‑integration physics engine** — point masses + distance/angle constraints give the signature wobbly, comedic ragdoll motion.
- **Active ragdoll control** — "muscles" keep your fighter upright; walk, jump and swing using physics forces, not canned animations.
- **Limb severing** — when a swinging blade crosses a bone, that bone is cut: the limb becomes a free‑floating body, blood sprays, and red cut‑caps appear. Lose your head or spine and you're out.
- **Blade clash sparks** — parry an incoming sword and watch the sparks fly.
- **3 themed arenas** — Verdant Field 🌿, Stone Canyon 🪨, Frozen Lake ❄️ (all drawn procedurally).
- **Best‑of rounds** — first to win the majority of 1 / 3 / 5 rounds takes the match.
- **Procedural audio** — swings, clashes, slices and victory jingles synthesized live via the Web Audio API.
- **Touch controls** — on‑screen buttons for mobile (1P mode).
- **Screen shake & hit‑pause** — juicy feedback on every clean cut.

## 🎯 Controls

| Action | Player 1 | Player 2 |
|--------|----------|----------|
| Move   | `A` / `D` | `←` / `→` |
| Jump   | `W` | `↑` |
| Swing blade | `F` / `Space` | `Enter` / `.` |
| Pause  | `Esc` | `Esc` |

On a touch device the 1P mode shows on‑screen movement / jump / attack buttons.

## 🚀 Run locally

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

It's a pure static site — any static file server works. No build step, no dependencies.

## 📁 Project structure

```
index.html        # markup: canvas, menus, HUD, touch controls
styles/main.css   # all UI styling
src/
  physics.js      # Verlet world: points, sticks, angle constraints, collisions
  ragdoll.js      # active ragdoll fighter (skeleton, muscles, sword)
  combat.js       # slicing, severing, blood & spark particle systems
  render.js       # Canvas2D renderer + procedural arena themes
  ai.js           # finite‑state combat AI (approach / strike / retreat / dodge)
  input.js        # keyboard (2P) + touch input mapping
  audio.js        # procedural Web Audio sound effects
  game.js         # game manager: world setup, modes, rounds, scoring
  main.js         # UI controller & app bootstrap
```

## 🧠 How it works (a peek under the hood)

Each fighter is a small skeleton of **point masses** connected by **distance constraints** ("bones") that are solved with several relaxation iterations per frame. Soft per‑frame "muscle" forces in `ragdoll.control()` spring the hip up to standing height and stack the chest/head above the hip, so the doll *tries* to stand — but physics (and your opponent's sword) constantly fight back, producing the chaotic, funny motion.

Combat is resolved by testing each active blade segment (handle→tip) against every bone of the other fighters using **segment‑intersection** math. A hit marks the bone `broken`, frees the limb, spawns blood, and applies an impulse along the cut direction. Losing the neck or spine ends the round.

---

*Built as an original homage to the physics‑combat genre. All art and sound are generated at runtime in code.*
