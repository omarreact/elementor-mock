import { useState, type ReactNode } from "react";
import { Database, X } from "lucide-react";
import { TAGS, getNode, type Align, type NodeState } from "./model";
import { useEditor } from "./store";

export function Section({
  title,
  children,
  openDefault = true,
}: {
  title: string;
  children: ReactNode;
  openDefault?: boolean;
}) {
  const [open, setOpen] = useState(openDefault);
  return (
    <section className="border-b border-line">
      <button type="button" className="section-h" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {title}
        <span className="text-muted">{open ? "–" : "+"}</span>
      </button>
      {open ? <div className="flex flex-col gap-3 px-3 py-3">{children}</div> : null}
    </section>
  );
}

export function Slider({
  label,
  value,
  min,
  max,
  onChange,
  suffix = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  suffix?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="flex items-center justify-between text-micro font-medium text-muted">
        {label}
        <span className="tabular-nums text-ink">
          {value}
          {suffix}
        </span>
      </span>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  );
}

export function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const hex = /^#[0-9a-fA-F]{6}$/.test(value) ? value : "#fffcfa";
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-micro font-medium text-muted">{label}</span>
      <span className="flex items-center gap-2">
        <input aria-label={label} type="color" value={hex} onChange={(e) => onChange(e.target.value)} />
        <span className="w-16 font-mono text-micro uppercase text-ink-soft">{value === "transparent" ? "None" : hex}</span>
        {value !== "transparent" ? (
          <button type="button" className="text-micro text-muted" onClick={() => onChange("transparent")}>
            Clear
          </button>
        ) : null}
      </span>
    </div>
  );
}

export function AlignRow({ value, onChange }: { value: Align; onChange: (value: Align) => void }) {
  const options: Align[] = ["left", "center", "right"];
  return (
    <div className="grid grid-cols-3 gap-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`h-8 rounded-md border border-line text-micro capitalize ${value === option ? "bg-accent-soft text-accent" : "text-ink-soft"}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function TagControl({ id }: { id: string }) {
  const dynamic = useEditor((s) => getNode(s.patches, id).dynamic);
  const update = useEditor((s) => s.update);
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        className={`tool-btn h-7 w-7 ${dynamic ? "is-on" : ""}`}
        aria-label="Dynamic tags"
        aria-pressed={!!dynamic}
        onClick={() => setOpen((v) => !v)}
      >
        <Database className="size-3.5" />
      </button>
      {open ? (
        <div className="tag-list mt-1">
          {Object.keys(TAGS).map((tag) => (
            <button
              key={tag}
              type="button"
              className={dynamic === tag ? "is-on" : ""}
              onClick={() => {
                update(id, { dynamic: tag }, "Dynamic tag");
                setOpen(false);
              }}
            >
              {tag}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              update(id, { dynamic: null }, "Dynamic tag");
              setOpen(false);
            }}
          >
            Remove tag
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function TextControl({
  id,
  label,
  prop,
  multiline = false,
  withTag = false,
}: {
  id: string;
  label: string;
  prop: keyof Pick<NodeState, "text" | "sub" | "href" | "cssClass" | "cssNote">;
  multiline?: boolean;
  withTag?: boolean;
}) {
  const value = useEditor((s) => getNode(s.patches, id)[prop]);
  const dynamic = useEditor((s) => getNode(s.patches, id).dynamic);
  const update = useEditor((s) => s.update);
  const showChip = withTag && prop === "text" && !!dynamic;
  return (
    <label className="flex flex-col gap-1.5">
      <span className="flex items-center justify-between text-micro font-medium text-muted">
        {label}
        {withTag ? <TagControl id={id} /> : null}
      </span>
      {showChip ? (
        <span className="chip">
          <Database className="size-3" />
          {dynamic}
          <button type="button" aria-label="Remove dynamic tag" onClick={() => update(id, { dynamic: null }, "Dynamic tag")}>
            <X className="size-3" />
          </button>
        </span>
      ) : multiline ? (
        <textarea
          className="panel-area"
          value={value}
          onChange={(e) => update(id, { [prop]: e.target.value }, `${label}`)}
        />
      ) : (
        <input
          className="panel-input"
          value={value}
          onChange={(e) => update(id, { [prop]: e.target.value }, `${label}`)}
        />
      )}
    </label>
  );
}
