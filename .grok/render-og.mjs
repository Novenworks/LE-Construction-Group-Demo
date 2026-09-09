import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const html = resolve("/workspace/.grok/og-card.html");
const out = resolve("/workspace/.grok/og-card-raw.png");
const executablePath =
  "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--font-render-hinting=none"],
});

const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});

await page.goto(pathToFileURL(html).href, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  await document.fonts.ready;
});
await page.waitForFunction(
  () => document.fonts.check("540 92px Fraunces") && document.fonts.check("600 16px Figtree"),
  { timeout: 10000 },
);
await page.waitForTimeout(120);
await page.locator(".card").screenshot({ path: out, type: "png" });
await browser.close();
console.log(`wrote ${out}`);
