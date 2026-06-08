/* ============================================================================
   WF-KIT — House of Champions · Members
   Mid-fidelity wireframe primitives. Greyscale on warm paper, but carrying the
   HOC structural DNA: square corners, 1px hairlines, mono labels, serif
   display, one muted brass accent for ACTIVE state + tier locks. Annotations
   are slate-blue dashed note pills, clearly "meta" — not part of the UI.
   Exports everything to window for the screen files to consume.
   ========================================================================== */

if (typeof document !== 'undefined' && !document.getElementById('wf-kit-styles')) {
  const s = document.createElement('style');
  s.id = 'wf-kit-styles';
  s.textContent = `
  :root{
    --wf-paper:#F1EDE3; --wf-panel:#FAF7F0; --wf-panel-2:#F4F0E6;
    --wf-ink:#2E2B25; --wf-ink-2:#6B665B; --wf-ink-3:#9A9486;
    --wf-line:#D9D3C5; --wf-line-2:#C3BCAB;
    --wf-fill:#E7E1D4; --wf-fill-2:#EFEadc;
    --wf-accent:#A8823C; --wf-accent-soft:#EBDFC4;
    --wf-note:#3F6B82; --wf-note-bg:#E7EEF1; --wf-note-line:#9CBCCB;
    --wf-ok:#4F7A54; --wf-err:#9A4A3C;
    --wf-serif:"Cormorant Garamond","EB Garamond",Georgia,serif;
    --wf-sans:"Inter Tight","Inter",-apple-system,sans-serif;
    --wf-mono:"JetBrains Mono","IBM Plex Mono",ui-monospace,monospace;
  }
  .wf,.wf *{box-sizing:border-box;}
  .wf{width:100%;height:100%;background:var(--wf-paper);color:var(--wf-ink);
    font-family:var(--wf-sans);font-size:14px;line-height:1.5;
    display:flex;flex-direction:column;overflow:hidden;}
  .wf-page{flex:1;min-height:0;padding:32px 40px;overflow:hidden;}
  .wf-mono{font-family:var(--wf-mono);}
  .wf-serif{font-family:var(--wf-serif);}

  /* type */
  .wf-eyebrow{font-family:var(--wf-mono);font-size:10px;font-weight:500;
    letter-spacing:.18em;text-transform:uppercase;color:var(--wf-ink-3);
    display:inline-flex;align-items:center;gap:7px;}
  .wf-eyebrow::before{content:"";width:5px;height:5px;border-radius:50%;
    background:var(--wf-accent);flex:0 0 auto;}
  .wf-kicker{font-family:var(--wf-mono);font-size:10px;letter-spacing:.16em;
    text-transform:uppercase;color:var(--wf-ink-3);}
  .wf-label{font-family:var(--wf-mono);font-size:10px;letter-spacing:.14em;
    text-transform:uppercase;color:var(--wf-ink-3);}
  .wf-meta{font-family:var(--wf-mono);font-size:11px;letter-spacing:.04em;color:var(--wf-ink-2);}
  .wf-display{font-family:var(--wf-serif);font-weight:500;font-style:italic;
    line-height:.92;letter-spacing:-.02em;margin:0;color:var(--wf-ink);}
  .wf-h{font-family:var(--wf-serif);font-weight:500;line-height:.98;
    letter-spacing:-.01em;margin:0;color:var(--wf-ink);}
  .wf-title{font-family:var(--wf-serif);font-style:italic;font-weight:500;
    line-height:1.05;margin:0;color:var(--wf-ink);}
  .wf-lead{font-size:14px;line-height:1.6;color:var(--wf-ink-2);}

  /* placeholder text bars */
  .wf-bar{height:9px;border-radius:1px;background:var(--wf-fill);}
  .wf-bar.dk{background:var(--wf-line-2);}

  /* surfaces */
  .wf-card{background:var(--wf-panel);border:1px solid var(--wf-line);}
  .wf-card.flat{background:transparent;}
  .wf-inset{background:var(--wf-panel-2);border:1px solid var(--wf-line);}
  .wf-hr{height:1px;background:var(--wf-line);border:0;margin:0;}

  /* image placeholder */
  .wf-ph{position:relative;background:
      repeating-linear-gradient(45deg,transparent 0 7px,rgba(120,112,96,.10) 7px 8px),
      var(--wf-fill);
    border:1px dashed var(--wf-line-2);display:flex;align-items:flex-end;}
  .wf-ph .cap{font-family:var(--wf-mono);font-size:9px;letter-spacing:.08em;
    text-transform:uppercase;color:var(--wf-ink-3);background:var(--wf-panel);
    border:1px solid var(--wf-line);padding:3px 6px;margin:7px;}

  /* buttons (square) */
  .wf-btn{font-family:var(--wf-mono);font-size:10px;font-weight:500;
    letter-spacing:.14em;text-transform:uppercase;padding:11px 16px;border:1px solid var(--wf-line-2);
    background:transparent;color:var(--wf-ink);cursor:default;display:inline-flex;
    align-items:center;gap:8px;white-space:nowrap;border-radius:0;}
  .wf-btn .ar{font-family:var(--wf-sans);}
  .wf-btn.pri{background:var(--wf-ink);color:var(--wf-paper);border-color:var(--wf-ink);}
  .wf-btn.acc{background:var(--wf-accent);color:#fff;border-color:var(--wf-accent);}
  .wf-btn.sm{padding:8px 12px;font-size:9px;}
  .wf-btn.dis{opacity:.45;}
  .wf-btn.block{display:flex;justify-content:center;width:100%;}

  /* form fields — underline only */
  .wf-field{display:flex;flex-direction:column;gap:7px;}
  .wf-field .in{border:0;border-bottom:1px solid var(--wf-line-2);background:transparent;
    padding:8px 0;color:var(--wf-ink-2);font-family:var(--wf-sans);font-size:14px;min-height:34px;
    display:flex;align-items:center;}
  .wf-field.focus .in{border-bottom-color:var(--wf-accent);color:var(--wf-ink);}
  .wf-field.err .in{border-bottom-color:var(--wf-err);}
  .wf-field .in.ph{color:var(--wf-ink-3);}
  .wf-errmsg{font-family:var(--wf-mono);font-size:9.5px;letter-spacing:.04em;color:var(--wf-err);}

  /* chips / tags / pills */
  .wf-tag{font-family:var(--wf-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;
    border:1px solid var(--wf-line-2);padding:4px 8px;color:var(--wf-ink-2);display:inline-flex;align-items:center;gap:6px;}
  .wf-tag.acc{border-color:var(--wf-accent);color:var(--wf-accent);}
  .wf-tag.ok{border-color:var(--wf-ok);color:var(--wf-ok);}
  .wf-dot{width:6px;height:6px;border-radius:50%;background:var(--wf-ink-3);}
  .wf-dot.ok{background:var(--wf-ok);}
  .wf-dot.acc{background:var(--wf-accent);}

  /* segmented toggle */
  .wf-seg{display:inline-flex;border:1px solid var(--wf-line-2);}
  .wf-seg > div{font-family:var(--wf-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;
    padding:9px 15px;color:var(--wf-ink-3);border-right:1px solid var(--wf-line-2);}
  .wf-seg > div:last-child{border-right:0;}
  .wf-seg > div.on{background:var(--wf-ink);color:var(--wf-paper);}

  /* avatar / circle */
  .wf-av{border-radius:50%;background:var(--wf-fill);border:1px solid var(--wf-line-2);
    display:flex;align-items:center;justify-content:center;font-family:var(--wf-mono);
    font-size:11px;color:var(--wf-ink-2);flex:0 0 auto;}

  /* allowance counter */
  .wf-allow .trk{height:6px;background:var(--wf-fill);position:relative;overflow:hidden;}
  .wf-allow .trk > i{position:absolute;left:0;top:0;bottom:0;background:var(--wf-ink);}
  .wf-allow .trk.warn > i{background:var(--wf-accent);}

  /* locked / upgrade */
  .wf-lock{position:relative;}
  .wf-lock.muted{opacity:.5;}

  /* annotation note pill */
  .wf-note{font-family:var(--wf-sans);font-size:11px;line-height:1.4;color:var(--wf-note);
    background:var(--wf-note-bg);border:1px dashed var(--wf-note-line);padding:7px 10px;
    display:flex;gap:7px;align-items:flex-start;max-width:260px;}
  .wf-note b{font-family:var(--wf-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--wf-note);flex:0 0 auto;padding-top:1px;}
  .wf-note.abs{position:absolute;z-index:6;box-shadow:0 2px 10px rgba(40,40,40,.10);}

  /* nav */
  .wf-top{height:60px;flex:0 0 auto;border-bottom:1px solid var(--wf-line);
    display:flex;align-items:center;gap:28px;padding:0 32px;background:var(--wf-panel);}
  .wf-wordmark{font-family:var(--wf-serif);font-style:italic;font-size:19px;font-weight:600;letter-spacing:-.01em;}
  .wf-nav{display:flex;align-items:center;gap:22px;}
  .wf-nav a{font-family:var(--wf-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--wf-ink-3);position:relative;padding:4px 0;}
  .wf-nav a.on{color:var(--wf-ink);}
  .wf-nav a.on::after{content:"";position:absolute;left:0;right:0;bottom:-19px;height:2px;background:var(--wf-accent);}

  /* mobile bottom tabs */
  .wf-tabs{height:58px;flex:0 0 auto;border-top:1px solid var(--wf-line);display:flex;background:var(--wf-panel);}
  .wf-tabs > div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;
    font-family:var(--wf-mono);font-size:7.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--wf-ink-3);}
  .wf-tabs > div.on{color:var(--wf-ink);}
  .wf-tabs .ic{width:18px;height:18px;border:1.4px solid currentColor;}
  .wf-tabs > div.on .ic{background:var(--wf-accent);border-color:var(--wf-accent);}

  /* misc layout helpers */
  .wf-row{display:flex;}
  .wf-col{display:flex;flex-direction:column;}
  .wf-grid{display:grid;}
  .wf-rule{width:2px;background:var(--wf-accent);flex:0 0 auto;}
  `;
  document.head.appendChild(s);
}

