# 大项目迁移策略（v2）

目标：把 Agentic Design System 作为**项目 UI 基础层**接入，而不是在业务页面散落 `.ag-*` class。

## 0. 先判断项目类型

1. 已有 `src/components/ui/*` 或 design system：**Adapter 模式**。
   - 只改 UI 基础组件和 token bridge。
   - 业务页面除非必要，不批量改 class。
2. 没有 UI 基础层：**Bootstrap 模式**。
   - 复制 `assets/react` 到目标项目，例如 `src/components/agentic-ui`。
   - 全局 import `tokens.css` + `components.css`。
3. 已有 AntD/MUI/Chakra：**Theme Bridge 模式**。
   - 只映射 token，不替换复杂组件。
   - 业务组件继续用原库 API。

## 1. 硬性迁移顺序

1. 复制或映射 `assets/tokens.css`，建立 token bridge。
2. 复制 `assets/components.css`，但只作为 UI kit 内部样式依赖。
3. 建立 UI 组件层：优先复制 `assets/react`，或改造项目已有 `src/components/ui/*`。
4. 业务页面只使用 UI 组件：`Button` / `Input` / `Badge` / `Card` / `Select` / `Modal` / `Tabs` 等。
5. 最后少量调整页面 layout，禁止为了视觉效果散写状态颜色。

## 2. 禁止事项

- 不要在业务页面直接写 `.ag-select`、`.ag-menu` 等结构类；复杂组件必须通过 React 模板或项目已有 UI 组件封装。
- 不要把 `component-examples.html` 的 `.ag-demo-*` 复制到业务代码。
- 不要用 `style={{ color: ... }}` 表示状态；状态必须传 `variant` / `status`。
- 不要全局批量替换所有按钮、输入框、badge；先改基础组件，再让业务自然继承。
- 不要混用多套状态色：同一个状态只能来自 `Badge variant` 或 `StatusBadge status`。

## 3. 迁移后必须 grep

```bash
rg "ag-demo-|style=\{\{\s*color|style=\{\{\s*background" src
rg "className=.*ag-select(?!__)|className=.*ag-menu(?!__)" src
rg "bg-(blue|green|red|orange|purple|yellow)-|text-(blue|green|red|orange|purple|yellow)-|border-(blue|green|red|orange|purple|yellow)-" src
rg "#[0-9A-Fa-f]{3,8}" src
```

命中不一定都错，但必须逐个解释；状态、组件外观、focus/hover 命中基本都要改回 UI 组件 API。

## 4. 大项目验收标准

- 每个页面新增/改动的业务组件不直接拼状态色。
- Select/Dropdown/Modal/Tabs 不由业务页面拼结构。
- Badge 状态使用枚举：`variant="warning"` 或 `status="running"`。
- Sidebar/Header/Search 这些应用壳组件不混用旧颜色和新 token。
- 至少截图检查：Sidebar、Header、Search、Card、Badge、Progress、Modal。
