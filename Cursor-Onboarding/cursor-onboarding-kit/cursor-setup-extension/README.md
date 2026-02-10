# Cursor Setup Extension

**Part 2 of Cursor onboarding** — sign-in, smoke test, mental model, and "you're set." This extension starts the onboarding flow inside Cursor's Chat so you learn the tool where you'll use it.

## What it does

- **Command:** `Cursor Setup: Start onboarding chat`
- **Action:** Opens Cursor's Chat and (when possible) inserts a starter prompt so the AI guides you through Part 2 (sign-in → smoke test → mental model → next steps). If Chat doesn't open with the prompt, you'll get a **Copy starter prompt** option so you can paste it into Chat yourself.

## When to use it

After you've completed **Part 1** on the webpage (download and install Cursor). Once Cursor is open, run this command to continue inside Cursor.

## How to run

1. Open the **Command Palette**: `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux).
2. Run: **Cursor Setup: Start onboarding chat**.

## How to install (local / from repo)

1. Open this folder in Cursor (or VS Code): `cursor-setup-extension`
2. Press `F5` or use **Run > Start Debugging** to launch a new window with the extension loaded. In that window, run the command from the Command Palette.

**Or install as a VSIX (for sharing):**

1. Install dependencies: `npm install`
2. Compile: `npm run compile`
3. Package: `npx @vscode/vsce package` (requires `npm i -g @vscode/vsce`)
4. Install the generated `.vsix` in Cursor: **Extensions** → **...** → **Install from VSIX**

## Part 2 steps (what the Chat will guide you through)

1. **Sign in** — Work email or SSO; **#ask-it** if sign-in fails.
2. **Verify AI works** — Smoke test (e.g. open a file, ask Chat to summarize a paragraph).
3. **Read the mental model** — Verify, validate, guardrails; when to trust vs double-check.
4. **You're set** — Links to troubleshooting, examples, prompts; **#ask-it** for help.

## Suggested prompts (try these in Chat after the first reply)

- "I've signed in — what's next?"
- "How do I run the smoke test?"
- "Explain the mental model in a few sentences."
- "I'm done with the steps — what should I do next?"

---

Part 1 (download & install) lives on the **webpage** ([setup-chat.html](../docs/setup-chat.html)). This extension is Part 2 only.
