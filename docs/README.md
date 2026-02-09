# Leo's Private Recipes | 私房菜谱

> 用心烹饪，用爱调味 — Cook with Heart, Season with Love

一个精美的个人烹饪菜谱网站，使用纯 HTML/CSS/JS 构建，可直接部署到 GitHub Pages。

## 预览

- 深色优雅主题 + 金色点缀
- 响应式设计，支持手机和桌面
- 分类筛选、滚动动画
- 数据驱动 — 添加菜谱只需编辑 JSON

## 项目结构

```
docs/
├── index.html           # 主页
├── recipes.json         # 菜谱数据（编辑这个文件来管理菜谱）
├── css/
│   ├── style.css        # 全局样式
│   └── recipe-detail.css # 详情页样式
├── images/              # 菜品图片存放目录
└── recipes/             # 菜谱详情页
    ├── index.html       # 详情页模板
    └── *.html           # 各菜谱详情页
```

## 如何添加新菜谱

### 第 1 步：编辑 `docs/recipes.json`

在数组末尾添加一个新对象：

```json
{
  "id": "gong-bao-ji-ding",
  "name": "宫保鸡丁",
  "nameEn": "Kung Pao Chicken",
  "emoji": "🍗",
  "category": "家常菜",
  "difficulty": "中等",
  "time": "25 min",
  "servings": 3,
  "image": "gong-bao-ji-ding.jpg",
  "ingredients": [
    { "name": "鸡胸肉", "amount": "300g" },
    { "name": "花生米", "amount": "50g" }
  ],
  "steps": [
    "鸡胸肉切丁，加淀粉和料酒腌制",
    "炒花生米备用",
    "爆炒鸡丁，加入调料和花生米"
  ],
  "tips": "花生米最后放，保持酥脆口感"
}
```

**字段说明：**

| 字段 | 说明 |
|------|------|
| `id` | 唯一标识，用拼音，以 `-` 分隔（同时也是 HTML 文件名） |
| `name` | 中文菜名 |
| `nameEn` | 英文菜名 |
| `emoji` | 代表菜品的 emoji（无图片时显示） |
| `category` | 分类：`硬菜`、`家常菜`、`素菜`，也可以自定义 |
| `difficulty` | 难度：`简单`、`中等`、`较难` |
| `time` | 烹饪时间 |
| `servings` | 几人份 |
| `image` | 图片文件名（放在 `docs/images/` 下），留空 `""` 则显示 emoji |
| `ingredients` | 食材数组，每项含 `name` 和 `amount` |
| `steps` | 步骤数组，按顺序排列 |
| `tips` | 烹饪小贴士 |

### 第 2 步：添加图片（可选）

将菜品图片放入 `docs/images/` 目录，文件名与 `image` 字段一致。

推荐：16:10 比例，宽度 800px 以上的 jpg 格式。

### 第 3 步：创建详情页

复制 `docs/recipes/index.html`，重命名为 `docs/recipes/{id}.html`（id 与 JSON 中的 `id` 一致）。

例如：`docs/recipes/gong-bao-ji-ding.html`

无需修改文件内容，页面会自动根据文件名从 JSON 加载对应菜谱。

## 部署到 GitHub Pages

1. 进入仓库 Settings → Pages
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `main`，目录选择 `/docs`
4. 保存，等待几分钟即可访问

## 本地预览

由于页面使用 `fetch()` 加载 JSON，需要一个本地服务器：

```bash
cd docs
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## License

MIT
