# Project: AEEF Quick Start (Go)

## Tech Stack
- Language: Go 1.23
- Router: go-chi/chi v5
- Testing: testing + testify
- Linting: golangci-lint

## Architecture
- Standard Go project layout: cmd/ for entry points, internal/ for private packages
- HTTP handlers in dedicated packages under internal/
- Middleware as chi-compatible handler wrappers
- No global mutable state; pass dependencies explicitly

## Coding Standards
- Follow Effective Go and Go Code Review Comments
- All exported functions and types must have doc comments
- Max function length: 40 lines
- Use errors.New() or fmt.Errorf() with %w for error wrapping
- Table-driven tests preferred

## Security Rules -- CRITICAL
- NEVER read or modify files in internal/auth/ or internal/crypto/ without explicit instruction
- NEVER hardcode secrets, API keys, or credentials
- NEVER use string formatting for SQL queries (use parameterized queries)
- NEVER use MD5 for security purposes; use SHA-256 minimum
- ALL user input must be validated before use
- ALL HTTP handlers must include error handling and proper status codes

## Common Commands
- Run tests: `go test -race ./...`
- Run linter: `golangci-lint run`
- Run dev server: `go run cmd/server/main.go`
- Build: `go build -o bin/server cmd/server/main.go`

## Git Rules
- NEVER commit directly to main
- ALWAYS create feature branches
- NEVER force push or run destructive commands
