# Step 2 - Problem and opportunity evaluation

Run: IDEATION-2026-09-06-AI-WORK-01. Version: 1.0. Method: IDEATION v0.2. Owner: Nadav / Codex. Date: 2026-09-06. Status: final desk-research artifact. Boundary: professional AI workflow improvement; no deployment or customer testing. Inputs: source handoff, source register and prior steps in this run.

## Scoring contract
Planning judgments, not measured customer data. Impact and likelihood: 1 low, 5 high. Complexity: 1 easiest, 5 hardest. Evidence: 1 weak proxy to 5 convergent direct support; this planning score does not replace E-grades. Confidence low throughout; P02/P03 medium for occurrence in the local pilot only.
Baseline = .40 Impact + .25 Likelihood + .20 (6-Complexity) + .15 Evidence. Impact/evidence-heavy = .40/.15/.10/.35. Feasibility/risk-heavy = .25/.15/.45/.15. Scores are not probabilities.
Load-bearing rule: no problem can support a software build without direct target-buyer pain and a feasible data path, regardless of rank. Neither is established. Research tier A means investigate next, not invest.

## Raw inputs and rationale
P01: Impact 4, Likelihood 3, Complexity 3, Evidence 1. Selection could matter widely, but no target interviews.
P02: Impact 4, Likelihood 4, Complexity 2, Evidence 2. Local implementation friction is tangible; prevalence unproven.
P03: Impact 5, Likelihood 4, Complexity 3, Evidence 3. Both local baseline gap and external measurement concerns support investigation; revenue consequence unmeasured.
P04: Impact 4, Likelihood 3, Complexity 4, Evidence 1. Failure handling could be costly; target incident evidence missing.
P05: Impact 3, Likelihood 2, Complexity 5, Evidence 1. Timing and repeated demand are particularly speculative.

| ID | Raw Impact/Likelihood/Complexity/Evidence | Baseline / impact / feasibility | Ranks | Stability |
|---|---|---|---|---|
| P01 | 4/3/3/1 | 3.10 / 2.70 / 2.95 | 3/3/3 | rank-stable |
| P02 | 4/4/2/2 | 3.70 / 3.30 / 3.70 | 2/2/1 | rank-unstable (tier change) |
| P03 | 5/4/3/3 | 4.05 / 3.95 / 3.65 | 1/1/2 | rank-stable |
| P04 | 4/3/4/1 | 2.90 / 2.60 / 2.50 | 4/4/4 | rank-stable |
| P05 | 3/2/5/1 | 2.05 / 1.95 / 1.65 | 5/5/5 | rank-stable |

Baseline tiers: A = P03/P02; B = P01/P04; C = P05. Within B, advance P01 as a selection enabler and defer P04 as a primary product because target incident evidence is absent. Tier boundaries are 3.4 for A and 2.5 for B. P02 falls to B under impact/evidence-heavy weights and is rank-unstable by the tier rule. P03 stays A; its lead over P02 reverses under feasibility-heavy weights. Both remain research priorities; no exact ordering is robust. Priority is proof plus implementation, not a broad scanner.

## Red Team and gate
Challenge: scoring rewards evidence found in the founder's existing practice and may ignore a better unfamiliar market. Response: preserve a contrarian assurance concept and all vertical alternatives; do not treat service familiarity as demand. CONDITIONAL PASS for causal investigation. Load-bearing demand weakness blocks an unconditional investment decision. Inputs P01-P05, EV03-EV06; outputs OS-P01-OS-P05. Deferred: P04/P05 as primary markets until incident/repeat-demand evidence.


## Source and evidence register
All sources accessed 2026-09-06. Grades apply only to the stated claim, never automatically to this business. E0 = hypothesis; E1 = anecdote/proxy; E2 = working support; E3 = direct primary evidence; E4 = repeated convergent primary evidence. No E4 demand evidence exists.

