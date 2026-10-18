# Ink on Water

A suminagashi bath in one HTML file. Double-click `index.html`. Works with a mouse, a finger, or an Apple Pencil.

Tap to drop ink. Hold to pour. Drag with the stick to stir. Switch to the rake to comb. Return pours fresh water.

| Key | Does |
|---|---|
| 1 to 5, arrows | pick an ink: Sumi, Washi, Cinnabar, Bubble, Windfish |
| D, S, R | Drop, Stir, Rake |
| T | a sumi target of nine rings under the cursor |
| Z | undo |
| Return | fresh water |
| E, V | pull a 2048 px PNG print, or an exact SVG |

## How it works

The water is a list of closed polygons, one per drop, drawn in order. Nothing is ever rasterized until the frame is painted, so the SVG print is the real picture.

- A drop of radius r at C moves every existing point P to `C + (P - C) * sqrt(1 + r^2 / |P - C|^2)`. Area is conserved and boundaries never cross. (Jaffer, "Mathematical Marbling", 2011.)
- The rake is Jaffer's tine line: a comb of parallel tines sweeps along the stroke, and each point is carried by `u^dist`, with `u = 2^(-1/sharpness)`.
- The stick is a short Gaussian core that carries ink along the stroke, plus a wake that rotates points clockwise on one side of the path and counter-clockwise on the other. That wake is what makes a drag through rings fold into the mushroom shapes you see in a real bath.
- Stretched edges get new points, bunched edges lose some, and the total is capped so a long stir stays smooth.

Reference: the reel that started this showed chromaSpill by cpreid2 (Apache-2.0), a WebGL Navier-Stokes bath with surface tension and vorticity. This file is an independent closed-form implementation; it trades the fluid solver for exact vector output and a 90 KB page.
