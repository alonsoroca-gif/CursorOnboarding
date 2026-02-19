# PM Core Features — Competitive Advantage Brainstorm

> **Status:** Brainstorm only. No implementation yet. Use this doc to explore how to level up the four PM core features so PMs gain a real competitive advantage.  
> **Origin:** Current PM onboarding covers Chat (drafting), Composer (multi-part edits), Reading code/PRs, and Mental model. This doc asks: what would make those features a **differentiator** for our PMs and our org?  
> **Intent:** Prioritize improvements (content, tooling, rules, or workflows) that help PMs ship better specs faster, align with engineering without extra meetings, and use the repo as a first-class source of truth.

---

## Goal (recap)

Take the four accepted PM features from “you can do this in Cursor” to “you can do this in a way that gives our team an edge”: faster, more consistent, and better connected to code and tickets.

---

## Competitive advantage: what does it mean here?

- **Speed:** Specs and updates in hours instead of days; summaries and ticket copy without context-switching.
- **Consistency:** Same structure, tone, and terminology across specs and docs so engineering and stakeholders know what to expect.
- **Alignment:** Specs and tickets that reference the actual repo (files, PRs, decisions) so there’s one source of truth and less “what did we agree on?”
- **Leverage:** PMs spend less time on boilerplate and more on strategy, customer feedback, and prioritization.

Below we brainstorm improvements **per core feature** and then **cross-cutting** ideas.

---

## 1. Chat for drafting and editing — level up

**Current:** PMs use Chat to draft sections (e.g. Risks and mitigations, Success metrics), with prompts that ask for repo context and follow-up edits.

**Ideas for competitive advantage:**

| Idea | What it is | Why it helps |
|------|------------|--------------|
| **Company spec rules** | A shared “PM rules” set (e.g. in `.cursorrules` or Rules for AI) that defines our spec structure, section names, and tone (e.g. “write for engineers and stakeholders; avoid jargon”). | Every draft follows the same template and voice without the PM re-prompting. |
| **“Write like our product”** | Rules or prompts that reference our product voice (e.g. from existing PRDs or marketing copy) so drafts match how we already communicate. | Customer-facing or stakeholder-facing sections feel on-brand from the first draft. |
| **Spec-from-repo prompts** | Standard prompts like “Draft the Problem and Scope for this feature using only what’s in this repo (README, ADRs, open issues).” | Specs are grounded in reality; less drift between doc and code. |
| **Structured follow-up** | Teach PMs to always add “Suggest what I should customize for this project and ask what I want to change next.” (Already in onboarding; reinforce with a one-click or saved prompt.) | Reduces “generic template, you fill it” and increases iteration in one thread. |
| **Library of prompt starters** | Curated list: “Draft acceptance criteria from this ticket,” “Turn this PR description into release notes,” “Risks and mitigations from repo context.” | Lowers friction; new PMs get good results without inventing prompts. |

**Possible deliverables:** (a) A “PM rules” block or file we can add to repos or Rules for AI. (b) A short “Prompt starters for PMs” doc or extension command that inserts these prompts into Chat.

---

## 2. Composer for multi-part edits — level up

**Current:** PMs use Composer (Cmd+I) to add sections, restructure headings, or standardize format across a doc or a few files; they review the diff before accepting.

**Ideas for competitive advantage:**

| Idea | What it is | Why it helps |
|------|------------|--------------|
| **Spec structure at scale** | One Composer request to “Add section X to every spec in this folder” or “Make all specs in `docs/specs/` start with Summary, Problem, Scope, Success metrics, Risks.” | Entire doc sets stay consistent without manual copy-paste. |
| **Template rollout** | “Apply our standard spec template to this doc (add missing sections, keep existing content under the right headings).” | New specs and legacy docs converge on the same structure. |
| **Cross-doc consistency** | “Use the same terminology as in `prd-foo.md`” or “Align section names with our template in `docs/templates/spec-template.md`.” | Naming and structure align across PRDs, specs, and tickets. |
| **Bulk heading/format rules** | “Make all ## headings in this folder follow ‘## Section name’ (no extra punctuation).” | Small but visible consistency that builds trust in “our docs.” |
| **Composer + PM rules** | Composer already sees project rules; ensure PM rules (tone, section list) are in scope so multi-file edits respect them. | Edits stay on-structure and on-voice without the PM editing every file by hand. |

**Possible deliverables:** (a) A “Spec template” file and a single Composer prompt we document (“Apply this template to the open doc”). (b) A short “Composer recipes for PMs” (3–5 repeatable requests) in the onboarding or a follow-up doc.

---

## 3. Reading code and PRs — level up

**Current:** PMs open a file or PR, ask Chat to summarize (e.g. “What does this file do?” or “What changed in this PR?”), and use the summary in a ticket or conversation.

**Ideas for competitive advantage:**

