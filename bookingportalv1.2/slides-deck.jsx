/* ============================================================================
   SLIDE DECK — House of Champions · Booking Portal
   A click / swipe / arrow-key slideshow that presents the existing wireframe
   screens one at a time (no pan-zoom canvas). Each screen is a fixed-size
   frame scaled to fit the viewport and seated on a warm near-black stage with
   HOC chrome: serif wordmark, mono labels, brass accent, square corners.
   Position persists in localStorage. Exposes <SlideDeck> globally.
   ========================================================================== */

if (typeof document !== 'undefined' && !document.getElementById('deck-styles')) {
  const s = document.createElement('style');
  s.id = 'deck-styles';
  s.textContent = `
  :root{
    --st-bg:#15120D; --st-bg-2:#1D1A13; --st-ink:#EBE3D2; --st-ink-dim:#9C958650;
    --st-ink-2:#A59E8C; --st-ink-3:#6E685B; --st-line:#2C281F; --st-line-2:#3A342B;
    --st-accent:#C6A35A;
    --st-serif:"Cormorant Garamond","EB Garamond",Georgia,serif;
    --st-sans:"Inter Tight","Inter",-apple-system,sans-serif;
    --st-mono:"JetBrains Mono","IBM Plex Mono",ui-monospace,monospace;
  }
  .dk,.dk *{box-sizing:border-box;}
  .dk{position:fixed;inset:0;display:flex;flex-direction:column;
    background:
      radial-gradient(120% 80% at 50% -10%, rgba(198,163,90,.06), transparent 60%),
      var(--st-bg);
    color:var(--st-ink);font-family:var(--st-sans);user-select:none;-webkit-user-select:none;}

  /* header */
  .dk-top{flex:0 0 auto;height:58px;display:flex;align-items:center;gap:18px;
    padding:0 24px;border-bottom:1px solid var(--st-line);}
  .dk-wm{font-family:var(--st-serif);font-style:italic;font-weight:600;font-size:18px;
    letter-spacing:-.01em;color:var(--st-ink);}
  .dk-sub{font-family:var(--st-mono);font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;
    color:var(--st-ink-3);border-left:1px solid var(--st-line-2);padding-left:14px;}
  .dk-sub b{color:var(--st-accent);font-weight:500;}
  .dk-count{font-family:var(--st-mono);font-size:11px;letter-spacing:.1em;color:var(--st-ink-2);}
  .dk-count b{color:var(--st-ink);font-weight:500;}

  /* stage */
  .dk-stage{flex:1;min-height:0;position:relative;display:flex;align-items:center;
    justify-content:center;padding:44px 96px;cursor:pointer;}
  .dk-frame{position:relative;transform-origin:center center;
    background:var(--wf-paper,#F1EDE3);
    border:1px solid var(--st-line-2);
    box-shadow:0 30px 80px -30px rgba(0,0,0,.7), 0 2px 0 rgba(255,255,255,.02) inset;}
  .dk-frame > *{width:100%;height:100%;}

  /* slide caption — pinned to top-left of the stage */
  .dk-cap{position:absolute;top:18px;left:24px;z-index:4;display:flex;align-items:center;gap:10px;}
  .dk-cap .no{font-family:var(--st-mono);font-size:10px;letter-spacing:.14em;color:var(--st-accent);}
  .dk-cap .lb{font-family:var(--st-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--st-ink-2);}

  /* arrows */
  .dk-arrow{position:absolute;top:50%;transform:translateY(-50%);width:46px;height:46px;
    border-radius:50%;border:1px solid var(--st-line-2);background:rgba(21,18,13,.6);
    color:var(--st-ink);display:flex;align-items:center;justify-content:center;
    font-family:var(--st-sans);font-size:18px;cursor:pointer;z-index:5;
    transition:background .2s var(--ease,cubic-bezier(.2,.7,.2,1)),color .2s,border-color .2s;}
  .dk-arrow:hover{background:var(--st-ink);color:var(--st-bg);border-color:var(--st-ink);}
  .dk-arrow.l{left:26px;} .dk-arrow.r{right:26px;}
  .dk-arrow.off{opacity:.25;pointer-events:none;}

  /* footer */
  .dk-foot{flex:0 0 auto;min-height:54px;display:flex;align-items:center;gap:20px;
    padding:0 24px;border-top:1px solid var(--st-line);}
  .dk-foot .lab{font-family:var(--st-serif);font-style:italic;font-size:17px;color:var(--st-ink);}
  .dk-foot .lab .sec{font-family:var(--st-mono);font-style:normal;font-size:9.5px;letter-spacing:.16em;
    text-transform:uppercase;color:var(--st-ink-3);margin-right:12px;}
  .dk-hint{font-family:var(--st-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--st-ink-3);}

  /* progress dots */
  .dk-rail{display:flex;align-items:center;gap:6px;flex-wrap:wrap;max-width:48vw;}
  .dk-rail i{width:7px;height:7px;border-radius:50%;background:var(--st-line-2);cursor:pointer;
    transition:background .2s,transform .2s;}
  .dk-rail i:hover{background:var(--st-ink-3);}
  .dk-rail i.on{background:var(--st-accent);transform:scale(1.25);}
  .dk-rail i.sec{box-shadow:0 0 0 1px var(--st-line-2);}

  .dk-fade{animation:dkfade .42s var(--ease,cubic-bezier(.2,.7,.2,1));}
  @keyframes dkfade{from{opacity:0;}to{opacity:1;}}
  @media (prefers-reduced-motion: reduce){ .dk-fade{animation:none;} }
  `;
  document.head.appendChild(s);
}

