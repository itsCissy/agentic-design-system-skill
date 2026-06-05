# Agentic Genius Design Skill

Portable UI kit + migration skill for applying the Agentic Genius design system in Codex.

## Install for Codex

```bash
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USER/agentic-genius-design-skill/main/install.sh | bash
```

After installation, restart Codex or open a new session.

## Verify

```bash
ls ~/.codex/skills/agentic-genius-design
open ~/.codex/skills/agentic-genius-design/assets/component-examples.html
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
