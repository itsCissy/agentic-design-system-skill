# 组件契约与错误模式

## 总原则

业务页面只能表达语义，不表达视觉值。

- 表达语义：`variant="warning"`、`status="running"`、`selected`、`disabled`
- 不表达视觉：`style={{ color }}`、`bg-orange-50`、`border-blue-500`、`shadow-[...]`

## 状态色契约

| 语义 | 用法 | 颜色来源 |
|---|---|---|
| running | `<StatusBadge status="running" />` | agent running token |
| idle | `<StatusBadge status="idle" />` | agent idle token |
| completed | `<StatusBadge status="completed" />` | success slot |
| error | `<StatusBadge status="error" />` | error slot |
| paused | `<StatusBadge status="paused" />` | neutral slot |
| warning/pending | `<Badge variant="warning" />` | warning slot |
| destructive | `<Button variant="danger" />` | danger slot |

## 结构类不能乱用

- `.ag-select` 是 Select 根容器，不是按钮样式。
- `.ag-menu` 是菜单容器，不是任意浮层卡片。
- `.ag-overlay` / `.ag-modal` 必须成对出现。
- `.ag-demo-*` 永远只属于示例画廊。

## 增加新需求时

1. 先找现有组件 prop 能否表达。
2. 不能表达时扩展组件 variant。
3. 最后才扩展 CSS token/class。
4. 不允许在业务页面临时手写视觉值。
