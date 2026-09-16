/**
 * ============================================================================
 *  BIGPICTURE GRAPHICS — SITE DATA
 * ============================================================================
 *  This is the SINGLE SOURCE OF TRUTH for all editable content.
 *  Replace placeholder content here without touching UI components.
 *
 *  NOTE: All names, companies, and testimonials below are fictional
 *  placeholder content designed to make the site feel complete. Replace
 *  with real data when ready.
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * NAVIGATION
 * ------------------------------------------------------------------------- */
export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

/* ----------------------------------------------------------------------------
 * MARQUEE
 * ------------------------------------------------------------------------- */
export const marqueeItems = [
  "Graphic Design",
  "Branding",
  "Video Editing",
  "Digital Marketing",
  "Web Development",
  "Printing",
  "Social Media",
  "Creative Solutions",
] as const;

/* ----------------------------------------------------------------------------
 * PORTFOLIO
 *  - Replace `image` with your own asset path (e.g. "/portfolio/project-01.jpg")
 *  - Leave `image` empty to use the elegant auto-generated placeholder.
 *  - `size` controls masonry sizing: "lg" | "md" | "sm" | "wide" | "tall"
 * ------------------------------------------------------------------------- */
export type PortfolioCategory =
  | "Branding"
  | "Graphic Design"
  | "Digital"
  | "Video"
  | "Web"
  | "Print";

export interface PortfolioItem {
  id: string;
  image?: string;
  /** Tonal palette used for the procedural placeholder. */
  tone?: "ink" | "paper" | "vermilion" | "graphite" | "amber" | "olive";
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  description: string;
  link?: string;
  size: "lg" | "md" | "sm" | "wide" | "tall";
}

export const portfolio: PortfolioItem[] = [
  {
    id: "p01",
    image: "/images/branding-1.jpg",
    title: "King Coffee",
    client: "Nepal International Coffee Trading Company",
    category: "Branding",
    year: "2026-05-21",
    description:
      "A premium matte black and gold package featuring a modern, street-style portrait of a young King in sunglasses and a crown, set against the mountains for a regional touch.",
    tone: "vermilion",
    size: "lg",
  },
  {
    id: "p02",
    image: "/images/branding-3.jpg",
    title: "Shree Nanda Mithai Bhandar",
    client: "Shree Nanda Mithai Bhandar",
    category: "Branding",
    year: "2026-03-14",
    description:
      "A minimalist white bottle with a wood-grain cap and an earthy cream label, featuring a crimson mandala logo and a product image to merge traditional heritage with modern retail packaging.",
    tone: "paper",
    size: "md",
  },
  {
    id: "p03",
    image: "/images/branding-4.jpg",
    title: "NICTCO",
    client: "Nepal International Coffee Trading Company",
    category: "Branding",
    year: "2026-07-05",
    description:
      "An organic, earth-toned design featuring a warm brown and cream palette decorated with floating coffee beans, botanical coffee plant line art, a circular seal logo, and Himalayan mountain peaks.",
    tone: "olive",
    size: "lg",
  },
  {
    id: "p04",
    image: "/images/graphic-ddesign-1.jpg",
    title: "Wireless Earbuds",
    client: "Gadget User",
    category: "Graphic Design",
    year: "2026-08-10",
    description:
      "A modern tech layout featuring a glowing orange gradient backdrop that spotlights glossy black earbuds and a matte charging case with an integrated numerical LED battery display.",
    tone: "amber",
    size: "md",
  },
  {
    id: "p05",
    image: "/images/graphic-design-2.jpg",
    title: "Pocket Gimbal Camera",
    client: "Gadget User",
    category: "Graphic Design",
    year: "2026-08-12",
    description:
      "A rugged tech advertisement showcasing a sleek, all-black pocket gimbal camera standing on dark, textured volcanic rocks against a moody blue background, complete with clean feature icons.",
    tone: "graphite",
    size: "md",
  },
  {
    id: "p06",
    image: "/images/graphic-design-3.jpg",
    title: "Design Services Campaign",
    client: "BPG",
    category: "Graphic Design",
    year: "2026-09-02",
    description:
      "A futuristic, tech-forward ad featuring a boy wearing a VR headset displaying the word DESIGN, surrounded by vibrant neon floating capsules that highlight our services against a deep red background.",
    tone: "vermilion",
    size: "md",
  },
  {
    id: "p07",
    image: "/images/print-1.jpg",
    title: "Jalabinayak Community Forest",
    client: "Jalabinayak Community Forest Research & Retreat Centre",
    category: "Print",
    year: "2026-05-11",
    description:
      "A dual-sided, heritage-inspired flyer pairing a dramatic golden-hour landscape poster for an event celebration with a structured, vintage parchment-style itinerary detailing equestrian packages.",
    tone: "amber",
    size: "wide",
  },
  {
    id: "p08",
    image: "/images/print-2.jpg",
    title: "Promotional School Calendar",
    client: "Gokarneshwor Light Academy",
    category: "Print",
    year: "2025-05-10",
    description:
      "A promotional school banner using a clean teal background to present realistic 3D wall and desk calendar mockups, enhanced by a decorative magnifying glass and bright yellow schedule pop-ups.",
    tone: "paper",
    size: "md",
  },
  {
    id: "p09",
    image: "/images/print-3.jpg",
    title: "Institutional Wall Calendar",
    client: "East Point Academy",
    category: "Print",
    year: "2025-05-24",
    description:
      "A structured institutional wall calendar pairing a prominent blue header and a large photographic graphic of the school grounds with a multi-month grid for programs and holidays.",
    tone: "ink",
    size: "md",
  },
];

