# Changelog

## 2026-09-27 — photo orientation and labeling fix

- Seven project photos were saved sideways when the web derivatives were made (EXIF orientation dropped). Rotated upright in the pixels, same filenames, 1500×2000, JPEG q84.
- Re-verified every photo against its first-party Wix original. The ids were right; the descriptions were not. Only 3 photos are kitchens, 1 is a living room, 1 is a wet bar (`bath-marble-corner.jpg`, unused), and the rest are finished bathrooms — there is no jobsite or in-progress frame. Corrected `alt`, `category`, `stage`, and dimensions in `src/lib/projects.ts`.
- Kitchens card, `/kitchen` hero, and `/services` kitchen card now use real kitchen photos; `/bathroom` hero is a bathroom (was a living room); "Additions & larger work" uses the living room. `/work` heading and copy no longer promise in-progress frames.
- `/work` closing CTA heading was dark text on the dark panel; now cream.
- Operator brief (`/outreach`) wording corrected to "kitchen and bathroom photography."
- Recaptured AFTER desktop/mobile/GIF/MP4. BEFORE capture unchanged.

## 2026-09-08 — voice pass and footer contrast

- Prospect-facing copy no longer describes “the current site,” “catalog filler,” or research method. Homepage, about, work, and services now speak as the business.
- Footer wordmark sits on a cream plate so the first-party logo remains readable on the night footer (it is dark-on-transparent).
- Instagram and Yelp links (first-party) added to footer and contact.
- CSLB rechecked: #1070952 still current and active; WC exemption unchanged; bond with Merchants Bonding Company (Mutual) effective 07/26/2025. Still do not advertise crew size or “fully insured.”
- Venetian plaster and structural work confirmed on `/construction-services` “Our Expertise.” Kept.
- Recapture of BEFORE (live Wix), AFTER desktop/mobile, and scrolling GIF/MP4 after the visual pass.

## 2026-09-08 — speculative demo, first build

- Prospect: L & E Construction Group, Santa Ana / Orange County.
- Agency check: Wix.com Website Builder; no agency credit on the live site.
- CSLB #1070952 verified current and active (B – General Building). Qualifier: Eric Ray Bernal. WC exemption on file (certified no employees, 2024-12-05). Do not advertise crew size or “fully insured.”
- First-party assets: original L&E logo plus 25 web-optimized project/jobsite photographs from the Wix gallery. Homepage Wix-template stock (f33fe9 kitchen/bath/patio) classified as not-their-work and unused as completed-job proof.
- Stack decision: TanStack Start in this sandbox rather than Next.js (preview contract). Documented in README / AGENTS.project.md.
- CTA: Request an Estimate + verified (562) 674-7723. Form is demo-only and discloses that.
- `/outreach` unlinked + noindex. robots.txt disallows `/outreach`.
- Address used: 2522 W MacArthur Blvd Unit L, Santa Ana, CA 92704 (first-party JSON-LD and CSLB). Houzz’s alternate phone (562) 600-7215 is not used.
