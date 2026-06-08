/* House of Champions, Journal preview, Membership preview, Contact strip, Footer, Modal */

const { useState: useState3, useEffect: useEffect3 } = React;

/* ---------- JOURNAL PREVIEW ---------- */
function Journal() {
  const [feat, ...rest] = JOURNAL;
  return (
    <section className="journal reveal" id="journal">
      <div className="journal-head">
        <div style={{display:"flex", flexDirection:"column", gap:"22px"}}>
          <div className="eyebrow"><span className="dot"/>The Journal · Nº 004</div>
          <h2 className="h-section">Dispatches from the <em>House.</em></h2>
        </div>
        <a className="btn btn--ghost" href={PAGES.journal}>Read the Journal <span className="arrow">→</span></a>
      </div>

      <div className="journal-grid">
        <article className="j-card feat">
          <div className="frame">
            <Media img={feat.img} pos={feat.pos} caption={feat.caption} hue={feat.hue} variant={5}/>
          </div>
          <div className="meta">
            <span className="topic">{feat.topic}</span>
            <span className="date">{feat.date}</span>
          </div>
          <h3 className="title">{feat.title}</h3>
          <p className="deck">{feat.deck}</p>
          <span className="author">{feat.author}</span>
        </article>

        <div className="j-side">
          {rest.slice(0,2).map((j, i) => (
            <article className="j-card" key={i}>
              <div className="frame" style={{aspectRatio:"5/4"}}>
                <Media img={j.img} pos={j.pos} caption={j.caption} hue={j.hue} variant={i+1}/>
              </div>
              <div className="meta">
                <span className="topic">{j.topic}</span>
                <span className="date">{j.date}</span>
              </div>
              <h3 className="title" style={{fontSize:"22px"}}>{j.title}</h3>
            </article>
          ))}
        </div>

        <div className="j-side">
          {rest.slice(2,4).map((j, i) => (
            <article className="j-card compact" key={i}>
              <div className="frame">
                <Media img={j.img} pos={j.pos} caption={j.caption} hue={j.hue} variant={i+3}/>
              </div>
              <div className="info">
                <span className="topic">{j.topic}</span>
                <h3 className="title">{j.title}</h3>
                <span className="date">{j.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MEMBERSHIP PREVIEW ---------- */
function Membership({ showHead = true }) {
  const [openDetails, setOpenDetails] = useState3(1);
  const [tableOpen, setTableOpen] = useState3(false);
  const handleDetails = (i) => setOpenDetails(openDetails === i ? -1 : i);
  return (
    <section className="membership reveal" id="membership">
      {showHead && (
      <div className="membership-head">
        <div className="eyebrow"><span className="dot"/>Membership · Nº 005</div>
        <h2 className="h-section">Two ways <em>in.</em></h2>
        <p style={{color:"var(--ink-dim)", maxWidth:"640px", fontSize:"15px", lineHeight:"1.65"}}>
          Atelier for flexible access, Studio for a desk of your own. A launch offer discounts your first month for the founding cohort, join before the doors fully open.
        </p>
      </div>
      )}

      <div className="tiers">
        {TIERS.map((t, i) => {
          const grad = `linear-gradient(110deg, ${t.grad.join(", ")})`;
          const isOpen = openDetails === i;
          const tierRows = COMPARISON.flatMap(g => g.rows.map(r => ({ group: g.group, label: r[0], val: r[i + 1] })));
          const included = tierRows.filter(r => r.val !== ", " && r.val !== "-").slice(0, 8);
          return (
            <div className={"tier " + (t.featured ? "featured " : "") + (t.inviteOnly ? "invite " : "")} key={i}>
              {t.featured && <span className="badge">Most chosen</span>}
              {t.inviteOnly && <span className="badge badge--mute">Invite only</span>}
              <div className="tier-tile" style={{ "--tile-grad": grad }}>
                <span className="tier-grad-name">{t.name.toUpperCase()}</span>
                <span className="tier-tile-meta">
                  <span>{t.tagline}</span>
                  <span>Nº 0{i + 1} / 02</span>
                </span>
              </div>
              <div className="tier-body">
                <div className="tier-row">
                  <h3 className="name">The {t.name}</h3>
                  <div className="price">
                    <span className="amt">{t.price}</span>
                    {t.per && <span className="per">{t.per}</span>}
                  </div>
                </div>
                {t.earlyPrice && (
                  <div className="early-bird">
                    <span className="eb-tag">First month</span>
                    <span className="eb-price">{t.earlyPrice}</span>
                  </div>
                )}
                <p className="desc">{t.desc}</p>
                <button className="details-toggle" onClick={() => handleDetails(i)} aria-expanded={isOpen}>
                  <span>{isOpen ? "Close details" : "What's included"}</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" style={{transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .25s ease"}}>
                    <path d="M1 1 L5 5 L9 1" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                  </svg>
                </button>
                <ul className={"tier-bullets " + (isOpen ? "is-open" : "")}>
                  {included.map((b, j) => (
                    <li key={j}>
                      <span className="b-label">{b.label}</span>
                      <span className="b-val">{b.val}</span>
                    </li>
                  ))}
                  <li className="b-term">
                    <span className="b-label">Minimum term</span>
                    <span className="b-val">{t.minTerm}</span>
                  </li>
                </ul>
                {t.inviteOnly ? (
                  <a className="btn btn--ghost btn--disabled" href={PAGES.contact}>
                    {t.cta} <span className="arrow">→</span>
                  </a>
                ) : (
                  <a className={"btn " + (t.featured ? "btn--primary" : "btn--ghost")} href={PAGES.apply}>
                    {t.cta} <span className="arrow">→</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="daypass-note">
        Not ready to commit? A House <strong>day pass</strong> is {DAY_PASS.price} {DAY_PASS.per}, a desk, the Wi-Fi and the honesty bar for a single day.
      </p>

      <div className="compare-toggle-row">
        <button className="btn btn--ghost" onClick={() => setTableOpen(!tableOpen)} aria-expanded={tableOpen}>
          {tableOpen ? "Hide comparison" : "Compare every benefit, side by side"}
          <svg width="10" height="6" viewBox="0 0 10 6" style={{marginLeft:"6px", transform: tableOpen ? "rotate(180deg)" : "none", transition: "transform .25s ease"}}>
            <path d="M1 1 L5 5 L9 1" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {tableOpen && <ComparisonTable/>}
    </section>
  );
}

/* ---------- COMPARISON TABLE ---------- */
function ComparisonTable() {
  return (
    <div className="compare-table">
      <div className="compare-header">
        <div className="col col--label"></div>
        {TIERS.map(t => (
          <div key={t.name} className={"col" + (t.featured ? " featured" : "")}>
            <span className="col-name">{t.name}</span>
            <span className="col-price">{t.price}{t.per && <em>{t.per}</em>}</span>
          </div>
        ))}
      </div>
      {COMPARISON.map((g, gi) => (
        <div className="compare-group" key={gi}>
          <div className="compare-grouphead">
            <span className="gname">{g.group}</span>
            {g.note && <span className="gnote">{g.note}</span>}
          </div>
          {g.rows.map((r, ri) => (
            <div className="compare-row" key={ri}>
              <div className="col col--label">{r[0]}</div>
              {r.slice(1).map((v, vi) => (
                <div key={vi} className={"col cell" + (v === ", " || v === "-" ? " cell--no" : "") + (v === "✓" ? " cell--yes" : "")}>
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------- CONTACT STRIP ---------- */
function Contact() {
  return (
    <section className="contact-strip reveal" id="contact">
      <div className="map">
        <StripedPlaceholder caption="map · st helier, jersey · 1:8000" hue={32} variant={4}/>
        <div className="grid-overlay"/>
        <div className="pin" aria-hidden="true"/>
        <div className="scale">100 m</div>
      </div>
      <div className="contact-info">
        <div className="eyebrow" style={{marginBottom:"24px"}}><span className="dot"/>Visit · Nº 006</div>
        <h2><span className="roman">Find us at </span>Charing Cross.</h2>
        <p>3 St Andrews Studios on Jersey's south coast, a short walk from the harbour. The House is open seven days, dawn until late. Members come and go on their own time; guests are welcome by arrangement.</p>
        <div className="fields">
          <div className="field">
            <span className="k">Address</span>
            <span className="v">3 St Andrews Studios<br/>St Andrews Place, Charing Cross<br/>St Helier, Jersey, JE2 3RP</span>
          </div>
          <div className="field">
            <span className="k">what3words</span>
            <span className="v"><a href="https://what3words.com/loving.hatch.sour" target="_blank" rel="noopener">///loving.hatch.sour</a></span>
          </div>
          <div className="field">
            <span className="k">Email</span>
            <span className="v"><a href="mailto:hello@ourhouseofchampions.com">hello@ourhouseofchampions.com</a></span>
          </div>
          <div className="field">
            <span className="k">LinkedIn</span>
            <span className="v"><a href="https://linkedin.com/company/our-house-of-champions" target="_blank" rel="noopener">our-house-of-champions</a></span>
          </div>
        </div>
        <div className="actions">
          <a className="btn btn--primary" href={PAGES.apply}>Sign up <span className="arrow">→</span></a>
          <a className="btn btn--ghost" href={PAGES.viewing}>Book a viewing <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---------- CLOSING CTA ---------- */
function HouseWorksAround() {
  return (
    <section className="house-works reveal" id="visit">
      <div className="hw-inner">
        <div className="eyebrow"><span className="dot"/>This house works around you</div>
        <h2 className="h-section">Life is rarely <em>nine to five.</em></h2>
        <p>Ambition doesn't clock off at school pickup. Creativity doesn't wait for Monday morning. We built House of Champions with that in mind, open dawn until late, every day, around the lives of the people inside it.</p>
        <div className="hw-actions">
          <a className="btn btn--primary" href={PAGES.viewing}>Book a house viewing <span className="arrow">→</span></a>
          <a className="btn btn--ghost" href={PAGES.apply}>Sign up <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Journal, Membership, ComparisonTable, Contact, HouseWorksAround });
