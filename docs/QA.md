# QA notes

Targets: desktop ~1440px, mobile ~390px, plus intermediate widths.

Checked 8 Sep 2026 against `http://127.0.0.1:8080` (dev) and production build on `:8081` after the voice/footer pass.

| Check | Desktop 1440 | Mobile 390 |
| --- | --- | --- |
| Nav + mobile menu | Pass | Pass (hamburger, 44px target) |
| Hero crop / type wrap | Pass | Pass; stacked CTAs |
| CTA visibility | Pass | Pass |
| Cards / gallery | Pass | Pass; no horizontal overflow |
| Image loads | Pass — first-party photos | Pass |
| Footer logo contrast | Pass — wordmark on cream plate | Pass |
| Form disclosure | Pass — demo-only copy | Pass |
| Phone `tel:` | Pass — (562) 674-7723 | Pass |
| Footer disclosure | Pass — speculative | Pass |
| `/outreach` noindex, unlinked | Pass | Pass |
| Console | Clean in production smoke (Playwright caret-color hydration on inputs in one dev pass is a tooling artifact) | Clean |
| `npm run build` / `typecheck` | Pass | — |
| Production smoke vs preview | No divergence | No divergence |

Captures in `public/outreach/` (re-taken after the voice/footer pass):

- `before-original-desktop.png` — live Wix, 1440×3938
- `after-desktop.png` — 1440×7160
- `after-mobile.png` — 390×11472
- `after-scroll.gif` — 720×450, 33 frames, ~5.5s, hero through footer
- `after-scroll.mp4` — 1280×800, 33 frames, ~3.9s, same scroll

Both scroll recordings pass the hero and show services, work, about, process, quotes, and footer.
