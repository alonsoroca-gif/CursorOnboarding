# Setup Guide as Didactic Chat Inside Cursor — Brainstorm

> **Status:** Direction chosen — **Option B**. Split agreed: **webpage (steps 1–4) + extension (steps 5–8)**. No implementation yet.  
> **Goal:** Onboarding split in two: (1) **Webpage** for everything until they **download and open Cursor** (steps 1–4). (2) **In-Cursor extension** (Option B) for everything after that — sign-in, smoke test, mental model, “you’re set” (steps 5–8). So users get to Cursor first via the page, then continue inside Cursor with the real Chat from minute 1.  
> **Reference:** Notion’s new AI chat — a sidebar in the same app with a welcome message, suggested prompts. We want the *in-Cursor* part of onboarding to feel like that.  
> **Chosen approach:** **Option B** — extension that starts a Cursor Chat conversation with setup context. New users get used to Cursor’s built-in Chat from minute 1; no duplicate UI.

---

## Split: Webpage (steps 1–4) + Extension (steps 5–8)

**Idea:** Don’t put everything in the extension. Split by “before Cursor” vs “inside Cursor.”

| Part | Where | Steps | Rationale |
|------|--------|------|-----------|
| **Part 1** | **Webpage** (e.g. setup-chat.html, same or simplified) | **1–4:** Welcome → Check prerequisites → Download Cursor → Install Cursor (and “Open Cursor” as the last action). | You can’t use a Cursor extension before Cursor is installed. The webpage is the right place for “get Cursor on your machine and open it.” Clear stopping point: “Open Cursor; we’ll continue inside.” |
| **Part 2** | **Extension in Cursor** (Option B: start Chat with context) | **5–8:** Sign in → Verify AI works (smoke test) → Read mental model → You’re set. | Once they’re in Cursor, the rest happens in Cursor Chat. They learn the real UI (Chat) from step 5 onward; no second tab, no context switch. |

**Handoff:** The webpage ends with a clear call-to-action: **“Cursor is installed. Open it, then run the onboarding chat inside Cursor”** — with a short line on how to run the extension (e.g. “Install the Cursor Setup extension and run **Cursor Setup: Start onboarding chat** from the Command Palette,” or a link to the extension). The extension’s “setup guide” Chat then starts at step 5 (sign-in, smoke test, mental model, you’re set).

**Why this reshape works:** (1) Logical: you need a browser to download Cursor; you need Cursor to use the extension. (2) Single handoff: “Open Cursor → run this command” is easy to remember. (3) The extension only needs to own “in-Cursor” steps, so the Chat context and suggested prompts stay focused (sign-in, smoke test, mental model). (4) We can keep the current webpage and trim it to steps 1–4 (or build a dedicated “pre-Cursor” flow) without redoing the whole thing.

---

## Why in-Cursor for part 2 (steps 5–8)?

- **Context:** User is already in Cursor (they opened it after step 4); no tab switching for sign-in, smoke test, mental model.
- **Stickiness:** Steps 5–8 happen in the same Chat they’ll use daily.
- **Didactic:** Conversational, with suggested prompts (“I’ve signed in — what’s next?,” “Run the smoke test,” “Explain the mental model”).
- **Single surface:** From step 5 on, “learn Cursor” and “use Cursor” are the same panel.

---

## What “didactic chat in the same dashboard” could look like

(Inspired by Notion’s AI chat sidebar.)

1. **Dedicated panel or chat mode** inside Cursor (sidebar or secondary view), not a separate browser window.
2. **Welcome / onboarding state:** e.g. “Welcome [Name]! This is your Cursor setup guide. We’ll walk you through install, sign-in, and your first check.”
3. **Suggested prompts or steps:** Buttons or chips like “Start setup,” “I’ve installed Cursor — what’s next?,” “Explain the mental model,” “Run the smoke test,” so users don’t have to type from scratch.
4. **Context-aware suggestions (optional):** e.g. if they have setup.md open, “Answer questions about this setup doc” or “Continue from step 3.”
5. **Conversational flow:** Either scripted (bot messages + choices) or real AI chat with the setup guide + mental model as context so answers stay on-brand and accurate.
6. **Input at the bottom:** User can type or pick a suggestion; responses appear in the same panel.

---

## How could we execute this? (options)

### Option A: Cursor extension with a “Setup guide” side panel (webview)

