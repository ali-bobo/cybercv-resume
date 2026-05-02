/* global React */
const { useState, useEffect } = React;

function Header() {
  const C = window.CONTENT;
  const [active, setActive] = useState(C.nav[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = C.nav.map(n => {
        const el = document.getElementById(n.id);
        if (!el) return { id: n.id, top: Infinity };
        return { id: n.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"cv-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="cv-header-inner">
        <a href="#top" className="cv-brand">{C.meta.handle}</a>
        <nav className="cv-nav">
          {C.nav.map(n => (
            <a
              key={n.id}
              href={"#" + n.id}
              className={"cv-nav-link" + (active === n.id ? " is-active" : "")}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="cv-status">
          <span className="cv-status-dot"></span>
          <span>系統運行中</span>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
