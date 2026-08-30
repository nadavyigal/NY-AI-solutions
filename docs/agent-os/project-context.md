# NY AI Solutions — Project Context

Last updated: 2026-08-30.

## What this is

An AI consulting practice for Israeli professional-services businesses of 10 to
100 employees. The repository holds both the public site and the practice
itself: the offer, the delivery method, and the toolkit templates used in client
engagements.

Status: launched 2026-08-11. In commercial validation. Zero recorded fit calls
as of 2026-08-30.

## Layout

| Path | What |
|---|---|
| `app/` | The public site (vinext / React, Hebrew, RTL) |
| `docs/service/` | Value proposition, offer ladder, delivery workflow |
| `docs/toolkit/` | The six AI Audit Toolkit templates, the delivery engine of the sprint |
| `docs/clients/` | Client-safe engagement retros. **Never any client PII.** |
| `docs/gtm/` | Fit call log and go-to-market records |
| `docs/site/` | Landing page plan |
| `design/static-preview/` | A hand-built static rendition of the benefits page, kept out of `public/` so it does not serve a duplicate URL |

## Remotes

| Remote | Purpose |
|---|---|
| `origin` | `github.com/nadavyigal/NY-AI-solutions`. Source of truth. Pushing here does not deploy. |
| `sites` | OpenAI Sites host. **Pushing here publishes the live site.** |

## Decisions this must not contradict

- **EXD-026** (2026-08-11): niche and offer. Review 2026-09-11 or 10 fit calls.
- No published pricing before real client patterns exist.
- No ROI claim without a measured baseline on both sides of the change.

## Known state

- The 2026-08-16 site rewrite and the `/benefits` route are committed but **not
  deployed**. The live site still serves the 2026-08-11 version.
- `npm run build`, `npm test` and `tsc --noEmit` stall on this machine. The
  toolchain has not been verified green since 2026-08-16.

## Rules specific to this repo

1. **No client PII in this repository, ever.** Retros are anonymised; identifying
   detail stays offline.
2. **A deploy is a separate, deliberate act.** `git push origin` is safe;
   `git push sites` publishes.
3. Every proposed client workflow carries a privacy path before it is proposed.
4. Update `tasks/progress.md` after every commit.
