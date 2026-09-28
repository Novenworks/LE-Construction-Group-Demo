# Asset inventory

Acquired 8 Sep 2026 from first-party Wix media (`static.wixstatic.com`). Originals were full-resolution phone/PNG uploads (many 3024×4032, 12–34 MB). Web derivatives live in `public/images/` (max edge 2000px, JPEG q84).

Prefix `d651ae_` = this Wix site’s media id (prospect uploads). Prefix `f33fe9_` mixed: the **logo** is first-party identity; several homepage kitchen/bath/patio stills are Wix-template/stock and are **not** used as completed L & E work.

## Correction — 27 Sep 2026 (content re-verified against pixels)

The Wix media ids in the table below are correct (each web file was re-matched to its live `static.wixstatic.com` original, including `d651ae_40b22cbe…`, which now appears only in the archived `/construction-services` page). The **filenames, "Class" and "Section" descriptions from the first pass are wrong**: several were written without looking at the photo. Seven derivatives (`bath-niche`, `bath-progress-gold`, `bath-progress-room`, `hero-kitchen-island`, `jobsite-exterior`, `kitchen-framing`, `kitchen-in-progress`) were also saved sideways (EXIF orientation dropped at resize; the pixels are now rotated upright, 1500×2000, JPEG q84). Filenames are kept so URLs and the id mapping stay stable. `alt`/`category` in `src/lib/projects.ts` are the source of truth.

What the photos actually show:

| File | Actual content |
| --- | --- |
| hero-kitchen-dining.jpg | Bathroom — freestanding tub + pebble-tile walk-in shower, hillside window |
| hero-kitchen-island.jpg | Bathroom — glass walk-in shower with mosaic strip, white vanity |
| jobsite-exterior.jpg | **Kitchen** — white uppers, gray-green lowers, waterfall island, globe pendants (no jobsite, truck or crew) |
| kitchen-white-gold.jpg | Powder room — dark textured accent wall, wood towel ladder |
| kitchen-shaker.jpg | **Kitchen** — wood-slat island, dark cabinetry, blue tile, stainless built-in fridge |
| kitchen-island-close.jpg | Bathroom — double wood vanity, checkerboard floor |
| kitchen-island-gold.jpg | Bathroom — glass shower, brass fixtures, smart toilet |
| kitchen-island-wide.jpg | Bathroom — frameless glass walk-in shower |
| kitchen-protected.jpg | Bathroom — green vertical tile, freestanding tub, glass shower |
| kitchen-in-progress.jpg | Bathroom — large tiled walk-in shower with bench (finished) |
| kitchen-framing.jpg | Bathroom — grid-frame shower door, patterned floor tile (finished) |
| bath-marble-rain.jpg | Powder room — sage vanity, arched brass mirror |
| bath-vanity-gold.jpg | **Living room** — stacked-stone fireplace wall, arched window |
| bath-hex-shower.jpg | **Kitchen** — dark galley kitchen, gas range |
| bath-glass-shower / shower-toilet / progress-gold / progress-room / niche / vanity-boxes / marble-* | Finished bathrooms (none show construction in progress) |

Net: 3 kitchens, 1 living room, 21 finished bathrooms, 0 jobsite or in-progress frames.

## Used in the redesign

