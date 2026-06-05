#!/usr/bin/env bash
set -euo pipefail

REPO="${AGENTIC_GENIUS_REPO:-itsCissy/agentic-genius-design-skill}"
BRANCH="${AGENTIC_GENIUS_BRANCH:-main}"
TARGET="${1:-${AGENTIC_GENIUS_TARGET:-codex}}"
CUSTOM_DIR="${2:-${AGENTIC_GENIUS_SKILLS_DIR:-}}"
TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/agentic-genius-design.XXXXXX")"
ZIP_FILE="$TMP_DIR/agentic-genius-design.skill"
EXTRACT_DIR="$TMP_DIR/extract"
URL="https://raw.githubusercontent.com/${REPO}/${BRANCH}/agentic-genius-design.skill"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

usage() {
  cat <<USAGE
Usage:
  install.sh [target] [custom_skills_dir]

Targets:
  codex       Install to ~/.codex/skills (default)
  claude      Install to ~/.claude/skills
  cursor      Install to ~/.cursor/skills
  universal   Install to ./skills in the current directory
  custom      Install to custom_skills_dir or AGENTIC_GENIUS_SKILLS_DIR

Environment overrides:
  AGENTIC_GENIUS_REPO       Default: itsCissy/agentic-genius-design-skill
  AGENTIC_GENIUS_BRANCH     Default: main
  AGENTIC_GENIUS_TARGET     Default: codex
  AGENTIC_GENIUS_SKILLS_DIR Used by custom target

Examples:
  curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash
  curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- claude
  curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- cursor
  curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- custom /path/to/skills
USAGE
}

if [ "$TARGET" = "-h" ] || [ "$TARGET" = "--help" ]; then
  usage
  exit 0
fi

case "$TARGET" in
  codex)
    SKILLS_DIR="${CODEX_SKILLS_DIR:-$HOME/.codex/skills}"
    ;;
  claude)
    SKILLS_DIR="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"
    ;;
  cursor)
    SKILLS_DIR="${CURSOR_SKILLS_DIR:-$HOME/.cursor/skills}"
    ;;
  universal)
    SKILLS_DIR="${UNIVERSAL_SKILLS_DIR:-$PWD/skills}"
    ;;
  custom)
    if [ -z "$CUSTOM_DIR" ]; then
      echo "Error: custom target requires a path argument or AGENTIC_GENIUS_SKILLS_DIR." >&2
      usage >&2
      exit 1
    fi
    SKILLS_DIR="$CUSTOM_DIR"
    ;;
  *)
    echo "Error: unknown target '$TARGET'." >&2
    usage >&2
    exit 1
    ;;
esac

if ! command -v curl >/dev/null 2>&1; then
  echo "Error: curl is required." >&2
  exit 1
fi

if ! command -v unzip >/dev/null 2>&1; then
  echo "Error: unzip is required." >&2
  exit 1
fi

mkdir -p "$SKILLS_DIR" "$EXTRACT_DIR"

echo "Target: ${TARGET}"
echo "Downloading agentic-genius-design from ${URL}"
curl -fsSL "$URL" -o "$ZIP_FILE"

unzip -oq "$ZIP_FILE" -d "$EXTRACT_DIR"

if [ ! -f "$EXTRACT_DIR/agentic-genius-design/SKILL.md" ]; then
  echo "Error: downloaded skill archive is missing SKILL.md." >&2
  exit 1
fi

echo "Installing to ${SKILLS_DIR}"
rm -rf "$SKILLS_DIR/agentic-genius-design"
mkdir -p "$SKILLS_DIR"
cp -R "$EXTRACT_DIR/agentic-genius-design" "$SKILLS_DIR/agentic-genius-design"

if [ ! -f "$SKILLS_DIR/agentic-genius-design/SKILL.md" ]; then
  echo "Error: install completed but SKILL.md was not found." >&2
  exit 1
fi

echo "Installed: ${SKILLS_DIR}/agentic-genius-design"
echo "Restart your AI coding app or open a new session to refresh skills."
