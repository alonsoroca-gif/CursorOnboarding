(function () {
  "use strict";

  const steps = [
    {
      title: "Priorities & context",
      body: "This onboarding is aligned with **PM Performance Expectations** and **PM Onboarding**. Everything you learn here is meant to help you meet those expectations—faster and with less busywork. The list below is your north star; the steps that follow show how Cursor supports each area.",
      companyExpectations: true,
      welcomeImage: true,
      last: false
    },
    {
      title: "Who this is for",
      body: "This path is for **product and program managers**. You'll learn Cursor features that support your daily work: drafting and editing docs in Chat, structured edits with Composer, and reading or summarizing code and PRs. Use them for ACV narratives, release trackers, discovery docs, backup/transition docs, Jira updates, and triage—so you can meet the expectations above. Difficulty: **moderate to high**. You'll do real tasks in Cursor.",
      last: false
    },
    {
      title: "What you need before starting",
      body: "**Cursor installed and signed in.** If you haven't set up Cursor yet, complete the main onboarding first (download, install, sign in), then return here.\n\n**Access to your PM tools** (as you use them): DOMO, Jira, Hive, Slack, and any repo or doc folder where you keep specs, release trackers, or discovery notes. Having those open or in the same workspace helps Cursor give you context-aware drafts and summaries.",
      last: false
    },
    {
      title: "Feature 1: Chat for drafting and editing",
      body: "**Why it matters:** Chat lets you draft sections, rewrite copy, and refine specs without leaving Cursor—so you can ship ACV narratives, discovery follow-ups, release tracker text, and backup docs faster. You stay in control: you prompt, review, and edit the output.\n\n**Your task (moderate):** Open a doc in Cursor (or create a new one). Open Chat (**Cmd+Shift+L** / **Ctrl+Shift+L**). Ask Cursor to draft something useful (e.g. \"Draft a 'Risks and mitigations' section for this product spec. Use this repo and the open doc as context so the draft fits our project; then suggest what I should customize or ask what I'd like to change.\" or \"Turn this bullet list into two short paragraphs\"). Edit the suggestion and use it in your doc. If Cursor gives you a generic template, add: \"Use this repo and the open file as context, then ask what I want to edit next.\"\n\n**Success:** You got a draft from Chat and incorporated it. You know how to prompt and refine.",
      taskBlock: true,
      taskLabel: "Hands-on",
      taskBody: "Do this in Cursor now: one doc, one Chat prompt, one edit. Then click Next."
    },
    {
      title: "Feature 2: Composer for multi-part edits",
      body: "**Why it matters:** Composer can apply structured changes across a file or several files (e.g. add a section everywhere, restructure headings, standardize format). You request the change, then review the diff before accepting. **Cmd+I** opens Composer — it may look like a chat, but Composer applies edits to your files and shows you a diff to accept or reject.\n\n**Your task (moderate–high):** Open a doc or small set of files in Cursor. Use Composer (e.g. **Cmd+I** / **Ctrl+I** or the Composer entry point) to request a multi-part edit (e.g. \"Add a 'Success metrics' subsection after the intro in this spec\" or \"Make all section headers follow the pattern: ## Section name\"). Review the proposed diff and accept or adjust.\n\n**Success:** You requested a structured edit and reviewed the result. You're comfortable using Composer for doc or cross-file changes.",
      taskBlock: true,
      taskLabel: "Hands-on",
      taskBody: "Do this in Cursor: one Composer request, review the diff, then click Next."
    },
    {
      title: "Feature 3: Reading code and PRs",
      body: "**Why it matters:** You don't have to be a coder to get value. Chat can summarize what a file or PR does, in plain language. Use that for standups, weekly release trackers, Jira ticket descriptions, communicating delays, or knowing what shipped.\n\n**Your task (moderate):** Open a code file or a PR in Cursor. In Chat, ask Cursor to summarize it (e.g. \"Summarize what this file does in 3 bullet points\" or \"What changed in this PR in plain language?\"). Use that summary in a ticket (e.g. paste it into a Jira issue description or comment, or into your release tracker update) or to unblock a conversation.\n\n**Success:** You have a summary you could share with your team. You know how to use Cursor to read code you don't write.",
      taskBlock: true,
      taskLabel: "Hands-on",
      taskBody: "Do this in Cursor: open a file or PR, ask for a summary in Chat, then click Next."
    },
    {
      title: "How Cursor supports your PM expectations",
      body: "The features you just tried map directly to your performance expectations. Use this as a quick reference when you're under time pressure (e.g. Thursday ACV, release tracker updates, discovery follow-up).",
      expectationsMapping: true,
      last: false
    },
    {
      title: "Mental model for PMs",
      body: "Same principles as for engineers, framed for your work: verify outputs, protect sensitive info, and know when to double-check.",
      pmMentalModel: true,
      last: false
    },
    {
      title: "Cursor rules & guidelines",
      body: "Tailor Cursor so the AI and your workspace match how your team works. The following settings help you focus on what matters and keep drafts consistent.",
      rulesGuidelines: true,
      last: false
    },
    {
      title: "Take it to the next level",
      body: "Use the prompt starters and habits below to get a real edge: ship specs faster, keep docs consistent, and stay aligned with code and tickets.",
      competitiveAdvantage: true,
      last: false
    },
    {
      title: "Quick survey",
      body: "We'd love to know if this PM onboarding was helpful and any advice you have. Your responses are recorded so we can improve the guide.",
      survey: true,
      last: true
    }
  ];

  const COMPANY_EXPECTATIONS_HTML = `
<div class="reference-doc expectations-doc">
<h4>PM Performance Expectations</h4>
<ul>
<li><strong>ACV updates & at-risk ACV:</strong> Weekly Thursday noon (DOMO + Slack). Proactive risk ID and structured reporting.</li>
<li><strong>Moving ACV:</strong> Daily as needed; approvals for moves above $250K; NITI criteria and escalation.</li>
<li><strong>Billing:</strong> Daily as needed; requests 4 business days before month-end; delay process and approvals.</li>
<li><strong>Unscheduled ACV:</strong> Weekly review so all ACV is scheduled before implementation.</li>
<li><strong>Monthly ACV forecast & reconciliation:</strong> Forecast by 5th; reconciliation and accuracy targets.</li>
<li><strong>Project health & Hive:</strong> Weekly client touchpoints, project accuracy, zero stuck/overdue tasks, daily time tracking per SOP.</li>
<li><strong>Self review:</strong> Quarterly self-evaluation with rubric; discussion in 1:1s.</li>
<li><strong>Professional skillset & client expectations:</strong> Meeting professionalism, proactive communication, Slack within 4 hours / email within 24 hours, keep managers informed of risks and blockers.</li>
<li><strong>Role expectations:</strong> Follow processes, delegate to Sales/Consulting/Support/CSM/Specialists, align with department goals and SOPs.</li>
</ul>
<h4>PM Onboarding (day-to-day)</h4>
<ul>
<li><strong>Day in the life:</strong> Progress review, stand-ups, asset writing, email/ask channel, bug triage, backlog grooming, discovery, strategic planning, Loom wrap-up.</li>
<li><strong>Discovery & sales:</strong> Field- and product-sponsored forms, prep, execution, documentation.</li>
<li><strong>Jira:</strong> Project management, issue tracking, weekly release trackers, communicating delays.</li>
<li><strong>Partners:</strong> Track engagements, involve key stakeholders, regular check-ins.</li>
</ul>
<h4>Backup & transition</h4>
<p>Backup doc with stakeholders, transition meetings (Hive, Client Admin, Slack, calendars), return meetings to review status.</p>
<h4>Sync & integrations</h4>
<p>Monitor sync health (e.g. PM Sync), understand errors, corrective actions and escalation when you oversee integrations.</p>
</div>
`;

  const EXPECTATIONS_MAPPING_HTML = `
<div class="reference-doc expectations-mapping-doc">
<p><strong>Use Chat</strong> for drafts and summaries; <strong>use Composer (Cmd+I)</strong> when you want edits applied to files with a diff to review.</p>
<table class="expectations-table">
<thead><tr><th>Expectation area</th><th>How Cursor helps</th></tr></thead>
<tbody>
<tr><td>ACV updates & at-risk</td><td>Draft narrative bullets or at-risk notes from your data/notes; paste into DOMO or Slack. Use repo/docs as context.</td></tr>
<tr><td>Release trackers & Jira</td><td>Summarize PRs in plain language; turn into release notes or ticket descriptions. Update weekly tracker text; communicate delays with clear copy.</td></tr>
<tr><td>Discovery & sales</td><td>Draft discovery prep, follow-up notes, or meeting docs from bullets. Keep structure consistent with your forms and SOPs.</td></tr>
<tr><td>Backup & transition</td><td>Draft or standardize backup doc sections (status, stakeholders, access list). Use Composer to apply the same structure across multiple docs.</td></tr>
<tr><td>Bug triage & backlog</td><td>Summarize tickets or code changes for triage; draft triage notes or prioritization bullets for stand-ups.</td></tr>
<tr><td>Partner engagement</td><td>Draft partner follow-up or check-in notes; keep language consistent with your tracking and stakeholder expectations.</td></tr>
<tr><td>Monthly forecast / reconciliation</td><td>Draft narrative or commentary from numbers/notes; keep format aligned with forecast templates.</td></tr>
<tr><td>Sync / integrations</td><td>Summarize error logs or sync docs in plain language; draft escalation notes or corrective-action summaries for tickets.</td></tr>
</tbody>
</table>
<p class="reference-tip">Revisit the <strong>Take it to the next level</strong> step for copy-paste prompts tied to these areas.</p>
</div>
`;

  const PM_MENTAL_MODEL_HTML = `
<h4>Your responsibilities</h4>
<ul>
<li><strong>Verify drafts and suggestions:</strong> Cursor can get tone or facts wrong. You own what you ship. Read and edit before sharing externally.</li>
<li><strong>Protect sensitive information:</strong> Don't paste customer PII, confidential roadmap, or unreleased strategy into Chat. Follow your company's policy on AI tools.</li>
<li><strong>When to trust more:</strong> Internal drafts, restructuring existing docs, summarization of code you can spot-check with an engineer.</li>
<li><strong>When to double-check:</strong> Customer-facing copy, legal or compliance wording, anything that could be quoted externally.</li>
<li><strong>Response times & escalation:</strong> Use Cursor to draft faster, but still meet SLAs (Slack within 4 hours, email within 24 hours). Keep managers informed of risks and blockers—Cursor doesn't replace that.</li>
</ul>
<h4>Where this applies</h4>
<p>Specs, PRDs, tickets, ACV narratives, release trackers, discovery docs, backup docs, and code summaries. Use the same discipline for every Cursor output: you decide what to accept, change, or reject.</p>
`;

  const RULES_GUIDELINES_HTML = `
<div class="reference-doc rules-guidelines-doc">
<h4>.cursorignore</h4>
<p><strong>Purpose:</strong> Tell Cursor which parts of the repo to focus on. <strong>For PMs:</strong> Include only <code>docs/</code>, <code>**/specs/**</code>, or the modules you work in — so Chat and Composer use only what you care about. Copy <code>cursorignore.template</code> to <code>.cursorignore</code>, edit it, then verify in Cursor. <strong>Benefits:</strong> Better focus, faster IDE, and each teammate can keep their own.</p>
<h4>.cursorrules</h4>
<p><strong>Purpose:</strong> Defines how the AI interacts with your codebase (terminology, patterns, constraints). <strong>For PMs:</strong> Use it for <strong>spec structure</strong>, <strong>section names</strong>, <strong>tone</strong>, and <strong>terminology</strong>. Put it in the repo root or use Cursor Settings → Rules for AI. Then every draft follows the same template and voice. <strong>Benefits:</strong> Consistency, living documentation, and less re-prompting.</p>
<h4>Settings & keybindings</h4>
<p><strong>Access:</strong> Gear icon or <strong>Cmd+,</strong> (Mac) / <strong>Ctrl+,</strong> (Windows). Customize shortcuts under Settings → Configure Keyboard Shortcuts. Use keybindings for opening Chat (Cmd+Shift+L) and Composer (Cmd+I) so they’re one key away. Personalize themes and layout as needed.</p>
<h4>Best practices</h4>
<ul>
<li>Use Chat for drafting and Q&A; use Composer when you want edits applied to files with a diff to review.</li>
<li>Change your setup as your workflow evolves.</li>
</ul>
</div>
`;

  const COMPETITIVE_ADVANTAGE_HTML = `
<div class="reference-doc competitive-advantage-doc">
<h4>What “next level” means</h4>
<p><strong>Speed</strong> — Specs in hours, not days. <strong>Consistency</strong> — Same structure and tone across docs. <strong>Alignment</strong> — Specs and tickets tied to the repo. <strong>Leverage</strong> — Less boilerplate, more strategy.</p>
<h4>Prompt starters (Chat)</h4>
<ul>
<li>“Draft a ‘Risks and mitigations’ section for this spec. Use this repo and the open doc as context; then suggest what I should customize or ask what I’d like to change.”</li>
<li>“Summarize this PR in plain language and list 1–3 things a PM should know (user-facing change, config, breaking change).”</li>
<li>“Turn this PR into a short ticket description (what shipped, why it matters for the product).”</li>
<li>“Given these PRs, draft release notes bullets for PM review.”</li>
<li>“Summarize this repo for a new PM: what it does, main entry points, where specs/docs live.”</li>
</ul>
<h4>Prompt starters (Chat) — aligned with PM expectations</h4>
<ul>
<li>"Draft a short ACV at-risk narrative for Thursday DOMO/Slack from these bullets. Keep it structured and clear for leadership."</li>
<li>"Turn my discovery call notes into follow-up documentation that matches our discovery form structure (prep, execution, next steps)."</li>
<li>"Draft the 'Current status and handoff' section for a PM backup doc using the open project notes. Include stakeholders and key dates."</li>
<li>"Summarize these Jira tickets for a weekly release tracker update; highlight delays or blockers to communicate."</li>
<li>"Draft triage notes for this bug/issue list: priority, impact, and one-line recommendation for stand-up."</li>
<li>"Draft a short partner follow-up or check-in note from these bullets; keep it professional and aligned with our tracking."</li>
</ul>
<h4>Composer recipes (Cmd+I)</h4>
<ul>
<li>“Add a ‘Success metrics’ subsection after the intro in this spec.”</li>
<li>“Apply our standard spec template to this doc (add missing sections, keep existing content under the right headings).”</li>
<li>“Make all ## headings in this folder follow the pattern: ## Section name.”</li>
</ul>
<h4>Mental model level-up</h4>
<ul>
<li><strong>When to loop in Legal/Compliance/Eng:</strong> Customer-facing copy, SLA or pricing wording, security or data handling.</li>
<li><strong>Quality bar:</strong> Internal draft = review for sense. External or customer-facing = double-check tone and facts.</li>
<li><strong>Preserve decisions:</strong> When editing a spec, keep existing scope and decisions unless you explicitly ask to change them.</li>
</ul>
<p class="reference-tip">Bookmark this step or copy these prompts into a doc so you can reuse them in Cursor.</p>
</div>
`;

  const SURVEY_GOOGLE_FORM_URL = "https://forms.gle/zN8mDUkJF3odbdmw7";

  const CHAT_DETAILS = [
    "<p><strong>Why this step:</strong> Your PM Performance Expectations and PM Onboarding are the north star. Everything in this guide is designed to help you meet them—faster and with less busywork.</p><p>Use the list on the left as a quick reference. The steps ahead show how Cursor (Chat, Composer, reading code) supports each area.</p>",
    "<p><strong>Who this is for:</strong> Product and program managers who want to use Cursor for drafting, editing, and understanding code without writing it.</p><p>You'll use these features for ACV narratives, release trackers, discovery docs, backup/transition docs, Jira, and triage.</p>",
    "<p><strong>Before you start:</strong> Have Cursor installed and signed in. For the best experience, have access to DOMO, Jira, Hive, Slack, or a repo where you keep specs and release trackers.</p><p>Opening those in Cursor (or in the same workspace) helps the AI give you context-aware drafts.</p>",
    "<p><strong>Chat (Cmd+Shift+L):</strong> Use it to draft sections, rewrite copy, and refine specs. You get text back; you copy or paste into your doc.</p><p><strong>Tip:</strong> Ask for repo and open-doc context so the draft fits your project, then ask Cursor to suggest what to customize or what to change next.</p>",
    "<p><strong>Composer (Cmd+I):</strong> Use it when you want edits applied directly to files. You request the change; Cursor shows you a diff to accept or reject.</p><p>Good for: adding a section everywhere, restructure headings, standardize format across several files.</p>",
    "<p><strong>Reading code & PRs:</strong> Open a file or PR, ask Chat to summarize in plain language. Use that for standups, release trackers, Jira ticket descriptions, or communicating delays.</p><p>You don't need to be a coder—summaries are for you and your team.</p>",
    "<p><strong>Quick reference:</strong> This table maps each expectation area (ACV, release trackers, discovery, backup, triage, partners, forecast, sync) to how Cursor can help.</p><p>Use it when you're under time pressure (e.g. Thursday ACV, release tracker updates).</p>",
    "<p><strong>Mental model:</strong> Verify every draft and suggestion. Protect sensitive info. Double-check customer-facing or legal wording.</p><p>Meet SLAs (Slack 4hr, email 24hr) and keep managers informed of risks—Cursor helps you draft faster but doesn't replace that.</p>",
    "<p><strong>.cursorignore</strong> limits which parts of the repo Cursor sees (e.g. only docs/ or specs/). <strong>.cursorrules</strong> defines spec structure, tone, and terminology so every draft matches your team.</p><p>Settings: Cmd+, (Mac) or Ctrl+, (Windows).</p>",
    "<p><strong>Prompt library:</strong> Copy-paste prompts for risks, PR→ticket, release notes, ACV narrative, discovery follow-up, backup doc, release tracker, triage, and partner follow-up.</p><p>Bookmark this step to revisit the list anytime.</p>",
    "<p><strong>Almost done.</strong> Your feedback helps us improve this guide. Open the survey, answer the questions, then click Finish below.</p>"
  ];

  function render(text) {
    if (!text) return "";
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }

  const thread = document.getElementById("thread");
  if (!thread) return;
  thread.innerHTML = "";
  let current = 0;

  function show(index) {
    document.querySelectorAll(".message.visible").forEach(function (m) { m.classList.remove("visible"); });
    var el = thread.querySelector("[data-step=\"" + index + "\"]");
    if (el) el.classList.add("visible");
    current = index;
    var fill = document.getElementById("progress-bar-fill");
    if (fill) fill.style.width = ((index + 1) / steps.length * 100) + "%";
    var chatContent = document.getElementById("chat-content");
    if (chatContent && CHAT_DETAILS[index]) chatContent.innerHTML = CHAT_DETAILS[index];
    document.querySelectorAll(".step-outline-item").forEach(function (item, i) {
      item.classList.toggle("active", i === index);
    });
  }

  function buildStep(step, index) {
    var div = document.createElement("div");
    div.className = "message";
    div.dataset.step = String(index);
    var content = "";
    if (step.welcomeImage) { content += ""; }
    content += render(step.body);
    if (step.taskBlock && step.taskBody) {
      content += '<div class="task-block">' +
        '<div class="task-label">' + (step.taskLabel || "Task") + '</div>' +
        '<div>' + render(step.taskBody) + '</div></div>';
    }
    if (step.companyExpectations) {
      content += '<div class="mental-model-doc">' + COMPANY_EXPECTATIONS_HTML + '</div>';
    }
    if (step.expectationsMapping) {
      content += '<div class="mental-model-doc">' + EXPECTATIONS_MAPPING_HTML + '</div>';
    }
    if (step.pmMentalModel) {
      content += '<div class="mental-model-doc">' + PM_MENTAL_MODEL_HTML + '</div>';
    }
    if (step.rulesGuidelines) {
      content += '<div class="mental-model-doc">' + RULES_GUIDELINES_HTML + '</div>';
    }
    if (step.competitiveAdvantage) {
      content += '<div class="mental-model-doc">' + COMPETITIVE_ADVANTAGE_HTML + '</div>';
    }
    if (step.survey) {
      var surveyUrl = (typeof SURVEY_GOOGLE_FORM_URL !== "undefined" && SURVEY_GOOGLE_FORM_URL)
        ? SURVEY_GOOGLE_FORM_URL
        : null;
      content += '<div class="survey-form">';
      if (surveyUrl) {
        content += '<p class="survey-q">Open the survey in a new tab, answer the questions, then click <strong>I\'ve completed the survey. Finish</strong> below.</p>' +
          '<a href="' + surveyUrl + '" target="_blank" rel="noopener" class="btn btn-download">Open survey (Google Form)</a>';
      } else {
        content += '<p class="survey-q">Survey link not configured.</p>';
      }
      content += '</div>';
    }
    var total = steps.length;
    var isLast = step.last || index === total - 1;
    var backBtn = index > 0 ? '<button class="btn btn-back" data-back>Back</button>' : "";
    var logoBlock = step.welcomeImage ? '<div class="welcome-logo-wrap"><img src="screenshots/cursor-logo.svg" alt="Cursor" class="welcome-logo"></div>' : "";
    var nextLabel = (isLast && step.survey) ? "I've completed the survey. Finish" : (isLast ? "Done" : "Next");
    div.innerHTML =
      '<div class="bubble">' +
        '<div class="label">Step ' + (index + 1) + ' of ' + total + '</div>' +
        logoBlock +
        '<div class="title">' + step.title + '</div>' +
        '<div class="content">' + content + '</div>' +
        '<div class="actions">' +
          backBtn +
          '<button class="btn" data-next type="button">' + nextLabel + '</button>' +
        '</div>' +
      '</div>';
    var nextBtn = div.querySelector("[data-next]");
    nextBtn.addEventListener("click", function () {
      if (isLast && step.survey) showCongrats();
      else if (isLast) showCongrats();
      else show(index + 1);
    });
    var backButton = div.querySelector("[data-back]");
    if (backButton) backButton.addEventListener("click", function () { show(index - 1); });
    return div;
  }

  function showCongrats() {
    document.querySelectorAll(".message.visible").forEach(function (m) { m.classList.remove("visible"); });
    var el = document.getElementById("congrats-page");
    if (el) el.classList.add("visible");
    current = "congrats";
    var fill = document.getElementById("progress-bar-fill");
    if (fill) fill.style.width = "100%";
  }

  function buildCongrats() {
    var div = document.createElement("div");
    div.className = "message";
    div.id = "congrats-page";
    div.dataset.step = "congrats";
    div.innerHTML =
      '<div class="bubble congrats">' +
        '<div class="congrats-icon">✓</div>' +
        '<h2>You\'re set</h2>' +
        '<p>You\'ve gone through the PM path—aligned with PM Performance Expectations and PM Onboarding: priorities & context, Chat, Composer, reading code/PRs, how Cursor supports your expectations, mental model, Cursor rules & guidelines, and the next-level prompt starters.</p>' +
        '<p>Use these features for ACV updates, release trackers, discovery docs, backup/transition docs, Jira, and triage. Revisit <strong>Priorities & context</strong>, <strong>How Cursor supports your PM expectations</strong>, and <strong>Take it to the next level</strong> anytime. Keep this page bookmarked.</p>' +
        '<div class="actions" style="justify-content: center; margin-top: 24px;">' +
          '<button class="btn btn-back" data-back-congrats>Back to guide</button>' +
        '</div>' +
      '</div>';
    div.querySelector("[data-back-congrats]").addEventListener("click", function () { show(steps.length - 1); });
    return div;
  }

  steps.forEach(function (step, i) { thread.appendChild(buildStep(step, i)); });
  thread.appendChild(buildCongrats());

  var stepOutline = document.getElementById("step-outline");
  if (stepOutline) {
    steps.forEach(function (step, i) {
      var item = document.createElement("div");
      item.className = "step-outline-item" + (i === 0 ? " active" : "");
      item.setAttribute("role", "button");
      item.tabIndex = 0;
      item.innerHTML = "<span class=\"step-num\">" + (i + 1) + "</span><span>" + step.title + "</span>";
      item.addEventListener("click", function () { show(i); });
      item.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(i); } });
      stepOutline.appendChild(item);
    });
  }

  show(0);
})();
