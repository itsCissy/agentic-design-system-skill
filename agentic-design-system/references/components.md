# Components 用法说明

> 做某个组件时查本表：找到组件 → 用对应 class（已在 `assets/components.css` 写好）→
> 从 `assets/component-examples.html` 复制 HTML 结构 → 按下方「状态/约束」补全。
> 注意：示例页中的 `.ag-demo-*` 只用于画廊排版/占位图标，不复制到业务代码；真实图标统一替换为 MingCute SVG。
> 所有 class 已引用语义变量，复制即合规，**不要重新手写样式**。

## 目录
- [Buttons](#buttons) · [Inputs](#inputs--forms) · [Search](#search) · [Select](#select--dropdown)
- [Form Controls](#form-controls) · [Cards](#cards) · [Navigation](#navigation)
- [Agent Status](#agent-status) · [Code Block](#code-block) · [Chat](#chat) · [Links](#links) · [Tag](#tag--badge)
- 扩展组件：[Modal](#modal--dialog) · [Toast](#toast) · [Tooltip](#tooltip) · [Tabs](#tabs) · [Table](#table) · [Dropdown Menu](#dropdown-menu) · [Breadcrumb](#breadcrumb) · [Pagination](#pagination) · [Accordion](#accordion) · [Progress/Skeleton](#progress--skeleton) · [Empty State](#empty-state) · [Combobox](#combobox) · [Token Stream](#token-stream)

## Buttons
class：`.ag-btn` + 变体 `--primary`/`--secondary`/`--ghost`/`--danger`，可叠 `--compact`。
- **Primary**：主 CTA。黑底白字（暗色翻转），hover/active/focus/disabled 已内置。
- **Secondary**：描边，次要操作（取消/返回）。
- **Ghost**：无边，工具栏/菜单项/内嵌操作。
- **Danger**：仅不可逆破坏操作，**需带二次确认**。
- 仅图标按钮加 `.ag-icon-btn` + 必须 `aria-label`。
- 约束：焦点环已是中性色；**禁止给按钮填充改成彩色**。

## Inputs & Forms
class：`.ag-input`（含 `--error`），配 `.ag-field-label` / `.ag-error-text`。
- focus 是中性 halo（`box-shadow 3px` + 中性 border），**不是品牌蓝**。
- textarea 直接用 `<textarea class="ag-input">`。

## Search
class：`.ag-search` 容器 + `.ag-search__input` + `.ag-search__leading`(前置icon) + `.ag-search__trailing`(清除按钮)。
- 清除按钮仅有输入值时显示，必须 `aria-label`。
- 异步加载时把清除按钮换成 `.ag-spinner`。
- **不加 submit 按钮**（回车触发）。

## Select / Dropdown
class：`.ag-select` > `.ag-select__trigger`（含 `.ag-select__chev`）+ `.ag-select__menu` > `.ag-select__item`。
- 展开时 trigger 加 `.is-open`（chevron 自动旋转 180°）。
- 选中项内放 `.ag-select__check`；禁用项加 `.is-disabled`。
- 视觉与 Input 一致；focus/open 用中性 halo。
- 无障碍：`role="listbox"` / `role="option"` / `aria-selected` / `aria-expanded`。

## Form Controls
**几何形态严格区分语义**：方形=多选(checkbox)、圆形=单选(radio)、胶囊=即时开关(switch)。
- **Checkbox** `.ag-checkbox`：`.is-checked`（CSS 几何画勾，非 glyph）/ `.is-indeterminate`。
- **Radio** `.ag-radio`：`.is-checked`（内嵌实心圆）。同组垂直间距 8px。
- **Switch** `.ag-switch` > `.ag-switch__thumb`：`.is-on`。**仅用于即时生效的布尔开关**；"提交后才生效"的字段用 Checkbox。
- **Slider** `.ag-slider` > `.ag-slider__fill` + `.ag-slider__thumb`：用 inline `width`/`left` 控制百分比。
- 选中色/焦点环都是中性，**禁止品牌蓝**。无障碍 `role` + `aria-checked`/`aria-valuenow` + `tabindex`。

## Cards
class：`.ag-card` + 变体。5 级 elevation：
- `--flat`（Level0 无边无影）· `--contained`（Level1 **默认**，1px边框）· `--ring`（Level2 中性环）· `--whisper`（Level3 柔影，暗色自动降级边框）· `--inset`（Level4 内嵌）。
- 可点击卡加 `.is-clickable`（hover 抬起/加深，**不改背景色**）。
- 选中态用 `.ag-card--ring.is-selected`（中性 2px 环，**不用品牌蓝**）。
- 内部：`.ag-card__title` / `.ag-card__desc` / `.ag-card__footer`。

## Navigation
class：`.ag-nav` > `.ag-nav__links` > `.ag-nav__link`（当前项 `.is-active` 下横线）。
- sticky top，高 56px，下边框 subtle。
- **导航 hover 用中性 `--color-text-secondary`，禁止品牌蓝**（避免信号色泛滥）。

## Agent Status
class：`.ag-status` > `.ag-status__dot--{idle|running|completed|error|paused}` + 文本。
- **颜色固定语义不可交换**：绿=running(带pulse) / 蓝=idle / 红=error / 灰=paused。

## Code Block
class：`.ag-code`（可选上方 `.ag-code__header` + `.ag-code__lang` + Copy 按钮）。
- 语法高亮 span：`.ag-tok-kw`(蓝) `.ag-tok-str`(绿) `.ag-tok-com`(灰) `.ag-tok-fn` `.ag-tok-num`(橙)，**固定不变**。
- 暗色与页面同底，靠 border 区分（已内置）。

## Chat
class：`.ag-chat` > `.ag-bubble--user`（右对齐胶囊，radius-lg）/ `.ag-bubble--agent`（无背景无边框、独占行、radius 0——强调"agent 输出=内容本身"）。

## Links
- **Inline** `.ag-link`：正文内，default 中性带浅下划线，hover 变品牌蓝（**唯一允许的品牌蓝控件用途**），不加粗。
- **Standalone** `.ag-link--standalone`：独立 CTA，无下划线+weight500，末尾 `.ag-link__arrow`（hover 右移）。
- 禁止：纯蓝字代替下划线表示链接；给链接加斜体/换字体。

## Tag / Badge
class：`.ag-tag` + 槽。
- **语义槽**（状态↔色绑定，不可错配）：`--default`/`--info`/`--success`/`--warning`/`--error`。
- **自定义槽**（分类，装饰色）：`--teal`(研究)/`--purple`(设计)/`--pink`(前端)/`--sky`(后端)/`--orange`(营销)。
- 一个 tag 不能同时承担状态+分类；如"运行中的研究"→并排两个 tag，**不合成一个**。

---

# 扩展组件（业界高频 + 中频）

## Modal / Dialog
class：`.ag-overlay`（遮罩，点击关闭）> `.ag-modal` > `.ag-modal__header`/`__title`/`__body`/`__footer`。
- 遮罩用 `--color-overlay`；弹窗 radius-lg + modal 阴影。
- Drawer/Sheet 变体：`.ag-overlay--drawer` > `.ag-drawer`（右侧滑入）。
- 无障碍：`role="dialog"` `aria-modal="true"` `aria-labelledby`；Esc 关闭、点遮罩关闭（交互逻辑见 react.md/vue.md）。

## Toast
class：`.ag-toast-region`（右下固定容器）> `.ag-toast` + 状态变体 `--success`/`--error`/`--warning`/`--info`。
- 状态色只做 **4px 左边条**，不大面积填充。
- 无障碍：success/info 用 `role="status"`，error 用 `role="alert"`。

## Tooltip
class：`.ag-tooltip-wrap`（触发器包裹）> `.ag-tooltip`。
- 深底反色（`--color-tooltip-bg`，暗色自动反转为浅底深字）。
- 定位由 JS 控制；`role="tooltip"` + 触发器 `aria-describedby`。

## Tabs
class：`.ag-tabs__list` > `.ag-tab`（当前 `.is-active`，禁用 `.is-disabled`）+ `.ag-tabs__panel`。
- active 用**中性下划线**（`--color-text-primary`），❗非品牌蓝。
- 无障碍：`role="tablist"`/`tab`/`tabpanel` + `aria-selected`。

## Table
class：`.ag-table`（紧凑变体 `--compact`）。
- th 用 12px 副文本色；行 hover 整块淡化（`--color-surface`），不改字色。
- 开发者工具数据密集场景的核心组件，优先用它而非卡片堆叠。

## Dropdown Menu
class：`.ag-menu` > `.ag-menu__item`（危险项 `--danger`，禁用 `.is-disabled`）+ `.ag-menu__divider` + `.ag-menu__label`（分组标题）。
- 区别于 Select：这是**操作菜单**（编辑/删除/复制），不是值选择。
- 无障碍：`role="menu"`/`menuitem`。

## Breadcrumb
class：`.ag-breadcrumb` > `.ag-breadcrumb__item`（当前 `.is-current`）+ `.ag-breadcrumb__sep`。
- 当前项 `aria-current="page"`。

## Pagination
class：`.ag-pagination` > `.ag-page-btn`（当前 `.is-active`，禁用 `.is-disabled`）。
- active 用中性选中色，❗非品牌蓝。

## Accordion
class：`.ag-accordion__item`（展开 `.is-open`）> `.ag-accordion__trigger`（含 `.ag-accordion__icon` 自动旋转）+ `.ag-accordion__panel`。
- `aria-expanded` 跟随开合。

## Progress / Skeleton
- **Progress**：`.ag-progress` > `.ag-progress__fill`（inline `width:%`）。填充用中性选中色，❗非品牌蓝。`role="progressbar"` + aria-value*。
- **Skeleton**：`.ag-skeleton` + `--text`/`--title`/`--avatar`，自带 shimmer 动画。加载占位用。

## Empty State
class：`.ag-empty` > `.ag-empty__icon`/`__title`/`__desc` + CTA 按钮。
- 列表/搜索无结果时用；插画可用装饰色板（属"内容"层，允许彩色）。

## Combobox
带文本输入过滤的 Select。结构复用 `.ag-select__menu`/`__item`，trigger 换成 `.ag-combobox__input`。
- 匹配字符用 `.ag-combobox__match` 加粗高亮；空结果用 `.ag-combobox__empty` "No matches"。

## Token Stream
class：`.ag-token-new`——agent 流式输出时给最新一段 token 包裹，品牌蓝微高亮 200ms 后自动淡出，让用户看到"光标位置"。Agentic Design System 特色微交互。
