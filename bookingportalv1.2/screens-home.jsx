/* ============================================================================
   SCREENS · HOME + BOOKING
   Member dashboard (default + empty), desk booking (floor-plan / list toggle,
   select & confirm, confirmation), meeting room reservation + confirmation.
   ========================================================================== */

/* date strip shared by booking flows */
function DateStrip({ sel = 2 }) {
  const days = [["MON", "2"], ["TUE", "3"], ["WED", "4"], ["THU", "5"], ["FRI", "6"], ["SAT", "7"], ["SUN", "8"]];
  return (
    <div className="wf-row" style={{ gap: 8, alignItems: 'center' }}>
      <Btn sm arrow={false}>←</Btn>
      <div className="wf-row" style={{ gap: 6 }}>
        {days.map(([d, n], i) => (
          <div key={i} className="wf-col" style={{ alignItems: 'center', gap: 4, padding: '8px 13px', border: '1px solid ' + (i === sel ? 'var(--wf-accent)' : 'var(--wf-line)'), background: i === sel ? 'var(--wf-accent)' : (i > 4 ? 'var(--wf-panel-2)' : 'transparent'), opacity: i > 4 ? .55 : 1 }}>
            <span className="wf-mono" style={{ fontSize: 8.5, letterSpacing: '.1em', color: i === sel ? '#fff' : 'var(--wf-ink-3)' }}>{d}</span>
            <span className="wf-serif" style={{ fontSize: 18, color: i === sel ? '#fff' : 'var(--wf-ink)' }}>{n}</span>
          </div>
        ))}
      </div>
      <Meta style={{ marginLeft: 6 }}>JUNE MMXXVI</Meta>
    </div>
  );
}

/* ---- 4 · Dashboard (default) ---- */
function ScreenDashboard() {
  return (
    <DesktopShell active="dashboard">
      <div className="wf-col" style={{ gap: 22, height: '100%' }}>
        <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="wf-col" style={{ gap: 8 }}>
            <Eyebrow>Thursday · 4 June</Eyebrow>
            <H size={36}>Good morning, <em style={{ fontStyle: 'italic', color: 'var(--wf-ink-2)' }}>Imogen.</em></H>
          </div>
          <div className="wf-row" style={{ gap: 10 }}><Btn arrow>Book a desk</Btn><Btn variant="pri" arrow>Reserve a room</Btn></div>
        </div>

        <div className="wf-row" style={{ gap: 22, flex: 1, alignItems: 'stretch' }}>
          {/* main */}
          <div className="wf-col" style={{ flex: 1, gap: 18 }}>
            <div className="wf-col" style={{ gap: 12 }}>
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Label>Upcoming</Label><span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-accent)', letterSpacing: '.1em', textTransform: 'uppercase' }}>View all →</span>
              </div>
              {[["Today · 09:00–18:00", "Hot desk · Top Floor", "Desk 14", "ok"], ["Thu 5 Jun · 14:00–18:00", "Future Room · boardroom", "12 seats · AV", "ok"], ["Tue 10 Jun · 10:00–11:00", "Launch Pad · workshop", "Pending confirmation", "pend"]].map((b, i) => (
                <div key={i} className="wf-card" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div className="wf-rule" style={{ height: 40, background: b[3] === 'pend' ? 'var(--wf-line-2)' : 'var(--wf-accent)' }} />
                  <div className="wf-col" style={{ gap: 5, flex: 1 }}>
                    <Meta style={{ color: 'var(--wf-ink)' }}>{b[0]}</Meta>
                    <div className="wf-row" style={{ gap: 10, alignItems: 'baseline' }}><Title size={18}>{b[1]}</Title><span style={{ fontSize: 12, color: 'var(--wf-ink-3)' }}>{b[2]}</span></div>
                  </div>
                  {b[3] === 'pend' ? <Tag>Pending</Tag> : <Tag variant="ok">Confirmed</Tag>}
                  <Btn sm>Manage</Btn>
                </div>
              ))}
            </div>

            <div className="wf-col" style={{ gap: 12 }}>
              <Label>Quick book</Label>
              <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {[["Hot desk", "Central Bank · today"], ["Meeting room", "By the hour"], ["Spark Studio", "Podcast · record"]].map(([t, s], i) => (
                  <div key={i} className="wf-card" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <Ph h={56} caption="" /><Title size={16}>{t}</Title><Meta>{s.toUpperCase()}</Meta>
                  </div>
                ))}
              </div>
            </div>

            <div className="wf-col" style={{ gap: 12 }}>
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Label>Meeting-room bolt-ons</Label>
                <Meta>ADD HOURS · ONE-OFF PURCHASE</Meta>
              </div>
              <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="wf-card" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div className="wf-bar" style={{ height: 14, width: 78 }} />
                      <div className="wf-bar" style={{ height: 22, width: 40 }} />
                    </div>
                    <Lines n={2} w={['100%', '70%']} />
                    <Btn block dis arrow={false}>Buy bolt-on</Btn>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right rail */}
          <div className="wf-col" style={{ flex: '0 0 320px', gap: 16 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Label>This month · Studio</Label><Tag variant="acc">Studio</Tag>
              </div>
              <div className="wf-col" style={{ gap: 18 }}>
                <Allow label="Boardroom hours" used={6} total={8} unit=" hrs" warn note="2 hrs left this quarter" />
                <Allow label="HOC events" used={1} total={2} />
              </div>
              <HR style={{ margin: '16px 0' }} />
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: 'var(--wf-ink-2)' }}>Need more room?</span>
                <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-accent)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Upgrade →</span>
              </div>
            </div>
            <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
              <Ph h={92} caption="journal / dusk" />
              <div className="wf-col" style={{ padding: 16, gap: 8 }}>
                <Meta>JOURNAL · ISSUE Nº 14</Meta>
                <Title size={17}>How the Concierge gets the right strangers in one room.</Title>
                <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-accent)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Read →</span>
              </div>
            </div>
          </div>
        </div>
        <Note kind="Tier logic">Allowance counters read live from the member's tier and reset monthly. The third counter turns brass as it nears its cap, with an inline upgrade path.</Note>
      </div>
    </DesktopShell>
  );
}

