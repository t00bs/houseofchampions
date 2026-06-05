/* The Space — room-by-room detail */

function SpacePage() {
  useChrome();
  return (
    <>
      <Header current="space" />
      <PageHero
        index="Nº 002"
        kicker="The Space"
        title={<>Four rooms, <em>each</em> with a job.</>}
        lead="A members' lounge for working through ideas, a long table for pitching them, a walnut boardroom for the decisions, and a treated studio for putting them on the record."
        meta={HOUSE_FACTS}
        actions={<>
          <a className="btn btn--primary" href={PAGES.viewing}>Book a viewing <span className="arrow">→</span></a>
          <a className="btn btn--ghost" href={PAGES.membership}>See membership <span className="arrow">→</span></a>
        </>}
      />

      <section className="rooms">
        <div className="rooms-inner">
          {SPACES.map((s, i) => (
            <article className="room reveal" key={i}>
              <div className="room-media">
                <Media img={s.img} pos={s.pos} caption={s.caption} hue={s.hue} variant={i} />
                <span className="room-no">Nº 0{i + 1} / 04</span>
              </div>
              <div className="room-body">
                <span className="kicker">{s.type}</span>
                <h3>{s.name}</h3>
                <p className="room-long">{s.long}</p>
                <ul className="room-specs">
                  {s.specs.map((sp, j) => (
                    <li key={j}><span className="rs-k">{sp[0]}</span><span className="rs-v">{sp[1]}</span></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Features />

      <JoinCTA
        eyebrow="A guided tour, by appointment"
        title={<>Come and <em>stand</em> in it.</>}
        body="Photographs only get you so far. Book a viewing and we'll walk you through all four rooms, the honesty bar and the Top Floor — dawn until late, whenever suits."
        primary={{ label: "Book a house viewing", href: PAGES.viewing }}
        secondary={{ label: "Apply for membership", href: PAGES.apply }}
      />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SpacePage />);
