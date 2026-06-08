/* ============================================================================
   SCREENS · MOBILE — responsive proof for the on-the-go booking case
   Dashboard, desk browse (list), my bookings, login. ~372×760.
   ========================================================================== */

function MStat({ label, used, total, unit = "", warn }) {
  return <Allow label={label} used={used} total={total} unit={unit} warn={warn} />;
}

/* ---- M1 · Dashboard ---- */
function MobileDashboard() {
  return (
    <MobileShell active="home">
      <div className="wf-col" style={{ gap: 18 }}>
        <div className="wf-col" style={{ gap: 7 }}>
          <Eyebrow>Thu · 4 June</Eyebrow>
          <H size={26}>Good morning, <em style={{ fontStyle: 'italic', color: 'var(--wf-ink-2)' }}>Imogen.</em></H>
        </div>
        <div className="wf-row" style={{ gap: 10 }}><Btn block variant="pri" arrow>Book a desk</Btn><Btn block arrow>Room</Btn></div>
        <div className="wf-col" style={{ gap: 10 }}>
          <Label>Up next</Label>
          {[["Today · 09:00–18:00", "Hot desk · Top Floor", "ok"], ["Thu 5 Jun · 14:00", "Future Room", "ok"]].map((b, i) => (
            <div key={i} className="wf-card" style={{ padding: 13, display: 'flex', gap: 12, alignItems: 'center' }}>
              <div className="wf-rule" style={{ height: 34 }} />
              <div className="wf-col" style={{ gap: 4, flex: 1 }}><Meta style={{ color: 'var(--wf-ink)', fontSize: 10 }}>{b[0]}</Meta><Title size={15}>{b[1]}</Title></div>
              <Tag variant="ok" style={{ fontSize: 8 }}>OK</Tag>
            </div>
          ))}
        </div>
        <div className="wf-card" style={{ padding: 15 }}>
          <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}><Label>This month · Studio</Label><Tag variant="acc" style={{ fontSize: 8 }}>Studio</Tag></div>
          <div className="wf-col" style={{ gap: 14 }}>
            <MStat label="Desk days" used={3} total={5} />
            <MStat label="Room hours" used={6} total={8} unit="h" warn />
          </div>
        </div>
        <Note kind="Mobile">Quick-book is thumb-first: two actions above the fold, allowances one scroll down. Tab bar keeps Desks &amp; Rooms one tap away.</Note>
      </div>
    </MobileShell>
  );
}

/* ---- M2 · Desk browse (list) ---- */
function MobileDesks() {
  const rows = [["04", "Top Floor · window", "Available", "free"], ["07", "Top Floor · window", "Available", "free"], ["02", "Top Floor · centre", "Taken", "taken"], ["19", "2nd Floor · quiet", "Studio only", "lock"]];
  return (
    <MobileShell active="desks">
      <div className="wf-col" style={{ gap: 16 }}>
        <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <H size={24}>Find a desk.</H><Btn sm arrow={false}>Filters</Btn>
        </div>
        <DateStrip />
        <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Tag variant="acc" style={{ fontSize: 8 }}>Studio · Top Floor</Tag><Meta style={{ fontSize: 9 }}>3 OF 5 USED</Meta>
        </div>
        <div className="wf-col" style={{ gap: 10 }}>
          {rows.map((r, i) => {
            const locked = r[3] === 'lock', taken = r[3] === 'taken';
            return (
              <div key={i} className="wf-card" style={{ padding: 13, display: 'flex', alignItems: 'center', gap: 12, opacity: locked || taken ? .55 : 1, borderColor: i === 0 ? 'var(--wf-accent)' : 'var(--wf-line)' }}>
                <Ph h={40} w={48} caption="" />
                <div className="wf-col" style={{ flex: 1, gap: 4 }}><Title size={15}>Desk {r[0]}</Title><Meta style={{ fontSize: 9 }}>{r[1].toUpperCase()}</Meta></div>
                {locked ? <Btn sm arrow>Upgrade</Btn> : taken ? <Tag style={{ fontSize: 8 }}>Taken</Tag> : <Btn sm variant={i === 0 ? "pri" : undefined}>{i === 0 ? "✓" : "Pick"}</Btn>}
              </div>
            );
          })}
        </div>
        <Note kind="Tier lock">Locked desks stay visible with an Upgrade tap — never hidden, even on mobile.</Note>
      </div>
    </MobileShell>
  );
}

