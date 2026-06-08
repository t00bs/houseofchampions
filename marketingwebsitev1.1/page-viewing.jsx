/* Book a House Viewing, scheduler */

const { useState: useVS } = React;

const VIEW_SLOTS = ["08:00", "10:30", "13:00", "16:00", "18:30", "20:00"];

function ViewingPage() {
  useChrome();
  const days = React.useMemo(() => Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + i + 1);
    return d;
  }), []);
  const [day, setDay] = useVS(0);
  const [slot, setSlot] = useVS(null);
  const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const submit = (e) => {
    e.preventDefault();
    const d = days[day];
    alert(`Viewing requested for ${dow[d.getDay()]} ${d.getDate()} ${mon[d.getMonth()]}${slot ? " at " + slot : ""}.\nWe'll confirm by email within a day.`);
  };

  return (
    <>
      <Header current="" />
      <PageHero
        index="Nº 007"
        kicker="Book a viewing"
        title={<>Come see <em>the House.</em></>}
        lead="A relaxed half-hour with a founder or the Concierge. We'll walk you through all four rooms, the honesty bar and the Top Floor, and answer anything, no pressure to join."
        meta={VIEWING_INCLUDES}
      />

      <section className="apply-wrap">
        <div className="apply-inner">
          <aside className="apply-rail">
            <div className="eyebrow"><span className="dot" />What to expect</div>
            <p className="rail-note">Viewings run seven days a week, dawn until late. Bring a colleague or a co-founder if it helps, and any questions you've been saving up.</p>
            <ul className="rail-list">
              {VIEWING_INCLUDES.map((v, i) => <li key={i}>{v[0]}: {v[1]}</li>)}
            </ul>
            <p className="rail-note" style={{ color: "var(--ink-mute)", fontSize: "13px" }}>Prefer to write first? <a href={PAGES.contact} style={{ color: "var(--accent)", borderBottom: "1px solid var(--accent)" }}>Send a note</a>.</p>
          </aside>

          <form onSubmit={submit}>
            <fieldset className="fieldset">
              <legend><span className="ls-no">01 /</span> Who's visiting</legend>
              <div className="form-grid">
                <div className="f"><span className="f-label">First name</span><input type="text" required /></div>
                <div className="f"><span className="f-label">Surname</span><input type="text" required /></div>
                <div className="f"><span className="f-label">Email</span><input type="email" required /></div>
                <div className="f"><span className="f-label">Phone</span><input type="tel" required /></div>
                <div className="f"><span className="f-label">Party size</span>
                  <select defaultValue="1">
                    <option value="1">Just me</option>
                    <option value="2">Two of us</option>
                    <option value="3">Three</option>
                    <option value="4">Four or more</option>
                  </select>
                </div>
                <div className="f"><span className="f-label">Membership interest</span>
                  <select defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Atelier, flexible access</option>
                    <option>Studio, desk access</option>
                    <option>House, full access</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend><span className="ls-no">02 /</span> Pick a day</legend>
              <div className="daygrid">
                {days.map((d, i) => (
                  <button type="button" key={i} className={"day " + (i === day ? "sel" : "")} onClick={() => setDay(i)}>
                    <span className="dow">{dow[d.getDay()]}</span>
                    <span className="dnum">{d.getDate()}</span>
                    <span className="dmon">{mon[d.getMonth()]}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend><span className="ls-no">03 /</span> Pick a time</legend>
              <div className="slots">
                {VIEW_SLOTS.map(s => (
                  <button type="button" key={s} className={"slot " + (s === slot ? "sel" : "")} onClick={() => setSlot(s)}>{s}</button>
                ))}
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend><span className="ls-no">04 /</span> Anything we should know</legend>
              <div className="form-grid">
                <div className="f full"><span className="f-label">Notes <span style={{ textTransform: "none", letterSpacing: 0 }}>(optional)</span></span><textarea placeholder="Accessibility needs, who referred you, what you're hoping to see…" /></div>
              </div>
            </fieldset>

            <div className="apply-submit">
              <span className="legal">We'll confirm your viewing by email within one working day. No deposit, no obligation.</span>
              <button className="btn btn--primary" type="submit">Request viewing <span className="arrow">→</span></button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ViewingPage />);
