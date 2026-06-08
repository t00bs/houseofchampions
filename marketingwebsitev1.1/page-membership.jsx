/* Membership, tiers, process, FAQ */

const { useState: useMS } = React;

function FaqList({ items }) {
  const [open, setOpen] = useMS(0);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div className={"faq-item " + (open === i ? "open" : "")} key={i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{it[0]}</span>
            <span className="pm" aria-hidden="true" />
          </button>
          <div className="faq-a"><p>{it[1]}</p></div>
        </div>
      ))}
    </div>
  );
}

function MembershipPage() {
  useChrome();
  return (
    <>
      <Header current="membership" />
      <PageHero
        index="Nº 005"
        kicker="Membership"
        title={<>Two ways <em>in.</em></>}
        lead="Atelier for flexible access, Studio for a desk of your own. Early-bird pricing is held for our founding cohort, locked for the life of your membership, not just the first year."
        meta={[["Tiers", "Two · monthly rolling"], ["From", "£200 / mo early bird"], ["Day pass", "£35 / day"], ["Cohort", "Founding · Spring 2026"]]}
        actions={<>
          <a className="btn btn--primary" href={PAGES.apply}>Apply now <span className="arrow">→</span></a>
          <a className="btn btn--ghost" href={PAGES.viewing}>Book a viewing <span className="arrow">→</span></a>
        </>}
      />

      <Membership showHead={false} />

      <section className="std std--tint">
        <div className="std-inner">
          <div className="std-head">
            <div className="head-l">
              <div className="eyebrow"><span className="dot" />Joining · Nº 005a</div>
              <h2 className="h-section">How it <em>works.</em></h2>
            </div>
            <p className="lead">No queues, no cold sell. Three steps from first hello to a key in your hand, moving at the pace that suits you.</p>
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

      <section className="std">
        <div className="std-inner">
          <div className="std-head">
            <div className="head-l">
              <div className="eyebrow"><span className="dot" />Questions · Nº 005b</div>
              <h2 className="h-section">Before you <em>ask.</em></h2>
            </div>
            <p className="lead">The things prospective members raise most often. Anything else, the Concierge is a short email away.</p>
          </div>
          <FaqList items={FAQ} />
        </div>
      </section>

      <JoinCTA
        eyebrow="Founding cohort · Spring 2026"
        title={<>Lock the <em>early rate.</em></>}
        body="Early-bird pricing holds for the life of your membership. The cohort is capped, when a tier fills, it becomes a considered waitlist from there."
        primary={{ label: "Apply for membership", href: PAGES.apply }}
        secondary={{ label: "Book a house viewing", href: PAGES.viewing }}
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MembershipPage />);
