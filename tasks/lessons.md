# NY AI Solutions: Lessons

## Finished work sat undeployed for two weeks

The 2026-08-16 rewrite and the `/benefits` route were written, never committed,
and therefore never deployed. The live site served the launch version the whole
time. A repo with only a vendor deploy remote and no habit of committing makes
this invisible.

## A gate with no record counts as zero, not as unknown

EXD-026's gate is ten fit calls. No log existed, so nothing could be counted and
the gate quietly stopped being real. A gate needs the artifact that counts it,
created at the same time as the gate.

## Build the record of an engagement while it is running

The Michal engagement's most valuable output for the practice was its method
lessons, and they had to be reconstructed weeks later from planning documents.
Write the retro as the engagement runs.

## No baseline means no claimable outcome

The first full engagement never recorded hours, manual steps or handoffs before
the change, so no improvement can be stated as a number. Baseline capture is now
a required step-3 artifact.

## A timeout wrapper must prove that it started the child process

In the Codex shell, `npm`, `npx` and `node` were absent from `PATH`. The packet's
`perl -e 'alarm 300; exec @ARGV' <cmd>` wrapper therefore returned immediately
with no output and a misleading zero exit status, and its alarm did not stop a
child launched by absolute path. Use the bundled Node executable directly and
verify child output or process state before treating a bounded check as a pass.
