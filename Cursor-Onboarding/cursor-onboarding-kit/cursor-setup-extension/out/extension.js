"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
/** Starter prompt for Part 2 (steps 5–8). User can send this in Chat to begin the in-Cursor onboarding. */
const STARTER_PROMPT = "I've installed Cursor and opened it. I'm ready for Part 2 of setup. Walk me through: (1) sign-in, (2) the smoke test to verify AI works, (3) the mental model (verify, validate, guardrails), and (4) what to do next. Go step by step.";
/** Suggested follow-up prompts the user can try in Chat. */
const SUGGESTED_PROMPTS = [
    "I've signed in — what's next?",
    "How do I run the smoke test?",
    "Explain the mental model in a few sentences.",
    "I'm done with the steps — what should I do next?",
];
function activate(context) {
    const disposable = vscode.commands.registerCommand("cursorSetup.startOnboardingChat", async () => {
        // Try to open Chat with the starter prompt (works in VS Code; Cursor may use same or similar command).
        try {
            await vscode.commands.executeCommand("workbench.action.chat.open", STARTER_PROMPT);
        }
        catch {
            // If executeCommand fails (e.g. Cursor uses a different command), we still show the fallback.
        }
        // Fallback: show instructions and the prompt to paste, so the user can start the guide either way.
        const choice = await vscode.window.showInformationMessage("Cursor Setup (Part 2): If Chat didn't open with a prompt, paste the starter below into Chat (Cmd+Shift+L or Ctrl+Shift+L).", "Copy starter prompt", "Dismiss");
        if (choice === "Copy starter prompt") {
            await vscode.env.clipboard.writeText(STARTER_PROMPT);
            vscode.window.showInformationMessage("Starter prompt copied. Open Chat (Cmd+Shift+L / Ctrl+Shift+L) and paste it to start Part 2.");
        }
        // Suggested prompts are in the README; user can try them in Chat after the first reply.
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map