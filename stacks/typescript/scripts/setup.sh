#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR/.."
SHARED_DIR="$PROJECT_ROOT/../../shared"

echo "Setting up AEEF Quick Start (TypeScript)..."

# Copy shared configs
cp "$SHARED_DIR/.pre-commit-config.yaml" "$PROJECT_ROOT/"
cp -r "$SHARED_DIR/.semgrep" "$PROJECT_ROOT/"
mkdir -p "$PROJECT_ROOT/.github"
cp "$SHARED_DIR/.github/pull_request_template.md" "$PROJECT_ROOT/.github/"
mkdir -p "$PROJECT_ROOT/schemas"
cp "$SHARED_DIR/schemas/"*.json "$PROJECT_ROOT/schemas/"
mkdir -p "$PROJECT_ROOT/docs/decisions"
cp "$SHARED_DIR/docs/decisions/"*.md "$PROJECT_ROOT/docs/decisions/"

# Append gitignore entries
cat "$SHARED_DIR/.gitignore.append" >> "$PROJECT_ROOT/.gitignore"

echo "Setup complete! Run 'npm install' to get started."
