# QA notes

Targets: desktop ~1440px, mobile ~390px, plus intermediate widths.

Checked 8 Sep 2026 against `http://127.0.0.1:8080` (dev) and production build on `:8081`.

| Check | Desktop 1440 | Mobile 390 |
| --- | --- | --- |
| Nav + mobile menu | Pass | Pass (hamburger, 44px target) |
| Hero crop / type wrap | Pass | Pass; stacked CTAs |
| CTA visibility | Pass | Pass |
| Cards / gallery | Pass | Pass; no horizontal overflow |
| Image loads | Pass — first-party photos | Pass |
| Form disclosure | Pass — demo-only copy | Pass |
| Phone `tel:` | Pass — (562) 674-7723 | Pass |
| Footer disclosure | Pass — speculative | Pass |
| `/outreach` noindex, unlinked | Pass | Pass |
| Console | Clean | Clean |
| `npm run build` / `typecheck` | Pass | — |
| Production smoke vs preview | No divergence | No divergence |

Captures in `public/outreach/`: before 1440×3938 (live Wix), after desktop 1440×7144, after mobile 390×11798, GIF 720×450 / 40 frames / ~6.7s, MP4 1280×800 / 6.67s. Both scroll recordings pass the hero and show services, work, about, and later sections.
