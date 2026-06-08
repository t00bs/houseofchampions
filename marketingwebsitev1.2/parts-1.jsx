/* House of Champions, hero, manifesto (chrome lives in shared.jsx) */

const { useState, useEffect, useRef } = React;

/* ---------- HERO ---------- */
function Hero({ copy, onApply }) {
  const c = HERO_COPIES[copy] || HERO_COPIES.default;
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(i);
  }, []);
  const t = time.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  return (
    <section className="hero" id="top">
      <div className="hero-stage">
        <video
          className="hero-video"
          ref={v => { if (v) { v.muted = true; v.defaultMuted = true; } }}
          src={window.__resources && window.__resources.heroVideo || "https://dibmytmydewlv.cloudfront.net/e8be8860-5ff7-474b-a301-e69d68a9fa98/videos/header.mp4"}
          autoPlay
          muted
          loop
          playsInline
          preload="auto" />
        
      </div>

      <div className="hero-content">
        <h1 className="hero-headline" style={{ width: "1400px", fontSize: "clamp(40px, 5.2vw, 82px)" }}>
          A house built around{" "}
          <span className="t-grad-hero t-grad-hero--drift">creativity, community, collaboration &amp; communication</span>
        </h1>
        <div className="hero-sub">
          <div className="eyebrow"><span className="dot" />Now welcoming Spring 2026</div>
          <p style={{ margin: "14px 0 0" }}>{c.sub}</p>
          <div className="actions">
            <a className="btn btn--primary" href={PAGES.apply}>Apply for Membership <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href={PAGES.space}>Step inside</a>
          </div>
        </div>
      </div>

      <div className="hero-meta">
        <div className="hero-tickers">
          <div className="hero-loc"><span className="live" />The House is open · Jersey · {t} · 12°C</div>
          <div className="hero-loc">A few rooms left tonight · Booking required</div>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="num">04</span><span className="label">Rooms</span></div>
          <div className="stat"><span className="num">02</span><span className="label">Memberships</span></div>
          <div className="stat"><span className="num">7</span><span className="label">Days a week</span></div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="line" />
        <span>Step inside</span>
      </div>
    </section>);

}

/* ---------- MANIFESTO / OUR PROMISE ---------- */
function Manifesto() {
  return (
    <section className="manifesto reveal" id="manifesto">
      <div className="side">
        <div className="kicker">Our Promise / Nº 001</div>
        <h3 className="h-section">More than a <em>workspace.</em></h3>
        <div className="kicker" style={{ color: "var(--ink-dim)" }}></div>
      </div>
      <div className="body">
        <p>House of Champions is a <em>premium curated professional environment</em>, and a community that elevates standards, supports collaboration, and strengthens networks.</p>
        <p>It's where creatives, entrepreneurs and makers come together to do the work that matters. We share resources, swap rooms, trade notes, and celebrate collective success. No one gets left behind.</p>
        <p>You'll find a Creative Concierge on the floor, a calendar full of the right conversations, and a House quietly built around the lives of the people inside it.</p>
        <div className="sig">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1 L9 5 L13 6 L10 9 L11 13 L7 11 L3 13 L4 9 L1 6 L5 5 Z" fill="currentColor" /></svg>
          <span>Signed, the House, Jersey, MMXXVI</span>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Hero, Manifesto });