import { create } from "zustand";
import {
  INSERTABLE,
  META,
  MODE_SELECTION,
  NODE_MODE,
  WIDGET_FOCUS,
  type Device,
  type Field,
  type Insert,
  type InsertKind,
  type Mode,
  type NodeState,
  type Snap,
  type Tab,
} from "./model";

type Hist = { snap: Snap; label: string };

type EditorState = Snap & {
  selected: string | null;
  hovered: string | null;
  tab: Tab;
  device: Device;
  mode: Mode;
  preview: boolean;
  guides: boolean;
  navigatorOpen: boolean;
  libraryOpen: boolean;
  guideOpen: boolean;
  finderOpen: boolean;
  callouts: boolean;
  leftOpen: boolean;
  rightOpen: boolean;
  published: boolean;
  saving: boolean;
  savedTemplates: string[];
  toasts: { id: string; text: string }[];
  past: Hist[];
  future: Hist[];
  lastEdit: number;
  focusSearch: number;
  dragging: string | null;
  update: (id: string, partial: Partial<NodeState>, label: string) => void;
  updateDoc: (partial: Partial<Pick<Snap, "docTitle" | "layout" | "pageBg">>, label: string) => void;
  updateField: (id: string, partial: Partial<Field>) => void;
  addField: () => void;
  removeField: (id: string) => void;
  addInsert: (parent: string, kind: InsertKind) => void;
  updateInsert: (id: string, text: string) => void;
  removeInsert: (id: string) => void;
  moveSection: (from: string, to: string) => void;
  toggleHidden: (id: string) => void;
  toggleGlobal: (id: string) => void;
  select: (id: string | null) => void;
  setHovered: (id: string | null) => void;
  setTab: (tab: Tab) => void;
  setDevice: (device: Device) => void;
  setMode: (mode: Mode) => void;
  setPreview: (preview: boolean) => void;
  setGuides: (guides: boolean) => void;
  setNavigator: (open: boolean) => void;
  setLibrary: (open: boolean) => void;
  setGuide: (open: boolean) => void;
  setFinder: (open: boolean) => void;
  setCallouts: (on: boolean) => void;
  setLeft: (open: boolean) => void;
  setRight: (open: boolean) => void;
  setDragging: (id: string | null) => void;
  undo: () => void;
  redo: () => void;
  publish: () => void;
  saveDraft: () => void;
  saveTemplate: () => void;
  focusWidget: (widgetId: string) => void;
  requestSearch: () => void;
  toast: (text: string) => void;
  closeOverlays: () => void;
};

const initialFields: Field[] = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@studio.com" },
  { id: "project", label: "Project type", type: "select", placeholder: "A house, a hotel, a room" },
];

function pick(s: Snap): Snap {
  return {
    patches: s.patches,
    order: s.order,
    hidden: s.hidden,
    globals: s.globals,
    fields: s.fields,
    inserts: s.inserts,
    docTitle: s.docTitle,
    layout: s.layout,
    pageBg: s.pageBg,
  };
}

const initialSnap = (): Snap => ({
  patches: {},
  order: ["hero", "features", "quotes", "cta"],
  hidden: [],
  globals: [],
  fields: initialFields,
  inserts: [],
  docTitle: "Home",
  layout: "theme",
  pageBg: "#fffcfa",
});

