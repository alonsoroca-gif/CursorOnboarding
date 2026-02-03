# Interview Notes - Cursor Onboarding Discovery

**Date Range**: _______________
**Interviews Completed**: 1 / 3

---

## Interview Summary

### Interview #1
**Name**: [Co-worker — anonymize if needed]
**Role**: Engineering
**Date**: _______________

**Key Takeaways:**
- Light to moderate Cursor experience; strong engineering background; self-directed learner; no prior formal onboarding.
- Primary use: code summarization (SQL, Node.js), debugging and logic analysis, understanding complex or unfamiliar codebases.
- Measured benefits: 4–8x time savings on debugging; faster understanding of complex logic; effective identification of potential bugs and edge cases.
- Key challenges: setup friction at company level; false sense of security due to Cursor’s permission model; insufficient guardrails; unclear best practices and responsibility boundaries; difficulty evaluating whether generated code is correct or safe.
- Mental model to teach: Cursor is a powerful AI-enabled coding environment, not autopilot; user is responsible for verifying logic, validating outputs, and applying appropriate guardrails.
- Preferred learning: hands-on, real-world examples, practical problems, minimal theory, no formal classes.
- Desired outcome: users feel confident evaluating Cursor-generated code, understand safe vs unsafe usage patterns, and can quickly apply Cursor to real work without over-trusting it.

**Priority Needs:**
1. Code summarization (SQL, Node.js)
2. Debugging and logic analysis
3. Understanding complex or unfamiliar codebases

---

### Interview #2
**Name**: _______________
**Role**: _______________
**Date**: _______________

**Key Takeaways:**
-
-
-

**Priority Needs:**
1.
2.
3.

---

### Interview #3
**Name**: _______________
**Role**: _______________
**Date**: _______________

**Key Takeaways:**
-
-
-

**Priority Needs:**
1.
2.
3.

---

## Synthesis & Insights

### Common Pain Points
1. Setup friction at company level
2. False sense of security due to Cursor’s permission model; insufficient guardrails
3. Unclear best practices and responsibility boundaries; difficulty evaluating whether generated code is correct or safe

### Most Requested Features
1. Code summarization (SQL, Node.js)
2. Debugging and logic analysis
3. Understanding complex or unfamiliar codebases; identifying bugs and edge cases

### Preferred Learning Styles
- Written documentation: _ people
- Video tutorials: _ people
- Live workshops: _ people
- Hands-on examples: 1 person (real-world, practical, minimal theory)

### Concerns & Barriers
- Permission model can create false sense of security; need to teach when to trust vs double-check
- Need clear guidance on how to validate generated code and apply guardrails

### Surprising Insights
> Cursor is not autopilot; the user is responsible for verifying logic, validating outputs, and applying appropriate guardrails. Onboarding should teach "how to think with Cursor," not just features.

---

## Impact on Onboarding Kit Design

### Example Workflows to Build (Prioritized)
Based on interviews, the 4 examples should be:

1. **Quick project kickoff**: Light entry point; sets up "ask Cursor, get output" pattern.
   - Who requested: Interview #1 (implicit — real-world use)

2. **Data summary + analysis**: SQL/data workflows; aligns with code summarization use case.
   - Who requested: Interview #1

3. **Writing flow**: AI-assisted drafts; general utility.
   - Who requested: (To be confirmed in further interviews)

4. **Debugging + code exploration**: High value — debugging, logic analysis, understanding unfamiliar code.
   - Who requested: Interview #1 (primary use case)

### Documentation Priorities
Must include:
- [x] Real-world / company-relevant examples (not generic demos)
- [x] Teach "how to think with Cursor," not just features
- [x] When to trust Cursor, when to double-check, how to validate generated code
- [x] Troubleshooting section: user error vs context vs Cursor limitations
- [x] Dedicated mental model / responsible-use doc (Cursor is not autopilot; user responsibilities)

Nice to have:
- [ ] Company-level setup guidance (friction noted in Interview #1)
- [ ] Permission model and guardrails explained

### Workshop Format Decision
- **Duration**: 30–45 minutes
- **Format**: Live demo + hands-on lab + Q&A (hands-on preferred)
- **Best time**: _______________
- **Key topics to cover**: Mental model (verify, validate, guardrails); evaluating Cursor output; safe vs unsafe usage; applying Cursor without over-trusting; debugging/code-understanding demos

### Template Requirements
Based on needs:
- Real-world / company-relevant scenarios in examples
- Each workflow should include "when to double-check" / validation step
- Link to mental model and troubleshooting (user vs context vs Cursor)

---

## Quotes & Highlights

> Cursor is a powerful AI-enabled coding environment; it is not autopilot. The user is responsible for verifying logic, validating outputs, and applying appropriate guardrails.
> — Interview #1 synthesis

> 4–8x time savings on debugging tasks; faster understanding of complex logic; effective identification of potential bugs and edge cases.
> — Interview #1 (measured benefits)

> Onboarding should teach "how to think with Cursor," not just features — when to trust, when to double-check, how to validate.
> — Interview #1 (desired outcome)

---

## Action Items

- [ ] Update README.md with refined workflow priorities
- [ ] Adjust Week 3 example plans based on findings
- [ ] Note specific use cases for workshop demos
- [ ] Identify team members willing to test examples
- [ ] Schedule workshop based on availability preferences

---

## Top 10 Features to Focus On

Based on interviews and team needs:

1. Code summarization (SQL, Node.js)
2. Debugging and logic analysis
3. Understanding complex or unfamiliar codebases
4. Identifying potential bugs and edge cases
5. _______________ (to be filled from Cursor docs + Interview #2–3)
6. _______________
7. _______________
8. _______________
9. _______________
10. _______________

---

**Status**: ☐ In Progress  ☑ 1 interview complete

**Last Updated**: _______________
