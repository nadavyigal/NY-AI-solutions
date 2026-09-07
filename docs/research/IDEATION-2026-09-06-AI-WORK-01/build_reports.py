from pathlib import Path
import json, re, html, csv
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from pypdf import PdfReader

ROOT=Path(__file__).parent
RUN='IDEATION-2026-09-06-AI-WORK-01'
SOURCES='''## Source and evidence register
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
'''

docs={}
docs['1_problem_discovery']=('Problem discovery and definition','''## Boundary and key output
Research how a professional can improve recurring work as AI capabilities change. Compare individuals, small teams, and service providers. Near-term boundary: one reversible professional-services workflow using approved tools; future software is an option, not a committed build. Exclude customer recruitment, live implementation, legal advice, deployment, public claims, and price publication from this run.

High-level problem: professionals cannot reliably determine whether changing a recurring work process will improve accepted output enough to justify disruption, leaving potentially useful improvements unrealized or introducing avoidable rework.

## Journey and pain signals
Current journey: task arrives; worker assembles context; performs work; reviews; sends or files; repeats. A proposed change adds selection, setup, permissions, evaluation and ownership handoff. These extra costs must be counted.
PS01: user handoff reports unused AI potential (EV01, E0 as population claim). PS02: configuration waited on account access and a scheduled session (EV03, E1). PS03: no baseline was captured in the local pilot (EV03, direct record). PS04: no recorded commercial validation (EV04). PS05: observed productivity can differ from perceived productivity and measurement can be biased (EV06, context-limited).

## Distinct problems
P01: a practice owner struggles to select a worthwhile change when many recurring tasks compete for attention, risking time spent on low-value improvements (PS01; hypothesis).
P02: a workflow owner struggles to put an agreed new process into regular operation when implementation spans personal accounts and work routines, leaving proposed improvements unused (PS02).
P03: a buyer struggles to determine whether a changed process improved accepted output when comparing executions, making renewal and adoption decisions unreliable (PS03/PS05).
P04: a supervisor struggles to recover an acceptable result when delegated work fails or its inputs change, creating rework and unclear responsibility (EV01; hypothesis).
P05: a practice owner struggles to decide when to revisit an established process as conditions change, risking unnecessary switching or missed improvements (EV01; hypothesis).

## Framing challenge
The original learning gap is a proposed explanation, not an observed problem. We removed 'needs an AI coach' and 'needs agents' from every problem. P04 concerns failure handling; P05 concerns change timing, so they remain distinct. No opportunity ranking or cause is established here.

## Gate
PASS for researchable, consequence-aware problem definitions. No demand-validation claim. Advance P01-P05 to scoring. Unresolved: frequency, economic magnitude, buyer ownership and prevalence. Objects: PS01-PS05 and P01-P05; inputs EV01-EV06. No numerical scoring in this step. Deferred: solution selection.
''')

docs['2_opportunity_evaluation']=('Problem and opportunity evaluation','''## Scoring contract
Planning judgments, not measured customer data. Impact and likelihood: 1 low, 5 high. Complexity: 1 easiest, 5 hardest. Evidence: 1 weak proxy to 5 convergent direct support; this planning score does not replace E-grades. Confidence low throughout; P02/P03 medium for occurrence in the local pilot only.
Baseline = .40 Impact + .25 Likelihood + .20 (6-Complexity) + .15 Evidence. Impact/evidence-heavy = .40/.15/.10/.35. Feasibility/risk-heavy = .25/.15/.45/.15. Scores are not probabilities.
Load-bearing rule: no problem can support a software build without direct target-buyer pain and a feasible data path, regardless of rank. Neither is established. Research tier A means investigate next, not invest.

## Raw inputs and rationale
P01: Impact 4, Likelihood 3, Complexity 3, Evidence 1. Selection could matter widely, but no target interviews.
P02: Impact 4, Likelihood 4, Complexity 2, Evidence 2. Local implementation friction is tangible; prevalence unproven.
P03: Impact 5, Likelihood 4, Complexity 3, Evidence 3. Both local baseline gap and external measurement concerns support investigation; revenue consequence unmeasured.
P04: Impact 4, Likelihood 3, Complexity 4, Evidence 1. Failure handling could be costly; target incident evidence missing.
P05: Impact 3, Likelihood 2, Complexity 5, Evidence 1. Timing and repeated demand are particularly speculative.

{{PROBLEM_SCORES}}

Baseline tiers: A = P03/P02; B = P01/P04; C = P05. Within B, advance P01 as a selection enabler and defer P04 as a primary product because target incident evidence is absent. Tier boundaries are 3.4 for A and 2.5 for B. P02 falls to B under impact/evidence-heavy weights and is rank-unstable by the tier rule. P03 stays A; its lead over P02 reverses under feasibility-heavy weights. Both remain research priorities; no exact ordering is robust. Priority is proof plus implementation, not a broad scanner.

## Red Team and gate
Challenge: scoring rewards evidence found in the founder's existing practice and may ignore a better unfamiliar market. Response: preserve a contrarian assurance concept and all vertical alternatives; do not treat service familiarity as demand. CONDITIONAL PASS for causal investigation. Load-bearing demand weakness blocks an unconditional investment decision. Inputs P01-P05, EV03-EV06; outputs OS-P01-OS-P05. Deferred: P04/P05 as primary markets until incident/repeat-demand evidence.
''')

docs['3_root_causes']=('Root-cause analysis','''## Fishbone breadth
People: limited attention, unclear operator, mismatch between sponsor and user. Process: undocumented variations, no acceptance standard, no dedicated setup time. Tools: account permissions, fragmented context, brittle integrations. Measurement: missing baseline, selective examples, excluded review time. Incentives: fear of disruption, no reward for saved capacity, provider rewarded for installation. Environment: sensitive information, changing policies and capabilities.

## Causal chains and alternatives
P02 -> proposed process not used -> setup/ownership handoff unfinished -> account access and a scheduled working session absent -> delivery defined as documents instead of repeatable operation. RC01: ownership/access coordination gap. EV03 supports one case (E1). Alternatives: low pain, insufficient motivation, wrong workflow, or scheduling unrelated to the design.
P03 -> improvement unknown -> unlike executions compared -> no baseline/rubric -> outcome measurement not part of completion. RC02: no agreed acceptance-and-cost contract. EV03 and EV06 support investigation, not universal causality.
P01 -> attractive task chosen over valuable task -> visible time savings dominate -> frequency/review cost not represented -> no comparable opportunity accounting. RC03: incomplete economic representation (EV01, E0). Alternative: buyer already knows the right task but cannot obtain access.
P04 -> exceptions go unresolved -> agent output treated as finished -> decision rights and recovery procedure unclear. RC04: absent exception ownership (E0). Alternative: inherently unreliable process or poor data.
P05 -> updates ignored or over-adopted -> capability announcements do not map to local tests -> no maintained representative examples/version record. RC05: missing link between external changes and local proof (E0). Alternative: current process is already adequate; no recurring job exists.

## Evaluation without composite ranking
Contribution / Evidence strength / Addressability, each 1-5 high good: RC01 4/2/4; RC02 5/3/4; RC03 3/1/3; RC04 4/1/3; RC05 3/1/2. Contribution is E0 judgment. RC01/RC02 carry into primary exploration; RC03 supports intake; RC04/RC05 remain conditional alternatives. No composite root-cause ranking, so sensitivity is not applicable.

## Red Team and gate
Challenge: missing measurement does not prove there was value to measure. Response: separate evidence infrastructure from benefit; explicitly permit no-change decisions. Challenge: no user interviews means a Five Whys chain can be fiction. Response: label RC03-RC05 E0, carry them only as hypotheses, and forbid a 'validated cause' claim. CONDITIONAL PASS into divergence. Outputs RC01-RC05 linked to P01-P05; EV03/EV06. No causal hypothesis is proven across customers.
''')

