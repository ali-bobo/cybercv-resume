# cybercv-resume

資安工程師履歷網站，以 [CyberCV Design System](https://github.com/ali-bobo/CyberCV-Design-System) 打造。  
**純靜態、無 build step** — 修改 `content.js` 就能更新整站內容。

## 快速開始

```bash
# 本地預覽（任選一種）
python3 -m http.server 8080
npx serve .
# 開啟 http://localhost:8080

# ⚠️ 不要用 file:// 直接打開，瀏覽器會擋 Babel 的 JSX 載入
```

## 檔案結構

```
.
├── index.html            入口（載入 CDN、JSX 元件、content.js）
├── content.js            ★ 唯一需要修改的檔案（所有文字 / 資料）
├── styles.css            排版與互動樣式
├── colors_and_type.css   設計系統 Token（顏色、字型、間距）
├── Header.jsx            導覽列元件
├── Hero.jsx              首屏英雄區元件
├── About.jsx             關於 + 遙測側欄元件
├── Skills.jsx            技能進度條元件
├── Experience.jsx        工作經歷時間軸元件
├── Certificates.jsx      證照卡片元件
├── Projects.jsx          專案卡片 + 篩選器元件
├── Contact.jsx           聯絡卡片元件
└── SKILL.md              Copilot Agent 技能描述（快速修改輔助）
```

## 更新內容

**只要編輯 `content.js`**，所有區塊都會自動更新。JSX 元件不需要動。

| 想改什麼 | 找哪個 key |
|----------|-----------|
| 名字、職稱、Email | `meta` |
| 首屏大標題、統計數字 | `hero` |
| 自我介紹文字 | `about.paragraphs` |
| 技能熟練度 | `skills[].items[].lvl`（0–100）|
| 新增工作經歷 | `experience` 陣列前端加一筆 |
| 新增證照 | `certs[].items` 加入字串 |
| 新增專案 | `projects` 陣列加一筆（見下方範例）|
| 聯絡資訊 | `contact.items` |

### 新增一個專案

```js
// content.js → projects 陣列加一筆
{
  name:     "my-tool",
  lang:     "Go",
  stars:    0,
  cat:      "SEC",          // "SEC" | "ARC" | "OPS"
  featured: false,          // true → 卡片有綠色內發光
  href:     "https://github.com/ali-bobo/my-tool",  // 填了才有連結
  blurb:    "一句話描述這個工具做什麼。",
},
```

### 新增一筆工作經歷

```js
// content.js → experience 陣列最前面插入
{
  range:  "2026 — 至今",
  role:   "職稱",
  org:    "公司名稱",
  active: true,          // 目前在職時設為 true，舊職移除此欄
  bullets: [
    "成就一",
    "成就二",
  ],
},
```

## 部署到 GitHub Pages

```bash
git add . && git commit -m "update: 更新履歷內容"
git push origin main
# Repo Settings → Pages → Branch: main / (root) → Save
# 幾分鐘後上線：https://ali-bobo.github.io/cybercv-resume
```

也可直接拖到 **[Netlify Drop](https://app.netlify.com/drop)** 或 **Cloudflare Pages**，30 秒取得網址。

## 生產化建議

目前使用 Babel 在瀏覽器即時轉譯 JSX，適合個人履歷網站。如需極致效能：

1. 保持原樣（首屏 < 500 KB，個人站完全夠用）
2. 把 JSX 用 [Babel REPL](https://babeljs.io/repl) 轉為純 `React.createElement`，移除 Babel CDN
3. 改寫成 Next.js / Astro（最佳效能，但需要 build）

## 切換 Production Builds

將 `index.html` 中的 CDN 行換為 production builds，並計算新的 SRI hash：

```bash
# 計算 SRI hash（macOS/Linux）
curl -s https://unpkg.com/react@18.3.1/umd/react.production.min.js \
  | openssl dgst -sha384 -binary | openssl base64 -A
```

## 設計規範

- 暗色主題，無亮色版本
- 主要強調色：`#00ff88`
- 字型：JetBrains Mono（程式 UI）+ Noto Sans TC（長篇文字）
- 無 emoji，無插圖，資料即視覺
