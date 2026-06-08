/* ============================================================================
   SCREENS · MANAGE
   My bookings (list / amend / cancel confirm / cancelled), account area,
   plan management + change summary, team & seats (roster / invite / role),
   billing & invoices.
   ========================================================================== */

/* ---- 8 · My bookings · list ---- */
function ScreenBookings() {
  const up = [
    ["Today · 09:00–18:00", "Hot desk · Top Floor", "Desk 14", "Confirmed", "ok"],
    ["Thu 5 Jun · 14:00–16:00", "Future Room · boardroom", "AV · 12 seats", "Confirmed", "ok"],
    ["Tue 10 Jun · 10:00–11:00", "Launch Pad · workshop", "Awaiting room prep", "Pending", "pend"],
  ];
  const past = [["Tue 27 May", "Spark Studio · podcast", "2 hrs recorded"], ["Fri 23 May", "Hot desk · Top Floor", "Full day"]];
  return (
    <DesktopShell active="bookings">
      <div className="wf-col" style={{ gap: 20, height: '100%' }}>
        <PageHead eyebrow="Nº 004 / My bookings" title="Your bookings." size={30}
          right={<div className="wf-row" style={{ gap: 10 }}><Btn arrow>Book a desk</Btn><Btn variant="pri" arrow>Reserve a room</Btn></div>} />
        <div className="wf-row" style={{ gap: 0, borderBottom: '1px solid var(--wf-line)' }}>
          {[["Upcoming", 1], ["Past"], ["Cancelled"]].map(([l, on], i) =>
            <div key={i} style={{ padding: '0 0 12px', marginRight: 28, position: 'relative', cursor: 'default' }}>
              <span className="wf-mono" style={{ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: on ? 'var(--wf-ink)' : 'var(--wf-ink-3)' }}>{l}</span>
              {on && <span style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, background: 'var(--wf-accent)' }} />}
            </div>)}
        </div>
        <div className="wf-col" style={{ gap: 12 }}>
          {up.map((b, i) => (
            <div key={i} className="wf-card" style={{ padding: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
              <div className="wf-rule" style={{ height: 46, background: b[4] === 'pend' ? 'var(--wf-line-2)' : 'var(--wf-accent)' }} />
              <Ph h={50} w={66} caption="" />
              <div className="wf-col" style={{ gap: 5, flex: 1 }}>
                <Meta style={{ color: 'var(--wf-ink)' }}>{b[0]}</Meta>
                <Title size={18}>{b[1]}</Title>
                <span style={{ fontSize: 12, color: 'var(--wf-ink-3)' }}>{b[2]}</span>
              </div>
              {b[4] === 'pend' ? <Tag>Pending</Tag> : <Tag variant="ok">Confirmed</Tag>}
              <div className="wf-row" style={{ gap: 8 }}><Btn sm>View</Btn><Btn sm>Amend</Btn><Btn sm>Cancel</Btn></div>
            </div>
          ))}
        </div>
        <div className="wf-col" style={{ gap: 12 }}>
          <Label>Earlier this month · past</Label>
          {past.map((b, i) => (
            <div key={i} className="wf-row" style={{ padding: '12px 18px', border: '1px solid var(--wf-line)', alignItems: 'center', gap: 16, opacity: .7 }}>
              <Meta style={{ flex: '0 0 110px' }}>{b[0].toUpperCase()}</Meta>
              <span style={{ flex: 1, fontSize: 13, color: 'var(--wf-ink-2)' }}>{b[1]}</span>
              <span style={{ fontSize: 12, color: 'var(--wf-ink-3)' }}>{b[2]}</span>
              <Btn sm>Re-book</Btn>
            </div>
          ))}
        </div>
        <Note kind="Actions">View, amend and cancel sit on every upcoming row. Past bookings collapse to a one-tap re-book. Cancelled live behind their own tab.</Note>
      </div>
    </DesktopShell>
  );
}

