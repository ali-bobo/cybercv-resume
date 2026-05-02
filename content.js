/* ==========================================================
   content.js — 履歷內容設定檔  v2
   ----------------------------------------------------------
   ★ 唯一需要修改的檔案 ★
   修改這個檔案就可以更新整個網站的文字內容，不需要動 JSX。

   部署：把整個目錄上傳到 GitHub Pages、Netlify、Cloudflare Pages
         或任何靜態主機即可。（無需 build step）

   欄位說明請參閱 README.md → 內容欄位速查
   ========================================================== */

window.CONTENT = {

  /* ── 基本資訊 ─────────────────────────────────────────── */
  meta: {
    name:     "哥布林",                          // 顯示名稱
    handle:   "GOBLIN",                          // 大寫品牌字（導覽列 / 終端機）
    title:    "資安工程師 · 系統架構師",
    tagline:  "擅長資安技術 · 系統架構 · 系統維運",
    location: "台灣 · Taiwan",
    email:    "goblin@cybercv.dev",
    github:   "https://github.com/goblin",
    linkedin: "https://linkedin.com/in/goblin",
  },

  /* ── 導覽列 ───────────────────────────────────────────── */
  nav: [
    { id: "about",    label: "關於" },
    { id: "skills",   label: "技能" },
    { id: "exp",      label: "經歷" },
    { id: "certs",    label: "證照" },
    { id: "projects", label: "專案" },
    { id: "contact",  label: "聯絡" },
  ],

  /* ── 首屏英雄區 ───────────────────────────────────────── */
  hero: {
    tag:    "系統運行中",
    h1a:    "資安工程",
    h1b:    "與系統架構",
    sub:    "資安技術 · 系統架構 · 系統維運 · 滲透測試",
    ctaPrimary: { label: "查看專案", href: "#projects" },
    ctaLink:    { label: "GITHUB",   href: "https://github.com/goblin" },
    stats: [
      { num: "08+",  label: "年資" },
      { num: "120+", label: "事件處理" },
      { num: "42",   label: "CVE 發現" },
      { num: "15",   label: "證照" },
    ],
    /* 開機自檢風格的終端機逐行輸出 */
    terminal: [
      { type: "cmd", text: "whoami" },
      { type: "out", text: "→ goblin // 資安工程師 · 系統架構師" },
      { type: "cmd", text: "uptime" },
      { type: "out", text: "→ 08:12:42  load avg: 0.32, 0.41, 0.38" },
      { type: "cmd", text: "scan --self" },
      { type: "ok",  text: "→ 3 主機 · 0 漏洞 · 線上中" },
    ],
  },

  /* ── 關於 ─────────────────────────────────────────────── */
  about: {
    paragraphs: [
      "資安工程師 / 系統架構師。專注於企業級系統的縱深防禦、零信任架構導入，以及高可用性平台的設計與維運。",
      "相信安全不是事件後的清理，而是設計的第一性原則。把資安思維內建到 CI/CD、基礎建設與應用程式的每一層，讓系統在預設狀態下就是安全的。",
    ],
    roles: [
      { h: "資安技術", p: "滲透測試 · 紅藍隊演練 · 漏洞研究 · SOC 事件響應" },
      { h: "系統架構", p: "雲端原生 · 微服務 · 零信任網路 · IaC 設計" },
      { h: "系統維運", p: "Kubernetes · 監控告警 · SRE 實踐 · 災難復原" },
    ],
    telemetry: [
      { k: "燃料",   v: "黑咖啡",  s: "充足",   ok: true },
      { k: "工時",   v: "24/7",    s: "啟用",   ok: true },
      { k: "心情",   v: "解 CTF",  s: "高",     ok: true },
      { k: "狀態",   v: "可接案",  s: "ONLINE", ok: true },
    ],
  },

  /* ── 技能 ─────────────────────────────────────────────── */
  /*
    lvl: 熟練度 0–100，會渲染成進度條
    每個類別可以有任意數量的 items
  */
  skills: [
    {
      title: "資安技術",
      items: [
        { n: "滲透測試 / Red Team",        lvl: 95 },
        { n: "弱點掃描 · Nessus / Burp",   lvl: 90 },
        { n: "事件響應 / DFIR",             lvl: 85 },
        { n: "逆向工程 · Ghidra / IDA",    lvl: 75 },
        { n: "Web / API 安全 OWASP",       lvl: 92 },
      ],
    },
    {
      title: "系統架構",
      items: [
        { n: "Kubernetes / Service Mesh",  lvl: 88 },
        { n: "AWS / GCP 雲端原生",          lvl: 90 },
        { n: "Terraform / Pulumi (IaC)",   lvl: 85 },
        { n: "零信任網路 (ZTNA)",           lvl: 80 },
        { n: "微服務設計",                  lvl: 88 },
      ],
    },
    {
      title: "系統維運",
      items: [
        { n: "Linux / Unix 進階管理",       lvl: 95 },
        { n: "Prometheus / Grafana",       lvl: 88 },
        { n: "ELK / SIEM 日誌平台",        lvl: 85 },
        { n: "CI/CD · GitHub Actions",     lvl: 90 },
        { n: "Bash / Python 自動化",        lvl: 92 },
      ],
    },
  ],

  /* ── 工作經歷 ──────────────────────────────────────────── */
  /*
    active: true → 「目前在職」的節點會以發光綠色標示
  */
  experience: [
    {
      range: "2023 — 至今",
      role:  "資深資安工程師",
      org:   "某金融科技",
      active: true,
      bullets: [
        "建立企業 SOC 與 SIEM 平台",
        "主導零信任網路導入",
        "年度紅隊演練主理",
      ],
    },
    {
      range: "2020 — 2023",
      role:  "系統架構師",
      org:   "某電商平台",
      bullets: [
        "設計多雲容器平台",
        "推動 IaC 與 GitOps",
        "災難復原機制",
      ],
    },
    {
      range: "2018 — 2020",
      role:  "系統維運工程師",
      org:   "某 SaaS",
      bullets: [
        "7×24 線上維運",
        "建立可觀測性平台",
      ],
    },
    {
      range: "2016 — 2018",
      role:  "資安實習生",
      org:   "某資安公司",
      bullets: [
        "惡意程式分析",
        "CTF 校隊隊長",
      ],
    },
  ],

  /* ── 證照 ─────────────────────────────────────────────── */
  /*
    count: 可選，不填則自動以 items.length 計算
           若 count > items.length，多出的數量會顯示為「+N 更多…」
  */
  certs: [
    { cat: "進階資安",  items: ["OSCP", "OSEP", "CRTO", "GIAC GPEN", "GIAC GXPN"] },
    { cat: "防禦藍隊",  items: ["GIAC GCFA", "GIAC GCIA", "Splunk Core Certified"] },
    { cat: "管理治理",  items: ["CISSP", "CISM", "ISO 27001 LA"] },
    { cat: "雲端架構",  items: ["AWS Solutions Architect Pro", "GCP Professional Cloud Architect", "CKA", "CKS"] },
  ],

  /* ── 專案篩選器 ────────────────────────────────────────── */
  projectFilters: [
    { id: "all", label: "全部" },
    { id: "SEC", label: "資安工具" },
    { id: "ARC", label: "架構平台" },
    { id: "OPS", label: "維運自動化" },
  ],

  /* ── 專案 ─────────────────────────────────────────────── */
  /*
    href:     GitHub 連結（選填，填了才會顯示可點擊的 [GITHUB →]）
    featured: true → 卡片加綠色內發光
    cat:      對應 projectFilters 的 id
    lang:     顯示用，不做功能判斷
    stars:    純顯示數字
  */
  projects: [
    {
      name: "honeyport-mesh", lang: "Go",         stars: 248, cat: "SEC", featured: true,
      href: "https://github.com/goblin/honeyport-mesh",
      blurb: "分散式蜂蜜端口蜂巢：多節點協同誘捕、行為指紋識別、自動威脅情報訂閱輸出。",
    },
    {
      name: "zerotrust-stack", lang: "Rust",       stars: 186, cat: "ARC", featured: true,
      href: "https://github.com/goblin/zerotrust-stack",
      blurb: "開箱即用的零信任閘道：SPIFFE 身份、OPA 授權、mTLS 全程加密、服務目錄。",
    },
    {
      name: "fleet-ops",       lang: "Python",     stars: 92,  cat: "OPS",
      href: "https://github.com/goblin/fleet-ops",
      blurb: "K8s 多叢集統一維運平台：漂移偵測、自動修復、合規掃描儀表板。",
    },
    {
      name: "log-detective",   lang: "Python",     stars: 76,  cat: "SEC",
      href: "https://github.com/goblin/log-detective",
      blurb: "本地 LLM 輔助的事件響應助手：把 SIEM 告警轉為調查時間軸與處置建議。",
    },
    {
      name: "cve-radar",       lang: "TypeScript", stars: 64,  cat: "SEC",
      href: "https://github.com/goblin/cve-radar",
      blurb: "資產對照式 CVE 雷達：掃描你的依賴 → 推送相關漏洞 → 自動產生修補 PR。",
    },
    {
      name: "iac-guard",       lang: "Go",         stars: 58,  cat: "ARC",
      href: "https://github.com/goblin/iac-guard",
      blurb: "Terraform / Pulumi 安全靜態分析：CIS 基準檢查、最小權限稽核、PR 內聯註解。",
    },
    {
      name: "runbook-engine",  lang: "Python",     stars: 41,  cat: "OPS",
      href: "https://github.com/goblin/runbook-engine",
      blurb: "事件處理 Runbook 自動化引擎：把 SOP 變成可審計、可回放的執行軌跡。",
    },
    {
      name: "ssh-canary",      lang: "Go",         stars: 33,  cat: "SEC",
      href: "https://github.com/goblin/ssh-canary",
      blurb: "輕量級 SSH 蜜罐探針：零依賴 binary、單檔部署、Slack/Webhook 即時告警。",
    },
    {
      name: "infra-graph",     lang: "TypeScript", stars: 29,  cat: "ARC",
      href: "https://github.com/goblin/infra-graph",
      blurb: "把雲端拓撲畫成互動圖譜，從「誰能存取什麼」逆推爆炸半徑與最小化建議。",
    },
  ],

  /* ── 聯絡 ─────────────────────────────────────────────── */
  contact: {
    items: [
      { k: "EMAIL",    v: "goblin@cybercv.dev",       meta: "點擊複製",    action: "copy" },
      { k: "GITHUB",   v: "github.com/goblin",        meta: "前往",        href: "https://github.com/goblin" },
      { k: "LINKEDIN", v: "linkedin.com/in/goblin",   meta: "前往",        href: "https://linkedin.com/in/goblin" },
      { k: "PGP",      v: "0xDEAD BEEF · 4096R",      meta: "下載公鑰",    href: "#pgp" },
      { k: "位置",     v: "台灣 · 25.0°N 121.5°E",    meta: "遠端 / 全球" },
      { k: "時區",     v: "UTC+8 · GMT+0800",         meta: "通常 09–18 在線" },
    ],
    footerL: "© 2026 哥布林 · 保留所有權利",
    footerR: "CyberCV Design System · 靜態站點",
  },
};

/* ==========================================================
   Schema 快速驗證 — 在瀏覽器 console 報告缺漏欄位
   開發時很有用；部署後不影響效能
   ========================================================== */
(function validateContent(C) {
  const required = {
    "meta.name":    C.meta?.name,
    "meta.handle":  C.meta?.handle,
    "meta.email":   C.meta?.email,
    "meta.github":  C.meta?.github,
    "hero.h1a":     C.hero?.h1a,
    "hero.stats":   C.hero?.stats?.length > 0,
    "skills":       C.skills?.length > 0,
    "experience":   C.experience?.length > 0,
    "certs":        C.certs?.length > 0,
    "projects":     C.projects?.length > 0,
  };
  const missing = Object.entries(required)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length) {
    console.warn("[content.js] 缺少必要欄位：", missing.join(", "));
  }
})(window.CONTENT);
