# NY AI Solutions: Progress

- **Status:** live; full main page at `/` and concise benefits page at `/benefits`, connected in both directions, published as Sites version 15.
- **Current Phase:** offer rebuilt as the AI Adoption Journey (EXD-038, 2026-11-06); EXD-026 niche and single-sprint clauses superseded
- **Active Story:** branch `claude/2026-11-07-pitch-deck-v6` (stacked on the superseded-notes PR): Hebrew pitch v6 and RTL deck v6 for the AI Adoption Journey. Docs and one deck file.
- **Last Completed Story:** PRs #5 and #6 merged 2026-11-06 (AI Adoption Journey offer, EXD-038; learning paths, EXD-039).
- **Next Recommended Story:** founder reviews and merges the superseded-notes PR, then the v6 PR; deploy is a separate yes (`git push sites main`); then run Discovery calls and log them in `docs/gtm/fit-call-log.md`.
- **Blockers:** The EXD-026 gate still has zero recorded fit calls.
- **Last Validation:** 2026-11-07 - deck v6 opens in macOS Quick Look, same package parts as v5, every XML part parses; 6 new slides rendered and checked by eye; no long dashes or exclamation marks in the new copy. No code changed, so no test run. Not deployed; `sites` remote untouched.
- **Rollback point (last deployed):** `5a2355eb6c151db5ac8e19d5dc5b584ca069b495` (Sites version 15)
- **Last Updated: 2026-11-07**

## Log

