#!/usr/bin/env bash
set -euo pipefail

REPO="${AGENTIC_GENIUS_REPO:-itsCissy/agentic-genius-design-skill}"
BRANCH="${AGENTIC_GENIUS_BRANCH:-main}"
CODEX_SKILLS_DIR="${CODEX_SKILLS_DIR:-$HOME/.codex/skills}"
TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/agentic-genius-design.XXXXXX")"
ZIP_FILE="$TMP_DIR/agentic-genius-design.skill"
URL="https://raw.githubusercontent.com/${REPO}/${BRANCH}/agentic-genius-design.skill"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

if ! command -v curl >/dev/null 2>&1; then
  echo "Error: curl is required." >&2
  exit 1
fi

if ! command -v unzip >/dev/null 2>&1; then
  echo "Error: unzip is required." >&2
  exit 1
fi

mkdir -p "$CODEX_SKILLS_DIR"

echo "Downloading agentic-genius-design from ${URL}"
curl -fsSL "$URL" -o "$ZIP_FILE"

echo "Installing to ${CODEX_SKILLS_DIR}"
unzip -oq "$ZIP_FILE" -d "$CODEX_SKILLS_DIR"

if [ ! -f "$CODEX_SKILLS_DIR/agentic-genius-design/SKILL.md" ]; then
  echo "Error: install completed but SKILL.md was not found." >&2
  exit 1
fi

echo "Installed: ${CODEX_SKILLS_DIR}/agentic-genius-design"
echo "Restart Codex or open a new session to refresh skills."
