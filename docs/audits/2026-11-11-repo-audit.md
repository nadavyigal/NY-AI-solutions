# Repo audit: NY AI Solutions site, 2026-11-11

Branch `claude/2026-11-11-site-audit`, from `main` at 5ab5386. This repo is public.
Baseline: lint 0 errors / 2 warnings; `npm test` 4/4; `tsc --noEmit` 3 errors. No credentials in tracked files.

## Fixed in this branch

| What | Why it was safe |
|------|-----------------|
| Untracked `tsconfig.tsbuildinfo` and ignored `*.tsbuildinfo` | TypeScript build cache; regenerated on every build |
| Deleted three `*.pptx.inspect.ndjson` files in `docs/sales/` | Inspection dumps derived from the decks; nothing reads them |

## For your review (not changed)

1. **Done 2026-11-14 (founder: keep /benefits short):** docs now say the two lists differ on purpose; unused `app/outcomes.ts` deleted. Was: **The "shared" outcomes list drifted.** `docs/README.md` says both routes render one list from `app/outcomes.ts` "so they cannot drift". In fact `app/page.tsx` and `app/BenefitsLandingPage.tsx` each define their own `outcomes` array, and all three lists differ in wording and length. Recommend: pick the wording, then import `app/outcomes.ts` in both pages.
2. **`tsc --noEmit` fails** on Cloudflare Worker types (`cloudflare:workers`, `Fetcher`, `D1Database`) in `db/index.ts` and `worker/index.ts`. `npm test` does not type-check, so this is invisible. Fixing needs `@cloudflare/workers-types` or a generated types file. Recommend: add the types package (new dev dependency, your yes).
3. **Template leftovers:** `db/`, `drizzle/`, `drizzle.config.ts`, `examples/d1/` and `app/chatgpt-auth.ts` are not used by the site. The lead form opens WhatsApp and stores nothing. Recommend: remove them with `drizzle-orm` / `drizzle-kit` in one dependency PR.
4. **Done 2026-11-14:** client aliased to "Client A"; retro moved to nyai-hub. Was: **Client identity in a public repo.** The repo rule says no client PII. One engagement retro and about 25 references across docs, research PDFs and a deck name the client by first name. Recommend: confirm the client agreed to be named publicly, or rename to an alias and move the retro to the private hub.
5. **Done 2026-11-14:** all five decks moved to nyai-hub (each named the client). Was: **Sales decks are public** (`docs/sales/*.pptx`, five versions; v1, v2 and v4 superseded by v5). Recommend: keep only what you want competitors to read; move the rest to the private hub.
6. **The fit-call log still shows 0 calls**, and its gate date (2026-09-11) passed two months ago. It is the stated north star. Recommend: log the real Discovery sessions, or retire the gate.