- **What:** Build a **Cursor (VS Code) extension** that adds a **side panel** (e.g. “Cursor Setup” or “Onboarding”). The panel is a **webview** that hosts a chat-like UI.
- **Content:** Reuse the **logic and copy** from our current setup flow (steps, mental model, smoke test, download links). Render it as a **guided chat** in the webview: welcome message, step-by-step messages, suggested replies (“Next,” “I did this,” “Explain X”), optional free-form input.
- **Where it runs:** Inside Cursor, same window. No external URL required (the webview can bundle the HTML/JS or load from an extension asset).
- **Pros:** Full control over UX; same dashboard; can look and behave like Notion’s chat (welcome, suggestions, thread). **Cons:** We maintain an extension; webview has some constraints (e.g. no direct access to Cursor’s Chat API from the webview unless we pass messages).

### Option B: Cursor extension that “starts” a Chat conversation with setup context ✅ CHOSEN

- **What:** Extension adds a **command** (e.g. “Cursor Setup: Start onboarding chat”). When run, it either:
  - **Opens Cursor’s built-in Chat** and injects a **system message or starter prompt** that puts the AI in “setup guide” mode (with our steps + mental model in the prompt or in Rules for AI), and optionally sends a first user message like “I’m new, walk me through setup,” or
  - Opens a **custom webview** that acts as a thin UI and **sends user messages to Cursor’s Chat API** (if Cursor exposes one) and displays responses.
- **Where it runs:** Uses Cursor’s native Chat panel, so it’s literally “didactic chat in the same dashboard.” The “guide” is the AI’s behavior + rules, not a separate app.
- **Why we chose it:** New users learn and use **Cursor’s real Chat** from minute 1 — no separate UI to maintain; they build the habit of using the same panel they’ll use every day. Single surface for “learn Cursor” and “use Cursor.”
- **Pros:** No duplicate chat UI; uses Cursor’s real AI; users get used to built-in features immediately. **Cons:** Depends on Cursor exposing a way to prefill or control Chat (e.g. extension API for “start chat with this context”); if not available, we fall back to Option A (webview) or investigate Option D (feature request).

### Option C: Hybrid — extension panel + Cursor Chat

- **What:** Extension shows a **sidebar panel** with the **scripted part** (welcome, step list, “Next” / “Back,” links to download, mental model summary) and a **short “Ask about setup”** input that either (1) opens Cursor Chat with a prefilled question, or (2) sends the question to Chat via API and shows the reply in the panel.
- **Where it runs:** Scripted flow in our panel; deeper Q&A in Cursor’s Chat so we don’t rebuild a full chat UI.
- **Pros:** Guided flow without relying on AI for every step; complex questions go to real Chat. **Cons:** Two surfaces (panel + Chat); need to design the handoff.

### Option D: Cursor product feature / feature request

- **What:** Ask Cursor (via feedback, forum, or account manager) for a **first-run or “Onboarding” mode** in Chat: e.g. a dedicated onboarding agent or a way for orgs to inject a welcome + suggested prompts into the Chat panel. Then we’d provide the content (steps, rules, suggested prompts); Cursor would host the UX.
- **Where it runs:** Inside Cursor by default if they ship it.
- **Pros:** No extension to build; consistent with Cursor’s design. **Cons:** We don’t control timeline or scope; may not exist today.

---

## What we’d need to build (Option B — chosen)

1. **Cursor / VS Code extension** (TypeScript, `package.json`, `contributes.commands` for “Start onboarding chat”). No sidebar webview for the main flow — we use Cursor’s Chat.
2. **Cursor Chat integration:** (a) **Ideal:** Extension opens Chat and injects a system/starter message so the AI is in “setup guide” mode; optionally send a first user message like “I’m new, walk me through setup.” (b) **Fallback:** If no “prefill Chat” API, extension could open Chat and show a **small webview or info panel** with “Paste this into Chat: [starter prompt]” and suggested prompts; user copies and sends. Or we research Option A (full webview) as fallback.
3. **Setup context for the AI:** The “setup guide” in Chat covers **steps 5–8 only** (sign-in, smoke test, mental model, you’re set). Context = those steps + mental model text + links (troubleshooting, prompts.md). No need to repeat install/download in the extension — the webpage already did that. Options: (i) **Rules for AI** or (ii) **Starter prompt** (e.g. “You are the Cursor setup guide. The user has already installed and opened Cursor. Guide them through: sign-in, smoke test, mental model, and ‘you’re set.’ Here are the steps: …”), or (iii) **.cursorrules** / rules file the extension ensures exists when “Start onboarding chat” runs.
4. **Discovery:** Command Palette “Cursor Setup: Start onboarding chat” (and optionally: welcome view, or prompt on first Cursor launch if we can detect that).
5. **First step:** **Clarify Cursor’s extension API** — can we open or prefill Chat from an extension? Check Cursor docs, VS Code Chat API (if any), or build a tiny test extension that tries to trigger Chat with a given prompt.