export const useEditor = create<EditorState>((set, get) => {
  const apply = (label: string, recipe: (snap: Snap) => void) => {
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
      past: coalesce ? state.past : [...state.past, { snap: before, label }].slice(-40),
      future: coalesce ? state.future : [],
      lastEdit: now,
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
      snap.patches[id] = { ...snap.patches[id], ...partial };
    }),
    updateDoc: (partial, label) => apply(label, (snap) => {
      Object.assign(snap, partial);
    }),
    updateField: (id, partial) => apply("Form field", (snap) => {
      snap.fields = snap.fields.map((field) => (field.id === id ? { ...field, ...partial } : field));
    }),
    addField: () => apply("Add field", (snap) => {
      snap.fields = [
        ...snap.fields,
        { id: `field-${snap.fields.length + 1}`, label: "New field", type: "text", placeholder: "" },
      ];
    }),
    removeField: (id) => apply("Remove field", (snap) => {
      if (snap.fields.length < 2) return;
      snap.fields = snap.fields.filter((field) => field.id !== id);
    }),
    addInsert: (parent, kind) => {
      const id = `ins-${Math.random().toString(36).slice(2, 8)}`;
      const text =
        kind === "heading" ? "New heading" :
        kind === "text" ? "A short paragraph dropped into the container." :
        kind === "button" ? "Learn more" :
        kind === "image" ? "Still life" : kind;
      apply(`Add ${kind}`, (snap) => {
        snap.inserts = [...snap.inserts, { id, parent, kind, text }];
      });
      set({ selected: id, rightOpen: true });
    },
    updateInsert: (id, text) => apply("Inserted text", (snap) => {
      snap.inserts = snap.inserts.map((item) => (item.id === id ? { ...item, text } : item));
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
    select: (id) => set({ selected: id, rightOpen: id ? true : get().rightOpen }),
    setHovered: (id) => set({ hovered: id }),
    setTab: (tab) => set({ tab }),
    setDevice: (device) => set({ device }),
    setMode: (mode) => set({
      mode,
      selected: MODE_SELECTION[mode],
      leftOpen: false,
      preview: false,
    }),
    setPreview: (preview) => set({ preview, leftOpen: false, rightOpen: false }),
    setGuides: (guides) => set({ guides }),
    setNavigator: (open) => set({ navigatorOpen: open }),
    setLibrary: (open) => set({ libraryOpen: open, finderOpen: false, guideOpen: open ? false : get().guideOpen }),
    setGuide: (open) => set({ guideOpen: open, libraryOpen: false, finderOpen: false }),
    setFinder: (open) => set({ finderOpen: open, libraryOpen: false, guideOpen: false }),
    setCallouts: (on) => set({ callouts: on }),
    setLeft: (open) => set({ leftOpen: open, rightOpen: open ? false : get().rightOpen }),
    setRight: (open) => set({ rightOpen: open, leftOpen: open ? false : get().leftOpen }),
    setDragging: (id) => set({ dragging: id }),
    undo: () => {
      const state = get();
      const prev = state.past.at(-1);
      if (!prev) return;
      set({
        ...prev.snap,
        past: state.past.slice(0, -1),
        future: [...state.future, { snap: pick(state), label: prev.label }],
      });
    },
    redo: () => {
      const state = get();
      const next = state.future.at(-1);
      if (!next) return;
      set({
        ...next.snap,
        future: state.future.slice(0, -1),
        past: [...state.past, { snap: pick(state), label: next.label }],
      });
    },
    publish: () => {
      set({ published: true, saving: true });
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
        libraryOpen: true,
      }));
      get().toast("Saved to My Templates");
    },
    focusWidget: (widgetId) => {
      const target = WIDGET_FOCUS[widgetId];
      if (!target || !META[target]) {
        get().toast("Drop it on a highlighted container");
        return;
      }
      const mode = NODE_MODE[target] ?? "page";
      set({
        mode,
        selected: target,
        rightOpen: true,
        leftOpen: false,
        tab: "content",
        preview: false,
      });
      get().toast(`${META[target].label} selected`);
    },
    requestSearch: () => set((state) => ({ focusSearch: state.focusSearch + 1, leftOpen: true, rightOpen: false })),
    toast: (text) => {
      const id = Math.random().toString(36).slice(2, 8);
      set((state) => ({ toasts: [...state.toasts, { id, text }].slice(-3) }));
      window.setTimeout(() => {
        set((state) => ({ toasts: state.toasts.filter((item) => item.id !== id) }));
      }, 2600);
    },
    closeOverlays: () => {
      const state = get();
      if (state.libraryOpen || state.finderOpen || state.guideOpen) {
        set({ libraryOpen: false, finderOpen: false, guideOpen: false });
        return;
      }
      if (state.preview) {
        set({ preview: false });
        return;
      }
      if (state.leftOpen || state.rightOpen) {
        set({ leftOpen: false, rightOpen: false });
        return;
      }
      if (state.callouts) {
        set({ callouts: false });
        return;
      }
      set({ selected: null });
    },
  };
});

export function dropWidget(parent: string, widgetId: string) {
  const store = useEditor.getState();
  const kind = INSERTABLE[widgetId];
  if (kind) {
    store.addInsert(parent, kind);
    store.toast("Placed in the container");
    return;
  }
  store.focusWidget(widgetId);
}

export type { Insert };
