# Cursor Setup Guide

Get Cursor installed and running on your machine. This guide covers macOS, Windows, and Linux.

**Status:** Week 2 baseline — refine with your team’s OS and policies as needed.

**Prefer a step-by-step, learn-as-you-apply flow?** Open the setup chat in your browser:
- **Local:** Open `docs/setup-chat.html` (double-click or drag into the browser).
- **If deployed (e.g. Vercel):** Use your project URL + `/docs/setup-chat.html` or `/setup-chat`.

*We’re also exploring a **didactic setup chat inside Cursor** (same dashboard, Notion-style). See [setup-chat-in-cursor-brainstorm.md](setup-chat-in-cursor-brainstorm.md) for the idea and execution options.*

---

## Before You Start

### Company or org blocking install?

If you hit install policies, SSO, or network restrictions, reach **#ask-it** on Slack. See [troubleshooting](troubleshooting.md) if you’re stuck.

### Prerequisites

| Requirement | Details |
|-------------|---------|
| OS | macOS, Windows, or Linux |
| Access | Admin or sudo (or use User install on Windows) |
| Internet | Required (Cursor uses cloud-based AI) |
| RAM | 8 GB minimum; 16 GB recommended for large codebases |
| Account | GitHub or work account (recommended for sign-in and repos) |

---

## Installation

**Download:** [cursor.com](https://cursor.com) or [cursor.com/downloads](https://cursor.com/downloads) — choose your OS and architecture.

### macOS

1. Download the Mac build: **ARM64** (Apple Silicon) or **x64 / Universal** (Intel).
2. Open the `.dmg` and drag **Cursor** to **Applications**.
3. Open Cursor from Applications or Spotlight.
4. If macOS blocks the app (“unidentified developer”): **System Settings → Privacy & Security** → allow Cursor.
5. On first launch, grant any requested permissions (e.g. Accessibility) for full IDE features.

### Windows

1. Download the Windows build: **User** (no admin) or **System** (admin).
2. Run the installer and complete the steps.
3. Launch Cursor from the Start menu or desktop shortcut.
4. If install is blocked by policy, reach **#ask-it** on Slack.

### Linux

1. Download: **.deb** (Debian/Ubuntu), **.rpm** (Fedora/RHEL), or **.AppImage** (portable).
2. **.deb:** `sudo dpkg -i cursor*.deb` (fix deps with `sudo apt --fix-broken install` if needed).
3. **.rpm:** `sudo rpm -i cursor*.rpm`.
4. **.AppImage:** `chmod +x Cursor*.AppImage` then run it (FUSE may be required on some distros).
5. Launch Cursor from your app menu or shell (`cursor` if in PATH).

---

## First Run Checklist

Do these once after installation:

1. **Launch Cursor** and sign in (work email or SSO per company policy).
2. **Optional:** Adjust theme or keybindings in Settings; defaults are fine.
3. **Optional:** Install extensions for your language or stack via **Extensions** (`Cmd/Ctrl+Shift+X`).
4. **Verify AI:** Open any file (e.g. a `.md`), open **Chat** (sidebar or `Cmd/Ctrl+Shift+L`), and ask: *Summarize the first paragraph.* You should get a short reply.
5. **Read** [Mental model: how to think with Cursor](mental-model.md) — verify, validate, guardrails.

If Chat never replies or shows an error, see [troubleshooting → AI features](troubleshooting.md#ai-features-not-working).

---

## Credentials and Extensions

**Sign-in:** Use Cursor’s sign-in flow (browser or in-app). For SSO or account problems, try sign out then sign in again, or reach **#ask-it**.

**Do not** paste passwords, API keys, or other sensitive information into Chat or prompts. See [mental-model → Your responsibilities](mental-model.md#your-responsibilities).

**Extensions:** Cursor works without extra extensions. Add language or linter extensions from the Extensions panel if you need them; see [Cursor docs](https://docs.cursor.com) for recommendations.

**Optional — company coding standards:** If your team has internal standards (e.g. Entrata or style guides) and you want Cursor’s output to align with them, add a [`.cursorrules`](https://docs.cursor.com/context/rules-for-ai) file in your repo root with your conventions. See [troubleshooting → Coding standards](troubleshooting.md#coding-standards-and-output-that-doesnt-match-company-style).

---

## After Setup

1. [Troubleshooting guide](troubleshooting.md) — common issues and fixes.
2. [Mental model](mental-model.md) — when to trust and when to double-check Cursor.
3. [Example workflows](../examples/) — try a workflow to learn by doing.
4. [Prompts guide](prompts.md) — prompt templates (Week 4).

**Need help?** [troubleshooting](troubleshooting.md) · **#ask-it** on Slack