/* ---- 4b · Dashboard empty state ---- */
function ScreenDashboardEmpty() {
  return (
    <DesktopShell active="dashboard">
      <div className="wf-col" style={{ gap: 22, height: '100%' }}>
        <div className="wf-col" style={{ gap: 8 }}>
          <Eyebrow>Welcome to the House</Eyebrow>
          <H size={36}>Good morning, <em style={{ fontStyle: 'italic', color: 'var(--wf-ink-2)' }}>Imogen.</em></H>
        </div>
        <div className="wf-row" style={{ gap: 22, flex: 1, alignItems: 'stretch' }}>
          <div className="wf-card flat" style={{ flex: 1, border: '1px dashed var(--wf-line-2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, padding: 40 }}>
            <Ph h={90} w={150} caption="the floor" />
            <div className="wf-col" style={{ alignItems: 'center', gap: 8 }}>
              <Title size={24} style={{ textAlign: 'center' }}>Nothing booked yet.</Title>
              <Lead style={{ textAlign: 'center', maxWidth: 380 }}>Your first booking is a click away. Browse desks for today, or reserve a room for the week ahead.</Lead>
            </div>
            <div className="wf-row" style={{ gap: 12 }}><Btn variant="pri" arrow>Book your first desk</Btn><Btn arrow>Reserve a room</Btn></div>
          </div>
          <div className="wf-col" style={{ flex: '0 0 320px', gap: 16 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 16 }}>Your allowances · Studio</Label>
              <div className="wf-col" style={{ gap: 18 }}>
                <Allow label="Boardroom hours" used={0} total={8} unit=" hrs" note="8 hrs this quarter" />
                <Allow label="HOC events" used={0} total={2} />
              </div>
            </div>
            <Note kind="Empty state">First-run dashboard: bookings panel becomes a single invitation to act; allowances show full. Same nav, same chrome.</Note>
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ---- 5 · Desk booking · browse (list) ---- */
function DeskBrowseHead() {
  return (
    <>
      <PageHead eyebrow="Nº 002 / Book a desk" title="Find a desk." size={30}
        right={<Btn arrow={false}>Filters</Btn>} />
      <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
        <DateStrip />
        <div className="wf-row" style={{ gap: 10, alignItems: 'center' }}>
          <Tag variant="acc">Studio · Today</Tag>
          <Tag variant="ok">Unlimited desks</Tag>
        </div>
      </div>
    </>
  );
}

/* ---- 5b · Desk booking · LIST view ---- */
function ScreenDeskList() {
  const groups = [
    { name: "Central Bank of Desks", meta: "8 DESKS · CENTRAL RUN", desks: [
      ["1", "Room-facing", "Available", "free"],
      ["2", "Room-facing", "Available", "free"],
      ["3", "Room-facing", "Selected", "sel"],
      ["4", "Room-facing", "Taken today", "taken"],
      ["5", "Window-facing", "Available", "free"],
      ["6", "Window-facing", "Available", "free"],
      ["7", "Window-facing", "Taken today", "taken"],
      ["8", "Window-facing", "Available", "free"],
    ] },
    { name: "Banquette Seating", meta: "6 DESKS · SOFT SEATING", desks: [
      ["9", "Banquette seating", "Available", "free"],
      ["10", "Banquette seating", "Available", "free"],
      ["11", "Banquette seating", "Taken today", "taken"],
      ["12", "Banquette seating", "Available", "free"],
      ["13", "Banquette seating", "Available", "free"],
      ["14", "Banquette seating", "Available", "free"],
    ] },
  ];
  const FITOUT = "Laptop stand · Wireless keypad · Charger";
  return (
    <DesktopShell active="desks">
      <div className="wf-col" style={{ gap: 0, height: '100%' }}>
        <DeskBrowseHead />
        <div className="wf-row" style={{ gap: 22, flex: 1, marginTop: 20, alignItems: 'flex-start' }}>
          <div className="wf-card" style={{ flex: 1, padding: 0, overflow: 'hidden' }}>
            <div className="wf-row" style={{ padding: '12px 20px', borderBottom: '1px solid var(--wf-line)', background: 'var(--wf-panel-2)' }}>
              {["Desk", "Facing", "Fit-out", "Status", ""].map((h, i) => <div key={i} className="wf-label" style={{ flex: i === 2 ? 1.6 : (i === 4 ? '0 0 110px' : 1) }}>{h}</div>)}
            </div>
            {groups.map((g, gi) => (
              <React.Fragment key={gi}>
                <div className="wf-row" style={{ padding: '11px 20px', background: 'var(--wf-panel)', borderBottom: '1px solid var(--wf-line)', alignItems: 'baseline', gap: 12 }}>
                  <span className="wf-serif" style={{ fontSize: 16, fontStyle: 'italic' }}>{g.name}</span>
                  <Meta style={{ fontSize: 9 }}>{g.meta}</Meta>
                </div>
                {g.desks.map((r, i) => {
                  const sel = r[3] === 'sel', taken = r[3] === 'taken';
                  return (
                    <div key={i} className="wf-row" style={{ padding: '11px 20px', borderBottom: '1px solid var(--wf-line)', alignItems: 'center', opacity: taken ? .55 : 1, background: sel ? 'var(--wf-panel-2)' : 'transparent', borderLeft: sel ? '2px solid var(--wf-accent)' : '2px solid transparent' }}>
                      <div style={{ flex: 1 }}><Title size={16}>Desk {r[0]}</Title></div>
                      <div style={{ flex: 1, fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{r[1]}</div>
                      <div style={{ flex: 1.6, fontSize: 12, color: 'var(--wf-ink-2)' }}>{FITOUT}</div>
                      <div style={{ flex: 1 }}>{sel ? <Tag variant="acc">Selected</Tag> : taken ? <Tag>Taken</Tag> : <Tag variant="ok">Available</Tag>}</div>
                      <div style={{ flex: '0 0 110px' }}>{taken ? <Btn sm dis>Taken</Btn> : <Btn sm variant={sel ? "pri" : undefined}>{sel ? "Selected" : "Select"}</Btn>}</div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
          <div className="wf-col" style={{ flex: '0 0 300px', gap: 14 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 12 }}>Filters</Label>
              <div className="wf-col" style={{ gap: 14 }}>
                <Field label="Area" value="All areas" />
                <Field label="Facing" value="Any" />
                <div className="wf-row" style={{ gap: 8, alignItems: 'center' }}><span style={{ width: 16, height: 16, border: '1px solid var(--wf-accent)', background: 'var(--wf-accent)' }} /><span style={{ fontSize: 12, color: 'var(--wf-ink-2)' }}>Available now only</span></div>
              </div>
            </div>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 12 }}>Standard fit-out</Label>
              <div className="wf-col" style={{ gap: 9 }}>
                {["Laptop stand", "Wireless keypad", "Charger"].map((x, i) => (
                  <div key={i} className="wf-row" style={{ gap: 9, alignItems: 'center' }}><span className="wf-dot acc" /><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{x}</span></div>
                ))}
              </div>
            </div>
            <Note kind="Fit-out">Every desk carries the same three items — a laptop stand, wireless keypad and charger. Listed individually so members can pick an exact desk by area and facing.</Note>
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ---- 6 · Desk booking · select & confirm ---- */
function ScreenDeskConfirm() {
  return (
    <DesktopShell active="desks">
      <div style={{ maxWidth: 720, margin: '0 auto', width: '100%' }}>
        <div className="wf-row" style={{ alignItems: 'center', gap: 10, marginBottom: 18 }}><Meta>← BACK TO DESKS</Meta></div>
        <Eyebrow>Review &amp; confirm</Eyebrow>
        <H size={30} style={{ margin: '12px 0 22px' }}>You're booking Desk 04.</H>
        <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="wf-row" style={{ alignItems: 'stretch' }}>
            <Ph h={150} w={200} caption="top floor / window" />
            <div className="wf-col" style={{ flex: 1, padding: 20, gap: 14, justifyContent: 'center' }}>
              {[["Desk", "04 · Top Floor, window"], ["Date", "Wednesday 4 June MMXXVI"], ["Hours", "09:00 – 18:00 (full day)"], ["Fit-out", "Single monitor · standing desk"]].map(([k, v], i) =>
                <div key={i} className="wf-row" style={{ justifyContent: 'space-between', borderTop: i ? '1px solid var(--wf-line)' : 0, paddingTop: i ? 12 : 0 }}><Label>{k}</Label><span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>{v}</span></div>)}
            </div>
          </div>
        </div>
        <div className="wf-row" style={{ gap: 16, marginTop: 18, alignItems: 'center' }}>
          <span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)', flex: 1 }}>Desks are unlimited on your plan — book as often as you like.</span>
          <div className="wf-row" style={{ gap: 10, alignItems: 'center' }}><Btn>Cancel</Btn><Btn variant="pri" arrow>Confirm booking</Btn></div>
        </div>
        <Note kind="Confirmation" style={{ marginTop: 14 }}>Confirm books instantly within tier rules. A calendar invite and confirmation email follow — see next frame.</Note>
      </div>
    </DesktopShell>
  );
}

/* ---- 6b · Desk booking confirmation ---- */
function ScreenDeskDone() {
  return (
    <DesktopShell active="desks">
      <div style={{ maxWidth: 600, margin: '0 auto', width: '100%', paddingTop: 10 }}>
        <div className="wf-col" style={{ alignItems: 'center', gap: 14, textAlign: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: '1.5px solid var(--wf-ok)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--wf-ok)', fontSize: 22 }}>✓</div>
          <Eyebrow>Booked</Eyebrow>
          <H size={32}>Your desk is reserved.</H>
          <Lead style={{ maxWidth: 420 }}>Desk 04 on the Top Floor is yours on Wednesday 4 June, 09:00 to 18:00. We'll see you at the door.</Lead>
        </div>
        <div className="wf-card" style={{ padding: 20, marginTop: 24 }}>
          <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <Label>Booking reference</Label><span className="wf-mono" style={{ fontSize: 13, color: 'var(--wf-ink)' }}>HOC-D-2261</span>
          </div>
          <HR />
          <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '14px 24px', marginTop: 14 }}>
            {[["Desk", "04 · Top Floor"], ["Date", "Wed 4 June, 09:00–18:00"], ["Desks", "Unlimited on your plan"], ["Cost", "Included in Studio"]].map(([k, v], i) =>
              <div key={i} className="wf-col" style={{ gap: 4 }}><Label>{k}</Label><span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>{v}</span></div>)}
          </div>
        </div>
        <div className="wf-card flat" style={{ border: '1px solid var(--wf-line)', padding: 14, marginTop: 16, display: 'flex', gap: 11, alignItems: 'center', background: 'var(--wf-panel-2)' }}>
          <Ph h={32} w={40} caption="" /><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>A confirmation email is on its way to <b>imogen.hartley@email.com</b> with a calendar invite and door details.</span>
        </div>
        <div className="wf-row" style={{ gap: 12, marginTop: 18, justifyContent: 'center' }}><Btn arrow>Add to calendar</Btn><Btn variant="pri" arrow>View in My Bookings</Btn></div>
        <Note kind="Success state" style={{ marginTop: 18, margin: '18px auto 0' }}>Same pattern for room bookings. Reference is copyable; the email note reassures without leaving the app.</Note>
      </div>
    </DesktopShell>
  );
}

/* ---- 7 · Meeting room reservation ---- */
function ScreenRooms() {
  const rooms = [
    ["Thought Lounge", "Meeting / lounge", "6–10", "On allowance", "ok"],
    ["Launch Pad", "Workshop · long table", "10", "On allowance", "ok"],
    ["Future Room", "Boardroom · walnut", "12", "Studio · 8 hrs/qtr", "rate"],
    ["Spark Studio", "Podcast / meeting", "4 mic · 6 room", "Hire rate", "rate"],
  ];
  return (
    <DesktopShell active="rooms">
      <div className="wf-col" style={{ gap: 18, height: '100%' }}>
        <PageHead eyebrow="Nº 003 / Meeting rooms" title="Reserve a room." size={30}
          right={<Allow label="Boardroom hrs · quarter" used={6} total={8} unit=" hrs" warn style={{ width: 180 }} />} />
        <div className="wf-row" style={{ gap: 22, flex: 1, alignItems: 'stretch' }}>
          {/* controls */}
          <div className="wf-col" style={{ flex: '0 0 300px', gap: 16 }}>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 14 }}>When</Label>
              <DateStrip sel={3} />
              <HR style={{ margin: '16px 0' }} />
              <div className="wf-col" style={{ gap: 16 }}>
                <Field label="Start time" value="14:00" />
                <div className="wf-col" style={{ gap: 8 }}><Label>Duration</Label><Seg options={["1h", "2h", "4h", "Half day"]} active="2h" /></div>
                <div className="wf-col" style={{ gap: 8 }}><Label>Capacity needed</Label><Seg options={["1–4", "5–8", "9–12"]} active="9–12" /></div>
              </div>
            </div>
            <div className="wf-card" style={{ padding: 18 }}>
              <Label style={{ marginBottom: 12 }}>Add-ons</Label>
              <div className="wf-col" style={{ gap: 12 }}>
                {[["AV & conferencing", true], ["Catering · lunch", false], ["Honesty-bar pour", false]].map(([l, on], i) =>
                  <div key={i} className="wf-row" style={{ gap: 10, alignItems: 'center' }}><span style={{ width: 16, height: 16, border: '1px solid ' + (on ? 'var(--wf-accent)' : 'var(--wf-line-2)'), background: on ? 'var(--wf-accent)' : 'transparent' }} /><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{l}</span></div>)}
              </div>
            </div>
          </div>
          {/* room list */}
          <div className="wf-col" style={{ flex: 1, gap: 12 }}>
            <Label>Available · Thu 5 June, 14:00 · 2 hrs · 9–12</Label>
            {rooms.map((r, i) => {
              const sel = i === 2;
              return (
                <div key={i} className="wf-card" style={{ padding: 0, overflow: 'hidden', borderColor: sel ? 'var(--wf-accent)' : 'var(--wf-line)', borderWidth: sel ? 2 : 1, display: 'flex', alignItems: 'stretch' }}>
                  <Ph h={88} w={130} caption={r[1].toLowerCase()} />
                  <div className="wf-row" style={{ flex: 1, padding: 16, alignItems: 'center', gap: 16 }}>
                    <div className="wf-col" style={{ gap: 6, flex: 1 }}>
                      <Title size={19}>{r[0]}</Title>
                      <div className="wf-row" style={{ gap: 10 }}><Meta>{r[1].toUpperCase()}</Meta><Meta>· HOLDS {r[2]}</Meta></div>
                    </div>
                    <Tag variant={r[4] === 'rate' ? "" : "ok"}>{r[3]}</Tag>
                    <Btn sm variant={sel ? "pri" : undefined} arrow>{sel ? "Selected" : "Choose"}</Btn>
                  </div>
                </div>
              );
            })}
            <div className="wf-row" style={{ gap: 14, marginTop: 4 }}>
              <Note kind="Tier access">Studio gets unlimited meeting rooms plus 8 boardroom hours each quarter in the Future Room; Atelier gets 2 room hours a month. Rooms above a tier appear with the requirement, never hidden.</Note>
              <div style={{ flex: 1 }} />
              <Btn variant="pri" arrow style={{ alignSelf: 'flex-end' }}>Review reservation</Btn>
            </div>
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ---- 7b · Meeting room confirmation ---- */
function ScreenRoomsDone() {
  return (
    <DesktopShell active="rooms">
      <div style={{ maxWidth: 600, margin: '0 auto', width: '100%', paddingTop: 10 }}>
        <div className="wf-col" style={{ alignItems: 'center', gap: 14, textAlign: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: '1.5px solid var(--wf-ok)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--wf-ok)', fontSize: 22 }}>✓</div>
          <Eyebrow>Reserved</Eyebrow>
          <H size={32}>The Future Room is yours.</H>
          <Lead style={{ maxWidth: 420 }}>Thursday 5 June, 14:00 to 16:00. AV is set; we'll have the room ready before you arrive.</Lead>
        </div>
        <div className="wf-card" style={{ padding: 20, marginTop: 24 }}>
          <div className="wf-row" style={{ justifyContent: 'space-between', marginBottom: 14 }}><Label>Reference</Label><span className="wf-mono" style={{ fontSize: 13 }}>HOC-R-0884</span></div>
          <HR />
          <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '14px 24px', marginTop: 14 }}>
            {[["Room", "Future Room · boardroom"], ["When", "Thu 5 Jun, 14:00–16:00"], ["Add-ons", "AV & conferencing"], ["Charged", "2 hrs · room allowance"]].map(([k, v], i) =>
              <div key={i} className="wf-col" style={{ gap: 4 }}><Label>{k}</Label><span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>{v}</span></div>)}
          </div>
        </div>
        <div className="wf-card flat" style={{ border: '1px solid var(--wf-line)', padding: 14, marginTop: 16, display: 'flex', gap: 11, alignItems: 'center', background: 'var(--wf-panel-2)' }}>
          <Ph h={32} w={40} caption="" /><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>A confirmation email with the calendar invite, AV notes and a Concierge contact is on its way.</span>
        </div>
        <div className="wf-row" style={{ gap: 12, marginTop: 18, justifyContent: 'center' }}><Btn arrow>Add to calendar</Btn><Btn variant="pri" arrow>View in My Bookings</Btn></div>
      </div>
    </DesktopShell>
  );
}

Object.assign(window, {
  ScreenDashboard, ScreenDashboardEmpty, ScreenDeskList,
  ScreenDeskConfirm, ScreenDeskDone, ScreenRooms, ScreenRoomsDone,
});