concepts=[
('I01','Workflow Acceptance Sprint','service; vertical','Implement one recurring professional-services workflow and demonstrate accepted outputs.','Practice owner','Weekly reporting backlog','Get one process running with credible proof','Accepted workflow version','Observe, configure, replay, hand over','Founder implements; AI drafts; client approves','Operational setup and accountable completion','Assistant may design it; buyer still needs execution/access/acceptance ownership','Fixed scoped fee','Next painful workflow, separately purchased','Low-medium','High provisional: existing practice','Bespoke support consumes margin'),
('I02','Fractional Work Systems Partner','service','Manage a firm’s recurring improvement backlog.','Small-firm owner','Several workflows breaking or changing','Allocate and deliver improvements','Improvement portfolio','Monthly review plus scoped implementation','Human prioritizes and owns change; AI analyzes','A responsible operator','Coordination and delivery capacity are purchased','Retainer with capacity cap','Actual incidents and new work','Medium','Medium: recurring time commitment','Retainer becomes unlimited support'),
('I03','Independent Workflow Acceptance Lab','service; contrarian','Test AI workflows built by the buyer or another vendor.','Buyer with an existing implementation','Renewal, handover or disputed ROI','Decide accept, fix or reject','Acceptance report','Redacted samples and a predefined test protocol','Evaluator owns rubric; AI runs checks','Independent decision evidence','Separation from implementer and reproducible assessment','Per assessment; revalidation optional','Version change or renewal','Low-medium','High technical fit; buyer access unproven','Buyer expects testing free from implementer'),
('I04','Work Upgrade Ledger','software','Track workflow versions, outcomes and ownership across existing tools.','Small team workflow owner','Second workflow or tool change','Know what works and why','Workflow version plus evidence','Import records; compare versions; approve change','Software records; humans judge ambiguous quality','Reduced loss of operational knowledge','Durable structured records; platforms can still copy this','Per team subscription','Run evidence and change reviews','Medium','Medium','Data entry outweighs value'),
('I05','AI Opportunity Scanner','software','Propose retests when a tool change might improve a known workflow.','AI-forward operator','Relevant capability or price change','Find worthwhile upgrades','Candidate retest','Workflow registry plus targeted alerts','AI maps changes; human approves tests','Avoid monitoring every release','Local history plus actual tests; generic recommendations are insufficient','Subscription','Only material local opportunities','High','Low before a dataset','False positives and switching cost'),
('I06','Workflow Simulator','software','Replay proposed process variants against representative historical cases.','Operations lead','Before deploying a redesign','Estimate quality and cost tradeoffs','Replayable case set','Sandbox compare view','AI executes variants; humans adjudicate','Avoid failed process changes','Real case corpus, connectors and reproducible replay','Usage plus workspace fee','Every material revision','High','Medium technical; low data fit','Replay does not capture real-world behavior'),
('I07','Delegation Control Desk','software; agent-dominant','Route agent exceptions and approvals to accountable humans.','Team supervising agents','Multiple agents produce unresolved cases','Resolve exceptions without inspecting everything','Decision right and exception','Queue with escalation and fallback','Agents execute; humans handle exceptions','Reliable accountability and response','Cross-system routing and policy; native platforms may absorb it','Per active workflow/team','Real exceptions','High','Medium','Exception volume makes supervision expensive'),
('I08','Agent Migration Clinic','service; agent-dominant','Move an established process to a new execution model only after acceptance tests.','Owner of a brittle automation','Provider change or capability step','Migrate without losing reliability','Verified migration','Shadow run, cutover, rollback','Founder migrates; AI executes; client approves','Controlled continuity','Actual integration, comparison and rollback responsibility','Fixed migration fee','Migrations and failures','Medium-high','Medium-high','Migrations too infrequent or bespoke'),
('I09','Consultant Evidence Brief Pipeline','service; vertical','Install a repeatable source-linked client briefing process.','Boutique consulting lead','Repeated weekly client briefs','Deliver accepted research briefs with less total effort','Evidence-backed brief','Approved inputs to draft to reviewer','AI extracts/drafts; consultant verifies conclusions','Capacity and consistent traceability','Workflow-specific setup and acceptance; native research is a strong substitute','Implementation fee','New briefing types/clients','Medium','High provisional','Review costs erase drafting gains'),
('I10','Recruiter Intake-to-Shortlist System','software; vertical','Structure approved role criteria and evidence for human-reviewed shortlists.','Recruiting firm lead','Repeated intake/shortlist backlog','Reduce coordination and inconsistent evidence','Candidate evidence packet','Intake form to review queue','AI organizes; recruiter decides','Faster consistent intake','Team workflow and evidence; ATS incumbents may bundle','Team subscription','Each hiring assignment','High','Low without domain/data access','Sensitive data and unfair ranking'),
('I11','Work Upgrade Protocol','methodology','A portable process people run inside their existing assistant.','Capable DIY professional','A specific recurring task hurts','Redesign and measure work independently','Reusable protocol','Guided worksheet inside current tools','User performs; AI guides','Convenient expert structure, if anything','Often assistant alone is enough; no strong moat claimed','Workshop/license or free acquisition tool','Occasional reuse','Low','High','Free alternatives remove willingness to pay'),
('I12','No New Product','no standalone business','Use the method internally in NY AI Solutions and buy existing software where adequate.','Existing consulting prospect','Current process needs fixing','Choose the simplest viable intervention','Client outcome','Existing fit call and sprint','Current operator and tools','Only existing service delivery earns revenue','No claim that another product is needed','Existing practice revenue','Existing client needs','Low','Very high','Never testing a repeatable product opportunity'),
('I13','Capacity Redeployment Sprint','service; vertical','Turn saved time into a specific additional client-serving activity.','Agency/practice owner','AI saves time but revenue or backlog does not improve','Convert capacity into useful output','Accepted capacity allocation','Baseline bottleneck; change process; measure downstream use','Human changes operating policy; AI reduces tasks','Real throughput rather than theoretical hours','Incentives, staffing and workflow coordination','Fixed service fee','New bottleneck','Low-medium','Medium','Bottleneck lies in sales or demand, not delivery'),
('I14','Workflow Evidence Exchange','network','License permissioned benchmark cases and vetted implementation patterns.','Specialist implementer','New workflow needs trusted examples','Reduce duplicated validation effort','Reusable test case','Search, replay, contribute','Experts curate; AI adapts','Faster credible evaluation','Permissioned corpus and quality controls, if achieved','Membership/license','New implementations','High','Low before repeated demand','Cold start and nonportable private data')]

family_links={'I01':'SF01/SF02/SF06','I02':'SF01/SF03/SF05','I03':'SF02','I04':'SF02/SF05','I05':'SF05','I06':'SF02/SF05','I07':'SF04','I08':'SF04/SF05','I09':'SF01/SF02','I10':'SF01/SF04','I11':'SF06','I12':'SF03/SF06','I13':'SF03','I14':'SF02/SF05'}
cards=[]
for c in concepts:
    id,name,kind,thesis,buyer,trigger,job,obj,interaction,split,pay,gap,revenue,retention,complexity,fit,failure=c
    cards.append(f'### {id} - {name} ({kind})\n{thesis}\n\nCustomer: {buyer}. Trigger: {trigger}. Core job: {job}. Product object: {obj}.\n\nInteraction: {interaction}. Human/AI split: {split}.\n\nWhy pay: {pay}. Why ChatGPT/Claude alone may be insufficient: {gap}. Revenue: {revenue}. Retention: {retention}.\n\nTechnical complexity: {complexity}. Founder fit: {fit}. Biggest failure mode: {failure}. All demand/fit ratings are E0 planning hypotheses; links: {family_links[id]}.')

