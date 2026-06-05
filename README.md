# Agentic Genius Design Skill

Portable UI kit + migration skill for applying the Agentic Genius design system in AI coding tools.

It includes:

- Agentic Genius design tokens
- CSS component primitives
- React UI Kit templates
- Adapter-mode migration rules for large projects
- Component gallery and validation checklist

## Install for Codex

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash
```

Equivalent explicit target:

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- codex
```

Installs to:

```bash
~/.codex/skills/agentic-genius-design
```

## Install for Claude / Claude Code

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- claude
```

Installs to:

```bash
~/.claude/skills/agentic-genius-design
```

> Note: Claude clients may differ in how they discover local skills. If your Claude setup uses a different skills directory, use the custom install option below.

## Install for Cursor

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- cursor
```

Installs to:

```bash
~/.cursor/skills/agentic-genius-design
```

> Note: Cursor skill/plugin discovery can vary by setup. If your Cursor setup expects another directory, use the custom install option below.

## Universal / Project-local install

Install into `./skills` in the current directory:

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- universal
```

Installs to:

```bash
./skills/agentic-genius-design
```

## Custom install directory

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- custom /path/to/skills
```

Or with an environment variable:

```bash
AGENTIC_GENIUS_SKILLS_DIR=/path/to/skills \
  curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-genius-design-skill/main/install.sh | bash -s -- custom
```

## Verify installation

Codex example:

```bash
ls ~/.codex/skills/agentic-genius-design
open ~/.codex/skills/agentic-genius-design/assets/component-examples.html
```

Claude example:

```bash
ls ~/.claude/skills/agentic-genius-design
open ~/.claude/skills/agentic-genius-design/assets/component-examples.html
```

Cursor example:

```bash
ls ~/.cursor/skills/agentic-genius-design
open ~/.cursor/skills/agentic-genius-design/assets/component-examples.html
```

## Use

```text
使用 agentic-genius-design 帮我把这个 React/Next 项目接入 Agentic Genius 设计系统。
```

For large existing projects, the skill defaults to Adapter mode: first update tokens and base UI components, not business pages.

## Local install from this repo

```bash
mkdir -p ~/.codex/skills
unzip -o agentic-genius-design.skill -d ~/.codex/skills
```

## Installer options

```bash
./install.sh --help
```

Targets:

- `codex` → `~/.codex/skills`
- `claude` → `~/.claude/skills`
- `cursor` → `~/.cursor/skills`
- `universal` → `./skills`
- `custom /path/to/skills` → any skill directory