---

## Notion-style elements we can reuse

| Notion pattern | Our equivalent |
|----------------|-----------------|
| “Welcome [Name]! 👋” | “Welcome! This is your Cursor setup guide.” (we may not have name unless Cursor exposes it) |
| “Here to help you get set up!” | “We’ll walk you through install, sign-in, and your first check.” |
| “Start by sending the prompt below” | “Pick a step below or type a question.” |
| Suggested prompts (e.g. doc-related) | “Start setup,” “I installed Cursor — what’s next?,” “Explain the mental model,” “Run smoke test,” “What is source of truth documentation?” |
| Chat input at bottom | Free-form input for “Ask about setup” or to go to the next step |
| Same dashboard | Side panel or Chat inside Cursor — no external webpage |

---

## Open questions

| Question | Notes |
|--------|--------|
| Does Cursor’s extension API support adding a side panel (webview)? | VS Code does; Cursor likely inherits. Confirm. |
| Can an extension open Chat with a prefilled system message or user prompt? | Would enable Option B. Need to check Cursor docs / API. |
| Do we want scripted-only (current flow in a panel) or AI-powered chat with setup context? | Scripted = predictable, no model cost. AI = more flexible, needs good rules/context. |
| First-time discovery: how does a new user see “Open setup guide”? | Command Palette, welcome page, or a one-time prompt after install. |
| Should the in-Cursor guide replace the webpage or live alongside it? | e.g. “Prefer the in-app guide; webpage remains for people who can’t install the extension or want to share a link.” |

---

## Minimal first version (MVP) — Option B

- **Extension** with one command: **“Cursor Setup: Start onboarding chat.”**
- When run: **open Cursor’s Chat** and (if API allows) **inject setup context** (system message or starter prompt) so the AI acts as the setup guide; optionally send first user message “I’m new, walk me through setup.”
- **Setup context** = our steps (install, sign-in, smoke test, mental model) + links, in a form the AI can use (e.g. in the starter prompt, or in Rules for AI that the extension ensures are active).
- **Suggested prompts** (for the user to try in Chat after it opens): e.g. “I’ve signed in — what’s next?” / “Run the smoke test” / “Explain the mental model” / “I’m done — what’s next?” — in a small info message or in the first AI reply (steps 5–8 only; “I’ve installed Cursor” is the handoff from the webpage).
- **Fallback if no “prefill Chat” API:** Extension opens Chat and a small panel/webview with “Paste this into Chat: [full starter prompt]” + suggested follow-up prompts; user pastes and sends to start the guide. Still gets them into Cursor Chat from minute 1.
- The existing webpage (setup-chat.html) remains for sharing or for users who can’t install the extension.

---

## Next steps (Option B — when we’re ready)

1. **Confirm Cursor’s extension API for Chat:** Can we open Chat and/or prefill it (system message, first user message)? Check Cursor docs, VS Code extension API for Chat (if any), and build a minimal test extension that tries to trigger Chat with a prompt.
2. **Define the “setup guide” context (steps 5–8 only):** Turn sign-in, smoke test, mental model, and “you’re set” (plus links) into a **starter prompt or rules block** the AI will see when onboarding chat starts. Optionally mention “The user already installed and opened Cursor via the webpage” so the AI doesn’t repeat install steps.
3. **Implement extension:** Command “Cursor Setup: Start onboarding chat” that (a) opens Chat, (b) injects context / first message (if API allows), or (c) shows fallback “Paste this into Chat” + suggested prompts.
4. **Suggested prompts:** Document 3–5 starter prompts for steps 5–8 (e.g. “I’ve signed in — what’s next?,” “Run the smoke test,” “Explain the mental model,” “I’m done — what’s next?”) — in the first AI message or in a small extension panel.
5. **Test in Cursor** with a new-user mindset; iterate on the starter prompt so the AI stays in “setup guide” mode.
6. **Document** how to install the extension and run “Start onboarding chat”; keep the webpage as optional fallback.

---

**Related:** Current setup flow lives in [setup-chat.html](setup-chat.html) (all 8 steps). After the reshape: **webpage = steps 1–4** (through “download and open Cursor”); **extension = steps 5–8** (sign-in → you’re set) in Cursor Chat. The webpage can be trimmed to 4 steps and end with “Open Cursor, then run the onboarding chat (extension).”  
**Reference:** Notion’s new AI chat (sidebar, welcome, suggested prompts, same app).

**Last updated:** Brainstorm draft. No implementation yet.
