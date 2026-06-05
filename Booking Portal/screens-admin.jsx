/* ============================================================================
   SCREENS · ADMIN (1/2) — shell + the building-activity Overview + bookable items
   Desktop only. Left-sidebar nav distinguishes it from the member top-nav.
   Consumes wf-kit globals.
   ========================================================================== */

const ANAV = [
  ["overview", "Overview"], ["items", "Bookable items"], ["calendar", "Calendar"],
  ["plans", "Plans & permissions"], ["members", "Members"],
];
function AdminShell({ active, children, search = "Search members, rooms, bookings", actions }) {
  return (
    <div className="wf" style={{ flexDirection: 'row' }}>
      <aside style={{ flex: '0 0 218px', borderRight: '1px solid var(--wf-line)', background: 'var(--wf-panel)', display: 'flex', flexDirection: 'column', padding: '22px 0' }}>
        <div style={{ padding: '0 22px 20px' }}>
          <span className="wf-wordmark" style={{ fontSize: 16 }}>House of Champions</span>
          <div className="wf-label" style={{ marginTop: 9, color: 'var(--wf-accent)' }}>● Operations</div>
        </div>
        <nav className="wf-col" style={{ gap: 2, flex: 1 }}>
          {ANAV.map(([k, l]) => (
            <div key={k} className="wf-row" style={{ alignItems: 'center', gap: 11, padding: '11px 22px', borderLeft: '2px solid ' + (k === active ? 'var(--wf-accent)' : 'transparent'), background: k === active ? 'var(--wf-panel-2)' : 'transparent' }}>
              <span style={{ width: 13, height: 13, border: '1.4px solid ' + (k === active ? 'var(--wf-ink)' : 'var(--wf-ink-3)'), background: k === active ? 'var(--wf-accent)' : 'transparent', borderColor: k === active ? 'var(--wf-accent)' : 'var(--wf-ink-3)' }} />
              <span className="wf-mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: k === active ? 'var(--wf-ink)' : 'var(--wf-ink-3)' }}>{l}</span>
            </div>
          ))}
        </nav>
        <div style={{ padding: '16px 22px 0', borderTop: '1px solid var(--wf-line)', marginTop: 12 }}>
          <div className="wf-row" style={{ gap: 10, alignItems: 'center' }}>
            <Avatar>RE</Avatar>
            <div className="wf-col" style={{ gap: 2 }}><span style={{ fontSize: 12, fontWeight: 600 }}>Rowan Ellis</span><Meta style={{ fontSize: 9 }}>HOUSE MANAGER</Meta></div>
          </div>
        </div>
      </aside>
      <div className="wf-col" style={{ flex: 1, minWidth: 0 }}>
        <header className="wf-top" style={{ gap: 16 }}>
          <div className="wf-row" style={{ alignItems: 'center', gap: 10, flex: '0 0 320px', border: '1px solid var(--wf-line-2)', padding: '8px 12px' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', border: '1.4px solid var(--wf-ink-3)' }} />
            <span style={{ fontSize: 12, color: 'var(--wf-ink-3)' }}>{search}</span>
          </div>
          <div style={{ flex: 1 }} />
          <Meta>THU 4 JUNE MMXXVI · 11:40</Meta>
          <div className="wf-row" style={{ alignItems: 'center', gap: 6, position: 'relative' }}>
            <span style={{ width: 30, height: 30, borderRadius: '50%', border: '1px solid var(--wf-line-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>◔</span>
            <span style={{ position: 'absolute', top: -2, right: -4, background: 'var(--wf-accent)', color: '#fff', fontFamily: 'var(--wf-mono)', fontSize: 8, padding: '1px 4px', borderRadius: 999 }}>3</span>
          </div>
          {actions}
        </header>
        <div className="wf-page" style={{ padding: '26px 30px' }}>{children}</div>
      </div>
    </div>
  );
}

/* ---- shared: KPI card ---- */
function KPI({ label, value, sub, accent, trend }) {
  return (
    <div className="wf-card" style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 8, borderColor: accent ? 'var(--wf-accent)' : 'var(--wf-line)' }}>
      <Label>{label}</Label>
      <div className="wf-row" style={{ alignItems: 'baseline', gap: 7 }}>
        <span className="wf-serif" style={{ fontSize: 28, fontWeight: 600, whiteSpace: 'nowrap', color: accent ? 'var(--wf-accent)' : 'var(--wf-ink)' }}>{value}</span>
        {trend && <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-3)' }}>{trend}</span>}
      </div>
      <Meta style={{ fontSize: 10, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sub}</Meta>
    </div>
  );
}

/* ---- timeline pieces (08:00–20:00) ---- */
const T_OPEN = 480, T_SPAN = 720; // minutes
const pct = (min) => ((min - T_OPEN) / T_SPAN) * 100;
const HOURS = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
const NOW = 700; // 11:40

function HourHeader() {
  return (
    <div className="wf-row" style={{ alignItems: 'stretch' }}>
      <div style={{ flex: '0 0 150px' }} />
      <div className="wf-row" style={{ flex: 1, position: 'relative' }}>
        {HOURS.map((h, i) => <div key={i} style={{ flex: 1, borderLeft: '1px solid var(--wf-line)', padding: '0 0 6px 5px' }}><span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-3)' }}>{h}</span></div>)}
      </div>
    </div>
  );
}
function Track({ children, now }) {
  return (
    <div style={{ flex: 1, position: 'relative', height: 34, background: 'repeating-linear-gradient(90deg,transparent 0,transparent calc(100%/12 - 1px),var(--wf-line) calc(100%/12 - 1px),var(--wf-line) calc(100%/12))', border: '1px solid var(--wf-line)' }}>
      {children}
      {now && <div style={{ position: 'absolute', top: -4, bottom: -4, left: pct(NOW) + '%', width: 2, background: 'var(--wf-accent)', zIndex: 3 }} />}
    </div>
  );
}
function Block({ start, end, label, sub, muted, blocked }) {
  return (
    <div style={{ position: 'absolute', top: 3, bottom: 3, left: pct(start) + '%', width: (pct(end) - pct(start)) + '%', background: blocked ? 'repeating-linear-gradient(45deg,var(--wf-fill) 0 5px,var(--wf-panel-2) 5px 10px)' : (muted ? 'var(--wf-fill)' : 'var(--wf-ink)'), border: '1px solid ' + (blocked ? 'var(--wf-line-2)' : (muted ? 'var(--wf-line-2)' : 'var(--wf-ink)')), padding: '0 8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', zIndex: 2 }}>
      <span style={{ fontFamily: 'var(--wf-mono)', fontSize: 8.5, letterSpacing: '.04em', color: blocked || muted ? 'var(--wf-ink-2)' : 'var(--wf-paper)', whiteSpace: 'nowrap' }}>{label}</span>
      {sub && <span style={{ fontSize: 8, color: blocked || muted ? 'var(--wf-ink-3)' : 'rgba(255,255,255,.7)', whiteSpace: 'nowrap' }}>{sub}</span>}
    </div>
  );
}
function TLRow({ name, meta, children, now, last }) {
  return (
    <div className="wf-row" style={{ alignItems: 'center', borderBottom: last ? 0 : '1px solid transparent', marginBottom: 6 }}>
      <div className="wf-col" style={{ flex: '0 0 150px', gap: 2, paddingRight: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--wf-ink)' }}>{name}</span>
        <Meta style={{ fontSize: 8.5 }}>{meta}</Meta>
      </div>
      <Track now={now}>{children}</Track>
    </div>
  );
}
/* desk heat row — per-hour free counts */
function DeskRow({ name, meta, free, cap, now }) {
  return (
    <div className="wf-row" style={{ alignItems: 'center', marginBottom: 6 }}>
      <div className="wf-col" style={{ flex: '0 0 150px', gap: 2, paddingRight: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 500 }}>{name}</span><Meta style={{ fontSize: 8.5 }}>{meta}</Meta>
      </div>
      <div style={{ flex: 1, position: 'relative', display: 'flex', height: 34, border: '1px solid var(--wf-line)' }}>
        {free.map((f, i) => {
          const occ = (cap - f) / cap;
          return <div key={i} style={{ flex: 1, borderLeft: i ? '1px solid var(--wf-line)' : 0, background: 'rgba(168,130,60,' + (occ * 0.55).toFixed(2) + ')', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="wf-mono" style={{ fontSize: 8.5, color: occ > 0.6 ? 'var(--wf-ink)' : 'var(--wf-ink-3)' }}>{f}</span>
          </div>;
        })}
        <div style={{ position: 'absolute', top: -4, bottom: -4, left: pct(NOW) + '%', width: 2, background: 'var(--wf-accent)', zIndex: 3 }} />
      </div>
    </div>
  );
}

/* ---- ADMIN · OVERVIEW (the star) ---- */
function ScreenAdminOverview() {
  return (
    <AdminShell active="overview" actions={<Btn variant="pri" arrow={false} sm>+ New booking</Btn>}>
      <div className="wf-col" style={{ gap: 20 }}>
        {/* header + filters */}
        <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="wf-col" style={{ gap: 8 }}>
            <Eyebrow>Today at the House · Thursday 4 June</Eyebrow>
            <H size={32}>The floor, right now.</H>
          </div>
          <div className="wf-row" style={{ gap: 10, alignItems: 'center' }}>
            <Btn sm arrow={false}>◂ Today ▸</Btn>
            <Btn sm arrow={false}>All spaces ▾</Btn>
            <Seg options={["All", "Booked", "Free"]} active="All" />
          </div>
        </div>

        {/* KPI strip */}
        <div className="wf-row" style={{ gap: 14 }}>
          <KPI label="Occupancy now" value="64%" sub="32 IN · CAP 50" accent trend="▲ 8%" />
          <KPI label="Desks" value="14 / 22" sub="8 FREE NOW" />
          <KPI label="Rooms in use" value="2 / 4" sub="FUTURE ROOM FROM 14:00" />
          <KPI label="Members in today" value="18" sub="3 GUESTS EXPECTED" />
          <KPI label="Needs attention" value="3" sub="2 APPROVALS · 1 FAULT" accent />
        </div>

        {/* main split */}
        <div className="wf-row" style={{ gap: 18, alignItems: 'stretch' }}>
          {/* timeline */}
          <div className="wf-card" style={{ flex: 1, padding: 18 }}>
            <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Label>Day schedule · 08:00 – 20:00</Label>
              <div className="wf-row" style={{ gap: 14, alignItems: 'center' }}>
                {[["Booked", "var(--wf-ink)", "solid"], ["Free", "var(--wf-panel)", "free"], ["Blocked", "var(--wf-fill)", "hatch"], ["Now", "var(--wf-accent)", "line"]].map(([l, c, t], i) =>
                  <div key={i} className="wf-row" style={{ gap: 5, alignItems: 'center' }}>
                    <span style={{ width: 12, height: 10, background: t === 'line' ? 'transparent' : c, borderLeft: t === 'line' ? '2px solid var(--wf-accent)' : 0, border: t === 'free' ? '1px solid var(--wf-line-2)' : (t === 'line' ? 0 : 'none') }} />
                    <span className="wf-mono" style={{ fontSize: 8.5, color: 'var(--wf-ink-3)' }}>{l}</span>
                  </div>)}
              </div>
            </div>
            <HourHeader />
            <div style={{ marginTop: 6 }}>
              <Meta style={{ fontSize: 9, display: 'block', margin: '4px 0 8px' }}>ROOMS</Meta>
              <TLRow name="Thought Lounge" meta="LOUNGE · 6–10" now>
                <Block start={600} end={690} label="M. Reed" sub="Catch-up" />
                <Block start={900} end={960} label="Lounge hold" muted />
              </TLRow>
              <TLRow name="Launch Pad" meta="WORKSHOP · 10" now>
                <Block start={540} end={780} label="Hartley & Co" sub="Workshop" />
                <Block start={840} end={930} label="Nair" muted sub="Pending" />
              </TLRow>
              <TLRow name="Future Room" meta="BOARDROOM · 12" now>
                <Block start={480} end={540} label="Maintenance" blocked />
                <Block start={840} end={960} label="Board · Vance" sub="AV" />
              </TLRow>
              <TLRow name="Spark Studio" meta="PODCAST · 4/6" now>
                <Block start={660} end={780} label="The Editors" sub="Podcast" />
              </TLRow>
              <Meta style={{ fontSize: 9, display: 'block', margin: '12px 0 8px' }}>DESKS · FREE PER HOUR</Meta>
              <DeskRow name="Top Floor" meta="HOT DESKS · 14" cap={14} free={[8, 6, 4, 3, 3, 6, 4, 3, 3, 5, 8, 11]} />
              <DeskRow name="2nd Floor" meta="HOUSE ONLY · 8" cap={8} free={[8, 7, 6, 5, 5, 7, 5, 4, 4, 6, 7, 8]} />
            </div>
            <Note kind="At a glance" style={{ marginTop: 14, maxWidth: '100%' }}>One resource timeline answers “what's booked, what's free” for the whole day. Rooms show discrete bookings; desks show free count per hour as a heat row. The brass line is now; the Booked/Free filter dims the rest.</Note>
          </div>

          {/* right column */}
          <div className="wf-col" style={{ flex: '0 0 320px', gap: 16 }}>
            <div className="wf-card" style={{ padding: 16 }}>
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <Label>Needs attention</Label><Tag variant="acc">3</Tag>
              </div>
              <div className="wf-col" style={{ gap: 0 }}>
                {[["Future Room — overlap risk 16:00", "Two holds within 15 min", "warn"], ["Spark Studio — AV fault reported", "Logged by M. Reed · 09:12", "warn"], ["2 membership applications", "Awaiting your approval", "ok"]].map((a, i) => (
                  <div key={i} className="wf-row" style={{ gap: 10, alignItems: 'flex-start', padding: '11px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', marginTop: 5, background: a[2] === 'warn' ? 'var(--wf-accent)' : 'var(--wf-ink-3)', flex: '0 0 auto' }} />
                    <div className="wf-col" style={{ gap: 3, flex: 1 }}><span style={{ fontSize: 12, fontWeight: 500, color: 'var(--wf-ink)' }}>{a[0]}</span><Meta style={{ fontSize: 9.5 }}>{a[1].toUpperCase()}</Meta></div>
                    <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-accent)', whiteSpace: 'nowrap' }}>Open →</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="wf-card" style={{ padding: 16, flex: 1 }}>
              <Label style={{ marginBottom: 12 }}>Next through the door</Label>
              <div className="wf-col" style={{ gap: 0 }}>
                {[["11:50", "Imogen Hartley", "Desk 14 · Studio"], ["12:00", "Marcus Reed", "Spark Studio · podcast"], ["14:00", "Amara Vance + 5", "Future Room · guests"], ["15:30", "Walk-in viewing", "Concierge · prospect"]].map((r, i) => (
                  <div key={i} className="wf-row" style={{ gap: 12, alignItems: 'center', padding: '10px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}>
                    <span className="wf-mono" style={{ fontSize: 11, color: 'var(--wf-ink)', flex: '0 0 40px' }}>{r[0]}</span>
                    <div className="wf-col" style={{ gap: 2, flex: 1 }}><span style={{ fontSize: 12.5, fontWeight: 500 }}>{r[1]}</span><Meta style={{ fontSize: 9 }}>{r[2].toUpperCase()}</Meta></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

/* ---- ADMIN · BOOKABLE ITEMS · list ---- */
function ScreenAdminItems() {
  const rooms = [["Thought Lounge", "Room · lounge", "6–10", "All tiers · allowance", "Live"], ["Launch Pad", "Room · workshop", "10", "All tiers · allowance", "Live"], ["Future Room", "Room · boardroom", "12", "House incl · hire rate", "Live"], ["Spark Studio", "Room · podcast", "4 / 6", "Hire rate", "Live"]];
  const desks = [["Top Floor desks", "14 hot desks", "1 each", "Atelier+ · top floor", "Live"], ["2nd Floor desks", "8 quiet desks", "1 each", "House only", "Live"], ["Phone booths", "3 booths", "1", "Studio+", "Live"]];
  const tableRows = (rows) => rows.map((r, i) => (
    <div key={i} className="wf-row" style={{ padding: '14px 20px', borderBottom: '1px solid var(--wf-line)', alignItems: 'center' }}>
      <div className="wf-row" style={{ flex: 2, gap: 12, alignItems: 'center' }}><Ph h={36} w={48} caption="" /><div className="wf-col" style={{ gap: 3 }}><span style={{ fontSize: 13, fontWeight: 500 }}>{r[0]}</span><Meta style={{ fontSize: 9 }}>{r[1].toUpperCase()}</Meta></div></div>
      <div style={{ flex: 1, fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{r[2]}</div>
      <div style={{ flex: 1.6, fontSize: 12, color: 'var(--wf-ink-2)' }}>{r[3]}</div>
      <div style={{ flex: 1 }}><Tag variant="ok">{r[4]}</Tag></div>
      <div style={{ flex: '0 0 90px' }}><Btn sm>Edit</Btn></div>
    </div>
  ));
  return (
    <AdminShell active="items" actions={<Btn variant="pri" arrow={false} sm>+ Add item</Btn>}>
      <div className="wf-col" style={{ gap: 20 }}>
        <PageHead eyebrow="Operations / Bookable items" title="Desks & rooms." size={30}
          sub="Every bookable space — its capacity, the tiers that can reach it, availability windows and restrictions." />
        <div className="wf-row" style={{ gap: 10 }}><Btn sm arrow={false}>All types ▾</Btn><Btn sm arrow={false}>All floors ▾</Btn><Btn sm arrow={false}>Status: Live ▾</Btn></div>
        <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="wf-row" style={{ padding: '11px 20px', borderBottom: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)' }}>
            {["Item", "Capacity", "Access (tier)", "Status", ""].map((h, i) => <div key={i} className="wf-label" style={{ flex: i === 0 ? 2 : (i === 2 ? 1.6 : (i === 4 ? '0 0 90px' : 1)) }}>{h}</div>)}
          </div>
          <div style={{ padding: '8px 20px 4px' }}><Meta style={{ fontSize: 9 }}>ROOMS · 4</Meta></div>
          {tableRows(rooms)}
          <div style={{ padding: '8px 20px 4px' }}><Meta style={{ fontSize: 9 }}>DESKS & OTHER · 3</Meta></div>
          {tableRows(desks)}
        </div>
        <Note kind="Per item">Edit opens the availability windows, pricing tier, capacity and restrictions for that item — next frame.</Note>
      </div>
    </AdminShell>
  );
}

/* ---- ADMIN · BOOKABLE ITEM · add / edit ---- */
function ScreenAdminItemEdit() {
  return (
    <AdminShell active="items">
      <div className="wf-col" style={{ gap: 20 }}>
        <div className="wf-row" style={{ alignItems: 'center', gap: 10 }}><Meta>← BOOKABLE ITEMS</Meta></div>
        <PageHead eyebrow="Operations / Edit item" title="Future Room." size={30}
          right={<div className="wf-row" style={{ gap: 10 }}><Btn>Cancel</Btn><Btn variant="pri" arrow={false}>Save changes</Btn></div>} />
        <div className="wf-row" style={{ gap: 20, alignItems: 'flex-start' }}>
          <div className="wf-col" style={{ flex: 1, gap: 18 }}>
            <div className="wf-card" style={{ padding: 20 }}>
              <Label style={{ marginBottom: 16 }}>Basics</Label>
              <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <Field label="Name" value="Future Room" />
                <Field label="Type" value="Boardroom" />
                <Field label="Capacity" value="12 seated" />
                <Field label="Floor / zone" value="First floor · west" />
                <div className="wf-field" style={{ gridColumn: '1 / -1' }}><Label>Description</Label><div className="in" style={{ minHeight: 44 }}>Walnut, twelve seats, dedicated AV.</div></div>
              </div>
            </div>
            <div className="wf-card" style={{ padding: 20 }}>
              <Label style={{ marginBottom: 16 }}>Availability windows</Label>
              <div className="wf-col" style={{ gap: 10 }}>
                {[["Mon – Fri", "08:00 – 20:00"], ["Saturday", "09:00 – 18:00"], ["Sunday", "Closed"]].map(([d, t], i) =>
                  <div key={i} className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}>
                    <span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>{d}</span><div className="wf-row" style={{ gap: 8, alignItems: 'center' }}><span className="wf-mono" style={{ fontSize: 11 }}>{t}</span><Btn sm>Edit</Btn></div></div>)}
              </div>
              <Btn sm arrow={false} style={{ marginTop: 12 }}>+ Add exception date</Btn>
            </div>
          </div>
          <div className="wf-col" style={{ flex: '0 0 320px', gap: 16 }}>
            <div className="wf-card" style={{ padding: 20 }}>
              <Label style={{ marginBottom: 14 }}>Access & pricing by tier</Label>
              <div className="wf-col" style={{ gap: 0 }}>
                {[["Atelier", "Hire rate", false], ["Studio", "Hire rate", false], ["House", "1 × 4 hrs incl.", true], ["Collective", "Included", true]].map(([t, v, on], i) => (
                  <div key={i} className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}>
                    <div className="wf-row" style={{ gap: 8, alignItems: 'center' }}><span style={{ width: 15, height: 15, border: '1px solid ' + (on ? 'var(--wf-accent)' : 'var(--wf-line-2)'), background: on ? 'var(--wf-accent)' : 'transparent' }} /><span style={{ fontSize: 12.5 }}>{t}</span></div>
                    <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-2)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="wf-card" style={{ padding: 20 }}>
              <Label style={{ marginBottom: 12 }}>Restrictions</Label>
              <div className="wf-col" style={{ gap: 10 }}>
                {[["Min notice 1 hr", true], ["Max 4 hrs / booking", true], ["Guests allowed", true], ["Member-host required", false]].map(([l, on], i) =>
                  <div key={i} className="wf-row" style={{ gap: 9, alignItems: 'center' }}><span style={{ width: 15, height: 15, border: '1px solid ' + (on ? 'var(--wf-accent)' : 'var(--wf-line-2)'), background: on ? 'var(--wf-accent)' : 'transparent' }} /><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{l}</span></div>)}
              </div>
            </div>
            <Note kind="Add-ons">AV & catering attach here as bookable add-ons. Toggling a tier off hides the item for that tier in the member app and shows an upgrade prompt instead.</Note>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

Object.assign(window, { AdminShell, KPI, ScreenAdminOverview, ScreenAdminItems, ScreenAdminItemEdit });
