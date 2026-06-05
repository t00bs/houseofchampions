/* Contact — enquiry form, details, map, departments */

function ContactPage() {
  useChrome();
  return (
    <>
      <Header current="contact" />
      <PageHero
        index="Nº 006"
        kicker="Visit"
        title={<><span className="roman">Find us at </span>Charing Cross.</>}
        lead="3 St Andrews Studios on Jersey's south coast — a short walk from the harbour. Open seven days, dawn until late. Members come and go on their own time; guests are welcome by arrangement."
        meta={[["Address", "St Helier, JE2 3RP"], ["Open", "Dawn until late · 7 days"], ["what3words", "///loving.hatch.sour"]]}
      />

      <section className="contact-page">
        <div className="contact-grid">
          <div className="contact-form-card">
            <div className="eyebrow"><span className="dot" />Send a note</div>
            <h2 className="h-section" style={{ fontSize: "clamp(34px,4vw,56px)" }}>Say <em>hello.</em></h2>
            <form className="form-grid" onSubmit={e => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }}>
              <div className="f"><span className="f-label">First name</span><input type="text" required /></div>
              <div className="f"><span className="f-label">Surname</span><input type="text" required /></div>
              <div className="f"><span className="f-label">Email</span><input type="email" required /></div>
              <div className="f"><span className="f-label">Phone <span style={{ textTransform: "none", letterSpacing: 0 }}>(optional)</span></span><input type="tel" /></div>
              <div className="f full">
                <span className="f-label">What's it about?</span>
                <select defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option>Membership &amp; applications</option>
                  <option>Booking a viewing</option>
                  <option>Events &amp; partnerships</option>
                  <option>Press &amp; the Journal</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="f full"><span className="f-label">Your message</span><textarea placeholder="A line or two is plenty to get started." required /></div>
              <div className="f full" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <span className="f-label" style={{ maxWidth: "320px", lineHeight: 1.6 }}>We reply within two working days. Your note never leaves the House.</span>
                <button className="btn btn--primary" type="submit">Send message <span className="arrow">→</span></button>
              </div>
            </form>
          </div>

          <aside className="contact-aside">
            <div className="aside-block">
              <h4>The House</h4>
              <div className="detail-line"><span className="f-label">Address</span><span className="dv">3 St Andrews Studios<br />St Andrews Place, Charing Cross<br />St Helier, Jersey, JE2 3RP</span></div>
              <div className="detail-line"><span className="f-label">what3words</span><span className="dv"><a href="https://what3words.com/loving.hatch.sour" target="_blank" rel="noopener">///loving.hatch.sour</a></span></div>
              <div className="detail-line"><span className="f-label">Email</span><span className="dv"><a href="mailto:hello@ourhouseofchampions.com">hello@ourhouseofchampions.com</a></span></div>
              <div className="detail-line"><span className="f-label">LinkedIn</span><span className="dv"><a href="https://linkedin.com/company/our-house-of-champions" target="_blank" rel="noopener">our-house-of-champions</a></span></div>
            </div>
            <div className="aside-block">
              <h4>Opening hours</h4>
              <div className="hours-table">
                {HOURS.map((h, i) => (
                  <div className="hours-row" key={i}><span className="hk">{h[0]}</span><span className="hv">{h[1]}</span></div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="std" style={{ paddingTop: "0", borderTop: "0" }}>
        <div className="contact-map">
          <StripedPlaceholder caption="map · st helier, jersey · 1:8000" hue={32} variant={4} />
          <div className="grid-overlay" />
          <div className="pin" aria-hidden="true" />
        </div>
      </section>

      <section className="std std--tint" style={{ paddingTop: "100px" }}>
        <div className="std-inner">
          <div className="std-head">
            <div className="head-l">
              <div className="eyebrow"><span className="dot" />Who to ask · Nº 006a</div>
              <h2 className="h-section">Straight to the <em>right desk.</em></h2>
            </div>
            <p className="lead">Skip the switchboard. Each part of the House has its own line — use whichever fits.</p>
          </div>
          <div className="dept-grid">
            {DEPARTMENTS.map((d, i) => (
              <div className="dept" key={i}>
                <h4>{d.name}</h4>
                <p>{d.desc}</p>
                <a href={"mailto:" + d.email}>{d.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinCTA
        eyebrow="Easier in person"
        title={<>Rather just <em>drop by?</em></>}
        body="Book a viewing and we'll put the kettle on. Thirty minutes, all four rooms, and a proper sense of whether the House is for you."
        primary={{ label: "Book a house viewing", href: PAGES.viewing }}
        secondary={{ label: "Apply for membership", href: PAGES.apply }}
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
