/* ============================================================================
   SCREENS · ADMIN (2/2)
   Calendar management, plans & permission config, member management
   (list + detail), content management (list + edit).
   ========================================================================== */

/* ---- ADMIN · CALENDAR MANAGEMENT ---- */
function ScreenAdminCalendar() {
  const days = [["MON", "1"], ["TUE", "2"], ["WED", "3"], ["THU", "4"], ["FRI", "5"], ["SAT", "6"], ["SUN", "7"]];
  const spaces = [
    ["Thought Lounge", [2, 3, 1, 2, 4, 1, 0]],
    ["Launch Pad", [1, 2, 3, 2, 2, 0, 0]],
    ["Future Room", [0, 1, 0, 2, 3, 1, -1]],
    ["Spark Studio", [1, 0, 2, 1, 1, 0, 0]],
    ["Top Floor desks", [9, 11, 12, 14, 13, 6, 0]],
    ["2nd Floor desks", [5, 6, 7, 8, 6, 0, -1]],
  ];
  return (
    <AdminShell active="calendar" actions={<Btn variant="pri" arrow={false} sm>Block out dates</Btn>}>
      <div className="wf-col" style={{ gap: 20 }}>
        <PageHead eyebrow="Operations / Calendar" title="The whole house, by the week." size={30}
          right={<div className="wf-row" style={{ gap: 10, alignItems: 'center' }}><Seg options={["Week", "Month"]} active="Week" /><Btn sm arrow={false}>◂ 1–7 Jun ▸</Btn></div>} />
        <div className="wf-row" style={{ gap: 18, alignItems: 'stretch' }}>
          <div className="wf-card" style={{ flex: 1, padding: 0, overflow: 'hidden' }}>
            <div className="wf-row" style={{ borderBottom: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)' }}>
              <div style={{ flex: '0 0 150px', padding: '12px 16px' }}><Label>Space</Label></div>
              {days.map(([d, n], i) => <div key={i} className="wf-col" style={{ flex: 1, alignItems: 'center', gap: 2, padding: '10px 0', borderLeft: '1px solid var(--wf-line)', background: i > 4 ? 'var(--wf-panel)' : 'transparent' }}><span className="wf-mono" style={{ fontSize: 8.5, color: 'var(--wf-ink-3)' }}>{d}</span><span className="wf-serif" style={{ fontSize: 16 }}>{n}</span></div>)}
            </div>
            {spaces.map(([name, counts], r) => (
              <div key={r} className="wf-row" style={{ borderBottom: r < spaces.length - 1 ? '1px solid var(--wf-line)' : 0, minHeight: 56 }}>
                <div className="wf-col" style={{ flex: '0 0 150px', padding: '10px 16px', justifyContent: 'center' }}><span style={{ fontSize: 12, fontWeight: 500 }}>{name}</span></div>
                {counts.map((c, i) => (
                  <div key={i} style={{ flex: 1, borderLeft: '1px solid var(--wf-line)', padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', background: c === -1 ? 'repeating-linear-gradient(45deg,var(--wf-fill) 0 5px,var(--wf-panel-2) 5px 10px)' : (i > 4 ? 'var(--wf-panel)' : 'transparent') }}>
                    {c === -1 ? <Meta style={{ fontSize: 8 }}>BLOCKED</Meta> : c === 0 ? <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-3)' }}>—</span> :
                      <div style={{ width: '78%', height: 22, background: 'rgba(168,130,60,' + Math.min(0.6, c / 14 + 0.12).toFixed(2) + ')', border: '1px solid var(--wf-line-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink)' }}>{c}</span></div>}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="wf-col" style={{ flex: '0 0 300px', gap: 16 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 14 }}>Block out</Label>
              <div className="wf-col" style={{ gap: 14 }}>
                <Field label="Dates" value="7 Jun (Sun)" focus />
                <Field label="Spaces" value="Future Room, 2nd Floor" />
                <Field label="Reason" value="Private hire" />
                <Btn block variant="pri" arrow={false}>Apply block</Btn>
              </div>
            </div>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 12 }}>Exceptions</Label>
              {[["Sun 7 Jun", "Future Room · private hire"], ["Mon 25 Aug", "Bank holiday · 08:00–18:00"], ["24 Dec – 2 Jan", "House closed"]].map((e, i) =>
                <div key={i} className="wf-col" style={{ gap: 3, padding: '9px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}><span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink)' }}>{e[0].toUpperCase()}</span><span style={{ fontSize: 11.5, color: 'var(--wf-ink-2)' }}>{e[1]}</span></div>)}
            </div>
            <Note kind="Utilisation">Cell shade = bookings that day. Blocked dates remove availability in the member app immediately and flag affected existing bookings for the Concierge.</Note>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

/* ---- ADMIN · PLANS & PERMISSIONS ---- */
function ScreenAdminPlans() {
  const tiers = ["Atelier", "Studio"];
  const groups = [
    ["Booking allowances", [["Meeting-room hrs / month", ["2", "Unlimited"]], ["Events / month", ["4", "Unlimited"]]]],
    ["Accessible spaces", [["Top Floor desks", ["✓", "✓"]], ["2nd Floor (quiet) + locker", ["—", "✓"]], ["Future Room (boardroom)", ["—", "8 hrs/qtr"]]]],
    ["Time windows", [["Booking window", ["7 days", "14 days"]], ["Out-of-hours access", ["—", "✓"]]]],
    ["Guests & sharing", [["Guests / month", ["1", "4"]], ["Shared seat", ["—", "✓"]]]],
  ];
  return (
    <AdminShell active="plans" actions={<Btn variant="pri" arrow={false} sm>+ Add a tier</Btn>}>
      <div className="wf-col" style={{ gap: 20 }}>
        <PageHead eyebrow="Operations / Plans & permissions" title="What each tier can do." size={30}
          sub="The master switches behind the member app. Edit a value and the apps update for every member on that tier." />
        <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="wf-row" style={{ borderBottom: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)', padding: '14px 20px', alignItems: 'flex-end' }}>
            <div style={{ flex: 2 }}><Label>Permission</Label></div>
            {tiers.map((t, i) => <div key={i} className="wf-col" style={{ flex: 1, gap: 3, alignItems: 'flex-start' }}><span className="wf-serif" style={{ fontSize: 17, fontStyle: 'italic' }}>{t}</span><Meta style={{ fontSize: 8.5 }}>{["£225", "£275"][i]}</Meta></div>)}
          </div>
          {groups.map(([g, rows], gi) => (
            <div key={gi}>
              <div style={{ padding: '10px 20px 4px', background: 'var(--wf-panel)' }}><Meta style={{ fontSize: 9 }}>{g.toUpperCase()}</Meta></div>
              {rows.map((row, ri) => (
                <div key={ri} className="wf-row" style={{ padding: '12px 20px', borderTop: '1px solid var(--wf-line)', alignItems: 'center' }}>
                  <div style={{ flex: 2, fontSize: 13, color: 'var(--wf-ink-2)' }}>{row[0]}</div>
                  {row[1].map((v, vi) => (
                    <div key={vi} style={{ flex: 1 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', minWidth: 54, padding: '6px 9px', border: '1px solid var(--wf-line)', background: 'var(--wf-panel)', fontFamily: v.length > 3 ? 'var(--wf-sans)' : 'var(--wf-mono)', fontSize: 12, color: v === '—' ? 'var(--wf-ink-3)' : 'var(--wf-ink)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="wf-row" style={{ gap: 14 }}>
          <Note kind="Live editing">Cells are inline-editable. Saving recalculates every affected member's allowances at the next monthly reset (or immediately for access changes).</Note>
          <Note kind="Extensible">“+ Add a tier” clones a column to seed a new tier (e.g. a future student plan) without touching the rest.</Note>
        </div>
      </div>
    </AdminShell>
  );
}

/* ---- ADMIN · MEMBER MANAGEMENT · list ---- */
function ScreenAdminMembers() {
  const rows = [
    ["Imogen Hartley", "Studio", "2 / 3 seats", "Active", "Jan 2026", "ok"],
    ["Marcus Reed", "Studio", "Seat of Hartley", "Active", "Feb 2026", "ok"],
    ["Amara Vance", "Studio", "Individual", "Active", "Nov 2025", "ok"],
    ["Reuben Okafor", "Studio", "Individual", "Suspended", "Dec 2025", "susp"],
    ["Priya Nair", "Studio", "Seat · pending", "Invited", "—", "pend"],
    ["Joss Lindqvist", "Atelier", "Individual", "Application", "—", "app"],
  ];
  return (
    <AdminShell active="members" actions={<Btn variant="pri" arrow={false} sm>+ Add member</Btn>}>
      <div className="wf-col" style={{ gap: 18 }}>
        <PageHead eyebrow="Operations / Members" title="Members." size={30}
          right={<div className="wf-row" style={{ gap: 8 }}><KPI label="Active" value="142" sub="OF 160 CAP" /><KPI label="Applications" value="6" sub="TO REVIEW" accent /></div>} />
        <div className="wf-row" style={{ gap: 10 }}><Btn sm arrow={false}>All tiers ▾</Btn><Btn sm arrow={false}>Status: All ▾</Btn><Btn sm arrow={false}>Joined ▾</Btn><div style={{ flex: 1 }} /><Meta style={{ alignSelf: 'center' }}>SHOWING 6 OF 142</Meta></div>
        <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="wf-row" style={{ padding: '11px 20px', borderBottom: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)' }}>
            {["Member", "Tier", "Seats", "Status", "Joined", ""].map((h, i) => <div key={i} className="wf-label" style={{ flex: i === 0 ? 2 : (i === 5 ? '0 0 110px' : 1) }}>{h}</div>)}
          </div>
          {rows.map((r, i) => {
            const st = { ok: ['ok', 'Active'], susp: ['', 'Suspended'], pend: ['', 'Invited'], app: ['acc', 'Application'] }[r[5]];
            return (
              <div key={i} className="wf-row" style={{ padding: '13px 20px', borderBottom: '1px solid var(--wf-line)', alignItems: 'center', opacity: r[5] === 'susp' ? .6 : 1, borderLeft: r[5] === 'app' ? '2px solid var(--wf-accent)' : '2px solid transparent' }}>
                <div className="wf-row" style={{ flex: 2, gap: 11, alignItems: 'center' }}><Avatar>{r[0].split(' ').map(w => w[0]).join('')}</Avatar><span style={{ fontSize: 13, fontWeight: 500 }}>{r[0]}</span></div>
                <div style={{ flex: 1 }}><Tag variant={r[1] === 'House' ? 'acc' : ''}>{r[1]}</Tag></div>
                <div style={{ flex: 1, fontSize: 12, color: 'var(--wf-ink-2)' }}>{r[2]}</div>
                <div style={{ flex: 1 }}><Tag variant={st[0]}>{st[1]}</Tag></div>
                <div style={{ flex: 1, fontSize: 12, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-mono)' }}>{r[4]}</div>
                <div style={{ flex: '0 0 110px' }}>{r[5] === 'app' ? <Btn sm arrow>Review</Btn> : <Btn sm>View</Btn>}</div>
              </div>
            );
          })}
        </div>
        <Note kind="Per row">Applications jump to the top with a brass rule and a Review action (approve / decline). Suspended members dim but stay listed.</Note>
      </div>
    </AdminShell>
  );
}

/* ---- ADMIN · MEMBER · detail ---- */
function ScreenAdminMemberDetail() {
  return (
    <AdminShell active="members">
      <div className="wf-col" style={{ gap: 18 }}>
        <div className="wf-row" style={{ alignItems: 'center', gap: 10 }}><Meta>← MEMBERS</Meta></div>
        <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="wf-row" style={{ gap: 16, alignItems: 'center' }}>
            <Avatar size={56} style={{ fontSize: 18 }}>IH</Avatar>
            <div className="wf-col" style={{ gap: 6 }}><H size={28}>Imogen Hartley</H><div className="wf-row" style={{ gap: 8 }}><Tag variant="acc">Studio</Tag><Tag variant="ok">Active</Tag><Meta>ACCOUNT ADMIN · JOINED JAN 2026</Meta></div></div>
          </div>
          <div className="wf-row" style={{ gap: 10 }}><Btn sm>Override permissions</Btn><Btn sm>Suspend</Btn><Btn sm variant="pri" arrow={false}>Message</Btn></div>
        </div>
        <div className="wf-row" style={{ gap: 18, alignItems: 'flex-start' }}>
          <div className="wf-col" style={{ flex: 1, gap: 16 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 14 }}>Team & seats · 2 of 3</Label>
              {[["Imogen Hartley", "Account Admin", "ok"], ["Marcus Reed", "Member", "ok"], ["", "Open seat", "empty"]].map((s, i) =>
                <div key={i} className="wf-row" style={{ alignItems: 'center', gap: 11, padding: '10px 0', borderTop: i ? '1px solid var(--wf-line)' : 0, opacity: s[2] === 'empty' ? .55 : 1 }}>
                  {s[2] === 'empty' ? <div style={{ width: 30, height: 30, borderRadius: '50%', border: '1px dashed var(--wf-line-2)' }} /> : <Avatar size={30}>{s[0].split(' ').map(w => w[0]).join('')}</Avatar>}
                  <span style={{ flex: 1, fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{s[0] || 'Empty seat'}</span><Meta style={{ fontSize: 9 }}>{s[1].toUpperCase()}</Meta></div>)}
            </div>
            <div className="wf-card" style={{ padding: 18 }}>
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}><Label>Booking history</Label><Meta style={{ fontSize: 9 }}>LAST 30 DAYS</Meta></div>
              {[["4 Jun", "Desk 14 · Top Floor", "Confirmed"], ["5 Jun", "Future Room · 2 hrs", "Confirmed"], ["27 May", "Spark Studio · podcast", "Completed"], ["23 May", "Desk · Top Floor", "Completed"]].map((b, i) =>
                <div key={i} className="wf-row" style={{ alignItems: 'center', gap: 12, padding: '9px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}>
                  <span className="wf-mono" style={{ fontSize: 10, flex: '0 0 48px', color: 'var(--wf-ink-2)' }}>{b[0].toUpperCase()}</span>
                  <span style={{ flex: 1, fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{b[1]}</span><Tag variant="ok" style={{ fontSize: 8 }}>{b[2]}</Tag></div>)}
            </div>
          </div>
          <div className="wf-col" style={{ flex: '0 0 320px', gap: 16 }}>
            <div className="wf-card" style={{ padding: 18, borderColor: 'var(--wf-accent)' }}>
              <Label style={{ marginBottom: 12 }}>Plan</Label>
              <div className="wf-serif" style={{ fontSize: 24, fontWeight: 600 }}>Studio · £250<span className="wf-meta"> / mo</span></div>
              <Meta style={{ marginTop: 6 }}>FOUNDING COHORT · SHARED · RENEWS 1 JUL</Meta>
              <HR style={{ margin: '14px 0' }} />
              <div className="wf-col" style={{ gap: 14 }}>
                <Allow label="Boardroom hours" used={6} total={8} unit=" hrs" warn />
              </div>
            </div>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 12 }}>Permission overrides</Label>
              <span style={{ fontSize: 12, color: 'var(--wf-ink-2)' }}>No overrides. This member follows the Studio tier exactly.</span>
              <Btn sm arrow={false} style={{ marginTop: 12 }}>+ Add an override</Btn>
            </div>
            <Note kind="Per-member">Overrides sit on top of the tier (e.g. grant Future Room for one member) without changing the whole plan. Approve / suspend live in the header.</Note>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

Object.assign(window, {
  ScreenAdminCalendar, ScreenAdminPlans, ScreenAdminMembers,
  ScreenAdminMemberDetail,
});
