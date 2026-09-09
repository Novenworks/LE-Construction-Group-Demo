#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { chromium } from "playwright";

const OUT = "/workspace/public/outreach";
const QA = "/workspace/screenshots";
mkdirSync(OUT, { recursive: true });
mkdirSync(QA, { recursive: true });

const AFTER = "http://127.0.0.1:8080/";
const BEFORE = "https://www.lneconstructiongroup.com/";

const browser = await chromium.launch({ args: ["--no-sandbox"] });

async function fullPage(url, width, height, path, waitExtra = 1500) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(waitExtra);
  // force lazy images
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 600) {
      window.scrollTo(0, y);
      await sleep(120);
    }
    window.scrollTo(0, 0);
    await sleep(400);
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path, fullPage: true, type: "png" });
  const box = await page.evaluate(() => ({
    w: window.innerWidth,
    h: document.body.scrollHeight,
  }));
  await page.close();
  return box;
}

console.log("BEFORE original desktop…");
const before = await fullPage(
  BEFORE,
  1440,
  900,
  `${OUT}/before-original-desktop.png`,
  4000,
);
console.log("before", before);

console.log("AFTER desktop 1440…");
const afterD = await fullPage(
  AFTER,
  1440,
  900,
  `${OUT}/after-desktop.png`,
  1500,
);
console.log("after desktop", afterD);

console.log("AFTER mobile 390…");
const afterM = await fullPage(
  AFTER,
  390,
  844,
  `${OUT}/after-mobile.png`,
  1500,
);
console.log("after mobile", afterM);

// QA below-fold desktop
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(AFTER, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: `${QA}/home-1440-hero.png` });
await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(400);
await page.screenshot({ path: `${QA}/home-1440-services.png` });
await page.evaluate(() => window.scrollTo(0, 2200));
await page.waitForTimeout(400);
await page.screenshot({ path: `${QA}/home-1440-work.png` });
await page.evaluate(() => window.scrollTo(0, 3600));
await page.waitForTimeout(400);
await page.screenshot({ path: `${QA}/home-1440-about.png` });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(400);
await page.screenshot({ path: `${QA}/home-1440-footer.png` });

for (const path of ["/work", "/services", "/about", "/contact", "/outreach"]) {
  await page.goto("http://127.0.0.1:8080" + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `${QA}/page${path.replaceAll("/", "-")}.png`,
    fullPage: true,
  });
}

// Scroll frames for gif/mp4
console.log("scroll frames…");
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(AFTER, { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
const total = await page.evaluate(() => document.body.scrollHeight);
const view = 900;
const steps = 18;
const framesDir = "/tmp/lne-scroll-frames";
mkdirSync(framesDir, { recursive: true });
const maxY = Math.max(0, total - view);
for (let i = 0; i <= steps; i++) {
  const y = Math.round((maxY * i) / steps);
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(180);
  const name = `${framesDir}/frame-${String(i).padStart(3, "0")}.png`;
  await page.screenshot({ path: name, type: "png" });
}
await page.close();
await browser.close();

console.log("encoding mp4 + gif…");
execFileSync(
  "ffmpeg",
  [
    "-y",
    "-framerate",
    "8",
    "-i",
    `${framesDir}/frame-%03d.png`,
    "-vf",
    "scale=1280:-2",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    `${OUT}/after-scroll.mp4`,
  ],
  { stdio: "inherit" },
);

execFileSync(
  "ffmpeg",
  [
    "-y",
    "-framerate",
    "6",
    "-i",
    `${framesDir}/frame-%03d.png`,
    "-vf",
    "scale=720:-2:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=64[p];[s1][p]paletteuse",
    "-loop",
    "0",
    `${OUT}/after-scroll.gif`,
  ],
  { stdio: "inherit" },
);

writeFileSync(
  `${QA}/capture-meta.json`,
  JSON.stringify({ before, afterD, afterM, total }, null, 2),
);
console.log("done");
