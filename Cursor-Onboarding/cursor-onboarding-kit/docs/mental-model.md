# Mental Model: How to Think with Cursor

This doc is the single source of truth for how we expect you to use Cursor. It applies to setup, examples, the workshop, and day-to-day use.

## What Cursor Is

- **A powerful AI-enabled coding environment.** Cursor helps you write, summarize, debug, and understand code faster by combining your editor with AI assistance.

## What Cursor Is Not

- **Autopilot.** Cursor does not replace your judgment. It suggests and generates; you decide what to accept, change, or reject. You are responsible for the code that ships.

## Your Responsibilities

When using Cursor, you are responsible for:

1. **Verifying logic** — Does the generated code do what you intend? Does the reasoning hold up?
2. **Validating outputs** — Run tests, spot-check results, review diffs before committing.
3. **Applying appropriate guardrails** — Know what not to send to Cursor (sensitive information, e.g. credentials or PII); understand your company’s policy on AI tools and permissions.

## When to Trust Cursor

- Boilerplate, scaffolding, and obvious refactors when the change is small and easy to verify.
- Summarization and explanation of code you can then verify by reading.
- Repetitive edits that follow a clear pattern you can review.

(To be refined in Week 4 with team and [prompts.md](prompts.md).)

## When to Double-Check

- Security-sensitive code (auth, permissions, sensitive information).
- Logic that affects money, compliance, or safety.
- Complex or subtle behavior where bugs are hard to spot.
- Anything you would normally have a second pair of eyes on.

(To be refined in Week 4.)

## How to Validate Generated Code

- **Run tests** — If the project has tests, run them after applying Cursor’s changes.
- **Review the diff** — Don’t accept large changes without reading what changed.
- **Spot-check behavior** — Run the app or script with a few inputs; confirm edge cases if it matters.
- **Check permissions and context** — Ensure Cursor didn’t suggest sending or logging data you don’t want to expose.

## Safe vs Unsafe Usage

- **Safe:** Using Cursor for summarization, debugging, and understanding code in a sandbox or non-sensitive repo; validating all output before commit; following company policy on what can be sent to AI.
- **Unsafe:** Pasting sensitive information (e.g. credentials, PII) into Cursor; accepting generated code without review in critical paths; assuming Cursor’s output is correct without verification.

## Where This Applies

- **First run:** Read this doc as part of [setup](setup.md#first-run-checklist).
- **Examples:** Each workflow in [examples/](../examples/) includes a “when to double-check” or validation step.
- **Troubleshooting:** When something goes wrong, see [troubleshooting](troubleshooting.md#understanding-what-went-wrong) (user error vs context vs Cursor limitations).
- **Workshop:** The live session reinforces this mental model and links back here.

---

**Last updated:** _______________
