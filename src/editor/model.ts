import type { LucideIcon } from "lucide-react";

export type Device = "desktop" | "tablet" | "mobile";
export type Mode = "page" | "header" | "footer" | "single" | "archive" | "popup";
export type Tab = "content" | "style" | "advanced";
export type Kind = "container" | "heading" | "text" | "button" | "image" | "form" | "iconbox" | "testimonial" | "nav" | "logo";
export type Align = "left" | "center" | "right";
export type Motion = "none" | "fade" | "up" | "zoom";
export type Family = "sans" | "display";
export type InsertKind = "heading" | "text" | "button" | "image" | "spacer" | "divider";

export type NodeState = {
  text: string;
  sub: string;
  href: string;
  color: string;
  bg: string;
  size: number;
  weight: number;
  align: Align;
  pad: number;
  margin: number;
  radius: number;
  shadow: number;
  border: number;
  tracking: number;
  gap: number;
  motion: Motion;
  family: Family;
  upper: boolean;
  cssNote: string;
  cssClass: string;
  dynamic: string | null;
  showDesktop: boolean;
  showTablet: boolean;
  showMobile: boolean;
  z: number;
};

export type Field = {
  id: string;
  label: string;
  type: "text" | "email" | "select";
  placeholder: string;
};

export type Insert = {
  id: string;
  parent: string;
  kind: InsertKind;
  text: string;
};

export type Snap = {
  patches: Record<string, Partial<NodeState>>;
  order: string[];
  hidden: string[];
  globals: string[];
  fields: Field[];
  inserts: Insert[];
  docTitle: string;
  layout: "theme" | "canvas";
  pageBg: string;
};

export type Meta = {
  label: string;
  kind: Kind;
  pro?: boolean;
};

export const C = {
  accent: "#92003b",
  accentInk: "#fff7f8",
  ink: "#1b1e24",
  muted: "#6f675f",
  cream: "#f4f1ec",
  card: "#fffcfa",
  paper: "#f3f1ee",
  line: "#d3cdc6",
};

export const TAGS: Record<string, string> = {
  "Site Title": "Harbor & Co.",
  "Post Title": "The house that keeps the wind out",
  "Current Date": "October 28, 2026",
  "Author Name": "Amira Solano",
  "ACF · Location": "Comporta, Portugal",
};

export const PAGES: { id: Mode; group: string; label: string; sub: string; condition: string }[] = [
  { id: "page", group: "Pages", label: "Home", sub: "Page", condition: "Inside the theme header and footer" },
  { id: "header", group: "Theme Builder", label: "Site header", sub: "Header", condition: "Entire site" },
  { id: "footer", group: "Theme Builder", label: "Site footer", sub: "Footer", condition: "Entire site" },
  { id: "single", group: "Theme Builder", label: "The quiet house", sub: "Single", condition: "All posts" },
  { id: "archive", group: "Theme Builder", label: "Journal", sub: "Archive", condition: "Journal archive" },
  { id: "popup", group: "Popup Builder", label: "Exit intent", sub: "Popup", condition: "Exit intent · on leave" },
];

const base = (partial: Partial<NodeState> & Pick<NodeState, "text">): NodeState => ({
  sub: "",
  href: "",
  color: C.ink,
  bg: "transparent",
  size: 16,
  weight: 500,
  align: "left",
  pad: 0,
  margin: 0,
  radius: 0,
  shadow: 0,
  border: 0,
  tracking: 0,
  gap: 20,
  motion: "none",
  family: "sans",
  upper: false,
  cssNote: "",
  cssClass: "",
  dynamic: null,
  showDesktop: true,
  showTablet: true,
  showMobile: true,
  z: 0,
  ...partial,
});

