# Self-audit: running the sprint on my own business

Date: 2026-09-07. Client: NY AI Solutions / Nadav Yigal, solo operator.
Purpose: test whether the toolkit produces something useful, on a business
where the ground truth is known. Steps 1 and 2 are done here. Step 3 needs you.

**Read this as a client would.** If it tells you something you did not already
know, and the "leave this alone" line stings a little, the process works.

---

## Step 1: Intake

### On the business

1. **What the business does:** builds and ships AI products (two live iOS apps),
   and sells AI workflow consulting to Israeli professional-services firms.
2. **Team size:** 1. The repeated work is all done by the same person who does
   the strategy, the selling and the building.

### What already exists

3. **Paid AI subscriptions:** Claude, OpenAI/Codex, Cursor, Grok. **Cost per
   month: UNKNOWN.** Not a gap in my reading. The recurring-cost ledger does not
   exist, and three monthly finance reviews produced zero financial facts. One
   partial figure exists: roughly $4.4k per 30 days of Claude usage measured
   after a pricing correction.
4. **Who uses them:** one person, daily, at high volume.
5. **Core systems:** GitHub, Supabase, Vercel, PostHog, Apple Developer /
   App Store Connect, Obsidian.

### Where it hurts

6. **The weekly repeated work:** morning brief, end-of-day close, weekly review,
   weekly plan, vault filing, releases, App Store listing updates.
7. **What happens when it goes wrong:** work reaches "ready" and stops. It does
   not get lost loudly; it sits.
8. **The one thing to take off the team tomorrow:** the last mile. See below.

### Data and regulation

9. **Client-identifying data in the process:** none in the consulting workflows
   audited here. Product analytics contain user data and stay in PostHog and
   Supabase.
10. **Regulatory limits:** none binding on this workflow.

### What I record

| Field | Value |
|---|---|
| Segment | consulting / software, solo |
| Headcount | 1 |
| Paid AI subscriptions, verified tier | **NOT VERIFIED.** No cost ledger exists |
| Named candidate workflow | ship-the-finished-thing (the last mile) |
| Data sensitivity | low for this workflow |
| Qualified? | yes |

---

## Step 2: Pre-audit

### The number that opens the conversation

**You cannot state what you pay per month for AI.** That is the first finding,
and it is the same finding your own Q4 objective already names. A client would
be asked this in question 3 and would be expected to answer it. You cannot.

### Three hypotheses to test in discovery

> **H1.** We believe the operator reaches "ready to ship" on most work items and
> then does not ship them, and that the expensive part is the last manual step
> that needs a credential, an account, or a scheduled hour. We will know in
> discovery by counting items sitting in a finished-but-unpublished state.

Evidence already visible, not yet a measurement:
- The corrected App Store listing has been ready since **May** and is still not
  filed. The live listing still carries a claim that cannot be supported.
- Seven commits to the NY AI site are finished, merged, and unpublished. The
  live site is 6 days old. The blocker is one credential.
- The Founder Operations bot has been unable to work since 2026-09-05. The
  blocker is one line of text that has been sitting written down since 2026-09-06.

> **H2.** We believe the operator spends significant weekly time re-establishing
> what the current state is (which version is live, what shipped, what is
> stranded), and that the expensive part is that the answer lives in many places
> and each one can be stale. We will know in discovery by timing one morning
> from cold start to "I know what to do today".

> **H3.** We believe outbound selling is not on the calendar at all, and that
> the expensive part is that building always has a next obvious action while
> selling does not. We will know in discovery by counting hours booked for
> outreach in the last 30 days.

Evidence: the fit-call log has zero entries and the decision gate is 2026-09-11.

### Risk pre-read

The real risk here is not data. It is **automating the wrong end**. Adding more
generation capacity to a system whose bottleneck is publishing makes the queue
of unshipped finished work longer, not shorter.

---

## The finding, stated the way a client would get it

**Your bottleneck is not producing work. It is releasing it.**

Everything upstream is strong: research, drafting, building, review. The system
reliably produces finished things. Then a step that requires a credential, an
account login, or a booked hour stops them, and there is no mechanism that
notices something has been finished-and-unshipped for four months.

Your own delivery-workflow.md already wrote this rule after the first client
engagement: *"The last mile is the whole engagement. Everything was paste-ready
weeks before anything was live."* You wrote it about a client. It applies here.

### The Quick Win a sprint would build

A single weekly check that lists everything finished and unpublished, in one
place, with the one action each needs. Not a dashboard of status. A list of
things that are done and stuck.

### Leave this alone

**The morning ritual and the vault.** They work, they are used, and the daily
note and log genuinely carry state forward. Do not automate more of them, do not
add another routine, and do not add another bot to them. The 7-day-test rule you
already apply has correctly killed two additions. Keep applying it.

---

## Step 3: what you have to do

Steps 1 and 2 above are desk work and are done. Step 3 cannot be desk work.

**Measure one instance by hand.** Pick the App Store listing update. Time
yourself doing it once, start to finish, and record:

| Measure | Today |
|---|---|
| Times per month | |
| Minutes per instance | |
| Manual re-entry steps | |
| Wait time between "ready" and "published" | |
| What actually blocks it | |

Without this row there is no baseline, and without a baseline the sprint cannot
claim a result. This is the exact step the first client engagement skipped, and
it is why that engagement has no claimable outcome.

It is also the by-hand baseline the Grok Bot ledger has been missing since
2026-09-05.
