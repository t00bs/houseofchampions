/* Content data — House of Champions */

/* Shared page URLs (single source of truth for cross-links) */
const PAGES = {
  home:       "House of Champions - Homepage.html",
  space:      "House of Champions - The Space.html",
  membership: "House of Champions - Membership.html",
  journal:    "House of Champions - Journal.html",
  contact:    "House of Champions - Contact.html",
  viewing:    "House of Champions - Book a Viewing.html",
  apply:      "House of Champions - Apply.html",
};

/* Photo registry — real House of Champions photography (Ollie Jones) */
const IMG = {
  coworkingNeon:  "images/coworking-neon.jpg",
  coworkingDesks: "images/coworking-desks.jpg",
  loungeTeal:     "images/lounge-teal.jpg",
  loungeCafe:     "images/lounge-cafe.jpg",
  concierge:      "images/concierge.jpg",
  quietNook:      "images/quiet-nook.jpg",
  phoneBooth:     "images/phone-booth.jpg",
  welcomeDesk:    "images/welcome-desk.jpg",
  sparkStudio:    "images/spark-studio.jpg",
  neonBrilliance: "images/neon-brilliance.jpg",
};

const SPACES = [
  { name: "Thought Lounge",  caption: "members lounge / sofa cluster", hue: 26, type: "Meeting / Lounge", img: IMG.loungeCafe, pos: "center",
    blurb: "Soft seating, low light, the place where ideas get worked out. Free for House members, on the meeting allowance for Studio and Atelier.",
    long: "The first room you meet and the last you leave. Deep sofas, a low brass table and dimmable light for the conversations that don't belong in a boardroom — the catch-up, the read-through, the quiet pitch before the loud one.",
    specs: [["Setting", "Soft seating · low light"], ["Holds", "6–10 relaxed"], ["Fit-out", "Casting screen · ambient audio"], ["Best for", "Catch-ups · read-throughs · informal pitches"]] },
  { name: "Launch Pad",      caption: "long table / north light",      hue: 30, type: "Meeting / Workshop", img: IMG.coworkingDesks, pos: "center",
    blurb: "A long table for pitches, kick-offs and workshops. Whiteboards, projector, room for ten around the table.",
    long: "A ten-seat refectory table under north light, walls that take a marker, and a projector that just works. Built for the kick-off, the workshop and the all-day sprint where the whole team needs to see the same thing.",
    specs: [["Setting", "Long table · north light"], ["Holds", "10 around the table"], ["Fit-out", "Wall-to-wall whiteboard · projector"], ["Best for", "Kick-offs · workshops · sprints"]] },
  { name: "Future Room",     caption: "future room / window light",     hue: 22, type: "Boardroom", img: IMG.quietNook, pos: "center",
    blurb: "The boardroom. Walnut, twelve-seater, dedicated AV. One four-hour booking included with House membership each month.",
    long: "Walnut, twelve seats, and AV that disappears into the table. The room for the decision that matters — board meetings, investor sessions, the contract signed at golden hour. House members get one four-hour booking each month, included.",
    specs: [["Setting", "Walnut boardroom · golden hour"], ["Holds", "12 seated"], ["Fit-out", "Dedicated AV · conferencing · privacy glass"], ["Best for", "Boards · investors · client decisions"]] },
  { name: "Spark Studio",    caption: "studio / on the record",        hue: 200, type: "Meeting / Podcast", img: IMG.sparkStudio, pos: "50% 42%",
    blurb: "A treated room that doubles as a meeting space and a podcast studio. Four-mic rig, on-camera lighting, ready to record.",
    long: "Acoustically treated, lit for camera, wired for sound. A four-mic rig and on-camera lighting turn a meeting room into a recording studio in minutes — for the podcast, the founder interview, the launch video. House members get two recorded hours a year, included.",
    specs: [["Setting", "Treated room · monitor lit"], ["Holds", "4 on mic · 6 in room"], ["Fit-out", "Four-mic rig · on-camera lighting · recorder"], ["Best for", "Podcasts · interviews · launch films"]] },
];

