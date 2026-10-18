# Jonathan Becker: working style

Read this before building anything for Jonathan. It is distilled from a full
read of his Claude history (24 cloud sessions, May to October 2026), his seven
published artifacts, the Skyfish brand brief, the Miirror Mask App Store page,
and this ChucK course repo.

## Who

- iOS and macOS developer, maker, and visual artist. Ships real apps:
  Miirror Mask (App Store id 6814100874, with artist Freddie Yauner),
  MilkCollective (fullscreen macOS AR show with Metal shaders, Vision tracking,
  and a MilkDrop visualizer), and a "big0_omouth" build.
- Works from written build specs, then iterates by testing the running thing.
- Hardware too: Raspberry Pi 5, a Calypso ultrasonic anemometer streamed over
  Bluetooth, an HP printer on the LAN, Bambu Lab 3D printer, Xbox controller
  as a live input device.
- Studies audio DSP in ChucK (this repo, CalArts MTEC-360).

## What he builds, and the thread through it

Every project is a hands-on generator or live effect with a physical or
nostalgic reference point:

- Datamosh 2 clone: live datamoshing across a folder of clips with controller
  input. Wanted it "radical, hip and trippy," not mild.
- Handwritten font wiggler: type any font, make it look hand-inked, wiggle it
  between frames like the recent TMNT movies. Local fonts, arrow keys to cycle,
  4K export, transparent GIF.
- Hyperbloom tool: take any image and bloom it, with tweakable parameters,
  after watching a reference video first.
- Animorph Cover Studio: any two objects morph via a real Beier-Neely engine,
  with the 90s airbrushed background and a flipbook export.
- Chinese Knot Lab: parametric knots from Lydia Chen's formulas, STL export.
- Bismuth Growth: seeded hopper-crystal clusters, 100 geometry claims
  verified against papers, printable STL.
- optical.toys teardown: all 32 illusion pages inventoried against the real
  source and the live page, for a rebuild.
- Skyfish: brand system for a world-record delta kite flown from a boat.
- Domino Gantt: a dependency-aware planner, one HTML file.
- Jazz ukulele and piano trainers as standalone local HTML files.
- DKC2 sprite frame extraction by color (his default working folder).

Common thread: real math or real history under a playful surface. He cites the
source (Beier and Neely 1992, Lydia Chen 2007, David Mattingly's Elastic
Reality workflow, Kirkpatrick 1981) and then makes it a toy with sliders.

## How he works with an assistant

- Asks for the reference first: "watch this video first before i have you
  make software that's related to it." Attaches an MP4, a build spec, a URL.
- Wants a plan confirmed before code when the idea is new: "does that sound
  like a plan? confirm with me before you write anything."
- Then tests immediately and reports what he sees in plain terms: "i see no
  video," "nothing fixed," "your software was just a black screen."
- Expects research, not guesses: "do extensive research online find at least
  20 examples... don't fake it."
- Asks for the mechanism in portable form: "write it as a function i can
  copy paste," "write a statement that explains this behavior so an AI could
  recreate it in another piece of code."
- Installs skills and wants them applied permanently. Wants rules remembered.
  Gets sharp when something that should be easy breaks twice.
- Typos are normal; read for intent.

## Taste

- Concept first, machinery hidden. "A fish that flies." "Turn the camera back
  toward the world." The idea fits in one sentence.
- Analog and nostalgic references: 90s book covers, film grain, flipbooks,
  NES palettes, VHS datamosh, hand-inked lettering, kites, mirrors, cord.
- Digital work that points back at the physical world: STL you can print,
  a mask that reflects the room, a kite in a real sky.
- One light touch of humor per piece, never two. Dog commits in a DSP repo,
  a fish joke in a brand deck, a smiley on an app icon.
- Calm copy. Short sentences. No exclamation points. No hype words.

## Visual

- Big sky, small subject. Lots of empty space. Subject on a third line,
  horizon low.
- Palettes are few and named. Skyfish: Windfish Blue #64A2D0, Cloud White,
  Bubble Yellow #F3E383, Line Black #131414, Pale Sky #D8E8F3. Tools use a
  dark panel (#14161d) with violet and teal accents, or warm paper with
  cinnabar red, or App Store system grays.
- Type: one display face with character (Jost, Fraunces, Chakra Petch,
  Archivo) plus IBM Plex Sans and Plex Mono for body and numbers.
- Always light and dark mode. Always works on a phone.

## Code

- Vanilla HTML, CSS, and JS in one file he can double-click. No frameworks.
  Canvas and SVG by hand. Native Swift, Metal, and Vision when it must be
  native. Python when it is a hardware script.
- Comments explain the why and the source, not the what.
- Exports real files: PNG, APNG, GIF with alpha, SVG, OBJ, STL, CSV, JSON.
  The output leaves the browser.
- Keyboard first: arrow keys cycle, space plays, shift cuts, return rewinds.
  Audio muted by default. Progress bars and cancel on long jobs.
- Verifies against reality: a checker script, a watertight test, a live page
  measurement, a claim-by-claim refutation pass.

## For video and effect work

- Default look: camera as a mirror of the surroundings, not of the self.
  Wide sky, soft light at dawn or dusk. One visual joke at most.
- Effects should feel strong and strange, with many tweakable parameters,
  and be built from the actual technique (I-frame removal, feature-based
  warps, bloom thresholds), not a fake approximation.
- Audio side: hand-built DSP (FIR and IIR filters, delays, oscillators) over
  presets.
