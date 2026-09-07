# NY AI Solutions: Progress

- **Status:** live; founder-edited landing page published at both `/` and `/benefits` as Sites version 10, with the next revision ready to publish.
- **Current Phase:** first outreach cycle before the EXD-026 gate, now 4 days away
- **Active Story:** PR #4, `nyai-connect-the-tools`: operating index, rescued untracked work, client-side nav. Awaiting review.
- **Last Completed Story:** moved the outcomes section lower in the page, reprioritized its first outcome, and softened the fit-call copy.
- **Next Recommended Story:** collect reader feedback on the revised page hierarchy and fit-call language.
- **Blockers:** The EXD-026 gate still has zero recorded fit calls.
- **Last Validation:** 2026-09-07 - production build passed and rendered HTML tests 3/3 passed for the next revision.
- **Rollback point (last deployed):** `6a4c885b13b84ef8dc7aae4bc7cbf51927cb183f` (Sites version 10)
- **Last Updated: 2026-09-07**

## Log

### 2026-09-07 (outcomes hierarchy and fit-call copy refined)
Moved “עם מה תצאו מהתהליך” from immediately below the hero to after the story
and approach sections, while preserving both links that jump directly to its
anchor. Promoted “פתרונות AI שמותאמים לעסק עצמו” from item 8 to item 1. Replaced
the sales-framed “בלי מצגת ובלי מסלול מכירה נוסף” close with a calmer promise of
clarity about the possibilities and the right next step. Changed the form prompt
to “ספרו לי איך אתם עובדים היום ולאן הייתם רוצים להגיע.” Production build and
all three rendered HTML tests passed.

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