export const DEFAULTS: Record<string, NodeState> = {
  logo: base({ text: "Harbor & Co.", size: 22, weight: 600, family: "display" }),
  nav: base({ text: "Work, Approach, Journal, Contact", size: 14, weight: 500, color: C.ink }),
  "header-btn": base({
    text: "Start a project",
    href: "#visit",
    bg: C.accent,
    color: C.accentInk,
    radius: 6,
    size: 14,
    weight: 600,
    pad: 12,
  }),
  header: base({ text: "Header", bg: C.card, pad: 8 }),
  hero: base({ text: "Hero", bg: C.card, pad: 36, gap: 28 }),
  "hero-col-1": base({ text: "Column", bg: "transparent", gap: 16 }),
  "hero-col-2": base({ text: "Column", bg: "transparent" }),
  "hero-kicker": base({
    text: "Architecture · Est. 1998",
    size: 12,
    weight: 700,
    upper: true,
    tracking: 0.16,
    color: C.accent,
  }),
  "hero-title": base({
    text: "Houses with a quieter kind of luxury",
    size: 44,
    weight: 600,
    family: "display",
    color: C.ink,
  }),
  "hero-text": base({
    text: "Harbor & Co. designs coastal homes, small hotels, and the rooms people remember — material first, never loud.",
    size: 16,
    weight: 400,
    color: C.muted,
  }),
  "hero-primary": base({
    text: "Start a project",
    href: "#visit",
    bg: C.accent,
    color: C.accentInk,
    radius: 6,
    size: 15,
    weight: 600,
    pad: 14,
  }),
  "hero-secondary": base({
    text: "View the journal",
    href: "#journal",
    bg: "transparent",
    color: C.ink,
    radius: 6,
    size: 15,
    weight: 600,
    pad: 14,
    border: 1,
  }),
  "hero-image": base({ text: "Coastal house in late light", radius: 14, shadow: 2 }),
  features: base({ text: "Features", bg: C.paper, pad: 32, gap: 18 }),
  "feat-1": base({
    text: "Material library",
    sub: "Plaster, oak, limestone, and bronze, held to a single calm palette.",
    radius: 12,
    bg: C.card,
    shadow: 1,
  }),
  "feat-2": base({
    text: "Site craft",
    sub: "Buildings that sit in the dune or the block as if they had always been there.",
    radius: 12,
    bg: C.card,
    shadow: 1,
  }),
  "feat-3": base({
    text: "Aftercare",
    sub: "We stay through furnishing, the first winter, and the slow changes of living.",
    radius: 12,
    bg: C.card,
    shadow: 1,
  }),
  quotes: base({ text: "Testimonials", bg: C.card, pad: 36, gap: 18 }),
  "quote-1": base({
    text: "They edited the house until it felt inevitable.",
    sub: "Amira S. · Proprietor, The Dune Rooms",
    size: 32,
    family: "display",
    weight: 500,
  }),
  "quote-2": base({
    text: "A palette we still notice three years later.",
    sub: "Leo M. · Client, Comporta",
    size: 18,
    family: "display",
  }),
  "quote-3": base({
    text: "The only studio that talked about silence.",
    sub: "N. Okonkwo · Editor",
    size: 18,
    family: "display",
  }),
  cta: base({ text: "Call to Action", bg: C.ink, color: C.cream, pad: 32, gap: 24, radius: 0 }),
  "cta-title": base({
    text: "Book a site visit",
    size: 36,
    family: "display",
    weight: 600,
    color: C.cream,
  }),
  "cta-text": base({
    text: "Tell us about the place. We reply within two working days.",
    size: 16,
    color: "#d9d3cb",
    weight: 400,
  }),
  "cta-form": base({
    text: "Site visit",
    bg: C.card,
    color: C.ink,
    radius: 14,
    pad: 22,
    shadow: 2,
    gap: 12,
  }),
  "cta-button": base({
    text: "Request a visit",
    bg: C.accent,
    color: C.accentInk,
    radius: 6,
    size: 15,
    weight: 600,
    pad: 12,
  }),
  footer: base({
    text: "A practice for houses and the rituals between them.",
    sub: "Lisbon · Tangier · Remote",
    bg: "#16181d",
    color: C.cream,
    pad: 28,
    gap: 18,
  }),
  "footer-links": base({ text: "Work, Approach, Journal, Contact", color: C.cream, size: 14 }),
  popup: base({ text: "Exit intent", bg: C.card, radius: 16, pad: 28, shadow: 3, gap: 12 }),
  "popup-title": base({ text: "Before you leave", size: 32, family: "display", weight: 600 }),
  "popup-text": base({
    text: "A short note on materials, twice a season. No noise.",
    color: C.muted,
    size: 15,
  }),
  "popup-form": base({ text: "Exit note", bg: "transparent", gap: 10 }),
  "popup-button": base({
    text: "Send the note",
    bg: C.accent,
    color: C.accentInk,
    radius: 6,
    size: 15,
    weight: 600,
    pad: 12,
  }),
  single: base({ text: "Single post", bg: C.card, pad: 36, gap: 18 }),
  "single-title": base({
    text: "The house that keeps the wind out",
    size: 44,
    family: "display",
    weight: 600,
    dynamic: "Post Title",
  }),
  "single-image": base({ text: "Featured image", radius: 14, shadow: 1 }),
  "single-content": base({
    text: "The house sits low, the way the dune sits low. We kept the windward wall thick, the leeward rooms open, and refused a third material.\n\nWhat remains is limestone, oak, and a bronze rail that warms in the afternoon. The rest was edited out.",
    size: 17,
    color: "#3c434c",
    weight: 400,
  }),
  author: base({
    text: "Amira Solano",
    sub: "Partner · Harbor & Co. She leads material studies and the first winter on site.",
    bg: C.paper,
    radius: 12,
    pad: 16,
  }),
  archive: base({ text: "Archive", bg: C.card, pad: 32, gap: 16 }),
  "archive-title": base({ text: "Journal", size: 42, family: "display", weight: 600 }),
  loop: base({ text: "Loop Grid", bg: "transparent", gap: 14 }),
};

