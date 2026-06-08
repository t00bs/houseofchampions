/* House of Champions, shared chrome: tokens, header, footer, page header, CTA */

const { useState: useSh, useEffect: useShE } = React;

/* Locked design tokens (kept identical across every page) */
const LOCKED = {
  accent: "#F29EC4",
  accent2: "#5C2A3A",
  display: "Bodoni Moda",
  density: "default",
  bg: "#0E0D0B", bg2: "#15130F", bg3: "#1C1A15",
};

/* Apply tokens + wire scroll-reveal. Call once at the top of every page. */
function useChrome() {
  useShE(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", LOCKED.accent);
    r.style.setProperty("--accent-2", LOCKED.accent2);
    r.style.setProperty("--serif", `"${LOCKED.display}", "EB Garamond", Georgia, serif`);
    r.style.setProperty("--bg", LOCKED.bg);
    r.style.setProperty("--bg-2", LOCKED.bg2);
    r.style.setProperty("--bg-3", LOCKED.bg3);
    r.setAttribute("data-density", LOCKED.density);
  }, []);
  useShE(() => {
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- LOGO (reversed-out PNG mask) ---------- */
function Logo({ size = 200, footer = false }) {
  return (
    <span className={footer ? "footer-logo" : "brand-logo"}
      role="img"
      aria-label="House of Champions"
      style={footer ? null : { width: size, height: size * 0.28 }} />
  );
}

/* ---------- HEADER ---------- */
function Header({ current = "home" }) {
  const [scrolled, setScrolled] = useSh(false);
  useShE(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home",       label: "Home",       href: PAGES.home },
    { id: "space",      label: "The Space",  href: PAGES.space },
    { id: "membership", label: "Membership", href: PAGES.membership },
    { id: "journal",    label: "Journal",    href: PAGES.journal },
    { id: "contact",    label: "Contact",    href: PAGES.contact },
  ];

  return (
    <header className={"site-header " + (scrolled ? "scrolled" : "")}>
      <a className="brand" href={PAGES.home} aria-label="House of Champions home">
        <Logo size={scrolled ? 140 : 180} />
      </a>
      <nav className="primary-nav">
        {links.map((l) =>
          <a key={l.id}
            className={"nav-link " + (l.id === current ? "active" : "")}
            href={l.href}>{l.label}</a>
        )}
      </nav>
      <div className="nav-right">
        <a className="nav-link" href="#sign-in">Sign in</a>
        <a className="btn btn--primary btn--sm" href={PAGES.apply}>Apply</a>
      </div>
    </header>
  );
}

/* ---------- INTERIOR PAGE HEADER ---------- */
function PageHero({ index, kicker, title, lead, meta, actions }) {
  return (
    <header className="page-hero">
      <div className="page-hero-inner">
        <div className="eyebrow"><span className="dot" />{kicker} · {index}</div>
        <h1 className="page-title">{title}</h1>
        {lead && <p className="page-lead">{lead}</p>}
        {actions && <div className="page-actions">{actions}</div>}
        {meta && (
          <div className="page-meta">
            {meta.map((m, i) => (
              <div className="pm-item" key={i}>
                <span className="pm-k">{m[0]}</span>
                <span className="pm-v">{m[1]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- CLOSING CTA BAND ---------- */
function JoinCTA({
  eyebrow = "This house works around you",
  title = <>Life is rarely <em>nine to five.</em></>,
  body = "Ambition doesn't clock off at school pickup. Creativity doesn't wait for Monday morning. We built House of Champions with that in mind, open dawn until late, every day, around the lives of the people inside it.",
  primary = { label: "Book a house viewing", href: PAGES.viewing },
  secondary = { label: "Apply for membership", href: PAGES.apply },
}) {
  return (
    <section className="house-works reveal" id="join">
      <div className="hw-inner">
        <div className="eyebrow"><span className="dot" />{eyebrow}</div>
        <h2 className="h-section">{title}</h2>
        <p>{body}</p>
        <div className="hw-actions">
          {primary && <a className="btn btn--primary" href={primary.href}>{primary.label} <span className="arrow">→</span></a>}
          {secondary && <a className="btn btn--ghost" href={secondary.href}>{secondary.label} <span className="arrow">→</span></a>}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const socials = [
    { label: "Instagram", href: "#",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="11.5" cy="4.5" r="0.7" fill="currentColor"/></svg> },
    { label: "LinkedIn", href: "#",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.2"/><line x1="4.5" y1="6.5" x2="4.5" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="4.5" cy="4.3" r="0.9" fill="currentColor"/><path d="M7.5 12 V6.5 M7.5 9 C7.5 7.6 8.4 6.5 9.8 6.5 C11.2 6.5 11.8 7.6 11.8 9 V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg> },
    { label: "Spotify", href: "#",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/><path d="M4 6 Q8 5 12 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/><path d="M4.8 8.4 Q8 7.5 11.2 9.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/><path d="M5.4 10.6 Q8 9.9 10.6 11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg> },
  ];
  const cols = [
    { h: "The House", links: [["The Space", PAGES.space], ["Membership", PAGES.membership], ["The Journal", PAGES.journal], ["Contact", PAGES.contact]] },
    { h: "Join", links: [["Apply for membership", PAGES.apply], ["Book a house viewing", PAGES.viewing], ["Compare tiers", PAGES.membership], ["Sign in", "#sign-in"]] },
  ];
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="brand" href={PAGES.home} aria-label="House of Champions home">
          <Logo footer={true} />
        </a>
        {cols.map((c, i) => (
          <div className="footer-col" key={i}>
            <h6>{c.h}</h6>
            <ul>
              {c.links.map((l, j) => <li key={j}><a href={l[1]}>{l[0]}</a></li>)}
            </ul>
          </div>
        ))}
        <div className="footer-col footer-where">
          <h6>Find us</h6>
          <p>3 St Andrews Studios<br/>St Andrews Place, Charing Cross<br/>St Helier, Jersey, JE2 3RP</p>
          <a className="footer-mail" href="mailto:hello@ourhouseofchampions.com">hello@ourhouseofchampions.com</a>
          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.label} className="social-link" href={s.href} aria-label={s.label} title={s.label}>{s.icon}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© MMXXVI · House of Champions, Jersey</span>
        <div className="legal">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">House rules</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { LOCKED, useChrome, Logo, Header, PageHero, JoinCTA, Footer });
