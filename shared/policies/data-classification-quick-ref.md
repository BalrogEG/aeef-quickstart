# Data Classification Quick Reference

Use this guide to determine what data can be used with AI tools.

## Classification Levels

| Level | Definition | Examples |
|-------|-----------|----------|
| **Public** | Information intended for public release | Marketing content, open-source code, public docs |
| **Internal** | Non-sensitive business information | Internal wikis, meeting notes, architecture diagrams |
| **Confidential** | Sensitive business or customer data | Customer PII, financial reports, contracts, proprietary algorithms |
| **Restricted** | Highest sensitivity; regulatory or legal impact | Authentication secrets, encryption keys, health records, payment card data |

## AI Tool Usage Rules by Level

| Level | AI Code Generation | AI Chat/Research | AI in Prompts | AI in CI/CD |
|-------|-------------------|-----------------|---------------|-------------|
| **Public** | Allowed | Allowed | Allowed | Allowed |
| **Internal** | Allowed with review | Allowed | Allowed -- do not paste verbatim | Allowed |
| **Confidential** | Not allowed in prompts | Describe abstractly only | Never include in prompts | Scan outputs only; no data input |
| **Restricted** | Prohibited | Prohibited | Prohibited | Prohibited -- manual review only |

## Key Rules

1. **When in doubt, classify up.** If you are unsure whether data is Internal or Confidential, treat it as Confidential.

2. **Never paste Confidential or Restricted data into AI prompts.** This includes customer names, emails, API keys, database connection strings, and financial figures.

3. **AI-generated code that handles Confidential or Restricted data must receive security review** before merging, regardless of how simple the change appears.

4. **Log and audit AI tool usage** when working with Internal or higher classification data. Include the `AI-Usage` field in your PR description.

5. **Redact before prompting.** If you need AI help with code that processes sensitive data, replace real values with placeholders before including context in your prompt.

---

*This guide implements AEEF PRD-STD-004 (Security Scanning) data handling requirements.*