export const portfolioCategories = [
  "All",
  "Branding",
  "Graphic Design",
  "Print",
] as const;

/* ----------------------------------------------------------------------------
 * SERVICES
 * ------------------------------------------------------------------------- */
export interface Service {
  number: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    number: "01",
    image: "/images/branding-5.jpg",
    title: "Branding",
    description:
      "Brand strategy, identity systems, logos and visual language. We build brands that hold up across every touchpoint — from the first business card to the tenth campaign.",
    tags: ["Strategy", "Identity", "Logo", "Guidelines"],
  },
  {
    number: "02",
    image: "/images/graphic-design-4.jpg",
    title: "Graphic Design",
    description:
      "Posters, social creatives, advertisements, brochures and marketing materials. Considered layout, confident typography, and a system behind every piece.",
    tags: ["Posters", "Social", "Advertising", "Print"],
  },
  {
    number: "03",
    image: "/images/video-2.jpg",
    title: "Video & Motion",
    description:
      "Video editing, promotional content, reels, motion graphics and social content. From a 15-second reel to a full brand film — paced, scored, and finished properly.",
    tags: ["Editing", "Motion", "Reels", "Promo"],
  },
  {
    number: "04",
    image: "/images/logo-2.jpg",
    title: "Digital Marketing",
    description:
      "Social media, campaigns, content strategy and digital advertising. Strategy first, creative second, metrics always — so the work earns its keep.",
    tags: ["Campaigns", "Content", "Strategy", "Ads"],
  },
  {
    number: "05",
    image: "/images/web-2.jpg",
    title: "Web Development",
    description:
      "Modern, responsive and high-performing websites. Built to load fast, read well, and look like the brand — not like a template.",
    tags: ["Websites", "Web Apps", "E-commerce", "SEO"],
  },
  {
    number: "06",
    image: "/images/print-4.jpg",
    title: "Printing",
    description:
      "Business cards, brochures, banners, posters, packaging and promotional materials. We handle the file, the finish, and the freight — so you don't have to.",
    tags: ["Cards", "Brochures", "Packaging", "Banners"],
  },
  {
    number: "07",
    image: "/images/graphic-design-6.jpg",
    title: "Social Media",
    description:
      "Creative social content designed to make brands stand out. Templates your team can run with, content that doesn't look like everyone else's.",
    tags: ["Content", "Templates", "Reels", "Stories"],
  },
  {
    number: "08",
    image: "/images/business-software.jpg",
    title: "Custom Solutions",
    description:
      "Ready-made software for hotels, restaurants and retail businesses. Use practical SaaS tools to strengthen daily operations, improve visibility and work with the power of a bigger company at an affordable rate.",
    tags: ["Hotels", "Restaurants", "Retail", "SaaS"],
  },
];

