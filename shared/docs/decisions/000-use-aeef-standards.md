# ADR-000: Adopt AEEF Standards for AI-Assisted Development

## Status

Accepted

## Date

[Insert Date]

## Context

Our team uses AI-assisted development tools (GitHub Copilot, Claude, Cursor) for day-to-day coding. Without standardized guardrails, AI-generated code risks introducing:

- Security vulnerabilities (hallucinated functions, deprecated crypto, SQL injection)
- Compliance gaps (no audit trail for AI-generated code)
- Quality inconsistencies (no minimum review or testing requirements)
- Governance blind spots (no policy on what data can be sent to AI tools)

We need a framework that provides practical, enforceable standards without slowing down development velocity.

## Decision

We adopt the **AI Engineering Excellence Framework (AEEF)** Tier 1 standards as our baseline for AI-assisted development governance.

Specifically, we implement:

- **PRD-STD-001** (Prompt Engineering): CLAUDE.md and .cursorrules files with security boundaries
- **PRD-STD-002** (Code Review): PR templates with AI disclosure fields
- **PRD-STD-003** (Testing): Minimum 70% coverage with automated test gates
- **PRD-STD-004** (Security Scanning): Semgrep rules targeting AI-specific vulnerability patterns
- **PRD-STD-008** (Dependency Scanning): Automated dependency audits in CI

## Consequences

**Positive:**
- Every PR has an audit trail for AI tool usage
- Security scanning catches common AI code generation mistakes automatically
- Developers get clear guidance on what AI tools can and cannot do
- Compliance teams have documented evidence of AI governance

**Negative:**
- Initial setup time (~30 minutes per stack using the quickstart template)
- Developers must fill in AI disclosure fields on every PR
- Some AI-generated code will be flagged by Semgrep and require manual review

**Neutral:**
- Standards will need periodic review as AI tools evolve
- Team training on the PR template and disclosure fields is recommended

## References

- AEEF Standards: https://aeef.ai
- Quick Start Template: https://aeef.ai/reference-implementations/quickstart