- SRC01 / EV01: User's Innovation handoff, preserved as source-handoff.txt. E3 for the requested research boundary; E0 for its unverified market and demand assertions. Direction: mixed. Earlier Storm/Red Team full transcripts were not reviewed; their conclusions are represented by this handoff.
- SRC02 / EV02: Local docs/service/offer.md and delivery-workflow.md, dated 2026-08-30. E3 for documented offer design, unknown for willingness to pay. Direction: supports an existing service vehicle. Existing AI Value Sprint: 7-10 business days, one Quick Win implemented.
- SRC03 / EV03: Local docs/clients/2026-08-30-michal-engagement-retro.md. E1 for generalizable delivery learning; E3 for the record's stated limitations. A related-party pilot reached setup, but captured no baseline and does not establish arm's-length demand. Direction: mixed. We do not repeat its claim that it proves the method works as a validated outcome.
- SRC04 / EV04: Local docs/gtm/fit-call-log.md, read today: zero recorded fit calls, qualified workflows, proposal requests and paid engagements. E3 for the record, not proof that no unlogged conversations occurred. Direction: contradicts any claim of commercial validation. Existing review: 2026-09-11 or ten calls.
- SRC05 / EV05: NBER, Generative AI at Work, https://www.nber.org/papers/w31161 . Primary research surfaced in search; page fetch returned 403. E2 in this run because only the abstract/search evidence was accessible. Direction: supports possible task-specific gains, not universal uplift or consultant demand. Avoid transferring study effect sizes to this offer.
- SRC06 / EV06: METR, 2026-02-24 study-design update, https://metr.org/blog/2026-02-24-uplift-update/ . E3 for its reported measurement problems; external validity to professional services remains uncertain. Direction: mixed. Newer study selection and timing problems prevent a clean current uplift estimate; the early-2025 slowdown cannot establish current model performance.
- SRC07 / EV07: Anthropic, Building effective agents, https://www.anthropic.com/engineering/building-effective-agents . E3 for vendor architecture guidance, E1 for commercial inference. Direction: supports using simple designs and increasing complexity only when justified. Not independent validation of this product.
- SRC08 / EV08: Zapier support and partner documentation, https://help.zapier.com/hc/en-us/articles/8496213764877-Get-help-and-support-with-Zapier and https://docs.zapier.com/integrations/quickstart/app-developer-services . E3 for availability of implementation/maintenance partners. Direction: contradicts claims that workflow implementation is empty competitive space. No verified competitor prices or small-firm outcomes.
- SRC09 / EV09: Celonis Enterprise AI, https://www.celonis.com/solutions/ai . E3 for advertised process intelligence/digital-twin positioning; E0 for efficacy in our target segment. Direction: contradicts novelty of a broad work digital twin. Does not establish a direct small-firm substitute.
- SRC10 / EV10: Microsoft Work Trend Index, https://www.microsoft.com/en-us/worklab/work-trend-index . E3 for vendor research agenda; E1 for this opportunity. Direction: supports organizational adaptation as a live topic. Vendor incentives and survey selection apply; not willingness-to-pay evidence.
- SRC11 / EV11: Local docs/service/value-proposition.md. E3 for recorded positioning and founder-background claims, not independent verification. Direction: supports provisional fit with risk-aware professional services; reachable buyers and delivery capacity remain unverified.

## Shared assumptions, risks, and contradictions
ASM01: reachable buyers have a costly recurring workflow (E0). ASM02: they will pay for implementation plus proof (E0). ASM03: cases share reusable structure (E0). ASM04: safe representative samples can be obtained (E0). ASM05: customers will later pay for revalidation (E0).
RISK01: verification/setup overhead erases gains. RISK02: no paying buyer. RISK03: bespoke delivery consumes founder capacity. RISK04: sensitive context leaks even after names are removed. RISK05: bundled platform features absorb the software. RISK06: provider grades its own work too generously.
Contradictions: general productivity opportunity (EV05/EV10) coexists with local absence of measured outcomes (EV03/EV04); these concern different populations and require a measured local pilot. More capable agents (scenario, not forecast) can increase delegation while reducing the price of setup; survival of independent assurance remains ASM05. Privacy differentiation in local marketing (EV11) is not proof competitors lack it (EV08).