/* ---- M3 · My bookings ---- */
function MobileBookings() {
  return (
    <MobileShell active="bookings">
      <div className="wf-col" style={{ gap: 16 }}>
        <H size={24}>Your bookings.</H>
        <div className="wf-row" style={{ borderBottom: '1px solid var(--wf-line)' }}>
          {[["Upcoming", 1], ["Past"], ["Cancelled"]].map(([l, on], i) =>
            <div key={i} style={{ padding: '0 0 10px', marginRight: 20, position: 'relative' }}>
              <span className="wf-mono" style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: on ? 'var(--wf-ink)' : 'var(--wf-ink-3)' }}>{l}</span>
              {on && <span style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, background: 'var(--wf-accent)' }} />}</div>)}
        </div>
        <div className="wf-col" style={{ gap: 12 }}>
          {[["Today · 09:00–18:00", "Hot desk · Top Floor", "Confirmed", "ok"], ["Thu 5 Jun · 14:00–16:00", "Future Room", "Confirmed", "ok"], ["Tue 10 Jun · 10:00", "Launch Pad", "Pending", "pend"]].map((b, i) => (
            <div key={i} className="wf-card" style={{ padding: 14 }}>
              <div className="wf-row" style={{ gap: 11, alignItems: 'center' }}>
                <div className="wf-rule" style={{ height: 36, background: b[3] === 'pend' ? 'var(--wf-line-2)' : 'var(--wf-accent)' }} />
                <div className="wf-col" style={{ flex: 1, gap: 4 }}><Meta style={{ color: 'var(--wf-ink)', fontSize: 10 }}>{b[0]}</Meta><Title size={16}>{b[1]}</Title></div>
                <Tag variant={b[3] === 'pend' ? '' : 'ok'} style={{ fontSize: 8 }}>{b[2]}</Tag>
              </div>
              <div className="wf-row" style={{ gap: 8, marginTop: 12 }}><Btn sm block>View</Btn><Btn sm block>Amend</Btn><Btn sm block>Cancel</Btn></div>
            </div>
          ))}
        </div>
        <Note kind="Actions">Row actions become full-width buttons under each card — easy targets on the go.</Note>
      </div>
    </MobileShell>
  );
}

/* ---- M4 · Login ---- */
function MobileLogin() {
  return (
    <MobileShell noTabs noHeader>
      <div className="wf-col" style={{ gap: 0, height: '100%', justifyContent: 'space-between', paddingTop: 14, paddingBottom: 10 }}>
        <div className="wf-col" style={{ gap: 14 }}>
          <span className="wf-wordmark" style={{ fontSize: 17 }}>House of Champions</span>
          <Ph h={120} caption="members lounge / dusk" />
          <Disp size={30} style={{ marginTop: 4 }}>A house, not a workspace.</Disp>
        </div>
        <div className="wf-col" style={{ gap: 18 }}>
          <Field label="Email" value="imogen.hartley@email.com" />
          <Field label="Password" value="••••••••" focus />
          <Btn block variant="pri" arrow>Sign in</Btn>
          <div className="wf-row" style={{ justifyContent: 'space-between' }}>
            <span className="wf-mono" style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--wf-accent)' }}>Forgot password</span>
            <span className="wf-mono" style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--wf-ink-3)' }}>Apply →</span>
          </div>
        </div>
        <Note kind="Responsive">Split-screen login stacks: brand panel on top, form below. Same fields, same states as desktop.</Note>
      </div>
    </MobileShell>
  );
}

Object.assign(window, { MobileDashboard, MobileDesks, MobileBookings, MobileLogin });
