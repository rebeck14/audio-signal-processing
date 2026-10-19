# Ink on Water

A suminagashi bath in one HTML file, simulated as a surface flow on the GPU. Double-click `index.html` in Safari or Chrome on a Mac. WebGL2 with float textures is required.

Tap to drop sumi. Hold to pour. Switch to Clear and tap on the same spot to push the ring outward. Drag with the stick to stir, or with the rake to comb. Load an SVG, or drop one on the water, and it becomes ink you place with a click. Return pours fresh water. The bath opens blank with Ink selected.

| Key or gesture | Does |
|---|---|
| 1 to 5, ↑ ↓ | pick an ink. Click the selected chip again to change its colour. The square chip is the water. |
| D, C, S, R, F | Ink, Clear, Stir, Rake, Shape |
| ⌘ and move, or scroll | drop size with Ink or Clear, tip size with Stir or Rake, shape size with Shape, from a twentieth of the bath to three times it. Right is bigger. |
| ⌘⌥ and move, ⌥ scroll, or ← → | turn the rake or the shape. Right is clockwise. |
| Load shape…, or drop a file on the water | an SVG or PNG becomes ink. "file colours" keeps its colours, up to eight; off, it is a silhouette in the selected ink. |
| Tines, Tine gap | sliders for the rake |
| T | a sumi target: sumi, clear, sumi, on one spot |
| Z | undo (the ink and the film; the flow restarts from rest) |
| Return | fresh water |
| E, V | pull a 2048 px PNG print, or an SVG traced from the ink |

## The model

Sumi ink is a surfactant. Where it lands, surface tension drops, and the surface is pulled toward clean water. That Marangoni pull is what spreads a drop and what pushes earlier rings outward when the next drop lands inside them.

- **Film.** Two surfactant species on a 512 grid: sumi and the clear dispersant. Both are carried by the surface flow as a conserved surface density, so a stretched surface thins the film and a squeezed one thickens it.
- **Spreading flow.** The bath is treated as overdamped: floor drag balances the Marangoni pull within a frame, so the surface velocity is the tension gradient times a mobility. Surface tension and bath depth set that mobility. This flow is compressible, as a real surface fed from below is.
- **Stirred flow.** The stick is a wet cylinder pushed through a sheet: a Gaussian no-slip core that drags the film with it and a doublet that shoves film aside ahead and closes it behind, applied along the whole path the tip swept that frame so a flick leaves one continuous wake. The flow is kept divergence-free by a multigrid pressure solve (two V-cycles from 512 down to 16), which is what lets one stroke move film across the whole bath, the way the reel's does. Vorticity confinement feeds back the eddies the grid smears, and viscosity and depth damp the wake; at the default depth it halves in about a fifth of a second.
- **Shapes.** A loaded file is rasterized at 2048, the ink's resolution, so a shape placed at 3x still has clean edges. Its palette is the eight most common colours among interior pixels: anti-aliased edge pixels are blends, not colours, and a colour that runs along the file's border is a background and is left out. Each texel then gets its region colour and a chamfer distance to the nearest other region, the same format as the ink texture. Placing it stamps that field into the ink and lays surfactant over it, scaled down with the shape's size, so it spreads and stirs like a drop without flooding the bath.
- **Ink.** Ink is never painted. A 1024 material map records where each point of the surface came from, and a 2048 ink texture holds, for each texel, the colour of the region it sits in and the distance to the nearest boundary with another region. Interpolating distances locates a boundary between texels, so a sheared edge stays a smooth curve instead of turning into teeth. Every eight frames the ink is re-rasterized in its current position and the map reset, and the display samples each pixel four times. A clear drop lifts ink off the water and adds dispersant, which is how the alternating rings are made.
- **Readout.** After a drop, the footer fits the growth of its area to R ~ t^n for three seconds and prints n. Deep-water Marangoni spreading gives 0.75, a thin viscous film 0.25.

What is verified: the shaders compile and run, a drop spreads into a pale disk with a dark rim, a clear drop inside it makes a ring, and the stick wake is a projected flow. What is not yet verified: the numbers. Making this the most accurate suminagashi simulator means filming a real bath and fitting the mobility, the drag, and the ring spacing to it.

The reel that started this showed chromaSpill by cpreid2 (Apache-2.0), a WebGL bath with a surfactant pressure solve and vorticity confinement. This is an independent implementation with a different model: overdamped Marangoni flow, two surfactant species, and ink stored as region colour plus boundary distance.

## Testing

`test/scenario.mjs` drives the bath without the clock through the reel's sequence: a target, a stir through it, five drops, a stir between them, a rake. `test/scenario_stir.mjs` is a slow S-curve through a target and a fast flick, the stroke the reel is judged by. `test/scenario_shape.mjs` loads a two-colour SVG, places it, spreads and stirs it. It needs Playwright and writes one PNG per stage. The `window.__ink` hook it uses (`run`, `drop`, `clear`, `stickOn`, `stickMove`, `stickOff`, `target`, `fresh`, `set`, `shapeFromSvg`, `place`, `pause`, `resume`, `sync`) is also handy from the browser console. The `f*.png` files beside it are the frames from the latest run.
