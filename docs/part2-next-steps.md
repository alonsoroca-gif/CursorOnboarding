# Part 2 — Where We Left Off & Next Steps

**Last updated:** When Part 1 (webpage) was confirmed working on Vercel and focus shifted to Part 2.

---

## Current status

- **Part 1 (webpage):** Done and live. Users see steps 1–4 (Welcome → Prerequisites → Download → Install) plus the handoff step “Continue in Cursor” that tells them to run **Cursor Setup: Start onboarding chat** in Cursor.
- **Part 2 (in-Cursor):** Scaffold exists. The Cursor Setup extension runs the command and opens Chat with a starter prompt (or offers “Copy starter prompt”). The flow is meant to guide sign-in → smoke test → mental model → “you’re set.”

---

## Where the Part 2 code lives

| What | Where |
|------|--------|
| Extension (command + starter prompt) | `cursor-setup-extension/` (root of this repo) |
| Extension entry + command | `cursor-setup-extension/src/extension.ts` |
| Part 2 context / suggested prompts | `cursor-setup-extension/src/setup-context.ts` |
| How to run & install | `cursor-setup-extension/README.md` |
| Brainstorm / design for Part 2 | `docs/setup-chat-in-cursor-brainstorm.md` |

---

## Suggested next steps for Part 2

1. **Run the extension locally**  
   Open `cursor-setup-extension` in Cursor, press **F5** (Start Debugging), then in the new window run **Cursor Setup: Start onboarding chat** and confirm Chat opens and the starter prompt appears (or “Copy starter prompt” works).

2. **Refine the starter prompt**  
   Edit the prompt in `extension.ts` so the first Chat message clearly leads users through: sign-in → smoke test → mental model → next steps. Reuse or link to `setup-context.ts` content if helpful.

3. **Optional: rules / @-mentions**  
   If you want the onboarding to use Cursor rules or a specific @-context, add that (e.g. a rule that injects Part 2 steps when the user runs the command or mentions “setup”).

4. **Package & share (optional)**  
   When ready: `npm run compile` then `npx @vscode/vsce package` in `cursor-setup-extension` to build a `.vsix` so others can install without opening the repo.

5. **Docs**  
   Keep the main README and `cursor-setup-extension/README.md` in sync with any changes (e.g. how to get the extension, where Part 1 vs Part 2 live).

---

## Quick commands to continue

```bash
# From repo root (cursor-onboarding-kit)
cd cursor-setup-extension
npm install
npm run compile
# Then in Cursor: open this folder, F5 to launch Extension Development Host, run "Cursor Setup: Start onboarding chat"
```

---

When you’re back, open this file and the extension folder; you can pick up from the list above.
