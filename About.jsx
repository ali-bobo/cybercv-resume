/* global React */
function SectionHead({ num, label, sub }) {
  return (
    <header className="cv-sec-head">
      <div className="cv-sec-num">{num}</div>
      <div>
        <h2 className="cv-sec-title">{label}<span className="cv-sec-title-ghost">{label}</span></h2>
        {sub && <p className="cv-sec-sub">{sub}</p>}
      </div>
    </header>
  );
}

function About() {
  const C = window.CONTENT;
  return (
    <section id="about" className="cv-section">
      <SectionHead num="01" label="關於" sub={C.meta.tagline} />
      <div className="cv-about-grid">
        <div className="cv-about-prose">
          {C.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="cv-roles">
            {C.about.roles.map(r => (
              <div key={r.h} className="cv-role">
                <h4>{r.h}</h4>
                <p>{r.p}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="cv-telemetry">
          <div className="cv-tel-head">_系統遙測</div>
          {C.about.telemetry.map(t => (
            <div key={t.k} className="cv-tel-row">
              <span className="cv-tel-k">{t.k}</span>
              <span className="cv-tel-v">{t.v}</span>
              <span className={"cv-tel-s" + (t.ok ? " cv-ok" : "")}>{t.s}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

window.About = About;
window.SectionHead = SectionHead;
