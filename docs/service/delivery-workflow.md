# NY AI Solutions — Delivery Workflow

Last updated: 2026-08-30.

The AI Audit Toolkit is not a separate product. It is the delivery engine of the
AI Value Sprint. Its six steps are the sprint's working days, and its templates
are in [../toolkit/](../toolkit/).

## The six steps

```
  1 Intake          async form, before any meeting
        │           what they pay for, who does what, what hurts
        ▼
  2 Pre-audit       desk work, no client time
        │           public assets, subscription reality, first hypotheses
        ▼
  3 Discovery       60-90 min with the people who do the work
        │           watch the workflow, do not ask about it in the abstract
        ▼
  4 Audit report    findings, opportunities scored by value/effort/risk,
        │           and an explicit "leave this alone" list
        ▼
  5 Roadmap         90 days, what to measure, what is out of scope
        │
        ▼
  6 Implementation  the Quick Win built and running, then embedding
```

## Where each step lands in the ladder

| Ladder rung | Steps |
|---|---|
| Fit call | A compressed step 3, plus whatever step 1 they volunteered |
| **AI Value Sprint** | Steps 1 through 5, plus **one** Quick Win from step 6 |
| Implementation | The rest of step 6, repeatedly |
| Ongoing partner | Step 6 plus a recurring cut of steps 2 and 4 |

## The rules that keep it honest

**Privacy architecture comes before automation.** Step 4 does not propose a
workflow until it can state where identifying data goes. In the Michal
engagement this produced the alias rule: aliases in, the model never sees a
name, identities re-attached by the client offline at the send step. That rule
was written before a single Gem was built, and every artifact restates it.

**The "leave it alone" list is mandatory.** An audit that finds only
opportunities is a sales document. A process that works, run by people who like
running it, is a finding. Naming one is what makes the other findings credible.

**Baselines before claims.** Step 3 records the current cost of the workflow in
hours, handoffs and manual steps. Step 6 re-measures the same quantities. No
number is claimed that was not measured on both sides.

**Existing subscriptions first.** Step 2 inventories what the business already
pays for before any new tool is considered. New tools are allowed; they are just
not the opening move.

**One workflow at a time.** The Quick Win is one workflow. Scope creep after a
successful Quick Win is the named risk in EXD-026 and it is managed by keeping
sprint, implementation and retainer as separate scopes with separate agreements.

## What the Michal engagement changed about this method

The engagement ran the whole loop against a real, non-technical
professional-services client. Four things came back and are now rules, not
preferences. The detail is in
[../clients/2026-08-30-michal-engagement-retro.md](../clients/2026-08-30-michal-engagement-retro.md).

1. The client's existing tier was enough. Verify the tier and its limits in the
   account before designing anything that assumes a higher one.
2. One shared knowledge asset, attached to every workflow, beat four separately
   tuned ones. A voice or policy change becomes one edit rather than four.
3. The privacy rule has to be restated inside every artifact, not stored once in
   a policy document. Artifacts get copied; policies do not travel with them.
4. The last mile is the whole engagement. Everything was paste-ready weeks
   before anything was live, because standing it up required the client's own
   account and a scheduled hour. Book that hour at the start.
