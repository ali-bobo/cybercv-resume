/* global React, SectionHead */
const { useState: useStateP } = React;

/* 只允許已知程式碼托管平台，防止 javascript: href 注入 */
const PROJECT_HREF_ALLOWED = [
  "https://github.com",
  "https://gitlab.com",
  "https://codeberg.org",
];
function isSafeProjectHref(href) {
  if (!href || typeof href !== "string") return false;
  try {
    const u = new URL(href);
    if (u.protocol !== "https:") return false;
    return PROJECT_HREF_ALLOWED.some(o => {
      try { return u.origin === o || u.origin.endsWith("." + new URL(o).hostname); }
      catch { return false; }
    });
  } catch { return false; }
}

function Projects() {
  const C = window.CONTENT;
  const [filter, setFilter] = useStateP("all");
  const list = C.projects.filter(p => filter === "all" || p.cat === filter);

  return (
    <section id="projects" className="cv-section">
      <SectionHead num="05" label="專案" sub={`${C.projects.length}+ 開源與個人專案`} />
      <div className="cv-filters">
        {C.projectFilters.map(f => (
          <button
            key={f.id}
            className={"cv-filter" + (filter === f.id ? " is-active" : "")}
            onClick={() => setFilter(f.id)}
          >{f.label}</button>
        ))}
      </div>
      <div className="cv-projects-grid">
        {list.map(p => (
          <article key={p.name} className={"cv-project" + (p.featured ? " is-featured" : "")}>
            <header>
              <h3>{p.name}</h3>
              {p.stars != null && <span className="cv-project-star">★ {p.stars}</span>}
            </header>
            <p>{p.blurb}</p>
            <footer>
              <span className="cv-project-lang">● {p.lang}</span>
              {isSafeProjectHref(p.href)
                ? <a className="cv-project-link"
                     href={p.href}
                     target="_blank"
                     rel="noopener noreferrer">[GITHUB →]</a>
                : <span className="cv-project-link cv-project-link-dim">[GITHUB]</span>
              }
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Projects = Projects;