/* ---------- atoms ---------- */
const Eyebrow = ({ children, style }) => <div className="wf-eyebrow" style={style}>{children}</div>;
const Kicker  = ({ children, style }) => <div className="wf-kicker" style={style}>{children}</div>;
const Label   = ({ children, style }) => <div className="wf-label" style={style}>{children}</div>;
const Meta    = ({ children, style }) => <div className="wf-meta" style={style}>{children}</div>;
const HR = ({ style }) => <hr className="wf-hr" style={style} />;

const Disp = ({ children, size = 44, style }) => <div className="wf-display" style={{ fontSize: size, ...style }}>{children}</div>;
const H    = ({ children, size = 30, style }) => <div className="wf-h" style={{ fontSize: size, ...style }}>{children}</div>;
const Title= ({ children, size = 22, style }) => <div className="wf-title" style={{ fontSize: size, ...style }}>{children}</div>;
const Lead = ({ children, style }) => <div className="wf-lead" style={style}>{children}</div>;

/* placeholder text lines */
const Lines = ({ n = 3, w = ['100%','92%','70%'], gap = 8, dk = false, style }) => (
  <div className="wf-col" style={{ gap, ...style }}>
    {Array.from({ length: n }).map((_, i) => (
      <div key={i} className={"wf-bar" + (dk ? " dk" : "")} style={{ width: Array.isArray(w) ? (w[i] ?? w[w.length-1]) : w }} />
    ))}
  </div>
);

