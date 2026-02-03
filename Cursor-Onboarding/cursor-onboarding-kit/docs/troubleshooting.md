# Troubleshooting Guide

> **Status**: Week 2 baseline — add team-specific FAQs as you discover them.

This guide addresses common issues you might encounter when setting up and using Cursor.

## Understanding What Went Wrong

When Cursor doesn’t give you what you want, it usually fits one of these categories:

- **User error** — Vague prompt, wrong file or selection, or unclear goal. Try: being more specific, selecting the relevant code, or breaking the ask into smaller steps.
- **Context** — Cursor didn’t have enough or the right context (e.g. missing file, wrong scope). Try: opening the right files, adding a short explanation, or referencing the part of the codebase that matters.
- **Cursor limitations** — See [When it’s Cursor’s limits](#when-its-cursors-limits) below for specific types and what to try.

See [mental-model.md](mental-model.md) for when to trust vs double-check and how to validate output.

### When it’s Cursor’s limits

If the problem isn’t user error or missing context, it may be a limitation of the model or product. Use the following to diagnose and work around it:

| What you’re seeing | What it often is | What to try |
|--------------------|------------------|--------------|
| Wrong or outdated APIs, “hallucinated” code | **Model knowledge** — Cursor doesn’t have perfect or up-to-date knowledge of every library/tool. | Verify against official docs; paste a snippet of the correct API or doc link into the prompt; narrow the ask to one concrete change. |
| Inconsistent or nonsensical answers after a few turns | **Context window / long conversation** — The model can lose focus or contradict itself in long chats. | Start a new chat; summarize what you need in one short prompt; or break the task into separate, smaller conversations. |
| Cursor ignores part of your code or selection | **Scope / selection** — The model may not be using the file or range you expect. | Explicitly say “in this file” or “in the selected code”; reduce the selection to the minimal relevant block; open the file that matters in the editor. |
| Good at one language, weak at another | **Language or tool support** — Some languages/toolchains are better supported than others. | Simplify the request; provide a small working example in that language; or use Cursor for the part that’s well-supported and do the rest manually. |
| Task is very visual, interactive, or proprietary | **Task fit** — Cursor works best on text/code; it can’t “see” your UI or your internal tools. | Break the task into a concrete, text/code-based step (e.g. “generate this config,” “explain this function”); do the visual or proprietary part yourself. |
| Feature doesn’t exist or behaves differently | **Product / feature** — Cursor changes over time; docs or behavior may be out of date. | Check [Cursor docs](https://docs.cursor.com) or changelog; ask in **#ask-it** or try an alternative workflow (e.g. Chat vs Composer). |

**If you’ve tried these and it still fails:** note the scenario (what you asked, what you got, which project/language) and share in **#ask-it** on Slack so we can track patterns and update this guide.

## Permission Model and Guardrails

Cursor’s permission model can create a **false sense of security** if you assume it always blocks unsafe actions. You are responsible for:

- Reviewing what gets sent to Cursor (no sensitive information, e.g. credentials or PII, in prompts).
- Reviewing generated code before running or committing it.
- Following your company’s policy on AI tools and data.

For our expectations, see [mental-model.md](mental-model.md#your-responsibilities) and [mental-model.md](mental-model.md#safe-vs-unsafe-usage).

## Common Issues

### Installation Problems

- **Download:** Use [cursor.com](https://cursor.com) (or cursor.com/downloads). Pick the build for your OS and architecture (e.g. Mac ARM64 for Apple Silicon, Windows User install if no admin).
- **Install blocked:** Company policy may block installs. Reach **#ask-it** on Slack with your OS and any error message.
- **“Unidentified developer” (Mac):** System Settings → Privacy & Security → allow Cursor. If your org locks this, reach **#ask-it**.

### Authentication Issues

- **Can’t sign in:** Try signing out (Cursor menu or account settings), then sign in again. Clear browser cache if sign-in opens in browser.
- **SSO / work account:** Follow your company’s SSO flow. If it fails or loops, reach **#ask-it** — it may be an org config issue.
- **Session expired:** Sign out and sign back in. If it keeps happening, note when it happens and ask in **#ask-it**.

### Extension Conflicts

- **Cursor slow or odd behavior after installing extensions:** Disable other AI or heavy extensions one at a time and restart Cursor to see if one is conflicting.
- **Language or tool not working:** Ensure the right extension for that language/tool is installed (Extensions panel: `Cmd/Ctrl+Shift+X`). Reload the window after installing.

### Performance Issues

- **Cursor feels slow:** Large workspaces and many files can slow indexing. Try adding heavy or generated folders to `.cursorignore` (or exclude them in settings). Close other heavy apps.
- **High CPU/memory:** Check Cursor’s process in Activity Manager / Task Manager. If one window or repo is the cause, try a smaller folder or a fresh window. Update Cursor to the latest version.

### AI Features Not Working

- **No reply in Chat / Composer:** Check your subscription and plan (Settings → Account). Ensure you’re online; Cursor uses cloud models. Try a new chat; long conversations can hit context limits (see [When it’s Cursor’s limits](#when-its-cursors-limits)).
- **“Rate limit” or similar:** You may have hit usage limits. Wait a few minutes or check your plan. If it persists, reach **#ask-it**.
- **Reply is irrelevant or wrong:** That’s often context or prompt; see [Understanding what went wrong](#understanding-what-went-wrong). Validate all output (see [mental-model.md](mental-model.md)).

## Platform-Specific Issues

### macOS

- **Permissions:** If Cursor asks for Accessibility or other permissions, grant them for full features (e.g. terminal, some refactors). You can deny and still use core editing and Chat.
- **Apple Silicon (M1/M2/M3):** Use the ARM64 build. If you hit an app that only has x64, Cursor may prompt for Rosetta; install if needed.

### Windows

- **Install fails:** Try “Run as administrator” once for the installer, or use the **User** install so you don’t need admin. If blocked by policy, reach **#ask-it**.
- **Antivirus:** Some AV may flag Cursor. If you trust the source, add an exception. If unsure, check with **#ask-it**.

### Linux

- **.AppImage won’t run:** Ensure it’s executable (`chmod +x Cursor*.AppImage`). Some distros need `libfuse2` for AppImage; install via your package manager if you get a FUSE error.
- **.deb / .rpm dependencies:** Resolve any dependency errors shown during install (e.g. `apt --fix-broken install` after a .deb install).

## Getting More Help

If you're still experiencing issues:
1. Check the [official Cursor documentation](https://docs.cursor.com)
2. Search the Cursor community forum or [cursor.com](https://cursor.com) help
3. Reach **#ask-it** on Slack with your OS, what you did, and any error message

## Report an Issue

Found a problem with this guide? If this repo is on GitHub, please [create an issue](../../issues) or submit a pull request. Otherwise, reach **#ask-it** on Slack or contact the kit maintainer.