const FEATURES = [
  { letter: "C", num: "01", name: "Create",
    body: "Professional studios and flexible areas, dressed with work from local artists, designed to make creative brand-building feel like the default rather than the exception.",
    caption: "studio / morning light", hue: 26, img: IMG.coworkingNeon, pos: "center" },
  { letter: "C", num: "02", name: "Connect",
    body: "A dedicated Creative Concierge and a carefully curated membership — community happens because the right people share the same rooms, the same calendar, the same partnerships.",
    caption: "members lounge / candle", hue: 30, img: IMG.concierge, pos: "50% 35%" },
  { letter: "C", num: "03", name: "Communicate",
    body: "A curated events calendar, generous communal spaces and exclusive partnerships designed for personal growth and natural networking — the kind that doesn't feel like networking.",
    caption: "talk / audience seated", hue: 22, img: IMG.welcomeDesk, pos: "center" },
  { letter: "C", num: "04", name: "Collaborate",
    body: "Beautifully designed co-working spaces — refined meeting rooms, private booths and flexible areas tailored for focus, deep work, and the events that need a room of their own.",
    caption: "future room / boardroom", hue: 200, img: IMG.phoneBooth, pos: "50% 38%" },
  { letter: "C", num: "05", name: "Curate",
    body: "Premium coffee in the morning, fresh lunches, considered snacks through the day — and a small but proper selection of wines and beers on the honesty bar for when you're done.",
    caption: "honesty bar / closeup", hue: 18, img: IMG.loungeTeal, pos: "50% 60%" },
  { letter: "C", num: "06", name: "Cultivate",
    body: "Wellness classes on the calendar, high-speed tech that gets out of the way, and a restorative atmosphere — natural light, plants, and premium amenities, end to end.",
    caption: "plants / golden hour", hue: 36, img: IMG.neonBrilliance, pos: "center" },
];

const TIERS = [
  {
    name: "Atelier", tagline: "Flexible access", price: "£225", earlyPrice: "£200", per: "/ month",
    desc: "Access the House's creative network, events, and flexible workspaces anytime.",
    featured: false, grad: ["#7AB3D0", "#D9C8A6", "#9FC8A2", "#E3B8C2"],
    cta: "Sign up", minTerm: "Monthly rolling", inviteOnly: false,
  },
  {
    name: "Studio", tagline: "Desk access", price: "£275", earlyPrice: "£250", per: "/ month",
    desc: "Professional studio base offering priority access, expert mentorship, and growth.",
    featured: true, grad: ["#E59FB4", "#C7A6E0", "#9CB7E0", "#E0D49A"],
    cta: "Sign up", minTerm: "Monthly rolling", inviteOnly: false,
  },
  {
    name: "House", tagline: "Full access", price: "£400", earlyPrice: "£375", per: "/ month",
    desc: "Full house access with priority bookings, wellness, and strategic networking.",
    featured: false, grad: ["#E0C28A", "#E5A9A0", "#C8B5D9", "#9FC9C2"],
    cta: "Sign up", minTerm: "12 months", inviteOnly: false,
  },
  {
    name: "Collective", tagline: "Invite only", price: "By invitation", earlyPrice: null, per: "",
    desc: "Invite-only full-house access with priority bookings, wellness and strategic networking. Terms agreed individually.",
    featured: false, grad: ["#D7C8A8", "#B89668", "#E8DBB6", "#8E6A3C"],
    cta: "Invite only", minTerm: "As agreed", inviteOnly: true,
  }
];