/* ---- 8b · Amend ---- */
function ScreenAmend() {
  return (
    <DesktopShell active="bookings">
      <div style={{ maxWidth: 720, margin: '0 auto', width: '100%' }}>
        <Meta style={{ display: 'block', marginBottom: 16 }}>← BACK TO MY BOOKINGS</Meta>
        <Eyebrow>Amend booking</Eyebrow>
        <H size={30} style={{ margin: '12px 0 22px' }}>Change your Future Room reservation.</H>
        <div className="wf-row" style={{ gap: 22, alignItems: 'flex-start' }}>
          <div className="wf-col" style={{ flex: 1, gap: 20 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 14 }}>Current</Label>
              <Title size={19}>Future Room · Thu 5 Jun, 14:00–16:00</Title>
              <Meta style={{ marginTop: 6 }}>REF HOC-R-0884 · AV INCLUDED</Meta>
            </div>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 14 }}>New details</Label>
              <div className="wf-col" style={{ gap: 18 }}>
                <Field label="Date" value="Fri 6 June" focus />
                <div className="wf-row" style={{ gap: 18 }}><Field label="Start" value="10:00" style={{ flex: 1 }} /><div className="wf-col" style={{ flex: 1, gap: 8 }}><Label>Duration</Label><Seg options={["1h", "2h", "4h"]} active="2h" /></div></div>
                <div className="wf-col" style={{ gap: 8 }}><Label>Add-ons</Label><div className="wf-row" style={{ gap: 8 }}><Tag variant="acc">AV</Tag><Tag>+ Catering</Tag></div></div>
              </div>
            </div>
          </div>
          <div className="wf-col" style={{ flex: '0 0 280px', gap: 14 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 12 }}>What changes</Label>
              {[["Date", "Thu 5 → Fri 6 Jun"], ["Time", "14:00 → 10:00"], ["Hours used", "No change · 2 hrs"], ["Cost", "No change"]].map(([k, v], i) =>
                <div key={i} className="wf-row" style={{ justifyContent: 'space-between', padding: '9px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}><Label>{k}</Label><span style={{ fontSize: 12, color: 'var(--wf-ink-2)' }}>{v}</span></div>)}
              <Btn block variant="pri" arrow style={{ marginTop: 16 }}>Save changes</Btn>
              <Btn block style={{ marginTop: 10 }}>Discard</Btn>
            </div>
            <Note kind="Re-validation">Amending re-checks availability and tier rules at the new time. A saved change confirms inline and re-sends the calendar invite.</Note>
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ---- 8c · Cancel confirm (modal) ---- */
function ScreenCancel() {
  return (
    <div className="wf" style={{ position: 'relative' }}>
      <div style={{ filter: 'blur(1.5px)', opacity: .5, pointerEvents: 'none', height: '100%' }}>
        <ScreenBookings />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,28,24,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="wf-card" style={{ width: 460, padding: 28, background: 'var(--wf-panel)', boxShadow: '0 24px 80px rgba(0,0,0,.3)' }}>
          <Eyebrow>Cancel booking</Eyebrow>
          <H size={26} style={{ margin: '12px 0 12px' }}>Cancel this reservation?</H>
          <Lead style={{ marginBottom: 18 }}>Future Room · Thursday 5 June, 14:00–16:00. This frees the room for other members.</Lead>
          <div className="wf-card flat" style={{ border: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)', padding: 14, marginBottom: 20 }}>
            <div className="wf-row" style={{ justifyContent: 'space-between' }}><Label>Allowance returned</Label><span className="wf-meta" style={{ color: 'var(--wf-ok)' }}>+2 hrs to your month</span></div>
            <HR style={{ margin: '12px 0' }} />
            <span style={{ fontSize: 12, color: 'var(--wf-ink-2)' }}>Cancellations within 24 hours of the start time aren't refunded to your allowance.</span>
          </div>
          <div className="wf-row" style={{ gap: 12 }}><Btn block>Keep booking</Btn><Btn block variant="pri">Cancel booking</Btn></div>
          <Note kind="Confirmation" style={{ marginTop: 16, maxWidth: '100%' }}>Destructive action gated behind a dialog. The allowance impact is shown before the member commits.</Note>
        </div>
      </div>
    </div>
  );
}

/* ---- 8d · Cancelled success ---- */
function ScreenCancelled() {
  return (
    <DesktopShell active="bookings">
      <div style={{ maxWidth: 560, margin: '0 auto', width: '100%', paddingTop: 20, textAlign: 'center' }}>
        <div className="wf-col" style={{ alignItems: 'center', gap: 14 }}>
          <div style={{ width: 50, height: 50, borderRadius: '50%', border: '1.5px solid var(--wf-ink-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--wf-ink-3)', fontSize: 20 }}>↺</div>
          <Eyebrow>Cancelled</Eyebrow>
          <H size={30}>That's cancelled.</H>
          <Lead style={{ maxWidth: 400 }}>Your Future Room reservation for Thursday 5 June has been released, and 2 hours are back in your monthly allowance.</Lead>
        </div>
        <div className="wf-card" style={{ padding: 18, marginTop: 22, textAlign: 'left' }}>
          <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Allow label="Meeting-room hours" used={4} total={8} unit=" hrs" note="2 hrs returned" style={{ flex: 1 }} />
          </div>
        </div>
        <div className="wf-row" style={{ gap: 12, marginTop: 18, justifyContent: 'center' }}><Btn arrow>Re-book this room</Btn><Btn variant="pri" arrow>Back to My Bookings</Btn></div>
        <Note kind="Email" style={{ margin: '18px auto 0' }}>A short cancellation note is emailed; the booking moves to the Cancelled tab for the record.</Note>
      </div>
    </DesktopShell>
  );
}

/* ---- 9 · Account area ---- */
function ScreenAccount() {
  return (
    <DesktopShell active="account">
      <div className="wf-col" style={{ gap: 22, height: '100%' }}>
        <PageHead eyebrow="Nº 005 / Account" title="Your account." size={30} />
        <div className="wf-row" style={{ gap: 22, flex: 1, alignItems: 'flex-start' }}>
          {/* left subnav */}
          <div className="wf-col" style={{ flex: '0 0 200px', gap: 4 }}>
            {[["Profile", 1], ["Communication"], ["Plan & membership"], ["Team & seats"], ["Billing & invoices"]].map(([l, on], i) =>
              <div key={i} className="wf-row" style={{ alignItems: 'center', gap: 10, padding: '10px 12px', borderLeft: '2px solid ' + (on ? 'var(--wf-accent)' : 'transparent'), background: on ? 'var(--wf-panel-2)' : 'transparent' }}>
                <span className="wf-mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: on ? 'var(--wf-ink)' : 'var(--wf-ink-3)' }}>{l}</span></div>)}
          </div>
          {/* profile */}
          <div className="wf-col" style={{ flex: 1, gap: 18 }}>
            <div className="wf-card" style={{ padding: 22 }}>
              <Label style={{ marginBottom: 16 }}>Profile</Label>
              <div className="wf-row" style={{ gap: 20, alignItems: 'flex-start' }}>
                <div className="wf-col" style={{ alignItems: 'center', gap: 10 }}><Avatar size={84} style={{ fontSize: 22 }}>IH</Avatar><Btn sm>Change</Btn></div>
                <div className="wf-grid" style={{ flex: 1, gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <Field label="First name" value="Imogen" /><Field label="Surname" value="Hartley" />
                  <Field label="Email" value="imogen.hartley@email.com" /><Field label="Phone" value="+44 7700 900 000" />
                  <Field label="What you're building" value="Hartley & Co · brand studio" style={{ gridColumn: '1 / -1' }} />
                </div>
              </div>
            </div>
            <div className="wf-card" style={{ padding: 22 }}>
              <Label style={{ marginBottom: 16 }}>Communication preferences</Label>
              <div className="wf-col" style={{ gap: 14 }}>
                {[["The Dispatch — weekly journal & events", true], ["Booking reminders & confirmations", true], ["New room & space announcements", false], ["Partner offers", false]].map(([l, on], i) =>
                  <div key={i} className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: i < 3 ? '1px solid var(--wf-line)' : 0 }}>
                    <span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>{l}</span>
                    <div style={{ width: 38, height: 20, borderRadius: 999, background: on ? 'var(--wf-accent)' : 'var(--wf-fill)', border: '1px solid ' + (on ? 'var(--wf-accent)' : 'var(--wf-line-2)'), position: 'relative' }}><span style={{ position: 'absolute', top: 1, left: on ? 19 : 1, width: 16, height: 16, borderRadius: '50%', background: '#fff' }} /></div>
                  </div>)}
              </div>
            </div>
          </div>
          {/* plan snapshot */}
          <div className="wf-col" style={{ flex: '0 0 260px', gap: 14 }}>
            <div className="wf-card" style={{ padding: 18, borderColor: 'var(--wf-accent)' }}>
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}><Label>Membership</Label><Tag variant="acc">Studio</Tag></div>
              <div className="wf-serif" style={{ fontSize: 26, fontWeight: 600 }}>£250<span className="wf-meta"> / mo</span></div>
              <Meta style={{ marginTop: 6 }}>FOUNDING COHORT · MONTHLY ROLLING</Meta>
              <HR style={{ margin: '14px 0' }} />
              <Meta style={{ marginBottom: 4 }}>NEXT RENEWAL</Meta><span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>1 July MMXXVI</span>
              <Btn block arrow style={{ marginTop: 16 }}>Manage plan</Btn>
            </div>
            <Note kind="Extensible">Profile is per-seat. The role model (admin / member, later read-only & guest seats) extends without re-laying this out.</Note>
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ---- 10 · Plan management ---- */
function ScreenPlan() {
  const boltons = [
    ["Boardroom — The Future Room", "Extra hours & full-day sessions beyond your quarterly allowance", "BOLT-ON"],
    ["Wellness", "Treatments, classes & recovery sessions at the House", "BOLT-ON"],
    ["Honesty Bar", "Pre-loaded food & drink credit for the floor", "BOLT-ON"],
    ["Future benefits & upgrades", "New member perks and add-ons as they launch", "COMING SOON"],
  ];
  return (
    <DesktopShell active="account">
      <div className="wf-col" style={{ gap: 22, height: '100%' }}>
        <PageHead eyebrow="Nº 005 / Plan & upgrades" title="Get more from the House." size={30}
          sub="Your Studio membership, plus bolt-on packages you can add whenever you need them — purchased like add-ons on a phone contract." />
        <div className="wf-card" style={{ padding: 22, borderColor: 'var(--wf-accent)', display: 'flex', alignItems: 'center', gap: 24 }}>
          <div className="wf-col" style={{ gap: 6 }}><Label>Current membership</Label><Title size={26}>Studio</Title><Meta>FOUNDING COHORT · MONTHLY ROLLING</Meta></div>
          <HR style={{ width: 1, height: 60, background: 'var(--wf-line)' }} />
          <div className="wf-col" style={{ gap: 4 }}><Label>Monthly</Label><div className="wf-serif" style={{ fontSize: 24, fontWeight: 600 }}>£250</div></div>
          <div className="wf-col" style={{ gap: 4 }}><Label>Boardroom</Label><span style={{ fontSize: 14, color: 'var(--wf-ink-2)' }}>8 hrs / quarter</span></div>
          <div className="wf-col" style={{ gap: 4 }}><Label>Renews</Label><span style={{ fontSize: 14, color: 'var(--wf-ink-2)' }}>1 Jul</span></div>
          <div style={{ flex: 1 }} />
          <Btn>Manage billing</Btn>
        </div>
        <Label>Bolt-on packages</Label>
        <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {boltons.map(([name, desc, tag], i) => (
            <div key={i} className="wf-card" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div className="wf-col" style={{ gap: 6 }}><Title size={19}>{name}</Title><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{desc}</span></div>
                <Tag variant={tag === 'BOLT-ON' ? 'acc' : ''}>{tag}</Tag>
              </div>
              <div className="wf-row" style={{ gap: 10, alignItems: 'center' }}>
                <div className="wf-bar" style={{ height: 26, width: 60 }} />
                <Lines n={1} w={['70%']} style={{ flex: 1 }} />
              </div>
              <Btn block dis arrow>Explore packages</Btn>
            </div>
          ))}
        </div>
        <Note kind="Pending sign-off">Package contents &amp; pricing are with Fi for approval — placeholders shown until the signed-off document lands. Atelier members see an upgrade-to-Studio prompt above this same bolt-on shelf.</Note>
      </div>
    </DesktopShell>
  );
}

/* ---- 10b · Plan & upgrades · Atelier view ---- */
function ScreenPlanChange() {
  const addons = [
    ["Meeting-room bolt-ons", "Add meeting-room hours to your month"],
    ["Boardroom day pass", "A one-off session in the Future Room"],
    ["Wellness & Honesty Bar", "The same bolt-ons, pay as you go"],
  ];
  return (
    <DesktopShell active="account">
      <div className="wf-col" style={{ gap: 22, height: '100%' }}>
        <PageHead eyebrow="Nº 005 / Plan & upgrades" title="Room to grow." size={30}
          sub="The Atelier member's view — led by the move to Studio, with bolt-ons to cover the gaps until then." />
        <div className="wf-card" style={{ padding: 24, borderColor: 'var(--wf-accent)', borderWidth: 2, background: 'var(--wf-panel-2)', display: 'flex', gap: 24, alignItems: 'center' }}>
          <div className="wf-col" style={{ flex: 1, gap: 10 }}>
            <Tag variant="acc" style={{ alignSelf: 'flex-start' }}>Recommended</Tag>
            <Title size={24}>Upgrade to Studio</Title>
            <span style={{ fontSize: 13, color: 'var(--wf-ink-2)', maxWidth: 470 }}>Unlimited desks, phone booths &amp; meeting rooms, 8 boardroom hours each quarter, priority events, a 2nd-floor locker and concierge support.</span>
            <div className="wf-row" style={{ gap: 20, marginTop: 6 }}>
              {[["Now", "Atelier · £225"], ["Studio", "£275 / mo"], ["Meeting rooms", "2 hrs → Unlimited"]].map(([k, v], i) => (
                <div key={i} className="wf-col" style={{ gap: 3 }}><Label>{k}</Label><span style={{ fontSize: 13, color: 'var(--wf-ink)' }}>{v}</span></div>
              ))}
            </div>
          </div>
          <Btn variant="pri" arrow>Upgrade to Studio</Btn>
        </div>
        <Label>Or add what you need — bolt-ons</Label>
        <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {addons.map(([name, desc], i) => (
            <div key={i} className="wf-card" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="wf-col" style={{ gap: 6 }}><Title size={18}>{name}</Title><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{desc}</span></div>
              <div className="wf-row" style={{ gap: 10, alignItems: 'center' }}><div className="wf-bar" style={{ height: 24, width: 52 }} /><Lines n={1} w={['60%']} style={{ flex: 1 }} /></div>
              <Btn block dis arrow={false}>Buy bolt-on</Btn>
            </div>
          ))}
        </div>
        <Note kind="Pending sign-off">Bolt-on structure &amp; pricing are with Fi for approval — placeholders until sign-off. Studio members see the same bolt-on shelf without the upgrade prompt.</Note>
      </div>
    </DesktopShell>
  );
}

/* ---- 11 · Team & seats (Account Admin) ---- */
function ScreenTeam() {
  const seats = [
    ["Imogen Hartley", "imogen.hartley@email.com", "Account Admin", "Active", "ok"],
    ["Marcus Reed", "marcus@hartleyco.com", "Member", "Active", "ok"],
    ["Priya Nair", "priya@hartleyco.com", "Member", "Invited · pending", "pend"],
    ["", "Empty seat", "—", "Available", "empty"],
  ];
  return (
    <DesktopShell active="team">
      <div className="wf-col" style={{ gap: 20, height: '100%' }}>
        <PageHead eyebrow="Nº 006 / Team & seats · Account Admin" title="Your team." size={30}
          right={<Btn variant="pri" arrow>Invite a seat</Btn>} />
        <div className="wf-row" style={{ gap: 22, flex: 1, alignItems: 'flex-start' }}>
          <div className="wf-col" style={{ flex: 1, gap: 12 }}>
            <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="wf-row" style={{ padding: '12px 18px', borderBottom: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)' }}>
                {["Member", "Role", "Status", ""].map((h, i) => <div key={i} className="wf-label" style={{ flex: i === 0 ? 2 : (i === 3 ? '0 0 120px' : 1) }}>{h}</div>)}
              </div>
              {seats.map((s, i) => {
                const empty = s[4] === 'empty';
                return (
                  <div key={i} className="wf-row" style={{ padding: '14px 18px', borderBottom: '1px solid var(--wf-line)', alignItems: 'center', opacity: empty ? .6 : 1 }}>
                    <div className="wf-row" style={{ flex: 2, alignItems: 'center', gap: 12 }}>
                      {empty ? <div style={{ width: 34, height: 34, border: '1px dashed var(--wf-line-2)', borderRadius: '50%' }} /> : <Avatar>{s[0].split(' ').map(w => w[0]).join('')}</Avatar>}
                      <div className="wf-col" style={{ gap: 3 }}>{s[0] && <span style={{ fontSize: 13.5, fontWeight: 500 }}>{s[0]}</span>}<Meta>{s[1].toUpperCase()}</Meta></div>
                    </div>
                    <div style={{ flex: 1 }}>{s[2] === 'Account Admin' ? <Tag variant="acc">{s[2]}</Tag> : <span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{s[2]}</span>}</div>
                    <div style={{ flex: 1 }}>{s[4] === 'pend' ? <Tag>Pending</Tag> : empty ? <Meta>OPEN</Meta> : <Tag variant="ok">Active</Tag>}</div>
                    <div style={{ flex: '0 0 120px' }}>{empty ? <Btn sm arrow>Invite</Btn> : i === 0 ? <Meta>YOU</Meta> : <div className="wf-row" style={{ gap: 6 }}><Btn sm>Role</Btn><Btn sm>Remove</Btn></div>}</div>
                  </div>
                );
              })}
            </div>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 12 }}>Team bookings · oversight</Label>
              <div className="wf-col" style={{ gap: 10 }}>
                {[["Marcus Reed", "Hot desk · today", "Confirmed"], ["Priya Nair", "Launch Pad · Tue 10 Jun", "Pending"]].map((b, i) =>
                  <div key={i} className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}>
                    <span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}><b>{b[0]}</b> · {b[1]}</span><Tag variant={b[2] === 'Pending' ? '' : 'ok'}>{b[2]}</Tag></div>)}
              </div>
            </div>
          </div>
          <div className="wf-col" style={{ flex: '0 0 270px', gap: 14 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 14 }}>Shared billing</Label>
              <div className="wf-serif" style={{ fontSize: 26, fontWeight: 600 }}>£500<span className="wf-meta"> / mo</span></div>
              <Meta style={{ marginTop: 6 }}>2 × STUDIO SEATS · 1 OPEN</Meta>
              <HR style={{ margin: '14px 0' }} />
              {[["Seats in use", "2 of 3"], ["Next invoice", "1 Jul · £500"], ["Billing contact", "You"]].map(([k, v], i) =>
                <div key={i} className="wf-row" style={{ justifyContent: 'space-between', padding: '7px 0' }}><Label>{k}</Label><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{v}</span></div>)}
              <Btn block arrow style={{ marginTop: 12 }}>View invoices</Btn>
            </div>
            <Note kind="Roles">Admin can invite, remove and set roles. Invited seats book for themselves within the plan's permissions. Read-only &amp; guest seats slot into this same roster later.</Note>
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ---- 11b · Invite a seat ---- */
function ScreenInvite() {
  return (
    <div className="wf" style={{ position: 'relative' }}>
      <div style={{ filter: 'blur(1.5px)', opacity: .5, height: '100%' }}><ScreenTeam /></div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,28,24,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="wf-card" style={{ width: 480, padding: 28, background: 'var(--wf-panel)', boxShadow: '0 24px 80px rgba(0,0,0,.3)' }}>
          <Eyebrow>Invite a seat</Eyebrow>
          <H size={26} style={{ margin: '12px 0 8px' }}>Add someone to your plan.</H>
          <Lead style={{ marginBottom: 20 }}>They'll get an email invitation and set up their own profile. They book on their own behalf, within your plan's permissions.</Lead>
          <div className="wf-col" style={{ gap: 18 }}>
            <Field label="Full name" value="Priya Nair" />
            <Field label="Email address" value="priya@hartleyco.com" focus />
            <div className="wf-col" style={{ gap: 8 }}><Label>Role</Label><Seg options={["Member", "Account Admin"]} active="Member" /></div>
            <div className="wf-card flat" style={{ border: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)', padding: 12, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>This fills your <b>1 open seat</b>.</span><Meta>NO EXTRA CHARGE</Meta></div>
          </div>
          <div className="wf-row" style={{ gap: 12, marginTop: 20 }}><Btn block>Cancel</Btn><Btn block variant="pri" arrow>Send invitation</Btn></div>
          <Note kind="States" style={{ marginTop: 16, maxWidth: '100%' }}>Sent → seat shows “Invited · pending” on the roster. If seats are full, this dialog prompts to add a seat (billing change) instead.</Note>
        </div>
      </div>
    </div>
  );
}

/* ---- 12 · Billing & invoices ---- */
function ScreenBilling() {
  const inv = [["INV-2026-0612", "1 Jun MMXXVI", "£500.00", "Paid"], ["INV-2026-0512", "1 May MMXXVI", "£500.00", "Paid"], ["INV-2026-0412", "1 Apr MMXXVI", "£250.00", "Paid"], ["INV-2026-0312", "1 Mar MMXXVI", "£250.00", "Paid"]];
  return (
    <DesktopShell active="account">
      <div className="wf-col" style={{ gap: 22, height: '100%' }}>
        <PageHead eyebrow="Nº 005 / Billing & invoices" title="Billing." size={30}
          sub="Invoices and renewals are surfaced from our invoicing partner. Payments are handled there." />
        <div className="wf-row" style={{ gap: 22, alignItems: 'flex-start' }}>
          <div className="wf-card" style={{ flex: '0 0 280px', padding: 20 }}>
            <Label style={{ marginBottom: 12 }}>Next renewal</Label>
            <div className="wf-serif" style={{ fontSize: 30, fontWeight: 600 }}>£500.00</div>
            <Meta style={{ marginTop: 6 }}>DUE 1 JULY MMXXVI</Meta>
            <HR style={{ margin: '16px 0' }} />
            {[["Plan", "2 × Studio seats"], ["Method", "Direct debit · ••• 4421"], ["Billing contact", "imogen.hartley@…"]].map(([k, v], i) =>
              <div key={i} className="wf-col" style={{ gap: 3, marginBottom: 12 }}><Label>{k}</Label><span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>{v}</span></div>)}
            <Btn block arrow>Manage in billing portal</Btn>
            <Note kind="External" style={{ marginTop: 14, maxWidth: '100%' }}>Payment method &amp; receipts live in the partner portal; the app deep-links out.</Note>
          </div>
          <div className="wf-card" style={{ flex: 1, padding: 0, overflow: 'hidden' }}>
            <div className="wf-row" style={{ padding: '12px 20px', borderBottom: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)' }}>
              {["Invoice", "Date", "Amount", "Status", ""].map((h, i) => <div key={i} className="wf-label" style={{ flex: i === 4 ? '0 0 90px' : 1 }}>{h}</div>)}
            </div>
            {inv.map((r, i) => (
              <div key={i} className="wf-row" style={{ padding: '15px 20px', borderBottom: '1px solid var(--wf-line)', alignItems: 'center' }}>
                <span className="wf-mono" style={{ flex: 1, fontSize: 11.5, color: 'var(--wf-ink)' }}>{r[0]}</span>
                <span style={{ flex: 1, fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{r[1]}</span>
                <span style={{ flex: 1, fontSize: 13, color: 'var(--wf-ink)' }}>{r[2]}</span>
                <div style={{ flex: 1 }}><Tag variant="ok">{r[3]}</Tag></div>
                <div style={{ flex: '0 0 90px' }}><Btn sm arrow>PDF</Btn></div>
              </div>
            ))}
          </div>
        </div>
        <Note kind="Future phase">One-off charges (room top-ups, day passes, add-ons via CityPay) will appear as a second list here — reserved in the IA, not built now.</Note>
      </div>
    </DesktopShell>
  );
}

Object.assign(window, {
  ScreenBookings, ScreenAmend, ScreenCancel, ScreenCancelled,
  ScreenAccount, ScreenPlan, ScreenPlanChange,
  ScreenTeam, ScreenInvite, ScreenBilling,
});