/* image placeholder (HOC striped stand-in) */
const Ph = ({ caption, h = 120, w = '100%', style }) => (
  <div className="wf-ph" style={{ height: h, width: w, ...style }}>
    {caption && <div className="cap">{caption}</div>}
  </div>
);

/* buttons */
const Btn = ({ children, variant, sm, dis, block, arrow, style }) => (
  <span className={["wf-btn", variant, sm && "sm", dis && "dis", block && "block"].filter(Boolean).join(" ")} style={style}>
    {children}{arrow && <span className="ar">→</span>}
  </span>
);

/* form field — underline only */
const Field = ({ label, value, ph, focus, err, errmsg, style }) => (
  <div className={["wf-field", focus && "focus", err && "err"].filter(Boolean).join(" ")} style={style}>
    {label && <Label>{label}</Label>}
    <div className={"in" + (value ? "" : " ph")}>{value || ph || ""}</div>
    {err && errmsg && <div className="wf-errmsg">{errmsg}</div>}
  </div>
);

const Tag = ({ children, variant, style }) => <span className={"wf-tag " + (variant || "")} style={style}>{children}</span>;
const Avatar = ({ children, size = 34, style }) => <div className="wf-av" style={{ width: size, height: size, ...style }}>{children}</div>;

/* segmented toggle */
const Seg = ({ options, active, style }) => (
  <div className="wf-seg" style={style}>
    {options.map((o) => <div key={o} className={o === active ? "on" : ""}>{o}</div>)}
  </div>
);

