# Project: AEEF Quick Start (TypeScript)

## Tech Stack
- Language: TypeScript 5.x (strict mode)
- Runtime: Node.js 22 LTS
- Framework: Express.js
- Testing: Vitest + Supertest
- Package manager: npm

## Architecture
- Clean architecture: controllers / services / repositories
- All database access through parameterized queries (no raw SQL string concatenation)
- Error handling: custom error classes with user-friendly messages
- Logging: structured JSON output

## Coding Standards
- ESLint + Prettier enforced in CI
- Functions must be < 50 lines; extract helpers if longer
- Use named exports, not default exports
- Prefer `const` over `let`; never use `var`
- Error messages must be user-friendly (no stack traces in responses)

## Security Rules -- CRITICAL
- NEVER read or modify files in src/auth/ or src/crypto/ without explicit instruction
- NEVER hardcode secrets, API keys, or credentials
- NEVER use string interpolation for SQL (use parameterized queries)
- NEVER disable TypeScript strict checks or ESLint rules
- ALL user input must be validated with zod schemas before use
- ALL API endpoints require authentication middleware unless explicitly public

## Common Commands
- Run tests: `npm test`
- Run linter: `npm run lint`
- Run dev server: `npm run dev`
- Build: `npm run build`

## Git Rules
- NEVER commit directly to main
- ALWAYS create feature branches: `feat/description` or `fix/description`
- NEVER force push
- NEVER run destructive commands (rm -rf, DROP TABLE, etc.)
