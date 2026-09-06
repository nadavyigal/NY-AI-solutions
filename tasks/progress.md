# NY AI Solutions: Progress

- **Status:** homepage trimmed and previous benefits page restored; not deployed
- **Current Phase:** first outreach cycle before the EXD-026 gate
- **Active Story:** homepage trim + `/benefits` rollback, on branch `benefits-restore-and-homepage-trim`. Awaiting founder review before any Sites deploy.
- **Last Completed Story:** restored the previous `/benefits` page (reverting the 2026-09-06 short rewrite) and applied ten founder-marked homepage changes, including a new "עם מה תצאו מהתהליך" outcomes section
- **Next Recommended Story:** founder review of the branch, then deploy on explicit instruction and start fit-call outreach.
- **Blockers:** the EXD-026 gate still has zero recorded fit calls.
- **Last Validation:** 2026-09-06 - local build succeeded, `npm test` 3/3 pass, `tsc` clean for `app/` (3 pre-existing Cloudflare-type errors in `db/`+`worker/`), eslint unchanged from main (3 pre-existing `no-html-link-for-pages` errors in `app/benefits/page.tsx`). Local server render verified for both routes.
- **Last Updated: 2026-09-06**

## Log

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
mentions the sprint. Not deployed: `git push sites` still requires explicit
instruction.

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
