# Work Packet NYAI-01: Close the four page gaps, deploy, then stop building

- Status: Ready
- Mode: Builder
- Source: `docs/site/landing-page-plan.md`; `docs/service/value-proposition.md`; EXD-026
- Workflow pattern: normal
- Input trust: trusted
- Outcome loop: AI Audit Toolkit client discovery loop
- Loop: NY AI Solutions commercial validation
- Signal: EXD-026's gate is 2026-09-11 or ten fit calls. The recorded count is zero. The live page never states the privacy claim, which is the blocking objection for the target segment, and names no purchasable first step.
- Memory update: `tasks/progress.md`; `docs/gtm/fit-call-log.md` once calls start
- Success signal: The live site states the data-control claim and names the AI Value Sprint, and the founder starts fit-call outreach the same day the page ships.
- Model route: Sonnet 5. This is Hebrew copy and layout inside an existing design system, not new architecture.
- Risk tier: high. The deployed artifact is the public face of the practice, and the copy makes claims about client data handling.
- Max cost: **three hours of work, five stories, one session.** This packet exists to end a build cycle, not to start one. If a sixth idea appears, write it in `tasks/todo.md` and do not build it.
- Rollback: `git revert` the commit on `main`, then push the reverted `main` to the `sites` remote. The prior version is whatever `sites/main` held before this packet, so record that SHA in the final output before deploying.

## Owner Role
NY AI Solutions Builder

## Project
NY AI Solutions (`/Users/nadavyigal/Documents/Projects /NY AI Consulting`), branch off `main`.

## Goal
Make the live page state the one claim only this practice can make, name a purchasable first step, and then get out of the way of outreach.

## Context
The page is well written and on message. It is missing four things, and the biggest is that a buyer in insurance, law or finance reads it without ever learning where their client data goes. That is the objection that stalls AI adoption in those firms, and the Michal engagement answered it with an architecture rather than reassurance.

The trap this practice keeps falling into is building assets instead of having conversations. Two weeks of finished page work sat uncommitted and undeployed while the fit-call count stayed at zero. This packet is deliberately boxed so that pattern does not repeat.

## Read First
- `CLAUDE.md`
- `docs/agent-os/project-context.md`
- `docs/site/landing-page-plan.md` (the four gaps, already ordered)
- `docs/service/value-proposition.md` (the three claims and what backs each)
- `docs/service/offer.md` (the ladder and the sprint's five deliverables)
- `docs/clients/2026-08-30-michal-engagement-retro.md` (the proof, and its honest limits)
- `tasks/progress.md`, `tasks/lessons.md`

## Task

### Story 1: the privacy section (highest value)
Add a section above the capabilities list. Suggested heading: **המידע של הלקוחות שלכם לא נכנס ל־AI.**

Content: the rule in plain Hebrew (aliases in, the model never sees a name, identities re-attached by the client offline at the send step); that the architecture is designed before any automation; that the most sensitive workflow gets an assistant connected to nothing; and where the judgement comes from, twelve years running an insurance agency plus banking risk work.

Claim only what `docs/service/value-proposition.md` says is backed. This is an architecture practice, **not** a compliance certification and not a legal opinion. Do not imply otherwise.

### Story 2: name the first purchase
Add an offer block: the AI Value Sprint, 7 to 10 business days, the five concrete deliverables from `docs/service/offer.md`, ending on "one workflow working, not a slide deck". **No price.** Ahead of it, name the free fit call: 30 to 45 minutes, and its output is a named workflow worth mapping or an honest no. Repeat the existing WhatsApp form after this block; do not add a second conversion path.

### Story 3: cut the capabilities list
Ten items ending in custom iOS development reads as "I do all AI things" and undoes the niche the rest of the page builds. Cut to four or five, all workflow-shaped, in the language of a professional-services firm. Move iOS product development to a single proof line under the shipped apps.

### Story 4: proof that is evidence, not capability
Add the anonymised engagement in three sentences: a solo professional-services practice, an operating system built entirely on the entry-tier subscription already paid for, a privacy architecture where no client-identifying data reaches the model. **State that no ROI number is claimed because no baseline was measured.** Naming the limit is what makes the claim believable. No client name, no identifying detail.

### Story 5: resolve `/benefits`
It exists in the code and has never been deployed. Either link it from the homepage as the "why bother" page, or delete the route and `design/static-preview/`. Pick one and say which.

### Then: stop, and ask before deploying
Deployment is `git push sites`. It is outward-facing and needs an explicit yes in the current message. Record the current `sites/main` SHA first so the rollback in this packet is real. Do not push to `sites` on your own judgement.

## Constraints
- Secrets: none. This packet needs no credential.
- **No ROI number, no client name, no compliance or certification claim, no implied client list.**
- No published pricing (EXD-026).
- Five stories. If a sixth idea appears, write it in `tasks/todo.md` and stop.
- Do not restructure the design system or introduce a dependency.
- Do not touch `docs/toolkit/` in this packet. The templates are done and are used on calls, not on the page.
- Do not deploy without explicit approval in the current message.
- Do not invent validation results.

## Validation
```bash
npx tsc --noEmit          # expect exactly 3 pre-existing errors, all in db/index.ts and worker/index.ts
npm test                  # builds, then runs tests/rendered-html.test.mjs
npm run lint
```
Known: `npm test`, `npm run build` and `npm run lint` have stalled on this machine at zero CPU (cold-disk I/O), and `tsc` took several minutes. Bound each with `perl -e 'alarm 300; exec @ARGV' <cmd>`; macOS has no `timeout`. **If a check does not complete, report that it did not complete. Do not report a pass.**

The three known `tsc` errors are `Cannot find module 'cloudflare:workers'`, `Cannot find name 'Fetcher'`, `Cannot find name 'D1Database'`. They are missing Workers type config, they predate this work, and they are not in `app/`. Any new error in `app/` is a real failure.

Then read the rendered page and confirm: the privacy section appears above the capabilities list, the sprint is named with no price, the capabilities list has five items or fewer, and the engagement proof states that no ROI is claimed.

## Completion Gate
Update or report:
- `tasks/progress.md`
- `tasks/todo.md` with anything deliberately not built
- `tasks/lessons.md` only if a reusable lesson was learned

## Final Output
- What changed
- Files changed
- Commands run, and which of them did not complete
- Validation evidence
- The `sites/main` SHA before any deploy, so the rollback is real
- Remaining risks
- Next recommended action, which should be outreach, not another page change
