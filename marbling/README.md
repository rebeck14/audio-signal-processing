# Ink on Water

A suminagashi bath in one HTML file, simulated as a surface flow on the GPU. Double-click `index.html` in Safari or Chrome on a Mac. WebGL2 with float textures is required.

Tap to drop sumi. Hold to pour. Switch to Clear and tap on the same spot to push the ring outward. Drag with the stick to stir, or with the rake to comb. Return pours fresh water.

| Key | Does |
|---|---|
| 1 to 5, arrows | pick an ink: Sumi, Washi, Cinnabar, Bubble, Windfish |
| D, C, S, R | Ink, Clear, Stir, Rake |
| T | a sumi target: sumi, clear, sumi, on one spot |
| Z | undo (the ink and the film; the flow restarts from rest) |
| Return | fresh water |
| E, V | pull a 2048 px PNG print, or an SVG traced from the ink |

## The model

Sumi ink is a surfactant. Where it lands, surface tension drops, and the surface is pulled toward clean water. That Marangoni pull is what spreads a drop and what pushes earlier rings outward when the next drop lands inside them.

- **Film.** Two surfactant species on a 512 grid: sumi and the clear dispersant. Both are carried by the surface flow as a conserved surface density, so a stretched surface thins the film and a squeezed one thickens it.
- **Spreading flow.** The bath is treated as overdamped: floor drag balances the Marangoni pull within a frame, so the surface velocity is the tension gradient times a mobility. Surface tension and bath depth set that mobility. This flow is compressible, as a real surface fed from below is.
- **Stirred flow.** The stick is a moving no-slip disk in a divergence-free flow (Jacobi pressure projection, 40 sweeps). The wake, and the mushrooms it folds rings into, come from the projection, not from a drawn shape. Viscosity and depth damp it.
- **Ink.** Ink is never painted. A 1024 material map records where each point of the surface came from, and a 2048 ink texture holds colour and density in that original frame. On screen, density is multiplied by the map's area compression: film stretched to five times its area reads a fifth as dark, film squeezed into a ring reads darker. Edges stay crisp because the map, not the ink, is what moves.
- **Readout.** After a drop, the footer fits the growth of its area to R ~ t^n for three seconds and prints n. Deep-water Marangoni spreading gives 0.75, a thin viscous film 0.25.

What is verified: the shaders compile and run, a drop spreads into a pale disk with a dark rim, a clear drop inside it makes a ring, and the stick wake is a projected flow. What is not yet verified: the numbers. Making this the most accurate suminagashi simulator means filming a real bath and fitting the mobility, the drag, and the ring spacing to it.

The reel that started this showed chromaSpill by cpreid2 (Apache-2.0), a WebGL bath with a surfactant pressure solve and vorticity confinement. This is an independent implementation with a different model: overdamped Marangoni flow, two surfactant species, and Jacobian-shaded ink density.

## Testing

`test/scenario.mjs` drives the bath without the clock through the reel's sequence: a target, a stir through it, five drops, a stir between them, a rake. It needs Playwright and writes one PNG per stage. The `window.__ink` hook it uses (`run`, `drop`, `clear`, `stickOn`, `stickMove`, `stickOff`, `target`, `fresh`, `set`, `pause`, `resume`, `sync`) is also handy from the browser console. The `f*.png` files beside it are the frames from a full 512-grid run.
