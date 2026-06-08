/* House of Champions, The Space preview, Pillars, Ticker */

const { useRef: useRef2, useState: useState2, useEffect: useEffect2 } = React;

/* ---------- THE SPACE (preview / entry point) ---------- */
function TheSpace({ showHead = true }) {
  const [active, setActive] = useState2(0);
  const sp = SPACES[active];
  return (
    <section className="the-space reveal" id="the-space">
      {showHead && (
      <div className="ts-head">
        <div style={{display:"flex", flexDirection:"column", gap:"22px", maxWidth:"720px"}}>
          <div className="eyebrow"><span className="dot"/>The Space · Nº 002</div>
          <h2 className="h-section">Four rooms, <em>each</em> with a job.</h2>
        </div>
        <p className="lead">A members' lounge for working through ideas, a long table for pitching them, a walnut boardroom for the decisions, and a treated studio for putting them on the record.</p>
      </div>
      )}

      <div className="ts-stage">
        <div className="ts-frame">
          <Media img={sp.img} pos={sp.pos} caption={sp.caption} hue={sp.hue} variant={active}/>
          <div className="ts-frame-meta">
            <span className="num">Nº 0{active + 1} / 04 · {sp.type}</span>
            <h3>{sp.name}</h3>
          </div>
        </div>
        <aside className="ts-list">
          {SPACES.map((s, i) => (
            <button key={i}
              className={"ts-row " + (i === active ? "is-active" : "")}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}>
              <span className="num">0{i + 1}</span>
              <div className="info">
                <h4>{s.name}</h4>
                <p>{s.blurb}</p>
              </div>
              <span className="arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </aside>
      </div>

      <div className="ts-footer">
        <span className="kicker">A guided tour, by appointment.</span>
        <a className="btn btn--ghost" href={PAGES.viewing}>Book a viewing <span className="arrow">→</span></a>
        <a className="btn" href={PAGES.space}>The Space, in full <span className="arrow">→</span></a>
      </div>
    </section>
  );
}

/* ---------- FEATURES (six C's) ---------- */
function Features() {
  return (
    <section className="features reveal" id="features">
      <div className="features-head">
        <div style={{display:"flex", flexDirection:"column", gap:"22px"}}>
          <div className="eyebrow"><span className="dot"/>Features · Nº 003</div>
          <h2 className="h-section">Six <em>C</em>'s. One House.</h2>
        </div>
        <p className="lead">Everything inside the House is built around six commitments. They sit underneath every room, every booking, every member event we run.</p>
      </div>

      <div className="features-grid">
        {FEATURES.map((f) => (
          <article className="feature" key={f.num}>
            <div className="feature-head">
              <span className="feature-letter" aria-hidden="true">{f.letter}</span>
              <div className="feature-meta">
                <span className="num">{f.num}</span>
                <h3 className="name">{f.name}</h3>
              </div>
            </div>
            <p className="body">{f.body}</p>
            <div className="frame">
              <Media img={f.img} pos={f.pos} caption={f.caption} hue={f.hue} variant={Number(f.num)}/>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- TICKER ---------- */
function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <section className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span className="ticker-item" key={i}>{t}<span className="sep">✦</span></span>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { TheSpace, Features, Ticker });
