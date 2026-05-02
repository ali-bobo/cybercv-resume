/* global React, SectionHead */

function Experience() {
  const C = window.CONTENT;
  return (
    <section id="exp" className="cv-section">
      <SectionHead num="03" label="經歷" sub="職涯時間軸 · 由近至遠" />
      <div className="cv-timeline">
        {C.experience.map((e, i) => (
          <div key={i} className={"cv-tl-row" + (e.active ? " is-active" : "")}>
            <div className="cv-tl-marker"></div>
            <div className="cv-tl-date">{e.range}</div>
            <div className="cv-tl-body">
              <div className="cv-tl-head">
                <span className="cv-tl-role">{e.role}</span>
                <span className="cv-tl-org">@ {e.org}</span>
              </div>
              <ul>
                {e.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Experience = Experience;
