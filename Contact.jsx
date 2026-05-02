/* global React, SectionHead */
const { useState: useStateC } = React;

/* 白名單：只允許導向這些 origin，防止 content.js 被改成惡意連結 */
const ALLOWED_ORIGINS = [
  "https://github.com",
  "https://linkedin.com",
  "https://twitter.com",
  "https://x.com",
  "mailto:",
];

function isSafeHref(href) {
  if (!href || typeof href !== "string") return false;
  /* 錨點（#pgp）允許 */
  if (href.startsWith("#")) return true;
  try {
    const url = new URL(href);
    /* 只允許 https: 與 mailto: */
    if (url.protocol !== "https:" && url.protocol !== "mailto:") return false;
    return ALLOWED_ORIGINS.some(o => o.startsWith("mailto:")
      ? url.protocol === "mailto:"
      : url.origin === o || url.origin.endsWith("." + new URL(o).hostname)
    );
  } catch {
    return false;
  }
}

function Contact() {
  const C = window.CONTENT;
  const [copiedKey, setCopiedKey] = useStateC(null);

  const handleClick = (item) => {
    if (item.action === "copy") {
      navigator.clipboard?.writeText(item.v);
      setCopiedKey(item.k);
      setTimeout(() => setCopiedKey(null), 1600);
    } else if (item.href && isSafeHref(item.href)) {
      /* noopener,noreferrer：防止 opener 存取與 Referer 洩漏 */
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="cv-section cv-section-last">
      <SectionHead num="06" label="聯絡" sub="一起做點有趣的事吧" />
      <div className="cv-contact-grid">
        {C.contact.items.map(item => {
          const interactive = item.action === "copy" || (item.href && isSafeHref(item.href));
          return (
            <button
              key={item.k}
              className={"cv-contact-card" + (!interactive ? " cv-contact-static" : "")}
              onClick={() => interactive && handleClick(item)}
              disabled={!interactive}
            >
              <h4>_{item.k}</h4>
              <span className="cv-contact-v">{item.v}</span>
              <span className="cv-contact-meta">→ {copiedKey === item.k ? "已複製" : item.meta}</span>
            </button>
          );
        })}
      </div>
      <footer className="cv-footer">
        <span>{C.contact.footerL}</span>
        <span>{C.contact.footerR}</span>
      </footer>
    </section>
  );
}

window.Contact = Contact;
