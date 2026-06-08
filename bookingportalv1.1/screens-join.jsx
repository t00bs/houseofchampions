/* ============================================================================
   SCREENS · JOIN — orientation + acquisition
   Legend, navigation reference, tier selection, sign-up (4 steps), login,
   forgot password. Consumes wf-kit globals.
   ========================================================================== */

/* ---- 0a · Legend / how to read these ---- */
function ScreenLegend() {
  const row = (swatch, term, desc) => (
    <div className="wf-row" style={{ gap: 14, alignItems: 'flex-start' }}>
      <div style={{ flex: '0 0 64px' }}>{swatch}</div>
      <div className="wf-col" style={{ gap: 3 }}>
        <Label style={{ color: 'var(--wf-ink)' }}>{term}</Label>
        <div style={{ fontSize: 12, color: 'var(--wf-ink-2)', lineHeight: 1.45 }}>{desc}</div>
      </div>
    </div>
  );
  return (
    <div className="wf" style={{ padding: 34 }}>
      <Eyebrow>Wireframe system</Eyebrow>
      <H size={30} style={{ marginTop: 12 }}>How to read these</H>
      <Lead style={{ marginTop: 10, marginBottom: 22 }}>
        Mid-fidelity, greyscale on warm paper — structure, hierarchy and content over polish. The House of
        Champions grid, type roles and component patterns are carried throughout; colour is held back so the
        layout does the talking.
      </Lead>
      <HR />
      <div className="wf-col" style={{ gap: 18, marginTop: 22 }}>
        {row(<div className="wf-bar" style={{ height: 30, width: 64 }} />, "Greyscale fill", "Placeholder copy or content that will be written later.")}
        {row(<Ph h={36} caption="img" />, "Dashed hatch box", "Photography / media stand-in. Real imagery slots in later.")}
        {row(<div className="wf-row" style={{ gap: 8, alignItems: 'center' }}><span className="wf-dot acc" /><span style={{ width: 28, height: 2, background: 'var(--wf-accent)' }} /></div>, "Brass accent", "The one accent. Marks the ACTIVE state and all tier / permission logic (locks, allowances, upgrade prompts).")}
        {row(<Note kind="i" style={{ maxWidth: 64, padding: '5px 6px', fontSize: 9 }}>•</Note>, "Slate dashed pill", "An annotation — interaction notes, conditional logic and open decisions. Not part of the UI.")}
        {row(<div className="wf-mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--wf-ink-3)' }}>ABC 123</div>, "Mono caps", "Labels, eyebrows, prices, dates, metadata — JetBrains Mono, wide tracking.")}
        {row(<div className="wf-serif" style={{ fontStyle: 'italic', fontSize: 20 }}>Aa</div>, "Serif italic", "Display + editorial voice — Cormorant Garamond, the brand on screen.")}
      </div>
      <HR style={{ marginTop: 22 }} />
      <Note kind="Scope" style={{ marginTop: 18, maxWidth: '100%' }}>
        Member web app — desktop-first, responsive to mobile. Admin dashboard follows as a second set. British English throughout.
      </Note>
    </div>
  );
}

/* ---- 0b · Navigation reference ---- */
function ScreenNav() {
  return (
    <div className="wf" style={{ background: 'var(--wf-paper)', padding: 0 }}>
      <div className="wf-page" style={{ padding: 32, gap: 26, display: 'flex', flexDirection: 'column' }}>
        <div className="wf-col" style={{ gap: 8 }}>
          <Eyebrow>Navigation — member app</Eyebrow>
          <Lead>Persistent top nav. Active item carries an 18px brass underline; everything else sits in muted mono caps.</Lead>
        </div>

        {/* default */}
        <div>
          <Label style={{ marginBottom: 8 }}>Default · Dashboard active</Label>
          <div className="wf-card" style={{ padding: 0 }}>
            <header className="wf-top" style={{ borderBottom: '1px solid var(--wf-line)' }}>
              <span className="wf-wordmark">House of Champions</span>
              <span className="wf-label" style={{ borderLeft: '1px solid var(--wf-line-2)', paddingLeft: 12 }}>Members</span>
              <nav className="wf-nav" style={{ marginLeft: 12 }}>
                {[["Dashboard", 1], ["Book a Desk"], ["Meeting Rooms"], ["My Bookings"], ["Team"], ["Account"]].map(([l, on], i) =>
                  <a key={i} className={on ? "on" : ""}>{l}</a>)}
              </nav>
              <div style={{ flex: 1 }} />
              <Tag variant="acc">Studio</Tag>
              <Avatar style={{ marginLeft: 12 }}>IH</Avatar>
            </header>
          </div>
        </div>

        <div className="wf-row" style={{ gap: 26, alignItems: 'flex-start' }}>
          {/* account menu */}
          <div style={{ flex: 1 }}>
            <Label style={{ marginBottom: 8 }}>Account menu (open)</Label>
            <div className="wf-card" style={{ padding: 14, width: 240 }}>
              <div className="wf-row" style={{ gap: 10, alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid var(--wf-line)' }}>
                <Avatar>IH</Avatar>
                <div className="wf-col" style={{ gap: 3 }}>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>Imogen Hartley</div>
                  <Meta>STUDIO · ACCOUNT ADMIN</Meta>
                </div>
              </div>
              <div className="wf-col" style={{ gap: 12, paddingTop: 12 }}>
                {["Account & profile", "Plan & membership", "Team & seats", "Billing & invoices", "Sign out"].map((x, i) =>
                  <div key={i} className="wf-mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: i === 4 ? 'var(--wf-ink-3)' : 'var(--wf-ink-2)' }}>{x}</div>)}
              </div>
            </div>
            <Note kind="Role" style={{ marginTop: 12 }}>Team &amp; seats appears only for the Account Admin. Standard seats see Account, Plan and Billing only.</Note>
          </div>

          {/* mobile nav */}
          <div>
            <Label style={{ marginBottom: 8 }}>Mobile · bottom tabs</Label>
            <div className="wf-card" style={{ width: 240, padding: 0, overflow: 'hidden' }}>
              <header className="wf-top" style={{ height: 46, padding: '0 14px' }}>
                <span className="wf-wordmark" style={{ fontSize: 13 }}>House of Champions</span>
                <div style={{ flex: 1 }} /><Avatar size={22}>IH</Avatar>
              </header>
              <div style={{ height: 150, background: 'var(--wf-paper)' }} />
              <div className="wf-tabs">
                {[["Home", 1], ["Desks"], ["Rooms"], ["Bookings"], ["Account"]].map(([l, on], i) =>
                  <div key={i} className={on ? "on" : ""}><span className="ic" />{l}</div>)}
              </div>
            </div>
            <Note kind="Responsive" style={{ marginTop: 12, width: 240 }}>Top nav collapses to a 5-item bottom bar below ~720px. Desk &amp; room booking are reachable in one tap on the go.</Note>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- 1 · Tier selection ---- */
function TierCol({ t, featured }) {
  return (
    <div className="wf-card" style={{ flex: 1, padding: 0, position: 'relative', borderColor: featured ? 'var(--wf-accent)' : 'var(--wf-line)', borderWidth: featured ? 2 : 1, background: featured ? 'var(--wf-panel)' : 'transparent' }}>
      {featured && <div style={{ position: 'absolute', top: -1, left: -1, right: -1, height: 3, background: 'var(--wf-accent)' }} />}
      <div className="wf-col" style={{ padding: 24, gap: 16 }}>
        <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="wf-col" style={{ gap: 6 }}>
            <Title size={28}>{t.name}</Title>
            <Meta>{t.tag.toUpperCase()}</Meta>
          </div>
          {featured && <Tag variant="acc">Most chosen</Tag>}
          {t.invite && <Tag>Invite only</Tag>}
        </div>
        <div className="wf-row" style={{ alignItems: 'baseline', gap: 8 }}>
          <div className="wf-serif" style={{ fontSize: 34, fontWeight: 600 }}>{t.price}</div>
          {t.per && <Meta>{t.per}</Meta>}
        </div>
        <HR />
        <div className="wf-col" style={{ gap: 10 }}>
          {t.rows.map((r, i) => (
            <div key={i} className="wf-row" style={{ gap: 10, alignItems: 'baseline' }}>
              <span style={{ color: 'var(--wf-accent)', fontSize: 12, flex: '0 0 auto' }}>✦</span>
              <span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)', lineHeight: 1.4 }}>{r}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        {t.invite
          ? <Btn block dis>Invite only</Btn>
          : <Btn block variant={featured ? "acc" : "pri"} arrow>{t.cta}</Btn>}
      </div>
    </div>
  );
}
function ScreenTiers() {
  const tiers = [
    { name: "Atelier", tag: "Flexible access", price: "£225", per: "/ month", cta: "Sign up",
      rows: ["Flexible desk — top floor", "Meeting rooms 2 hrs/mo — Thought Lounge, Launch Pad or Spark Studio", "Up to 4 HOC events/mo", "Bike storage · Wi-Fi · coffee"] },
    { name: "Studio", tag: "Desk access · most chosen", price: "£275", per: "/ month", cta: "Sign up",
      rows: ["Unlimited desks, phone booths & meeting rooms", "Boardroom — 8 hrs/quarter in the Future Room", "Unlimited events with priority booking", "2nd-floor locker · bike store · showers · concierge"] },
  ];
  return (
    <DesktopShell active={null} hideAvatar>
      <div className="wf-col" style={{ gap: 22, height: '100%' }}>
        <PageHead eyebrow="Nº 001 / Membership" title={<span>Choose how you join the <em style={{ fontStyle: 'italic', color: 'var(--wf-ink-2)' }}>House</em>.</span>}
          sub="Your tier governs the days and hours you can book, your desk and meeting-room allowances, the rooms you can reach and who you can bring."
          right={<Btn arrow>Compare all features</Btn>} />
        <div className="wf-row" style={{ gap: 16, flex: 1, alignItems: 'stretch' }}>
          {tiers.map((t, i) => <TierCol key={t.name} t={t} featured={i === 1} />)}
          <div className="wf-card" style={{ flex: '0 0 232px', padding: 22, display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--wf-panel-2)' }}>
            <div className="wf-col" style={{ gap: 6 }}><Title size={20}>Day Pass</Title><Meta>NOT READY TO JOIN?</Meta></div>
            <div className="wf-serif" style={{ fontSize: 26, fontWeight: 600 }}>£35<span className="wf-meta" style={{ fontWeight: 400 }}> / day</span></div>
            <div className="wf-col" style={{ gap: 9, flex: 1 }}>
              {["One full day on the floor", "Hot desk · Wi-Fi · coffee", "Try the House before applying"].map((r, i) =>
                <div key={i} className="wf-row" style={{ gap: 8, alignItems: 'flex-start' }}><span style={{ color: 'var(--wf-ink-3)', fontSize: 12 }}>—</span><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>{r}</span></div>)}
            </div>
            <Btn block arrow>Book a day</Btn>
          </div>
        </div>
        <div className="wf-row" style={{ gap: 14, alignItems: 'center' }}>
          <Note kind="Tier logic">Each tier is the master switch for the whole app — booking windows, allowances, accessible spaces, guest rules and perks all read from it.</Note>
          <Note kind="Featured">Studio is pre-marked “most chosen”: brass border, top-rule and badge — the design system's featured-column treatment.</Note>
          <Note kind="Day Pass">A £35 single-day pass sits alongside membership — a low-commitment way in, charged per visit rather than monthly.</Note>
        </div>
      </div>
    </DesktopShell>
  );
}

/* ---- 2 · Sign-up / onboarding ---- */
function Stepper({ step }) {
  const steps = ["Account", "Profile", "Tier", "Billing"];
  return (
    <div className="wf-row" style={{ gap: 0, alignItems: 'center' }}>
      {steps.map((s, i) => {
        const n = i + 1, done = n < step, on = n === step;
        return (
          <React.Fragment key={s}>
            <div className="wf-row" style={{ gap: 9, alignItems: 'center' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid ' + (on || done ? 'var(--wf-accent)' : 'var(--wf-line-2)'), background: done ? 'var(--wf-accent)' : 'transparent', color: done ? '#fff' : (on ? 'var(--wf-accent)' : 'var(--wf-ink-3)'), display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--wf-mono)', fontSize: 10 }}>{done ? '✓' : n}</div>
              <span className="wf-mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: on ? 'var(--wf-ink)' : 'var(--wf-ink-3)' }}>{s}</span>
            </div>
            {i < steps.length - 1 && <div style={{ flex: 1, height: 1, background: 'var(--wf-line-2)', margin: '0 14px', maxWidth: 64 }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
function SignupShell({ step, title, sub, children, foot, side }) {
  return (
    <div className="wf">
      <header className="wf-top"><span className="wf-wordmark">House of Champions</span>
        <span className="wf-label" style={{ borderLeft: '1px solid var(--wf-line-2)', paddingLeft: 12 }}>Apply / Join</span>
        <div style={{ flex: 1 }} /><Meta>STEP {step} OF 4</Meta></header>
      <div className="wf-page" style={{ padding: '34px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Stepper step={step} />
          <div className="wf-row" style={{ gap: 40, marginTop: 30, alignItems: 'flex-start' }}>
            <div className="wf-col" style={{ flex: 1, gap: 22 }}>
              <div className="wf-col" style={{ gap: 10 }}>
                <H size={28}>{title}</H>
                {sub && <Lead>{sub}</Lead>}
              </div>
              {children}
              <HR />
              <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>{foot}</div>
            </div>
            {side && <div style={{ flex: '0 0 220px' }}>{side}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
function ScreenSignup1() {
  return (
    <SignupShell step={1} title="Tell us who you are." sub="A few details to open your account — no trick questions."
      foot={<><Btn>Already a member? Sign in</Btn><Btn variant="pri" arrow>Continue</Btn></>}
      side={<Note kind="Considered">Membership is by referral and capped. This starts a conversation — applications are read within fourteen days.</Note>}>
      <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Field label="First name" value="Imogen" />
        <Field label="Surname" value="Hartley" />
        <Field label="Email address" value="imogen.hartley@email" err errmsg="Enter a valid email address" style={{ gridColumn: '1 / -1' }} />
        <Field label="Password" value="••••••••" />
        <Field label="Confirm password" value="••••••••" />
        <Field label="Referral code (optional)" ph="If a member put your name forward" focus style={{ gridColumn: '1 / -1' }} />
      </div>
      <Note kind="Validation">Inline, on blur. Errors turn the underline oxblood with a mono message; the Continue button stays disabled until the step is valid.</Note>
    </SignupShell>
  );
}
function ScreenSignup2() {
  return (
    <SignupShell step={2} title="A little about your work." sub="So the Creative Concierge can make the right introductions."
      foot={<><Btn arrow={false}>← Back</Btn><Btn variant="pri" arrow>Continue</Btn></>}
      side={<div className="wf-col" style={{ gap: 12 }}><Label>Profile photo</Label><Ph h={120} caption="upload / drag" /><Note kind="Optional">Skippable now, completed later from Account.</Note></div>}>
      <div className="wf-col" style={{ gap: 22 }}>
        <Field label="What you're building" ph="Studio, company or practice" />
        <div className="wf-field"><Label>In a line</Label><div className="in ph" style={{ minHeight: 56, alignItems: 'flex-start', paddingTop: 8 }}>What you do, in your own words…</div></div>
        <div className="wf-col" style={{ gap: 9 }}>
          <Label>Interests</Label>
          <div className="wf-row" style={{ gap: 8, flexWrap: 'wrap' }}>
            {["Design", "Film", "Founders", "Wellness", "Music", "Investment", "+ add"].map((x, i) => <Tag key={i} variant={i < 2 ? "acc" : ""}>{x}</Tag>)}
          </div>
        </div>
        <Field label="Website / social (optional)" ph="https://" />
      </div>
    </SignupShell>
  );
}
function ScreenSignup3() {
  return (
    <SignupShell step={3} title="Confirm your tier." sub="You can change this any time from Plan & membership."
      foot={<><Btn arrow={false}>← Change tier</Btn><Btn variant="pri" arrow>Confirm &amp; continue</Btn></>}
      side={<Note kind="Allowances">The recap is generated from the selected tier — change the tier and these lines update.</Note>}>
      <div className="wf-card" style={{ borderColor: 'var(--wf-accent)', borderWidth: 2, padding: 22 }}>
        <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="wf-col" style={{ gap: 6 }}><Title size={26}>Studio</Title><Meta>DESK ACCESS · MONTHLY ROLLING</Meta></div>
          <div className="wf-col" style={{ alignItems: 'flex-end', gap: 4 }}>
            <div className="wf-serif" style={{ fontSize: 30, fontWeight: 600 }}>£250<span className="wf-meta"> / mo</span></div>
            <Tag variant="acc">Early-bird · founding cohort</Tag>
          </div>
        </div>
        <HR style={{ margin: '18px 0' }} />
        <div className="wf-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '12px 28px' }}>
          {[["Desk", "Priority + 2nd-floor locker"], ["Meeting rooms", "Unlimited"], ["Boardroom", "8 hrs / quarter · Future Room"], ["Events", "Unlimited · priority booking"], ["Sharing", "Shareable with one named person"], ["Term", "Monthly rolling"]].map(([k, v], i) =>
            <div key={i} className="wf-col" style={{ gap: 4 }}><Label>{k}</Label><span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>{v}</span></div>)}
        </div>
      </div>
      <Note kind="Early-bird">Founding-cohort rate is held for the life of the membership — surfaced here so the saving is explicit before billing.</Note>
    </SignupShell>
  );
}
function ScreenSignup4() {
  return (
    <SignupShell step={4} title="Set up billing." sub="The final step happens with our billing partner — we never hold your card details."
      foot={<><Btn arrow={false}>← Back</Btn><Btn variant="acc" arrow>Continue to secure checkout</Btn></>}
      side={<Note kind="External">Recurring billing is handled by the existing invoicing system. The app surfaces the plan, invoices and renewals only.</Note>}>
      <div className="wf-card" style={{ padding: 22 }}>
        <Label style={{ marginBottom: 14 }}>Order summary</Label>
        {[["Studio membership", "£250 / mo"], ["Founding-cohort discount", "−£25"], ["First payment", "On acceptance"]].map(([k, v], i) =>
          <div key={i} className="wf-row" style={{ justifyContent: 'space-between', padding: '10px 0', borderTop: i ? '1px solid var(--wf-line)' : 0 }}>
            <span style={{ fontSize: 13, color: 'var(--wf-ink-2)' }}>{k}</span><span className="wf-meta" style={{ color: 'var(--wf-ink)' }}>{v}</span></div>)}
        <HR style={{ margin: '14px 0' }} />
        <div className="wf-row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Label>Due monthly</Label><div className="wf-serif" style={{ fontSize: 26, fontWeight: 600 }}>£250</div></div>
      </div>
      <div className="wf-card flat" style={{ border: '1px dashed var(--wf-line-2)', padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
        <Ph h={36} w={48} caption="" /><div className="wf-col" style={{ gap: 4 }}><Label>Hand-off</Label><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>You'll be passed to the secure invoicing portal to confirm payment, then returned to your new dashboard.</span></div>
      </div>
      <Note kind="Future phase">One-off payments (room top-ups, day passes, add-ons) via CityPay are reserved in the IA — not built in this phase.</Note>
    </SignupShell>
  );
}

/* ---- 3 · Log in + forgot ---- */
function AuthShell({ children, foot }) {
  return (
    <div className="wf">
      <div className="wf-page" style={{ padding: 0, display: 'flex' }}>
        <div style={{ flex: '0 0 44%', borderRight: '1px solid var(--wf-line)', padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--wf-panel)' }}>
          <span className="wf-wordmark" style={{ fontSize: 20 }}>House of Champions</span>
          <div className="wf-col" style={{ gap: 16 }}>
            <Disp size={40}>A house,<br />not a workspace.</Disp>
            <Meta>OPEN DAWN UNTIL LATE · SEVEN DAYS · ST HELIER, JERSEY</Meta>
          </div>
          <Ph h={120} caption="members lounge / dusk" />
        </div>
        <div style={{ flex: 1, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>{children}{foot}</div>
        </div>
      </div>
    </div>
  );
}
function ScreenLogin() {
  return (
    <AuthShell foot={
      <div className="wf-col" style={{ gap: 14, marginTop: 26 }}>
        <Btn block variant="pri" arrow>Sign in</Btn>
        <div className="wf-row" style={{ justifyContent: 'space-between' }}>
          <span className="wf-mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--wf-accent)' }}>Forgot password</span>
          <span className="wf-mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--wf-ink-3)' }}>Apply to join →</span>
        </div>
      </div>}>
      <Eyebrow>Members</Eyebrow>
      <H size={30} style={{ margin: '12px 0 26px' }}>Welcome back.</H>
      <div className="wf-col" style={{ gap: 22 }}>
        <Field label="Email address" value="imogen.hartley@email.com" />
        <Field label="Password" value="••••••••••" focus />
      </div>
      <Note kind="Error state" style={{ marginTop: 16 }}>On failure: a single mono message above the form — “We didn't recognise that email and password.” No field-level guessing.</Note>
    </AuthShell>
  );
}
function ScreenForgot() {
  return (
    <AuthShell foot={
      <div className="wf-col" style={{ gap: 14, marginTop: 26 }}>
        <Btn block variant="pri" arrow>Send reset link</Btn>
        <span className="wf-mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--wf-ink-3)' }}>← Back to sign in</span>
      </div>}>
      <Eyebrow>Reset</Eyebrow>
      <H size={30} style={{ margin: '12px 0 14px' }}>Forgot your password?</H>
      <Lead style={{ marginBottom: 24 }}>Enter your email and we'll send a link to set a new one.</Lead>
      <Field label="Email address" value="imogen.hartley@email.com" focus />
      <div className="wf-card" style={{ marginTop: 22, padding: 16, display: 'flex', gap: 11, alignItems: 'flex-start', borderColor: 'var(--wf-ok)' }}>
        <span className="wf-dot ok" style={{ marginTop: 5 }} />
        <div className="wf-col" style={{ gap: 4 }}><Label style={{ color: 'var(--wf-ok)' }}>Sent · success state</Label><span style={{ fontSize: 12.5, color: 'var(--wf-ink-2)' }}>Check your inbox — if that address is registered, a reset link is on its way. The link expires in 30 minutes.</span></div>
      </div>
      <Note kind="Privacy" style={{ marginTop: 14 }}>Same confirmation whether or not the email exists, so the form can't be used to discover members.</Note>
    </AuthShell>
  );
}

Object.assign(window, {
  ScreenLegend, ScreenNav, ScreenTiers,
  ScreenSignup1, ScreenSignup2, ScreenSignup3, ScreenSignup4,
  ScreenLogin, ScreenForgot,
});