const COMPARISON = [
  { group: "Workspace access", rows: [
    ["Desk access (no reserved desk)",         "Top floor only", "✓", "✓", "✓"],
    ["Private phone booths",                    "—",              "✓", "✓", "✓"],
    ["Second-floor locker",                     "—",              "✓", "✓", "✓"],
    ["Bike storage",                            "✓",              "✓", "✓", "✓"],
  ]},
  { group: "Meeting rooms & bookings", rows: [
    ["Thought Lounge / Launch Pad",            "4 hrs/mo",       "8 hrs/mo", "Unlimited", "Unlimited"],
    ["Future Room (boardroom)",                "Hire rate",      "Hire rate", "1 × 4 hrs incl.", "1 × 4 hrs incl."],
    ["Spark Studio (meeting)",                 "Hire rate",      "Hire rate", "Hire rate", "Hire rate"],
    ["Spark Studio (podcast)",                 "Hire rate",      "Hire rate", "1 × 2 hrs/yr incl.", "1 × 2 hrs/yr incl."],
  ]},
  { group: "Events & community", rows: [
    ["HOC events per month",                   "Up to 4",        "Up to 2", "Unlimited", "Unlimited"],
    ["Priority event booking",                 "—",              "—", "✓", "✓"],
    ["Investor / idea exchange",               "—",              "—", "✓", "✓"],
    ["Creative Concierge introductions",       "✓",              "✓", "✓", "✓"],
  ]},
  { group: "Facilities & amenities", rows: [
    ["Wi-Fi",                                   "✓",              "✓", "✓", "✓"],
    ["Unlimited tea and coffee",               "✓",              "✓", "✓", "✓"],
    ["Shower and bathroom",                     "✓",              "✓", "✓", "✓"],
    ["Light admin support",                     "✓",              "✓", "✓", "✓"],
    ["Printing",                                "—",              "✓", "✓", "✓"],
  ]},
  { group: "Honesty bar credits", note: "Reset monthly, don't roll over.", rows: [
    ["Food credits",                            "—",              "1/mo", "2/mo", "2/mo"],
    ["Soft drink credits",                      "—",              "1/mo", "2/mo", "2/mo"],
    ["Beer / wine credits",                     "—",              "1/mo", "2/mo", "2/mo"],
    ["Additional purchases at cost",           "✓",              "✓", "✓", "✓"],
  ]},
  { group: "Term & pricing", rows: [
    ["Minimum term",                            "Monthly rolling","Monthly rolling", "12 months", "As agreed"],
    ["Shared membership option",                "—",              "✓", "—", "—"],
    ["Invite only",                             "—",              "—", "—", "✓"],
  ]},
];

const JOURNAL = [
  { feat: true, topic: "Community", date: "Issue Nº 14", readTime: "6 min", title: "How the Creative Concierge gets the right strangers in the same room.", deck: "A conversation about how introductions happen at the House — and why the best ones rarely arrive by email.", author: "Dispatch / by The Editors", caption: "members lounge / dusk", hue: 28, img: IMG.concierge },
  { topic: "Programming",    date: "Apr 22", readTime: "4 min", title: "Inside the Spring '26 events calendar.", deck: "Forty evenings, four formats, one rule: leave knowing someone you didn't.", author: "by The Programming Desk", caption: "talk / front row", hue: 22, img: IMG.coworkingNeon },
  { topic: "Member Story",   date: "Apr 09", readTime: "7 min", title: "From founder's desk to the Top Floor — a year inside the House.", deck: "What changes when your studio comes with a community attached.", author: "by Amara Vance", caption: "portrait / studio", hue: 200, img: IMG.quietNook },
  { topic: "In Conversation", date: "Mar 28", readTime: "5 min", title: "On the kind of networking that doesn't feel like networking.", deck: "Two members on slow introductions, long lunches and the work that follows.", author: "by The Editors", caption: "portrait / window", hue: 30, img: IMG.welcomeDesk },
  { topic: "Kitchen",        date: "Mar 14", readTime: "3 min", title: "Behind the honesty bar: what we stock, and why.", deck: "A short field guide to the shelf — from the morning roast to the evening pour.", author: "by The Kitchen", caption: "honesty bar / closeup", hue: 36, img: IMG.loungeCafe },
  { topic: "The Space",      date: "Feb 27", readTime: "5 min", title: "Designing the Future Room: walnut, light, and one long decision.", deck: "How the boardroom got its proportions — and why the table is the shape it is.", author: "by The House", caption: "boardroom / detail", hue: 22, img: IMG.coworkingDesks },
  { topic: "Wellness",       date: "Feb 12", readTime: "4 min", title: "Dawn classes, and the case for starting before the inbox.", deck: "The members who get to the mat before the meetings — and what it does for the day.", author: "by The Wellness Desk", caption: "studio / dawn", hue: 36, img: IMG.loungeTeal },
  { topic: "Partnerships",   date: "Jan 30", readTime: "4 min", title: "The makers we keep on speed-dial across the island.", deck: "Photographers, printers, fixers — the bench the Concierge calls first.", author: "by The Concierge", caption: "workshop / hands", hue: 18, img: IMG.sparkStudio },
  { topic: "Member Story",   date: "Jan 16", readTime: "6 min", title: "Three founders, one boardroom, and the deal that started at the bar.", deck: "How a Tuesday-night pour turned into a Thursday-morning term sheet.", author: "by Reuben Okafor", caption: "honesty bar / dusk", hue: 26, img: IMG.neonBrilliance },
];