### 2026-11-07 (Hebrew pitch v6 and RTL deck v6)
The pitch and deck now sell the AI Adoption Journey. Pitch v6: one sentence, 30-second and
two-minute versions, the free 45-60 minute Discovery (work on one real task in the client's
own AI tool, measure today's minutes, recommend or "not now"), the three tracks, objections
including price and time saved (no number promised), closing line. Deck v6 keeps v5's look
and slides 3, 7, 8 and 9; slides 1, 2, 4, 5, 6 and 10 are new (no internal method names, the
Journey tracks, measured not promised, 45-60 minute Discovery). Built by rendering HTML in
Chrome and swapping the images into v5's package; alt text added to every slide. v5 files
kept as history. Founder review: slide 7 and the pitch bio repeated the false
"12 years running an insurance agency" claim from v5. Slide 7 rebuilt from the
founder's CV and the site's About wording; the claim also removed from
value-proposition and the landing-page plan; lesson added.

### 2026-11-07 (old Value Sprint call docs marked superseded)
START-HERE, the service pitch and call runbook, and the Hebrew prospect cheat sheet
still ran the 7-10 day AI Value Sprint after the offer moved to the Journey. Each now
opens with a superseded note that points at `docs/service/offer.md`; content kept for
history. `docs/README.md` points "Start here" at the offer and marks those three, the
Hebrew pitch v5 and the RTL deck v5 as superseded. The working Discovery method lives in
the private hub. The pitch v5 and deck v5 themselves are unchanged and still sell the
sprint. After review, three more docs got the same treatment: the toolkit README
names Journey step 4 and flags its "Sprint days" timings as old, value-proposition's
competitor row names the Journey, and the landing-page plan's sprint offer-block to-do
is marked do-not-act.

### 2026-11-06 (offer and toolkit aligned to the learning paths, EXD-039)
Stacked on PR #5. `docs/service/offer.md`: step 1 now records the plan type and data
settings, one sentence says steps 1 to 3 are done on real tasks in the client's own
account, and one sequencing line says a folder-based app is offered only after step 4
and a readiness check. Toolkit: intake records plan type, data or training setting, AI
use today and a files-and-folders signal; pre-audit inventory gains two columns;
discovery agrees the adoption metric; the audit report gains section 7 (where it runs,
what is never connected); the roadmap names the readiness check; implementation records
the settings and enforces the never-connect list; the README now lists four required
outputs. Method detail stays in the private hub. No vendor names, no prices, no client
names. The fit-call log still reads zero. The toolkit README still calls the toolkit the
engine of the "AI Value Sprint" and was left as is.

### 2026-11-06 (AI Adoption Journey, EXD-038)
Replaced the single AI Value Sprint offer with the three-track AI Adoption Journey
(steps 0 to 7). Discovery (45-60 min) is free; price is set only after it and is not
published. Rewrote `docs/service/offer.md`; added a journey section, nav link and
`app/journey.ts` to the homepage; renamed the first step from fit call to Discovery;
removed niche wording from CLAUDE.md, project-context, value-proposition,
delivery-workflow and docs/README. Kept "AI לעסקים בישראל" in the page metadata at
the founder's request. Added a rendered-HTML test for the journey, no price and no
niche. Not deployed. The live site still serves the previous version.

### 2026-09-08 (benefits and main pages separated)
Made `/benefits` the dedicated concise benefits page and restored the full NY AI
Solutions page at `/`. Added a clear bottom card on the benefits page that links
to the full main page; the main page retains its existing benefits navigation.
Production build and all three rendered HTML tests passed. Published as Sites
version 15 and verified both routes with HTTP 200 and distinct route content.

### 2026-09-07 (concise full-page rewrite deployed)
Replaced the previous long landing page with the founder's supplied copy and
five-section structure: compact hero, three-step process, business-first discovery
questions, five client outcomes and a shorter founder background. Removed the
marked opportunity-card sentence and the superseded story, proof example, product
showcase and sprint sections. Preserved the direct outcomes link and the existing
contact flow. Production build and all three rendered HTML tests passed; mobile
browser QA confirmed working anchor links, no horizontal overflow and no console
errors. Published as Sites version 14 and verified both public routes with HTTP 200.

### 2026-09-07 (founder background corrected)
Replaced the About paragraph with the founder's supplied wording. It now names
professional experience in risk-management and process-improvement consulting,
business development and global banking, then describes work at the intersection
of information systems, financial systems and business operations. Removed the
incorrect twelve-year insurance-agency-management claim.
Published as Sites version 13; live `/benefits` returned HTTP 200 and the rendered
copy was verified against the founder-supplied wording.

### 2026-09-07 (founder background and billing example clarified)
Expanded the About copy to connect twelve years of insurance-agency management
with improving work processes and results at the intersection of information
systems, financial systems and day-to-day business operations. Replaced the
abstract engagement-proof block with an anonymised, concrete example: the owner
tells the chat which sessions took place; the assistant structures the data and
prepares a per-client draft; the owner restores identifying details outside the
chat and issues the invoice in the existing system. The example states that no
invoicing system was replaced, nothing is sent automatically and identifying
client data remains outside the model.
Published as Sites version 12; both public routes returned HTTP 200 and the live
HTML was verified for the revised founder background, billing example and privacy
boundary.

### 2026-09-07 (outcomes hierarchy and fit-call copy refined)
Moved “עם מה תצאו מהתהליך” from immediately below the hero to after the story
and approach sections, while preserving both links that jump directly to its
anchor. Promoted “פתרונות AI שמותאמים לעסק עצמו” from item 8 to item 1. Replaced
the sales-framed “בלי מצגת ובלי מסלול מכירה נוסף” close with a calmer promise of
clarity about the possibilities and the right next step. Changed the form prompt
to “ספרו לי איך אתם עובדים היום ולאן הייתם רוצים להגיע.” Production build and
all three rendered HTML tests passed.
Published as Sites version 11; both public routes returned HTTP 200 and the live
HTML was verified for the preserved jump link, revised section order, promoted
first outcome, and updated fit-call language.

### 2026-09-07 (founder-marked trim deployed)
Applied the founder's nine mobile screenshots and supplied outcomes copy. Removed
"פשוט" from the hero, the large hero business card, the privacy section, the
five-item capabilities section, the six-step process and the AI Value Sprint
card. Preserved the compact three-step value panel. Added the ten requested
client outcomes in the supplied order and tightened the section to its heading
and cards only. Both routes render the same shareable page. Production build and
all three rendered HTML tests passed; mobile design QA confirmed zero marked
sections, exactly ten outcome cards and no horizontal overflow. Published as
Sites version 10 and verified live with HTTP 200 on `/` and `/benefits`.

### 2026-09-07 (screenshot-matched page restored)
Founder clarified with a mobile screenshot that the intended rollback target was
the full landing page headed "AI יכול לעשות הרבה יותר בעסק שלכם", not the separate
four-reason benefits page. Restored that exact historical homepage content,
including "אתם פשוט לא צריכים להפוך למומחי AI", the six-step process and AI Value
Sprint. `/benefits` now renders the same full page so the share link opens the
requested version. Production build and all three rendered HTML tests passed.
Published as Sites version 9; both URLs returned HTTP 200 and the first mobile
viewport was visually checked against the founder's screenshot.

### 2026-09-07 (benefits rollback deployed)
Founder rejected the shorter benefits-page rewrite and asked to return to the
previous version before making further edits. Restored the prior long-form
four-reason page, removed the later shared-outcomes block from `/benefits`, and
preserved the newer homepage and internal `next/link` navigation work. Production
build and all three rendered HTML tests passed. Published as Sites version 8;
the live route returned HTTP 200 and was checked for the restored headline,
four-reason section, RunSmart/Resumely proof, and contact close. The rejected
short-page copy and the added outcomes block are absent from the live route.

### 2026-09-07
Two commits on `nyai-connect-the-tools` (PR #4).

`docs/README.md` is a new operating index: offer ladder to the six-step toolkit
that delivers it, sales assets, both site routes, and the evidence record. It
points and restates nothing, so no claim gains a second owner. Every relative
link was verified to resolve. The root README led with the vinext starter text
and now leads with a pointer to the index plus the publishing rule.

`docs/research/` (the whole IDEATION-2026-09-06-AI-WORK-01 run) and `docs/sales/`
(three pitch assets, four decks) had never been committed and existed on this
disk only. Both are tracked now; the run's disposable `qa/` renders are ignored.
Removed three stale iCloud conflict copies dated 2026-08-30 whose tracked
counterparts are strictly newer.

Four internal links were plain `<a>` and forced a full document reload on every
hop between `/` and `/benefits`. Converted to `next/link`. That cleared the
repo's three long-standing eslint errors; no copy changed.

Deploy was re-tested and is still blocked on `sites` credentials.

### 2026-09-06 (later)
Founder reviewed the live site on mobile and rejected the shorter `/benefits`
rewrite from earlier the same day. Restored `app/benefits/page.tsx` verbatim from
`3a76591` (the four-reason "למה העסק צריך את זה" page) and restored its test
assertions; all of its CSS classes were still present in `globals.css`.

Applied ten founder-marked changes to the homepage, which is where every marked
section actually lived:
- dropped "פשוט" from the hero emphasis line;
- value-flow label "BUSINESS FIRST" -> "איך זה עובד — בגדול";
- removed the whole capabilities section ("תהליכי עבודה שמתקדמים בלי לאבד שליטה"
  plus its five numbered points);
- removed the whole six-step process section ("תהליך מסודר, החלטות ברורות",
  "מתעדפים...") as repetitive;
- removed the AI Value Sprint card and its 7–10 business-day commitment;
- rewrote the About section: dropped its top block ("לא רק להמליץ על פתרון" +
  role line), led with who Nadav is, added the twelve years running an insurance
  agency, and deleted "בשנתיים האחרונות";
- added a new "עם מה תצאו מהתהליך" outcomes section directly after the hero,
  ten cards, reusing the existing `.outcome-grid` styles (no new CSS).

Two wording departures from the founder's draft list, both to stay inside the
repo's no-ROI-without-baseline rule: "חיסכון משמעותי בזמן" -> "חיסכון בזמן", and
the outcomes intro frames the list as what the process aims at rather than a
promised result. Nothing else was reworded away from the founder's copy.

Header nav updated (the `#capabilities` and `#process` anchors no longer exist);
offer section id renamed `#sprint` -> `#offer`; lead-form source line no longer
mentions the sprint.

On founder instruction the outcomes list was then added to `/benefits` as well.
It moved into `app/outcomes.ts` so both routes share one source; on `/benefits` it
renders as a compact two-column checklist (`.takeaway-list`) placed after the hero,
because that page already opens with four cards on `.outcome-grid`.

Merged to `main` as `5d02495` (PR #3). Deployment was attempted on explicit founder
instruction and FAILED: `git push sites main` cannot authenticate to
`git.chatgpt-team.site` (no keychain entry, no interactive prompt available in the
session). The site is still serving `55c37d9`. Publishing needs the founder to run
`git push sites main` from an interactive terminal.

### 2026-09-06
Founder feedback from readers outside the AI field: benefits page was too long
and did not explain what the client receives. Rewrote `/benefits` around three
takeaways (working solution, usage guidance, 90-day plan), the 7–10 business-day
engagement, and a clearly illustrative client follow-up example. Removed the
repeated abstract benefits and product showcase; retained contact form inside
native disclosure. Existing homepage unchanged. Updated route metadata and
existing rendered assertions. `git diff --check` passed. Local development and
build processes stalled without output again; remote build fallback required.
Published as Sites version 7 on 2026-09-06. Remote build and deployment succeeded.
Live `/benefits` and homepage return HTTP 200; new deliverables, illustrative
example, contact links and stylesheet assets verified. Local rendering tests
could not run because the local build stalled.

### 2026-09-03
Explicit deployment approval received. The reviewed page changes were committed,
integrated onto the current GitHub `main`, saved as Sites version 6, and deployed
publicly. The live `/benefits` route returns HTTP 200 and the homepage links to it.
Rollback point before deployment: `a9e75c018c29ff869d24fad1998f5e16179898b7`.
Local build and targeted TypeScript commands again stalled without output; the
authoritative Sites remote build completed successfully.

### 2026-08-30
NYAI-01 implemented in the working tree. The homepage now states the privacy
architecture and its limits, names the free 30–45 minute fit call and the 7–10
day AI Value Sprint with five deliverables, cuts capabilities to five
workflow-shaped items, adds anonymised engagement evidence with the missing
baseline stated, and links the existing `/benefits` route as "למה זה כדאי".
No pricing, client identity, ROI number or compliance claim was added. Deploy
was not attempted; cached `sites/main` before deployment is
`a9e75c018c29ff869d24fad1998f5e16179898b7`.

Repo moved to GitHub (`nadavyigal/NY-AI-solutions`). The 2026-08-16 site work was
committed after two weeks uncommitted. Practice definition written: value
proposition, offer ladder, delivery workflow, the AI Audit Toolkit as the sprint's
delivery engine with all six templates, the Michal engagement retro, the landing
page plan, and the fit call log the EXD-026 gate requires.

### 2026-08-11
Site launched. EXD-026 recorded.