| File | Source page | Source URL (filename) | Original px | Web px | Class | Confidence | Section |
| --- | --- | --- | --- | --- | --- | --- | --- |
| logo.png | global header | f33fe9_3b13a0e1…~mv2.png | 1050×525 | 896×264 trim | Logo | High — live wordmark | Header / footer |
| hero-kitchen-dining.jpg | /gallery | d651ae_7946abde…jpeg | 4032×3024 | 2000×1500 | Kitchen finished | High — prospect gallery | Hero |
| hero-kitchen-island.jpg | /gallery | d651ae_eda08a40…jpeg | 4032×3024 | 2000×1500 | Kitchen finished | High | Work / kitchen |
| jobsite-exterior.jpg | /construction-services | d651ae_40b22cbe…jpeg | 4032×3024 | 2000×1500 | Jobsite | High — L&E truck/crew at house | About, services |
| kitchen-white-gold.jpg | /gallery | d651ae_1e9d3604…png | 3024×4032 | 1500×2000 | Kitchen finished | High | Services, kitchen hero |
| kitchen-shaker.jpg | /gallery | d651ae_d0d64fd7…jpg | 1599×1387 | same | Kitchen finished | High | Work |
| kitchen-island-close.jpg | /gallery | d651ae_adc80527…png | 3024×4032 | 1500×2000 | Kitchen finished | High | Work |
| kitchen-island-gold.jpg | /gallery | d651ae_aa9e46ef…png | 3024×4032 | 1500×2000 | Kitchen finished | High | Gallery |
| kitchen-island-wide.jpg | /gallery | d651ae_9496d837…png | 3024×4032 | 1500×2000 | Kitchen finished | High | Gallery |
| kitchen-protected.jpg | /gallery | d651ae_e2c36ae2…png | 3024×4032 | 1500×2000 | Kitchen in progress | High | Gallery |
| kitchen-in-progress.jpg | /gallery | d651ae_032ed8a8…jpeg | 4032×3024 | 2000×1500 | Kitchen in progress | High | Gallery |
| kitchen-framing.jpg | /gallery | d651ae_02829944…jpeg | 4032×3024 | 2000×1500 | Kitchen in progress | High | Gallery |
| bath-marble-rain.jpg | /gallery | d651ae_2b2b7b06…png | 3024×4032 | 1500×2000 | Bath finished | High | Services, bathroom |
| bath-vanity-gold.jpg | /gallery | d651ae_25660892…png | 3024×4032 | 1500×2000 | Bath finished | High | Bathroom hero, work |
| bath-hex-shower.jpg | /gallery | d651ae_ba6d5025…jpg | 1600×1200 | same | Bath finished | High | Work |
| bath-glass-shower.jpg | /gallery | d651ae_3a04c3bc…png | 3024×4032 | 1500×2000 | Bath finished | High | Work |
| bath-shower-toilet.jpg | /gallery | d651ae_d34f73ca…png | 3024×4032 | 1500×2000 | Bath finished | High | Gallery |
| bath-progress-gold.jpg | /gallery | d651ae_1520ad6e…jpeg | 4032×3024 | 2000×1500 | Bath in progress | High | Gallery |
| bath-progress-room.jpg | /gallery | d651ae_8d92b345…jpeg | 4032×3024 | 2000×1500 | Bath in progress | High | Gallery |
| bath-niche.jpg | /gallery | d651ae_e58f85a4…jpeg | 4032×3024 | 2000×1500 | Bath in progress | High | Gallery |
| + 5 marble-process frames | /gallery | d651ae_e163 / dde5 / c12f / e993 / 810d / bbb4 | 3024×4032 | 1500×2000 | Bath in progress | High | Gallery |

**Count of usable first-party assets acquired:** 26 web images + logo (well above the 5-asset gate). Several additional marble-process stills are similar angles of one shower.

## Inspected and not used as completed work

| File | Why |
| --- | --- |
| f33fe9_0de71a5b… patio string lights | Homepage; looks like Wix template stock |
| f33fe9_3e8cf34f… / cfe54cde… white kitchen | Duplicate stock kitchen |
| f33fe9_56af43fb… bath vanity | Stock bathroom |
| f33fe9_5c9e1387… landscape | Bathroom page; not construction |
| f33fe9_c85688be… bath + flowers | Template still |
| f33fe9_39e32f02… / e91fabaa… / eda0cfdb… kitchens | Small template stills on kitchen page |
| d651ae_48b064db… house icon | Generic “CONSTRUCTION” glyph in JSON-LD; not the L&E wordmark |
| Social icons 20–40px | Not useful photographically |
| d651ae_a72ea80b… 360×480 | Thumbnail only |

No manufacturer, third-party, or AI imagery is presented as L & E completed work.
