---
name: cybercv-resume
description: >
  Use this skill to update, extend, or validate the cybercv-resume static site.
  Contains the full data schema for content.js and all editing conventions.
  Invoke when the user asks to add a project, update experience, change skills,
  update certificates, or deploy the resume.
user-invocable: true
---

# CyberCV Resume — Editing Skill

This skill gives you complete knowledge of the `cybercv-resume` project structure
so you can update any section without reading all files each time.

## Architecture

```
content.js          ← ONLY file you should edit for content changes
index.html          ← HTML shell; touch only for CSP / CDN updates
styles.css          ← Visual styles; touch only for layout changes
colors_and_type.css ← Design tokens (colors, fonts); rarely change
*.jsx               ← React components; touch only for structural changes
```

## Content Schema Reference

### `meta` — Personal info
```js
meta: {
  name:     string,   // Display name (e.g., "哥布林")
  handle:   string,   // UPPERCASE brand (nav / terminal)
  title:    string,   // Job title shown in hero
  tagline:  string,   // Secondary tagline
  location: string,
  email:    string,
  github:   string,   // Full URL: "https://github.com/..."
  linkedin: string,   // Full URL: "https://linkedin.com/in/..."
}
```

### `hero.stats` — Four headline numbers
```js
stats: [
  { num: "08+", label: "年資" },  // num is a display string
  ...
]
```

### `hero.terminal` — Typing animation lines
```js
terminal: [
  { type: "cmd", text: "command to show" },   // green prompt + text
  { type: "out", text: "→ output text" },     // dimmed output
  { type: "ok",  text: "→ success text" },    // green output
]
```

### `about.telemetry` — Status table (right sidebar)
```js
telemetry: [
  { k: "KEY", v: "value", s: "STATUS", ok: true }  // ok: true → green badge
]
```

### `skills` — Skill categories with progress bars
```js
skills: [
  {
    title: "Category Name",
    items: [
      { n: "Skill Name", lvl: 85 }  // lvl: 0-100
    ]
  }
]
// First 3 categories get distinct colors (red, blue, green)
// Adding a 4th+ category uses default green
```

### `experience` — Timeline (newest first)
```js
experience: [
  {
    range:   "2024 — 至今",
    role:    "Job Title",
    org:     "Company Name",
    active:  true,          // optional; glowing node on timeline
    bullets: ["Achievement 1", "Achievement 2"],
  }
]
```

### `certs` — Certificate groups
```js
certs: [
  {
    cat:   "Category Name",
    items: ["CERT1", "CERT2"],  // shown as list
    count: 5,                   // optional; if count > items.length, shows "+N 更多…"
  }
]
// count is optional — omit and it auto-computes from items.length
```

### `projects` — Project cards with filter
```js
projects: [
  {
    name:     "repo-name",          // shown as h3
    lang:     "Go",                 // language badge
    stars:    42,                   // display number
    cat:      "SEC",                // "SEC" | "ARC" | "OPS" (matches projectFilters)
    featured: true,                 // optional; green inner glow
    href:     "https://github.com/user/repo",  // optional; enables [GITHUB →] link
    blurb:    "One-line description.",
  }
]
```

### `contact.items` — Contact cards
```js
contact: {
  items: [
    { k: "LABEL", v: "value", meta: "hint text", action: "copy" },  // click to copy
    { k: "LABEL", v: "value", meta: "hint text", href: "https://..." }, // click to open
    { k: "LABEL", v: "value", meta: "hint text" },  // static, not clickable
  ],
  footerL: "© year name · rights",
  footerR: "tagline",
}
// href values are validated against allowed origins (github.com, linkedin.com, twitter.com, x.com)
// Anchor links (#section) are also allowed
```

## Common Tasks

### Add a new project
1. Open `content.js`
2. Add to `projects` array (order = display order)
3. Set `cat` to match an existing `projectFilters` id, or add a new filter

### Add a new job experience
1. Open `content.js`
2. Insert at the **beginning** of `experience` array (newest first)
3. Set `active: true` on the new entry, remove `active` from the previous one

### Update a skill level
1. Find the skill in `skills[n].items`
2. Change `lvl` (0–100)

### Add a new certificate category
1. Add to `certs` array: `{ cat: "New Cat", items: ["CERT"] }`

### Add a new nav section
1. Add to `nav`: `{ id: "section-id", label: "Label" }`
2. Create a new JSX component file
3. Add `<script type="text/babel" src="NewSection.jsx">` to `index.html`
4. Add `<NewSection />` to the `App` component in `index.html`

## Validation

`content.js` runs a self-check on load. Open browser DevTools → Console
to see any missing required fields.

## Deployment

```bash
# GitHub Pages (already configured on main branch root)
git add content.js
git commit -m "update: <what changed>"
git push origin main
```

## Design Constraints (do not violate)

- Dark surface only. No light mode.
- Mono-first typography: JetBrains Mono everywhere except long prose.
- Green `#00ff88` is the only primary accent. Use sparingly.
- No emoji. No photography. No illustrations.
- Underscore prefix on all section labels: `_LABEL`.
- Sharp corners. Hairline borders. Glow over gradient.
