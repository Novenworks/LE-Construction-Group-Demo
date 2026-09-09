# L & E Construction Group — project router

This repository is a **speculative Novenworks redesign**. The business is not a Novenworks client.

The App Builder sandbox contract lives in root `AGENTS.md` (ports, preview, stack). This file routes project work.

## Canonical docs

| Doc | What it is |
| --- | --- |
| [README.md](./README.md) | Disclosure, setup, stack |
| [docs/RESEARCH.md](./docs/RESEARCH.md) | Prospect facts, CSLB, agency check, conflict log |
| [docs/ASSET-INVENTORY.md](./docs/ASSET-INVENTORY.md) | Every acquired first-party file |
| [docs/ASSET-PLAN.md](./docs/ASSET-PLAN.md) | Asset-to-section map |
| [docs/QA.md](./docs/QA.md) | Responsive / capture QA |
| [docs/OUTREACH.md](./docs/OUTREACH.md) | Operator brief (also rendered at `/outreach`) |
| [docs/CAPTURE.md](./docs/CAPTURE.md) | Before/after deliverables |
| [CHANGELOG.md](./CHANGELOG.md) | Decisions and rule changes |

## Hard gates already applied

1. Real-asset acquisition (≥5 first-party photos + logo) before visual implementation.
2. Asset-to-section plan before homepage finish.
3. Fact integrity: first-party > CSLB > omit. No fabricated ratings, ROI, crew size, insurance, or years in business.
4. `/outreach` is unlinked, `noindex`, and not in prospect nav/footer.
5. CTA form is demo-only and says so.

## Stack note

The originating prompt asked for Next.js App Router. This sandbox is TanStack Start + Vite on port 8080. File routes under `src/routes/` are the App Router equivalent. Do not migrate to Vite-for-its-own-sake or to Next inside this sandbox.
