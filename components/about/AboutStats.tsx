type Stat = {
  number: string;
  label: string;
  caption: string;
};

const STATS: Stat[] = [
  { number: "2025", label: "Founded", caption: "結成年" },
  { number: "30+", label: "Members", caption: "団員数" },
  { number: "8", label: "Sections", caption: "パート" },
  { number: "池田", label: "Based in", caption: "活動拠点" },
];

export function AboutStats() {
  return (
    <div className="mb-24 grid grid-cols-2 border-y border-line md:mb-[120px] md:grid-cols-4">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={[
            "px-4 py-10 text-center md:py-12",
            i % 2 === 1 ? "border-l border-line" : "",
            i === 2 ? "md:border-l md:border-line" : "",
            i >= 2 ? "border-t border-line md:border-t-0" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="font-serif text-[44px] font-normal leading-none text-accent md:text-[56px]">
            {s.number}
          </div>
          <div className="font-eng mt-3.5 text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            {s.label}
          </div>
          <div className="mt-1 text-[11px] text-ink-3">{s.caption}</div>
        </div>
      ))}
    </div>
  );
}
