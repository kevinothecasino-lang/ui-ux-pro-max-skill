// Central content for the Tralux marketing site.
// Keeping copy here makes the pages declarative and easy to re-theme.

export const site = {
  name: "Tralux",
  tagline: "Luxury, engineered.",
  description:
    "Tralux is a premium design and engineering studio crafting refined digital products for ambitious brands.",
  email: "tralux.info@gmail.com",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export const features = [
  {
    title: "Bespoke Identity",
    body: "Distinctive brand systems built from first principles — type, motion, and material in perfect tension.",
    kicker: "01",
  },
  {
    title: "Engineered Interfaces",
    body: "Production-grade front-ends that feel inevitable. Fast, accessible, and obsessively detailed.",
    kicker: "02",
  },
  {
    title: "Motion Design",
    body: "Choreographed micro-interactions that guide attention without ever getting in the way.",
    kicker: "03",
  },
  {
    title: "Design Systems",
    body: "Token-driven libraries that scale from a landing page to an entire product suite.",
    kicker: "04",
  },
  {
    title: "Art Direction",
    body: "A singular visual point of view, applied with restraint across every touchpoint.",
    kicker: "05",
  },
  {
    title: "Performance",
    body: "Sub-second loads and silky 60fps interactions, validated on real devices.",
    kicker: "06",
  },
] as const;


export const services = [
  {
    name: "Brand & Identity",
    body: "Naming, logo systems, type, and the full visual language that makes a brand unmistakable.",
    points: ["Brand strategy", "Visual identity", "Guidelines & assets"],
  },
  {
    name: "Product & Web",
    body: "Marketing sites, web apps, and design systems — from concept to a shipped, measurable result.",
    points: ["UX & UI design", "Front-end engineering", "Design systems"],
  },
  {
    name: "Motion & Story",
    body: "Narrative-led motion that turns a scroll into an experience, tuned for performance and access.",
    points: ["Interaction design", "Scroll choreography", "Prototyping"],
  },
] as const;

export const tiers = [
  {
    name: "Essential",
    price: "$700",
    cadence: "/ project",
    blurb: "A focused engagement for a single high-impact surface.",
    features: [
      "One landing or product page",
      "Custom design system seed",
      "2 rounds of revisions",
      "Front-end handoff",
    ],
    featured: false,
    contactOnly: false,
  },
  {
    name: "Signature",
    price: "$1,300",
    cadence: "/ project",
    blurb: "Our flagship engagement for a full marketing presence.",
    features: [
      "Multi-page site (up to 6)",
      "Complete design system",
      "Bespoke motion design",
      "Engineering build + QA",
      "Unlimited revisions",
    ],
    featured: true,
    contactOnly: false,
  },
  {
    name: "Monthly",
    price: "",
    cadence: "",
    blurb: "Flexible month-to-month retainer for ongoing design and engineering.",
    features: [
      "Ongoing design support",
      "Monthly sprint cycles",
      "Priority response",
      "Scales with your team",
    ],
    featured: false,
    contactOnly: true,
  },
] as const;

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A Signature engagement runs six to eight weeks end-to-end. Essential projects ship in two to three.",
  },
  {
    q: "Do you work with existing brands?",
    a: "Often. We can extend and elevate an existing identity, or build a new one from the ground up.",
  },
  {
    q: "What do you hand off?",
    a: "Production front-end code, a documented design system, and editable source for every asset.",
  },
  {
    q: "Can you work with our engineers?",
    a: "Yes. We integrate with in-house teams and tailor the handoff to your stack and workflow.",
  },
] as const;
