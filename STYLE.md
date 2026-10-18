# Jonathan Becker: working style

Read this before building anything for Jonathan. It is distilled from his
shipped work (Miirror Mask, Skyfish brand system, Animorph Cover Studio,
Chinese Knot Lab, and this ChucK course repo).

## Who
- iOS developer and maker. Ships real apps (Miirror Mask, App Store id 6814100874,
  with artist Freddie Yauner). Studies audio DSP in ChucK (this repo).
- Builds tools, not demos: a cover generator with a real Beier-Neely morph engine,
  a knot lab that exports STL for a Bambu printer, a store page mocked at pixel level.

## Taste
- Concept first, machinery hidden. "A fish that flies." "Turn the camera back
  toward the world." The idea is one sentence; the engineering is real but never leads.
- Real math under a friendly surface. Cites the paper (Beier and Neely 1992, Lydia
  Chen 2007) and then makes it playable with sliders.
- Analog and physical references: 90s airbrushed covers, film grain, flipbooks,
  cord and knots, kites, mirrors. Digital work that points back at the physical world.
- One light touch of humor per piece, never two. Dog commits in a DSP repo. Fish puns
  in a brand deck. Smiley face on an app icon.
- Calm copy. Short sentences. No exclamation points. No hype words.

## Visual
- Big sky, small subject. Lots of empty space. Subject on a third line.
- Palettes are few and named: Windfish Blue #64A2D0, Cloud White, Bubble Yellow
  #F3E383, Line Black #131414. Or warm paper plus cinnabar red. Or deep navy plus violet.
- Type: one display face with character (Fraunces, Chakra Petch, Jost) plus IBM Plex
  Sans and Plex Mono for the body and numbers.
- Always light and dark mode. Always works on a phone.

## Code
- Vanilla HTML, CSS, and JS in one file. No frameworks. Canvas and SVG by hand.
- Comments explain the why and the source, not the what.
- Exports real files: PNG, APNG, SVG, OBJ, STL. The output leaves the browser.
- Progress bars, cancel tokens, keyboard shortcuts. Tools feel finished.

## For video work
- Default to: camera as a mirror of the surroundings, not of the self. Wide sky,
  low horizon, soft light at dawn or dusk. One visual joke at most.
- Audio side: hand-built DSP (FIR and IIR filters, delays, oscillators) over presets.
