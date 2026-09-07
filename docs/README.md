# NY AI Solutions: operating index

Every asset in this repository, what it is for, and when to open it. This page
is a map. It restates nothing: each row points at the file that owns the claim.

Last updated: 2026-09-07.

## The one sentence

> **Your team already pays for AI. I make it actually do the work, inside the
> tools you already have, without your client data leaving your control.**

Owner of this sentence, plus who the offer is for and what backs each claim:
[service/value-proposition.md](service/value-proposition.md).

## The offer, and the engine that delivers it

The ladder has four rungs. Only rung 1 is actively sold.

| Rung | What it is | Owner file |
|---|---|---|
| 0 | Fit call, 30-45 min, free | [service/offer.md](service/offer.md) |
| 1 | **AI Value Sprint**, 7-10 business days | [service/offer.md](service/offer.md) |
| 2 | Implementation and embedding, 4-8 weeks | [service/offer.md](service/offer.md) |
| 3 | Ongoing AI partner, retainer | [service/offer.md](service/offer.md) |

The sprint is not a document. It runs on the six-step AI Audit Toolkit, which is
the delivery engine, not a separate product. Method and the four rules that keep
it honest: [service/delivery-workflow.md](service/delivery-workflow.md).

| Step | Template | When | Client time |
|---|---|---|---|
| 1 Intake | [toolkit/01-intake.md](toolkit/01-intake.md) | before the fit call | 10 min, async |
| 2 Pre-audit | [toolkit/02-pre-audit.md](toolkit/02-pre-audit.md) | before discovery | none |
| 3 Discovery | [toolkit/03-discovery.md](toolkit/03-discovery.md) | sprint days 1-2 | 60-90 min per workflow |
| 4 Audit report | [toolkit/04-audit-report.md](toolkit/04-audit-report.md) | sprint days 3-5 | none |
| 5 Roadmap | [toolkit/05-roadmap.md](toolkit/05-roadmap.md) | sprint days 5-6 | 45 min walkthrough |
| 6 Implementation | [toolkit/06-implementation.md](toolkit/06-implementation.md) | days 6-10, then ongoing | varies |

Toolkit index: [toolkit/README.md](toolkit/README.md).

**Three things every engagement must produce or the sprint is not done:** a
measured baseline (step 3), a privacy path for every proposed workflow (step 4),
and an explicit "leave this alone" finding (step 4).

## Selling it

| Asset | Use it when | File |
|---|---|---|
| Service pitch and call runbook | preparing to run a fit call | [sales/service-pitch-and-call-runbook.md](sales/service-pitch-and-call-runbook.md) |
| Hebrew service pitch, v5 | sending a written pitch | [sales/NY-AI-Solutions-Service-Pitch-Hebrew-v5.md](sales/NY-AI-Solutions-Service-Pitch-Hebrew-v5.md) |
| Prospect call cheat sheet, Hebrew | during the call itself | [sales/prospect-call-cheat-sheet-he.md](sales/prospect-call-cheat-sheet-he.md) |
| Hebrew RTL deck, v5 | when a prospect asks for something to forward | `sales/NY-AI-Solutions-Service-Presentation-Hebrew-RTL-v5.pptx` |

## The site

Two routes, one shared outcomes list so they cannot drift.

| Route | Source | Purpose |
|---|---|---|
| `/` | [`../app/page.tsx`](../app/page.tsx) | the full version |
| `/benefits` | [`../app/benefits/page.tsx`](../app/benefits/page.tsx) | "למה זה כדאי", the short why-it-matters version |
| shared | [`../app/outcomes.ts`](../app/outcomes.ts) | the ten outcomes both routes render |

Plan of record for the page: [site/landing-page-plan.md](site/landing-page-plan.md).
Work packet that produced the current version:
[work-packets/NYAI-01-page-then-calls.md](work-packets/NYAI-01-page-then-calls.md).

**Deploy is a second remote.** `origin` is GitHub; `sites` is the host that
serves the live page. Merging to `main` does not publish. Publishing is
`git push sites main`, run from an interactive terminal because the host prompts
for credentials. Current deploy state and the rollback SHA are in
[`../tasks/progress.md`](../tasks/progress.md).

## Evidence, and the gate that decides whether this survives

Nothing here is a claim about demand. These are the records that will answer it.

| Record | What it establishes | File |
|---|---|---|
| Fit call log | the countable input EXD-026's gate reads | [gtm/fit-call-log.md](gtm/fit-call-log.md) |
| Michal engagement retro | one full run of the method; setup evidence, **no baseline**, related party | [clients/2026-08-30-michal-engagement-retro.md](clients/2026-08-30-michal-engagement-retro.md) |
| IDEATION run, 2026-09-06 | desk research on the AI-work opportunity; verdict REFRAME, conditional go for service validation only | [research/IDEATION-2026-09-06-AI-WORK-01/README.md](research/IDEATION-2026-09-06-AI-WORK-01/README.md) |

The gate: **2026-09-11, or ten completed fit calls, whichever comes first**
(EXD-026). The research run does not reset it and does not override it. Its own
recommendation is to run Advisor against this offer, not to start a second
venture: [research/IDEATION-2026-09-06-AI-WORK-01/8_decision_handoff.md](research/IDEATION-2026-09-06-AI-WORK-01/8_decision_handoff.md).

## The sequencing rule

From [service/offer.md](service/offer.md): **do not build another asset before
the gate.** The page is live, the method is written, the toolkit exists and the
research is done. The missing input is conversations, and no amount of further
building substitutes for them.

## Working here

Project context and conventions: [agent-os/project-context.md](agent-os/project-context.md).
Current state, blockers and the last validation: [`../tasks/progress.md`](../tasks/progress.md).
Open work: [`../tasks/todo.md`](../tasks/todo.md).
Recurring bugs already paid for: [`../tasks/lessons.md`](../tasks/lessons.md).
