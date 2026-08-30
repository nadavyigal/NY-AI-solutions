# Landing Page Plan

Last updated: 2026-08-30. Assessed against
[../service/value-proposition.md](../service/value-proposition.md).

## Where the page stands

The live page and the 2026-08-16 rewrite are on message. "Start from the
business, not the technology", "you do not need to become AI experts", mapping
before building: all correct, and better written than most of this category. The
lead form already asks the two questions that matter (which AI tools you pay
for, which workflow hurts), which makes it a working step-1 intake.

Four gaps stand between the page and a fit call.

## Gap 1: the privacy wedge is missing entirely (highest impact)

For an insurance agency or a law firm, the blocking question is "where does my
client's data go". The page never answers it, and it is the one claim a generic
competitor cannot copy.

**Add a section, above the capabilities list:**

- The rule, plainly: identifying client data does not enter the model. Aliases
  in; identities re-attached by you, offline, at the send step.
- That the architecture is designed before any automation is built.
- That the most sensitive workflow gets an assistant connected to nothing.
- Where the judgement comes from: 12 years running an insurance agency plus
  banking risk work.

Suggested heading: **המידע של הלקוחות שלכם לא נכנס ל־AI.**

This is the highest-value change on the page.

## Gap 2: no named first purchase

A visitor cannot tell what buying looks like. There is no offer, no shape, no
duration. "Contact me" is the only path, which is a big step from a cold read.

**Add an offer block:** the AI Value Sprint, 7 to 10 business days, with the five
concrete deliverables from [../service/offer.md](../service/offer.md), ending on
"one workflow working, not a slide deck". No price.

Ahead of it, name the free step: a 30 to 45 minute fit call whose output is a
named workflow worth mapping, or an honest no.

## Gap 3: the capabilities list widens the promise back out

Ten capabilities ending with custom iOS app development reads as "I do all AI
things", which undoes the niche the rest of the page builds. A buyer who cannot
tell what you are for assumes you are for someone else.

**Cut to four or five**, all workflow-shaped and all in the language of a
professional-services firm. Move iOS product development to a single proof line
under the shipped apps, where it belongs as evidence of building ability rather
than as a service on the menu.

## Gap 4: proof is capability-shaped, not evidence-shaped

Two app logos prove you can build. They do not prove you can change how a
business works.

**Add the anonymised engagement**, three sentences: a solo professional-services
practice, an operating system built entirely on the entry-tier subscription she
already paid for, with a privacy architecture where no client-identifying data
ever reaches the model. No ROI number, because no baseline was measured. Say
that too. Naming the limit is what makes the claim believable.

## Also worth doing

- `/benefits` exists in the code but has never been deployed. Either link it
  from the homepage as the "why bother" page or delete the route.
- One conversion goal per page. Today the WhatsApp form is the only action,
  which is right. Keep it that way and repeat it after the offer block.
- Add the fit-call framing next to the form: what happens on the call, how long,
  and that it ends with a named workflow or an honest no.

## Order of work

| # | Change | Effort | Why now |
|---|---|---|---|
| 1 | Privacy section | 1 hour | The blocking objection for the target segment |
| 2 | Offer block plus fit-call framing | 1 hour | Turns a reader into a caller |
| 3 | Cut capabilities to five | 20 min | Restores the niche |
| 4 | Anonymised engagement proof | 30 min | Evidence, not capability |
| 5 | Resolve `/benefits` | 20 min | Two weeks of finished work is invisible |

Three hours of work in total. Do it in one sitting, deploy, then stop building
and start calling. The EXD-026 gate is measured in conversations, not pages.
