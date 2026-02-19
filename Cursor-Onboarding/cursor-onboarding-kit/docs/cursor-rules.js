(function () {
  "use strict";

  const CURSORIGNORE_HTML = `
<div class="reference-doc">
<h4>Setup</h4>
<ol>
<li><strong>Windows:</strong> <code>copy cursorignore.template .cursorignore</code><br>
<strong>macOS/Linux:</strong> <code>cp cursorignore.template .cursorignore</code></li>
<li>Edit <code>.cursorignore</code> to include only relevant modules or directories. Example:
<pre># Ignore everything by default
**/*
# Include specific modules you work in
!src/moduleA/**
!src/moduleB/**</pre></li>
<li>Save and verify in Cursor that it focuses only on the specified areas.</li>
</ol>
<h4>Benefits</h4>
<ul>
<li>Focus on relevant code for your work.</li>
<li>Improve IDE performance by limiting scope.</li>
<li>Each developer can maintain their own <code>.cursorignore</code>.</li>
</ul>
<p><strong>For PMs:</strong> Restrict scope to docs and specs (e.g. <code>!docs/**</code>, <code>!**/specs/**</code>) so Chat and Composer use only the folders you care about.</p>
</div>`;

  const CURSORRULES_HTML = `
<div class="reference-doc">
<h4>What it captures</h4>
<ul>
<li>Domain-specific terminology</li>
<li>Project-specific architectural decisions</li>
<li>Custom design patterns</li>
<li>Legacy code constraints</li>
<li>Performance considerations</li>
</ul>
<h4>Benefits</h4>
<ul>
<li>Enforces consistency in AI-generated code to match team conventions.</li>
<li>Acts as living documentation for new team members.</li>
<li>Aligns AI suggestions with domain-specific requirements.</li>
<li>Reduces cognitive load by shifting style enforcement to AI.</li>
<li>Improves code quality through explicit standards.</li>
<li>Accelerates onboarding with AI that understands project conventions.</li>
</ul>
<p><strong>For PMs:</strong> Use <code>.cursorrules</code> (or Cursor Settings → Rules for AI) to define <strong>spec structure</strong>, <strong>section names</strong>, <strong>tone</strong>, and <strong>terminology</strong>. Then Chat and Composer will draft and edit in line with your product docs.</p>
</div>`;

  const SETTINGS_HTML = `
<div class="reference-doc">
<h4>Settings &amp; keybindings</h4>
<ul>
<li><strong>Access settings</strong> via gear icon or <strong>Cmd + ,</strong> (Mac) / <strong>Ctrl + ,</strong> (Windows).</li>
<li><strong>Customize keyboard shortcuts</strong> under Settings → Configure Keyboard Shortcuts.</li>
<li><strong>Common shortcuts:</strong> open Composer, toggle chat modes, accept/reject suggestions, navigate chats.</li>
<li><strong>Personalize</strong> themes, font sizes, and editor layouts.</li>
</ul>
</div>`;

  const BEST_PRACTICES_HTML = `
<div class="reference-doc">
<h4>Best practices</h4>
<ul>
<li>Use custom keybindings for repetitive tasks (e.g. test generation, refactoring; for PMs: opening Chat, opening Composer).</li>
<li>Switch AI modes by problem: <strong>Chat</strong> for drafting and Q&amp;A; <strong>Composer</strong> for multi-file edits.</li>
<li>Modify your setup dynamically as your workflow changes.</li>
</ul>
<p>These guidelines help tailor AI assistance to your workflow, improve performance, and ensure consistent code (and doc) quality across your team.</p>
</div>`;

  const steps = [
    {
      title: "Introduction",
      body: "This guide walks you through **Cursor rules and guidelines**: how to configure **.cursorignore**, **.cursorrules**, **settings**, and **keybindings** so the AI and your workspace match how your team works. Use it with the <a href=\"setup-chat.html\">setup guide</a> and <a href=\"onboarding-pm.html\">PM onboarding</a>.",
      last: false
    },
    {
      title: ".cursorignore file",
      body: "**Purpose:** Customize your Cursor workspace by specifying only the parts of the codebase you actively work on. This focuses the AI and improves performance.",
      extraHtml: CURSORIGNORE_HTML,
      last: false
    },
    {
      title: ".cursorrules file",
      body: "**Purpose:** A configuration file that defines how the AI interacts with your codebase—bridging human coding standards and AI-generated suggestions.",
      extraHtml: CURSORRULES_HTML,
      last: false
    },
    {
      title: "Settings and keybindings",
      body: "Quick access to preferences and shortcuts so you can tailor Cursor to your workflow.",
      extraHtml: SETTINGS_HTML,
      last: false
    },
    {
      title: "Best practices",
      body: "Put it all together: keybindings for repetitive tasks, when to use Chat vs Composer, and how to evolve your setup over time.",
      extraHtml: BEST_PRACTICES_HTML,
      last: true
    }
  ];

  const CHAT_DETAILS = [
    "<p><strong>Rules &amp; guidelines</strong> help you and your team get consistent results from Cursor. Start with .cursorignore and .cursorrules, then adjust settings and keybindings.</p>",
    "<p><strong>.cursorignore</strong> limits which files and folders Cursor (and the AI) can see. Use it to focus on the modules or docs you work in and to speed up the IDE.</p>",
    "<p><strong>.cursorrules</strong> tells the AI your terminology, patterns, and conventions so generated code and docs match your team’s style.</p>",
    "<p><strong>Settings</strong> (Cmd+,) and <strong>Keyboard Shortcuts</strong> let you open Chat, Composer, and other features quickly and customize the editor.</p>",
    "<p><strong>Best practices:</strong> Use Chat for drafting and Q&amp;A; use Composer for multi-file edits. Custom keybindings save time. Revisit this guide as your workflow changes.</p>"
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
    if (fill) fill.style.width = (typeof index === "number" ? (index + 1) / (steps.length + 1) : 1) * 100 + "%";
    var chatContent = document.getElementById("chat-content");
    if (chatContent && typeof index === "number" && CHAT_DETAILS[index]) chatContent.innerHTML = CHAT_DETAILS[index];
    document.querySelectorAll(".step-outline-item").forEach(function (item, i) {
      item.classList.toggle("active", i === index);
    });
  }

  function showCongrats() {
    document.querySelectorAll(".message.visible").forEach(function (m) { m.classList.remove("visible"); });
    var el = document.getElementById("congrats-page");
    if (el) el.classList.add("visible");
    current = "congrats";
    var fill = document.getElementById("progress-bar-fill");
    if (fill) fill.style.width = "100%";
  }

  function buildStep(step, index) {
    var div = document.createElement("div");
    div.className = "message";
    div.dataset.step = String(index);
    var content = render(step.body);
    if (step.extraHtml) content += step.extraHtml;
    var total = steps.length;
    var isLast = step.last || index === total - 1;
    var backBtn = index > 0 ? '<button class="btn btn-back" data-back>Back</button>' : "";
    var nextLabel = isLast ? "Done" : "Next";
    div.innerHTML =
      '<div class="bubble">' +
        '<div class="label">Step ' + (index + 1) + ' of ' + total + '</div>' +
        '<div class="title">' + step.title + '</div>' +
        '<div class="content">' + content + '</div>' +
        '<div class="actions">' +
          backBtn +
          '<button class="btn" data-next type="button">' + nextLabel + '</button>' +
        '</div>' +
      '</div>';
    var nextBtn = div.querySelector("[data-next]");
    if (nextBtn) nextBtn.addEventListener("click", function () {
      if (isLast) showCongrats(); else show(index + 1);
    });
    var backButton = div.querySelector("[data-back]");
    if (backButton) backButton.addEventListener("click", function () { show(index - 1); });
    return div;
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
        '<p>You\'ve gone through Cursor rules and guidelines: .cursorignore, .cursorrules, settings, keybindings, and best practices. Use these to tailor Cursor to your workflow and team standards.</p>' +
        '<p>Revisit any step from the sidebar. Combine with the <a href="setup-chat.html">setup guide</a> and <a href="onboarding-pm.html">PM onboarding</a> for the full picture.</p>' +
        '<div class="actions" style="justify-content: center; margin-top: 24px;">' +
          '<a href="index.html" class="btn">Back to home</a>' +
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

  document.addEventListener("keydown", function (e) {
    var tag = document.activeElement && document.activeElement.tagName ? document.activeElement.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || (document.activeElement && document.activeElement.getAttribute("contenteditable") === "true")) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (typeof current === "number" && current < steps.length - 1) show(current + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (typeof current === "number" && current > 0) show(current - 1);
    }
  });

  show(0);
})();
