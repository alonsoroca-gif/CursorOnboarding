# Cursor Onboarding Kit

A reproducible, low-friction onboarding program to get your team productive with Cursor.

## Project Summary

Build a comprehensive Cursor Onboarding Kit (repository + guided workspace + workshop) so your team can get set up, learn core workflows, and start using Cursor confidently. The kit teaches **how to think with Cursor**—when to trust it, when to verify, and how to stay in control.

## Objectives

1. **Documentation**: Create step-by-step setup docs, templates, and example Cursor sessions
2. **Workspace Template**: Provide a guided walkthrough demonstrating 4 common team workflows
3. **Workshop**: Deliver a 30-45 minute live workshop with quick reference guide and feedback survey
4. **Measurable Adoption**: Achieve 60%+ of attendees reporting "able to start using Cursor" post-workshop

## Timeline & Milestones

**6-week project** (12 work days at 2 days/week, ~6-8 hours per day)

### Week 1 — Kickoff + Discovery
- [x] Create project plan in README.md
- [ ] Interview 2-3 teammates about Cursor needs
- [x] Explore Cursor docs and identify top 10 features (→ [docs/top-10-features.md](docs/top-10-features.md)) — updated from Interview #1 + Google Forms (5 responses)
- [x] Create repository skeleton

### Week 2 — Environment & Baseline Docs
- [x] Write OS-specific setup guide
- [x] Create troubleshooting FAQ
- [x] Document "first run" checklist
- [ ] Test setup guide with fresh environment

### Week 3 — Build 4 Example Workflows
- [ ] **Workflow 1**: Quick project kickoff (repo scaffold, README)
- [ ] **Workflow 2**: Data summary + analysis (CSV, stats)
- [ ] **Workflow 3**: Writing flow (AI-assisted drafts)
- [ ] **Workflow 4**: Debugging + code exploration

### Week 4 — Templates, Prompts & Widgets
- [ ] Create Cursor workspace template
- [ ] Write prompts.md with recommended templates
- [ ] Build automation example
- [ ] Standardize naming and add comments

### Week 5 — Workshop Materials
- [ ] Prepare 30-45 minute workshop slide deck
- [ ] Create demo script
- [ ] Record 6-8 minute screencast (optional)
- [ ] Design 1-page Quick Reference guide
- [ ] Create 5-question feedback survey

### Week 6 — Run Workshop & Handoff
- [ ] Host workshop and collect survey responses
- [ ] Analyze feedback and update materials
- [ ] Finalize repository
- [ ] Write post-workshop report with adoption metrics

## Repository Structure

```
cursor-onboarding-kit/
├─ README.md                    # Project overview and quick start
├─ docs/
│  ├─ setup.md                  # OS-specific setup instructions
│  ├─ setup-chat.html           # Step-by-step setup (learn/apply, open in browser)
│  ├─ onboarding-pm.html        # PM-focused onboarding (Chat, Composer, reading code/PRs)
│  ├─ setup-flow.json           # Setup flow data (for chat UI or bots)
│  ├─ mental-model.md           # How to think with Cursor (trust, verify, guardrails)
│  ├─ troubleshooting.md        # Common issues and solutions
│  ├─ prompts.md                # Recommended prompt templates
│  └─ top-10-features.md        # Top 10 Cursor features (Week 1 output)
├─ examples/
│  ├─ README.md                # Index and suggested order for workflows
│  ├─ 01-kickoff/              # Quick project kickoff workflow
│  ├─ 02-data-summary/         # Data analysis workflow
│  ├─ 03-writing-flow/         # AI-assisted writing workflow
│  └─ 04-debugging/            # Debugging and code exploration
├─ templates/
│  └─ cursor-workspace-template/ # Reusable workspace template
├─ cursor-setup-extension/     # Part 2: in-Cursor onboarding (run "Cursor Setup: Start onboarding chat")
├─ workshop/
│  ├─ slides.pdf               # Workshop presentation
│  ├─ demo-recording.mp4       # Demo screencast
│  └─ script.md                # Workshop script and agenda
├─ quick-reference.pdf         # 1-page quick reference guide
└─ post-workshop-report.md     # Adoption metrics and next steps
```

## Quick Start

### For New Users
1. **Part 1 (webpage):** Open **[docs/setup-chat.html](docs/setup-chat.html)** in your browser — steps 1–4 (download & install Cursor). At the end you’ll see “Continue in Cursor.”
   - **Product managers:** Use **[docs/onboarding-pm.html](docs/onboarding-pm.html)** for a PM-focused path (Chat, Composer, reading code/PRs; moderate–high difficulty).