/* ----------------------------------------------------------------------------
 * WHY BIGPICTURE — Principles
 * ------------------------------------------------------------------------- */
export interface Principle {
  number: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "Think Big",
    description:
      "Ideas without unnecessary limits. We start from the ambition and work backwards to the execution — never the other way around.",
  },
  {
    number: "02",
    title: "Purpose First",
    description:
      "Every creative decision has a reason. If it doesn't serve the goal, it doesn't ship — no matter how good it looks on its own.",
  },
  {
    number: "03",
    title: "Business Minded",
    description:
      "Creative work connected to real goals — growth, recognition, conversion, loyalty. Beautiful work that also moves the numbers.",
  },
  {
    number: "04",
    title: "Detail Obsessed",
    description:
      "Because small details make big differences. The kerning matters. The corner radius matters. The paper weight matters. We notice.",
  },
  {
    number: "05",
    title: "One Creative Partner",
    description:
      "Design, digital, video and print in one place. One team, one vision, zero handoff friction between five different vendors.",
  },
  {
    number: "06",
    title: "Always Evolving",
    description:
      "Modern ideas, tools and technology. We treat our craft as a practice, not a recipe — and we keep learning on purpose.",
  },
];

/* ----------------------------------------------------------------------------
 * PROCESS
 * ------------------------------------------------------------------------- */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, the audience, the goals and the constraints. We listen first — to founders, to customers, to the category. No assumptions.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Develop the creative direction and strategy. Position the brand, lock the voice, set the rules — so every later decision has a clear answer.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Turn the idea into design, digital, video or print. The making phase — where craft meets intent, and the work starts to look like itself.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Launch and deliver the finished work across every channel it needs to live in. Files, formats, guidelines — everything the team needs to carry it forward.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Continue improving and evolving the brand. Iterate based on real-world signal — what's working, what isn't, what's next.",
  },
];

/* ----------------------------------------------------------------------------
 * ASSOCIATE PARTNERS
 *  Replace `logo` with a real SVG/PNG/WebP path (transparent background).
 * ------------------------------------------------------------------------- */
export interface Partner {
  id: string;
  logo?: string;
  name: string;
  description: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    id: "ptn-loophole",
    logo: "/loophole-infotech-logo.jpg",
    name: "Loophole Infotech",
    description:
      "A SaaS and software development company building powerful, practical business systems at an affordable rate for small businesses.",
    website: "https://www.loopholeinfotech.com/",
  },
];

/* ----------------------------------------------------------------------------
 * CLIENTS / TRUSTED BY
 *  Replace `logo` with a real asset.
 * ------------------------------------------------------------------------- */
export interface Client {
  id: string;
  logo?: string;
  name: string;
}

export const clients: Client[] = [
  { id: "c1", name: "Gokarneshwor Light Academy" },
  { id: "c2", name: "Gadget User" },
  { id: "c3", name: "Boju Ko Thakali" },
  { id: "c4", name: "Jalbinayak" },
  { id: "c5", name: "Hamro Local Mart" },
  { id: "c6", name: "Hillside Academy" },
  { id: "c7", name: "Green City Montessori" },
  { id: "c8", name: "East Point Academy" },
  { id: "c9", name: "Raithane Sekuwa & Restro" },
  { id: "c10", name: "Shree Nanda Mithai Bhandar" },
  { id: "c11", name: "NISAN" },
];

/* ----------------------------------------------------------------------------
 * TESTIMONIALS — Fictional placeholder content.
 *  Replace with real testimonials when ready.
 * ------------------------------------------------------------------------- */
