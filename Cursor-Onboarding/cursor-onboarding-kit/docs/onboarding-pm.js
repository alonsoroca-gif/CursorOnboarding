(function () {
  "use strict";

  const steps = [
    {
      title: "Who this is for",
      body: "This path is for **product and program managers**. You'll learn the features that help you most: drafting and editing docs in Chat, making structured edits with Composer, and reading or summarizing code and PRs. Difficulty: **moderate to high**. You'll do real tasks in Cursor.",
      welcomeImage: true
    },
    {
      title: "What you need before starting",
      body: "**Cursor installed and signed in.** If you haven't set up Cursor yet, complete the main onboarding first (download, install, sign in), then return here.\n\n**A real doc or repo** (optional but recommended). Use a spec, PRD, or a repo you work with so the tasks below feel relevant.",
      last: false
    },
    {
      title: "Feature 1: Chat for drafting and editing",
      body: "**Why it matters:** Chat lets you draft sections, rewrite copy, and refine specs without leaving Cursor. You stay in control: you prompt, review, and edit the output.\n\n**Your task (moderate):** Open a doc in Cursor (or create a new one). Open Chat (**Cmd+Shift+L** / **Ctrl+Shift+L**). Ask Cursor to draft something useful (e.g. \"Draft a 'Risks and mitigations' section for a product spec\" or \"Turn this bullet list into two short paragraphs\"). Edit the suggestion and use it in your doc.\n\n**Success:** You got a draft from Chat and incorporated it. You know how to prompt and refine.",
      taskBlock: true,
      taskLabel: "Hands-on",
      taskBody: "Do this in Cursor now: one doc, one Chat prompt, one edit. Then click Next."
    },
    {
      title: "Feature 2: Composer for multi-part edits",
      body: "**Why it matters:** Composer can apply structured changes across a file or several files (e.g. add a section everywhere, restructure headings, standardize format). You request the change, then review the diff before accepting.\n\n**Your task (moderate–high):** Open a doc or small set of files in Cursor. Use Composer (e.g. **Cmd+I** / **Ctrl+I** or the Composer entry point) to request a multi-part edit (e.g. \"Add a 'Success metrics' subsection after the intro in this spec\" or \"Make all section headers follow the pattern: ## Section name\"). Review the proposed diff and accept or adjust.\n\n**Success:** You requested a structured edit and reviewed the result. You're comfortable using Composer for doc or cross-file changes.",
      taskBlock: true,
      taskLabel: "Hands-on",
      taskBody: "Do this in Cursor: one Composer request, review the diff, then click Next."
    },
    {
      title: "Feature 3: Reading code and PRs",
      body: "**Why it matters:** You don't have to be a coder to get value. Chat can summarize what a file or PR does, in plain language. Use that for standups, tickets, or knowing what shipped.\n\n**Your task (moderate):** Open a code file or a PR in Cursor. In Chat, ask Cursor to summarize it (e.g. \"Summarize what this file does in 3 bullet points\" or \"What changed in this PR in plain language?\"). Use that summary (e.g. in a ticket or to unblock a conversation).\n\n**Success:** You have a summary you could share with your team. You know how to use Cursor to read code you don't write.",
      taskBlock: true,
      taskLabel: "Hands-on",
      taskBody: "Do this in Cursor: open a file or PR, ask for a summary in Chat, then click Next."
    },
    {
      title: "Mental model for PMs",
      body: "Same principles as for engineers, framed for your work: verify outputs, protect sensitive info, and know when to double-check.",
      pmMentalModel: true,
      last: false
    },
    {
      title: "Quick survey",
      body: "We'd love to know if this PM onboarding was helpful and any advice you have. Your responses are recorded so we can improve the guide.",
      survey: true,
      last: true
    }
  ];

  const PM_MENTAL_MODEL_HTML = `
<h4>Your responsibilities</h4>
<ul>
<li><strong>Verify drafts and suggestions:</strong> Cursor can get tone or facts wrong. You own what you ship. Read and edit before sharing externally.</li>
<li><strong>Protect sensitive information:</strong> Don't paste customer PII, confidential roadmap, or unreleased strategy into Chat. Follow your company's policy on AI tools.</li>
<li><strong>When to trust more:</strong> Internal drafts, restructuring existing docs, summarization of code you can spot-check with an engineer.</li>
<li><strong>When to double-check:</strong> Customer-facing copy, legal or compliance wording, anything that could be quoted externally.</li>
</ul>
<h4>Where this applies</h4>
<p>Specs, PRDs, tickets, and code summaries. Use the same discipline for every Cursor output: you decide what to accept, change, or reject.</p>
`;

  const SURVEY_GOOGLE_FORM_URL = "https://forms.gle/zN8mDUkJF3odbdmw7";

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
    if (step.pmMentalModel) {
      content += '<div class="mental-model-doc">' + PM_MENTAL_MODEL_HTML + '</div>';
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
        '<p>You\'ve gone through the PM path: Chat for drafting, Composer for multi-part edits, and reading code/PRs. You know your responsibilities (verify, protect sensitive info, double-check when it matters).</p>' +
        '<p>Use these features on real specs and repos. Keep this page bookmarked if you want to revisit the tasks.</p>' +
        '<div class="actions" style="justify-content: center; margin-top: 24px;">' +
          '<button class="btn btn-back" data-back-congrats>Back to guide</button>' +
        '</div>' +
      '</div>';
    div.querySelector("[data-back-congrats]").addEventListener("click", function () { show(steps.length - 1); });
    return div;
  }

  steps.forEach(function (step, i) { thread.appendChild(buildStep(step, i)); });
  thread.appendChild(buildCongrats());
  show(0);
})();
