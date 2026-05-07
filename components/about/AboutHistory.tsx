import { SectionHeading } from "@/components/ui/SectionHeading";

type HistoryEntry = {
  year: string;
  month: string;
  title: string;
  description: string;
};

const HISTORY: HistoryEntry[] = [
  {
    year: "2025",
    month: "09",
    title: "結成",
    description: "池田市内の吹奏楽愛好家が集まり、有志10名で活動開始。",
  },
  {
    year: "2025",
    month: "10",
    title: "結成記念演奏会",
    description: "池田市文化交流センターにて、初の演奏披露。",
  },
  {
    year: "2026",
    month: "01",
    title: "春のミニコンサート",
    description: "池田市民会館にて。来場者100名超。",
  },
  {
    year: "2026",
    month: "06",
    title: "第1回 定期演奏会",
    description:
      "池田市民文化会館アゼリアホール大ホールにて開催予定。",
  },
];

export function AboutHistory() {
  return (
    <div className="mb-20">
      <SectionHeading num="— 02" en="History" jp="これまでのあゆみ" />

      <ol className="mx-auto m-0 max-w-[720px] list-none border-b border-line p-0">
        {HISTORY.map((h) => (
          <li
            key={`${h.year}-${h.month}-${h.title}`}
            className="grid grid-cols-[80px_1fr] gap-6 border-t border-line py-7 md:grid-cols-[120px_1fr] md:gap-8 md:py-8"
          >
            <div>
              <div className="font-eng text-[24px] font-normal text-accent md:text-[28px]">
                {h.year}
              </div>
              <div className="font-mono mt-1 text-[11px] text-ink-mute">
                {h.month}
              </div>
            </div>
            <div>
              <div className="font-serif mb-2 text-[16px] text-ink md:text-[18px]">
                {h.title}
              </div>
              <p className="m-0 text-[13px] leading-[2] text-ink-3">
                {h.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
