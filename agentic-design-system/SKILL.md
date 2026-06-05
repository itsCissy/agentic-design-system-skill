---
name: agentic-design-system
description: A portable design system skill for applying a consistent, token-driven UI language across products. Includes design tokens, component primitives, React UI Kit templates, adapter-mode migration guidance, and validation checklists. Use it to establish a reusable UI foundation before changing product screens; avoid scattered visual values, ad-hoc status colors, and one-off component structures.
---

# Agentic Design System v2

这是一个**便携式 UI kit skill**，不是只给 AI 看的 CSS 规范。目标是让项目先拥有稳定 UI 基础层，再由业务页面调用组件 API。

核心理念：**中性色主导，品牌蓝/绿仅在链接 hover、agent 状态点、代码高亮出现；focus/selected 全部中性。**

## 先选接入模式

1. **Adapter 模式（大项目默认）**：项目已有 `src/components/ui/*`、shadcn、Tailwind 组件层时，先读 `references/migration.md` + `references/shadcn-adapter.md`，只改 token bridge 和基础组件，不批量改业务页面。
2. **Bootstrap 模式（新项目/无 UI 层）**：复制 `assets/tokens.css`、`assets/components.css` 和 `assets/react`，业务页面使用 React UI kit API。
3. **CSS-only 模式（原型/静态 HTML）**：才允许直接用 `.ag-*` class，并参考 `assets/component-examples.html`。

> 大项目里**不要**把 `.ag-*` 当 Tailwind 工具类到处贴。复杂组件必须通过 UI 组件封装。

## 文件导航

| 文件 | 作用 | 何时用 |
|---|---|---|
| `assets/tokens.css` | 设计 token 唯一事实源，含 light/dark | 所有模式都复制或映射 |
| `assets/components.css` | UI kit 内部 CSS 基座 | Bootstrap/CSS-only 复制 |
| `assets/react/` | 轻量 React UI kit 模板 | React/Next 项目复制或参考改造 |
| `assets/component-examples.html` | 组件画廊 + HTML 结构示例 | 只做预览/静态原型 |
| `references/migration.md` | 大项目迁移顺序与禁止事项 | 改已有项目时必读 |
| `references/react-ui-kit.md` | React UI kit API 与复制方式 | React/Next Bootstrap 时读 |
| `references/shadcn-adapter.md` | shadcn/Tailwind 项目适配 | 已有 `components/ui` 时读 |
| `references/component-contracts.md` | 组件语义契约和错误模式 | 状态色/Select/Badge 出问题时读 |
| `references/checklist.md` | 达标自检清单 | 完成任何 UI 改动后必读 |
| `references/tokens.md` | token 速查 | 需要查 token 时读 |
| `references/react.md` / `references/vue.md` | 旧 class 型用法 | 仅 CSS-only 或小范围原型 |

## 硬性工作流

1. **先审计项目**：看是否已有 `components/ui`、shadcn、MUI/AntD、Tailwind、CSS Modules。
2. **先建 UI 基础层**：token bridge + Button/Input/Badge/Card/Select/Modal 等基础组件。
3. **再改业务页面**：业务页面只表达 `variant/status/selected/disabled`，不表达颜色/边框/阴影。
4. **最后自检**：读 `references/checklist.md`，跑 `references/migration.md` 里的 grep。

## 红线

0. **禁止业务页面散写视觉值**：颜色、背景、border、radius、shadow、focus、hover、状态色都必须通过 UI 组件 API 或 token。
1. **禁止裸状态颜色**：不要 `style={{ color }}` 表示状态；用 `Badge variant` / `StatusBadge status`。
2. **禁止错用结构类**：`.ag-select` 是根容器，不是按钮；`.ag-menu` 是菜单容器；`.ag-demo-*` 永不进业务代码。
3. **大项目禁止一把梭全局替换**：先改基础组件，业务页面少动。
4. **字重上限 600**，禁止 700；需要更强对比改字号/字距。
5. **Agent 状态固定**：绿=running/completed，蓝=idle，红=error，灰=paused。

## 典型正确用法

```tsx
import { Button, Badge, StatusBadge, Card, CardHeader, Progress, Select } from "@/components/agentic-ui";

<Button variant="primary">New Dashboard</Button>
<Badge variant="warning">Needs Intervention</Badge>
<StatusBadge status="running" label="Running" />
<Card variant="contained"><CardHeader title="Blocked Issues" /></Card>
<Progress value={62} label="Synthesis progress" />
<Select value={team} onChange={setTeam} options={teams} />
```

## 典型错误

```tsx
// ❌ 不要这样：状态只有裸颜色，背景/边框缺失且无法统一
<StatusBadge color="var(--o500)" label="NEEDS INTERVENTION" />

// ❌ 不要这样：把 Select 根类错贴到 button 上
<button className="ag-select">Team</button>

// ❌ 不要这样：业务页面散写状态色
<div className="border-orange/20 bg-orange-50 text-orange-600" />
```
