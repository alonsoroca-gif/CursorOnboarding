(function () {
  "use strict";

  const CURSOR_DOWNLOADS = "https://cursor.com/downloads";
  const CURSOR_DOWNLOAD_URLS = {
    macos: "https://api2.cursor.sh/updates/download/golden/darwin-arm64/cursor/2.4",
    windows: "https://api2.cursor.sh/updates/download/golden/win32-x64-user/cursor/2.4",
    linux: "https://api2.cursor.sh/updates/download/golden/linux-x64-deb/cursor/2.4"
  };
  const steps = [
    {
      title: "Welcome",
      body: "Let's get Cursor on your machine. This is **Part 1** — we'll take you through download and install. You do each part, then tap **Next** when you're ready.\n\nIf your company blocks installs or SSO, reach **#ask-it** on Slack first.",
      welcomeImage: true
    },
    {
      title: "Start fresh: What is Cursor?",
      body: "Before we get into setup, here's the big picture.",
      cursorIsIsNot: true
    },
    {
      title: "Check prerequisites",
      body: "Before downloading, confirm:\n\n• **OS:** macOS, Windows, or Linux\n• **Access:** Admin/sudo (or Windows User install)\n• **Internet:** Required (Cursor uses cloud AI)\n• **RAM:** 8 GB min, 16 GB recommended for large codebases\n• **Account:** GitHub or work account for sign-in"
    },
    {
      title: "Download Cursor",
      body: "Choose your OS below to open the Cursor download page. Pick the right build (e.g. Mac ARM64 for Apple Silicon, Windows User if you don't have admin).",
      downloadButtons: true
    },
    {
      title: "Install Cursor",
      body: "Follow the steps for your OS below. Click your OS to open the install page if you haven't downloaded yet. Watch the short install walkthrough below.",
      osBlocks: true,
      installVideo: true,
      downloadButtons: true
    },
    {
      title: "Download the smoke test file",
      body: "Create a folder on your machine called **\"Practice with Cursor\"** (for example on your Desktop or in your dev workspace).\n\nThen download the **smoke test file** you'll use in Part 2 inside Cursor and save it into that folder. When you open Cursor later, you'll choose this **\"Practice with Cursor\"** folder so you can open the smoke test file and verify the AI is working.",
      smokeTestFile: true
    },
    {
      title: "Open Cursor and run the smoke test",
      body: "**Part 2 happens inside Cursor.** Open your **\"Practice with Cursor\"** folder and run a quick smoke test on `smoke-test-example.md`.\n\n**1. Open the Practice with Cursor folder in Cursor**\n- Launch **Cursor**.\n- On the first screen, click **Open project**.\n- Choose the **\"Practice with Cursor\"** folder you created in the previous step.\n\n**2. Run the smoke test**\n- In the left sidebar, open `smoke-test-example.md`.\n- Open Chat:\n  - Mac: **Cmd+Shift+L**\n  - Windows / Linux: **Ctrl+Shift+L**\n- Paste this prompt into Chat and send it:\n\n`Summarize the \"Sample paragraph\" in this file in your own words, and tell me one way I might use Cursor on real code next.`\n\nIf the answer basically makes sense and matches the paragraph, your AI setup is working.",
      handoff: false,
      last: false
    },
    {
      title: "The mental model: Some advice for success",
      body: "When you use Cursor, you own the outcome. Below: your responsibilities (verify, validate, guardrails) and when to double-check.",
      mentalModelResponsibilities: true,
      last: false
    },
    {
      title: "Quick survey",
      body: "We'd love to know if this onboarding was helpful and any advice you have. Your responses are recorded so we can improve the guide.",
      survey: true,
      last: true
    }
  ];
  // Google Form URL for the survey (Step 9). Create a form at forms.google.com, add your questions (e.g. "Was this helpful?", "Any advice?"), then paste the "View form" link here. Responses go to your Google Sheet.
  const SURVEY_GOOGLE_FORM_URL = "https://forms.gle/zN8mDUkJF3odbdmw7";
  const osBlocks = {
    macos: {
      label: "macOS",
      steps: [
        "Open the .dmg and drag Cursor to Applications.",
        "Open from Applications or Spotlight.",
        "If macOS says \"unidentified developer\", go to System Settings → Privacy & Security and allow Cursor.",
        "On first launch, grant any requested permissions (e.g. Accessibility)."
      ]
    },
    windows: {
      label: "Windows",
      steps: [
        "Run the installer. (User install = no admin; System = admin.)",
        "Complete the steps in the wizard.",
        "Launch Cursor from the Start menu or desktop shortcut.",
        "If policy blocks the install, reach **#ask-it** on Slack."
      ]
    },
    linux: {
      label: "Linux",
      steps: [
        ".deb: run <code>sudo dpkg -i cursor*.deb</code> (then <code>sudo apt --fix-broken install</code> if needed).",
        ".rpm: run <code>sudo rpm -i cursor*.rpm</code>.",
        ".AppImage: <code>chmod +x Cursor*.AppImage</code> then run it (FUSE may be required).",
        "Launch from app menu or shell (<code>cursor</code> if in PATH)."
      ]
    }
  };

  const CURSOR_IS_ISNOT_HTML = `
<h4>What Cursor Is</h4>
<ul><li><strong>A powerful AI-enabled coding environment.</strong> Cursor helps you write, summarize, debug, and understand code faster by combining your editor with AI assistance.</li></ul>

<h4>What Cursor Is Not</h4>
<ul><li><strong>Autopilot.</strong> Cursor does not replace your judgment. It suggests and generates; you decide what to accept, change, or reject. You are responsible for the code that ships.</li></ul>
`;

  const MENTAL_MODEL_RESPONSIBILITIES_HTML = `
<h4>Your Responsibilities</h4>
<p>When using Cursor, you are responsible for:</p>
<ol>
<li><strong>Verifying logic</strong> — Does the generated code do what you intend? Does the reasoning hold up?</li>
<li><strong>Validating outputs</strong> — Run tests, spot-check results, review diffs before committing.</li>
<li><strong>Applying appropriate guardrails</strong> — Know what not to send to Cursor (sensitive information, e.g. credentials or PII); understand your company's policy on AI tools and permissions.</li>
</ol>

<h4>When to Trust Cursor</h4>
<ul>
<li>Boilerplate, scaffolding, and obvious refactors when the change is small and easy to verify.</li>
<li>Summarization and explanation of code you can then verify by reading.</li>
<li>Repetitive edits that follow a clear pattern you can review.</li>
</ul>

<h4>When to Double-Check</h4>
<ul>
<li>Security-sensitive code (auth, permissions, sensitive information).</li>
<li>Logic that affects money, compliance, or safety.</li>
<li>Complex or subtle behavior where bugs are hard to spot.</li>
<li>Anything you would normally have a second pair of eyes on.</li>
</ul>

<h4>How to Validate Generated Code</h4>
<ul>
<li><strong>Run tests</strong> — If the project has tests, run them after applying Cursor's changes.</li>
<li><strong>Review the diff</strong> — Don't accept large changes without reading what changed.</li>
<li><strong>Spot-check behavior</strong> — Run the app or script with a few inputs; confirm edge cases if it matters.</li>
<li><strong>Check permissions and context</strong> — Ensure Cursor didn't suggest sending or logging data you don't want to expose.</li>
</ul>

<h4>Safe vs Unsafe Usage</h4>
<ul>
<li><strong>Safe:</strong> Using Cursor for summarization, debugging, and understanding code in a sandbox or non-sensitive repo; validating all output before commit; following company policy on what can be sent to AI.</li>
<li><strong>Unsafe:</strong> Pasting sensitive information (e.g. credentials, PII) into Cursor; accepting generated code without review in critical paths; assuming Cursor's output is correct without verification.</li>
</ul>

<h4>Where This Applies</h4>
<ul>
<li><strong>First run:</strong> Read this doc as part of setup.</li>
<li><strong>Examples:</strong> Each workflow in examples/ includes a "when to double-check" or validation step.</li>
<li><strong>Troubleshooting:</strong> When something goes wrong, see troubleshooting (user error vs context vs Cursor limitations).</li>
<li><strong>Workshop:</strong> The live session reinforces this mental model and links back here.</li>
</ul>
`;

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
    if (step.cursorIsIsNot) {
      content += '<div class="mental-model-doc">' + CURSOR_IS_ISNOT_HTML + '</div>';
    }
    if (step.mentalModel) {
      content += '<div class="mental-model-doc">' + CURSOR_IS_ISNOT_HTML + MENTAL_MODEL_RESPONSIBILITIES_HTML + '</div>';
    }
    if (step.mentalModelResponsibilities) {
      content += '<div class="mental-model-doc">' + MENTAL_MODEL_RESPONSIBILITIES_HTML + '</div>';
    }
    if (step.survey) {
      var surveyUrl = (typeof SURVEY_GOOGLE_FORM_URL !== "undefined" && SURVEY_GOOGLE_FORM_URL && SURVEY_GOOGLE_FORM_URL.indexOf("YOUR_FORM_ID") === -1)
        ? SURVEY_GOOGLE_FORM_URL
        : null;
      content += '<div class="survey-form">';
      if (surveyUrl) {
        content += '<p class="survey-q">Open the survey in a new tab, answer the questions, then click <strong>I\'ve completed the survey — Finish</strong> below.</p>' +
          '<a href="' + surveyUrl + '" target="_blank" rel="noopener" class="btn btn-download">Open survey (Google Form)</a>';
      } else {
        content += '<p class="survey-q">Survey link not configured. Set <code>SURVEY_GOOGLE_FORM_URL</code> in setup-chat.js to your Google Form URL (see README).</p>';
      }
      content += '</div>';
    }
    if (step.smokeTestFile) {
      content += '<div class="smoke-test-download"><a href="smoke-test-example.md" download class="btn btn-download">Download smoke-test-example.md</a></div>';
    }
    if (step.downloadButtons) {
      content += '<div class="download-buttons">' +
        '<a href="' + CURSOR_DOWNLOAD_URLS.macos + '" target="_blank" rel="noopener" class="btn btn-download">Download for macOS</a>' +
        '<a href="' + CURSOR_DOWNLOAD_URLS.windows + '" target="_blank" rel="noopener" class="btn btn-download">Download for Windows</a>' +
        '<a href="' + CURSOR_DOWNLOAD_URLS.linux + '" target="_blank" rel="noopener" class="btn btn-download">Download for Linux</a>' +
        '</div>';
    }
    if (step.osBlocks) {
      var videoHtml = step.installVideo ? '<div class="install-video-wrap"><video class="install-video" controls preload="auto" autoplay muted playsinline loop><source src="screenshots/install-demo.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>' : "";
      ["macos", "windows", "linux"].forEach(function (key) {
        var block = osBlocks[key];
        var listItems = block.steps.map(function (s) { return "<li>" + render(s) + "</li>"; }).join("");
        content += '<div class="os-block"><strong>' + block.label + '</strong><ol class="os-steps">' + listItems + '</ol></div>';
        if (key === "macos" && videoHtml) content += videoHtml;
      });
    }
    var total = steps.length;
    var isLast = step.last || index === total - 1;
    var backBtn = index > 0 ? '<button class="btn btn-back" data-back>Back</button>' : "";
    var logoBlock = step.welcomeImage ? '<div class="welcome-logo-wrap"><img src="screenshots/cursor-logo.svg" alt="Cursor" class="welcome-logo"></div>' : "";
    var nextLabel = (isLast && step.survey) ? "I've completed the survey — Finish" : (isLast ? "Done" : "Next");
    div.innerHTML =
      '<div class="bubble">' +
        '<div class="label">Step ' + (index + 1) + ' of ' + total + '</div>' +
        logoBlock +
        '<div class="title">' + step.title + '</div>' +
        '<div class="content">' + content + '</div>' +
        '<div class="actions">' +
          backBtn +
          '<button class="btn" data-next type="' + (isLast && step.survey ? "button" : "button") + '">' + nextLabel + '</button>' +
        '</div>' +
      '</div>';
    var nextBtn = div.querySelector("[data-next]");
    nextBtn.addEventListener("click", function () {
      if (isLast && step.survey) {
        showCongrats();
      } else if (isLast) showCongrats();
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
        '<h2>You\'re set with Cursor</h2>' +
        '<p>You\'ve installed Cursor, created a <strong>Practice with Cursor</strong> folder, run the smoke test on <strong>smoke-test-example.md</strong>, and read the mental model for how to use Cursor safely.</p>' +
        '<p>Keep this page handy as a reference. From here on, you can use the same patterns on your real projects: run quick smoke tests, ask Cursor to explain code, and always verify and validate before you ship.</p>' +
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
