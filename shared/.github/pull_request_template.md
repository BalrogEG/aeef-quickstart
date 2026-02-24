## Description

<!-- Brief description of the changes in this PR -->

## AI Disclosure

<!-- Fill in ALL fields below. This is required by AEEF PRD-STD-002. -->

| Field | Value |
|-------|-------|
| **AI-Usage** | `none` / `assisted` / `generated` / `paired` |
| **AI-Tool** | <!-- e.g., GitHub Copilot, Claude, Cursor, ChatGPT, or N/A --> |
| **AI-Prompt-Ref** | <!-- Link to prompt, template name, or brief description. N/A if none. --> |
| **AI-Risk-Notes** | <!-- Any concerns about AI output quality, hallucinations, or security. N/A if none. --> |

## Testing Checklist

- [ ] Unit tests added or updated for all changed code
- [ ] Tests pass locally (`npm test` / `pytest` / `go test ./...`)
- [ ] Coverage meets minimum threshold (70%+)
- [ ] Edge cases and error paths are tested
- [ ] AI-generated test cases have been reviewed for correctness

## Security Checklist

- [ ] No secrets, API keys, or credentials in code or comments
- [ ] No hardcoded passwords or connection strings
- [ ] User input is validated and sanitized
- [ ] SQL queries use parameterized statements (no string concatenation)
- [ ] Crypto functions use approved algorithms (SHA-256 or better)
- [ ] Dependencies have been checked for known vulnerabilities
- [ ] Semgrep scan passes with no unresolved errors

## Review Notes

<!-- Any additional context for reviewers -->
