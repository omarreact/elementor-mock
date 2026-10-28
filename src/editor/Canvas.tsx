import { createContext, useContext, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { GripVertical, Lock, Menu, MoreHorizontal, Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  CONTAINERS,
  INSERTABLE,
  META,
  PHOTOS,
  POSTS,
  REORDER,
  getNode,
  hiddenOn,
  linkedButton,
  resolveText,
  shadowCss,
  type Device,
  type Insert,
  type InsertKind,
  type NodeState,
} from "./model";
import { dropWidget, useEditor } from "./store";

const QuietContext = createContext(false);
const DeviceContext = createContext<Device | null>(null);

function useNode(id: string) {
  const patch = useEditor((s) => s.patches[id]);
  return getNode(patch ? { [id]: patch } : {}, id);
}

function useDevice() {
  const override = useContext(DeviceContext);
  const device = useEditor((s) => s.device);
  return override ?? device;
}

function boxStyle(node: NodeState): CSSProperties {
  return {
    background: node.bg,
    color: node.color,
    padding: node.pad || undefined,
    gap: node.gap,
    borderRadius: node.radius || undefined,
    boxShadow: shadowCss(node.shadow),
    borderWidth: node.border || undefined,
    borderStyle: node.border ? "solid" : undefined,
    borderColor: node.border ? "color-mix(in srgb, currentColor 35%, var(--color-line))" : undefined,
    textAlign: node.align,
  };
}

function typeStyle(node: NodeState): CSSProperties {
  return {
    color: node.color,
    fontSize: node.size,
    fontWeight: node.weight,
    textAlign: node.align,
    letterSpacing: node.tracking ? `${node.tracking}em` : undefined,
    fontFamily: node.family === "display" ? "var(--font-display)" : undefined,
    textTransform: node.upper ? "uppercase" : undefined,
    lineHeight: node.family === "display" ? 1.12 : 1.5,
    margin: 0,
  };
}

function Frame({
  id,
  className,
  style,
  children,
}: {
  id: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const quiet = useContext(QuietContext);
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
  const off = hidden || hiddenOn(node, device);
  if (off) {
    if (quiet || preview || (!selected && !guides)) return null;
    return (
      <button
        type="button"
        className="hidden-bar"
        onClick={(e) => {
          e.stopPropagation();
          select(id);
        }}
      >
        {meta.label} hidden {hidden ? "on canvas" : `on ${device}`}
      </button>
    );
  }
  const chrome = !quiet && !preview;
  return (
    <div
      data-node={id}
      className={cn(
        "frame",
        node.motion !== "none" && `anim-${node.motion}`,
        className,
        chrome && guides && meta.kind === "container" && "is-guide",
        chrome && hovered && !selected && "is-hover",
        chrome && selected && "is-selected",
      )}
      style={{ zIndex: node.z || undefined, margin: node.margin || undefined, ...style }}
      onMouseOver={(e) => {
        if (!chrome) return;
        e.stopPropagation();
        setHovered(id);
      }}
      onMouseLeave={() => {
        if (useEditor.getState().hovered === id) setHovered(null);
      }}
      onClick={(e) => {
        if (!chrome) return;
        e.stopPropagation();
        select(id);
      }}
    >
      {chrome && (selected || hovered) ? <Handle id={id} label={meta.label} pro={!!meta.pro} globalMark={global} faint={!selected} /> : null}
      {children}
    </div>
  );
}

function Handle({
  id,
  label,
  pro,
  globalMark,
  faint,
}: {
  id: string;
  label: string;
  pro: boolean;
  globalMark: boolean;
  faint: boolean;
}) {
  const [menu, setMenu] = useState<"plus" | "more" | null>(null);
  const setDragging = useEditor((s) => s.setDragging);
  const addInsert = useEditor((s) => s.addInsert);
  const toggleHidden = useEditor((s) => s.toggleHidden);
  const toggleGlobal = useEditor((s) => s.toggleGlobal);
  const toast = useEditor((s) => s.toast);
  return (
    <div className={cn("handle", faint && "faint")} onClick={(e) => e.stopPropagation()}>
      {REORDER.has(id) ? (
        <span
          draggable
          className="inline-flex cursor-grab"
          aria-label="Drag section"
          onDragStart={(e) => {
            e.stopPropagation();
            e.dataTransfer.setData("text/section", id);
            e.dataTransfer.effectAllowed = "move";
            setDragging(id);
          }}
          onDragEnd={() => setDragging(null)}
        >
          <GripVertical className="size-3.5" />
        </span>
      ) : null}
      <span className="px-1">
        {label}
        {pro ? <i className="pro-tag ml-1 text-accent-ink">PRO</i> : null}
        {globalMark ? <i className="pro-tag ml-1">GLOBAL</i> : null}
      </span>
      {CONTAINERS.has(id) ? (
        <button type="button" aria-label="Add inside" onClick={() => setMenu(menu === "plus" ? null : "plus")}>
          <Plus className="size-3.5" />
        </button>
      ) : null}
      <button type="button" aria-label="More actions" onClick={() => setMenu(menu === "more" ? null : "more")}>
        <MoreHorizontal className="size-3.5" />
      </button>
      {menu === "plus" ? (
        <div className="handle-pop">
          {(["heading", "text", "button", "image", "spacer", "divider"] as InsertKind[]).map((kind) => (
            <button
              key={kind}
              type="button"
              onClick={() => {
                addInsert(id, kind);
                setMenu(null);
              }}
            >
              {kind}
            </button>
          ))}
        </div>
      ) : null}
      {menu === "more" ? (
        <div className="handle-pop">
          <button
            type="button"
            onClick={() => {
              toggleHidden(id);
              setMenu(null);
            }}
          >
            Hide on canvas
          </button>
          <button
            type="button"
            onClick={() => {
              toggleGlobal(id);
              setMenu(null);
            }}
          >
            Toggle global widget
          </button>
          <button
            type="button"
            onClick={() => {
              const node = getNode(useEditor.getState().patches, id);
              void navigator.clipboard?.writeText(JSON.stringify({ color: node.color, bg: node.bg, radius: node.radius }));
              toast("Style copied");
              setMenu(null);
            }}
          >
            Copy style
          </button>
        </div>
      ) : null}
    </div>
  );
}

function SectionSlot({ id, children }: { id: string; children: ReactNode }) {
  const move = useEditor((s) => s.moveSection);
  const setDragging = useEditor((s) => s.setDragging);
  const [over, setOver] = useState(false);
  return (
    <div
      className={cn("section-slot", over && "is-over")}
      onDragOver={(e) => {
        const types = Array.from(e.dataTransfer.types);
        if (types.includes("text/section") || types.includes("application/widget") || types.includes("text/plain")) {
          e.preventDefault();
          setOver(true);
        }
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        const widget = e.dataTransfer.getData("application/widget") || "";
        const from = e.dataTransfer.getData("text/section");
        if (widget && INSERTABLE[widget]) dropWidget(id, widget);
        else if (widget) dropWidget(id, widget);
        else if (from) move(from, id);
        setDragging(null);
      }}
    >
      {children}
    </div>
  );
}

function InsertList({ parent }: { parent: string }) {
  const inserts = useEditor((s) => s.inserts);
  const mine = inserts.filter((item) => item.parent === parent);
  if (!mine.length) return null;
  return (
    <div className="span-all flex flex-col gap-3">
      {mine.map((item) => (
        <InsertCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function InsertCard({ item }: { item: Insert }) {
  const selected = useEditor((s) => s.selected === item.id);
  const select = useEditor((s) => s.select);
  const quiet = useContext(QuietContext);
  const preview = useEditor((s) => s.preview);
  return (
    <div
      data-node={item.id}
      className={cn("frame rounded-md", !quiet && !preview && selected && "is-selected")}
      onClick={(e) => {
        if (quiet || preview) return;
        e.stopPropagation();
        select(item.id);
      }}
    >
      {item.kind === "heading" ? <strong className="font-display text-2xl">{item.text}</strong> : null}
      {item.kind === "text" ? <p className="text-caption text-muted">{item.text}</p> : null}
      {item.kind === "button" ? (
        <span className="btn-site" style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)", borderRadius: 6, padding: "12px 16px" }}>
          {item.text}
        </span>
      ) : null}
      {item.kind === "image" ? <img src="/studio/still.jpg" alt={item.text} className="h-28 w-full rounded-md object-cover" /> : null}
      {item.kind === "spacer" ? <div className="h-8 border border-dashed border-line" /> : null}
      {item.kind === "divider" ? <hr className="border-line" /> : null}
    </div>
  );
}

function Heading({ id, as = "h2" }: { id: string; as?: "h1" | "h2" | "p" }) {
  const node = useNode(id);
  const Tag = as;
  return (
    <Frame id={id}>
      <Tag style={typeStyle(node)}>{resolveText(node)}</Tag>
    </Frame>
  );
}

function Copy({ id }: { id: string }) {
  const node = useNode(id);
  const parts = resolveText(node).split("\n\n");
  return (
    <Frame id={id}>
      <div style={typeStyle(node)} className="max-w-xl">
        {parts.map((part, index) => (
          <p key={index} className={index < parts.length - 1 ? "mb-3" : undefined}>
            {part}
          </p>
        ))}
      </div>
    </Frame>
  );
}

function SiteButton({ id }: { id: string }) {
  const node = useNode(id);
  return (
    <Frame id={id} className="w-fit">
      <a
        className="btn-site"
        href={node.href || "#"}
        style={{
          background: node.bg,
          color: node.color,
          borderRadius: node.radius,
          fontSize: node.size,
          fontWeight: node.weight,
          padding: `${Math.max(10, node.pad)}px ${Math.max(16, node.pad + 8)}px`,
          borderWidth: node.border,
          borderColor: node.color,
          boxShadow: shadowCss(node.shadow),
        }}
        onClick={(e) => {
          e.preventDefault();
          if (node.href === "#visit") {
            document.querySelector(".is-live [data-node='cta']")?.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          if (node.href === "#journal") useEditor.getState().setMode("archive");
        }}
      >
        {resolveText(node)}
      </a>
    </Frame>
  );
}

function Photo({ id, ratio = "ratio-portrait" }: { id: string; ratio?: string }) {
  const node = useNode(id);
  return (
    <Frame id={id}>
      <img
        src={PHOTOS[id]}
        alt={node.text}
        className={cn("w-full object-cover", ratio)}
        style={{ borderRadius: node.radius, boxShadow: shadowCss(node.shadow) }}
      />
    </Frame>
  );
}

function FormView({ id }: { id: string }) {
  const node = useNode(id);
  const fields = useEditor((s) => s.fields);
  const toast = useEditor((s) => s.toast);
  const buttonId = linkedButton(id);
  const list = id === "cta-form" ? fields : [{ id: "mail", label: "Email", type: "email" as const, placeholder: "you@studio.com" }];
  return (
    <Frame id={id} style={boxStyle(node)}>
      <form
        className="grid"
        style={{ gap: node.gap }}
        onSubmit={(e) => {
          e.preventDefault();
          toast("Preview only — nothing is sent");
        }}
      >
        {list.map((field) => (
          <label key={field.id} className="site-field" style={{ color: node.color, fontSize: node.size }}>
            {field.label}
            {field.type === "select" ? (
              <select defaultValue="">
                <option value="" disabled>
                  {field.placeholder}
                </option>
                <option>House</option>
                <option>Hotel</option>
                <option>A single room</option>
              </select>
            ) : (
              <input type={field.type} placeholder={field.placeholder} aria-label={field.label} />
            )}
          </label>
        ))}
        {buttonId ? <SiteButton id={buttonId} /> : null}
      </form>
    </Frame>
  );
}

function LogoMark() {
  const node = useNode("logo");
  return <span style={typeStyle(node)}>{resolveText(node)}</span>;
}

function NavMark() {
  const node = useNode("nav");
  const items = node.text.split(",").map((item) => item.trim()).filter(Boolean);
  return (
    <>
      <ul className="nav-links m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0" style={typeStyle(node)}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="nav-burger" aria-hidden>
        <Menu className="size-5" />
      </span>
    </>
  );
}

function HeaderBar({ live }: { live: boolean }) {
  const header = useNode("header");
  const inner = (
    <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4" style={{ background: header.bg, color: header.color }}>
      {live ? (
        <Frame id="logo">
          <LogoMark />
        </Frame>
      ) : (
        <LogoMark />
      )}
      {live ? (
        <Frame id="nav">
          <NavMark />
        </Frame>
      ) : (
        <NavMark />
      )}
      <SiteButton id="header-btn" />
    </div>
  );
  if (!live) return inner;
  return (
    <Frame id="header" style={{ background: header.bg }}>
      {inner}
    </Frame>
  );
}

function FooterBar({ live }: { live: boolean }) {
  const node = useNode("footer");
  const footerLinks = useNode("footer-links");
  const logo = useNode("logo");
  const body = (
    <div className="footer-grid" style={live ? undefined : boxStyle(node)}>
      <div>
        <div style={{ ...typeStyle(logo), color: node.color }}>{resolveText(logo)}</div>
        <p className="mt-2 max-w-sm text-caption" style={{ opacity: 0.82 }}>
          {node.text}
        </p>
      </div>
      {live ? (
        <Frame id="footer-links">
          <LinkList node={footerLinks} />
        </Frame>
      ) : (
        <LinkList node={footerLinks} />
      )}
      <p className="text-caption" style={{ opacity: 0.82 }}>
        {node.sub}
      </p>
    </div>
  );
  if (!live) return body;
  return (
    <Frame id="footer" style={boxStyle(node)}>
      {body}
    </Frame>
  );
}

function LinkList({ node }: { node: NodeState }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-1 p-0" style={{ color: node.color, fontSize: node.size }}>
      {node.text.split(",").map((item) => (
        <li key={item}>{item.trim()}</li>
      ))}
    </ul>
  );
}

function Locked({ chrome }: { chrome: "header" | "footer" }) {
  const setMode = useEditor((s) => s.setMode);
  const guides = useEditor((s) => s.guides);
  const preview = useEditor((s) => s.preview);
  return (
    <div className="relative">
      {chrome === "header" ? <HeaderBar live={false} /> : <FooterBar live={false} />}
      {!preview && guides ? <div className="lock-ring" /> : null}
      {!preview ? (
        <button
          type="button"
          className="lock-chip"
          onClick={(e) => {
            e.stopPropagation();
            setMode(chrome);
          }}
        >
          <Lock className="size-3.5" />
          {chrome === "header" ? "Header · Theme Builder" : "Footer · Theme Builder"}
        </button>
      ) : null}
    </div>
  );
}

function Hero() {
  const hero = useNode("hero");
  const col1 = useNode("hero-col-1");
  const col2 = useNode("hero-col-2");
  return (
    <SectionSlot id="hero">
      <Frame id="hero" className="cols-hero" style={boxStyle(hero)}>
        <Frame id="hero-col-1" className="flex min-w-0 flex-col justify-center" style={boxStyle(col1)}>
          <Heading id="hero-kicker" as="p" />
          <Heading id="hero-title" as="h1" />
          <Copy id="hero-text" />
          <div className="mt-2 flex flex-wrap gap-2">
            <SiteButton id="hero-primary" />
            <SiteButton id="hero-secondary" />
          </div>
          <InsertList parent="hero-col-1" />
        </Frame>
        <Frame id="hero-col-2" style={boxStyle(col2)}>
          <Photo id="hero-image" />
        </Frame>
        <InsertList parent="hero" />
      </Frame>
    </SectionSlot>
  );
}

function Feature({ id, index }: { id: string; index: string }) {
  const node = useNode(id);
  return (
    <Frame id={id} style={boxStyle(node)}>
      <div className="overflow-hidden" style={{ borderRadius: node.radius || undefined }}>
        <img src={PHOTOS[id]} alt="" className="ratio-landscape w-full object-cover" />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <div className="text-micro font-bold tracking-wide text-accent">{index}</div>
        <h3 className="font-display text-xl" style={{ color: node.color, margin: 0 }}>
          {node.text}
        </h3>
        <p className="text-caption text-muted">{node.sub}</p>
      </div>
    </Frame>
  );
}

function Features() {
  const node = useNode("features");
  return (
    <SectionSlot id="features">
      <Frame id="features" className="cols-3" style={boxStyle(node)}>
        <Feature id="feat-1" index="01" />
        <Feature id="feat-2" index="02" />
        <Feature id="feat-3" index="03" />
        <InsertList parent="features" />
      </Frame>
    </SectionSlot>
  );
}

function Quote({ id }: { id: string }) {
  const node = useNode(id);
  return (
    <Frame id={id} style={{ background: node.bg, borderRadius: node.radius, padding: node.pad || 4 }}>
      <blockquote style={typeStyle(node)}>“{node.text}”</blockquote>
      <p className="mt-3 text-caption text-muted">{node.sub}</p>
    </Frame>
  );
}

function Quotes() {
  const node = useNode("quotes");
  return (
    <SectionSlot id="quotes">
      <Frame id="quotes" className="quotes-grid" style={boxStyle(node)}>
        <Quote id="quote-1" />
        <div className="flex flex-col gap-4">
          <Quote id="quote-2" />
          <Quote id="quote-3" />
        </div>
        <InsertList parent="quotes" />
      </Frame>
    </SectionSlot>
  );
}

function Cta() {
  const node = useNode("cta");
  return (
    <SectionSlot id="cta">
      <Frame id="cta" className="cta-grid" style={boxStyle(node)}>
        <div className="flex min-w-0 flex-col gap-3">
          <Heading id="cta-title" as="h2" />
          <Copy id="cta-text" />
        </div>
        <FormView id="cta-form" />
        <InsertList parent="cta" />
      </Frame>
    </SectionSlot>
  );
}

function SingleMode() {
  const node = useNode("single");
  const author = useNode("author");
  return (
    <Frame id="single" className="mx-auto flex max-w-3xl flex-col gap-5" style={boxStyle(node)}>
      <p className="text-micro font-bold uppercase tracking-wide text-accent">Journal · 12 min</p>
      <Heading id="single-title" as="h1" />
      <Photo id="single-image" ratio="ratio-landscape" />
      <Copy id="single-content" />
      <Frame id="author" style={boxStyle(author)}>
        <div className="flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent font-display text-accent-ink">AS</span>
          <div>
            <div className="font-semibold">{author.text}</div>
            <p className="text-caption text-muted">{author.sub}</p>
          </div>
        </div>
      </Frame>
    </Frame>
  );
}

function ArchiveMode() {
  const node = useNode("archive");
  const loop = useNode("loop");
  return (
    <Frame id="archive" style={boxStyle(node)}>
      <Heading id="archive-title" as="h1" />
      <p className="max-w-lg text-caption text-muted">Notes from houses, materials, and the year on site.</p>
      <Frame id="loop" className="archive-grid" style={boxStyle(loop)}>
        {POSTS.map((post) => (
          <article key={post.title} className="overflow-hidden rounded-lg border border-line bg-card">
            <img src={post.img} alt="" className="ratio-landscape w-full object-cover" />
            <div className="p-3">
              <div className="text-micro font-bold uppercase tracking-wide text-accent">{post.meta}</div>
              <h3 className="mt-1 font-display text-lg">{post.title}</h3>
            </div>
          </article>
        ))}
      </Frame>
    </Frame>
  );
}

function PopupMode() {
  const popup = useNode("popup");
  return (
    <div className="relative min-h-[70vh]">
      <div className="pointer-events-none select-none opacity-45" aria-hidden>
        <HeaderBar live={false} />
        <Hero />
      </div>
      <div className="absolute inset-0 flex items-start justify-center bg-ink/50 px-4 py-10">
        <div className="w-full max-w-md">
          <Frame id="popup" style={boxStyle(popup)}>
            <div className="text-micro font-bold uppercase tracking-wide text-accent">Popup · exit intent</div>
            <Heading id="popup-title" as="h2" />
            <Copy id="popup-text" />
            <div className="mt-3">
              <FormView id="popup-form" />
            </div>
            <button
              type="button"
              className="mt-3 text-caption text-muted"
              onClick={(e) => {
                e.stopPropagation();
                useEditor.getState().setMode("page");
              }}
            >
              No thanks
            </button>
          </Frame>
        </div>
      </div>
    </div>
  );
}

function PageBody({ quiet = false, deviceOverride }: { quiet?: boolean; deviceOverride?: Device }) {
  const mode = useEditor((s) => s.mode);
  const order = useEditor((s) => s.order);
  const layout = useEditor((s) => s.layout);
  const storeDevice = useEditor((s) => s.device);
  const pageBg = useEditor((s) => s.pageBg);
  const device = deviceOverride ?? storeDevice;
  const sections: Record<string, ReactNode> = {
    hero: <Hero key="hero" />,
    features: <Features key="features" />,
    quotes: <Quotes key="quotes" />,
    cta: <Cta key="cta" />,
  };
  return (
    <QuietContext.Provider value={quiet}>
      <DeviceContext.Provider value={device}>
        <div className={cn("sheet-wrap", `device-${device}`, !quiet && "is-live")}>
          {device !== "desktop" && !quiet ? (
            <div className="device-label">{device === "tablet" ? "Tablet · 768" : "Mobile · 390"} · editing breakpoint</div>
          ) : null}
          <div className="page-sheet" style={{ background: pageBg }} onClick={(e) => e.stopPropagation()}>
            {mode === "page" ? (
              <>
                {layout === "theme" ? <Locked chrome="header" /> : null}
                {order.map((id) => sections[id])}
                {layout === "theme" ? <Locked chrome="footer" /> : null}
              </>
            ) : null}
            {mode === "header" ? (
              <div>
                <p className="bg-paper px-5 py-3 text-caption text-muted">Header template. Display condition: entire site.</p>
                <HeaderBar live />
                <div className="px-5 py-16 text-center text-caption text-faint">Page content from other templates renders below this bar.</div>
              </div>
            ) : null}
            {mode === "footer" ? (
              <div>
                <div className="px-5 py-16 text-center text-caption text-faint">Page content ends here.</div>
                <FooterBar live />
              </div>
            ) : null}
            {mode === "single" ? <SingleMode /> : null}
            {mode === "archive" ? <ArchiveMode /> : null}
            {mode === "popup" ? <PopupMode /> : null}
          </div>
        </div>
      </DeviceContext.Provider>
    </QuietContext.Provider>
  );
}

export function Canvas() {
  const select = useEditor((s) => s.select);
  const selected = useEditor((s) => s.selected);
  const preview = useEditor((s) => s.preview);
  const skipScroll = useRef(true);
  useEffect(() => {
    if (skipScroll.current) {
      skipScroll.current = false;
      return;
    }
    if (!selected) return;
    const el = document.querySelector(`.is-live [data-node="${CSS.escape(selected)}"]`);
    el?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [selected]);
  return (
    <div className="stage-scroll" onClick={() => { if (!preview) select(null); }}>
      <PageBody />
    </div>
  );
}

export function MobilePeek() {
  const mode = useEditor((s) => s.mode);
  const device = useEditor((s) => s.device);
  const preview = useEditor((s) => s.preview);
  const setDevice = useEditor((s) => s.setDevice);
  if (mode !== "page" || device !== "desktop" || preview) return null;
  return (
    <div
      className="peek"
      role="button"
      tabIndex={0}
      aria-label="Open the mobile breakpoint"
      onClick={() => setDevice("mobile")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setDevice("mobile");
      }}
    >
      <div className="peek-bar">
        <span>Mobile</span>
        <span>390</span>
      </div>
      <div className="peek-window">
        <div className="peek-scale" inert>
          <PageBody quiet deviceOverride="mobile" />
        </div>
      </div>
    </div>
  );
}
