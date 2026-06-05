# React 用法（v2）

React/Next 项目优先使用 `assets/react` 的 UI Kit 模板，不再建议业务页面直接拼 `.ag-*` class。

## Bootstrap 模式

1. 复制样式：
```ts
import "./styles/agentic-tokens.css";
import "./styles/agentic-components.css";
```

2. 复制 `assets/react` 到 `src/components/agentic-ui`。

3. 业务页面使用组件 API：
```tsx
import { Button, Card, CardHeader, Badge, StatusBadge, SearchInput } from "@/components/agentic-ui";

<Card variant="contained">
  <CardHeader title="Blocked Issues" action={<Badge variant="warning">3</Badge>} />
  <StatusBadge status="running" label="Running" />
  <Button variant="primary">New Dashboard</Button>
  <SearchInput placeholder="Search workflows, tasks, agents..." />
</Card>
```

## Adapter 模式

项目已有 `src/components/ui` 时，不要复制平行组件让业务混用。改造已有 `Button/Input/Badge/Card/Select/Modal` 的 variant，使原 import 路径保持稳定。详见 `references/migration.md` 和 `references/shadcn-adapter.md`。

## 禁止

- 不要在业务页面用 `style={{ color }}` 表示状态。
- 不要把 `.ag-select` 直接贴到 `<button>`；使用 `<Select />`。
- 不要复制 `.ag-demo-*`。
- 不要写 `bg-orange-*` / `text-green-*` 这类状态色工具类；扩展 `Badge variant`。
