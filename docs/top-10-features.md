# Top 10 Cursor Features to Focus On

> **Status**: Updated with Google Forms (team) responses. This list drives the setup guide, examples, and workshop.

This doc records the **top 10 Cursor features** derived from team form responses and interviews. Use it as the single source of truth for what to emphasize and what to change in setup and further steps.

---

## 1. Google Forms responses (team)


**Sample size:** 5 responses.

| Question | Metric / Data points |
|----------|------------------------|
| **1. Current Cursor usage** | 40% Sometimes, 40% Haven't tried yet, 20% Rarely. (Note: 0% Daily usage in this sample.) |
| **2. Projects built/planned** | Use cases include: source of truth documentation, building AI agents. |
| **3. Do specs provide enough detail?** | 100% Yes (among active users). Specs are currently sufficient for engineering implementation. |
| **4. What users like** | Deep repo understanding; ability to suggest and code across multiple files automatically. |
| **5. Challenges / tricky areas** | General lack of experience; users feel they need more "hands-on" time to identify specific friction points. |
| **6. Explaining to teammates** | Defined as a tool that "helps write software quickly" and automates file-wide changes via prompts. |
| **3. Tools used instead** | 50% Figma/Make, 50% V0. |
| **4. Frustrations** | Prompt overwrite: requirements in secondary tools (e.g. specCatalyst) changing finalized V0 designs. |
| **4. Engineering gaps** | Coding standards: disconnect between Cursor's output and internal company (Entrata) standards, requiring manual correction. |
| **6. Concerns** | Lack of programming knowledge; inability to pinpoint technical gaps to assist developers. |
| **Onboarding preferences** | Step-by-step setup guide: 1 vote. Real workflow examples: 1. Live workshop/demo: 1. Video walkthrough: 1. (Each option had the same amount of votes in this sample.) |

**Synthesis:** Low daily usage and many "haven't tried yet" → setup and first-run experience are critical; emphasize hands-on, low-friction path. Top pull: deep repo understanding and multi-file suggestions. Use cases: docs as source of truth, AI agents. **Note:** "Specs" in the form = company/product/engineering specs (requirements, tickets), not Cursor product specs. Clarity between PM and engineering is not framed as a gap to close in this onboarding.

**Key takeaways for coding/workflow:**
- **Standardization is the biggest hurdle:** To improve the "engineering gap," consider creating a `.cursorrules` file in your repository to define the specific coding standards (e.g. Entrata standards) so the AI doesn’t require as much manual correction.
- **Prompt persistence:** Non-users are frustrated by tools changing their "finalized" designs. When coding, ensure your prompts explicitly state to **"preserve existing logic/design"** unless otherwise specified.

**Glossary / notes:**
- **Source of truth documentation:** A single, authoritative place (doc, repo, or system) that defines how something should be — e.g. API contracts, coding standards, or product requirements. The form use case "source of truth documentation" means using Cursor to help create or maintain that kind of documentation.
- **Action:** Ask Billy about the gap between Cursor output and Entrata guidelines (what those guidelines are); then we can set a `.cursorrules` with Entrata standards.

**KEY — Make Cursor think like Entrata guidelines.**  
Goal: have Cursor already format and write code the way Entrata expects, so it saves time and reduces manual correction. We **configure Cursor** by putting Entrata's standards into a **`.cursorrules`** file in the repo (or via Cursor's "Rules for AI" in settings). Cursor then uses those rules when generating or editing code.

**Extension idea — automatic Entrata rules instead of referring to a doc:**  
Creating a **Cursor extension** that automatically applies Entrata rules (so users don’t have to open a separate doc or copy `.cursorrules` into every repo) is a good direction. Options: (1) If Cursor’s extension API allows it, the extension could **contribute rules** so Entrata is applied as soon as the extension is enabled. (2) Otherwise, the extension could add a command like **“Apply Entrata rules to this workspace”** that creates or updates `.cursorrules` from a bundled or central source — one click instead of referring to a doc. Either way, the goal is “Cursor already thinks Entrata” without always pointing people to another document. Full brainstorm (how it works, how to build it, MVP, open questions): [entrata-extension-brainstorm.md](entrata-extension-brainstorm.md). Next step: get Entrata guidelines (e.g. from Billy); then either add them to a shared `.cursorrules` template or scope an extension that applies them.

---

## 2. Top 10 Cursor features (prioritized for our team)

*1–4 from Interview #1; 5–10 derived from Google Forms (5 responses).*