docs['4_divergent_ideation']=('Divergent ideation','''## Intervention space before selection
SF01 implementation/coordination (RC01): reserve live setup time; choose workflow owner; use existing tools; remove a handoff; standardize inputs; eliminate the task entirely.
SF02 measurement/assurance (RC02): define accepted output; count review time; blind comparisons; build replay cases; audit failed changes; revalidate vendor deliverables.
SF03 prioritization (RC03): rank by frequency and avoidable cost; audit bottlenecks; compare buying existing software; outsource a result; refuse low-value automation; redeploy saved capacity.
SF04 delegation/governance (RC04): exception queue; decision-right contract; shadow agent; deterministic checks; rollback rehearsal; manual fallback.
SF05 adaptive optimization (RC05): event-triggered retest; version ledger; capability-to-case matching; model migration; drift alarm; quarterly opt-in review.
SF06 capability transfer (RC01/RC04): apprenticeship on real task; observed independent run; supervision practice; failure rehearsal; portable method; no new product.
These 36 primitives preserve materially different interventions; the 14 concepts below are combinations, not the limit of divergence. Card family tags are provisional; Step 5 evaluates mechanisms rather than accepting every card element.

## Analogies and limits
Personal trainer: observe performance; reject mandatory lesson schedules. Physical therapist: regain independence from provider, not from useful tools. Management consultant: prioritize economics; risk slide-only delivery. Automation consultant: own setup; risk automating the wrong process. Apprenticeship: learn on useful work; risk expert bottleneck. Security scanner: event-driven discovery; risk alert fatigue. GPS: intervene at the moment of a decision; risk inaccessible work context. IDE: use actual artifacts and verification; business outcomes often lack executable tests. DevOps: version, monitor, rollback; quality can be subjective. Financial advisor: allocate scarce improvement effort; avoid unverifiable 'frontier returns'. Performance coach: measure outcomes; provider is not an independent judge. Operating system: carry context; integration costs explode. Digital twin: simulate before change; behavioral reality may not replay. Additional analogies: building commissioning (acceptance before occupancy), metrology lab (calibrated independent measurement), and industrial maintenance (repair only when economically justified).

'''+ '\n\n'.join(cards)+'''

## Combinations and preserved rejections
Combine audit + implementation + acceptance + operator handoff into I01; scanner stays optional. Combine ledger + replay + conditional retesting into I04/I06, without a full work digital twin. Combine consultant vertical + representative examples + implementation into I09. Combine independent evaluation + migration into I03/I08 only when buyer commissions both and evaluator independence is not misrepresented.
Reject automatic optimization toward maximum autonomy: it optimizes a proxy. Defer universal screen observation: disproportionate privacy and integration burden. Preserve I12 as a valid outcome, not a straw man. No concept is selected at this stage.

## Gate
PASS for breadth. Inputs RC01-RC05; outputs I01-I14, SF01-SF06. Evidence EV01/EV07-EV11 informs analogies and competition; commercial appeal remains E0. No composite score in this step. Next: mechanism evidence gate.
''')

docs['5_evidence_gate']=('Solution validation and evidence gate','''## Mechanism ratings
Raw scale 1-5, higher favorable: problem fit / evidence strength / market whitespace / technical feasibility / product leverage / risk manageability. Evidence score is a judgment of relevance, separate from E-grade. Baseline weights 25/25/10/15/15/10%; impact/evidence 30/35/5/10/15/5%; feasibility/risk 15/20/5/25/10/25%. Confidence low for market whitespace and product leverage, medium for bounded service feasibility. A commercial core requires direct paid demand; none passes that threshold. Retentions below are permissions for conditional concept synthesis, not validated demand.

M01 live implementation and named owner (RC01/SF01): 5/3/2/5/3/4. STRONG KEEP for service exploration; EV03/EV08. Access and repetition must be tested.
M02 acceptance contract and baseline (RC02/SF02): 5/3/3/4/5/4. CORE KEEP as evidence discipline; EV03/EV06. The mechanism prevents unsupported claims; it does not prove customers buy measurement separately.
M03 economic workflow selection (RC03/SF03): 4/1/2/5/3/4. KEEP AS ENABLER; EV01/EV02. E0 causal/demand support means interview and test, not validated prioritization algorithm.
M04 operator supervision and fallback rehearsal (RC01/RC04/SF06): 4/2/2/5/3/4. KEEP AS ENABLER; EV03/EV07. No requirement for unaided task execution.
M05 portable version/evidence ledger (RC02/RC05/SF05): 4/2/2/4/4/3. KEEP AS INFRASTRUCTURE, manual record only; EV06/EV09. Software purchase hypothesis unvalidated.
M06 autonomous opportunity scan/digital twin (RC05/SF05): 3/1/1/2/5/1. DEFER; EV09 and ASM05. No dependable local data or repeat-demand evidence.
M07 exception routing and migration (RC04/SF04): 4/2/2/3/4/2. DEFER as product, retain only manual fallback within M04; EV07. Incident frequency unproven.
M08 course/capability graph (RC01/SF06): 2/1/1/5/2/4. REJECT as product core; EV01 only. Could help particular users, but no evidence it solves selected P02/P03 better.

{{MECHANISM_SCORES}}

## Conditional solution kernel
M01 + M02 + M04, supported by M03 and manual M05. RC01/RC02 are locally plausible, not population-validated. ASM01/02/04 are load-bearing and unresolved. M06/M07 cannot enter the committed MVP. No mechanism has passed a paid-market gate. 'Validated kernel' here means researched and bounded enough to test; a stronger label would overstate evidence.

## Business models ranked for the first test
Planning rank, no measured willingness to pay: 1 B productized sprint; 2 A audit plus implementation; 3 G team workflow transformation limited to one workflow; 4 H diagnostic with an explicit implementation option; 5 I portable methodology inside existing practice; 6 D fractional AI CTO; 7 F partly outcome-linked fee; 8 E monthly optimization; 9 C premium coach; 10 L embedded product; 11 J standalone SaaS; 12 K marketplace. L is an interaction/distribution choice more than a standalone revenue model. Outcome-linked fees require an agreed counterfactual and should not shift unlimited risk to the founder. No prices recommended or published.

## Pilot format comparison
These are E0 judgments relative to a solo founder, not research findings. H/M/L indicate high/medium/low, favorable only where specified.
Six-week/three-workflow accelerator: pain M, activation slow, WTP unknown, learning H, implementation H, repeat demand unknown, founder effort H, scalability L, assistant differentiation M. Too many variables for the first test.
One-week/one-workflow sprint: pain H if qualified, activation fast after access, WTP unknown, learning M, implementation H, repeat demand unknown, effort M, scalability M, differentiation M. Best evidence per founder hour if recurring executions fit the window; allow 7-10 business days plus a follow-up rather than promising one calendar week.
One-day audit: pain M, activation fastest, WTP unknown, learning M, implementation L, repeat L, effort L, scalability M, differentiation L-M. Best for screening; cannot prove delivered value.
Done-for-you implementation: pain H, activation M, WTP unknown, learning L unless handoff, implementation H, repeat M hypothesis, effort H, scalability L, differentiation M-H on execution. Cap scope and include acceptance.
Monthly service: pain depends on actual backlog, activation M, WTP unknown, learning M, implementation H, repeat unproven, effort H, scalability L, differentiation M. Premature until a second paid need.
Contextual coach: pain M, activation fast only with accessible context, WTP unknown, learning H, implementation M, repeat unproven, effort medium-to-high to build, scalability H in theory, differentiation L.
Continuous scanner: pain unproven, activation slow because a workflow model is needed, WTP unknown, learning L, implementation L by itself, repeat unproven, effort H, scalability H in theory, differentiation L for generic alerts/M for verified local retests.

## Red Team and gate
Challenge: independent evaluation still costs time, and a vendor may bundle it. Response: reserve I03 as a separate falsification test, not a certainty. Challenge: digital twins/process intelligence already exist. Response: remove category-novelty claims (EV09). CONDITIONAL PASS into a test-only concept brief. No build gate passed. Objects M01-M08; risks RISK01-RISK06.
''')

