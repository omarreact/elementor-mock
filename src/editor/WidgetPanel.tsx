import { useEffect, useRef, useState } from "react";
import { FolderOpen, Search, Star, X } from "lucide-react";
import { DEFAULT_FAVS, META, WIDGETS, type WidgetDef } from "./model";
import { useEditor } from "./store";
import { WidgetIcon } from "./icons";

const GROUPS: { id: WidgetDef["cat"]; label: string }[] = [
  { id: "Basic", label: "Basic" },
  { id: "Pro", label: "Pro" },
  { id: "Theme", label: "Theme Elements" },
  { id: "Woo", label: "WooCommerce" },
];

export function WidgetPanel() {
  const [query, setQuery] = useState("");
  const [segment, setSegment] = useState<"all" | "favorites" | "global">("all");
  const [open, setOpen] = useState<Record<string, boolean>>({ Basic: true, Pro: true, Theme: true, Woo: true });
  const [favs, setFavs] = useState<string[]>(DEFAULT_FAVS);
  const [ready, setReady] = useState(false);
  const focusSearch = useEditor((s) => s.focusSearch);
  const globals = useEditor((s) => s.globals);
  const focusWidget = useEditor((s) => s.focusWidget);
  const setLibrary = useEditor((s) => s.setLibrary);
  const setLeft = useEditor((s) => s.setLeft);
  const select = useEditor((s) => s.select);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const raw = localStorage.getItem("elementor-studio-favs");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as string[];
        if (Array.isArray(parsed)) setFavs(parsed);
      } catch {
        /* keep defaults */
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("elementor-studio-favs", JSON.stringify(favs));
  }, [favs, ready]);

  useEffect(() => {
    if (focusSearch > 0) ref.current?.focus();
  }, [focusSearch]);

  const q = query.trim().toLowerCase();
  const match = (widget: WidgetDef) => !q || widget.name.toLowerCase().includes(q);
  const favWidgets = WIDGETS.filter((widget) => favs.includes(widget.id) && match(widget));

  const toggleFav = (id: string) => {
    setFavs((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center gap-2 px-3 pt-3">
        <div className="text-caption font-semibold">Elements</div>
        <span className="pro-pill">Pro</span>
        <div className="ml-auto flex items-center">
          <button type="button" className="tool-btn text-chrome-fg" aria-label="Template library" onClick={() => setLibrary(true)}>
            <FolderOpen className="size-4" />
          </button>
          <button type="button" className="tool-btn narrow-only text-chrome-fg" aria-label="Close widgets" onClick={() => setLeft(false)}>
            <X className="size-4" />
          </button>
        </div>
      </div>
      <div className="relative px-3 pt-2">
        <Search className="pointer-events-none absolute left-6 top-1/2 size-4 -translate-y-1/2 text-chrome-muted" />
        <input
          ref={ref}
          className="search"
          value={query}
          placeholder="Search Widget..."
          aria-label="Search widgets"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="px-3 py-2">
        <div className="seg" role="tablist" aria-label="Widget filters">
          {(["all", "favorites", "global"] as const).map((item) => (
            <button key={item} type="button" className={segment === item ? "is-on" : ""} onClick={() => setSegment(item)}>
              {item === "all" ? "All" : item === "favorites" ? "Favorites" : "Global"}
            </button>
          ))}
        </div>
      </div>
      <div className="scrollthin min-h-0 flex-1 overflow-auto px-2 pb-4">
        {segment === "global" ? (
          <div className="px-1">
            {globals.length === 0 ? (
              <p className="px-1 py-6 text-caption text-chrome-muted">
                Save any widget as a Global from Advanced. It can then be dropped onto other templates.
              </p>
            ) : (
              <ul className="flex flex-col gap-1">
                {globals.map((id) => (
                  <li key={id}>
                    <button
                      type="button"
                      className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-caption hover:bg-chrome-3"
                      onClick={() => select(id)}
                    >
                      <span className="pro-pill">Global</span>
                      {META[id]?.label ?? id}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <>
            {segment === "all" && !q && favWidgets.length > 0 ? (
              <section className="mb-2">
                <div className="cat-btn">
                  <Star className="size-3.5 text-accent-soft" />
                  Favorites
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {favWidgets.map((widget) => (
                    <WidgetCell key={`fav-${widget.id}`} widget={widget} fav onFav={() => toggleFav(widget.id)} onUse={() => focusWidget(widget.id)} />
                  ))}
                </div>
              </section>
            ) : null}
            {GROUPS.map((group) => {
              const items = WIDGETS.filter((widget) => widget.cat === group.id && match(widget) && (segment !== "favorites" || favs.includes(widget.id)));
              if (!items.length) return null;
              const expanded = q ? true : open[group.id];
              return (
                <section key={group.id}>
                  <button type="button" className="cat-btn" aria-expanded={expanded} onClick={() => setOpen((s) => ({ ...s, [group.id]: !s[group.id] }))}>
                    <span className="text-chrome-muted">{expanded ? "–" : "+"}</span>
                    {group.label}
                    <span className="ml-auto text-micro font-medium text-chrome-muted">{items.length}</span>
                  </button>
                  {expanded ? (
                    <div className="grid grid-cols-3 gap-1 pb-2">
                      {items.map((widget) => (
                        <WidgetCell
                          key={widget.id}
                          widget={widget}
                          fav={favs.includes(widget.id)}
                          onFav={() => toggleFav(widget.id)}
                          onUse={() => focusWidget(widget.id)}
                        />
                      ))}
                    </div>
                  ) : null}
                </section>
              );
            })}
            {WIDGETS.every((widget) => !match(widget) || (segment === "favorites" && !favs.includes(widget.id))) ? (
              <p className="px-2 py-6 text-caption text-chrome-muted">No widgets match.</p>
            ) : null}
          </>
        )}
      </div>
      <p className="border-t border-chrome-line px-3 py-2 text-micro text-chrome-muted">Drag a basic widget onto a container, or click to select it on the canvas.</p>
    </div>
  );
}

function WidgetCell({
  widget,
  fav,
  onFav,
  onUse,
}: {
  widget: WidgetDef;
  fav: boolean;
  onFav: () => void;
  onUse: () => void;
}) {
  return (
    <div
      className="widget-cell"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("application/widget", widget.id);
        e.dataTransfer.setData("text/plain", widget.id);
        e.dataTransfer.effectAllowed = "copy";
      }}
    >
      <button
        type="button"
        className={`star ${fav ? "is-on" : ""}`}
        aria-label={fav ? `Unfavorite ${widget.name}` : `Favorite ${widget.name}`}
        onClick={(e) => {
          e.stopPropagation();
          onFav();
        }}
      >
        <Star className="size-3" fill={fav ? "currentColor" : "none"} />
      </button>
      {widget.pro ? <span className="pro-tag absolute right-1 top-1">PRO</span> : null}
      <button type="button" className="flex flex-col items-center gap-1" onClick={onUse}>
        <WidgetIcon name={widget.icon} className="size-5" />
        <span className="label">{widget.name}</span>
      </button>
    </div>
  );
}
