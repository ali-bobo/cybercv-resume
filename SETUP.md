# SETUP.md — 維護與技術文件

> 本文件供站長自用。訪客說明請見 README.md。

---

## 本地開發

```bash
# 任選一種（不可用 file:// 開啟，會封鎖 Babel JSX 轉譯）
python3 -m http.server 8080
npx serve .
# 開啟 http://localhost:8080
```

---

## 更新履歷內容

### 方法一：透過 Admin 後台（建議）

開啟 `http://localhost:8080/admin.html`，輸入密碼後即可在視覺化界面編輯所有欄位，並匯出新的 `content.js`。

> **安全提示**：`admin.html` 已加入 `.gitignore`，**不會提交至公開 Repo**。
> 首次使用前，請先進入 SECURITY 頁籤設定自訂密碼，再開始編輯。

### 方法二：直接編輯 content.js

**只需編輯 `content.js`**，所有區塊都會自動更新，JSX 元件不需要動。

| 想改什麼 | 找哪個 key |
|----------|-----------|
| 名字、職稱、Email | `meta` |
| 首屏大標題、統計數字 | `hero` |
| 自我介紹文字 | `about.paragraphs` |
| 技能熟練度 | `skills[].items[].lvl`（0–100）|
| 新增工作經歷 | `experience` 陣列前端加一筆 |
| 新增證照 | `certs[].items` 加入字串 |
| 新增專案 | `projects` 陣列加一筆 |
| 聯絡資訊 | `contact.items` |

---

## 檔案結構

```
.
├── index.html            入口（載入 CDN、JSX 元件、content.js）
├── content.js            ★ 唯一需要修改的內容檔案
├── admin.html            管理後台（本地工具，已列入 .gitignore，不進 repo）
├── styles.css            排版與互動樣式
├── colors_and_type.css   設計系統 Token（顏色、字型、間距）
├── robots.txt            SEO 設定（admin.html 不被索引）
├── Header.jsx            導覽列元件
├── Hero.jsx              首屏英雄區元件
├── About.jsx             關於 + 遙測側欄元件
├── Skills.jsx            技能進度條元件
├── Experience.jsx        工作經歷時間軸元件
├── Certificates.jsx      證照卡片元件
├── Projects.jsx          專案卡片 + 篩選器元件
├── Contact.jsx           聯絡卡片元件
├── README.md             公開說明（訪客友善版本）
├── SETUP.md              本文件（維護說明）
└── SKILL.md              Copilot Agent 技能描述
```

---

## 部署到 GitHub Pages

```bash
# ⚠️  admin.html 已在 .gitignore，git add . 不會包含它
git add content.js   # 只提交內容變更
git commit -m "update: 更新履歷內容"
git push origin main
# Repo Settings → Pages → Branch: main / (root) → Save
# 幾分鐘後上線
```

也可直接拖到 **[Netlify Drop](https://app.netlify.com/drop)** 或 **Cloudflare Pages**，30 秒取得網址。

---

## Admin 後台密碼管理

後台密碼採用 **PBKDF2-HMAC-SHA256**（310,000 次迭代）儲存，hash 只存在你本機的 `admin.html` 中（不進 repo）。

### 更改密碼流程

1. 開啟 `/admin.html`，以當前密碼登入
2. 前往 **SECURITY** 頁籤
3. 填寫當前密碼、新密碼（至少 12 字元）、確認密碼
4. 點擊「計算新 Hash」
5. 複製產生的程式碼片段
6. 開啟 `admin.html`，找到 `const CFG = {` 區塊
7. 將 `SALT` 和 `HASH` 行替換為新產生的值
8. 儲存後重新部署

### 安全說明

admin.html **不在公開 Repo** 中，線上網站不存在此檔案：

- **防禦目標**：本機工具防止誤操作；線上網站完全無 admin 攻擊面
- **真正的部署保護**：靠 GitHub 帳號的 2FA 機制
- **密碼設計**：本機便利鎖，PBKDF2-HMAC-SHA256 / 310,000 iterations
- **最壞情況**：若本機被入侵，攻擊者最多能匯出一份 content.js，無法直接推送到 repo

---

## SRI Hash 計算（更換 CDN 版本時）

```bash
# macOS / Linux
curl -s https://unpkg.com/react@18.3.1/umd/react.production.min.js \
  | openssl dgst -sha384 -binary | openssl base64 -A
```

---

## 技術棧

- **前端**：React 18（CDN production build）+ Babel Standalone（瀏覽器即時 JSX 轉譯）
- **樣式**：原生 CSS 3 + CSS 變數設計 Token 系統
- **安全**：CSP meta tag + SRI hash + HREF 白名單驗證
- **Admin**：純 HTML/JS，Web Crypto API（PBKDF2）密碼驗證，localStorage 草稿暫存
- **無 build step**：修改 content.js 即時生效

---

## 設計規範

- 暗色主題，無亮色版本
- 主要強調色：`#00ff88`
- 字型：JetBrains Mono（程式 UI）+ Noto Sans TC（長篇文字）
- 無 emoji，無插圖，資料即視覺
