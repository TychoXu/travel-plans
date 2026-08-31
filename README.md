# Travel Plans

一个长期维护的个人旅行计划库。

每次旅行使用一个独立 HTML 页面，首页 `index.html` 作为旅行目录。

## Structure

```text
travel-plans/
├── index.html
├── README.md
├── css/
│   └── style.css
├── trips/
│   └── zhuhai-hongkong-2026.html
└── assets/
    └── zhuhai-hongkong-2026/
```

## How to add a new trip

1. 在 `trips/` 新建一个 HTML，例如 `trips/japan-kansai-2027.html`。
2. 在首页 `index.html` 增加对应旅行卡片。
3. 新页面引用共用 CSS：

```html
<link rel="stylesheet" href="../css/style.css">
```

4. 图片等资源放进对应的 `assets/<trip-name>/` 目录。

## GitHub Pages

本项目不依赖 Node.js、npm 或构建工具，可直接使用 GitHub Pages。

在 GitHub Repository 中选择：

**Settings → Pages → Build and deployment → Deploy from a branch**

Branch 选择 `main`，Folder 选择 `/ (root)`。

## Design principle

- 一个旅行 = 一个 HTML
- 所有旅行共用 `css/style.css`
- 图片和资源按旅行分别存放
- 首页负责旅行索引
- 行程页面负责具体计划
- 尽量保持简单，不引入不必要的框架和构建流程

## Current trip

**珠海 · 香港 5天4晚**

北京 → 珠海 → 香港 → 北京

- 珠海：横琴英迪格（可比较瑞吉、长隆横琴湾等）
- 长隆：海洋王国全天
- 长隆：计划观看 20:00 烟花（出发前以官方节目表确认）
- 香港：丽晶酒店
- 香港迪士尼：全天


## Hotel cards

酒店卡片包含品牌标识、酒店官网入口和本次行程中的选择状态。珠海目前保留横琴英迪格为首选，并把珠海瑞吉作为备选；香港使用香港丽晶。
