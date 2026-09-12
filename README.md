# Travel Plans

🌐 **在线预览：<https://tychoxu.github.io/travel-plans/>**

一个长期维护的个人旅行计划库。每次旅行一个独立 HTML 页面，首页 `index.html` 负责目录。

## GitHub Pages

网站入口：[https://tychoxu.github.io/travel-plans/](https://tychoxu.github.io/travel-plans/)

各行程页面直达链接：

- [澳门 · 珠海 / 广州 · 香港｜2026（PLAN A / B）](https://tychoxu.github.io/travel-plans/trips/zhuhai-hongkong-2026.html)
- [新西兰 · 南岛自驾｜日期待定](https://tychoxu.github.io/travel-plans/trips/new-zealand.html)
- [成都｜2026](https://tychoxu.github.io/travel-plans/trips/chengdu-2026.html)
- [广西 · 北海 · 柳州｜2026](https://tychoxu.github.io/travel-plans/trips/beihai-liuzhou-2026.html)
- [阿联酋 · 阿布扎比 · 迪拜｜2025](https://tychoxu.github.io/travel-plans/trips/uae-2025.html)
- [日本 · 北海道｜2025](https://tychoxu.github.io/travel-plans/trips/hokkaido-2025.html)
- [日本 · 九州｜2024](https://tychoxu.github.io/travel-plans/trips/kyushu-2024.html)
- [日本 · 名古屋及周边｜2024](https://tychoxu.github.io/travel-plans/trips/nagoya-2024.html)

部署设置：仓库 **Settings → Pages → Build and deployment → Deploy from a branch**，选择 `main` / `/ (root)`。

## Structure

```text
travel-plans/
├── index.html
├── README.md
├── css/
│   └── style.css
├── trips/
│   ├── zhuhai-hongkong-2026.html
│   ├── new-zealand.html
│   ├── nagoya-2024.html
│   ├── kyushu-2024.html
│   ├── uae-2025.html
│   ├── hokkaido-2025.html
│   ├── beihai-liuzhou-2026.html
│   └── chengdu-2026.html
└── assets/
    └── （按旅行扩展）
```

## 已完成旅行

- 日本 · 名古屋及周边｜2024/11/22–11/24
- 日本 · 九州｜2024/12/15–12/21
- 阿联酋 · 阿布扎比 · 迪拜｜2025/5/30–6/3
- 日本 · 北海道｜2025/12/24–12/30
- 广西 · 北海 · 柳州｜2026/4/20–4/24
- 成都｜2026/5/18–5/21

历史行程页面保留原始资料中的不确定项，不把“预计时间”“城市归档”或网上其他日期的航班时刻冒充为实际记录。已能通过互联网核实的历史航班和历史天气会在对应页面单独标注来源。

## 当前旅行计划

**澳门 · 珠海 / 广州 · 香港｜2026/12，8 天 7 晚（两套方案，页内 PLAN A / B 切换）**

背景：第十六届中国航展 2026/12/7–12/13 在珠海举行，航展期间及 12/13 珠海酒店订不到。

### PLAN A（默认）：整体延后一周，12/13–12/20

北京 → 澳门 → 珠海 → 香港 → 北京

- 住宿节奏：澳门 2 晚 → 珠海 2 晚 → 香港 3 晚
- 签注：先澳门、再回内地珠海、最后进香港，全程 1 次赴澳签注 + 1 次赴港签注
- 澳门：澳门瑞吉（The Londoner Macao），12/13 → 12/15
- 珠海：珠海仁恒洲际，12/15 → 12/17，12/15 下午经关闸 / 拱北口岸入境
- 长隆：12/16（周三）全天横琴长隆海洋王国，20:00 烟花以官方公告为准
- 过港：12/17 上午经港珠澳大桥金巴（24 小时运营、车程 30–40 分钟）进香港
- 香港：香港丽晶（3 晚），12/17 → 12/20；迪士尼 12/18（周五）全天

### PLAN B：不延后，珠海换广州，12/6–12/13

北京 → 广州 → 澳门 → 香港 → 北京

- 前提：抢到 12/6（周日）19:00 孙燕姿「就在日落以后」广州站（广东省奥林匹克体育中心体育场）
- 住宿节奏：广州 2 晚（酒店待定，抢到票再定）→ 澳门 2 晚 → 香港 3 晚
- 广州酒店选址建议：地铁 4 / 21 号线沿线（散场回酒店方便）或天河 / 珠江新城
- 12/7（周一）：广州长隆野生动物世界全天，傍晚广州塔 / 珠江夜景
- 12/8：广州南站乘广珠城际到珠海站（紧邻拱北口岸）过关，入住澳门瑞吉 12/8 → 12/10
- 12/10：澳门 → 香港（喷射飞航或港珠澳大桥金巴），香港丽晶 12/10 → 12/13；迪士尼 12/11（周五）
- 签注同样只需 1 次赴澳 + 1 次赴港

## 未来旅行计划

**新西兰 · 南岛自驾｜日期待定，13 天 12 晚**

基督城 → 奥马鲁 → 但尼丁 → 布拉夫 → 皇后镇 → 瓦纳卡 → 库克山 → 基督城（全程租车）

旧版计划整理，暂未排具体日期与航班。

## 页面设计

- 一个旅行 = 一个 HTML 页面
- 所有旅行共用 `css/style.css`
- 地图使用 Leaflet + OpenStreetMap；点位按具体地点校准，不再使用城市中心点代替景点
- 计划行程使用“早上 / 上午 / 中午 / 下午 / 傍晚 / 晚上”等自然时段，不写未经确认的精确时间
- 已完成旅行的天气使用历史记录；未来旅行不把历史气候平均值当成预测
- 酒店卡片包含品牌/酒店标识，并链接到酒店官网
- 连锁品牌酒店使用品牌通用标识，例如 EDITION、Sheraton、St. Regis、InterContinental 等

## 新增旅行

1. 在 `trips/` 新建 HTML。
2. 在首页 `index.html` 添加旅行卡片。
3. 行程专属资源放进 `assets/<trip-name>/`。
4. 需要地图时，使用真实地点坐标，并在页面脚本中单独维护。
