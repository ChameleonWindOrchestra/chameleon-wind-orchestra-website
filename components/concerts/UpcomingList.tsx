import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Concert, ConcertStatus } from "@/lib/data/concerts";

type Props = {
  concerts: Concert[];
};

const STATUS_CLASS: Record<ConcertStatus, string> = {
  受付中: "border-accent text-accent",
  準備中: "border-ink-mute text-ink-mute",
  調整中: "border-ink-mute text-ink-mute",
  終了: "border-ink-mute text-ink-mute",
};

export function UpcomingList({ concerts }: Props) {
  return (
    <div className="mb-24 md:mb-[120px]">
      <SectionHeading num="— 02" en="Upcoming" jp="今後のスケジュール" />

      <ul className="m-0 list-none border-b border-line p-0">
        {concerts.map((c) => (
          <li
            key={c.id}
            className="grid grid-cols-1 gap-3 border-t border-line py-7 md:grid-cols-[80px_160px_1fr_1fr_120px] md:items-center md:gap-6 md:py-8"
          >
            <span className="font-eng text-[20px] text-accent md:text-[24px]">
              No.{c.no}
            </span>

            <div>
              <div className="font-mono text-[12px] text-ink-2">
                {c.dateShort ?? c.date}
              </div>
              {c.open && c.start && (
                <div className="mt-1 text-[11px] text-ink-mute">
                  {c.open} OPEN / {c.start} START
                </div>
              )}
            </div>

            <div>
              <div className="font-serif text-[16px] text-ink md:text-[17px]">
                {c.title}
              </div>
              {c.subtitle && (
                <div className="mt-1 text-[11px] italic text-ink-mute">
                  {c.subtitle}
                </div>
              )}
            </div>

            <div>
              <div className="text-[12px] text-ink-3">{c.venue}</div>
              {c.fee && (
                <div className="mt-1 text-[11px] text-ink-mute">{c.fee}</div>
              )}
            </div>

            {c.status && (
              <span
                className={`inline-flex w-fit border px-3.5 py-1.5 text-[10px] tracking-[0.12em] md:justify-self-end ${STATUS_CLASS[c.status]}`}
              >
                {c.status}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