export const META: Record<string, Meta> = {
  logo: { label: "Site Logo", kind: "logo", pro: true },
  nav: { label: "Nav Menu", kind: "nav", pro: true },
  "header-btn": { label: "Button", kind: "button" },
  header: { label: "Header", kind: "container", pro: true },
  hero: { label: "Hero", kind: "container" },
  "hero-col-1": { label: "Container", kind: "container" },
  "hero-col-2": { label: "Container", kind: "container" },
  "hero-kicker": { label: "Heading", kind: "heading" },
  "hero-title": { label: "Heading", kind: "heading" },
  "hero-text": { label: "Text Editor", kind: "text" },
  "hero-primary": { label: "Button", kind: "button" },
  "hero-secondary": { label: "Button", kind: "button" },
  "hero-image": { label: "Image", kind: "image" },
  features: { label: "Features", kind: "container" },
  "feat-1": { label: "Image Box", kind: "iconbox" },
  "feat-2": { label: "Image Box", kind: "iconbox" },
  "feat-3": { label: "Image Box", kind: "iconbox" },
  quotes: { label: "Testimonials", kind: "container" },
  "quote-1": { label: "Testimonial", kind: "testimonial", pro: true },
  "quote-2": { label: "Testimonial", kind: "testimonial", pro: true },
  "quote-3": { label: "Testimonial", kind: "testimonial", pro: true },
  cta: { label: "Call to Action", kind: "container", pro: true },
  "cta-title": { label: "Heading", kind: "heading" },
  "cta-text": { label: "Text Editor", kind: "text" },
  "cta-form": { label: "Form", kind: "form", pro: true },
  "cta-button": { label: "Button", kind: "button" },
  footer: { label: "Footer", kind: "container", pro: true },
  "footer-links": { label: "Nav Menu", kind: "nav", pro: true },
  popup: { label: "Popup", kind: "container", pro: true },
  "popup-title": { label: "Heading", kind: "heading" },
  "popup-text": { label: "Text Editor", kind: "text" },
  "popup-form": { label: "Form", kind: "form", pro: true },
  "popup-button": { label: "Button", kind: "button" },
  single: { label: "Single", kind: "container", pro: true },
  "single-title": { label: "Post Title", kind: "heading", pro: true },
  "single-image": { label: "Featured Image", kind: "image", pro: true },
  "single-content": { label: "Post Content", kind: "text", pro: true },
  author: { label: "Author Box", kind: "testimonial", pro: true },
  archive: { label: "Archive", kind: "container", pro: true },
  "archive-title": { label: "Archive Title", kind: "heading", pro: true },
  loop: { label: "Loop Grid", kind: "container", pro: true },
};