export interface Testimonial {
  id: string;
  photo?: string;
  logo?: string;
  name: string;
  company: string;
  position: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    photo: "/images/logo-1.jpg",
    name: "Tek Chataut",
    company: "Gadget User",
    position: "Founder",
    quote:
      "BigPicture Graphics took our vague idea of a brand and turned it into something our customers genuinely connect with. The identity they built for us feels like it was always meant to exist — and that's the highest compliment we could give.",
  },
  {
    id: "t2",
    photo: "/images/gla-logo.jpg",
    name: "Saurya Nath Acharya",
    company: "Gokarneshwor Light Academy",
    position: "Founder",
    quote:
      "Big Picture Graphics Pvt. Ltd. has consistently delivered creative, professional, and high-quality designs for Gokarneshwor Light Academy. We truly appreciate their creativity, timely service, and attention to detail.",
  },
  {
    id: "t3",
    photo: "/images/logo-3.jpg",
    name: "Biki Kadel",
    company: "Boju Ko Bhanasa",
    position: "Founder",
    quote:
      "From the first conversation to the final delivery, every detail was considered. Working with BigPicture felt less like hiring an agency and more like adding a creative partner to our own team. We'll be working with them again.",
  },
];

/* ----------------------------------------------------------------------------
 * CREATIVE SHOWCASE — Floating visual cards
 * ------------------------------------------------------------------------- */
export interface ShowcaseCard {
  id: string;
  image: string;
  label: string;
  caption: string;
  tone: "ink" | "paper" | "vermilion" | "graphite" | "amber" | "olive";
  size: "sm" | "md" | "lg";
  depth: number; // parallax depth 0..1
}

export const showcaseCards: ShowcaseCard[] = [
  { id: "s1", image: "/images/web-1.png", label: "Website UI", caption: "Editorial web", tone: "ink", size: "lg", depth: 0.6 },
  { id: "s2", image: "/images/branding-1.jpg", label: "Branding", caption: "Identity system", tone: "vermilion", size: "md", depth: 0.9 },
  { id: "s3", image: "/images/graphic-design-2.jpg", label: "Poster", caption: "Print series", tone: "amber", size: "sm", depth: 0.3 },
  { id: "s4", image: "/images/branding-6.jpg", label: "Campaign", caption: "Campaign grid", tone: "paper", size: "md", depth: 0.75 },
  { id: "s5", image: "/images/print-1.jpg", label: "Packaging", caption: "Product design", tone: "olive", size: "sm", depth: 0.45 },
  { id: "s6", image: "/images/video-1.jpg", label: "Video", caption: "Motion frame", tone: "graphite", size: "md", depth: 1.0 },
  { id: "s7", image: "/images/graphic-ddesign-1.jpg", label: "Print", caption: "Editorial spread", tone: "ink", size: "sm", depth: 0.55 },
];

/* ----------------------------------------------------------------------------
 * CONTACT FORM — Options
 * ------------------------------------------------------------------------- */
export const projectTypes = [
  "Branding",
  "Graphic Design",
  "Video",
  "Digital Marketing",
  "Website",
  "Printing",
  "Social Media",
  "Other",
] as const;

export const budgetRanges = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,500",
  "$7,500 – $15,000",
  "$15,000+",
  "Prefer to discuss",
] as const;

/* ----------------------------------------------------------------------------
 * CONTACT INFO
 * ------------------------------------------------------------------------- */
export const contactInfo = {
  name: "Big Picture Graphics Pvt. Ltd.",
  email: "bigpicturegraphic@gmail.com",
  phoneNumbers: ["+977 9700003368"],
  pan: "622483631",
  address: "Chuchepati Marg, Ward 7, Kathmandu Metropolitan City, Bagmati 44602, Nepal",
  mapsUrl: "https://maps.google.com/?q=Big+Picture+Graphics+Pvt+Ltd,+Chuchepati,+Kathmandu",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/bigpicture_graphics/",
  facebook: "https://www.facebook.com/people/Bigpicturegraphics/61576689857705/",
};

/* ----------------------------------------------------------------------------
 * COMPANY
 * ------------------------------------------------------------------------- */
export const company = {
  name: "BigPicture Graphics",
  legalName: "BigPicture Graphics",
  tagline: "The Big Move for Your Brand's Picture.",
  positioning: "Complete digital solutions under one roof.",
  description:
    "BigPicture Graphics helps businesses transform ideas into powerful visual identities and digital experiences.",
  country: "Nepal",
  founded: "",
};
