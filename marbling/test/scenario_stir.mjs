import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)(process.env.NODE_PATH + '/playwright');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1000, height: 820 }, deviceScaleFactor: 1 });
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto('file://' + process.cwd() + '/../index.html');
await page.waitForTimeout(800); await page.evaluate(() => __ink.pause());
const shot = async (name) => { const b = await page.locator('#bath').boundingBox(); await page.screenshot({ path: name, clip: b, timeout: 300000 }); console.log('shot', name); };
await page.evaluate(() => { __ink.target(0.5, 0.5, 13); __ink.run(1.0); });
// a slow S-curve through the rings, like the reel: about a third of the bath per second
await page.evaluate(() => { __ink.stickOn(0.15, 0.35, 1); __ink.stickMove(0.35, 0.42, 0.6); __ink.stickMove(0.5, 0.55, 0.5); });
await shot('s1_mid_stroke.png');
await page.evaluate(() => { __ink.stickMove(0.65, 0.6, 0.5); __ink.stickMove(0.85, 0.5, 0.6); __ink.stickOff(); });
await shot('s2_stroke_end.png');
await page.evaluate(() => { __ink.run(1.0); });
await shot('s3_one_second_later.png');
// a fast flick: the whole segment must leave a wake, no dotted gaps
await page.evaluate(() => { __ink.stickOn(0.5, 0.9, 1); __ink.stickMove(0.5, 0.1, 0.25); __ink.stickOff(); __ink.run(0.6); });
await shot('s4_fast_flick.png');
console.log(JSON.stringify({ errs: errs.slice(0, 5) }));
await browser.close();