export const MODE_SELECTION: Record<Mode, string> = {
  page: "cta-form",
  header: "nav",
  footer: "footer",
  single: "single-title",
  archive: "loop",
  popup: "popup",
};

export const NODE_MODE: Record<string, Mode> = {
  logo: "header",
  nav: "header",
  "header-btn": "header",
  header: "header",
  footer: "footer",
  "footer-links": "footer",
  popup: "popup",
  "popup-title": "popup",
  "popup-text": "popup",
  "popup-form": "popup",
  "popup-button": "popup",
  single: "single",
  "single-title": "single",
  "single-image": "single",
  "single-content": "single",
  author: "single",
  archive: "archive",
  "archive-title": "archive",
  loop: "archive",
};

export const REORDER = new Set(["hero", "features", "quotes", "cta"]);
export const CONTAINERS = new Set([
  "hero",
  "hero-col-1",
  "hero-col-2",
  "features",
  "quotes",
  "cta",
  "popup",
  "single",
  "archive",
  "footer",
  "loop",
]);

export function linkedButton(id: string) {
  if (id === "cta-form") return "cta-button";
  if (id === "popup-form") return "popup-button";
  return null;
}

export function getNode(patches: Record<string, Partial<NodeState>>, id: string): NodeState {
  return { ...DEFAULTS[id], ...patches[id] };
}

export function resolveText(node: NodeState) {
  if (node.dynamic && TAGS[node.dynamic]) return TAGS[node.dynamic];
  return node.text;
}

export function hiddenOn(node: NodeState, device: Device) {
  if (device === "desktop") return !node.showDesktop;
  if (device === "tablet") return !node.showTablet;
  return !node.showMobile;
}

export function shadowCss(level: number) {
  if (level <= 0) return "none";
  if (level === 1) return "0 8px 20px rgb(28 24 20 / 0.08)";
  if (level === 2) return "0 14px 34px rgb(28 24 20 / 0.12)";
  return "0 22px 54px rgb(28 24 20 / 0.2)";
}

export type WidgetDef = {
  id: string;
  name: string;
  icon: string;
  pro?: boolean;
  cat: "Basic" | "Pro" | "Theme" | "Woo";
};

export const WIDGETS: WidgetDef[] = [
  { id: "container", name: "Container", icon: "columns", cat: "Basic" },
  { id: "heading", name: "Heading", icon: "heading", cat: "Basic" },
  { id: "image", name: "Image", icon: "image", cat: "Basic" },
  { id: "text", name: "Text Editor", icon: "type", cat: "Basic" },
  { id: "button", name: "Button", icon: "button", cat: "Basic" },
  { id: "video", name: "Video", icon: "play", cat: "Basic" },
  { id: "spacer", name: "Spacer", icon: "spacer", cat: "Basic" },
  { id: "divider", name: "Divider", icon: "divider", cat: "Basic" },
  { id: "icon", name: "Icon", icon: "star", cat: "Basic" },
  { id: "maps", name: "Google Maps", icon: "pin", cat: "Basic" },
  { id: "posts", name: "Posts", icon: "posts", cat: "Pro", pro: true },
  { id: "portfolio", name: "Portfolio", icon: "grid", cat: "Pro", pro: true },
  { id: "form", name: "Form", icon: "form", cat: "Pro", pro: true },
  { id: "slides", name: "Slides", icon: "slides", cat: "Pro", pro: true },
  { id: "price-table", name: "Price Table", icon: "table", cat: "Pro", pro: true },
  { id: "cta", name: "Call to Action", icon: "mega", cat: "Pro", pro: true },
  { id: "flip-box", name: "Flip Box", icon: "flip", cat: "Pro", pro: true },
  { id: "gallery", name: "Gallery", icon: "images", cat: "Pro", pro: true },
  { id: "nav-menu", name: "Nav Menu", icon: "menu", cat: "Pro", pro: true },
  { id: "mega-menu", name: "Mega Menu", icon: "mega-menu", cat: "Pro", pro: true },
  { id: "countdown", name: "Countdown", icon: "timer", cat: "Pro", pro: true },
  { id: "hotspot", name: "Hotspot", icon: "hotspot", cat: "Pro", pro: true },
  { id: "lottie", name: "Lottie", icon: "spark", cat: "Pro", pro: true },
  { id: "animated-headline", name: "Animated Headline", icon: "quote", cat: "Pro", pro: true },
  { id: "testimonial", name: "Testimonial", icon: "quote", cat: "Pro", pro: true },
  { id: "site-logo", name: "Site Logo", icon: "logo", cat: "Theme", pro: true },
  { id: "post-title", name: "Post Title", icon: "heading2", cat: "Theme", pro: true },
  { id: "post-content", name: "Post Content", icon: "align", cat: "Theme", pro: true },
  { id: "author-box", name: "Author Box", icon: "user", cat: "Theme", pro: true },
  { id: "breadcrumbs", name: "Breadcrumbs", icon: "route", cat: "Theme", pro: true },
  { id: "loop-grid", name: "Loop Grid", icon: "loop", cat: "Theme", pro: true },
  { id: "featured-image", name: "Featured Image", icon: "image-plus", cat: "Theme", pro: true },
  { id: "post-info", name: "Post Info", icon: "info", cat: "Theme", pro: true },
  { id: "product", name: "Product", icon: "bag", cat: "Woo", pro: true },
  { id: "add-to-cart", name: "Add to Cart", icon: "cart", cat: "Woo", pro: true },
  { id: "product-price", name: "Product Price", icon: "price", cat: "Woo", pro: true },
  { id: "cart", name: "Cart", icon: "basket", cat: "Woo", pro: true },
  { id: "checkout", name: "Checkout", icon: "card", cat: "Woo", pro: true },
  { id: "menu-cart", name: "Menu Cart", icon: "store", cat: "Woo", pro: true },
];

