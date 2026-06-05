# shadcn / Tailwind 项目适配

对于已有 `components/ui` 的项目，不要复制一套平行 UI kit 后让业务混用。优先改造现有基础组件。

## 适配步骤

1. 在全局 CSS 建 token bridge：把 `--background`、`--foreground`、`--card`、`--border`、`--ring` 等映射到 Agentic Genius token。
2. 改造 `components/ui/button.tsx`、`input.tsx`、`badge.tsx`、`card.tsx`、`select.tsx` 等基础组件 variant。
3. 保持原项目 import 路径不变，业务页面无需大改。
4. 只有项目缺少某个基础组件时，才从 `assets/react/components` 复制对应模板。

## Badge 适配原则

不要支持 `color` prop。必须支持：

```tsx
<Badge variant="success">ACTIVE</Badge>
<Badge variant="warning">PENDING</Badge>
<StatusBadge status="running" label="Running" />
```

## 常见错误

```tsx
// ❌ 状态只传裸颜色
<StatusBadge color="var(--o500)" label="NEEDS INTERVENTION" />

// ✅ 状态传语义
<Badge variant="warning">Needs Intervention</Badge>
```

```tsx
// ❌ 把容器类当 trigger 用
<button className="ag-select">Team</button>

// ✅ 用项目 Select 组件或 UI kit Select
<Select value={team} onChange={setTeam} options={teams} />
```
