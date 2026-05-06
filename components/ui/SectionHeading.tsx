type Props = {
  jp: string;
  en: string;
  num?: string;
  align?: "left" | "center";
};

export function SectionHeading({ jp, en, num, align = "left" }: Props) {
  return (
    <div
      className={[
        "flex items-baseline gap-8 mb-12",
        align === "center" ? "justify-center" : "justify-start",
      ].join(" ")}
    >
      {num && (
        <span className="font-mono text-[11px] text-accent tracking-[0.14em]">
          {num}
        </span>
      )}
      <div>
        <div className="font-eng text-[14px] text-ink-mute uppercase mb-3 tracking-[0.18em]">
          {en}
        </div>
        <h2 className="font-serif text-[40px] m-0 font-medium text-ink leading-[1.4]">
          {jp}
        </h2>
      </div>
    </div>
  );
}
