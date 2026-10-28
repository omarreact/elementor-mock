import { useState } from "react";
import { ChevronDown, ChevronRight, Eye, EyeOff, X } from "lucide-react";
import { META, type Insert, type Mode } from "./model";
import { useEditor } from "./store";
import { cn } from "@/lib/cn";

type Branch = { id: string; children?: Branch[] };

function withInserts(children: Branch[], inserts: Insert[], parent: string): Branch[] {
  return [
    ...children,
    ...inserts.filter((item) => item.parent === parent).map((item) => ({ id: item.id })),
  ];
}

function treeFor(mode: Mode, order: string[], inserts: Insert[]): Branch[] {
  if (mode === "header") return [{ id: "header", children: [{ id: "logo" }, { id: "nav" }, { id: "header-btn" }] }];
  if (mode === "footer") return [{ id: "footer", children: [{ id: "footer-links" }] }];
  if (mode === "single") {
    return [{ id: "single", children: [{ id: "single-title" }, { id: "single-image" }, { id: "single-content" }, { id: "author" }] }];
  }
  if (mode === "archive") return [{ id: "archive", children: [{ id: "archive-title" }, { id: "loop" }] }];
  if (mode === "popup") {
    return [{ id: "popup", children: [{ id: "popup-title" }, { id: "popup-text" }, { id: "popup-form", children: [{ id: "popup-button" }] }] }];
  }
  const sections: Record<string, Branch> = {
    hero: {
      id: "hero",
      children: [
        {
          id: "hero-col-1",
          children: withInserts(
            [{ id: "hero-kicker" }, { id: "hero-title" }, { id: "hero-text" }, { id: "hero-primary" }, { id: "hero-secondary" }],
            inserts,
            "hero-col-1",
          ),
        },
        { id: "hero-col-2", children: [{ id: "hero-image" }] },
      ],
    },
    features: { id: "features", children: withInserts([{ id: "feat-1" }, { id: "feat-2" }, { id: "feat-3" }], inserts, "features") },
    quotes: { id: "quotes", children: withInserts([{ id: "quote-1" }, { id: "quote-2" }, { id: "quote-3" }], inserts, "quotes") },
    cta: { id: "cta", children: withInserts([{ id: "cta-title" }, { id: "cta-text" }, { id: "cta-form", children: [{ id: "cta-button" }] }], inserts, "cta") },
  };
  return [
    { id: "header", children: [{ id: "logo" }, { id: "nav" }, { id: "header-btn" }] },
    ...order.map((id) => sections[id]),
    { id: "footer", children: [{ id: "footer-links" }] },
  ];
}

export function Navigator() {
  const open = useEditor((s) => s.navigatorOpen);
  const preview = useEditor((s) => s.preview);
  const mode = useEditor((s) => s.mode);
  const order = useEditor((s) => s.order);
  const inserts = useEditor((s) => s.inserts);
  const setNavigator = useEditor((s) => s.setNavigator);
  if (!open || preview) return null;
  const branches = treeFor(mode, order, inserts);
  return (
    <aside className="navigator" aria-label="Navigator">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <strong className="text-caption">Navigator</strong>
        <button type="button" className="ml-auto text-muted" aria-label="Close navigator" onClick={() => setNavigator(false)}>
          <X className="size-4" />
        </button>
      </div>
      <div className="scrollthin-light min-h-0 flex-1 overflow-auto p-2">
        {branches.map((branch) => (
          <Row key={branch.id} branch={branch} depth={0} inserts={inserts} />
        ))}
      </div>
    </aside>
  );
}

function Row({ branch, depth, inserts }: { branch: Branch; depth: number; inserts: Insert[] }) {
  const [open, setOpen] = useState(true);
  const selected = useEditor((s) => s.selected === branch.id);
  const hidden = useEditor((s) => s.hidden.includes(branch.id));
  const select = useEditor((s) => s.select);
  const toggleHidden = useEditor((s) => s.toggleHidden);
  const insert = inserts.find((item) => item.id === branch.id);
  const label = META[branch.id]?.label ?? insert?.kind ?? branch.id;
  const hasKids = !!branch.children?.length;
  return (
    <div>
      <div className={cn("nav-row", selected && "is-on")} style={{ paddingLeft: depth ? depth * 12 : 4 }}>
        {hasKids ? (
          <button type="button" aria-label={open ? "Collapse" : "Expand"} onClick={() => setOpen((v) => !v)}>
            {open ? <ChevronDown className="size-3.5" /> : <ChevronRight className="size-3.5" />}
          </button>
        ) : (
          <span className="inline-block w-3.5" />
        )}
        <button type="button" className="min-w-0 flex-1 truncate text-left" onClick={() => select(branch.id)}>
          {label}
        </button>
        {META[branch.id] ? (
          <button type="button" aria-label={hidden ? "Show" : "Hide"} onClick={() => toggleHidden(branch.id)}>
            {hidden ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5 text-faint" />}
          </button>
        ) : null}
      </div>
      {open && branch.children ? branch.children.map((child) => <Row key={child.id} branch={child} depth={depth + 1} inserts={inserts} />) : null}
    </div>
  );
}