/* allowance counter */
const Allow = ({ label, used, total, unit = "", note, warn, style }) => {
  const pct = total ? Math.min(100, Math.round((used / total) * 100)) : 0;
  return (
    <div className="wf-allow wf-col" style={{ gap: 7, ...style }}>
      <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Label>{label}</Label>
        <span className="wf-meta" style={{ color: 'var(--wf-ink)' }}>{used} / {total}{unit}</span>
      </div>
      <div className={"trk" + (warn ? " warn" : "")}><i style={{ width: pct + '%' }} /></div>
      {note && <div className="wf-meta" style={{ fontSize: 10, color: 'var(--wf-ink-3)' }}>{note}</div>}
    </div>
  );
};

/* annotation note pill */
const Note = ({ children, kind = "Note", style, abs }) => (
  <div className={"wf-note" + (abs ? " abs" : "")} style={style}>
    <b>{kind}</b><span>{children}</span>
  </div>
);

/* ---------- shells ---------- */
const NAV = [
  ["dashboard", "Dashboard"], ["desks", "Book a Desk"], ["rooms", "Meeting Rooms"],
  ["bookings", "My Bookings"], ["team", "Team"], ["account", "Account"],
];
function DesktopShell({ active, member = "Imogen Hartley", initials = "IH", tier = "Studio", children, hideAvatar }) {
  return (
    <div className="wf">
      <header className="wf-top">
        <span className="wf-wordmark">House of Champions</span>
        <span className="wf-label" style={{ borderLeft: '1px solid var(--wf-line-2)', paddingLeft: 12 }}>Members</span>
        <nav className="wf-nav" style={{ marginLeft: 12 }}>
          {NAV.map(([k, l]) => <a key={k} className={k === active ? "on" : ""}>{l}</a>)}
        </nav>
        <div style={{ flex: 1 }} />
        {!hideAvatar && (
          <div className="wf-row" style={{ alignItems: 'center', gap: 12 }}>
            <Tag variant="acc">{tier}</Tag>
            <Avatar>{initials}</Avatar>
          </div>
        )}
      </header>
      <div className="wf-page">{children}</div>
    </div>
  );
}

const MTABS = [["home","Home"],["desks","Desks"],["rooms","Rooms"],["bookings","Bookings"],["acct","Account"]];
function MobileShell({ active = "home", title, children, noTabs, noHeader }) {
  return (
    <div className="wf">
      {!noHeader && (
        <header className="wf-top" style={{ height: 52, padding: '0 18px', gap: 12 }}>
          <span className="wf-wordmark" style={{ fontSize: 15 }}>House of Champions</span>
          <div style={{ flex: 1 }} />
          <Avatar size={26}>IH</Avatar>
        </header>
      )}
      <div className="wf-page" style={{ padding: '18px 18px' }}>{children}</div>
      {!noTabs && (
        <div className="wf-tabs">
          {MTABS.map(([k, l]) => (
            <div key={k} className={k === active ? "on" : ""}><span className="ic" />{l}</div>
          ))}
        </div>
      )}
    </div>
  );
}

/* page heading block used across screens */
const PageHead = ({ eyebrow, title, sub, right, size = 34, style }) => (
  <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, ...style }}>
    <div className="wf-col" style={{ gap: 10 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <H size={size}>{title}</H>
      {sub && <Lead style={{ maxWidth: 520 }}>{sub}</Lead>}
    </div>
    {right}
  </div>
);

Object.assign(window, {
  Eyebrow, Kicker, Label, Meta, HR, Disp, H, Title, Lead, Lines, Ph, Btn, Field,
  Tag, Avatar, Seg, Allow, Note, DesktopShell, MobileShell, PageHead,
});
