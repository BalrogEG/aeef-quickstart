# Project: AEEF Quick Start (Python)

## Tech Stack
- Language: Python 3.12+
- Framework: FastAPI
- Testing: pytest + pytest-asyncio
- Package manager: uv
- Linting: ruff

## Architecture
- Layered: routers / services / repositories
- All database access through repository classes (no raw SQL string formatting)
- Dependency injection via FastAPI's Depends()
- Pydantic v2 models for all request/response schemas

## Coding Standards
- Type hints required on all function signatures
- Docstrings on public functions (Google style)
- Max function length: 40 lines
- Use pathlib for file paths, not os.path
- Use f-strings for formatting (but NEVER for SQL)

## Security Rules -- CRITICAL
- NEVER read or modify files in app/auth/ or app/security/ without explicit instruction
- NEVER use string formatting for SQL queries
- NEVER store secrets in code -- use environment variables via pydantic-settings
- ALL user input validated through Pydantic models
- ALL endpoints require auth dependency unless explicitly public

## Common Commands
- Run tests: `uv run pytest`
- Run linter: `uv run ruff check .`
- Run dev server: `uv run uvicorn app.main:app --reload`

## Git Rules
- NEVER commit directly to main
- ALWAYS create feature branches
- NEVER force push or run destructive commands