docs['5_5_architecture']=('Product opportunity architecture','''## One-page architecture
See the landscape PDF and PNG for the required visual bridge. The map preserves Step 5 raw ratings and dispositions. All arrows are hypotheses unless supported by the source IDs shown.

P02/P03: changes fail to reach regular operation or lack credible proof.
RC01 ownership/access coordination -> M01 implementation and owner -> STRONG KEEP.
RC02 absent acceptance/cost contract -> M02 baseline and acceptance -> CORE KEEP.
RC03 incomplete economics -> M03 selection -> ENABLER.
RC04 unclear exception ownership -> M04 supervision/fallback -> ENABLER; M07 automation -> DEFER.
RC05 missing local retest record -> M05 manual ledger -> INFRASTRUCTURE; M06 scanner/twin -> DEFER.
M08 course/capability graph -> REJECT as core.
Conditional kernel: choose a workflow; agree acceptance; measure baseline; configure; run comparable cases; count review/rework; hand over; retain version evidence.

Gate: CONDITIONAL PASS. Retained elements trace to RC and EV in Step 5, but paid demand and most causal generalization remain unresolved. The map authorizes a bounded experiment specification, not software implementation. No new mechanism added here.
''')

docs['6_synthesis']=('Competing concepts, business brief and specification','''## Three final directions
PC01 / near-term business - Workflow Acceptance Sprint, within the existing AI Value Sprint. Thesis: an owner buys one working improvement with credible acceptance and a named operator. User: workflow owner and practice principal. Trigger: recurring backlog or a deliverable consuming known time. Why now: existing service assets and local delivery learning (EV02/03), not a claimed sudden model threshold. Loop: select -> baseline -> configure -> comparable executions -> accept/fix/leave unchanged -> handoff. Model: fixed scope, privately priced after qualification. Differentiation: actual delivery, context-specific controls and auditable proof; none is a proven moat. Human/AI architecture: founder implements, assistant processes approved inputs, client decides acceptance. Must be true: ASM01/02/04; acceptable outcomes within a capped delivery budget. Fastest falsification: five qualified conversations with concrete recent examples, followed by a paid bounded pilot. Kill: no paid commitment or review/setup costs erase benefit.

PC02 / long-term software - Workflow Acceptance Ledger. Thesis: teams will pay to maintain accepted workflow versions and revalidate them when inputs/tools change. User: owner of several operational AI workflows, not generic learners. Trigger: second implementation, disputed output, vendor change or owner turnover. Why now: evidence/version problem is plausible (EV06) and process intelligence is an existing category (EV09); small-team gap remains unproven. Loop: record cases -> compare versions -> approve -> observe failures -> retest on meaningful change. Model: workspace subscription only after recurring demand. Differentiation: portable evidence, approved decision rights, repeatable checks; platforms can copy these. Architecture: manual M05 initially, human acceptance M02, optional execution through existing tools. Future automatic scanner and migration require returning to Step 5. Must be true: ASM03/05 and low-burden data capture. Fast falsification: manually maintain records for pilot workflows and offer paid revalidation after a genuine change. Kill: owners do not consult the record, no paid retest, or every workflow needs a custom data model.

PC03 / contrarian - Independent Workflow Acceptance Lab. Thesis: buyers may value evidence about someone else's AI implementation more than coaching or another implementation vendor. User: owner evaluating an existing tool/vendor, not an AI beginner. Trigger: acceptance, renewal, failed rollout or disputed value. Loop: agree rubric -> sample historical cases -> blind replay -> report accept/fix/reject. Model: fixed assessment; repeat only on a real change. Differentiation: evaluator independence and reproducible local evidence; not certification. Architecture: human adjudication with AI-assisted checks, using M02/M05; no large platform required. Must be true: buyers pay separately and provide usable samples. Fast falsification: five buyers with an existing implementation, ask for a paid assessment tied to a live decision. Kill: universally treated as vendor-included QA or access costs exceed assessment economics.

## Concept scoring
All 16 dimensions are 1-5, higher favorable. Burden/difficulty/risk dimensions are inverted: 5 means easier/lower burden/safer. Codes: pain P, trigger T, measurable value V, willingness to pay W, frontier resistance F, founder feasibility X, distribution ease D, low human burden H, automation potential A, recurrence R, privacy ease Q, implementation ease I, low platform risk L, defensibility B, first-revenue speed S, five-user evidence E. All scores E0; no W score is measured. I12 means the no-new-product strategy with existing consulting revenue, not paid demand for a nonexistent product.
Baseline weights: 8/5/14/5/14/12/4/4/3/4/3/4/4/3/5/8. Impact/evidence-heavy: 10/5/20/5/15/6/3/2/2/3/2/3/3/2/4/15. Feasibility/risk-heavy: 5/4/10/4/10/18/7/7/2/3/6/7/5/2/5/5. Each sums to 100. Raw inputs and scores appear below and in scores.csv. Load-bearing: no software investment without paid target demand, feasible approved data, and recurring use; current scores cannot override these failures.
{{CONCEPT_SCORES}}
Selection is PC01 for the next commercial test; PC02 is the software option, PC03 the contrasting business. I12's high feasibility is a reason to house PC01 within NY AI Solutions, not evidence the broader opportunity is dead. Close ranks must not be interpreted as meaningful numeric precision.

## Business Product Brief: selected PC01
Problem/JTBD: when a repeated task consumes effort or causes rework, help the owner get an acceptable result with less total burden and know whether the change was worth it (P02/P03; RC01/RC02).
Value proposition: 'Get one recurring workflow working better in the tools you already use, with a before/after acceptance record and an operator who can run it.' This is internal draft positioning, not a public ROI promise.
Target: one accessible Israeli professional-services niche; provisional first candidate is consultant/risk-advisory briefing or recurring internal reporting. Founder background in local records suggests fit (EV11), but access must be checked. This is a candidate wedge, not a decision to discard the existing broader niche before the gate.
MVP: one workflow, one owner, approved inputs, one configured route, agreed output rubric, representative cases, operator handoff and short follow-up. Choose existing vertical software if it already meets the requirement.
Non-goals: new app, course, mastery score, passive screen recording, autonomous external actions, marketplace, continuous frontier scanner, or guaranteed percent improvement.
Why this wins provisionally: fits existing delivery infrastructure (EV02), addresses recorded last-mile and measurement gaps (EV03), can obtain evidence sooner than SaaS. Main weakness: competition and zero paid-demand evidence (EV04/EV08).
Economics: measure delivery hours including sales, access setup, evaluation, handoff and support; fee minus tool costs and valued founder time determines contribution. Buyer value is actual capacity/rework benefit, not hours multiplied by billing rate unless that capacity can be monetized. No prices are published by this report.
Metrics: median total human minutes per accepted output, acceptance rate, rework minutes, elapsed cycle time, additional tool cost, unsupported-output incidents, operator success, repeated use, paid commitment. Report sample size and range; five users cannot establish population effect or rare-event safety.
Roadmap: existing fit-call gate -> one paid pilot -> repeated same-family deliveries -> manual ledger -> paid revalidation -> only then consider small software. Each expansion requires fresh evidence, not calendar progression.

## Full Product Specification: PC01 experiment, no build authorized
Status: test specification. Personas: budget owner, workflow operator, output reviewer; explicitly identify when they are the same person. Goals: acceptable output, net operational improvement, safe ownership transfer. Non-goals match the brief.
Journey: fit call selects an actual recent workflow -> owner approves data path -> baseline runs logged -> acceptance rubric locked -> live setup booked -> improved process trialed -> comparison reviewed -> accepted or restored -> independent operator run -> follow-up on reuse.
Information architecture: one engagement folder with intake, workflow card, baseline, acceptance rubric, implementation record, run log, comparison, operator instructions and decision. No customer application required.
Objects: Workflow(id, owner, trigger, frequency, inputs, output, constraints); Version(id, workflow_id, tool/config snapshot, change reason); Case(id, redacted input reference, expected properties, difficulty); Run(id, case_id, version_id, active/review/rework minutes, elapsed time, cost, status); Acceptance(id, reviewer, rubric version, findings); DecisionRight(action, permitted actor, approval, fallback); Change(id, reason, decision). Keep client PII outside this repository.
State: candidate -> qualified -> baseline-ready -> configured -> trial -> accepted/fix/rejected -> handed-over -> archived/retest. Reject/fix are valid outcomes. Version changes invalidate prior acceptance for changed behavior until reviewed.
REQ01 (P01/RC03/M03): capture recent occurrence, frequency, owner and economic consequence; reject vague aspirational tasks.
REQ02 (P03/RC02/M02): record baseline before claiming gain; if absent, label before/after unknown.
REQ03 (P02/RC01/M01): live setup and named operator are completion requirements, not optional follow-up.
REQ04 (P03/RC02/M02): predefine acceptance criteria including critical errors; compare cases of similar type/difficulty; record failed and abandoned runs.
REQ05 (P03/RC02/M02): include generation, preparation, review and correction effort; track parallel agent elapsed time separately from human active time.
REQ06 (P04/RC04/M04): manual fallback and escalation owner; customer approves externally consequential actions.
REQ07 (P02/RC01/M04): operator demonstrates one complete run and recovery from a deliberately benign exception without founder intervention.
REQ08 (P03/RC02/M05): keep versions, source references and approval evidence exportable; no model self-grade accepted as final truth.
AI behavior: process only approved minimized content; distinguish extraction from inference; show missing evidence; abstain/escalate on unsupported conclusions; never silently fill missing client facts. Independent rubric plus human review determines acceptance.
Trust/privacy path for initial briefing candidate: model sees approved public sources or redacted excerpts and generic objectives; never client names, contacts, credentials, private case identifiers or distinctive sensitive narratives. Owner reviews redaction because aliases alone may not prevent identification. Identity is reattached locally by the authorized operator after final review when needed. If sensitive context is essential, redesign or defer until an approved handling environment is available; do not claim legal compliance.
UX: begin with the real task, not lessons; show next action, evidence and exceptions; keep technical configuration in operator notes. Clearly label draft vs accepted output and model suggestions vs reviewer decisions.
Edge cases: missing baseline means no uplift claim; insufficient runs means provisional result; absent reviewer pauses acceptance; changed tool behavior triggers retest; denied access stops setup; low task frequency extends observation rather than inventing repetitions; worsened quality restores previous method.
Analytics: minimal manual run log; numerator/denominator for acceptance; medians and ranges; no raw sensitive prompts in central analytics. Record payment/proposal separately from positive feedback. Record second use and second purchase separately.
Nonfunctional requirements: client-controlled storage, least needed access, exportable plain records, reversible configuration, explicit retention agreement and deletion owner. Response-time and availability promises are set only after observing actual tool constraints; no premature SLA.
Acceptance: all REQ01-REQ08 evidenced; no critical error in observed cases; quality meets preset rubric; operator can run and recover; total effort is compared honestly. This is a pilot gate, not a safety certification.
Dependencies/open questions: actual buyer access, approved data, sufficient frequency, available reviewer, tool permissions, founder capacity, pricing and evidence independence. Phase 0 qualification; phase 1 measured service; phase 2 follow-up; software is outside this specification.

## Verticalization
Consultants: accessible artifacts and repeated briefs; subjective quality and confidentiality complicate evaluation. Risk consultants: stronger provisional founder fit and costly errors, but sensitive context. Product managers: many varied cross-team tasks, unclear personal budget. Accountants: repeatable workflows, but specialized software and domain controls. Recruiters: repeat volume, sensitive personal data and ATS competition. Marketing agencies: repeated deliverables and rapid feedback, but crowded tools and weak attribution to revenue. Lawyers: high-value work, high domain/review burden. Financial analysts: source traceability possible, but high stakes and specialized incumbents. These are E0 comparative hypotheses, not market rankings established by research.
Choose by reachable buyer + repeated workflow + safe samples + objective acceptance, not occupation label alone. A narrow workflow family is likely more useful initially than 'knowledge workers'; a vertical is only stronger if it improves access/reuse enough to offset domain burden.

## Gate and Red Team
CONDITIONAL PASS to strategy. Challenge: this is the existing Value Sprint renamed. Response: retain that offer and change its internal completion standard; do not launch a second brand. Challenge: software option is premature. Response: PC02 remains a manual evidence experiment; M06/M07 excluded. Inputs M01-M05/EV02-EV11; outputs PC01-PC03, REQ01-REQ08.
''')