export const WIDGET_FOCUS: Record<string, string> = {
  container: "hero",
  heading: "hero-title",
  image: "hero-image",
  text: "hero-text",
  button: "hero-primary",
  video: "hero-image",
  spacer: "hero",
  divider: "features",
  icon: "feat-1",
  maps: "cta",
  posts: "loop",
  portfolio: "features",
  form: "cta-form",
  slides: "hero",
  "price-table": "features",
  cta: "cta",
  "flip-box": "feat-1",
  gallery: "features",
  "nav-menu": "nav",
  "mega-menu": "nav",
  countdown: "cta",
  hotspot: "hero-image",
  lottie: "hero-image",
  "animated-headline": "hero-title",
  testimonial: "quote-1",
  "site-logo": "logo",
  "post-title": "single-title",
  "post-content": "single-content",
  "author-box": "author",
  breadcrumbs: "hero-kicker",
  "loop-grid": "loop",
  "featured-image": "single-image",
  "post-info": "author",
  product: "feat-1",
  "add-to-cart": "cta-button",
  "product-price": "hero-kicker",
  cart: "cta-form",
  checkout: "cta-form",
  "menu-cart": "header-btn",
};

export const INSERTABLE: Record<string, InsertKind> = {
  heading: "heading",
  text: "text",
  button: "button",
  image: "image",
  spacer: "spacer",
  divider: "divider",
};

export const DEFAULT_FAVS = ["heading", "image", "button", "form"];

export const PHOTOS: Record<string, string> = {
  "hero-image": "/studio/hero.jpg",
  "single-image": "/studio/hero.jpg",
  "feat-1": "/studio/materials.jpg",
  "feat-2": "/studio/path.jpg",
  "feat-3": "/studio/stair.jpg",
};

export const POSTS = [
  { title: "Limewashed walls", img: "/studio/materials.jpg", meta: "Materials" },
  { title: "A path through the dune", img: "/studio/path.jpg", meta: "Sites" },
  { title: "The bronze rail", img: "/studio/stair.jpg", meta: "Detail" },
  { title: "Notes from the table", img: "/studio/still.jpg", meta: "Studio" },
  { title: "The quiet house", img: "/studio/hero.jpg", meta: "Houses" },
  { title: "After the first winter", img: "/studio/still.jpg", meta: "Aftercare" },
];

export const TEMPLATES = [
  { id: "hero", name: "Split hero", kind: "Block" },
  { id: "features", name: "Feature trio", kind: "Block" },
  { id: "quotes", name: "Quote wall", kind: "Block" },
  { id: "visit", name: "Site-visit form", kind: "Block" },
  { id: "loop", name: "Journal loop", kind: "Block" },
  { id: "home", name: "Harbor home", kind: "Page" },
  { id: "about", name: "Studio about", kind: "Page" },
];

