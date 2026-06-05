# React UI Kit 模板

`assets/react` 是轻量便携 UI kit，不是 npm 包。使用时复制到目标项目，并让业务页面调用组件 API，而不是直接拼 `.ag-*` class。

## 推荐复制位置

```bash
src/components/agentic-ui/
  utils.ts
  index.ts
  components/*.tsx
```

全局样式：

```ts
import "./styles/agentic-tokens.css";
import "./styles/agentic-components.css";
```

## 组件 API

```tsx
import { Button, Input, Badge, StatusBadge, Card, CardHeader, Progress, Select } from "@/components/agentic-ui";

<Button variant="primary">New Dashboard</Button>
<Button variant="danger">Delete</Button>

<Input placeholder="Search workflows..." />

<Badge variant="warning">Needs Intervention</Badge>
<StatusBadge status="running" label="Running" />

<Card variant="contained">
  <CardHeader title="Blocked Issues" />
</Card>

<Progress value={62} label="Synthesis progress" />

<Select
  value={team}
  onChange={setTeam}
  options={[{ value: "team-1", label: "Synthesis Team" }]}
/>
```

## 组件契约

- `Button.variant`: `primary | secondary | ghost | danger`
- `Button.size`: `sm | md | icon`
- `Badge.variant`: `default | info | success | warning | error | teal | purple | pink | sky | orange`
- `StatusBadge.status`: `running | idle | completed | error | paused`
- `Card.variant`: `contained | whisper | raised | inset | bare`
- `Select`: 业务只传 `options/value/onChange`，不要手写 `.ag-select__trigger`
- `Modal`: 业务只传 `open/title/footer/onClose`，不要自拼 overlay

## 什么时候可以写 className

允许：布局类，如 `grid`、`flex`、`gap-*`、`w-full`、`max-w-*`。

禁止：视觉类，如颜色、border、radius、shadow、focus、hover、状态背景。需要新视觉时先扩展 UI 组件 variant。