docs['7_strategy']=('Current and future strategic landscape','''## Before and after
Current: subscription -> occasional assistant use -> promising draft -> manual review -> unclear accepted-output cost -> repeated effort.
Proposed: real recurring task -> named owner and acceptance contract -> measured current version -> smallest useful change -> comparable accepted outputs -> operator ownership -> optional retest on a real trigger.
Future scenario, not forecast: agents execute more work -> scarce human attention goes to goals, evidence, exceptions and resource decisions. Value migrates toward accountable operation only if customers still want a separate provider.

## Current competitive reality
Existing assistants are the runtime and a strong DIY alternative; this report has not exhaustively benchmarked current ChatGPT/Claude features and cannot assert a permanent feature gap. Automation partners already design, build and maintain integrations (EV08). Celonis advertises process intelligence and operational digital twins (EV09). Thus broad 'AI work optimization' is not established whitespace. Vendor research discusses organizational adaptation (EV10), which establishes interest, not an unserved market.
Provisional blue pocket within a red ocean: small professional teams buying a bounded, evidence-backed implementation with safe handling and operator handoff. Neither market size nor competitor absence is verified. A disciplined freelancer may deliver the same result. Local claims that generic vendors ignore privacy are positioning, not researched facts.

## Qualitative strategic value curve
1 low to 5 high supplied emphasis; hypotheses, not measured product ratings. Dimensions: generic advice / implementation ownership / local acceptance evidence / cross-tool portability / low buyer effort.
DIY assistant: 5/1/2/2/2. Automation freelancer: 3/5/3/3/4. Course: 4/1/1/2/2. Enterprise process intelligence: 3/4/4/4/2 (segment mismatch). PC01 target: 2/5/5/4/4. These are desired positioning and archetypes, not verified vendor performance. A freelancer could match PC01's entire curve.
Eliminate course completion and mastery score. Reduce tool novelty, scope, integration count and meetings. Raise observed acceptance, review-cost accounting, operator ownership and rollback readiness. Create a portable workflow acceptance record only if buyers use it.

## Core product object and metrics
Outcome is the commercial promise. Workflow is the unit of intervention. An accepted workflow version is the operational record: objective + approved inputs + execution path + decision rights + acceptance rubric + measured performance. Capability is supporting operator knowledge; agent is one implementation; opportunity is a candidate change. 'Transformation' is a project label. 'Work frontier' has no stable observable denominator or agreed optimum and should not become a management score.
Primary measure: total human minutes per accepted output with a minimum quality constraint. Secondary: first-pass acceptance, rework, elapsed cycle time, tool cost, recovery burden, observed repeat use. Net benefit per period = accepted volume times comparable unit-cost reduction minus ongoing overhead and amortized setup; do not double count time savings and revenue from the same capacity. Disclose assumptions about utilization and monetary value.

## Learning and assistance
Zero-course is the default: task -> implement -> observe -> correct -> operate -> recover. Learning remains necessary only for specification, quality judgment, safe use and exceptions. Permanent useful AI assistance is welcome. Measure decline in founder rescue minutes, not decline in AI use. Independence from the provider and ability to supervise are more relevant than unaided manual execution. Do not assume this creates better retention or willingness to pay until tested.

## Delegation progression
Manual, assisted, structured, delegated and supervised are available modes, not a maturity leaderboard. Advance only after representative accepted runs, lower total cost, bounded permissions, exception ownership and a tested fallback. Roll back when inputs or failure patterns change. Some stable processes should stay deterministic; some judgment remains human. Human-execution decay is not an objective if review burden rises or skills needed for failure recovery disappear.

## Opportunity scanner and retention
Minimum data: workflow objective/frequency/cost, approved examples, acceptance tests, versions, known failures, constraints and permitted tools. A model/tool change generates a hypothesis, then a sandbox replay, then a cost/quality comparison, then an owner-approved change. An announcement alone does not justify an alert or migration. Start with manually curated retests; scanner acquisition cost is otherwise hidden in onboarding.
Month-three return triggers: observed failure, changed input, new recurring work, ownership change, provider migration, or a relevant capability change proven on local cases. No subscription solely because models improve. Existing tools may absorb this loop, and each successful upgrade can reduce future service demand.

## Human/system comparison
A human skill improvement: right where user competence is the bottleneck, weak universal product boundary. B workflow performance: strong measurable scope but can ignore downstream bottlenecks. C make the AI system better: useful only if deployment is appropriate, risk proxy optimization. D supervision: essential in delegated work but incident frequency may not sustain a product. E total human+AI system performance: recommended objective, constrained to one accepted-output workflow and downstream consequences so it remains measurable.

## Red Team and gate
Challenge: extreme agent capability erases implementation value. Response: test recurring assurance separately and allow I12 if native tools suffice. Challenge: 'independent' is false when the implementer evaluates itself. Response: call PC01 acceptance evidence, reserve independence for PC03 with a separate evaluator. CONDITIONAL PASS to investment decision. No defensible software moat established. Sources EV06-EV11; retained M01-M05 only.
''')

