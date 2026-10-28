import { ChevronLeft, Code, Eye, EyeOff, Monitor, Paintbrush, Pencil, Settings2, Smartphone, TabletSmartphone, X } from "lucide-react";
import type { ReactNode } from "react";
import {
  META,
  PAGES,
  getNode,
  linkedButton,
  type Kind,
  type Motion,
} from "./model";
import { useEditor } from "./store";
import { AlignRow, ColorField, Section, Slider, TextControl } from "./controls";
import { cn } from "@/lib/cn";

const TABS = [
  { id: "content", label: "Content", icon: Pencil },
  { id: "style", label: "Style", icon: Paintbrush },
  { id: "advanced", label: "Advanced", icon: Settings2 },
] as const;

export function SettingsPanel() {
  const selected = useEditor((s) => s.selected);
  const inserts = useEditor((s) => s.inserts);
  const insert = inserts.find((item) => item.id === selected);
  return (
    <div className="flex h-full min-h-0 flex-col">
      {insert ? <InsertSettings id={insert.id} /> : selected && META[selected] ? <ElementSettings id={selected} /> : <DocumentSettings />}
    </div>
  );
}

function PanelHead({ title, pro, onBack }: { title: string; pro?: boolean; onBack?: () => void }) {
  const setRight = useEditor((s) => s.setRight);
  return (
    <div className="flex items-center gap-1 border-b border-line px-2 py-1">
      {onBack ? (
        <button type="button" className="tool-btn" aria-label="Page settings" onClick={onBack}>
          <ChevronLeft className="size-4" />
        </button>
      ) : null}
      <div className="min-w-0 flex-1 truncate text-caption font-semibold">{title}</div>
      {pro ? <span className="pro-pill">Pro</span> : null}
      <button type="button" className="tool-btn narrow-only" aria-label="Close settings" onClick={() => setRight(false)}>
        <X className="size-4" />
      </button>
    </div>
  );
}