| # | Feature | Why it matters for us |
|---|---------|------------------------|
| 1 | **Code summarization** (SQL, Node.js) | High-value use case; faster understanding of complex logic. |
| 2 | **Debugging and logic analysis** | 4–8x time savings reported; primary daily use. |
| 3 | **Understanding complex or unfamiliar codebases** | Reduces ramp-up time; form: "deep repo understanding" is a top like. |
| 4 | **Identifying potential bugs and edge cases** | Complements debugging; improves code quality. |
| 5 | **Multi-file code suggestions and edits** | Form: "suggest and code across multiple files"; "automates file-wide changes via prompts." |
| 6 | **Deep repo / codebase search** | Form: "deep repo understanding"; aligns with how team describes Cursor. |
| 7 | **Documentation as source of truth** | Form: use case "source of truth documentation." |
| 8 | **AI agents / agentic workflows** | Form: use case "building AI agents." |
| 9 | **Implementing from specs quickly** | Form: 100% said specs sufficient; Cursor helps turn specs into code. |
| 10 | **Quick iteration with Chat + prompts** | Form: "helps write software quickly"; low friction for "haven't tried yet" users. |

**Sources:** Interview #1 → [interview-notes.md](interview-notes.md); Google Forms (5 responses) → section 1 above.

---

## 3. Implications for setup and next steps

Use the top 10 and form synthesis as **indicators for what to change**. Form takeaway: **40% haven't tried yet** and users want **more hands-on time** — so reduce friction and show value fast (deep repo, multi-file changes, "write software quickly"). **Onboarding format:** In this sample each option had 1 vote (step-by-step, real examples, workshop, video); the kit already offers step-by-step and real examples. **Standardization** and **prompt persistence** (see synthesis above) should drive .cursorrules and prompt guidance in docs.

### Setup guide (`setup-chat.html` / `setup.md`)

- [ ] **Welcome / First run:** Mention 2–3 features by name: **Chat**, **multi-file edits** (Composer), **codebase understanding** so "haven't tried yet" users know what they're working toward.
- [ ] **Verify AI works (smoke test):** Keep current step; add one line: "Next: try a multi-file change or codebase search" with link to examples (form: multi-file and deep repo are top likes).
- [ ] **Mental model step:** No change; already teaches verify/validate/guardrails.
- [ ] **You're set / Next steps:** List example workflows that map to top 10: e.g. **Debugging**, **Code summarization**, **Docs as source of truth**, **Multi-file / Composer** with links to `examples/`.
- [ ] **Tone:** Emphasize "hands-on" and "try it" — form said users need more hands-on time to find friction.

### Examples (`examples/`)

- [ ] At least **3 of the 4** workflows should map to the top 10 (e.g. debugging, summarization, codebase understanding, multi-file edits, docs).
- [ ] Add or prioritize an example for **multi-file / Composer** (form: "file-wide changes via prompts") and **documentation** (source of truth).
- [ ] Each example README should state which top-10 feature it demonstrates.

### Workshop (`workshop/script.md`)

- [ ] **Demo:** Cover **top 5–7**: summarization, debugging, codebase understanding, multi-file edits, deep repo, docs, quick Chat iteration.
- [ ] **Hands-on:** Prioritize **hands-on** time (form: "need more hands-on to identify friction"); 1–2 exercises for Chat + multi-file or codebase search.
- [ ] **Q&A / feedback:** Ask "Which feature do you want to try first?" to validate the list and catch "haven't tried yet" needs.

### Docs and mental model

- [ ] **Troubleshooting:** Add note if "lack of experience" or "hands-on" friction appears in feedback (e.g. "First time using Cursor? Start with the smoke test and one example."). Expand FAQ with other actual first-time-user issues as we hear them.
- [ ] **Prompts / prompts.md:** Add starter prompts for top features; add **prompt persistence** principle: "preserve existing logic/design" unless otherwise specified (form: frustration with overwrites).
- [ ] **Coding standards / .cursorrules:** Add to setup or troubleshooting: create a `.cursorrules` file in the repo to define company standards (e.g. Entrata) so Cursor's output requires less manual correction (form: engineering gap).

## 4. How this is used (reference)

- **Setup guide:** Call out these features in “First run” and any “Try this” steps.
- **Examples:** At least 3 of the 4 workflows should use features from this list.
- **Workshop:** Demo and script should cover the top 5–7.

---

**Last updated:** After Google Forms (5 responses) synthesis.