docs['8_decision_handoff']=('Decision and next-workflow handoff','''## Decision
DEC01: IDEATION investment decision = CONDITIONAL GO for a bounded commercial validation of PC01 inside the existing NY AI Solutions offer. No software build commitment. Innovation verdict = REFRAME.
Strongest resulting concept: existing AI Value Sprint with a workflow acceptance contract, measured total effort and operator handoff. Strongest new insight: the valuable persistent object may be an accepted workflow version and its evidence, not a course, coach or autonomy score.
What changed from Storm: education and coaching move from product to optional transfer mechanism; the six-week program loses priority. What changed from Red Team: implementation alone is insufficient differentiation; acceptance evidence and ownership are explicit, and the opportunity is reconciled with an offer already operating locally. The long-term software possibility is conditional rather than assumed.
Biggest remaining uncertainty: who pays enough for the incremental implementation/verification work, and whether repeatable delivery leaves adequate contribution after founder effort. EV04 contains zero recorded commercial evidence; EV03 contains no measured outcome. These are load-bearing, not minor caveats.

## Strength and weakness pattern
Problem strength: plausible but unmeasured locally. Cause clarity: partial, strongest for setup ownership and missing baselines. Mechanism feasibility: good for a manual bounded service. Differentiation: weak-to-moderate and copyable. Defensibility: unestablished. Business potential: credible enough for a paid test, not proven. Software recurrence: E0. Do not average away demand, data-access or unit-economics failures.

## Explicit answers to the 12 questions
1. Learning necessary? Operator judgment and recovery are necessary; lessons and a course are optional.
2. Optimize what? Total human+AI performance, measured through accepted outputs and all associated effort.
3. Correct core object? Sell an outcome, change a workflow, retain an accepted workflow version and evidence.
4. Done-with-you or done-for-you? Done-for-you setup plus done-with-you acceptance and handoff; choose DIY when it suffices.
5. Must successful workflows become agents? No. Delegate only where quality, cost and recoverability justify it.
6. What must humans know? Objectives, input limits, acceptance criteria, decision rights, exception diagnosis, escalation and fallback.
7. Assistance Decay? Track provider rescue decay; embrace permanent productive AI assistance.
8. Strongest retention? Revalidation after a meaningful operational change or failure; separately test willingness to pay.
9. What survives better assistants? Accountable delivery, local evidence and decision ownership may survive. These are economic jobs, not guaranteed platform-resistant features.
10. Software or consulting? Service is the strongest current test. Software is an option conditional on repeated records, reuse and paid maintenance demand.
11. Narrow vertical stronger? Provisionally a narrow workflow family is stronger. Choose a vertical only with access, sample availability and relevant expertise.
12. Regret not testing? A real paid workflow upgrade measured end to end, and a separate buyer's willingness to pay for independent acceptance testing of an existing implementation.

## Next workflow: Advisor
Run Advisor next, narrowly, to reconcile PC01 with NY AI Solutions, EXD-026, founder capacity and the approaching 2026-09-11/ten-call gate. Do not create a second venture by default. This is a recommendation; Advisor has not been dispatched and no customer outreach has occurred.
Storm next only if a concrete decision-critical external question would change the selected buyer/workflow, such as whether existing vertical software already solves it. Bound retrieval to that question and demand primary sources. Do not rerun the original broad 'AI learning' research.
Red Team next after a specific buyer, workflow, data path, scope and acceptance protocol exist, and before a consequential implementation commitment. Focus on false ROI, review burden, fragile access, privacy, dependence, liability boundaries and support economics. Another generic concept critique would mostly revisit known objections.
Preferred sequence: Advisor decision -> existing fit-call validation -> focused Red Team on the proposed pilot -> paid measured pilot -> evidence review. Conditional Storm can slot before pilot selection if a factual gap blocks the decision.

## Ready-to-paste Advisor handoff
I completed IDEATION-2026-09-06-AI-WORK-01. Treat its verdict as REFRAME and investment decision as CONDITIONAL GO for service validation only. The initial Personal AI Work Coach idea became a workflow acceptance/implementation concept. Our local NY AI Solutions already sells a 7-10 business-day AI Value Sprint with one Quick Win. The current fit-call log has zero recorded calls/proposals/payments; the related-party pilot has setup evidence but no baseline or arm's-length demand. EXD-026 reviews on 2026-09-11 or ten calls. Recheck current records before deciding.
Decide whether this belongs entirely inside the existing practice, which one reachable segment and recurring workflow to test, and how to allocate founder time before the existing gate. Compare the sprint against independent acceptance testing and doing no new product work. Give one recommendation, a bounded next action and a stopping rule. Treat all concept scores as hypotheses; do not restart broad ideation, presume subscription demand, publish prices, promise ROI, build software or contact anyone. If contact access or available hours are unknown, identify the missing decision input. Use the source snapshot, assumptions ASM01-ASM05 and planning thresholds below.

## Downstream test brief, recommended not executed
Owner: Nadav. Target workflow: Advisor first, then existing NY AI Solutions fit-call process in this repository. User/outcome hypothesis: an accessible professional-services owner will pay for one accepted workflow improvement with lower total burden. Mechanism: M01/M02/M04 with manual M03/M05. Non-goals: software, large integration project, new brand, generic coaching, agentic promotion by default.
First scope: use five qualified conversations as an early checkpoint within the existing ten-call/date gate. Bring an actual recent recurring task, approved sample and identifiable owner; do not count friendly feedback as paid intent. The report does not reset or override EXD-026.
Pilot scope after buyer agreement: one workflow, 7-10 business days where task frequency permits, plus a follow-up. Suggested cap 12 founder delivery hours for the first bounded workflow; this is a planning assumption, not known feasibility or founder availability. Book setup at kickoff. If adequate observation requires longer, state it rather than compressing evidence.
Planning success thresholds: at least three of five qualified conversations expose a concrete recurring pain; at least one requests a scoped proposal and makes a paid commitment before implementation. Pilot target: at least three baseline and three improved comparable runs, all failures retained; median total human effort at least 20% lower with no material quality decline under a preset rubric; operator completes one independent run and recovery exercise. The 20% target is chosen to test meaningful value, not research-derived or a sales guarantee. Tiny samples are directional; do not claim statistical proof or rare-error safety.
Kill/pause criteria: no paid commitment at the existing gate; no useful safe samples; cost of setup/review exceeds recurring benefit; critical output failure; owner cannot operate within the agreed support cap; or each prospect requires an incompatible offer. Diagnose whether the failure kills the workflow, niche or wider business rather than silently changing thresholds. Existing EXD-026 criteria remain controlling for the practice.
Strong-GO criteria for repeating the service, not SaaS: three independent paid deliveries in one workflow family with accepted outputs, positive measured contribution, and demonstrated reuse. Software exploration requires a recurring evidence-management pain plus at least two buyers agreeing to pay for ongoing revalidation after a genuine change. These are planning gates and should be reviewed by Advisor.
Instrumentation: source of introduction, qualification, actual paid amount privately, baseline and improved case IDs, total human/review/rework time, elapsed time, tool cost, acceptance decisions, exceptions, founder delivery/support hours, repeat usage and second purchase. Do not record client PII here.
Privacy: approved minimized samples only; owner-controlled storage; redact identifying narrative, not just names; no external sending/production actions without the customer's agreed permissions. Anonymized examples in research; identities reattached by the authorized owner outside model context when necessary.
Cost/time: Advisor should select an actual founder-time bound; proposed decision-session cap 60 minutes and no new software spend. No token budget requested. Proposal/pilot fee and delivery budget require a real scope; no purchase is authorized by this report. Stop at the existing date/call gate and review evidence. User instruction currently authorizes this research and advice only.

## What specifically not to build
No standalone AI coach, lesson library, capability graph, frontier-percentage dashboard, universal work digital twin, continuous scanner, agent marketplace or proprietary orchestration platform. No second landing page for an offer already present. Preserve the software hypothesis as a testable option rather than an implementation backlog.

## Gate and retrospective
CONDITIONAL PASS for a bounded research decision; paid-market and software gates remain unpassed. All steps completed as desk research, no manual user tests performed. Original scores frozen for later calibration. Main methodological lesson: check the founder's current offer and actual commercial evidence before interpreting a conceptual pivot as a new company. Compare scored feasibility and value with actual delivery hours and paid outcomes after the downstream cycle; do not rewrite predictions retroactively.

## Final Innovation Verdict
REFRAME
''')

