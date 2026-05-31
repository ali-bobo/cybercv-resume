/* global React, SectionHead */

function Education() {
  const C = window.CONTENT;
  if (!C.education || C.education.length === 0) return null;
  return (
    <section id="edu" className="cv-section">
      <SectionHead num="03.5" label="學歷" sub="教育背景" />
      <div className="cv-timeline">
        {C.education.map((e, i) => (
          <div key={i} className="cv-tl-row">
            <div className="cv-tl-marker"></div>
            <div className="cv-tl-date">{e.range}</div>
            <div className="cv-tl-body">
              <div className="cv-tl-head">
                <span className="cv-tl-role">{e.degree} · {e.field}</span>
                <span className="cv-tl-org">@ {e.school}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Education = Education;
