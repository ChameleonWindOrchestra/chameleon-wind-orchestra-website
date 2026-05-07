import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Concert } from "@/lib/data/concerts";

type Props = {
  concerts: Concert[];
};

export function PastList({ concerts }: Props) {
  if (concerts.length === 0) return null;

  return (
    <div className="mb-20">
      <SectionHeading num="— 03" en="Past" jp="過去の出演" />

      <ul className="m-0 list-none border-b border-line p-0">
        {concerts.map((c) => (
          <li
            key={c.id}
            className="grid grid-cols-1 gap-2 border-t border-line py-6 md:grid-cols-[160px_1fr_1fr] md:items-center md:gap-8"
          >
            <span className="font-mono text-[12px] text-ink-mute">
              {c.date}
            </span>
            <span className="font-serif text-[15px] text-ink">{c.title}</span>
            <span className="text-[12px] text-ink-3">{c.venue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