problem_rows={'P01':[4,3,3,1],'P02':[4,4,2,2],'P03':[5,4,3,3],'P04':[4,3,4,1],'P05':[3,2,5,1]}
mechanism_rows={'M01':[5,3,2,5,3,4],'M02':[5,3,3,4,5,4],'M03':[4,1,2,5,3,4],'M04':[4,2,2,5,3,4],'M05':[4,2,2,4,4,3],'M06':[3,1,1,2,5,1],'M07':[4,2,2,3,4,2],'M08':[2,1,1,5,2,4]}
concept_rows={
'I01':[4,4,5,3,3,5,3,3,3,3,3,5,4,2,5,5],
'I02':[4,3,4,3,3,3,3,1,2,4,2,3,4,2,3,3],
'I03':[4,4,5,2,4,4,2,3,3,3,3,4,4,3,4,5],
'I04':[3,3,4,2,3,3,2,4,4,4,3,3,2,3,2,3],
'I05':[2,2,3,2,2,2,2,3,5,3,1,2,1,2,1,2],
'I06':[4,4,5,3,4,2,2,3,4,4,1,1,3,3,1,3],
'I07':[4,4,4,3,3,2,2,2,4,5,1,1,2,3,1,3],
'I08':[4,5,4,3,3,3,2,2,3,2,2,2,3,2,4,4],
'I09':[4,4,5,3,3,4,3,3,4,3,3,4,3,3,5,5],
'I10':[4,4,4,3,2,2,2,3,4,4,1,2,2,2,2,3],
'I11':[2,3,3,1,1,5,3,5,5,1,5,5,1,1,5,4],
'I12':[3,4,4,3,3,5,4,3,3,2,4,5,5,2,5,5],
'I13':[4,3,5,3,4,3,2,2,2,3,4,4,5,2,4,4],
'I14':[3,3,4,2,4,1,1,3,4,4,1,1,3,4,1,2]}

def score_table(rows,weights,cols,transform=None):
    assert all(abs(sum(w)-1)<1e-8 for w in weights)
    scores={k:[sum(a*b for a,b in zip(transform(v) if transform else v,w)) for w in weights] for k,v in rows.items()}
    ranks=[{k:i+1 for i,k in enumerate(sorted(scores,key=lambda k:(-scores[k][j],k)))} for j in range(3)]
    lines=['| ID | Raw '+cols+' | Baseline / impact / feasibility | Ranks | Stability |','|---|---|---|---|---|']
    for k,v in rows.items():
        rr=[r[k] for r in ranks]
        flag='rank-unstable' if max(rr)-min(rr)>2 else 'rank-stable'
        if k.startswith('P'):
            tiers=[('A' if s>=3.4 else 'B' if s>=2.5 else 'C') for s in scores[k]]
            if len(set(tiers))>1: flag='rank-unstable (tier change)'
        lines.append('| '+k+' | '+ '/'.join(map(str,v))+' | '+' / '.join(f'{s:.2f}' for s in scores[k])+' | '+ '/'.join(map(str,rr))+' | '+flag+' |')
    return '\n'.join(lines),scores

pt,ps=score_table(problem_rows,[[.4,.25,.2,.15],[.4,.15,.1,.35],[.25,.15,.45,.15]],'Impact/Likelihood/Complexity/Evidence',lambda v:[v[0],v[1],6-v[2],v[3]])
mt,ms=score_table(mechanism_rows,[[.25,.25,.1,.15,.15,.1],[.3,.35,.05,.1,.15,.05],[.15,.2,.05,.25,.1,.25]],'Fit/Evidence/Whitespace/Feasibility/Leverage/Risk')
weights=[[8,5,14,5,14,12,4,4,3,4,3,4,4,3,5,8],[10,5,20,5,15,6,3,2,2,3,2,3,3,2,4,15],[5,4,10,4,10,18,7,7,2,3,6,7,5,2,5,5]]
ct,cs=score_table(concept_rows,[[a/100 for a in w] for w in weights],'P/T/V/W/F/X/D/H/A/R/Q/I/L/B/S/E')
with (ROOT/'scores.csv').open('w') as f:
    w=csv.writer(f);w.writerow(['id','raw_scores','baseline','impact_evidence','feasibility_risk'])
    for rows,scores in [(problem_rows,ps),(mechanism_rows,ms),(concept_rows,cs)]:
        for k,v in rows.items():w.writerow([k,'/'.join(map(str,v)),*scores[k]])

styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='BodyReport',fontName='Helvetica',fontSize=9.3,leading=13,spaceAfter=7,textColor=colors.HexColor('#25344a')))
styles.add(ParagraphStyle(name='CellReport',fontName='Helvetica',fontSize=7.0,leading=9,spaceAfter=0))
styles['Title'].textColor=colors.HexColor('#123457')
styles['Heading2'].textColor=colors.HexColor('#087f8c')

def clean(s):
    return s.replace('→','->').replace('–','-').replace('—','-').replace('’',"'").replace('“','"').replace('”','"')
def para(s,style='BodyReport'):
    s=html.escape(clean(s))
    s=re.sub(r'(https?://[^\s]+)',r'<link href="\1" color="#087f8c">\1</link>',s)
    return Paragraph(s,styles[style])
def footer(c,d):
    c.setFont('Helvetica',7);c.setFillColor(colors.HexColor('#64748b'))
    c.drawString(38,24,RUN+' | Private research | 2026-09-06')
    c.drawRightString(d.pagesize[0]-38,24,str(d.page))
def body_flow(md):
    flow=[]; lines=md.splitlines(); i=0
    while i<len(lines):
        line=lines[i].strip()
        if not line:i+=1;continue
        if line.startswith('|'):
            rows=[]
            while i<len(lines) and lines[i].strip().startswith('|'):
                row=[x.strip() for x in lines[i].strip().strip('|').split('|')]
                if not all(re.fullmatch('[-: ]+',x) for x in row):rows.append([para(x,'CellReport') for x in row])
                i+=1
            width=A4[0]-76
            widths=[width*.08,width*.35,width*.25,width*.12,width*.20] if len(rows[0])==5 else [width/len(rows[0])]*len(rows[0])
            t=Table(rows,colWidths=widths,repeatRows=1,hAlign='LEFT')
            t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#e0f2f1')),('VALIGN',(0,0),(-1,-1),'TOP'),('GRID',(0,0),(-1,-1),.3,colors.HexColor('#cbd5e1')),('LEFTPADDING',(0,0),(-1,-1),5),('RIGHTPADDING',(0,0),(-1,-1),5),('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),5)]))
            flow += [t,Spacer(1,10)];continue
        if line.startswith('### '):flow.append(para(line[4:],'Heading3'))
        elif line.startswith('## '):flow.append(para(line[3:],'Heading2'))
        elif line.startswith('# '):flow.append(para(line[2:],'Heading1'))
        else:flow.append(para(line))
        i+=1
    return flow

