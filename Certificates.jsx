/* global React, SectionHead */

function Certificates() {
  const C = window.CONTENT;
  return (
    <section id="certs" className="cv-section">
      <SectionHead num="04" label="證照" sub="專業認證與技術標章" />
      <div className="cv-certs-grid">
        {C.certs.map(c => {
          /* count 欄位為可選；若未填寫則自動由 items.length 計算 */
          const total = typeof c.count === "number" ? c.count : c.items.length;
          return (
            <article key={c.cat} className="cv-cert-card">
              <header>
                <h3>{c.cat}</h3>
                <span className="cv-cert-count">{total} 張</span>
              </header>
              <ul>
                {c.items.map(i => <li key={i}>{i}</li>)}
                {total > c.items.length && (
                  <li className="cv-cert-more">+{total - c.items.length} 更多…</li>
                )}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

window.Certificates = Certificates;
