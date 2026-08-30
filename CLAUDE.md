# CLAUDE.md: NY AI Solutions

AI consulting for Israeli professional-services businesses, 10 to 100 employees.
This repo holds both the public site and the practice: offer, method, and the
toolkit used in engagements.

Read [docs/agent-os/project-context.md](docs/agent-os/project-context.md) first,
then [docs/service/value-proposition.md](docs/service/value-proposition.md).

## Non-negotiable

1. **No client PII in this repository, ever.** Retros are anonymised. Identifying
   detail stays offline.
2. **`git push sites` publishes the live site.** `git push origin` does not.
   Never deploy without an explicit instruction in the current message.
3. **No ROI claim without a measured baseline** on both sides of the change.
   This applies to the site copy, proposals and reports alike.
4. **Every proposed client workflow carries a privacy path** before it is
   proposed: what the model sees, what it never sees, where identity is
   re-attached.
5. **No published pricing** before real client patterns exist (EXD-026).
6. Update `tasks/progress.md` after every commit.

## The trap this practice keeps falling into

Building assets instead of having conversations. EXD-026's gate is measured in
fit calls. If a request would add another artifact while the fit-call count is
still zero, say so before doing it.
