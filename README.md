# AEEF Quick Start -- Safe AI-Assisted Development in 30 Minutes

A working reference implementation of **AEEF Tier 1** standards. Clone this template, pick your stack, and ship AI-assisted code with guardrails from day one.

## What This Is

This repository is a **GitHub template** containing three complete example applications (TypeScript, Python, Go) pre-configured with the AI Engineering Excellence Framework (AEEF) quality gates, security scanning, and governance policies.

Every configuration file, CI pipeline, and policy document maps directly to a published AEEF standard. You get production-grade AI governance without weeks of setup.

## Standards Enforced

| Standard | Title | What You Get |
|----------|-------|--------------|
| PRD-STD-001 | Prompt Engineering | CLAUDE.md and .cursorrules with security boundaries, coding standards, and forbidden-action lists |
| PRD-STD-002 | Code Review | PR template with AI disclosure fields, human review checklists |
| PRD-STD-003 | Testing | Pre-configured test frameworks with coverage thresholds (70%+) |
| PRD-STD-004 | Security Scanning | Semgrep rules targeting AI-hallucinated code patterns (fake crypto functions, deprecated algorithms, SQL injection) |
| PRD-STD-008 | Dependency Scanning | Automated dependency audits (npm audit / pip-audit / govulncheck) and Trivy container scanning in CI |

## Quick Start

### Option 1: Use as GitHub Template

1. Click **"Use this template"** on GitHub
2. Clone your new repository
3. Pick your stack and follow the instructions below

### Option 2: Clone Directly

```bash
git clone https://github.com/aeef-standards/aeef-quickstart.git
cd aeef-quickstart
```

### TypeScript (Express)

```bash
cd stacks/typescript
bash scripts/setup.sh
npm install
npm test
npm run dev
```

Server runs on `http://localhost:3000`. Endpoints: `GET /` and `GET /health`.

### Python (FastAPI)

```bash
cd stacks/python
bash scripts/setup.sh
pip install -e ".[test]"
pytest
uvicorn app.main:app --reload
```

Server runs on `http://localhost:8000`. Endpoints: `GET /` and `GET /health`.

### Go (Chi)

```bash
cd stacks/go
bash scripts/setup.sh
go mod tidy
go test -race ./...
go run cmd/server/main.go
```

Server runs on `http://localhost:8080`. Endpoints: `GET /` and `GET /health`.

## Repository Structure

```
aeef-quickstart/
  shared/                          # Shared configs copied into each stack
    schemas/                       # AI provenance JSON schemas
    policies/                      # Acceptable use and data classification
    docs/decisions/                # Architecture Decision Records
    .github/                       # PR template with AI disclosure
    .semgrep/                      # Custom Semgrep rules for AI code
    .pre-commit-config.yaml        # Git hooks (secret scanning)
    .gitignore.append              # AI tool exclusions
  stacks/
    typescript/                    # Express.js reference app
    python/                        # FastAPI reference app
    go/                            # Chi router reference app
```

Each stack includes:
- **CLAUDE.md** -- AI assistant configuration with security boundaries
- **.cursorrules** -- Cursor IDE rules aligned to AEEF standards
- **.github/workflows/ai-quality-gates.yml** -- Stack-specific CI pipeline
- **Working application code** with health endpoint and rate limiter
- **Tests** with coverage reporting
- **setup.sh** script to copy shared configs into place

## How to Use as a GitHub Template

1. Click **"Use this template"** to create a new repository
2. Delete the stacks you do not need (keep only your chosen language)
3. Run `scripts/setup.sh` from your chosen stack to copy shared configs
4. Customize `CLAUDE.md` and `.cursorrules` for your project
5. Update `package.json` / `pyproject.toml` / `go.mod` with your project name
6. Push and verify the CI pipeline runs on your first PR

## Learn More

Full documentation, standard definitions, and compliance guidance:

**https://aeef.ai/reference-implementations/quickstart**

## License

Apache 2.0 -- see [LICENSE](./LICENSE).
