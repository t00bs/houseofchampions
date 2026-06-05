/* Apply — full membership application */

const { useState: useAS } = React;

function ApplyPage() {
  useChrome();
  const tiers = TIERS.filter(t => !t.inviteOnly);
  const [tier, setTier] = useAS(1);

  return (
    <>
      <Header current="" />
      <PageHero
        index="Application · Q2 2026"
        kicker="Apply"
        title={<>Tell us about <em>you.</em></>}
        lead="We read every application and reply within fourteen days. This is the start of a conversation, not an exam — there are no trick questions."
        meta={[["Cohort", "Founding · Spring 2026"], ["Reply", "Within 14 days"], ["From", "£200 / mo early bird"]]}
      />

      <section className="std std--tint" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="std-inner">
          <div className="std-head">
            <div className="head-l">
              <div className="eyebrow"><span className="dot" />The shape of it · Nº 008</div>
              <h2 className="h-section">Three steps, <em>that's all.</em></h2>
            </div>
            <p className="lead">From first hello to a key in your hand. Most members are settled within a fortnight of applying.</p>
          </div>
          <div className="steps">
            {PROCESS.map(p => (
              <div className="step" key={p.num}>
                <span className="sn">{p.num}</span>
                <h4>{p.name}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="apply-wrap">
        <div className="apply-inner">
          <aside className="apply-rail">
            <div className="eyebrow"><span className="dot" />Good to know</div>
            <p className="rail-note">Membership is capped and considered. A referral helps but isn't required — plenty of members arrive cold.</p>
            <ul className="rail-list">
              <li>Early-bird pricing locked for life</li>
              <li>Monthly rolling on Atelier &amp; Studio</li>
              <li>Every application read by the Council</li>
              <li>Your details never leave the House</li>
            </ul>
            <p className="rail-note" style={{ color: "var(--ink-mute)", fontSize: "13px" }}>Want to see it first? <a href={PAGES.viewing} style={{ color: "var(--accent)", borderBottom: "1px solid var(--accent)" }}>Book a viewing</a>.</p>
          </aside>

          <form onSubmit={e => { e.preventDefault(); alert("Application received. Thank you — we'll be in touch within fourteen days."); }}>
            <fieldset className="fieldset">
              <legend><span className="ls-no">01 /</span> About you</legend>
              <div className="form-grid">
                <div className="f"><span className="f-label">First name</span><input type="text" required /></div>
                <div className="f"><span className="f-label">Surname</span><input type="text" required /></div>
                <div className="f"><span className="f-label">Email</span><input type="email" required /></div>
                <div className="f"><span className="f-label">Phone</span><input type="tel" /></div>
                <div className="f full"><span className="f-label">Home parish</span>
                  <select defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>St Helier</option>
                    <option>St Brelade</option>
                    <option>St Saviour</option>
                    <option>Grouville</option>
                    <option>Trinity</option>
                    <option>St Lawrence</option>
                    <option>Elsewhere in the Channel Islands</option>
                    <option>Mainland UK</option>
                    <option>Elsewhere</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend><span className="ls-no">02 /</span> Your work</legend>
              <div className="form-grid">
                <div className="f"><span className="f-label">What you do</span><input type="text" placeholder="Founder, designer, maker…" required /></div>
                <div className="f"><span className="f-label">Company / studio</span><input type="text" placeholder="If applicable" /></div>
                <div className="f full"><span className="f-label">What are you building right now?</span><textarea placeholder="A sentence or two will do. We'll ask more when we meet." required /></div>
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend><span className="ls-no">03 /</span> Membership</legend>
              <div className="tier-pick">
                {tiers.map((t, i) => (
                  <button type="button" key={t.name} className={"tp " + (i === tier ? "sel" : "")} onClick={() => setTier(i)}>
                    <span className="tp-check"><svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4 L4 7 L9 1" stroke="#1A1408" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                    <span className="tp-tag">{t.tagline}</span>
                    <span className="tp-name">{t.name}</span>
                    <span className="tp-price">{t.earlyPrice || t.price}{t.per && " " + t.per} · early bird</span>
                  </button>
                ))}
              </div>
              <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.1em", color: "var(--ink-mute)", margin: "18px 0 0" }}>
                The Collective tier is invite-only — <a href={PAGES.contact} style={{ color: "var(--accent)" }}>get in touch</a> if you've been referred.
              </p>
            </fieldset>

            <fieldset className="fieldset">
              <legend><span className="ls-no">04 /</span> Referral &amp; anything else</legend>
              <div className="form-grid">
                <div className="f full"><span className="f-label">Who put your name forward?</span><input type="text" placeholder="Member name, if applicable" /></div>
                <div className="f full"><span className="f-label">Anything you'd like us to know?</span><textarea placeholder="Optional — the floor is yours." /></div>
              </div>
            </fieldset>

            <div className="apply-submit">
              <span className="legal">By submitting you accept the House privacy notice. We never share your application outside the Council.</span>
              <button className="btn btn--primary" type="submit">Send application <span className="arrow">→</span></button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ApplyPage />);
