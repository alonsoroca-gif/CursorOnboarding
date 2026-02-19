# Risks and Mitigations

> Template section for product specs. Copy into your spec and adjust risks to your product (technical, adoption, scope, dependency, security, compliance, etc.).

---

## Success metrics

| Metric | Target | How we measure |
|--------|--------|----------------|
| **Adoption** | e.g. % of target users active in first 30 days | Sign-ups, activations, or usage events in analytics. |
| **Outcome** | e.g. time-to-value or task completion rate | Pre/post comparison or in-product completion signals. |
| **Quality** | e.g. error rate, NPS, or support tickets | Monitoring, surveys, or support intake. |
| **Efficiency** | e.g. time or cost saved vs. baseline | Self-reported or system-derived (e.g. before/after workflow). |

Define 2–4 metrics that indicate the product is working; review at a set cadence (e.g. weekly post-launch) and adjust targets as needed.

---

## Risks and Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Scope creep** | Delivery slips; team overload | Medium | Define MVP and out-of-scope up front; use a “Phase 2” backlog for non-MVP ideas; gate new scope with a short impact check. |
| **Dependency on external API or platform** | Delays or breakage if API changes or is unavailable | Medium–High | Pin to documented API versions where possible; design a thin abstraction layer; document fallbacks and support contacts; add monitoring/alerting for integration failures. |
| **Low adoption or incorrect use** | Investment doesn’t translate to value | Medium | Include clear success metrics and usage tracking; invest in onboarding, docs, and in-product guidance; iterate based on feedback and usage data. |
| **Security or compliance gaps** | Data exposure, policy violations, rework | High | Identify compliance and security requirements early; design for least privilege and auditability; schedule a security/compliance review before launch. |
| **Technical debt or quality issues** | Slower future iterations; production incidents | Medium | Allocate time for testing, refactors, and code review; define “done” (e.g. tests, docs); track and limit known debt. |
| **Key person or vendor dependency** | Single point of failure; knowledge loss | Medium | Document decisions and runbooks; cross-train; identify backup owners and escalation paths. |
| **Misalignment with stakeholders** | Rework; conflicting priorities | Medium | Share spec and roadmap early; agree on success criteria and review cadence; capture assumptions and get sign-off. |

---

## How to use this section

1. **Copy** the table (or the whole section) into your product spec.
2. **Edit** rows so each risk is specific to your product (e.g. “Cursor Rules API not available” instead of “Dependency on external API”).
3. **Add or remove** rows for risks that matter in your context (e.g. regulatory, partner, or rollout risks).
4. **Tune** Impact and Likelihood if your process uses them (e.g. for prioritization or risk review).
5. **Reference** this section in go/no-go or launch checklists so mitigations are tracked.

---

*Last updated: Template for product specs.*
