# Agentic Design System Skill

A portable design system skill for applying a consistent, token-driven UI language across products.

It includes:

- Design tokens
- CSS component primitives
- React and Vue UI Kit templates
- Adapter-mode migration guidance
- Component gallery and validation checklist

## Install for Codex

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-design-system-skill/main/install.sh | bash
```

Equivalent explicit target:

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-design-system-skill/main/install.sh | bash -s -- codex
```

Installs to:

```bash
~/.codex/skills/agentic-design-system
```

## Install for Claude / Claude Code

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-design-system-skill/main/install.sh | bash -s -- claude
```

Installs to:

```bash
~/.claude/skills/agentic-design-system
```

> Note: Claude clients may differ in how they discover local skills. If your Claude setup uses a different skills directory, use the custom install option below.

## Install for Cursor

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-design-system-skill/main/install.sh | bash -s -- cursor
```

Installs to:

```bash
~/.cursor/skills/agentic-design-system
```

> Note: Cursor skill/plugin discovery can vary by setup. If your Cursor setup expects another directory, use the custom install option below.

## Universal / Project-local install

Install into `./skills` in the current directory:

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-design-system-skill/main/install.sh | bash -s -- universal
```

Installs to:

```bash
./skills/agentic-design-system
```

## Custom install directory

```bash
curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-design-system-skill/main/install.sh | bash -s -- custom /path/to/skills
```

Or with an environment variable:

```bash
AGENTIC_DESIGN_SKILLS_DIR=/path/to/skills \
  curl -fsSL https://raw.githubusercontent.com/itsCissy/agentic-design-system-skill/main/install.sh | bash -s -- custom
```

## Verify installation

Codex example:

```bash
ls ~/.codex/skills/agentic-design-system
open ~/.codex/skills/agentic-design-system/assets/component-examples.html
```

Claude example:

```bash
ls ~/.claude/skills/agentic-design-system
open ~/.claude/skills/agentic-design-system/assets/component-examples.html
```

Cursor example:

```bash
ls ~/.cursor/skills/agentic-design-system
open ~/.cursor/skills/agentic-design-system/assets/component-examples.html
```

## Use

```text
使用 agentic-design-system 帮我为这个项目建立统一的设计系统和 UI 基础组件。
```

For large existing projects, the skill defaults to Adapter mode: first update tokens and base UI components, not business pages.

## Local install from this repo

```bash
mkdir -p ~/.codex/skills
unzip -o agentic-design-system.skill -d ~/.codex/skills
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
