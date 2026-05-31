/* global React */
const { useState: useStateH, useEffect: useEffectH } = React;

function TypingTerminal() {
  const lines = window.CONTENT.hero.terminal;
  const [shown, setShown] = useStateH(0);
  useEffectH(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown(s => s + 1), 380);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="cv-term">
      <div className="cv-term-bar">
        <span className="cv-term-dot"></span>
        <span className="cv-term-dot"></span>
        <span className="cv-term-dot"></span>
        <span className="cv-term-title">~/{window.CONTENT.meta.handle.toLowerCase()} · session 0xAE</span>
      </div>
      <div className="cv-term-body">
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} className="cv-term-line">
            {l.type === "cmd" && <><span className="cv-term-prompt">$</span> <span>{l.text}</span></>}
            {l.type === "out" && <span className="cv-term-out">{l.text}</span>}
            {l.type === "ok"  && <span className="cv-term-ok">{l.text}</span>}
          </div>
        ))}
        {shown < lines.length && <span className="cv-caret">▮</span>}
      </div>
    </div>
  );
}

function Hero() {
  const C = window.CONTENT;
  return (
    <section id="top" className="cv-hero">
      <div className="cv-hero-grid"></div>
      <div className="cv-hero-inner">
        <div className="cv-hero-left">
          <div className="cv-hero-tag">_{C.hero.tag}</div>
          <h1 className="cv-hero-title">
            {C.hero.h1a}<br />{C.hero.h1b}
          </h1>
          <p className="cv-hero-sub">{C.hero.sub}</p>
          <div className="cv-hero-cta">
            <a className="cv-btn cv-btn-primary" href={C.hero.ctaPrimary.href}>{C.hero.ctaPrimary.label}</a>
            <a className="cv-btn cv-btn-link" href={C.hero.ctaLink.href} target="_blank" rel="noreferrer">{C.hero.ctaLink.label}</a>
            <button className="cv-btn cv-btn-link" onClick={() => window.print()}>↓ PDF</button>
          </div>
          <div className="cv-stats">
            {C.hero.stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="cv-stat-d"></div>}
                <div className="cv-stat">
                  <span className="cv-stat-num">{s.num}</span>
                  <span className="cv-stat-lbl">{s.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="cv-hero-term">
          <TypingTerminal />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
