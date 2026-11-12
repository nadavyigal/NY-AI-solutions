# Pilot protocol

Written 2026-11-12. How to run the next real client as a test of the service,
so that it answers the [blind spots](blind-spots.md) instead of only delivering.

## Which client

**The retail client from the 2026-11-08 Discovery**, if she accepts the
proposal sent on 2026-11-11. She is the only arm's-length client so far, so
only she can show whether someone pays and whether the method holds.

**In parallel:** the planned step 6 check with the first engagement (a related
party, see the [retro](../clients/2026-08-30-michal-engagement-retro.md)). It
is the cheapest test of adoption after handover. It proves nothing about demand.

The client-specific record lives in the private client repo, in
`internal/pilot-log.md`. Only anonymised lessons come back here.

## Before any work starts: one value metric

Agree one metric with the client in writing, in session 1, and record the
baseline from the **last real instance**, not from memory of a typical week.
No baseline, no build.

| Field | Value |
|---|---|
| Metric, in the client's words | |
| Unit (minutes, steps, errors, days) | |
| How it is measured, and by whom | |
| Baseline value | |
| Date and instance it came from | |
| Adoption metric for step 6 (runs without help, per week) | |

Good metrics are boring and countable. For a retail order pilot, for example:
minutes to answer "what arrives when, and what do we owe whom" for the current
order; reports opened to answer it; errors found after the goods arrived.

No target is promised. The result is read on the same unit at the end, including
when it did not improve.

## Hours log (every step)

| Step | Founder prep | Founder in session | Founder build and fixes | Client minutes | Waiting days |
|---|---|---|---|---|---|

Pre-sale work counts too: research, deck, proposal versions and the number of
versions.

## Debrief after each step (five lines, same day)

```
Step and date:
What worked:
What was unclear (to the client / to me):
What I changed in the process (file and line, or "nothing"):
Exit test passed (see process-map.md)? yes / no, and why:
```

## Stop and pause rules

- No baseline by the end of session 1: stop before building and say so.
- Two missed sessions in a row: pause and ask the client if this is still a priority.
- Hours past twice the estimate: keep going if agreed, but record it. Do not hide it.
- A scope change: write it down as a new agreement, never absorb it silently.

## Discovery questions that fill the blind spots

For the next Discovery calls. Ask in conversation, not as a form. Each line
names the blind spot it fills.

1. "ספרו לי על הפעם האחרונה שזה קרה. כמה זמן זה לקח, ומה נעשה בכל שלב?" (value metric, baseline)
2. "אם בעוד חודשיים זה עובד, מה ישתנה אצלכם בשבוע?" (what result the client pays for)
3. "מי עוד מחליט על דבר כזה?" (buyer, decision maker)
4. "כמה זמן בשבוע אפשר לתת לזה באמת?" (client time)
5. "מה המערכת שלכם כבר נותנת היום, ומה חסר בה?" (vendor overlap)
6. "באיזה כלי AI אתם משתמשים, ובחשבון פרטי או עסקי?" (privacy, plan type)
7. "מי יעדכן את זה אחרי שאני יוצא?" (maintenance, after step 7)

## Logging a Discovery call (same day)

1. Add a row to [../gtm/fit-call-log.md](../gtm/fit-call-log.md). Segment, not
   name. Headcount and AI tier only if verified, otherwise "unknown".
2. Pick one outcome from the list in that file. A proposal we sent unasked is
   not "proposal requested".
3. Update the running count.
4. Put names, quotes and transcripts in the private client repo only.
