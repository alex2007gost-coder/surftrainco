type SectionTitleProps = {
  title: string;
  script: string;
  layout?: "inline" | "stacked" | "stacked-end";
  as?: "h1" | "h2";
};

const layouts = {
  inline: "flex flex-wrap items-baseline gap-x-[30px]",
  stacked: "flex flex-col items-start",
  "stacked-end": "flex flex-col",
};

const scriptLayouts = {
  inline: "",
  stacked: "ml-[70px] mt-[6px]",
  "stacked-end": "self-end mt-[10px]",
};

export default function SectionTitle({ title, script, layout = "inline", as: Tag = "h2" }: SectionTitleProps) {
  return (
    <Tag className={layouts[layout]}>
      <span className="text-[90px] font-extrabold uppercase leading-[90px] tracking-[-0.075em]">{title}</span>
      <span
        className={`font-script text-[78px] leading-[72px] tracking-[0.02em] text-brand [-webkit-text-stroke:1px_currentColor] [word-spacing:-0.12em] ${scriptLayouts[layout]}`}
      >
        {script}
      </span>
    </Tag>
  );
}