export const GUIDE = {
  overview:
    "A desktop Elementor-style editor, shown as one studio view: widgets stay open on the left, the live page sits in the center, and the selected element’s inspector stays open on the right. In the real product those two panels share one dock; here they are open together so a designer can read the whole system at once. The page under construction is Harbor & Co., a coastal architecture studio.",
  panels: [
    { n: "1", title: "Top bar", body: "Logo, page / template switcher, device modes, preview, navigator, history, undo, template library, Theme Builder, and Publish." },
    { n: "2", title: "Widget panel", body: "Search, Favorites, then Basic, Pro, Theme Elements, and WooCommerce. Star a widget to pin it. Drag Heading, Text, Image, Button, Spacer, or Divider onto a container." },
    { n: "3", title: "Canvas", body: "Pasteboard with the page. Containers show dashed guides. Hover any element for its handle; the Form inside the call to action starts selected." },
    { n: "4", title: "Inspector", body: "Content, Style, and Advanced. Typography, color, spacing, radius, shadow, motion, responsive visibility, and custom CSS. The database icon beside a text field is Dynamic Tags." },
    { n: "5", title: "Navigator", body: "Floating structure tree. Click a row to select. The eye hides a widget on the canvas." },
    { n: "6", title: "Theme & Popup Builder", body: "The page menu switches Header, Footer, Single, Archive, and an exit-intent popup. Locked header and footer chips on Home open those templates." },
    { n: "7", title: "Responsive peek", body: "Desktop keeps a small mobile frame at the lower right. Tablet and Mobile in the top bar refit the canvas; Advanced can hide the selection per device." },
  ],
  states: [
    "Selected: burgundy outline and a handle. Click the pasteboard to open Page settings.",
    "Hover: a lighter outline and the element name, Elementor-style.",
    "Drag: pull a section by the grip on its handle, or drop a basic widget into a container.",
    "Responsive: Desktop, Tablet (768), and Mobile (390). Hidden-on-device leaves a dashed bar so you can select it again.",
    "Preview: chrome drops away. Exit preview returns to the editor.",
    "Global: Advanced → Save as global widget. It appears under Global in the left panel.",
  ],
};

export const IMAGE_PROMPT = `Ultra-realistic product screenshot of the Elementor Pro page builder in 2026, 1440 pixels wide, light interface with a dark charcoal widget sidebar. Flat, crisp, professional SaaS UI, not a sketch. Top white bar: rounded burgundy #92003B square with a white geometric E, the word Elementor, a small Pro pill, page switcher “Home — Harbor & Co.”, centered device icons with Desktop active, preview eye, navigator layers icon, history, undo and redo, template-library folder, Theme Builder menu, and a burgundy Publish split button. Left sidebar #121418 titled Elements, search “Search Widget…”, a Favorites row starring Heading, Image, Button, and Form, then accordions Basic, Pro, Theme Elements, and WooCommerce. Widgets are fine line icons with labels; Pro widgets carry a tiny PRO tag. Center warm-gray pasteboard #E6E3DE holding a white page for an architecture studio. Locked theme header reads Harbor & Co. with a nav and burgundy button. Hero is two columns: a Fraunces headline “Houses with a quieter kind of luxury”, a short paragraph, burgundy and ghost buttons, and a sunlit limestone coastal house photograph. Below, three photo cards (plaster interior, dune path, limestone stair) and testimonial quotes. A near-black call-to-action band holds a white form card. The Form widget is selected with a 2px #92003B outline and a floating handle labeled Form PRO. Right white inspector titled Form, tabs Content, Style, Advanced, showing the form name with a dynamic-tags database icon, field repeater, typography, color swatch #92003B, spacing sliders, border, shadow, motion, and custom CSS. A floating Navigator lists the page tree with Form highlighted. A small mobile preview peeks at the lower right. Subtle shadows, 8px radii, Inter for chrome, serif only inside the webpage. No browser chrome, no watermark, no extra windows.`;

export type IconMap = Record<string, LucideIcon>;
