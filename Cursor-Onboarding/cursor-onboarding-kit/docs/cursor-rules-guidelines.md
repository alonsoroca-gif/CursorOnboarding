# Cursor Rules / Guidelines

> Reference for configuring Cursor so the AI and your workspace match how your team works. Use with the [setup guide](setup-chat.html), [PM onboarding](onboarding-pm.html), and [PM competitive advantage brainstorm](pm-competitive-advantage-brainstorm.md).

---

## .cursorignore File

**Purpose:** Customize your Cursor IDE workspace by specifying only the parts of the codebase you actively work on.

**Setup:**

1. Copy the provided template file `cursorignore.template` to `.cursorignore` using OS-specific commands:
   - **Windows:** `copy cursorignore.template .cursorignore`
   - **macOS/Linux:** `cp cursorignore.template .cursorignore`
2. Edit `.cursorignore` to include only relevant modules or directories. For example:

   ```
   # Ignore everything by default
   **/*
   # Include specific modules you work in
   !src/moduleA/**
   !src/moduleB/**
   ```

3. Save and verify in Cursor IDE that it focuses only on specified code areas.

**Benefits:**

- Focus on relevant code for your work.
- Improve IDE performance by limiting scope.
- Allow flexible collaboration as each developer can maintain their own `.cursorignore`.

**For PMs:** You can restrict scope to docs and specs (e.g. `!docs/**`, `!**/specs/**`) so Chat and Composer use only the folders you care about.

---

## .cursorrules File

**Purpose:** A specialized configuration file that defines how the AI assistant interacts with your codebase, bridging human coding standards and AI-generated suggestions.

**What it captures:**

- Domain-specific terminology
- Project-specific architectural decisions
- Custom design patterns
- Legacy code constraints
- Performance considerations

**Benefits:**

- Enforces consistency in AI-generated code to match team conventions.
- Acts as living documentation for knowledge transfer to new team members.
- Aligns AI suggestions with domain-specific requirements.
- Reduces cognitive load on developers by shifting style enforcement to AI.
- Improves overall code quality through explicit standards.
- Accelerates onboarding by providing AI that understands project conventions.

**Example:** Common `.cursorrules` are set up in the core repository and can be extended for your application.

**For PMs:** Use `.cursorrules` (or Cursor Settings → Rules for AI) to define your **spec structure**, **section names**, **tone**, and **terminology**. Then Chat and Composer will draft and edit in line with your product docs. See [PM competitive advantage brainstorm](pm-competitive-advantage-brainstorm.md) for ideas (company spec rules, “write like our product,” preserve existing decisions).

---

## Settings and Keybindings

- **Access settings** via gear icon or shortcut **Cmd + ,** (Mac) or **Ctrl + ,** (Windows).
- **Customize keyboard shortcuts** under Settings → Configure Keyboard Shortcuts.
- **Common shortcuts** include opening agent (Composer), toggling chat modes, accepting/rejecting suggestions, and navigating chats.
- **Personalize** themes, font sizes, and editor layouts for a tailored experience.

---

## Best Practices

- Use custom keybindings for repetitive tasks (e.g. test generation, refactoring, or for PMs: opening Chat, opening Composer).
- Switch AI modes depending on the problem you are solving (Chat for drafting and Q&A; Composer for multi-file edits).
- Modify your setup dynamically as needed.

These guidelines help optimize your use of Cursor IDE by tailoring AI assistance to your workflow, improving performance, and ensuring consistent code quality (and doc quality for PMs) across your team.
