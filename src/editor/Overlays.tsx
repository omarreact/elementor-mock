import { useState, type CSSProperties } from "react";
import { Check, X } from "lucide-react";
import { GUIDE, IMAGE_PROMPT, PAGES, TEMPLATES, WIDGETS } from "./model";
import { useEditor } from "./store";
import { cn } from "@/lib/cn";

export function Overlays() {
  return (
    <>
      <Toasts />
      <Library />
      <Finder />
      <Guide />
      <Callouts />
    </>
  );
}

function Toasts() {
  const toasts = useEditor((s) => s.toasts);
  if (!toasts.length) return null;
  return (
    <div className="toast-wrap" aria-live="polite">
      {toasts.map((item) => (
        <div key={item.id} className="toast">
          {item.text}
        </div>
      ))}
    </div>
  );
}

function Library() {
  const open = useEditor((s) => s.libraryOpen);
  const setLibrary = useEditor((s) => s.setLibrary);
  const saved = useEditor((s) => s.savedTemplates);
  const toast = useEditor((s) => s.toast);
  const [tab, setTab] = useState<"Blocks" | "Pages" | "Mine">("Blocks");
  if (!open) return null;
  const cards = tab === "Mine" ? saved.map((name) => ({ id: name, name, kind: "Mine" })) : TEMPLATES.filter((item) => (tab === "Pages" ? item.kind === "Page" : item.kind === "Block"));
  return (
    <div className="modal-root" role="dialog" aria-modal aria-label="Template library">
      <button type="button" className="modal-scrim" aria-label="Close library" onClick={() => setLibrary(false)} />
      <div className="modal-card">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <strong>Template library</strong>
          <span className="pro-pill">Pro</span>
          <button type="button" className="ml-auto tool-btn" aria-label="Close" onClick={() => setLibrary(false)}>
            <X className="size-4" />
          </button>
        </div>
        <div className="flex gap-2 px-4 pt-3">
          {(["Blocks", "Pages", "Mine"] as const).map((item) => (
            <button key={item} type="button" className={cn("h-9 rounded-full px-3 text-caption", tab === item ? "bg-ink text-card" : "bg-paper")} onClick={() => setTab(item)}>
              {item === "Mine" ? "My templates" : item}
            </button>
          ))}
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {cards.length === 0 ? <p className="text-caption text-muted">Save the current page from the Publish menu. It will land here.</p> : null}
          {cards.map((card) => (
            <button
              key={card.id}
              type="button"
              className="template-card"
              onClick={() => {
                toast(`${card.name} inserted on the canvas`);
                setLibrary(false);
              }}
            >
              <Mini kind={card.name} />
              <span className="text-caption font-semibold">{card.name}</span>
              <span className="text-micro text-muted">{card.kind}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Mini({ kind }: { kind: string }) {
  return (
    <div className="mini" aria-hidden>
      <div className="flex h-full flex-col gap-1 p-2">
        <div className="h-2 w-1/3 rounded-full bg-accent" />
        <div className="h-2 w-2/3 rounded-full bg-line" />
        <div className="mt-auto grid flex-1 grid-cols-3 gap-1">
          <div className="rounded-sm bg-paper" />
          <div className={cn("rounded-sm", kind.toLowerCase().includes("form") || kind.toLowerCase().includes("visit") ? "bg-accent" : "bg-paper")} />
          <div className="rounded-sm bg-line" />
        </div>
      </div>
    </div>
  );
}

function Finder() {
  const open = useEditor((s) => s.finderOpen);
  const setFinder = useEditor((s) => s.setFinder);
  const setMode = useEditor((s) => s.setMode);
  const focusWidget = useEditor((s) => s.focusWidget);
  const [query, setQuery] = useState("");
  if (!open) return null;
  const q = query.trim().toLowerCase();
  const pages = PAGES.filter((page) => !q || page.label.toLowerCase().includes(q) || page.sub.toLowerCase().includes(q));
  const widgets = WIDGETS.filter((widget) => !q || widget.name.toLowerCase().includes(q)).slice(0, 8);
  return (
    <div className="modal-root" role="dialog" aria-modal aria-label="Finder">
      <button type="button" className="modal-scrim" aria-label="Close finder" onClick={() => setFinder(false)} />
      <div className="modal-card finder">
        <div className="border-b border-line p-3">
          <input
            autoFocus
            className="panel-input"
            placeholder="Find a widget or template"
            value={query}
            aria-label="Finder"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="max-h-80 overflow-auto p-2">
          <p className="px-2 py-1 text-micro font-bold uppercase tracking-wide text-faint">Templates</p>
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className="flex w-full items-center rounded-md px-2 py-2 text-left text-caption hover:bg-paper"
              onClick={() => {
                setMode(page.id);
                setFinder(false);
              }}
            >
              <span className="flex-1">{page.label}</span>
              <span className="text-micro text-muted">{page.sub}</span>
            </button>
          ))}
          <p className="px-2 py-1 text-micro font-bold uppercase tracking-wide text-faint">Widgets</p>
          {widgets.map((widget) => (
            <button
              key={widget.id}
              type="button"
              className="flex w-full items-center rounded-md px-2 py-2 text-left text-caption hover:bg-paper"
              onClick={() => {
                focusWidget(widget.id);
                setFinder(false);
              }}
            >
              <span className="flex-1">{widget.name}</span>
              {widget.pro ? <span className="pro-pill">Pro</span> : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Guide() {
  const open = useEditor((s) => s.guideOpen);
  const setGuide = useEditor((s) => s.setGuide);
  const callouts = useEditor((s) => s.callouts);
  const setCallouts = useEditor((s) => s.setCallouts);
  const toast = useEditor((s) => s.toast);
  const [copied, setCopied] = useState(false);
  if (!open) return null;
  return (
    <div className="modal-root" role="dialog" aria-modal aria-label="Studio guide">
      <button type="button" className="modal-scrim" aria-label="Close guide" onClick={() => setGuide(false)} />
      <div className="modal-card">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <strong>Studio guide</strong>
          <button type="button" className="ml-auto tool-btn" aria-label="Close" onClick={() => setGuide(false)}>
            <X className="size-4" />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4 text-caption">
          <p>{GUIDE.overview}</p>
          <div>
            {GUIDE.panels.map((panel) => (
              <p key={panel.n} className="mb-2">
                <strong className="text-accent">{panel.n}. {panel.title}. </strong>
                {panel.body}
              </p>
            ))}
          </div>
          <div>
            <strong>Interaction states</strong>
            <ul className="mt-1 list-disc pl-4">
              {GUIDE.states.map((state) => (
                <li key={state}>{state}</li>
              ))}
            </ul>
          </div>
          <button type="button" className={cn("h-10 rounded-md px-3", callouts ? "bg-accent text-accent-ink" : "bg-paper")} onClick={() => setCallouts(!callouts)}>
            {callouts ? "Hide numbered callouts" : "Show numbered callouts"}
          </button>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <strong>Image prompt</strong>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-accent"
                onClick={() => {
                  void navigator.clipboard?.writeText(IMAGE_PROMPT);
                  setCopied(true);
                  toast("Prompt copied");
                }}
              >
                {copied ? <Check className="size-3.5" /> : null}
                Copy
              </button>
            </div>
            <textarea className="panel-area" readOnly value={IMAGE_PROMPT} />
          </div>
          <p className="text-micro text-muted">An interactive study of the Elementor editor for design reference. Not affiliated with Elementor Ltd.</p>
        </div>
      </div>
    </div>
  );
}

export function Callouts() {
  const on = useEditor((s) => s.callouts);
  if (!on) return null;
  return (
    <div className="callout-layer">
      <Pin n="1" title="Top bar" style={{ top: 10, left: "38%" }} />
      <Pin n="2" title="Widgets" style={{ top: 128, left: 16 }} />
      <Pin n="3" title="Canvas" style={{ top: "46%", left: "42%" }} />
      <Pin n="4" title="Inspector" style={{ top: 132, right: 18 }} />
      <Pin n="5" title="Navigator" style={{ top: 78, left: "22%" }} />
      <Pin n="6" title="Theme Builder" style={{ top: 14, right: 210 }} />
      <Pin n="7" title="Publish" style={{ top: 14, right: 72 }} />
      <div className="legend">
        <strong className="text-caption">Annotated layout</strong>
        <ul className="mt-2 flex flex-col gap-1 text-micro">
          {GUIDE.panels.map((panel) => (
            <li key={panel.n}>
              <span className="font-bold text-accent">{panel.n}</span> {panel.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Pin({ n, title, style }: { n: string; title: string; style: CSSProperties }) {
  return (
    <span className="pin" style={style}>
      <i>{n}</i>
      <span>{title}</span>
    </span>
  );
}