function Tabs() {
  const tab = useEditor((s) => s.tab);
  const setTab = useEditor((s) => s.setTab);
  return (
    <div className="tabs" role="tablist">
      {TABS.map((item) => {
        const Icon = item.icon;
        return (
          <button key={item.id} type="button" role="tab" aria-selected={tab === item.id} className={tab === item.id ? "is-on" : ""} onClick={() => setTab(item.id)}>
            <Icon className="size-4" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function DocumentSettings() {
  const mode = useEditor((s) => s.mode);
  const docTitle = useEditor((s) => s.docTitle);
  const layout = useEditor((s) => s.layout);
  const pageBg = useEditor((s) => s.pageBg);
  const published = useEditor((s) => s.published);
  const updateDoc = useEditor((s) => s.updateDoc);
  const tab = useEditor((s) => s.tab);
  const page = PAGES.find((item) => item.id === mode)!;
  return (
    <>
      <PanelHead title={`${page.sub} settings`} />
      <Tabs />
      <div className="scrollthin-light min-h-0 flex-1 overflow-auto">
        {tab === "content" ? (
          <Section title="General">
            <label className="flex flex-col gap-1.5 text-micro font-medium text-muted">
              Title
              <input className="panel-input" value={docTitle} onChange={(e) => updateDoc({ docTitle: e.target.value }, "Title")} />
            </label>
            <div className="flex items-center justify-between text-caption">
              <span className="text-muted">Status</span>
              <span className="font-semibold">{published ? "Published" : "Draft"}</span>
            </div>
            <label className="flex flex-col gap-1.5 text-micro font-medium text-muted">
              Page layout
              <select
                className="panel-input"
                value={layout}
                onChange={(e) => updateDoc({ layout: e.target.value as "theme" | "canvas" }, "Layout")}
              >
                <option value="theme">Default — theme header & footer</option>
                <option value="canvas">Elementor canvas</option>
              </select>
            </label>
            <p className="text-micro text-muted">{page.condition}</p>
          </Section>
        ) : null}
        {tab === "style" ? (
          <Section title="Body">
            <ColorField label="Background" value={pageBg} onChange={(pageBg) => updateDoc({ pageBg }, "Page background")} />
          </Section>
        ) : null}
        {tab === "advanced" ? (
          <Section title="Custom CSS">
            <p className="text-micro text-muted">Page-level CSS stays in the draft. It is not injected into the preview.</p>
            <textarea className="panel-area" readOnly value={"/* Harbor home */\n.site-header { position: sticky; }"} />
          </Section>
        ) : null}
      </div>
    </>
  );
}

function InsertSettings({ id }: { id: string }) {
  const insert = useEditor((s) => s.inserts.find((item) => item.id === id));
  const updateInsert = useEditor((s) => s.updateInsert);
  const removeInsert = useEditor((s) => s.removeInsert);
  if (!insert) return <DocumentSettings />;
  return (
    <>
      <PanelHead title={insert.kind} onBack={() => useEditor.getState().select(null)} />
      <div className="scrollthin-light min-h-0 flex-1 overflow-auto">
        <Section title="Content">
          {insert.kind === "spacer" || insert.kind === "divider" ? (
            <p className="text-caption text-muted">This structural widget has no text.</p>
          ) : (
            <label className="flex flex-col gap-1.5 text-micro font-medium text-muted">
              Text
              <input className="panel-input" value={insert.text} onChange={(e) => updateInsert(id, e.target.value)} />
            </label>
          )}
          <button type="button" className="text-left text-caption text-accent" onClick={() => removeInsert(id)}>
            Remove from container
          </button>
        </Section>
      </div>
    </>
  );
}

function ElementSettings({ id }: { id: string }) {
  const meta = META[id];
  const tab = useEditor((s) => s.tab);
  const select = useEditor((s) => s.select);
  return (
    <>
      <PanelHead title={meta.label} pro={meta.pro} onBack={() => select(null)} />
      <Tabs />
      <div className="scrollthin-light min-h-0 flex-1 overflow-auto">
        {tab === "content" ? <Content id={id} kind={meta.kind} /> : null}
        {tab === "style" ? <Style id={id} kind={meta.kind} /> : null}
        {tab === "advanced" ? <Advanced id={id} /> : null}
      </div>
    </>
  );
}

function Content({ id, kind }: { id: string; kind: Kind }) {
  const node = useEditor((s) => getNode(s.patches, id));
  const update = useEditor((s) => s.update);
  const fields = useEditor((s) => s.fields);
  const updateField = useEditor((s) => s.updateField);
  const addField = useEditor((s) => s.addField);
  const removeField = useEditor((s) => s.removeField);
  const buttonId = linkedButton(id);
  if (kind === "form") {
    return (
      <>
        <Section title="Form fields">
          <TextControl id={id} prop="text" label="Form name" withTag />
          {id === "cta-form" ? (
            <div className="flex flex-col gap-2">
              {fields.map((field) => (
                <div key={field.id} className="rounded-md border border-line p-2">
                  <div className="mb-2 flex items-center justify-between text-micro font-semibold text-muted">
                    Field
                    <button type="button" aria-label="Remove field" onClick={() => removeField(field.id)}>
                      <X className="size-3.5" />
                    </button>
                  </div>
                  <input className="panel-input mb-2" value={field.label} aria-label="Field label" onChange={(e) => updateField(field.id, { label: e.target.value })} />
                  <select className="panel-input" value={field.type} aria-label="Field type" onChange={(e) => updateField(field.id, { type: e.target.value as typeof field.type })}>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="select">Select</option>
                  </select>
                </div>
              ))}
              <button type="button" className="h-9 rounded-md border border-dashed border-line-strong text-caption" onClick={addField}>
                Add field
              </button>
            </div>
          ) : (
            <p className="text-caption text-muted">Email capture for the exit-intent popup.</p>
          )}
        </Section>
        {buttonId ? (
          <Section title="Button">
            <TextControl id={buttonId} prop="text" label="Text" withTag />
          </Section>
        ) : null}
        <Section title="Actions after submit" openDefault={false}>
          <Toggle label="Email" on />
          <Toggle label="Webhook" />
          <p className="text-micro text-muted">Submissions stay in the editor. Nothing is sent.</p>
        </Section>
      </>
    );
  }
  if (kind === "image") {
    return (
      <Section title="Image">
        <TextControl id={id} prop="text" label="Alt text" />
        <p className="text-micro text-muted">Photograph is part of the Harbor & Co. study.</p>
      </Section>
    );
  }
  if (kind === "container") {
    return (
      <Section title="Layout">
        <Slider label="Gap" min={0} max={64} suffix="px" value={node.gap} onChange={(gap) => update(id, { gap }, "Gap")} />
        <p className="text-micro text-muted">HTML tag · div · Direction follows the breakpoint.</p>
      </Section>
    );
  }
  return (
    <Section title="Content">
      <TextControl id={id} prop="text" label={kind === "nav" ? "Menu items" : "Text"} withTag={kind !== "nav"} multiline={kind === "text"} />
      {kind === "text" || kind === "testimonial" || kind === "iconbox" || kind === "logo" ? (
        <TextControl id={id} prop="sub" label={kind === "testimonial" ? "Name" : "Description"} />
      ) : null}
      {kind === "button" ? <TextControl id={id} prop="href" label="Link" /> : null}
      <span className="text-micro font-medium text-muted">Alignment</span>
      <AlignRow value={node.align} onChange={(align) => update(id, { align }, "Alignment")} />
    </Section>
  );
}

function Style({ id, kind }: { id: string; kind: Kind }) {
  const node = useEditor((s) => getNode(s.patches, id));
  const update = useEditor((s) => s.update);
  const buttonId = linkedButton(id);
  const textual = kind !== "image" && kind !== "container";
  return (
    <>
      {textual ? (
        <Section title="Typography">
          <label className="flex flex-col gap-1.5 text-micro font-medium text-muted">
            Family
            <select className="panel-input" value={node.family} onChange={(e) => update(id, { family: e.target.value as "sans" | "display" }, "Font")}>
              <option value="sans">Inter</option>
              <option value="display">Fraunces</option>
            </select>
          </label>
          <Slider label="Size" min={10} max={72} suffix="px" value={node.size} onChange={(size) => update(id, { size }, "Size")} />
          <label className="flex flex-col gap-1.5 text-micro font-medium text-muted">
            Weight
            <select className="panel-input" value={node.weight} onChange={(e) => update(id, { weight: Number(e.target.value) }, "Weight")}>
              <option value={400}>Regular</option>
              <option value={500}>Medium</option>
              <option value={600}>Semibold</option>
              <option value={700}>Bold</option>
            </select>
          </label>
          <Slider label="Letter spacing" min={0} max={30} value={Math.round(node.tracking * 100)} suffix="" onChange={(tracking) => update(id, { tracking: tracking / 100 }, "Spacing")} />
          <label className="flex items-center justify-between text-caption">
            Uppercase
            <input type="checkbox" checked={node.upper} onChange={(e) => update(id, { upper: e.target.checked }, "Transform")} />
          </label>
          <ColorField label="Text color" value={node.color} onChange={(color) => update(id, { color }, "Text color")} />
        </Section>
      ) : null}
      <Section title={kind === "image" ? "Image" : "Background"}>
        {kind !== "image" ? <ColorField label="Background" value={node.bg} onChange={(bg) => update(id, { bg }, "Background")} /> : null}
        <Slider label="Border radius" min={0} max={32} suffix="px" value={node.radius} onChange={(radius) => update(id, { radius }, "Radius")} />
        <Slider label="Border width" min={0} max={6} suffix="px" value={node.border} onChange={(border) => update(id, { border }, "Border")} />
        <Slider label="Shadow" min={0} max={3} value={node.shadow} onChange={(shadow) => update(id, { shadow }, "Shadow")} />
      </Section>
      {buttonId ? (
        <Section title="Button">
          <StyleFields id={buttonId} />
        </Section>
      ) : null}
    </>
  );
}

function StyleFields({ id }: { id: string }) {
  const node = useEditor((s) => getNode(s.patches, id));
  const update = useEditor((s) => s.update);
  return (
    <>
      <ColorField label="Text" value={node.color} onChange={(color) => update(id, { color }, "Button text")} />
      <ColorField label="Background" value={node.bg} onChange={(bg) => update(id, { bg }, "Button background")} />
      <Slider label="Radius" min={0} max={28} suffix="px" value={node.radius} onChange={(radius) => update(id, { radius }, "Button radius")} />
      <Slider label="Size" min={12} max={22} suffix="px" value={node.size} onChange={(size) => update(id, { size }, "Button size")} />
    </>
  );
}

function Advanced({ id }: { id: string }) {
  const node = useEditor((s) => getNode(s.patches, id));
  const update = useEditor((s) => s.update);
  const globals = useEditor((s) => s.globals);
  const toggleGlobal = useEditor((s) => s.toggleGlobal);
  const motions: { id: Motion; label: string }[] = [
    { id: "none", label: "None" },
    { id: "fade", label: "Fade in" },
    { id: "up", label: "Fade in up" },
    { id: "zoom", label: "Zoom in" },
  ];
  return (
    <>
      <Section title="Spacing">
        <Slider label="Margin" min={0} max={48} suffix="px" value={node.margin} onChange={(margin) => update(id, { margin }, "Margin")} />
        <Slider label="Padding" min={0} max={80} suffix="px" value={node.pad} onChange={(pad) => update(id, { pad }, "Padding")} />
      </Section>
      <Section title="Motion effects">
        <label className="flex flex-col gap-1.5 text-micro font-medium text-muted">
          Entrance animation
          <select className="panel-input" value={node.motion} onChange={(e) => update(id, { motion: e.target.value as Motion }, "Motion")}>
            {motions.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </label>
        <p className="text-micro text-muted">Duration 560ms · ease · once</p>
      </Section>
      <Section title="Responsive">
        <p className="text-micro text-muted">Hide this element on a breakpoint. A dashed bar keeps it selectable.</p>
        <div className="grid grid-cols-3 gap-1">
          <VisButton id={id} device="desktop" on={node.showDesktop} icon={<Monitor className="size-4" />} />
          <VisButton id={id} device="tablet" on={node.showTablet} icon={<TabletSmartphone className="size-4" />} />
          <VisButton id={id} device="mobile" on={node.showMobile} icon={<Smartphone className="size-4" />} />
        </div>
      </Section>
      <Section title="Custom CSS" openDefault={false}>
        <label className="flex flex-col gap-1.5 text-micro font-medium text-muted">
          <span className="inline-flex items-center gap-1"><Code className="size-3.5" /> CSS</span>
          <textarea
            className="panel-area"
            value={node.cssNote}
            placeholder={"selector {\n  /* scoped to this element */\n}"}
            onChange={(e) => update(id, { cssNote: e.target.value }, "Custom CSS")}
          />
        </label>
        <TextControl id={id} prop="cssClass" label="CSS classes" />
        <p className="text-micro text-muted">CSS ID · harbor-{id}</p>
      </Section>
      <Section title="Advanced" openDefault={false}>
        <Slider label="Z-index" min={0} max={20} value={node.z} onChange={(z) => update(id, { z }, "Z-index")} />
        <button
          type="button"
          className={cn("h-9 rounded-md text-caption", globals.includes(id) ? "bg-accent text-accent-ink" : "border border-line")}
          onClick={() => toggleGlobal(id)}
        >
          {globals.includes(id) ? "Saved as global widget" : "Save as global widget"}
        </button>
      </Section>
    </>
  );
}

function VisButton({
  id,
  device,
  on,
  icon,
}: {
  id: string;
  device: "desktop" | "tablet" | "mobile";
  on: boolean;
  icon: ReactNode;
}) {
  const update = useEditor((s) => s.update);
  const key = device === "desktop" ? "showDesktop" : device === "tablet" ? "showTablet" : "showMobile";
  return (
    <button
      type="button"
      className={cn("flex h-11 flex-col items-center justify-center gap-0.5 rounded-md border border-line text-micro", on ? "text-ink" : "bg-paper text-faint")}
      aria-pressed={on}
      onClick={() => update(id, { [key]: !on }, "Responsive")}
    >
      {icon}
      {on ? <Eye className="size-3" /> : <EyeOff className="size-3" />}
    </button>
  );
}

function Toggle({ label, on = false }: { label: string; on?: boolean }) {
  return (
    <label className="flex items-center justify-between text-caption">
      {label}
      <input type="checkbox" defaultChecked={on} />
    </label>
  );
}
