import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FolderOpen, A as PanelsTopLeft, B as LayoutGrid, C as Route, D as Plus, E as Quote, F as Minus, G as ImagePlus, H as Info, I as Menu, J as Heading, K as History, L as Megaphone, M as Newspaper, N as Monitor, O as Play, P as MonitorSmartphone, Q as GalleryHorizontal, R as MapPin, S as Search, T as RectangleHorizontal, U as Images, V as Layers, W as Image, X as GripVertical, Y as Heading1, Z as GalleryVerticalEnd, _ as SlidersHorizontal, a as Type, at as Crosshair, b as ShoppingBag, c as TextCursorInput, ct as Code, d as SwatchBook, dt as ChevronLeft, et as FlipHorizontal2, f as Store, ft as ChevronDown, g as Smartphone, h as Sparkles, ht as AlignLeft, i as Undo2, it as Database, j as Paintbrush, k as Pencil, l as TabletSmartphone, lt as CircleHelp, m as SquareDashed, mt as BadgeDollarSign, n as UserRound, nt as EyeOff, ot as CreditCard, p as Star, pt as Check, q as Hexagon, r as UnfoldVertical, rt as Ellipsis, s as Timer, st as Columns2, t as X, tt as Eye, u as Table2, ut as ChevronRight, v as ShoppingCart, w as Redo2, x as Settings2, y as ShoppingBasket, z as Lock } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C8K_3O7B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var C = {
	accent: "#92003b",
	accentInk: "#fff7f8",
	ink: "#1b1e24",
	muted: "#6f675f",
	cream: "#f4f1ec",
	card: "#fffcfa",
	paper: "#f3f1ee",
	line: "#d3cdc6"
};
var TAGS = {
	"Site Title": "Harbor & Co.",
	"Post Title": "The house that keeps the wind out",
	"Current Date": "October 28, 2026",
	"Author Name": "Amira Solano",
	"ACF · Location": "Comporta, Portugal"
};
var PAGES = [
	{
		id: "page",
		group: "Pages",
		label: "Home",
		sub: "Page",
		condition: "Inside the theme header and footer"
	},
	{
		id: "header",
		group: "Theme Builder",
		label: "Site header",
		sub: "Header",
		condition: "Entire site"
	},
	{
		id: "footer",
		group: "Theme Builder",
		label: "Site footer",
		sub: "Footer",
		condition: "Entire site"
	},
	{
		id: "single",
		group: "Theme Builder",
		label: "The quiet house",
		sub: "Single",
		condition: "All posts"
	},
	{
		id: "archive",
		group: "Theme Builder",
		label: "Journal",
		sub: "Archive",
		condition: "Journal archive"
	},
	{
		id: "popup",
		group: "Popup Builder",
		label: "Exit intent",
		sub: "Popup",
		condition: "Exit intent · on leave"
	}
];
var base = (partial) => ({
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
	...partial
});
var DEFAULTS = {
	logo: base({
		text: "Harbor & Co.",
		size: 22,
		weight: 600,
		family: "display"
	}),
	nav: base({
		text: "Work, Approach, Journal, Contact",
		size: 14,
		weight: 500,
		color: C.ink
	}),
	"header-btn": base({
		text: "Start a project",
		href: "#visit",
		bg: C.accent,
		color: C.accentInk,
		radius: 6,
		size: 14,
		weight: 600,
		pad: 12
	}),
	header: base({
		text: "Header",
		bg: C.card,
		pad: 8
	}),
	hero: base({
		text: "Hero",
		bg: C.card,
		pad: 36,
		gap: 28
	}),
	"hero-col-1": base({
		text: "Column",
		bg: "transparent",
		gap: 16
	}),
	"hero-col-2": base({
		text: "Column",
		bg: "transparent"
	}),
	"hero-kicker": base({
		text: "Architecture · Est. 1998",
		size: 12,
		weight: 700,
		upper: true,
		tracking: .16,
		color: C.accent
	}),
	"hero-title": base({
		text: "Houses with a quieter kind of luxury",
		size: 44,
		weight: 600,
		family: "display",
		color: C.ink
	}),
	"hero-text": base({
		text: "Harbor & Co. designs coastal homes, small hotels, and the rooms people remember — material first, never loud.",
		size: 16,
		weight: 400,
		color: C.muted
	}),
	"hero-primary": base({
		text: "Start a project",
		href: "#visit",
		bg: C.accent,
		color: C.accentInk,
		radius: 6,
		size: 15,
		weight: 600,
		pad: 14
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
		border: 1
	}),
	"hero-image": base({
		text: "Coastal house in late light",
		radius: 14,
		shadow: 2
	}),
	features: base({
		text: "Features",
		bg: C.paper,
		pad: 32,
		gap: 18
	}),
	"feat-1": base({
		text: "Material library",
		sub: "Plaster, oak, limestone, and bronze, held to a single calm palette.",
		radius: 12,
		bg: C.card,
		shadow: 1
	}),
	"feat-2": base({
		text: "Site craft",
		sub: "Buildings that sit in the dune or the block as if they had always been there.",
		radius: 12,
		bg: C.card,
		shadow: 1
	}),
	"feat-3": base({
		text: "Aftercare",
		sub: "We stay through furnishing, the first winter, and the slow changes of living.",
		radius: 12,
		bg: C.card,
		shadow: 1
	}),
	quotes: base({
		text: "Testimonials",
		bg: C.card,
		pad: 36,
		gap: 18
	}),
	"quote-1": base({
		text: "They edited the house until it felt inevitable.",
		sub: "Amira S. · Proprietor, The Dune Rooms",
		size: 32,
		family: "display",
		weight: 500
	}),
	"quote-2": base({
		text: "A palette we still notice three years later.",
		sub: "Leo M. · Client, Comporta",
		size: 18,
		family: "display"
	}),
	"quote-3": base({
		text: "The only studio that talked about silence.",
		sub: "N. Okonkwo · Editor",
		size: 18,
		family: "display"
	}),
	cta: base({
		text: "Call to Action",
		bg: C.ink,
		color: C.cream,
		pad: 32,
		gap: 24,
		radius: 0
	}),
	"cta-title": base({
		text: "Book a site visit",
		size: 36,
		family: "display",
		weight: 600,
		color: C.cream
	}),
	"cta-text": base({
		text: "Tell us about the place. We reply within two working days.",
		size: 16,
		color: "#d9d3cb",
		weight: 400
	}),
	"cta-form": base({
		text: "Site visit",
		bg: C.card,
		color: C.ink,
		radius: 14,
		pad: 22,
		shadow: 2,
		gap: 12
	}),
	"cta-button": base({
		text: "Request a visit",
		bg: C.accent,
		color: C.accentInk,
		radius: 6,
		size: 15,
		weight: 600,
		pad: 12
	}),
	footer: base({
		text: "A practice for houses and the rituals between them.",
		sub: "Lisbon · Tangier · Remote",
		bg: "#16181d",
		color: C.cream,
		pad: 28,
		gap: 18
	}),
	"footer-links": base({
		text: "Work, Approach, Journal, Contact",
		color: C.cream,
		size: 14
	}),
	popup: base({
		text: "Exit intent",
		bg: C.card,
		radius: 16,
		pad: 28,
		shadow: 3,
		gap: 12
	}),
	"popup-title": base({
		text: "Before you leave",
		size: 32,
		family: "display",
		weight: 600
	}),
	"popup-text": base({
		text: "A short note on materials, twice a season. No noise.",
		color: C.muted,
		size: 15
	}),
	"popup-form": base({
		text: "Exit note",
		bg: "transparent",
		gap: 10
	}),
	"popup-button": base({
		text: "Send the note",
		bg: C.accent,
		color: C.accentInk,
		radius: 6,
		size: 15,
		weight: 600,
		pad: 12
	}),
	single: base({
		text: "Single post",
		bg: C.card,
		pad: 36,
		gap: 18
	}),
	"single-title": base({
		text: "The house that keeps the wind out",
		size: 44,
		family: "display",
		weight: 600,
		dynamic: "Post Title"
	}),
	"single-image": base({
		text: "Featured image",
		radius: 14,
		shadow: 1
	}),
	"single-content": base({
		text: "The house sits low, the way the dune sits low. We kept the windward wall thick, the leeward rooms open, and refused a third material.\n\nWhat remains is limestone, oak, and a bronze rail that warms in the afternoon. The rest was edited out.",
		size: 17,
		color: "#3c434c",
		weight: 400
	}),
	author: base({
		text: "Amira Solano",
		sub: "Partner · Harbor & Co. She leads material studies and the first winter on site.",
		bg: C.paper,
		radius: 12,
		pad: 16
	}),
	archive: base({
		text: "Archive",
		bg: C.card,
		pad: 32,
		gap: 16
	}),
	"archive-title": base({
		text: "Journal",
		size: 42,
		family: "display",
		weight: 600
	}),
	loop: base({
		text: "Loop Grid",
		bg: "transparent",
		gap: 14
	})
};
var META = {
	logo: {
		label: "Site Logo",
		kind: "logo",
		pro: true
	},
	nav: {
		label: "Nav Menu",
		kind: "nav",
		pro: true
	},
	"header-btn": {
		label: "Button",
		kind: "button"
	},
	header: {
		label: "Header",
		kind: "container",
		pro: true
	},
	hero: {
		label: "Hero",
		kind: "container"
	},
	"hero-col-1": {
		label: "Container",
		kind: "container"
	},
	"hero-col-2": {
		label: "Container",
		kind: "container"
	},
	"hero-kicker": {
		label: "Heading",
		kind: "heading"
	},
	"hero-title": {
		label: "Heading",
		kind: "heading"
	},
	"hero-text": {
		label: "Text Editor",
		kind: "text"
	},
	"hero-primary": {
		label: "Button",
		kind: "button"
	},
	"hero-secondary": {
		label: "Button",
		kind: "button"
	},
	"hero-image": {
		label: "Image",
		kind: "image"
	},
	features: {
		label: "Features",
		kind: "container"
	},
	"feat-1": {
		label: "Image Box",
		kind: "iconbox"
	},
	"feat-2": {
		label: "Image Box",
		kind: "iconbox"
	},
	"feat-3": {
		label: "Image Box",
		kind: "iconbox"
	},
	quotes: {
		label: "Testimonials",
		kind: "container"
	},
	"quote-1": {
		label: "Testimonial",
		kind: "testimonial",
		pro: true
	},
	"quote-2": {
		label: "Testimonial",
		kind: "testimonial",
		pro: true
	},
	"quote-3": {
		label: "Testimonial",
		kind: "testimonial",
		pro: true
	},
	cta: {
		label: "Call to Action",
		kind: "container",
		pro: true
	},
	"cta-title": {
		label: "Heading",
		kind: "heading"
	},
	"cta-text": {
		label: "Text Editor",
		kind: "text"
	},
	"cta-form": {
		label: "Form",
		kind: "form",
		pro: true
	},
	"cta-button": {
		label: "Button",
		kind: "button"
	},
	footer: {
		label: "Footer",
		kind: "container",
		pro: true
	},
	"footer-links": {
		label: "Nav Menu",
		kind: "nav",
		pro: true
	},
	popup: {
		label: "Popup",
		kind: "container",
		pro: true
	},
	"popup-title": {
		label: "Heading",
		kind: "heading"
	},
	"popup-text": {
		label: "Text Editor",
		kind: "text"
	},
	"popup-form": {
		label: "Form",
		kind: "form",
		pro: true
	},
	"popup-button": {
		label: "Button",
		kind: "button"
	},
	single: {
		label: "Single",
		kind: "container",
		pro: true
	},
	"single-title": {
		label: "Post Title",
		kind: "heading",
		pro: true
	},
	"single-image": {
		label: "Featured Image",
		kind: "image",
		pro: true
	},
	"single-content": {
		label: "Post Content",
		kind: "text",
		pro: true
	},
	author: {
		label: "Author Box",
		kind: "testimonial",
		pro: true
	},
	archive: {
		label: "Archive",
		kind: "container",
		pro: true
	},
	"archive-title": {
		label: "Archive Title",
		kind: "heading",
		pro: true
	},
	loop: {
		label: "Loop Grid",
		kind: "container",
		pro: true
	}
};
var MODE_SELECTION = {
	page: "cta-form",
	header: "nav",
	footer: "footer",
	single: "single-title",
	archive: "loop",
	popup: "popup"
};
var NODE_MODE = {
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
	loop: "archive"
};
var REORDER = /* @__PURE__ */ new Set([
	"hero",
	"features",
	"quotes",
	"cta"
]);
var CONTAINERS = /* @__PURE__ */ new Set([
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
	"loop"
]);
function linkedButton(id) {
	if (id === "cta-form") return "cta-button";
	if (id === "popup-form") return "popup-button";
	return null;
}
function getNode(patches, id) {
	return {
		...DEFAULTS[id],
		...patches[id]
	};
}
function resolveText(node) {
	if (node.dynamic && TAGS[node.dynamic]) return TAGS[node.dynamic];
	return node.text;
}
function hiddenOn(node, device) {
	if (device === "desktop") return !node.showDesktop;
	if (device === "tablet") return !node.showTablet;
	return !node.showMobile;
}
function shadowCss(level) {
	if (level <= 0) return "none";
	if (level === 1) return "0 8px 20px rgb(28 24 20 / 0.08)";
	if (level === 2) return "0 14px 34px rgb(28 24 20 / 0.12)";
	return "0 22px 54px rgb(28 24 20 / 0.2)";
}
var WIDGETS = [
	{
		id: "container",
		name: "Container",
		icon: "columns",
		cat: "Basic"
	},
	{
		id: "heading",
		name: "Heading",
		icon: "heading",
		cat: "Basic"
	},
	{
		id: "image",
		name: "Image",
		icon: "image",
		cat: "Basic"
	},
	{
		id: "text",
		name: "Text Editor",
		icon: "type",
		cat: "Basic"
	},
	{
		id: "button",
		name: "Button",
		icon: "button",
		cat: "Basic"
	},
	{
		id: "video",
		name: "Video",
		icon: "play",
		cat: "Basic"
	},
	{
		id: "spacer",
		name: "Spacer",
		icon: "spacer",
		cat: "Basic"
	},
	{
		id: "divider",
		name: "Divider",
		icon: "divider",
		cat: "Basic"
	},
	{
		id: "icon",
		name: "Icon",
		icon: "star",
		cat: "Basic"
	},
	{
		id: "maps",
		name: "Google Maps",
		icon: "pin",
		cat: "Basic"
	},
	{
		id: "posts",
		name: "Posts",
		icon: "posts",
		cat: "Pro",
		pro: true
	},
	{
		id: "portfolio",
		name: "Portfolio",
		icon: "grid",
		cat: "Pro",
		pro: true
	},
	{
		id: "form",
		name: "Form",
		icon: "form",
		cat: "Pro",
		pro: true
	},
	{
		id: "slides",
		name: "Slides",
		icon: "slides",
		cat: "Pro",
		pro: true
	},
	{
		id: "price-table",
		name: "Price Table",
		icon: "table",
		cat: "Pro",
		pro: true
	},
	{
		id: "cta",
		name: "Call to Action",
		icon: "mega",
		cat: "Pro",
		pro: true
	},
	{
		id: "flip-box",
		name: "Flip Box",
		icon: "flip",
		cat: "Pro",
		pro: true
	},
	{
		id: "gallery",
		name: "Gallery",
		icon: "images",
		cat: "Pro",
		pro: true
	},
	{
		id: "nav-menu",
		name: "Nav Menu",
		icon: "menu",
		cat: "Pro",
		pro: true
	},
	{
		id: "mega-menu",
		name: "Mega Menu",
		icon: "mega-menu",
		cat: "Pro",
		pro: true
	},
	{
		id: "countdown",
		name: "Countdown",
		icon: "timer",
		cat: "Pro",
		pro: true
	},
	{
		id: "hotspot",
		name: "Hotspot",
		icon: "hotspot",
		cat: "Pro",
		pro: true
	},
	{
		id: "lottie",
		name: "Lottie",
		icon: "spark",
		cat: "Pro",
		pro: true
	},
	{
		id: "animated-headline",
		name: "Animated Headline",
		icon: "quote",
		cat: "Pro",
		pro: true
	},
	{
		id: "testimonial",
		name: "Testimonial",
		icon: "quote",
		cat: "Pro",
		pro: true
	},
	{
		id: "site-logo",
		name: "Site Logo",
		icon: "logo",
		cat: "Theme",
		pro: true
	},
	{
		id: "post-title",
		name: "Post Title",
		icon: "heading2",
		cat: "Theme",
		pro: true
	},
	{
		id: "post-content",
		name: "Post Content",
		icon: "align",
		cat: "Theme",
		pro: true
	},
	{
		id: "author-box",
		name: "Author Box",
		icon: "user",
		cat: "Theme",
		pro: true
	},
	{
		id: "breadcrumbs",
		name: "Breadcrumbs",
		icon: "route",
		cat: "Theme",
		pro: true
	},
	{
		id: "loop-grid",
		name: "Loop Grid",
		icon: "loop",
		cat: "Theme",
		pro: true
	},
	{
		id: "featured-image",
		name: "Featured Image",
		icon: "image-plus",
		cat: "Theme",
		pro: true
	},
	{
		id: "post-info",
		name: "Post Info",
		icon: "info",
		cat: "Theme",
		pro: true
	},
	{
		id: "product",
		name: "Product",
		icon: "bag",
		cat: "Woo",
		pro: true
	},
	{
		id: "add-to-cart",
		name: "Add to Cart",
		icon: "cart",
		cat: "Woo",
		pro: true
	},
	{
		id: "product-price",
		name: "Product Price",
		icon: "price",
		cat: "Woo",
		pro: true
	},
	{
		id: "cart",
		name: "Cart",
		icon: "basket",
		cat: "Woo",
		pro: true
	},
	{
		id: "checkout",
		name: "Checkout",
		icon: "card",
		cat: "Woo",
		pro: true
	},
	{
		id: "menu-cart",
		name: "Menu Cart",
		icon: "store",
		cat: "Woo",
		pro: true
	}
];
var WIDGET_FOCUS = {
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
	"menu-cart": "header-btn"
};
var INSERTABLE = {
	heading: "heading",
	text: "text",
	button: "button",
	image: "image",
	spacer: "spacer",
	divider: "divider"
};
var DEFAULT_FAVS = [
	"heading",
	"image",
	"button",
	"form"
];
var PHOTOS = {
	"hero-image": "/studio/hero.jpg",
	"single-image": "/studio/hero.jpg",
	"feat-1": "/studio/materials.jpg",
	"feat-2": "/studio/path.jpg",
	"feat-3": "/studio/stair.jpg"
};
var POSTS = [
	{
		title: "Limewashed walls",
		img: "/studio/materials.jpg",
		meta: "Materials"
	},
	{
		title: "A path through the dune",
		img: "/studio/path.jpg",
		meta: "Sites"
	},
	{
		title: "The bronze rail",
		img: "/studio/stair.jpg",
		meta: "Detail"
	},
	{
		title: "Notes from the table",
		img: "/studio/still.jpg",
		meta: "Studio"
	},
	{
		title: "The quiet house",
		img: "/studio/hero.jpg",
		meta: "Houses"
	},
	{
		title: "After the first winter",
		img: "/studio/still.jpg",
		meta: "Aftercare"
	}
];
var TEMPLATES = [
	{
		id: "hero",
		name: "Split hero",
		kind: "Block"
	},
	{
		id: "features",
		name: "Feature trio",
		kind: "Block"
	},
	{
		id: "quotes",
		name: "Quote wall",
		kind: "Block"
	},
	{
		id: "visit",
		name: "Site-visit form",
		kind: "Block"
	},
	{
		id: "loop",
		name: "Journal loop",
		kind: "Block"
	},
	{
		id: "home",
		name: "Harbor home",
		kind: "Page"
	},
	{
		id: "about",
		name: "Studio about",
		kind: "Page"
	}
];
var GUIDE = {
	overview: "A desktop Elementor-style editor, shown as one studio view: widgets stay open on the left, the live page sits in the center, and the selected element’s inspector stays open on the right. In the real product those two panels share one dock; here they are open together so a designer can read the whole system at once. The page under construction is Harbor & Co., a coastal architecture studio.",
	panels: [
		{
			n: "1",
			title: "Top bar",
			body: "Logo, page / template switcher, device modes, preview, navigator, history, undo, template library, Theme Builder, and Publish."
		},
		{
			n: "2",
			title: "Widget panel",
			body: "Search, Favorites, then Basic, Pro, Theme Elements, and WooCommerce. Star a widget to pin it. Drag Heading, Text, Image, Button, Spacer, or Divider onto a container."
		},
		{
			n: "3",
			title: "Canvas",
			body: "Pasteboard with the page. Containers show dashed guides. Hover any element for its handle; the Form inside the call to action starts selected."
		},
		{
			n: "4",
			title: "Inspector",
			body: "Content, Style, and Advanced. Typography, color, spacing, radius, shadow, motion, responsive visibility, and custom CSS. The database icon beside a text field is Dynamic Tags."
		},
		{
			n: "5",
			title: "Navigator",
			body: "Floating structure tree. Click a row to select. The eye hides a widget on the canvas."
		},
		{
			n: "6",
			title: "Theme & Popup Builder",
			body: "The page menu switches Header, Footer, Single, Archive, and an exit-intent popup. Locked header and footer chips on Home open those templates."
		},
		{
			n: "7",
			title: "Responsive peek",
			body: "Desktop keeps a small mobile frame at the lower right. Tablet and Mobile in the top bar refit the canvas; Advanced can hide the selection per device."
		}
	],
	states: [
		"Selected: burgundy outline and a handle. Click the pasteboard to open Page settings.",
		"Hover: a lighter outline and the element name, Elementor-style.",
		"Drag: pull a section by the grip on its handle, or drop a basic widget into a container.",
		"Responsive: Desktop, Tablet (768), and Mobile (390). Hidden-on-device leaves a dashed bar so you can select it again.",
		"Preview: chrome drops away. Exit preview returns to the editor.",
		"Global: Advanced → Save as global widget. It appears under Global in the left panel."
	]
};
var IMAGE_PROMPT = `Ultra-realistic product screenshot of the Elementor Pro page builder in 2026, 1440 pixels wide, light interface with a dark charcoal widget sidebar. Flat, crisp, professional SaaS UI, not a sketch. Top white bar: rounded burgundy #92003B square with a white geometric E, the word Elementor, a small Pro pill, page switcher “Home — Harbor & Co.”, centered device icons with Desktop active, preview eye, navigator layers icon, history, undo and redo, template-library folder, Theme Builder menu, and a burgundy Publish split button. Left sidebar #121418 titled Elements, search “Search Widget…”, a Favorites row starring Heading, Image, Button, and Form, then accordions Basic, Pro, Theme Elements, and WooCommerce. Widgets are fine line icons with labels; Pro widgets carry a tiny PRO tag. Center warm-gray pasteboard #E6E3DE holding a white page for an architecture studio. Locked theme header reads Harbor & Co. with a nav and burgundy button. Hero is two columns: a Fraunces headline “Houses with a quieter kind of luxury”, a short paragraph, burgundy and ghost buttons, and a sunlit limestone coastal house photograph. Below, three photo cards (plaster interior, dune path, limestone stair) and testimonial quotes. A near-black call-to-action band holds a white form card. The Form widget is selected with a 2px #92003B outline and a floating handle labeled Form PRO. Right white inspector titled Form, tabs Content, Style, Advanced, showing the form name with a dynamic-tags database icon, field repeater, typography, color swatch #92003B, spacing sliders, border, shadow, motion, and custom CSS. A floating Navigator lists the page tree with Form highlighted. A small mobile preview peeks at the lower right. Subtle shadows, 8px radii, Inter for chrome, serif only inside the webpage. No browser chrome, no watermark, no extra windows.`;
var initialFields = [
	{
		id: "name",
		label: "Name",
		type: "text",
		placeholder: "Your name"
	},
	{
		id: "email",
		label: "Email",
		type: "email",
		placeholder: "you@studio.com"
	},
	{
		id: "project",
		label: "Project type",
		type: "select",
		placeholder: "A house, a hotel, a room"
	}
];
function pick(s) {
	return {
		patches: s.patches,
		order: s.order,
		hidden: s.hidden,
		globals: s.globals,
		fields: s.fields,
		inserts: s.inserts,
		docTitle: s.docTitle,
		layout: s.layout,
		pageBg: s.pageBg
	};
}
var initialSnap = () => ({
	patches: {},
	order: [
		"hero",
		"features",
		"quotes",
		"cta"
	],
	hidden: [],
	globals: [],
	fields: initialFields,
	inserts: [],
	docTitle: "Home",
	layout: "theme",
	pageBg: "#fffcfa"
});
var useEditor = create((set, get) => {
	const apply = (label, recipe) => {
		const state = get();
		const now = Date.now();
		const before = pick(state);
		const next = structuredClone(before);
		recipe(next);
		if (JSON.stringify(before) === JSON.stringify(next)) return;
		const last = state.past.at(-1);
		const coalesce = !!last && last.label === label && now - state.lastEdit < 800;
		set({
			...next,
			past: coalesce ? state.past : [...state.past, {
				snap: before,
				label
			}].slice(-40),
			future: coalesce ? state.future : [],
			lastEdit: now
		});
	};
	return {
		...initialSnap(),
		selected: "cta-form",
		hovered: null,
		tab: "content",
		device: "desktop",
		mode: "page",
		preview: false,
		guides: true,
		navigatorOpen: true,
		libraryOpen: false,
		guideOpen: false,
		finderOpen: false,
		callouts: false,
		leftOpen: false,
		rightOpen: false,
		published: false,
		saving: false,
		savedTemplates: [],
		toasts: [],
		past: [],
		future: [],
		lastEdit: 0,
		focusSearch: 0,
		dragging: null,
		update: (id, partial, label) => apply(label, (snap) => {
			snap.patches[id] = {
				...snap.patches[id],
				...partial
			};
		}),
		updateDoc: (partial, label) => apply(label, (snap) => {
			Object.assign(snap, partial);
		}),
		updateField: (id, partial) => apply("Form field", (snap) => {
			snap.fields = snap.fields.map((field) => field.id === id ? {
				...field,
				...partial
			} : field);
		}),
		addField: () => apply("Add field", (snap) => {
			snap.fields = [...snap.fields, {
				id: `field-${snap.fields.length + 1}`,
				label: "New field",
				type: "text",
				placeholder: ""
			}];
		}),
		removeField: (id) => apply("Remove field", (snap) => {
			if (snap.fields.length < 2) return;
			snap.fields = snap.fields.filter((field) => field.id !== id);
		}),
		addInsert: (parent, kind) => {
			const id = `ins-${Math.random().toString(36).slice(2, 8)}`;
			const text = kind === "heading" ? "New heading" : kind === "text" ? "A short paragraph dropped into the container." : kind === "button" ? "Learn more" : kind === "image" ? "Still life" : kind;
			apply(`Add ${kind}`, (snap) => {
				snap.inserts = [...snap.inserts, {
					id,
					parent,
					kind,
					text
				}];
			});
			set({
				selected: id,
				rightOpen: true
			});
		},
		updateInsert: (id, text) => apply("Inserted text", (snap) => {
			snap.inserts = snap.inserts.map((item) => item.id === id ? {
				...item,
				text
			} : item);
		}),
		removeInsert: (id) => {
			apply("Remove element", (snap) => {
				snap.inserts = snap.inserts.filter((item) => item.id !== id);
			});
			if (get().selected === id) set({ selected: null });
		},
		moveSection: (from, to) => apply("Reorder sections", (snap) => {
			if (from === to || !snap.order.includes(from) || !snap.order.includes(to)) return;
			const order = snap.order.filter((id) => id !== from);
			order.splice(order.indexOf(to), 0, from);
			snap.order = order;
		}),
		toggleHidden: (id) => apply("Visibility", (snap) => {
			snap.hidden = snap.hidden.includes(id) ? snap.hidden.filter((item) => item !== id) : [...snap.hidden, id];
		}),
		toggleGlobal: (id) => apply("Global widget", (snap) => {
			snap.globals = snap.globals.includes(id) ? snap.globals.filter((item) => item !== id) : [...snap.globals, id];
		}),
		select: (id) => set({
			selected: id,
			rightOpen: id ? true : get().rightOpen
		}),
		setHovered: (id) => set({ hovered: id }),
		setTab: (tab) => set({ tab }),
		setDevice: (device) => set({ device }),
		setMode: (mode) => set({
			mode,
			selected: MODE_SELECTION[mode],
			leftOpen: false,
			preview: false
		}),
		setPreview: (preview) => set({
			preview,
			leftOpen: false,
			rightOpen: false
		}),
		setGuides: (guides) => set({ guides }),
		setNavigator: (open) => set({ navigatorOpen: open }),
		setLibrary: (open) => set({
			libraryOpen: open,
			finderOpen: false,
			guideOpen: open ? false : get().guideOpen
		}),
		setGuide: (open) => set({
			guideOpen: open,
			libraryOpen: false,
			finderOpen: false
		}),
		setFinder: (open) => set({
			finderOpen: open,
			libraryOpen: false,
			guideOpen: false
		}),
		setCallouts: (on) => set({ callouts: on }),
		setLeft: (open) => set({
			leftOpen: open,
			rightOpen: open ? false : get().rightOpen
		}),
		setRight: (open) => set({
			rightOpen: open,
			leftOpen: open ? false : get().leftOpen
		}),
		setDragging: (id) => set({ dragging: id }),
		undo: () => {
			const state = get();
			const prev = state.past.at(-1);
			if (!prev) return;
			set({
				...prev.snap,
				past: state.past.slice(0, -1),
				future: [...state.future, {
					snap: pick(state),
					label: prev.label
				}]
			});
		},
		redo: () => {
			const state = get();
			const next = state.future.at(-1);
			if (!next) return;
			set({
				...next.snap,
				future: state.future.slice(0, -1),
				past: [...state.past, {
					snap: pick(state),
					label: next.label
				}]
			});
		},
		publish: () => {
			set({
				published: true,
				saving: true
			});
			get().toast(get().mode === "page" ? "Home published" : "Template published");
			window.setTimeout(() => set({ saving: false }), 700);
		},
		saveDraft: () => {
			set({ published: false });
			get().toast("Draft saved");
		},
		saveTemplate: () => {
			const name = get().docTitle === "Home" ? "Harbor — site visit" : get().docTitle;
			set((state) => ({
				savedTemplates: state.savedTemplates.includes(name) ? state.savedTemplates : [...state.savedTemplates, name],
				libraryOpen: true
			}));
			get().toast("Saved to My Templates");
		},
		focusWidget: (widgetId) => {
			const target = WIDGET_FOCUS[widgetId];
			if (!target || !META[target]) {
				get().toast("Drop it on a highlighted container");
				return;
			}
			set({
				mode: NODE_MODE[target] ?? "page",
				selected: target,
				rightOpen: true,
				leftOpen: false,
				tab: "content",
				preview: false
			});
			get().toast(`${META[target].label} selected`);
		},
		requestSearch: () => set((state) => ({
			focusSearch: state.focusSearch + 1,
			leftOpen: true,
			rightOpen: false
		})),
		toast: (text) => {
			const id = Math.random().toString(36).slice(2, 8);
			set((state) => ({ toasts: [...state.toasts, {
				id,
				text
			}].slice(-3) }));
			window.setTimeout(() => {
				set((state) => ({ toasts: state.toasts.filter((item) => item.id !== id) }));
			}, 2600);
		},
		closeOverlays: () => {
			const state = get();
			if (state.libraryOpen || state.finderOpen || state.guideOpen) {
				set({
					libraryOpen: false,
					finderOpen: false,
					guideOpen: false
				});
				return;
			}
			if (state.preview) {
				set({ preview: false });
				return;
			}
			if (state.leftOpen || state.rightOpen) {
				set({
					leftOpen: false,
					rightOpen: false
				});
				return;
			}
			if (state.callouts) {
				set({ callouts: false });
				return;
			}
			set({ selected: null });
		}
	};
});
function dropWidget(parent, widgetId) {
	const store = useEditor.getState();
	const kind = INSERTABLE[widgetId];
	if (kind) {
		store.addInsert(parent, kind);
		store.toast("Placed in the container");
		return;
	}
	store.focusWidget(widgetId);
}
var DEVICES = [
	{
		id: "desktop",
		label: "Desktop",
		icon: Monitor
	},
	{
		id: "tablet",
		label: "Tablet",
		icon: TabletSmartphone
	},
	{
		id: "mobile",
		label: "Mobile",
		icon: Smartphone
	}
];
function TopBar() {
	if (useEditor((s) => s.preview)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewBar, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorBar, {});
}
function LogoMark$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-7 text-accent",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "24",
			height: "24",
			rx: "6",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7 6h10v2.2H9.4V11H16v2.1H9.4V16H17V18.2H7Z",
			className: "fill-accent-ink"
		})]
	});
}
function EditorBar() {
	const mode = useEditor((s) => s.mode);
	const device = useEditor((s) => s.device);
	const setDevice = useEditor((s) => s.setDevice);
	const setMode = useEditor((s) => s.setMode);
	const setPreview = useEditor((s) => s.setPreview);
	const navigatorOpen = useEditor((s) => s.navigatorOpen);
	const setNavigator = useEditor((s) => s.setNavigator);
	const guides = useEditor((s) => s.guides);
	const setGuides = useEditor((s) => s.setGuides);
	const undo = useEditor((s) => s.undo);
	const redo = useEditor((s) => s.redo);
	const past = useEditor((s) => s.past);
	const future = useEditor((s) => s.future);
	const requestSearch = useEditor((s) => s.requestSearch);
	const setLibrary = useEditor((s) => s.setLibrary);
	const setGuide = useEditor((s) => s.setGuide);
	const publish = useEditor((s) => s.publish);
	const saveDraft = useEditor((s) => s.saveDraft);
	const saveTemplate = useEditor((s) => s.saveTemplate);
	const published = useEditor((s) => s.published);
	const saving = useEditor((s) => s.saving);
	const docTitle = useEditor((s) => s.docTitle);
	const toast = useEditor((s) => s.toast);
	const page = PAGES.find((item) => item.id === mode);
	const [pagesOpen, setPagesOpen] = (0, import_react.useState)(false);
	const [histOpen, setHistOpen] = (0, import_react.useState)(false);
	const [pubOpen, setPubOpen] = (0, import_react.useState)(false);
	const [themeOpen, setThemeOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "topbar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "logo-btn",
				onClick: () => setMode("page"),
				"aria-label": "Elementor home page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark$1, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "wide-only items-center gap-1.5 text-caption font-semibold",
					children: ["Elementor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pro-pill",
						children: "Pro"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuWrap, {
				open: pagesOpen,
				onClose: () => setPagesOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "page-switch",
					"aria-expanded": pagesOpen,
					onClick: () => setPagesOpen((v) => !v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: page.id === "page" ? docTitle : page.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 shrink-0 text-muted" })]
				}), pagesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "menu left",
					children: PAGES.map((item, index) => {
						const showGroup = index === 0 || PAGES[index - 1].group !== item.group;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [showGroup ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-2 pb-1 pt-2 text-micro font-bold uppercase tracking-wide text-faint",
							children: item.group
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: item.id === mode ? "is-on" : "",
							onClick: () => {
								setMode(item.id);
								setPagesOpen(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 truncate",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-micro text-muted",
								children: item.sub
							})]
						})] }, item.id);
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wide-only mx-auto items-center gap-0.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tool-btn",
						"aria-label": "Add element",
						onClick: () => requestSearch(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
					}),
					DEVICES.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("tool-btn", device === item.id && "is-on"),
							"aria-label": item.label,
							"aria-pressed": device === item.id,
							onClick: () => setDevice(item.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, item.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tool-btn",
						"aria-label": "Preview",
						onClick: () => setPreview(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tool-btn wide-only",
						"aria-label": "Studio guide",
						onClick: () => setGuide(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("tool-btn wide-only", guides && "is-on"),
						"aria-label": "Structure guides",
						"aria-pressed": guides,
						onClick: () => setGuides(!guides),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareDashed, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("tool-btn wide-only", navigatorOpen && "is-on"),
						"aria-label": "Navigator",
						"aria-pressed": navigatorOpen,
						onClick: () => setNavigator(!navigatorOpen),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuWrap, {
						open: histOpen,
						onClose: () => setHistOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "tool-btn wide-only",
							"aria-label": "History",
							onClick: () => setHistOpen((v) => !v),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-4" })
						}), histOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "menu",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-2 py-1 text-micro font-bold uppercase tracking-wide text-faint",
									children: "History"
								}),
								past.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-2 py-2 text-caption text-muted",
									children: "No edits yet."
								}) : null,
								[...past].reverse().slice(0, 8).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => undo(),
									children: item.label
								}, `${item.label}-${index}`))
							]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tool-btn",
						"aria-label": "Undo",
						disabled: !past.length,
						onClick: () => undo(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tool-btn wide-only",
						"aria-label": "Redo",
						disabled: !future.length,
						onClick: () => redo(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo2, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tool-btn wide-only",
						"aria-label": "Template library",
						onClick: () => setLibrary(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuWrap, {
						open: themeOpen,
						onClose: () => setThemeOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("wide-only mr-1 h-9 items-center gap-1 rounded-md px-2 text-micro font-bold", mode !== "page" ? "bg-accent-soft text-accent" : "text-ink-soft"),
							onClick: () => setThemeOpen((v) => !v),
							children: [mode === "popup" ? "Popup Builder" : "Theme Builder", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })]
						}), themeOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "menu",
							children: PAGES.filter((item) => item.id !== "page").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: mode === item.id ? "is-on" : "",
								onClick: () => {
									setMode(item.id);
									setThemeOpen(false);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1",
									children: item.sub
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-micro text-muted",
									children: item.label
								})]
							}, item.id))
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuWrap, {
						open: pubOpen,
						onClose: () => setPubOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "publish",
								onClick: () => publish(),
								children: saving ? "Saving…" : published ? "Update" : "Publish"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "publish-caret",
								"aria-label": "Save options",
								onClick: () => setPubOpen((v) => !v),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })
							})]
						}), pubOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "menu",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										saveDraft();
										setPubOpen(false);
									},
									children: "Save draft"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										saveTemplate();
										setPubOpen(false);
									},
									children: "Save as template"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										publish();
										setPubOpen(false);
									},
									children: "Publish"
								})
							]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tool-btn wide-only",
						"aria-label": "Exit to dashboard",
						onClick: () => toast("Exit to WordPress — this study stays in the editor"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tool-btn narrow-only",
						"aria-label": "Open guide",
						onClick: () => setGuide(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-4" })
					})
				]
			})
		]
	});
}
function PreviewBar() {
	const setPreview = useEditor((s) => s.setPreview);
	const device = useEditor((s) => s.device);
	const setDevice = useEditor((s) => s.setDevice);
	const docTitle = useEditor((s) => s.docTitle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "topbar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "truncate px-2 text-caption",
				children: ["Previewing ", docTitle]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center",
				children: [DEVICES.map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("tool-btn", device === item.id && "is-on"),
						"aria-label": item.label,
						onClick: () => setDevice(item.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
					}, item.id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "publish rounded-md",
					onClick: () => setPreview(false),
					children: "Exit"
				})]
			})
		]
	});
}
function ThemeStrip() {
	const mode = useEditor((s) => s.mode);
	const setMode = useEditor((s) => s.setMode);
	if (useEditor((s) => s.preview) || mode === "page") return null;
	const page = PAGES.find((item) => item.id === mode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-strip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "theme-pill",
				children: mode === "popup" ? "Popup Builder" : "Theme Builder"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "truncate",
				children: page.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-caption",
				children: page.condition
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "ml-auto text-caption font-semibold underline",
				onClick: () => setMode("page"),
				children: "Back to page"
			})
		]
	});
}
function MenuWrap({ open, onClose, children }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointer = (event) => {
			if (!ref.current?.contains(event.target)) onClose();
		};
		document.addEventListener("mousedown", onPointer);
		return () => document.removeEventListener("mousedown", onPointer);
	}, [open, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative",
		ref,
		children
	});
}
var ICONS = {
	columns: Columns2,
	heading: Heading1,
	heading2: Heading,
	image: Image,
	type: Type,
	button: RectangleHorizontal,
	play: Play,
	spacer: UnfoldVertical,
	divider: Minus,
	star: Star,
	pin: MapPin,
	posts: Newspaper,
	grid: LayoutGrid,
	form: TextCursorInput,
	slides: GalleryHorizontal,
	table: Table2,
	mega: Megaphone,
	flip: FlipHorizontal2,
	images: Images,
	menu: Menu,
	"mega-menu": PanelsTopLeft,
	timer: Timer,
	hotspot: Crosshair,
	spark: Sparkles,
	quote: Quote,
	logo: Hexagon,
	align: AlignLeft,
	user: UserRound,
	route: Route,
	loop: GalleryVerticalEnd,
	"image-plus": ImagePlus,
	info: Info,
	bag: ShoppingBag,
	price: BadgeDollarSign,
	cart: ShoppingCart,
	basket: ShoppingBasket,
	card: CreditCard,
	store: Store
};
function WidgetIcon({ name, className }) {
	const Icon = ICONS[name] ?? Star;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		strokeWidth: 1.75,
		"aria-hidden": true
	});
}
var GROUPS = [
	{
		id: "Basic",
		label: "Basic"
	},
	{
		id: "Pro",
		label: "Pro"
	},
	{
		id: "Theme",
		label: "Theme Elements"
	},
	{
		id: "Woo",
		label: "WooCommerce"
	}
];
function WidgetPanel() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [segment, setSegment] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)({
		Basic: true,
		Pro: true,
		Theme: true,
		Woo: true
	});
	const [favs, setFavs] = (0, import_react.useState)(DEFAULT_FAVS);
	const [ready, setReady] = (0, import_react.useState)(false);
	const focusSearch = useEditor((s) => s.focusSearch);
	const globals = useEditor((s) => s.globals);
	const focusWidget = useEditor((s) => s.focusWidget);
	const setLibrary = useEditor((s) => s.setLibrary);
	const setLeft = useEditor((s) => s.setLeft);
	const select = useEditor((s) => s.select);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem("elementor-studio-favs");
		if (raw) try {
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed)) setFavs(parsed);
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) localStorage.setItem("elementor-studio-favs", JSON.stringify(favs));
	}, [favs, ready]);
	(0, import_react.useEffect)(() => {
		if (focusSearch > 0) ref.current?.focus();
	}, [focusSearch]);
	const q = query.trim().toLowerCase();
	const match = (widget) => !q || widget.name.toLowerCase().includes(q);
	const favWidgets = WIDGETS.filter((widget) => favs.includes(widget.id) && match(widget));
	const toggleFav = (id) => {
		setFavs((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 px-3 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-caption font-semibold",
						children: "Elements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pro-pill",
						children: "Pro"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "tool-btn text-chrome-fg",
							"aria-label": "Template library",
							onClick: () => setLibrary(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "tool-btn narrow-only text-chrome-fg",
							"aria-label": "Close widgets",
							onClick: () => setLeft(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-6 top-1/2 size-4 -translate-y-1/2 text-chrome-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref,
					className: "search",
					value: query,
					placeholder: "Search Widget...",
					"aria-label": "Search widgets",
					onChange: (e) => setQuery(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "seg",
					role: "tablist",
					"aria-label": "Widget filters",
					children: [
						"all",
						"favorites",
						"global"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: segment === item ? "is-on" : "",
						onClick: () => setSegment(item),
						children: item === "all" ? "All" : item === "favorites" ? "Favorites" : "Global"
					}, item))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scrollthin min-h-0 flex-1 overflow-auto px-2 pb-4",
				children: segment === "global" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-1",
					children: globals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 py-6 text-caption text-chrome-muted",
						children: "Save any widget as a Global from Advanced. It can then be dropped onto other templates."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-1",
						children: globals.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-caption hover:bg-chrome-3",
							onClick: () => select(id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pro-pill",
								children: "Global"
							}), META[id]?.label ?? id]
						}) }, id))
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					segment === "all" && !q && favWidgets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cat-btn",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 text-accent-soft" }), "Favorites"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-1",
							children: favWidgets.map((widget) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCell, {
								widget,
								fav: true,
								onFav: () => toggleFav(widget.id),
								onUse: () => focusWidget(widget.id)
							}, `fav-${widget.id}`))
						})]
					}) : null,
					GROUPS.map((group) => {
						const items = WIDGETS.filter((widget) => widget.cat === group.id && match(widget) && (segment !== "favorites" || favs.includes(widget.id)));
						if (!items.length) return null;
						const expanded = q ? true : open[group.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "cat-btn",
							"aria-expanded": expanded,
							onClick: () => setOpen((s) => ({
								...s,
								[group.id]: !s[group.id]
							})),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-chrome-muted",
									children: expanded ? "–" : "+"
								}),
								group.label,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto text-micro font-medium text-chrome-muted",
									children: items.length
								})
							]
						}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-1 pb-2",
							children: items.map((widget) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCell, {
								widget,
								fav: favs.includes(widget.id),
								onFav: () => toggleFav(widget.id),
								onUse: () => focusWidget(widget.id)
							}, widget.id))
						}) : null] }, group.id);
					}),
					WIDGETS.every((widget) => !match(widget) || segment === "favorites" && !favs.includes(widget.id)) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 py-6 text-caption text-chrome-muted",
						children: "No widgets match."
					}) : null
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-chrome-line px-3 py-2 text-micro text-chrome-muted",
				children: "Drag a basic widget onto a container, or click to select it on the canvas."
			})
		]
	});
}
function WidgetCell({ widget, fav, onFav, onUse }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "widget-cell",
		role: "button",
		tabIndex: 0,
		draggable: true,
		onDragStart: (e) => {
			e.dataTransfer.setData("application/widget", widget.id);
			e.dataTransfer.setData("text/plain", widget.id);
			e.dataTransfer.effectAllowed = "copy";
		},
		onClick: onUse,
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				onUse();
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `star ${fav ? "is-on" : ""}`,
				"aria-label": fav ? `Unfavorite ${widget.name}` : `Favorite ${widget.name}`,
				onClick: (e) => {
					e.stopPropagation();
					onFav();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: "size-3",
					fill: fav ? "currentColor" : "none"
				})
			}),
			widget.pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pro-tag absolute right-1 top-1",
				children: "PRO"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetIcon, {
				name: widget.icon,
				className: "size-5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label",
				children: widget.name
			})
		]
	});
}
function Section({ title, children, openDefault = true }) {
	const [open, setOpen] = (0, import_react.useState)(openDefault);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-b border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "section-h",
			"aria-expanded": open,
			onClick: () => setOpen((v) => !v),
			children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: open ? "–" : "+"
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-3 px-3 py-3",
			children
		}) : null]
	});
}
function Slider({ label, value, min, max, onChange, suffix = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center justify-between text-micro font-medium text-muted",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums text-ink",
				children: [value, suffix]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min,
			max,
			value,
			onChange: (e) => onChange(Number(e.target.value))
		})]
	});
}
function ColorField({ label, value, onChange }) {
	const hex = /^#[0-9a-fA-F]{6}$/.test(value) ? value : "#fffcfa";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-micro font-medium text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": label,
					type: "color",
					value: hex,
					onChange: (e) => onChange(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-16 font-mono text-micro uppercase text-ink-soft",
					children: value === "transparent" ? "None" : hex
				}),
				value !== "transparent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-micro text-muted",
					onClick: () => onChange("transparent"),
					children: "Clear"
				}) : null
			]
		})]
	});
}
function AlignRow({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-3 gap-1",
		children: [
			"left",
			"center",
			"right"
		].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `h-8 rounded-md border border-line text-micro capitalize ${value === option ? "bg-accent-soft text-accent" : "text-ink-soft"}`,
			onClick: () => onChange(option),
			children: option
		}, option))
	});
}
function TagControl({ id }) {
	const dynamic = useEditor((s) => getNode(s.patches, id).dynamic);
	const update = useEditor((s) => s.update);
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `tool-btn h-7 w-7 ${dynamic ? "is-on" : ""}`,
			"aria-label": "Dynamic tags",
			"aria-pressed": !!dynamic,
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-3.5" })
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tag-list mt-1",
			children: [Object.keys(TAGS).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: dynamic === tag ? "is-on" : "",
				onClick: () => {
					update(id, { dynamic: tag }, "Dynamic tag");
					setOpen(false);
				},
				children: tag
			}, tag)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					update(id, { dynamic: null }, "Dynamic tag");
					setOpen(false);
				},
				children: "Remove tag"
			})]
		}) : null]
	});
}
function TextControl({ id, label, prop, multiline = false, withTag = false }) {
	const value = useEditor((s) => getNode(s.patches, id)[prop]);
	const dynamic = useEditor((s) => getNode(s.patches, id).dynamic);
	const update = useEditor((s) => s.update);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center justify-between text-micro font-medium text-muted",
			children: [label, withTag ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagControl, { id }) : null]
		}), withTag && prop === "text" && !!dynamic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "chip",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-3" }),
				dynamic,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Remove dynamic tag",
					onClick: () => update(id, { dynamic: null }, "Dynamic tag"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
				})
			]
		}) : multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			className: "panel-area",
			value,
			onChange: (e) => update(id, { [prop]: e.target.value }, `${label}`)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "panel-input",
			value,
			onChange: (e) => update(id, { [prop]: e.target.value }, `${label}`)
		})]
	});
}
var TABS = [
	{
		id: "content",
		label: "Content",
		icon: Pencil
	},
	{
		id: "style",
		label: "Style",
		icon: Paintbrush
	},
	{
		id: "advanced",
		label: "Advanced",
		icon: Settings2
	}
];
function SettingsPanel() {
	const selected = useEditor((s) => s.selected);
	const insert = useEditor((s) => s.inserts).find((item) => item.id === selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: insert ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsertSettings, { id: insert.id }) : selected && META[selected] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementSettings, { id: selected }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentSettings, {})
	});
}
function PanelHead({ title, pro, onBack }) {
	const setRight = useEditor((s) => s.setRight);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1 border-b border-line px-2 py-1",
		children: [
			onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "tool-btn",
				"aria-label": "Page settings",
				onClick: onBack,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1 truncate text-caption font-semibold",
				children: title
			}),
			pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pro-pill",
				children: "Pro"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "tool-btn narrow-only",
				"aria-label": "Close settings",
				onClick: () => setRight(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})
		]
	});
}
function Tabs() {
	const tab = useEditor((s) => s.tab);
	const setTab = useEditor((s) => s.setTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "tabs",
		role: "tablist",
		children: TABS.map((item) => {
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "tab",
				"aria-selected": tab === item.id,
				className: tab === item.id ? "is-on" : "",
				onClick: () => setTab(item.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
			}, item.id);
		})
	});
}
function DocumentSettings() {
	const mode = useEditor((s) => s.mode);
	const docTitle = useEditor((s) => s.docTitle);
	const layout = useEditor((s) => s.layout);
	const pageBg = useEditor((s) => s.pageBg);
	const published = useEditor((s) => s.published);
	const updateDoc = useEditor((s) => s.updateDoc);
	const tab = useEditor((s) => s.tab);
	const page = PAGES.find((item) => item.id === mode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, { title: `${page.sub} settings` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "scrollthin-light min-h-0 flex-1 overflow-auto",
			children: [
				tab === "content" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "General",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex flex-col gap-1.5 text-micro font-medium text-muted",
							children: ["Title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "panel-input",
								value: docTitle,
								onChange: (e) => updateDoc({ docTitle: e.target.value }, "Title")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-caption",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: published ? "Published" : "Draft"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex flex-col gap-1.5 text-micro font-medium text-muted",
							children: ["Page layout", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "panel-input",
								value: layout,
								onChange: (e) => updateDoc({ layout: e.target.value }, "Layout"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "theme",
									children: "Default — theme header & footer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "canvas",
									children: "Elementor canvas"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-micro text-muted",
							children: page.condition
						})
					]
				}) : null,
				tab === "style" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Body",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
						label: "Background",
						value: pageBg,
						onChange: (pageBg) => updateDoc({ pageBg }, "Page background")
					})
				}) : null,
				tab === "advanced" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Custom CSS",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-micro text-muted",
						children: "Page-level CSS stays in the draft. It is not injected into the preview."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "panel-area",
						readOnly: true,
						value: "/* Harbor home */\n.site-header { position: sticky; }"
					})]
				}) : null
			]
		})
	] });
}
function InsertSettings({ id }) {
	const insert = useEditor((s) => s.inserts.find((item) => item.id === id));
	const updateInsert = useEditor((s) => s.updateInsert);
	const removeInsert = useEditor((s) => s.removeInsert);
	if (!insert) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentSettings, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
		title: insert.kind,
		onBack: () => useEditor.getState().select(null)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scrollthin-light min-h-0 flex-1 overflow-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Content",
			children: [insert.kind === "spacer" || insert.kind === "divider" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-caption text-muted",
				children: "This structural widget has no text."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex flex-col gap-1.5 text-micro font-medium text-muted",
				children: ["Text", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "panel-input",
					value: insert.text,
					onChange: (e) => updateInsert(id, e.target.value)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-left text-caption text-accent",
				onClick: () => removeInsert(id),
				children: "Remove from container"
			})]
		})
	})] });
}
function ElementSettings({ id }) {
	const meta = META[id];
	const tab = useEditor((s) => s.tab);
	const select = useEditor((s) => s.select);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: meta.label,
			pro: meta.pro,
			onBack: () => select(null)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "scrollthin-light min-h-0 flex-1 overflow-auto",
			children: [
				tab === "content" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
					id,
					kind: meta.kind
				}) : null,
				tab === "style" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Style, {
					id,
					kind: meta.kind
				}) : null,
				tab === "advanced" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Advanced, { id }) : null
			]
		})
	] });
}
function Content({ id, kind }) {
	const node = useEditor((s) => getNode(s.patches, id));
	const update = useEditor((s) => s.update);
	const fields = useEditor((s) => s.fields);
	const updateField = useEditor((s) => s.updateField);
	const addField = useEditor((s) => s.addField);
	const removeField = useEditor((s) => s.removeField);
	const buttonId = linkedButton(id);
	if (kind === "form") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Form fields",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextControl, {
				id,
				prop: "text",
				label: "Form name",
				withTag: true
			}), id === "cta-form" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-line p-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between text-micro font-semibold text-muted",
							children: ["Field", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Remove field",
								onClick: () => removeField(field.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "panel-input mb-2",
							value: field.label,
							"aria-label": "Field label",
							onChange: (e) => updateField(field.id, { label: e.target.value })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "panel-input",
							value: field.type,
							"aria-label": "Field type",
							onChange: (e) => updateField(field.id, { type: e.target.value }),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "text",
									children: "Text"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "email",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "select",
									children: "Select"
								})
							]
						})
					]
				}, field.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-9 rounded-md border border-dashed border-line-strong text-caption",
					onClick: addField,
					children: "Add field"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-caption text-muted",
				children: "Email capture for the exit-intent popup."
			})]
		}),
		buttonId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Button",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextControl, {
				id: buttonId,
				prop: "text",
				label: "Text",
				withTag: true
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Actions after submit",
			openDefault: false,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					label: "Email",
					on: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { label: "Webhook" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-micro text-muted",
					children: "Submissions stay in the editor. Nothing is sent."
				})
			]
		})
	] });
	if (kind === "image") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: "Image",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextControl, {
			id,
			prop: "text",
			label: "Alt text"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-micro text-muted",
			children: "Photograph is part of the Harbor & Co. study."
		})]
	});
	if (kind === "container") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: "Layout",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			label: "Gap",
			min: 0,
			max: 64,
			suffix: "px",
			value: node.gap,
			onChange: (gap) => update(id, { gap }, "Gap")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-micro text-muted",
			children: "HTML tag · div · Direction follows the breakpoint."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: "Content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextControl, {
				id,
				prop: "text",
				label: kind === "nav" ? "Menu items" : "Text",
				withTag: kind !== "nav",
				multiline: kind === "text"
			}),
			kind === "text" || kind === "testimonial" || kind === "iconbox" || kind === "logo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextControl, {
				id,
				prop: "sub",
				label: kind === "testimonial" ? "Name" : "Description"
			}) : null,
			kind === "button" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextControl, {
				id,
				prop: "href",
				label: "Link"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-micro font-medium text-muted",
				children: "Alignment"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignRow, {
				value: node.align,
				onChange: (align) => update(id, { align }, "Alignment")
			})
		]
	});
}
function Style({ id, kind }) {
	const node = useEditor((s) => getNode(s.patches, id));
	const update = useEditor((s) => s.update);
	const buttonId = linkedButton(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		kind !== "image" && kind !== "container" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Typography",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex flex-col gap-1.5 text-micro font-medium text-muted",
					children: ["Family", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "panel-input",
						value: node.family,
						onChange: (e) => update(id, { family: e.target.value }, "Font"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "sans",
							children: "Inter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "display",
							children: "Fraunces"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Size",
					min: 10,
					max: 72,
					suffix: "px",
					value: node.size,
					onChange: (size) => update(id, { size }, "Size")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex flex-col gap-1.5 text-micro font-medium text-muted",
					children: ["Weight", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "panel-input",
						value: node.weight,
						onChange: (e) => update(id, { weight: Number(e.target.value) }, "Weight"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 400,
								children: "Regular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 500,
								children: "Medium"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 600,
								children: "Semibold"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 700,
								children: "Bold"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Letter spacing",
					min: 0,
					max: 30,
					value: Math.round(node.tracking * 100),
					suffix: "",
					onChange: (tracking) => update(id, { tracking: tracking / 100 }, "Spacing")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between text-caption",
					children: ["Uppercase", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: node.upper,
						onChange: (e) => update(id, { upper: e.target.checked }, "Transform")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
					label: "Text color",
					value: node.color,
					onChange: (color) => update(id, { color }, "Text color")
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: kind === "image" ? "Image" : "Background",
			children: [
				kind !== "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
					label: "Background",
					value: node.bg,
					onChange: (bg) => update(id, { bg }, "Background")
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Border radius",
					min: 0,
					max: 32,
					suffix: "px",
					value: node.radius,
					onChange: (radius) => update(id, { radius }, "Radius")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Border width",
					min: 0,
					max: 6,
					suffix: "px",
					value: node.border,
					onChange: (border) => update(id, { border }, "Border")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Shadow",
					min: 0,
					max: 3,
					value: node.shadow,
					onChange: (shadow) => update(id, { shadow }, "Shadow")
				})
			]
		}),
		buttonId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Button",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleFields, { id: buttonId })
		}) : null
	] });
}
function StyleFields({ id }) {
	const node = useEditor((s) => getNode(s.patches, id));
	const update = useEditor((s) => s.update);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
			label: "Text",
			value: node.color,
			onChange: (color) => update(id, { color }, "Button text")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
			label: "Background",
			value: node.bg,
			onChange: (bg) => update(id, { bg }, "Button background")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			label: "Radius",
			min: 0,
			max: 28,
			suffix: "px",
			value: node.radius,
			onChange: (radius) => update(id, { radius }, "Button radius")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			label: "Size",
			min: 12,
			max: 22,
			suffix: "px",
			value: node.size,
			onChange: (size) => update(id, { size }, "Button size")
		})
	] });
}
function Advanced({ id }) {
	const node = useEditor((s) => getNode(s.patches, id));
	const update = useEditor((s) => s.update);
	const globals = useEditor((s) => s.globals);
	const toggleGlobal = useEditor((s) => s.toggleGlobal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Spacing",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
				label: "Margin",
				min: 0,
				max: 48,
				suffix: "px",
				value: node.margin,
				onChange: (margin) => update(id, { margin }, "Margin")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
				label: "Padding",
				min: 0,
				max: 80,
				suffix: "px",
				value: node.pad,
				onChange: (pad) => update(id, { pad }, "Padding")
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Motion effects",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex flex-col gap-1.5 text-micro font-medium text-muted",
				children: ["Entrance animation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: "panel-input",
					value: node.motion,
					onChange: (e) => update(id, { motion: e.target.value }, "Motion"),
					children: [
						{
							id: "none",
							label: "None"
						},
						{
							id: "fade",
							label: "Fade in"
						},
						{
							id: "up",
							label: "Fade in up"
						},
						{
							id: "zoom",
							label: "Zoom in"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.id,
						children: item.label
					}, item.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-micro text-muted",
				children: "Duration 560ms · ease · once"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Responsive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-micro text-muted",
				children: "Hide this element on a breakpoint. A dashed bar keeps it selectable."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisButton, {
						id,
						device: "desktop",
						on: node.showDesktop,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisButton, {
						id,
						device: "tablet",
						on: node.showTablet,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabletSmartphone, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisButton, {
						id,
						device: "mobile",
						on: node.showMobile,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4" })
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Custom CSS",
			openDefault: false,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex flex-col gap-1.5 text-micro font-medium text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "size-3.5" }), " CSS"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "panel-area",
						value: node.cssNote,
						placeholder: "selector {\n  /* scoped to this element */\n}",
						onChange: (e) => update(id, { cssNote: e.target.value }, "Custom CSS")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextControl, {
					id,
					prop: "cssClass",
					label: "CSS classes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-micro text-muted",
					children: ["CSS ID · harbor-", id]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Advanced",
			openDefault: false,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
				label: "Z-index",
				min: 0,
				max: 20,
				value: node.z,
				onChange: (z) => update(id, { z }, "Z-index")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("h-9 rounded-md text-caption", globals.includes(id) ? "bg-accent text-accent-ink" : "border border-line"),
				onClick: () => toggleGlobal(id),
				children: globals.includes(id) ? "Saved as global widget" : "Save as global widget"
			})]
		})
	] });
}
function VisButton({ id, device, on, icon }) {
	const update = useEditor((s) => s.update);
	const key = device === "desktop" ? "showDesktop" : device === "tablet" ? "showTablet" : "showMobile";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: cn("flex h-11 flex-col items-center justify-center gap-0.5 rounded-md border border-line text-micro", on ? "text-ink" : "bg-paper text-faint"),
		"aria-pressed": on,
		onClick: () => update(id, { [key]: !on }, "Responsive"),
		children: [icon, on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3" })]
	});
}
function Toggle({ label, on = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between text-caption",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			defaultChecked: on
		})]
	});
}
var QuietContext = (0, import_react.createContext)(false);
var DeviceContext = (0, import_react.createContext)(null);
function useNode(id) {
	const patch = useEditor((s) => s.patches[id]);
	return getNode(patch ? { [id]: patch } : {}, id);
}
function useDevice() {
	const override = (0, import_react.useContext)(DeviceContext);
	const device = useEditor((s) => s.device);
	return override ?? device;
}
function boxStyle(node) {
	return {
		background: node.bg,
		color: node.color,
		padding: node.pad || void 0,
		gap: node.gap,
		borderRadius: node.radius || void 0,
		boxShadow: shadowCss(node.shadow),
		borderWidth: node.border || void 0,
		borderStyle: node.border ? "solid" : void 0,
		borderColor: node.border ? "color-mix(in srgb, currentColor 35%, var(--color-line))" : void 0,
		textAlign: node.align
	};
}
function typeStyle(node) {
	return {
		color: node.color,
		fontSize: node.size,
		fontWeight: node.weight,
		textAlign: node.align,
		letterSpacing: node.tracking ? `${node.tracking}em` : void 0,
		fontFamily: node.family === "display" ? "var(--font-display)" : void 0,
		textTransform: node.upper ? "uppercase" : void 0,
		lineHeight: node.family === "display" ? 1.12 : 1.5,
		margin: 0
	};
}
function Frame({ id, className, style, children }) {
	const quiet = (0, import_react.useContext)(QuietContext);
	const node = useNode(id);
	const meta = META[id];
	const selected = useEditor((s) => s.selected === id);
	const hovered = useEditor((s) => s.hovered === id);
	const guides = useEditor((s) => s.guides);
	const preview = useEditor((s) => s.preview);
	const hidden = useEditor((s) => s.hidden.includes(id));
	const global = useEditor((s) => s.globals.includes(id));
	const select = useEditor((s) => s.select);
	const setHovered = useEditor((s) => s.setHovered);
	const device = useDevice();
	if (!meta) return null;
	if (hidden || hiddenOn(node, device)) {
		if (quiet || preview || !selected && !guides) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "hidden-bar",
			onClick: (e) => {
				e.stopPropagation();
				select(id);
			},
			children: [
				meta.label,
				" hidden ",
				hidden ? "on canvas" : `on ${device}`
			]
		});
	}
	const chrome = !quiet && !preview;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-node": id,
		className: cn("frame", node.motion !== "none" && `anim-${node.motion}`, className, chrome && guides && meta.kind === "container" && "is-guide", chrome && hovered && !selected && "is-hover", chrome && selected && "is-selected"),
		style: {
			zIndex: node.z || void 0,
			margin: node.margin || void 0,
			...style
		},
		onMouseOver: (e) => {
			if (!chrome) return;
			e.stopPropagation();
			setHovered(id);
		},
		onMouseLeave: () => {
			if (useEditor.getState().hovered === id) setHovered(null);
		},
		onClick: (e) => {
			if (!chrome) return;
			e.stopPropagation();
			select(id);
		},
		children: [chrome && (selected || hovered) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
			id,
			label: meta.label,
			pro: !!meta.pro,
			globalMark: global,
			faint: !selected
		}) : null, children]
	});
}
function Handle({ id, label, pro, globalMark, faint }) {
	const [menu, setMenu] = (0, import_react.useState)(null);
	const setDragging = useEditor((s) => s.setDragging);
	const addInsert = useEditor((s) => s.addInsert);
	const toggleHidden = useEditor((s) => s.toggleHidden);
	const toggleGlobal = useEditor((s) => s.toggleGlobal);
	const toast = useEditor((s) => s.toast);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("handle", faint && "faint"),
		onClick: (e) => e.stopPropagation(),
		children: [
			REORDER.has(id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				draggable: true,
				className: "inline-flex cursor-grab",
				"aria-label": "Drag section",
				onDragStart: (e) => {
					e.stopPropagation();
					e.dataTransfer.setData("text/section", id);
					e.dataTransfer.effectAllowed = "move";
					setDragging(id);
				},
				onDragEnd: () => setDragging(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "size-3.5" })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "px-1",
				children: [
					label,
					pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
						className: "pro-tag ml-1 text-accent-ink",
						children: "PRO"
					}) : null,
					globalMark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
						className: "pro-tag ml-1",
						children: "GLOBAL"
					}) : null
				]
			}),
			CONTAINERS.has(id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Add inside",
				onClick: () => setMenu(menu === "plus" ? null : "plus"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "More actions",
				onClick: () => setMenu(menu === "more" ? null : "more"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-3.5" })
			}),
			menu === "plus" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "handle-pop",
				children: [
					"heading",
					"text",
					"button",
					"image",
					"spacer",
					"divider"
				].map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						addInsert(id, kind);
						setMenu(null);
					},
					children: kind
				}, kind))
			}) : null,
			menu === "more" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "handle-pop",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							toggleHidden(id);
							setMenu(null);
						},
						children: "Hide on canvas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							toggleGlobal(id);
							setMenu(null);
						},
						children: "Toggle global widget"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							const node = getNode(useEditor.getState().patches, id);
							navigator.clipboard?.writeText(JSON.stringify({
								color: node.color,
								bg: node.bg,
								radius: node.radius
							}));
							toast("Style copied");
							setMenu(null);
						},
						children: "Copy style"
					})
				]
			}) : null
		]
	});
}
function SectionSlot({ id, children }) {
	const move = useEditor((s) => s.moveSection);
	const setDragging = useEditor((s) => s.setDragging);
	const [over, setOver] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("section-slot", over && "is-over"),
		onDragOver: (e) => {
			const types = Array.from(e.dataTransfer.types);
			if (types.includes("text/section") || types.includes("application/widget") || types.includes("text/plain")) {
				e.preventDefault();
				setOver(true);
			}
		},
		onDragLeave: () => setOver(false),
		onDrop: (e) => {
			e.preventDefault();
			setOver(false);
			const widget = e.dataTransfer.getData("application/widget") || "";
			const from = e.dataTransfer.getData("text/section");
			if (widget && INSERTABLE[widget]) dropWidget(id, widget);
			else if (widget) dropWidget(id, widget);
			else if (from) move(from, id);
			setDragging(null);
		},
		children
	});
}
function InsertList({ parent }) {
	const mine = useEditor((s) => s.inserts).filter((item) => item.parent === parent);
	if (!mine.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "span-all flex flex-col gap-3",
		children: mine.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsertCard, { item }, item.id))
	});
}
function InsertCard({ item }) {
	const selected = useEditor((s) => s.selected === item.id);
	const select = useEditor((s) => s.select);
	const quiet = (0, import_react.useContext)(QuietContext);
	const preview = useEditor((s) => s.preview);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-node": item.id,
		className: cn("frame rounded-md", !quiet && !preview && selected && "is-selected"),
		onClick: (e) => {
			if (quiet || preview) return;
			e.stopPropagation();
			select(item.id);
		},
		children: [
			item.kind === "heading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "font-display text-2xl",
				children: item.text
			}) : null,
			item.kind === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-caption text-muted",
				children: item.text
			}) : null,
			item.kind === "button" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "btn-site",
				style: {
					background: "var(--color-accent)",
					color: "var(--color-accent-ink)",
					borderRadius: 6,
					padding: "12px 16px"
				},
				children: item.text
			}) : null,
			item.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/studio/still.jpg",
				alt: item.text,
				className: "h-28 w-full rounded-md object-cover"
			}) : null,
			item.kind === "spacer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 border border-dashed border-line" }) : null,
			item.kind === "divider" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-line" }) : null
		]
	});
}
function Heading$1({ id, as = "h2" }) {
	const node = useNode(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		id,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as, {
			style: typeStyle(node),
			children: resolveText(node)
		})
	});
}
function Copy({ id }) {
	const node = useNode(id);
	const parts = resolveText(node).split("\n\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		id,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: typeStyle(node),
			className: "max-w-xl",
			children: parts.map((part, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: index < parts.length - 1 ? "mb-3" : void 0,
				children: part
			}, index))
		})
	});
}
function SiteButton({ id }) {
	const node = useNode(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		id,
		className: "w-fit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "btn-site",
			href: node.href || "#",
			style: {
				background: node.bg,
				color: node.color,
				borderRadius: node.radius,
				fontSize: node.size,
				fontWeight: node.weight,
				padding: `${Math.max(10, node.pad)}px ${Math.max(16, node.pad + 8)}px`,
				borderWidth: node.border,
				borderColor: node.color,
				boxShadow: shadowCss(node.shadow)
			},
			onClick: (e) => {
				e.preventDefault();
				if (node.href === "#visit") document.querySelector(".is-live [data-node='cta']")?.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
				if (node.href === "#journal") useEditor.getState().setMode("archive");
			},
			children: resolveText(node)
		})
	});
}
function Photo({ id, ratio = "ratio-portrait" }) {
	const node = useNode(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		id,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: PHOTOS[id],
			alt: node.text,
			className: cn("w-full object-cover", ratio),
			style: {
				borderRadius: node.radius,
				boxShadow: shadowCss(node.shadow)
			}
		})
	});
}
function FormView({ id }) {
	const node = useNode(id);
	const fields = useEditor((s) => s.fields);
	const toast = useEditor((s) => s.toast);
	const buttonId = linkedButton(id);
	const list = id === "cta-form" ? fields : [{
		id: "mail",
		label: "Email",
		type: "email",
		placeholder: "you@studio.com"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		id,
		style: boxStyle(node),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid",
			style: { gap: node.gap },
			onSubmit: (e) => {
				e.preventDefault();
				toast("Preview only — nothing is sent");
			},
			children: [list.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "site-field",
				style: {
					color: node.color,
					fontSize: node.size
				},
				children: [field.label, field.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					defaultValue: "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: field.placeholder
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "House" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Hotel" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "A single room" })
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: field.type,
					placeholder: field.placeholder,
					"aria-label": field.label
				})]
			}, field.id)), buttonId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteButton, { id: buttonId }) : null]
		})
	});
}
function LogoMark() {
	const node = useNode("logo");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: typeStyle(node),
		children: resolveText(node)
	});
}
function NavMark() {
	const node = useNode("nav");
	const items = node.text.split(",").map((item) => item.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "nav-links m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0",
		style: typeStyle(node),
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "nav-burger",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
	})] });
}
function HeaderBar({ live }) {
	const header = useNode("header");
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
		style: {
			background: header.bg,
			color: header.color
		},
		children: [
			live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				id: "logo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}),
			live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				id: "nav",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMark, {})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMark, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteButton, { id: "header-btn" })
		]
	});
	if (!live) return inner;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		id: "header",
		style: { background: header.bg },
		children: inner
	});
}
function FooterBar({ live }) {
	const node = useNode("footer");
	const footerLinks = useNode("footer-links");
	const logo = useNode("logo");
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "footer-grid",
		style: live ? void 0 : boxStyle(node),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					...typeStyle(logo),
					color: node.color
				},
				children: resolveText(logo)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-caption",
				style: { opacity: .82 },
				children: node.text
			})] }),
			live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				id: "footer-links",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkList, { node: footerLinks })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkList, { node: footerLinks }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-caption",
				style: { opacity: .82 },
				children: node.sub
			})
		]
	});
	if (!live) return body;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		id: "footer",
		style: boxStyle(node),
		children: body
	});
}
function LinkList({ node }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "m-0 flex list-none flex-col gap-1 p-0",
		style: {
			color: node.color,
			fontSize: node.size
		},
		children: node.text.split(",").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item.trim() }, item))
	});
}
function Locked({ chrome }) {
	const setMode = useEditor((s) => s.setMode);
	const guides = useEditor((s) => s.guides);
	const preview = useEditor((s) => s.preview);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			chrome === "header" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBar, { live: false }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterBar, { live: false }),
			!preview && guides ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "lock-ring" }) : null,
			!preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "lock-chip",
				onClick: (e) => {
					e.stopPropagation();
					setMode(chrome);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), chrome === "header" ? "Header · Theme Builder" : "Footer · Theme Builder"]
			}) : null
		]
	});
}
function Hero() {
	const hero = useNode("hero");
	const col1 = useNode("hero-col-1");
	const col2 = useNode("hero-col-2");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionSlot, {
		id: "hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			id: "hero",
			className: "cols-hero",
			style: boxStyle(hero),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
					id: "hero-col-1",
					className: "flex min-w-0 flex-col justify-center",
					style: boxStyle(col1),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading$1, {
							id: "hero-kicker",
							as: "p"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading$1, {
							id: "hero-title",
							as: "h1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { id: "hero-text" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteButton, { id: "hero-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteButton, { id: "hero-secondary" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsertList, { parent: "hero-col-1" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					id: "hero-col-2",
					style: boxStyle(col2),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, { id: "hero-image" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsertList, { parent: "hero" })
			]
		})
	});
}
function Feature({ id, index }) {
	const node = useNode(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		id,
		style: boxStyle(node),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			style: { borderRadius: node.radius || void 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: PHOTOS[id],
				alt: "",
				className: "ratio-landscape w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-micro font-bold tracking-wide text-accent",
					children: index
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					style: {
						color: node.color,
						margin: 0
					},
					children: node.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-caption text-muted",
					children: node.sub
				})
			]
		})]
	});
}
function Features() {
	const node = useNode("features");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionSlot, {
		id: "features",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			id: "features",
			className: "cols-3",
			style: boxStyle(node),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					id: "feat-1",
					index: "01"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					id: "feat-2",
					index: "02"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					id: "feat-3",
					index: "03"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsertList, { parent: "features" })
			]
		})
	});
}
function Quote$1({ id }) {
	const node = useNode(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		id,
		style: {
			background: node.bg,
			borderRadius: node.radius,
			padding: node.pad || 4
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			style: typeStyle(node),
			children: [
				"“",
				node.text,
				"”"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-caption text-muted",
			children: node.sub
		})]
	});
}
function Quotes() {
	const node = useNode("quotes");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionSlot, {
		id: "quotes",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			id: "quotes",
			className: "quotes-grid",
			style: boxStyle(node),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote$1, { id: "quote-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote$1, { id: "quote-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote$1, { id: "quote-3" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsertList, { parent: "quotes" })
			]
		})
	});
}
function Cta() {
	const node = useNode("cta");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionSlot, {
		id: "cta",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			id: "cta",
			className: "cta-grid",
			style: boxStyle(node),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading$1, {
						id: "cta-title",
						as: "h2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { id: "cta-text" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormView, { id: "cta-form" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsertList, { parent: "cta" })
			]
		})
	});
}
function SingleMode() {
	const node = useNode("single");
	const author = useNode("author");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		id: "single",
		className: "mx-auto flex max-w-3xl flex-col gap-5",
		style: boxStyle(node),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-micro font-bold uppercase tracking-wide text-accent",
				children: "Journal · 12 min"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading$1, {
				id: "single-title",
				as: "h1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				id: "single-image",
				ratio: "ratio-landscape"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { id: "single-content" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				id: "author",
				style: boxStyle(author),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-accent font-display text-accent-ink",
						children: "AS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: author.text
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-caption text-muted",
						children: author.sub
					})] })]
				})
			})
		]
	});
}
function ArchiveMode() {
	const node = useNode("archive");
	const loop = useNode("loop");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		id: "archive",
		style: boxStyle(node),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading$1, {
				id: "archive-title",
				as: "h1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-lg text-caption text-muted",
				children: "Notes from houses, materials, and the year on site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				id: "loop",
				className: "archive-grid",
				style: boxStyle(loop),
				children: POSTS.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-lg border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.img,
						alt: "",
						className: "ratio-landscape w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-micro font-bold uppercase tracking-wide text-accent",
							children: post.meta
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-lg",
							children: post.title
						})]
					})]
				}, post.title))
			})
		]
	});
}
function PopupMode() {
	const popup = useNode("popup");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-[70vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none select-none opacity-45",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBar, { live: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 flex items-start justify-center bg-ink/50 px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
					id: "popup",
					style: boxStyle(popup),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-micro font-bold uppercase tracking-wide text-accent",
							children: "Popup · exit intent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading$1, {
							id: "popup-title",
							as: "h2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { id: "popup-text" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormView, { id: "popup-form" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-3 text-caption text-muted",
							onClick: (e) => {
								e.stopPropagation();
								useEditor.getState().setMode("page");
							},
							children: "No thanks"
						})
					]
				})
			})
		})]
	});
}
function PageBody({ quiet = false, deviceOverride }) {
	const mode = useEditor((s) => s.mode);
	const order = useEditor((s) => s.order);
	const layout = useEditor((s) => s.layout);
	const storeDevice = useEditor((s) => s.device);
	const pageBg = useEditor((s) => s.pageBg);
	const device = deviceOverride ?? storeDevice;
	const sections = {
		hero: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}, "hero"),
		features: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}, "features"),
		quotes: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quotes, {}, "quotes"),
		cta: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {}, "cta")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuietContext.Provider, {
		value: quiet,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceContext.Provider, {
			value: device,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("sheet-wrap", `device-${device}`, !quiet && "is-live"),
				children: [device !== "desktop" && !quiet ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "device-label",
					children: [device === "tablet" ? "Tablet · 768" : "Mobile · 390", " · editing breakpoint"]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-sheet",
					style: { background: pageBg },
					onClick: (e) => e.stopPropagation(),
					children: [
						mode === "page" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							layout === "theme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locked, { chrome: "header" }) : null,
							order.map((id) => sections[id]),
							layout === "theme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locked, { chrome: "footer" }) : null
						] }) : null,
						mode === "header" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "bg-paper px-5 py-3 text-caption text-muted",
								children: "Header template. Display condition: entire site."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBar, { live: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-5 py-16 text-center text-caption text-faint",
								children: "Page content from other templates renders below this bar."
							})
						] }) : null,
						mode === "footer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 py-16 text-center text-caption text-faint",
							children: "Page content ends here."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterBar, { live: true })] }) : null,
						mode === "single" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SingleMode, {}) : null,
						mode === "archive" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveMode, {}) : null,
						mode === "popup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopupMode, {}) : null
					]
				})]
			})
		})
	});
}
function Canvas() {
	const select = useEditor((s) => s.select);
	const selected = useEditor((s) => s.selected);
	const preview = useEditor((s) => s.preview);
	const skipScroll = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		if (skipScroll.current) {
			skipScroll.current = false;
			return;
		}
		if (!selected) return;
		document.querySelector(`.is-live [data-node="${CSS.escape(selected)}"]`)?.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	}, [selected]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "stage-scroll",
		onClick: () => {
			if (!preview) select(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBody, {})
	});
}
function MobilePeek() {
	const mode = useEditor((s) => s.mode);
	const device = useEditor((s) => s.device);
	const preview = useEditor((s) => s.preview);
	const setDevice = useEditor((s) => s.setDevice);
	if (mode !== "page" || device !== "desktop" || preview) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "peek",
		role: "button",
		tabIndex: 0,
		onClick: () => setDevice("mobile"),
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") setDevice("mobile");
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "peek-bar",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mobile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "390" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "peek-window",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "peek-scale",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBody, {
					quiet: true,
					deviceOverride: "mobile"
				})
			})
		})]
	});
}
function withInserts(children, inserts, parent) {
	return [...children, ...inserts.filter((item) => item.parent === parent).map((item) => ({ id: item.id }))];
}
function treeFor(mode, order, inserts) {
	if (mode === "header") return [{
		id: "header",
		children: [
			{ id: "logo" },
			{ id: "nav" },
			{ id: "header-btn" }
		]
	}];
	if (mode === "footer") return [{
		id: "footer",
		children: [{ id: "footer-links" }]
	}];
	if (mode === "single") return [{
		id: "single",
		children: [
			{ id: "single-title" },
			{ id: "single-image" },
			{ id: "single-content" },
			{ id: "author" }
		]
	}];
	if (mode === "archive") return [{
		id: "archive",
		children: [{ id: "archive-title" }, { id: "loop" }]
	}];
	if (mode === "popup") return [{
		id: "popup",
		children: [
			{ id: "popup-title" },
			{ id: "popup-text" },
			{
				id: "popup-form",
				children: [{ id: "popup-button" }]
			}
		]
	}];
	const sections = {
		hero: {
			id: "hero",
			children: [{
				id: "hero-col-1",
				children: withInserts([
					{ id: "hero-kicker" },
					{ id: "hero-title" },
					{ id: "hero-text" },
					{ id: "hero-primary" },
					{ id: "hero-secondary" }
				], inserts, "hero-col-1")
			}, {
				id: "hero-col-2",
				children: [{ id: "hero-image" }]
			}]
		},
		features: {
			id: "features",
			children: withInserts([
				{ id: "feat-1" },
				{ id: "feat-2" },
				{ id: "feat-3" }
			], inserts, "features")
		},
		quotes: {
			id: "quotes",
			children: withInserts([
				{ id: "quote-1" },
				{ id: "quote-2" },
				{ id: "quote-3" }
			], inserts, "quotes")
		},
		cta: {
			id: "cta",
			children: withInserts([
				{ id: "cta-title" },
				{ id: "cta-text" },
				{
					id: "cta-form",
					children: [{ id: "cta-button" }]
				}
			], inserts, "cta")
		}
	};
	return [
		{
			id: "header",
			children: [
				{ id: "logo" },
				{ id: "nav" },
				{ id: "header-btn" }
			]
		},
		...order.map((id) => sections[id]),
		{
			id: "footer",
			children: [{ id: "footer-links" }]
		}
	];
}
function Navigator() {
	const open = useEditor((s) => s.navigatorOpen);
	const preview = useEditor((s) => s.preview);
	const mode = useEditor((s) => s.mode);
	const order = useEditor((s) => s.order);
	const inserts = useEditor((s) => s.inserts);
	const setNavigator = useEditor((s) => s.setNavigator);
	if (!open || preview) return null;
	const branches = treeFor(mode, order, inserts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "navigator",
		"aria-label": "Navigator",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-line px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-caption",
				children: "Navigator"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "ml-auto text-muted",
				"aria-label": "Close navigator",
				onClick: () => setNavigator(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scrollthin-light min-h-0 flex-1 overflow-auto p-2",
			children: branches.map((branch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				branch,
				depth: 0,
				inserts
			}, branch.id))
		})]
	});
}
function Row({ branch, depth, inserts }) {
	const [open, setOpen] = (0, import_react.useState)(true);
	const selected = useEditor((s) => s.selected === branch.id);
	const hidden = useEditor((s) => s.hidden.includes(branch.id));
	const select = useEditor((s) => s.select);
	const toggleHidden = useEditor((s) => s.toggleHidden);
	const insert = inserts.find((item) => item.id === branch.id);
	const label = META[branch.id]?.label ?? insert?.kind ?? branch.id;
	const hasKids = !!branch.children?.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("nav-row", selected && "is-on"),
		style: { paddingLeft: depth ? depth * 12 : 4 },
		children: [
			hasKids ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": open ? "Collapse" : "Expand",
				onClick: () => setOpen((v) => !v),
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-3.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-w-0 flex-1 truncate text-left",
				onClick: () => select(branch.id),
				children: label
			}),
			META[branch.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": hidden ? "Show" : "Hide",
				onClick: () => toggleHidden(branch.id),
				children: hidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 text-faint" })
			}) : null
		]
	}), open && branch.children ? branch.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
		branch: child,
		depth: depth + 1,
		inserts
	}, child.id)) : null] });
}
function Overlays() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toasts, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Finder, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guide, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callouts, {})
	] });
}
function Toasts() {
	const toasts = useEditor((s) => s.toasts);
	if (!toasts.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "toast-wrap",
		"aria-live": "polite",
		children: toasts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "toast",
			children: item.text
		}, item.id))
	});
}
function Library() {
	const open = useEditor((s) => s.libraryOpen);
	const setLibrary = useEditor((s) => s.setLibrary);
	const saved = useEditor((s) => s.savedTemplates);
	const toast = useEditor((s) => s.toast);
	const [tab, setTab] = (0, import_react.useState)("Blocks");
	if (!open) return null;
	const cards = tab === "Mine" ? saved.map((name) => ({
		id: name,
		name,
		kind: "Mine"
	})) : TEMPLATES.filter((item) => tab === "Pages" ? item.kind === "Page" : item.kind === "Block");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "modal-root",
		role: "dialog",
		"aria-modal": true,
		"aria-label": "Template library",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "modal-scrim",
			"aria-label": "Close library",
			onClick: () => setLibrary(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-line px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Template library" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pro-pill",
							children: "Pro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "ml-auto tool-btn",
							"aria-label": "Close",
							onClick: () => setLibrary(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 px-4 pt-3",
					children: [
						"Blocks",
						"Pages",
						"Mine"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("h-9 rounded-full px-3 text-caption", tab === item ? "bg-ink text-card" : "bg-paper"),
						onClick: () => setTab(item),
						children: item === "Mine" ? "My templates" : item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 p-4 sm:grid-cols-2",
					children: [cards.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-caption text-muted",
						children: "Save the current page from the Publish menu. It will land here."
					}) : null, cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "template-card",
						onClick: () => {
							toast(`${card.name} inserted on the canvas`);
							setLibrary(false);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, { kind: card.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-caption font-semibold",
								children: card.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-micro text-muted",
								children: card.kind
							})
						]
					}, card.id))]
				})
			]
		})]
	});
}
function Mini({ kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mini",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col gap-1 p-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-1/3 rounded-full bg-accent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2/3 rounded-full bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto grid flex-1 grid-cols-3 gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-sm bg-paper" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("rounded-sm", kind.toLowerCase().includes("form") || kind.toLowerCase().includes("visit") ? "bg-accent" : "bg-paper") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-sm bg-line" })
					]
				})
			]
		})
	});
}
function Finder() {
	const open = useEditor((s) => s.finderOpen);
	const setFinder = useEditor((s) => s.setFinder);
	const setMode = useEditor((s) => s.setMode);
	const focusWidget = useEditor((s) => s.focusWidget);
	const [query, setQuery] = (0, import_react.useState)("");
	if (!open) return null;
	const q = query.trim().toLowerCase();
	const pages = PAGES.filter((page) => !q || page.label.toLowerCase().includes(q) || page.sub.toLowerCase().includes(q));
	const widgets = WIDGETS.filter((widget) => !q || widget.name.toLowerCase().includes(q)).slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "modal-root",
		role: "dialog",
		"aria-modal": true,
		"aria-label": "Finder",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "modal-scrim",
			"aria-label": "Close finder",
			onClick: () => setFinder(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-card finder",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					className: "panel-input",
					placeholder: "Find a widget or template",
					value: query,
					"aria-label": "Finder",
					onChange: (e) => setQuery(e.target.value)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-80 overflow-auto p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 py-1 text-micro font-bold uppercase tracking-wide text-faint",
						children: "Templates"
					}),
					pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-center rounded-md px-2 py-2 text-left text-caption hover:bg-paper",
						onClick: () => {
							setMode(page.id);
							setFinder(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1",
							children: page.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-micro text-muted",
							children: page.sub
						})]
					}, page.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 py-1 text-micro font-bold uppercase tracking-wide text-faint",
						children: "Widgets"
					}),
					widgets.map((widget) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-center rounded-md px-2 py-2 text-left text-caption hover:bg-paper",
						onClick: () => {
							focusWidget(widget.id);
							setFinder(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1",
							children: widget.name
						}), widget.pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pro-pill",
							children: "Pro"
						}) : null]
					}, widget.id))
				]
			})]
		})]
	});
}
function Guide() {
	const open = useEditor((s) => s.guideOpen);
	const setGuide = useEditor((s) => s.setGuide);
	const callouts = useEditor((s) => s.callouts);
	const setCallouts = useEditor((s) => s.setCallouts);
	const toast = useEditor((s) => s.toast);
	const [copied, setCopied] = (0, import_react.useState)(false);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "modal-root",
		role: "dialog",
		"aria-modal": true,
		"aria-label": "Studio guide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "modal-scrim",
			"aria-label": "Close guide",
			onClick: () => setGuide(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-line px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Studio guide" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ml-auto tool-btn",
					"aria-label": "Close",
					onClick: () => setGuide(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 p-4 text-caption",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: GUIDE.overview }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: GUIDE.panels.map((panel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "text-accent",
							children: [
								panel.n,
								". ",
								panel.title,
								". "
							]
						}), panel.body]
					}, panel.n)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Interaction states" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-1 list-disc pl-4",
						children: GUIDE.states.map((state) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: state }, state))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("h-10 rounded-md px-3", callouts ? "bg-accent text-accent-ink" : "bg-paper"),
						onClick: () => setCallouts(!callouts),
						children: callouts ? "Hide numbered callouts" : "Show numbered callouts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Image prompt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex items-center gap-1 text-accent",
							onClick: () => {
								navigator.clipboard?.writeText(IMAGE_PROMPT);
								setCopied(true);
								toast("Prompt copied");
							},
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : null, "Copy"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "panel-area",
						readOnly: true,
						value: IMAGE_PROMPT
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-micro text-muted",
						children: "An interactive study of the Elementor editor for design reference. Not affiliated with Elementor Ltd."
					})
				]
			})]
		})]
	});
}
function Callouts() {
	if (!useEditor((s) => s.callouts)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "callout-layer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
				n: "1",
				title: "Top bar",
				style: {
					top: 10,
					left: "38%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
				n: "2",
				title: "Widgets",
				style: {
					top: 128,
					left: 16
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
				n: "3",
				title: "Canvas",
				style: {
					top: "46%",
					left: "42%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
				n: "4",
				title: "Inspector",
				style: {
					top: 132,
					right: 18
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
				n: "5",
				title: "Navigator",
				style: {
					top: 78,
					left: "22%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
				n: "6",
				title: "Theme Builder",
				style: {
					top: 14,
					right: 210
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
				n: "7",
				title: "Publish",
				style: {
					top: 14,
					right: 72
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "legend",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-caption",
					children: "Annotated layout"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex flex-col gap-1 text-micro",
					children: GUIDE.panels.map((panel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-accent",
							children: panel.n
						}),
						" ",
						panel.title
					] }, panel.n))
				})]
			})
		]
	});
}
function Pin({ n, title, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "pin",
		style,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title })]
	});
}
function Editor() {
	const preview = useEditor((s) => s.preview);
	const leftOpen = useEditor((s) => s.leftOpen);
	const rightOpen = useEditor((s) => s.rightOpen);
	const navigatorOpen = useEditor((s) => s.navigatorOpen);
	const device = useEditor((s) => s.device);
	const setLeft = useEditor((s) => s.setLeft);
	const setRight = useEditor((s) => s.setRight);
	const setNavigator = useEditor((s) => s.setNavigator);
	const setLibrary = useEditor((s) => s.setLibrary);
	const setPreview = useEditor((s) => s.setPreview);
	const setDevice = useEditor((s) => s.setDevice);
	const close = useEditor((s) => s.closeOverlays);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(max-width: 1099px)").matches) useEditor.setState({ navigatorOpen: false });
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const typing = !!event.target?.closest("input, textarea, select, [contenteditable='true']");
			const meta = event.metaKey || event.ctrlKey;
			const state = useEditor.getState();
			if (meta && event.key.toLowerCase() === "z") {
				event.preventDefault();
				if (event.shiftKey) state.redo();
				else state.undo();
				return;
			}
			if (meta && event.key.toLowerCase() === "k") {
				event.preventDefault();
				state.setFinder(true);
				return;
			}
			if (event.key === "Escape") {
				state.closeOverlays();
				return;
			}
			if (event.key === "Delete" && !typing && state.selected) {
				const id = state.selected;
				if (state.inserts.some((item) => item.id === id)) state.removeInsert(id);
				else state.toggleHidden(id);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const cycleDevice = () => {
		const order = [
			"desktop",
			"tablet",
			"mobile"
		];
		const next = order[(order.indexOf(device) + 1) % order.length];
		setDevice(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("shell", preview && "is-preview", leftOpen && "show-left", rightOpen && "show-right", navigatorOpen && "show-nav"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "workspace",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "panel-left",
						"aria-label": "Widgets",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stage",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePeek, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "panel-right",
						"aria-label": "Element settings",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "dock",
				"aria-label": "Editor",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: leftOpen ? "is-on" : "",
						onClick: () => setLeft(!leftOpen),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchBook, { className: "size-5" }), "Widgets"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: navigatorOpen ? "is-on" : "",
						onClick: () => setNavigator(!navigatorOpen),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5" }), "Structure"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: cycleDevice,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorSmartphone, { className: "size-5" }), device === "desktop" ? "Desktop" : device === "tablet" ? "Tablet" : "Mobile"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setLibrary(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-5" }), "Library"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: rightOpen ? "is-on" : "",
						onClick: () => preview ? setPreview(false) : setRight(!rightOpen),
						children: [preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-5" }), preview ? "Edit" : "Style"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "scrim",
				"aria-label": "Close panel",
				onClick: () => close()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlays, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, {});
}
//#endregion
export { Home as component };
