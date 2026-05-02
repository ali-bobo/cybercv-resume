/* global React, SectionHead */
const { useState: useStateP } = React;

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
              <span className="cv-project-star">★ {p.stars}</span>
            </header>
            <p>{p.blurb}</p>
            <footer>
              <span className="cv-project-lang">● {p.lang}</span>
              {p.href
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