index=['# AI work innovation - report index','', 'Verdict: **REFRAME**. Next workflow: **Advisor**, focused on the existing business and validation gate.', '', 'This is completed desk research with conditional gates, not validated customer demand. No customer tests or builds were run.','']
for key,(title,body) in docs.items():
    body=body.replace('{{PROBLEM_SCORES}}',pt).replace('{{MECHANISM_SCORES}}',mt).replace('{{CONCEPT_SCORES}}',ct)
    control=f'# Step {key.split("_")[0]} - {title}\n\nRun: {RUN}. Version: 1.0. Method: IDEATION v0.2. Owner: Nadav / Codex. Date: 2026-09-06. Status: final desk-research artifact. Boundary: professional AI workflow improvement; no deployment or customer testing. Inputs: source handoff, source register and prior steps in this run.\n\n'
    content=control+body+'\n\n'+SOURCES
    (ROOT/(key+'.md')).write_text(content)
    pdf=ROOT/'outputs'/('ai_work_step_'+key+'.pdf')
    if key!='5_5_architecture':
        cover=[Spacer(1,65),para('AI WORK / INNOVATION','Heading2'),para(title,'Title'),Spacer(1,18),para(RUN),para('IDEATION v0.2 | 6 September 2026'),Spacer(1,20),para('Evidence-led exploration of the Personal AI Work Coach / AI Workflow Transformation opportunity.'),para('Research complete. Commercial evidence gates remain conditional.'),PageBreak()]
        SimpleDocTemplate(str(pdf),pagesize=A4,rightMargin=38,leftMargin=38,topMargin=36,bottomMargin=40).build(cover+body_flow(content),onFirstPage=footer,onLaterPages=footer)
    index.append(f'- [{title}]({key}.md) | [PDF](outputs/{pdf.name})')

# Landscape architecture: one page, all mechanism rows, readable rating key.
from reportlab.pdfgen import canvas
ap=ROOT/'outputs'/'ai_work_step_5_5_architecture.pdf'
c=canvas.Canvas(str(ap),pagesize=landscape(A4)); W,H=landscape(A4)
c.setFillColor(colors.HexColor('#123457'));c.rect(0,H-82,W,82,fill=1,stroke=0)
c.setFillColor(colors.white);c.setFont('Helvetica-Bold',21);c.drawString(28,H-35,'Product opportunity architecture')
c.setFont('Helvetica',9);c.drawString(28,H-56,RUN+' | Conditional kernel, not validated paid demand')
rows=[['Problem / cause','Mechanism','Raw ratings*','Disposition'],['P02 / RC01 ownership','M01 implement + owner','5 / 3 / 2 / 5 / 3 / 4','STRONG KEEP'],['P03 / RC02 acceptance','M02 baseline + acceptance','5 / 3 / 3 / 4 / 5 / 4','CORE KEEP'],['P01 / RC03 economics','M03 workflow selection','4 / 1 / 2 / 5 / 3 / 4','ENABLER'],['P04 / RC04 exceptions','M04 supervision + fallback','4 / 2 / 2 / 5 / 3 / 4','ENABLER'],['P05 / RC05 retest record','M05 manual version ledger','4 / 2 / 2 / 4 / 4 / 3','INFRASTRUCTURE'],['P05 / RC05 retest record','M06 scanner / twin','3 / 1 / 1 / 2 / 5 / 1','DEFER'],['P04 / RC04 exceptions','M07 agent routing / migration','4 / 2 / 2 / 3 / 4 / 2','DEFER'],['P02 / RC01 ownership','M08 course / capability graph','2 / 1 / 1 / 5 / 2 / 4','REJECT AS CORE']]
t=Table([[para(x,'CellReport') for x in r] for r in rows],colWidths=[210,235,170,170],rowHeights=30)
t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#e0f2f1')),('GRID',(0,0),(-1,-1),.4,colors.HexColor('#cbd5e1')),('VALIGN',(0,0),(-1,-1),'MIDDLE')]))
t.wrapOn(c,W,H);t.drawOn(c,28,H-365)
c.setFillColor(colors.HexColor('#25344a'));c.setFont('Helvetica',9)
c.drawString(28,H-386,'*1-5, higher favorable: problem fit / evidence / whitespace / feasibility / leverage / risk manageability.')
c.setFillColor(colors.HexColor('#e0f2f1'));c.roundRect(28,91,W-56,100,8,fill=1,stroke=0)
c.setFillColor(colors.HexColor('#123457'));c.setFont('Helvetica-Bold',13);c.drawString(42,169,'KERNEL -> PC01: existing AI Value Sprint, with explicit acceptance evidence')
c.setFont('Helvetica',10);c.drawString(42,146,'Select -> baseline -> configure -> comparable runs -> accept/fix -> operator handoff')
c.drawString(42,127,'M01 + M02 + M04, enabled by M03 and manual M05. Scanner and autonomous migration excluded.')
c.setFont('Helvetica',8);c.drawString(28,70,'Evidence: EV03 local delivery/baseline gap; EV06 METR measurement limits; EV07 agent guidance; EV08/09 competition.')
c.drawString(28,56,'Sources and exact URLs: Step 5 evidence register. ASM01/02/04 (buyer pain, payment, approved data) remain unresolved.')
c.drawString(28,42,'Gate: CONDITIONAL PASS for an experiment specification. Root causes are locally plausible hypotheses, not proven general causes.')
c.showPage();c.save()
(ROOT/'README.md').write_text('\n'.join(index)+'\n\n- [Scores and sensitivity](scores.csv)\n- [Run manifest](manifest.md)\n- [Source and evidence register](sources.md)\n- [Architecture PNG](outputs/ai_work_step_5_5_architecture.png)\n')
(ROOT/'sources.md').write_text(SOURCES)
manifest=f'''# Run manifest
Run: {RUN}. Methodology: IDEATION v0.2, read from Nadav Builder OS/01-Agentic-OS/Workflows/IDEATION v0.2.md. Owner: Nadav / Codex. Date: 2026-09-06. Status: generated; visual QA pending.
Boundary: research of professional work improvement; no live tests, publication, purchases, outreach or build.
Source snapshot: source-handoff.txt and sources.md; all changing facts accessed 2026-09-06. Prior Storm/Red Team are represented by the user's handoff, not independently rerun.
Registry: README.md links all nine editable step artifacts and PDFs, including 5.5 landscape map. Scores: scores.csv. Stable short IDs in every file are scoped to {RUN}. Evidence and risk meanings are in sources.md.
Gates: Step 1 PASS; Step 2 CONDITIONAL PASS; Step 3 CONDITIONAL PASS; Step 4 PASS; Step 5 CONDITIONAL PASS; Step 5.5 CONDITIONAL PASS; Step 6 CONDITIONAL PASS; Step 7 CONDITIONAL PASS; Step 8 CONDITIONAL PASS. No paid-demand or software-build gate passed.
DEC01: CONDITIONAL GO for service validation; Innovation verdict REFRAME. Research request completed after QA; recommended next workflow Advisor, not dispatched. Current authorization covered research and advice. Downstream commercial action remains a recommendation, with actual customer agreement required for a pilot.
Handoff owner, hypotheses, constraints, time/cost bounds, success/kill/strong-GO gates and stopping rule: 8_decision_handoff.md. Current repo's EXD-026 gate remains 2026-09-11 or ten calls. Recorded call count read today: zero; unlogged activity unknown.
Retrospective: local offer reconciliation changed the recommendation from a possible new venture to a measured version of an existing service. Do not treat this as evidence that no software business exists. Next calibration compares these frozen E0 scores with payment, total founder hours, accepted-output costs and actual repeat purchases. No workflow-method update or automation authorized.
'''
(ROOT/'manifest.md').write_text(manifest)
for p in sorted((ROOT/'outputs').glob('*.pdf')):
    reader=PdfReader(p)
    print(p.name,len(reader.pages),'pages')
    assert all(len(page.extract_text().strip())>40 for page in reader.pages)