const JOURNAL_TOPICS = ["All", "Community", "Member Story", "Programming", "The Space", "Kitchen", "Wellness", "Partnerships", "In Conversation"];

const TICKER = [
  "Creativity · Community · Collaboration · Communication",
  "A house, not a workspace",
  "Open dawn until late, seven days",
  "Now welcoming Spring 2026",
  "By referral. Capped. Considered.",
];

const HERO_COPIES = {
  default: {
    roman: "Not just a place to work — a house built around",
    italic: "four things",
    suffix: " we believe in completely.",
    sub: "Creativity. Community. Collaboration. Communication. A premium curated professional environment on Jersey's south coast — a community that elevates standards, supports collaboration, and strengthens networks."
  },
  bold: {
    roman: "Where", italic: "champions", suffix: " come to keep going.",
    sub: "A private members' club for the most committed creatives, entrepreneurs and makers in Jersey and beyond. By referral, considered, capped."
  },
  poetic: {
    roman: "Among the few who", italic: "begin again", suffix: " every morning.",
    sub: "Not a gym. Not a hotel. A house for the long game — built around the people who refuse to coast."
  }
};

/* ---- House facts (The Space + Contact) ---- */
const HOUSE_FACTS = [
  ["Rooms", "Four, each with a job"],
  ["Floors", "Three, plus the Top Floor"],
  ["Hours", "Dawn until late · 7 days"],
  ["Address", "3 St Andrews Studios, Charing Cross"],
];

const HOURS = [
  ["Monday – Friday", "06:30 — 23:00"],
  ["Saturday", "07:30 — 23:00"],
  ["Sunday", "08:00 — 20:00"],
  ["Bank holidays", "08:00 — 18:00"],
];

/* ---- Contact departments ---- */
const DEPARTMENTS = [
  { name: "Membership", desc: "Applications, tiers, and the founding cohort.", email: "join@ourhouseofchampions.com" },
  { name: "Concierge", desc: "Room bookings, introductions and member requests.", email: "concierge@ourhouseofchampions.com" },
  { name: "Events & partnerships", desc: "Hosting at the House, collaborations and press.", email: "events@ourhouseofchampions.com" },
  { name: "Press", desc: "Interviews, imagery and the Journal.", email: "press@ourhouseofchampions.com" },
];

/* ---- Apply / Viewing process ---- */
const PROCESS = [
  { num: "01", name: "Apply", body: "Tell us who you are and what you're building. A short form — a few minutes, no trick questions." },
  { num: "02", name: "Conversation", body: "We read every application and reply within fourteen days. The right fit gets a coffee and a walk-through, not a sales pitch." },
  { num: "03", name: "Welcome", body: "Accepted members choose a tier, settle the founding rate, and get a key, a calendar and a Concierge introduction." },
];

const VIEWING_INCLUDES = [
  ["Length", "About 30 minutes"],
  ["Host", "A founder or the Concierge"],
  ["You'll see", "All four rooms · the honesty bar · the Top Floor"],
  ["No pressure", "A walk-through, not a sales pitch"],
];

const FAQ = [
  ["Is membership really capped?", "Yes. We cap each tier to keep the House the right size for the rooms and the calendar. When a tier is full, we keep a considered waitlist and move in order."],
  ["What does \u2018by referral\u2019 mean in practice?", "A member can put your name forward, which moves your application along faster. It isn't required — plenty of members arrive cold. We simply read those applications with the same care."],
  ["Can I share a membership?", "Studio membership can be shared between two named people on a single base. House and Collective are individual. The Concierge can talk you through the detail."],
  ["What's the early-bird rate?", "Founding-cohort pricing, held for members who join before the doors fully open in Spring 2026. It's locked for the life of your membership, not just the first year."],
  ["Do I have to commit for a year?", "Atelier and Studio are monthly rolling — leave with a month's notice. House is a twelve-month term. Collective terms are agreed individually."],
  ["Can I bring guests?", "Members can bring guests by arrangement, and guests are welcome at most events. The Future Room and Spark Studio are bookable for client sessions on your allowance or at the hire rate."],
];

Object.assign(window, {
  PAGES, IMG, SPACES, FEATURES, TIERS, COMPARISON, JOURNAL, JOURNAL_TOPICS, TICKER, HERO_COPIES,
  HOUSE_FACTS, HOURS, DEPARTMENTS, PROCESS, VIEWING_INCLUDES, FAQ
});