function SlideDeck({ deckTitle = "Booking Portal", deckKind = "Wireframes", slides = [], storageKey = "hoc-deck" }) {
  const { useState, useEffect, useRef, useLayoutEffect, useCallback } = React;
  const clamp = (n) => Math.max(0, Math.min(slides.length - 1, n));

  const [i, setI] = useState(() => {
    const v = parseInt(localStorage.getItem(storageKey) || "0", 10);
    return isNaN(v) ? 0 : clamp(v);
  });
  const [scale, setScale] = useState(1);
  const stageRef = useRef(null);
  const slide = slides[i] || slides[0];

  useEffect(() => { localStorage.setItem(storageKey, String(i)); }, [i, storageKey]);

  const go = useCallback((d) => setI((p) => clamp(p + d)), [slides.length]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "PageDown", " "].includes(e.key)) { go(1); e.preventDefault(); }
      else if (["ArrowLeft", "PageUp"].includes(e.key)) { go(-1); e.preventDefault(); }
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(slides.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, slides.length]);

  // scale-to-fit
  useLayoutEffect(() => {
    const measure = () => {
      const el = stageRef.current;
      if (!el || !slide) return;
      const aw = el.clientWidth - 64;   // breathing room for arrows + caption
      const ah = el.clientHeight - 64;
      setScale(Math.min(aw / slide.w, ah / slide.h, 1.5));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (stageRef.current) ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, [slide && slide.w, slide && slide.h]);

  // swipe
  const touch = useRef(null);
  const onTouchStart = (e) => { touch.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  // click stage to advance (left edge third → back)
  const onStageClick = (e) => {
    const r = stageRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    go(x < r.width * 0.28 ? -1 : 1);
  };

  if (!slide) return null;

  return (
    <div className="dk">
      <header className="dk-top">
        <span className="dk-wm">{deckTitle}</span>
        <span className="dk-sub"><b>{deckKind}</b> · House of Champions · Members</span>
        <div style={{ flex: 1 }} />
        <span className="dk-count"><b>{String(i + 1).padStart(2, "0")}</b> / {String(slides.length).padStart(2, "0")}</span>
      </header>

      <div className="dk-stage" ref={stageRef} onClick={onStageClick}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="dk-cap">
          <span className="no">Nº {String(i + 1).padStart(3, "0")}</span>
          <span className="lb">{slide.label}</span>
        </div>
        <button className={"dk-arrow l" + (i === 0 ? " off" : "")}
          onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous">←</button>

        <div className="dk-frame dk-fade" key={i}
          style={{ width: slide.w, height: slide.h, transform: `scale(${scale})` }}>
          {slide.render()}
        </div>

        <button className={"dk-arrow r" + (i === slides.length - 1 ? " off" : "")}
          onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next">→</button>
      </div>

      <footer className="dk-foot">
        <span className="lab"><span className="sec">{slide.section}</span>{slide.title}</span>
        <div style={{ flex: 1 }} />
        <div className="dk-rail">
          {slides.map((sl, n) => (
            <i key={n} className={(n === i ? "on" : "") + (sl.first ? " sec" : "")}
              title={sl.label}
              onClick={(e) => { e.stopPropagation(); setI(n); }} />
          ))}
        </div>
        <span className="dk-hint">← → · click · swipe</span>
      </footer>
    </div>
  );
}

window.SlideDeck = SlideDeck;
