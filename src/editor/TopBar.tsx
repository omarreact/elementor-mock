import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ChevronDown,
  CircleHelp,
  Eye,
  FolderOpen,
  History,
  Layers,
  Monitor,
  Plus,
  Redo2,
  Smartphone,
  SquareDashed,
  TabletSmartphone,
  Undo2,
  X,
} from "lucide-react";
import { PAGES, type Device, type Mode } from "./model";
import { useEditor } from "./store";
import { cn } from "@/lib/cn";

const DEVICES: { id: Device; label: string; icon: typeof Monitor }[] = [
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "tablet", label: "Tablet", icon: TabletSmartphone },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

export function TopBar() {
  const preview = useEditor((s) => s.preview);
  if (preview) return <PreviewBar />;
  return <EditorBar />;
}

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 text-accent" aria-hidden>
      <rect width="24" height="24" rx="6" fill="currentColor" />
      <path d="M7 6h10v2.2H9.4V11H16v2.1H9.4V16H17V18.2H7Z" className="fill-accent-ink" />
    </svg>
  );
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
  const page = PAGES.find((item) => item.id === mode)!;
  const [pagesOpen, setPagesOpen] = useState(false);
  const [histOpen, setHistOpen] = useState(false);
  const [pubOpen, setPubOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  return (
    <header className="topbar">
      <button type="button" className="logo-btn" onClick={() => setMode("page")} aria-label="Elementor home page">
        <LogoMark />
        <span className="wide-only items-center gap-1.5 text-caption font-semibold">
          Elementor
          <span className="pro-pill">Pro</span>
        </span>
      </button>
      <MenuWrap open={pagesOpen} onClose={() => setPagesOpen(false)}>
        <button type="button" className="page-switch" aria-expanded={pagesOpen} onClick={() => setPagesOpen((v) => !v)}>
          <span className="truncate">{page.id === "page" ? docTitle : page.label}</span>
          <ChevronDown className="size-3.5 shrink-0 text-muted" />
        </button>
        {pagesOpen ? (
          <div className="menu left">
            {PAGES.map((item, index) => {
              const showGroup = index === 0 || PAGES[index - 1].group !== item.group;
              return (
                <div key={item.id}>
                  {showGroup ? <div className="px-2 pb-1 pt-2 text-micro font-bold uppercase tracking-wide text-faint">{item.group}</div> : null}
                  <button
                    type="button"
                    className={item.id === mode ? "is-on" : ""}
                    onClick={() => {
                      setMode(item.id);
                      setPagesOpen(false);
                    }}
                  >
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    <span className="text-micro text-muted">{item.sub}</span>
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
      </MenuWrap>
      <div className="wide-only mx-auto items-center gap-0.5">
        <button type="button" className="tool-btn" aria-label="Add element" onClick={() => requestSearch()}>
          <Plus className="size-4" />
        </button>
        {DEVICES.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className={cn("tool-btn", device === item.id && "is-on")}
              aria-label={item.label}
              aria-pressed={device === item.id}
              onClick={() => setDevice(item.id)}
            >
              <Icon className="size-4" />
            </button>
          );
        })}
        <button type="button" className="tool-btn" aria-label="Preview" onClick={() => setPreview(true)}>
          <Eye className="size-4" />
        </button>
      </div>
      <div className="ml-auto flex items-center">
        <button type="button" className="tool-btn wide-only" aria-label="Studio guide" onClick={() => setGuide(true)}>
          <CircleHelp className="size-4" />
        </button>
        <button type="button" className={cn("tool-btn wide-only", guides && "is-on")} aria-label="Structure guides" aria-pressed={guides} onClick={() => setGuides(!guides)}>
          <SquareDashed className="size-4" />
        </button>
        <button type="button" className={cn("tool-btn wide-only", navigatorOpen && "is-on")} aria-label="Navigator" aria-pressed={navigatorOpen} onClick={() => setNavigator(!navigatorOpen)}>
          <Layers className="size-4" />
        </button>
        <MenuWrap open={histOpen} onClose={() => setHistOpen(false)}>
          <button type="button" className="tool-btn wide-only" aria-label="History" onClick={() => setHistOpen((v) => !v)}>
            <History className="size-4" />
          </button>
          {histOpen ? (
            <div className="menu">
              <div className="px-2 py-1 text-micro font-bold uppercase tracking-wide text-faint">History</div>
              {past.length === 0 ? <p className="px-2 py-2 text-caption text-muted">No edits yet.</p> : null}
              {[...past].reverse().slice(0, 8).map((item, index) => (
                <button key={`${item.label}-${index}`} type="button" onClick={() => undo()}>
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </MenuWrap>
        <button type="button" className="tool-btn" aria-label="Undo" disabled={!past.length} onClick={() => undo()}>
          <Undo2 className="size-4" />
        </button>
        <button type="button" className="tool-btn wide-only" aria-label="Redo" disabled={!future.length} onClick={() => redo()}>
          <Redo2 className="size-4" />
        </button>
        <button type="button" className="tool-btn wide-only" aria-label="Template library" onClick={() => setLibrary(true)}>
          <FolderOpen className="size-4" />
        </button>
        <MenuWrap open={themeOpen} onClose={() => setThemeOpen(false)}>
          <button type="button" className={cn("wide-only mr-1 h-9 items-center gap-1 rounded-md px-2 text-micro font-bold", mode !== "page" ? "bg-accent-soft text-accent" : "text-ink-soft")} onClick={() => setThemeOpen((v) => !v)}>
            {mode === "popup" ? "Popup Builder" : "Theme Builder"}
            <ChevronDown className="size-3" />
          </button>
          {themeOpen ? (
            <div className="menu">
              {PAGES.filter((item) => item.id !== "page").map((item) => (
                <button key={item.id} type="button" className={mode === item.id ? "is-on" : ""} onClick={() => { setMode(item.id as Mode); setThemeOpen(false); }}>
                  <span className="flex-1">{item.sub}</span>
                  <span className="text-micro text-muted">{item.label}</span>
                </button>
              ))}
            </div>
          ) : null}
        </MenuWrap>
        <MenuWrap open={pubOpen} onClose={() => setPubOpen(false)}>
          <span className="inline-flex">
            <button type="button" className="publish" onClick={() => publish()}>
              {saving ? "Saving…" : published ? "Update" : "Publish"}
            </button>
            <button type="button" className="publish-caret" aria-label="Save options" onClick={() => setPubOpen((v) => !v)}>
              <ChevronDown className="size-3.5" />
            </button>
          </span>
          {pubOpen ? (
            <div className="menu">
              <button type="button" onClick={() => { saveDraft(); setPubOpen(false); }}>Save draft</button>
              <button type="button" onClick={() => { saveTemplate(); setPubOpen(false); }}>Save as template</button>
              <button type="button" onClick={() => { publish(); setPubOpen(false); }}>Publish</button>
            </div>
          ) : null}
        </MenuWrap>
        <button type="button" className="tool-btn wide-only" aria-label="Exit to dashboard" onClick={() => toast("Exit to WordPress — this study stays in the editor")}>
          <X className="size-4" />
        </button>
        <button type="button" className="tool-btn narrow-only" aria-label="Open guide" onClick={() => setGuide(true)}>
          <CircleHelp className="size-4" />
        </button>
      </div>
    </header>
  );
}

function PreviewBar() {
  const setPreview = useEditor((s) => s.setPreview);
  const device = useEditor((s) => s.device);
  const setDevice = useEditor((s) => s.setDevice);
  const docTitle = useEditor((s) => s.docTitle);
  return (
    <header className="topbar">
      <LogoMark />
      <p className="truncate px-2 text-caption">Previewing {docTitle}</p>
      <div className="ml-auto flex items-center">
        {DEVICES.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.id} type="button" className={cn("tool-btn", device === item.id && "is-on")} aria-label={item.label} onClick={() => setDevice(item.id)}>
              <Icon className="size-4" />
            </button>
          );
        })}
        <button type="button" className="publish rounded-md" onClick={() => setPreview(false)}>
          Exit
        </button>
      </div>
    </header>
  );
}

export function ThemeStrip() {
  const mode = useEditor((s) => s.mode);
  const setMode = useEditor((s) => s.setMode);
  const preview = useEditor((s) => s.preview);
  if (preview || mode === "page") return null;
  const page = PAGES.find((item) => item.id === mode)!;
  const builder = mode === "popup" ? "Popup Builder" : "Theme Builder";
  return (
    <div className="theme-strip">
      <span className="theme-pill">{builder}</span>
      <strong className="truncate">{page.label}</strong>
      <span className="truncate text-caption">{page.condition}</span>
      <button type="button" className="ml-auto text-caption font-semibold underline" onClick={() => setMode("page")}>
        Back to page
      </button>
    </div>
  );
}

function MenuWrap({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) onClose();
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open, onClose]);
  return (
    <div className="relative" ref={ref}>
      {children}
    </div>
  );
}
