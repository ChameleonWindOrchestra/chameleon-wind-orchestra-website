import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Concert } from "@/lib/data/concerts";
import { formatJapaneseDate } from "@/lib/utils/date";

type Props = {
  concerts: Concert[];
};

export function PastList({ concerts }: Props) {
  if (concerts.length === 0) return null;

  return (
    <div className="mb-20">
      <SectionHeading num="— 03" en="Past" jp="過去の出演" />

      <ul className="m-0 grid list-none grid-cols-2 gap-x-6 gap-y-10 p-0 md:grid-cols-3 md:gap-x-10 md:gap-y-14">
        {concerts.map((c) => (
          <li key={c.id}>
            <Link
              href={`/concerts/${c.id}`}
              className="group block no-underline"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-bg-soft">
                {c.image ? (
                  <Image
                    src={c.image.url}
                    alt={`${c.title.replace(/\n/g, " ")} フライヤー`}
                    fill
                    sizes="(max-width: 768px) 50vw, 400px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <Placeholder height="100%" label="flyer" />
                )}
              </div>
              <div className="mt-4">
                <span className="font-mono text-[11px] text-ink-mute md:text-[12px]">
                  {formatJapaneseDate(c.startAt)}
                </span>
                <h3 className="font-serif m-0 mt-1 whitespace-pre-line text-[14px] font-medium leading-[1.5] text-ink transition-colors group-hover:text-accent md:text-[16px]">
                  {c.title}
                </h3>
                <p className="m-0 mt-1 text-[11px] leading-[1.6] text-ink-3 md:text-[12px]">
                  {c.place}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
