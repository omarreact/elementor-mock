import { useEffect } from "react";
import { Eye, FolderOpen, Layers, MonitorSmartphone, SlidersHorizontal, SwatchBook } from "lucide-react";
import { cn } from "@/lib/cn";
import { useEditor } from "./store";
import { TopBar, ThemeStrip } from "./TopBar";
import { WidgetPanel } from "./WidgetPanel";
import { SettingsPanel } from "./SettingsPanel";
import { Canvas, MobilePeek } from "./Canvas";
import { Navigator } from "./Navigator";
import { Overlays } from "./Overlays";

export function Editor() {
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

  useEffect(() => {
    if (window.matchMedia("(max-width: 1099px)").matches) {
      useEditor.setState({ navigatorOpen: false });
    }
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = !!target?.closest("input, textarea, select, [contenteditable='true']");
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
    const order = ["desktop", "tablet", "mobile"] as const;
    const next = order[(order.indexOf(device) + 1) % order.length];
    setDevice(next);
  };

  return (
    <div className={cn("shell", preview && "is-preview", leftOpen && "show-left", rightOpen && "show-right", navigatorOpen && "show-nav")}>
      <TopBar />
      <ThemeStrip />
      <div className="workspace">
        <aside className="panel-left" aria-label="Widgets">
          <WidgetPanel />
        </aside>
        <div className="stage">
          <Canvas />
          <Navigator />
          <MobilePeek />
        </div>
        <aside className="panel-right" aria-label="Element settings">
          <SettingsPanel />
        </aside>
      </div>
      <nav className="dock" aria-label="Editor">
        <button type="button" className={leftOpen ? "is-on" : ""} onClick={() => setLeft(!leftOpen)}>
          <SwatchBook className="size-5" />
          Widgets
        </button>
        <button type="button" className={navigatorOpen ? "is-on" : ""} onClick={() => setNavigator(!navigatorOpen)}>
          <Layers className="size-5" />
          Structure
        </button>
        <button type="button" onClick={cycleDevice}>
          <MonitorSmartphone className="size-5" />
          {device === "desktop" ? "Desktop" : device === "tablet" ? "Tablet" : "Mobile"}
        </button>
        <button type="button" onClick={() => setLibrary(true)}>
          <FolderOpen className="size-5" />
          Library
        </button>
        <button type="button" className={rightOpen ? "is-on" : ""} onClick={() => (preview ? setPreview(false) : setRight(!rightOpen))}>
          {preview ? <Eye className="size-5" /> : <SlidersHorizontal className="size-5" />}
          {preview ? "Edit" : "Style"}
        </button>
      </nav>
      <button type="button" className="scrim" aria-label="Close panel" onClick={() => close()} />
      <Overlays />
    </div>
  );
}