2. **Part 2 (in Cursor):** Open Cursor, then run **Cursor Setup: Start onboarding chat** from the Command Palette (install the [cursor-setup-extension](cursor-setup-extension/) first if needed). Part 2 covers sign-in, smoke test, mental model, and “you’re set.”
3. Read [how to think with Cursor](docs/mental-model.md) (when to trust, verify, guardrails)
4. Try one of the example workflows in [examples/](examples/)
5. Reference the [quick-reference.pdf](quick-reference.pdf) for common commands

> **Note:** `quick-reference.pdf` and other workshop assets (slides, demo recording) are created in Week 5. Until then, use [docs/setup.md](docs/setup.md) and [examples/](examples/) to get started.

### For Workshop Attendees
1. Complete the pre-workshop setup checklist
2. Bring questions about your specific use cases
3. Be ready for hands-on practice during the lab session

## Success Metrics

- **Documentation**: Setup guide tested successfully by someone who didn’t write it (≤30 minutes)
- **Example Fidelity**: 3+ of 4 examples reproduce as documented
- **Workshop Outcome**: 60%+ of attendees feel confident starting Cursor
- **Template Quality**: Team can spin up workspace in ≤15 minutes
- **Responsible use**: Users feel confident evaluating Cursor-generated code and understand safe vs unsafe usage patterns

## Feedback Survey (5 Questions)

1. I can reproduce the setup in the README (Yes / No / Partially)
2. After the workshop, I feel confident starting a Cursor session (1-5 scale)
3. Which example was most useful? (multiple choice)
4. What was missing or confusing? (free text)
5. Would you attend a follow-up deep-dive? (Yes / No)

## Next step (on your machine)

To deploy the latest changes (home page with two paths + PM onboarding), push from your machine (GitHub auth is required):

```bash
cd /path/to/cursor-onboarding-kit
git push origin main
```

If the repo is connected to Vercel, the site will redeploy automatically.

## Deploy the setup chat (optional)

To get a shareable URL for the step-by-step setup (e.g. for teammates who haven’t cloned the repo):

- **GitHub Pages (free, no trial):** See **[docs/deploy-github-pages.md](docs/deploy-github-pages.md)** for step-by-step instructions. You get a URL like `https://YOUR_USERNAME.github.io/cursor-onboarding-kit/` with the home page and both onboarding flows.
- **Vercel:** Do the following:
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in, and **Add New Project**.
3. Import the repo. In **Settings → General → Root Directory**, set exactly (no spaces, correct casing):
   **`Cursor-Onboarding/cursor-onboarding-kit`**
4. Set **Framework Preset** to **Other** (no build). Deploy.
5. Your setup chat will be at **`https://your-project.vercel.app/docs/setup-chat.html`** or **`/setup-chat`**.

The repo includes a `vercel.json` that serves the site as static files and adds the short `/setup-chat` route.

**After editing the setup chat or other deployed files:** commit and push so Vercel redeploys and you can see changes in real time. (Unpushed changes won’t appear on the live site.)

### Recording survey responses (Step 9)

The onboarding flow ends with a short survey (e.g. “Was this helpful?” and “Any advice?”). Responses are collected via **Google Forms** and saved to a Google Sheet:

1. Go to [Google Forms](https://forms.google.com) and create a new form.
2. Add your questions (e.g. “Did you find this onboarding helpful?” with options Yes / No / Somewhat, and “Any advice or feedback?” as a paragraph).
3. Click **Send** → link icon → copy the “View form” URL (e.g. `https://docs.google.com/forms/d/e/.../viewform`).
4. In **docs/setup-chat.js**, set `SURVEY_GOOGLE_FORM_URL` to that URL (replace `YOUR_FORM_ID` or the whole placeholder).

Users will see an **Open survey (Google Form)** button on Step 9, then click **I've completed the survey — Finish** when done. Responses appear in the **Responses** tab of your form (and can be linked to a Google Sheet).

## Contributing

This project follows an iterative development process:
- Use GitHub for version control
- Create PRs for major documentation changes
- Use descriptive commit messages
- Keep language simple and action-oriented: "Do this → see that"
- Version templates and tag releases (e.g., v0.1)

## Current Status

**Week 2**: Plan ✓ · Skeleton ✓ · Interview #1 ✓ · Setup guide ✓ · Troubleshooting FAQ ✓ · First run checklist ✓ · Next: test setup with fresh environment, then Week 3 (example workflows)

## License

[Your License Here]

## Contact

[Your Contact Information]