| Idea | What it is | Why it helps |
|------|------------|--------------|
| **“Impact for PM” framing** | Prompt library: “Summarize this PR in plain language and list 1–3 things a PM should know (e.g. user-facing change, config change, breaking change).” | Summaries are immediately useful for release notes, stakeholder updates, and prioritization. |
| **PR → ticket description** | Standard prompt: “Turn this PR into a short ticket description (what shipped, why it matters for the product).” PM pastes into Jira/Linear/GitHub. | Tickets stay in sync with what actually shipped; less “what was in that PR?” |
| **Release notes from PRs** | “Given these N PRs (or this branch), draft release notes bullets for PM review.” | Faster release notes; PM edits instead of starting from scratch. |
| **Repo overview on demand** | “Summarize this repo for a new PM: what it does, main entry points, and where specs/docs live.” | Onboarding and handoffs are faster; one source of truth. |
| **Spot-check with engineer** | Mental model already says “summarization of code you can spot-check with an engineer.” Make it explicit: “Use this summary to prepare one or two questions for the engineer” so the conversation is focused. | Better PM–eng alignment without long meetings. |

**Possible deliverables:** (a) “Reading code/PRs” prompt starters (including “Impact for PM” and “PR → ticket description”) in the PM onboarding or a cheat sheet. (b) Optional: a lightweight “PM summary” rule that the AI uses when the open file is a PR or code (e.g. “When summarizing for a PM, include: user-facing impact, config/breaking changes, and suggested follow-up questions”).

---

## 4. Mental model — level up

**Current:** Verify outputs, protect sensitive info, know when to double-check; applies to specs, PRDs, tickets, and code summaries.

**Ideas for competitive advantage:**

| Idea | What it is | Why it helps |
|------|------------|--------------|
| **Escalation rules** | Short checklist in the mental model: “When to loop in Legal/Compliance/Eng: customer-facing copy, SLA or pricing wording, security or data handling.” | Reduces risk and gives PMs a clear “when in doubt, ask” list. |
| **Quality bar by audience** | “Internal draft = review for sense. External or customer-facing = double-check tone and facts; consider second pair of eyes.” | PMs know where to invest review time. |
| **Preserve existing decisions** | Align with top-10-features: “When editing a spec, preserve existing decisions and scope unless the prompt explicitly asks to change them.” (Could be a PM rule.) | Avoids accidental overwrites of agreed scope; matches engineering’s “preserve existing logic” need. |
| **Traceability** | Encourage “after you accept a draft, add one line: ‘Context: generated with Cursor, reviewed by [you], date.’” Optional: link to the repo or PR the summary came from. | Audit trail and clarity for stakeholders. |

**Possible deliverables:** (a) One extra “Mental model” subsection or a short “PM responsibilities” doc that includes escalation and quality bar. (b) A single PM rule: “When editing specs, preserve existing scope and decisions unless the user asks to change them.”

---

## 5. Cross-cutting: PM rules and workflows

**Reference:** For how `.cursorrules` and `.cursorignore` work in Cursor, see [Cursor Rules / Guidelines](cursor-rules-guidelines.md).

| Idea | What it is | Why it helps |
|------|------------|--------------|
| **PM-specific rules** | A `.cursorrules` (or Rules for AI) block for “PM mode”: our spec structure, tone, and “preserve existing decisions when editing.” Option: same extension idea as Entrata rules but for “PM / product spec” rules. | Chat and Composer both behave in a way that matches how we work. |
| **Specs as source of truth** | Document and reinforce: “Our specs live in the repo; Cursor uses them as context. When you draft or edit, reference the repo and open docs.” | Reduces duplicate or conflicting sources of truth. |
| **Metrics we can track** | Time to first draft, time to “spec ready for eng,” number of back-and-forths. (Might be manual at first: “How long did it take?” in a survey or retro.) | Shows whether the improvements actually create advantage. |
| **Integration with tickets (future)** | Conceptual: “Copy summary to Jira” or “Create ticket from PR” as a documented workflow (paste from Cursor today; later, an integration could automate). | Keeps tickets and code/PRs aligned without leaving Cursor. |

---

## Open questions

| Question | Notes |
|----------|--------|
| Who owns “PM rules” content? | Product ops, lead PM, or the team that owns the spec template. Need a single owner to keep rules and prompts up to date. |
| Where do PM rules live? | Repo-level `.cursorrules`, global Rules for AI, or (like Entrata) an extension that applies them. Depends on whether PMs work in one repo or many. |
| How do we avoid overwhelming PMs? | Start with 1–2 prompt starters and one “PM rules” block; expand based on usage and feedback. |
| How do we measure “competitive advantage”? | Qualitative (PM and eng satisfaction, “specs are clearer”) and, if possible, simple quantitative (time to draft, number of spec iterations before handoff). |

---

## Next steps (when we’re ready)

1. **Decide scope:** Pick one area first (e.g. “Chat + prompt starters” or “PM rules block”) so we don’t boil the ocean.
2. **Get PM rules content:** Who defines our spec structure, section names, and tone? Get that into a single doc or block we can turn into Cursor rules.
3. **Add “Prompt starters for PMs”:** Short doc or extension command with 5–10 prompts (draft risks, PR → ticket, release notes, etc.) and link from PM onboarding.
4. **Extend mental model:** Add escalation and quality-bar bullets to the PM onboarding mental model (or a linked doc).
5. **Pilot and measure:** Run the improved flow with 2–3 PMs; ask “How long did the first draft take?” and “What would you change?” then iterate.

---

**Last updated:** Brainstorm draft. No implementation yet.
