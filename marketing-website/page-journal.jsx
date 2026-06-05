/* The Journal — filterable index */

const { useState: useJS } = React;

function JournalPage() {
  useChrome();
  const [topic, setTopic] = useJS("All");
  const [feat, ...rest] = JOURNAL;
  const list = topic === "All" ? rest : rest.filter(j => j.topic === topic);
  const showFeat = topic === "All" || feat.topic === topic;

  return (
    <>
      <Header current="journal" />
      <PageHero
        index="Nº 004"
        kicker="The Journal"
        title={<>Dispatches from the <em>House.</em></>}
        lead="Notes on community, the rooms, the kitchen and the people inside — published when there's something worth saying."
        meta={[["Published", "Fortnightly"], ["Latest", "Issue Nº 14"], ["Topics", "Eight and counting"]]}
      />

      <section className="std">
        <div className="std-inner">
          <div className="filters">
            {JOURNAL_TOPICS.map(t => (
              <button key={t} className={"filter " + (t === topic ? "active" : "")} onClick={() => setTopic(t)}>{t}</button>
            ))}
          </div>

          {showFeat && (
            <article className="jx-feature">
              <div className="frame"><Media img={feat.img} pos={feat.pos} caption={feat.caption} hue={feat.hue} variant={5} /></div>
              <div className="body">
                <div className="meta">
                  <span className="topic">{feat.topic}</span>
                  <span className="date">{feat.date}</span>
                  <span className="rt">{feat.readTime} read</span>
                </div>
                <h2>{feat.title}</h2>
                <p className="deck">{feat.deck}</p>
                <span className="author">{feat.author}</span>
                <div><a className="btn btn--ghost" href="#">Read the dispatch <span className="arrow">→</span></a></div>
              </div>
            </article>
          )}

          <div className="jx-grid">
            {list.map((j, i) => (
              <article className="jx-card" key={i}>
                <div className="frame"><Media img={j.img} pos={j.pos} caption={j.caption} hue={j.hue} variant={i + 1} /></div>
                <div className="meta">
                  <span className="topic">{j.topic}</span>
                  <span className="date">{j.date}</span>
                </div>
                <h3>{j.title}</h3>
                <p className="deck">{j.deck}</p>
                <span className="rt">{j.readTime} read</span>
              </article>
            ))}
          </div>

          {list.length === 0 && !showFeat && (
            <p style={{ color: "var(--ink-mute)", fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "0.1em", padding: "40px 0" }}>
              Nothing under this topic yet — check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="news">
        <div className="news-inner">
          <div className="eyebrow"><span className="dot" />The Dispatch</div>
          <h2>Once a fortnight, nothing more.</h2>
          <p>House news, the events worth clearing your evening for, and the occasional long read. No noise.</p>
          <form className="news-form" onSubmit={e => { e.preventDefault(); alert("Thank you — check your inbox to confirm."); }}>
            <input type="email" placeholder="you@email.com" required aria-label="Email address" />
            <button className="btn btn--primary" type="submit">Subscribe <span className="arrow">→</span></button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<JournalPage />);
