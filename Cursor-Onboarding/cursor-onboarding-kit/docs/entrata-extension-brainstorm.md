# Entrata Rules Extension — Brainstorm

> **Status:** Idea only. No implementation yet. Use this doc to shape how the extension would work and how to build it.  
> **Origin:** This idea came from the [top-10-features](top-10-features.md) discussion (form responses, KEY section — make Cursor think like Entrata guidelines). We’re saving it here to develop further.  
> **Intent:** Develop this extension concept in more detail when ready; this document is the single place for the brainstorm and build plan.

## Goal (recap)

An extension so Cursor **automatically** follows Entrata coding/formatting guidelines — no need to refer to a separate doc or copy `.cursorrules` into every repo. One install (or one command) and Cursor "thinks" Entrata.

---

## How could it work? (user flows)

### Flow A: “Rules on install”
- User installs the extension from the marketplace (or internal repo).
- Extension registers Entrata rules with Cursor (if the API allows) or adds them to **Cursor Settings → Rules for AI** (global).
- From then on, in any project, Cursor uses Entrata rules when generating/editing code.
- **Pros:** Zero friction after install. **Cons:** Global rules affect all projects; might not be desired for non-Entrata work. Depends on whether we can set rules programmatically.

### Flow B: “Apply to this workspace”
- User installs the extension.
- In a repo, user runs a command: **“Entrata: Apply rules to this workspace.”**
- Extension creates or updates a **`.cursorrules`** file (or `.cursor/rules/` entry) in the project root with the current Entrata rules.
- Cursor picks up the file; that workspace now follows Entrata. Other workspaces unchanged.
- **Pros:** Per-repo, explicit, version-controllable. **Cons:** One click per repo (or we could auto-apply when the extension detects “this is an Entrata repo” — e.g. a marker file or setting).

### Flow C: “Hybrid”
- Extension ships with a **default set of Entrata rules** (bundled or fetched once).
- **Optional:** User can point to a **company URL or file** for the canonical Entrata rules (e.g. internal doc or repo). Extension fetches/imports and caches.
- Command: “Apply Entrata rules to this workspace” writes `.cursorrules` (Flow B). Optional: “Use Entrata rules globally” could write to Cursor’s Rules for AI if we can (Flow A).
- **Pros:** Flexible; can stay in sync with company source of truth. **Cons:** Slightly more to build (fetch, cache, update).

---

## How could it be built?

### 1. Extension host and API
- **Cursor** is based on **VS Code**; extensions use the **VS Code Extension API** (and any Cursor-specific APIs if documented).
- Build a **VS Code / Cursor extension** (TypeScript, `package.json` with `activationEvents`, `contributes.commands`, etc.).
- **Need to verify:** Does Cursor expose an API for extensions to *contribute* or *set* “Rules for AI” / project rules? If yes → Flow A is possible. If no → we rely on writing files (Flow B/C).

### 2. Where do Entrata rules live?
- **Inside the extension:** Rules text bundled in the extension (e.g. a `rules/entrata.md` or `.cursorrules` template). Update extension when Entrata guidelines change.
- **External source:** Extension reads from a URL (internal wiki, repo raw file) or a path the user configures. Optional “Check for updates” to refresh.
- **Both:** Default bundled rules; override or “sync from URL” in extension settings.

### 3. What the extension “contributes”
- **Commands** (e.g. Command Palette):
  - `Entrata: Apply rules to this workspace` — writes `.cursorrules` (or `.cursor/rules/entrata.mdc` or whatever Cursor expects) in the workspace root.
  - `Entrata: Open rules in editor` — show current rules so the user can review or edit.
  - Optional: `Entrata: Refresh rules from source` — re-fetch from URL and re-apply.
- **Settings** (optional):
  - `entrata.rulesSource`: `"bundled"` | `"url"` | `"file"`. If URL or file, path/URL.
  - `entrata.autoApplyInWorkspace`: boolean — when opening a workspace, auto-apply if no `.cursorrules` yet (or if a marker like `.entrata-project` exists).
- **No UI required for MVP** — commands + settings are enough. Later: a small webview or tree view of “current Entrata rules” if useful.

### 4. File format and location
- Cursor uses **`.cursorrules`** in project root, or **`.cursor/rules/`** with multiple rule files. Extension should follow Cursor’s current convention (check docs).
- Content: plain text or Markdown that Cursor interprets as “rules for the AI.” Entrata guidelines would be written in that format (naming, formatting, patterns, links to internal docs).

### 5. Packaging and distribution
- **Option A — Public marketplace:** Publish to VS Code Marketplace (or Cursor’s if they have one). Anyone can install. Entrata rules would be the default; could be generic “company rules” and allow override.
- **Option B — Internal only:** Package the extension as a `.vsix` and distribute via internal channel (e.g. SharePoint, internal npm, or Cursor’s “install from VSIX”). Keeps Entrata rules private.
- **Option C — Open source the shell, closed rules:** Extension code in a public repo; Entrata rules in a private config or separate package only Entrata has.

### 6. Ownership and maintenance
- **Who maintains the rules text?** E.g. Billy or the team that owns Entrata standards. Extension repo could accept PRs that update the bundled rules, or point to an internal URL that the standards team owns.
- **Versioning:** Extension version vs. rules version. Consider “Rules version: 2025-02” in the extension so users know which Entrata snapshot they have.

---

## Open questions

| Question | Notes |
|----------|--------|
| Can Cursor extensions set “Rules for AI” or project rules via API? | If yes → Flow A. If no → Flow B/C only. |
| Where is the canonical Entrata guidelines doc today? | Determines “bundled” vs “fetch from URL.” |
| One ruleset for all Entrata repos, or different per product/team? | Might need “Entrata Backend” vs “Entrata Frontend” rule profiles later. |
| Should applying rules overwrite existing `.cursorrules` or merge? | Overwrite = simple. Merge = complex (need to parse and combine). Start with overwrite or “append Entrata section.” |
| How often do Entrata guidelines change? | If rarely, bundled is fine. If often, URL/sync is better. |

---

## Minimal first version (MVP)

- Extension that:
  1. Has a **bundled** Entrata rules file (content TBD with Billy/team).
  2. Exposes **one command:** “Entrata: Apply rules to this workspace.”
  3. Command writes **`.cursorrules`** in the workspace root with that content (or creates `.cursor/rules/entrata.mdc` if that’s the standard).
- No settings, no URL fetch, no auto-apply. Just “click once per repo, get Entrata rules.”
- Delivers: “Don’t refer to a doc — run the command and you’re set.”

---

## Next steps (when we’re ready)

1. **Confirm Cursor extension API** for rules (read Cursor docs, try a tiny test extension).
2. **Get Entrata guidelines** from Billy/team in a form we can put into `.cursorrules`.
3. **Decide:** MVP only (bundled + one command) vs. support URL/settings from the start.
4. **Scaffold** a VS Code extension (yeoman or `npm init` generator), add the command, implement “write .cursorrules to workspace root.”
5. **Test** in Cursor: install extension, run command, open a file, ask Cursor to generate code — confirm it follows Entrata style.
6. **Package and share** (.vsix for internal use or publish to marketplace).

---

**Last updated:** Brainstorm draft. No implementation yet.
