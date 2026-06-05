# Vue UI Kit 模板（v2）

Vue/Nuxt 项目优先使用 `assets/vue` 的 UI Kit 模板，不建议业务页面直接拼 `.ag-*` class。

## Bootstrap 模式

1. 复制样式：
```ts
import "./styles/agentic-tokens.css";
import "./styles/agentic-components.css";
```

2. 复制 `assets/vue` 到 `src/components/agentic-ui`。

3. 业务页面使用组件 API：
```vue
<script setup lang="ts">
import { ref } from "vue";
import { AgButton, AgCard, AgCardHeader, AgBadge, AgStatusBadge, AgProgress, AgSelect } from "@/components/agentic-ui";

const team = ref("team");
const teams = [{ value: "team", label: "Team Overview" }];
</script>

<template>
  <AgCard variant="contained">
    <AgCardHeader title="Blocked Issues">
      <template #action><AgBadge variant="warning">3</AgBadge></template>
    </AgCardHeader>

    <AgStatusBadge status="running" label="Running" />
    <AgProgress :value="62" label="Synthesis progress" />
    <AgSelect v-model="team" :options="teams" />
    <AgButton variant="primary">New Dashboard</AgButton>
  </AgCard>
</template>
```

## Adapter 模式

项目已有组件库时，不要复制平行组件让业务混用。改造已有 `Button/Input/Badge/Card/Select/Modal` 的 props/variant，使原 import 路径保持稳定。详见 `references/migration.md`。

## 组件契约

- `AgButton.variant`: `primary | secondary | ghost | danger`
- `AgButton.size`: `sm | md | icon`
- `AgBadge.variant`: `default | info | success | warning | error | teal | purple | pink | sky | orange`
- `AgStatusBadge.status`: `running | idle | completed | error | paused`
- `AgCard.variant`: `contained | whisper | raised | inset | bare`
- `AgSelect`: 业务只传 `options/v-model`，不要手写 `.ag-select__trigger`
- `AgModal`: 业务只传 `open/title/@close`，不要自拼 overlay

## 禁止

- 不要在业务页面用 `:style="{ color }"` 表示状态。
- 不要把 `.ag-select` 直接贴到 `<button>`；使用 `<AgSelect />`。
- 不要复制 `.ag-demo-*`。
- 不要写 `bg-orange-*` / `text-green-*` 这类状态色工具类；扩展 `AgBadge variant`。
