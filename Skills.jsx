/* global React, SectionHead */

function Skills() {
  const C = window.CONTENT;
  return (
    <section id="skills" className="cv-section">
      <SectionHead num="02" label="技能" sub="技術武器庫與專長分布" />
      <div className="cv-skills-grid">
        {C.skills.map(s => (
          <div key={s.title} className="cv-skill-card">
            <h3>{s.title}</h3>
            <ul>
              {s.items.map(i => (
                <li key={i.n}>
                  <div className="cv-skill-row">
                    <span><span className="cv-skill-bullet">▸</span>{i.n}</span>
                    <span className="cv-skill-pct">{i.lvl}</span>
                  </div>
                  <div className="cv-skill-bar"><div className="cv-skill-bar-f" style={{ width: i.lvl + "%" }} /></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Skills = Skills;
