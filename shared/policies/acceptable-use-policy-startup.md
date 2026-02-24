# AI Acceptable Use Policy (Startup Edition)

**Effective Date:** [Insert Date]
**Owner:** Engineering Lead
**Review Cadence:** Quarterly

---

## 1. Approved AI Tools

The following AI-assisted development tools are approved for use:

| Tool | Approved Use | Conditions |
|------|-------------|------------|
| GitHub Copilot | Code completion, test generation | Must have business license; disable for sensitive files |
| Claude (Anthropic) | Code generation, review assistance, documentation | No confidential data in prompts |
| Cursor IDE | AI-assisted editing | Same rules as underlying model provider |
| ChatGPT (OpenAI) | Research, documentation drafting | No proprietary code or data in prompts |

Any tool not listed above requires written approval from the Engineering Lead before use.

## 2. Prohibited Uses

The following uses of AI tools are **strictly prohibited**:

- Generating or modifying authentication, authorization, or cryptographic code without explicit human design review
- Submitting confidential or restricted data (customer PII, API keys, internal credentials) to any AI tool
- Using AI-generated code in production without human review and testing
- Disabling security scanning or linting rules to accommodate AI-generated output
- Representing AI-generated work as entirely human-authored in regulatory or compliance contexts

## 3. Human Review Requirements

All AI-generated or AI-assisted code must be reviewed by a human before merging:

| Change Type | Minimum Review |
|-------------|---------------|
| New feature code | 1 peer reviewer who understands the domain |
| Security-sensitive code | 2 reviewers, at least 1 with security expertise |
| Infrastructure / CI changes | 1 reviewer with ops/platform experience |
| Documentation | 1 reviewer for technical accuracy |

**Every pull request must include AI disclosure** using the PR template fields:
- `AI-Usage`: none / assisted / generated / paired
- `AI-Tool`: which tool was used
- `AI-Prompt-Ref`: link or description of the prompt
- `AI-Risk-Notes`: any concerns about the AI output

## 4. Incident Reporting

If you discover any of the following, report it immediately to the Engineering Lead:

- AI-generated code that introduced a security vulnerability
- Accidental submission of confidential data to an AI tool
- AI tool producing output that violates licensing or IP rights
- AI-generated code that passed review but contained hallucinated dependencies or functions

**Reporting channel:** [Insert Slack channel or email]
**Response SLA:** Acknowledge within 4 hours, remediate within 24 hours

---

*This policy implements AEEF PRD-STD-001 (Prompt Engineering) requirements for AI tool governance.*
