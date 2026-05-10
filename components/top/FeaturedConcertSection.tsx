import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedConcert } from "@/lib/data/concerts";
import { formatJapaneseDate, formatTime } from "@/lib/utils/date";
import { formatFee } from "@/lib/utils/fee";

export function FeaturedConcertSection() {
  const concert = getFeaturedConcert();
  if (!concert) return null;

  const rows: { label: string; value: string }[] = [
    { label: "日時", value: formatJapaneseDate(concert.startAt) },
    {
      label: "開場 / 開演",
      value: `${concert.openAt ? formatTime(concert.openAt) : "—"} / ${formatTime(concert.startAt)}`,
    },
    { label: "会場", value: concert.place },
    { label: "料金", value: formatFee(concert.fee) },
  ];

  return (
    <section className="relative overflow-hidden border-t border-line px-8 py-24 md:px-20 md:py-[140px]">
      <div
        aria-hidden="true"
        className="font-eng pointer-events-none absolute -right-5 top-[60px] text-[120px] uppercase tracking-[0.04em] leading-none text-line-soft md:text-[220px]"
      >
        Concert
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <SectionHeading num="— 01" en="Concerts" jp="演奏会のご案内" />

        <div className="grid grid-cols-1 items-stretch bg-brown-deep text-[#F5EFE6] md:grid-cols-[1.2fr_1fr]">
          <div className="px-8 py-12 md:px-16 md:py-16">
            <h3 className="font-serif m-0 whitespace-pre-line text-[36px] font-medium leading-[1.4] md:text-[44px]">
              {concert.title}
            </h3>
            {concert.subtitle && (
              <p className="mt-5 text-[14px] italic text-[rgba(245,239,230,0.7)]">
                &ldquo;{concert.subtitle}&rdquo;
              </p>
            )}

            <dl className="mt-8 border-t border-[rgba(232,221,201,0.2)]">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[90px_1fr] gap-5 border-b border-[rgba(232,221,201,0.2)] py-4 md:grid-cols-[100px_1fr]"
                >
                  <dt className="font-eng text-[11px] uppercase tracking-[0.14em] text-accent-soft">
                    {row.label}
                  </dt>
                  <dd className="m-0 text-[14px] leading-[1.7]">{row.value}</dd>
                </div>
              ))}
            </dl>

            {(concert.placeUrl || concert.mapUrl) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {concert.placeUrl && (
                  <ExternalAccessLink href={concert.placeUrl}>
                    会場 公式サイト
                  </ExternalAccessLink>
                )}
                {concert.mapUrl && (
                  <ExternalAccessLink href={concert.mapUrl}>
                    Google マップ
                  </ExternalAccessLink>
                )}
              </div>
            )}

            {concert.note && (
              <p className="mt-6 text-[12px] leading-[1.9] text-[rgba(245,239,230,0.7)]">
                {concert.note}
              </p>
            )}

            {concert.programs && concert.programs.length > 0 && (
              <div className="mt-10 border-t border-[rgba(232,221,201,0.2)] pt-8">
                <div className="font-eng mb-5 text-[11px] uppercase tracking-[0.18em] text-accent-soft">
                  Program / 演奏曲目
                </div>
                <div className="flex flex-col gap-7">
                  {concert.programs.map((section, i) => (
                    <div key={`${i}-${section.title}`}>
                      <div className="font-serif mb-3 text-[14px] tracking-[0.06em] text-accent-soft">
                        {section.title}
                      </div>
                      <ol className="m-0 list-none p-0">
                        {section.songs.map((song, j) => (
                          <li
                            key={`${j}-${song}`}
                            className="grid grid-cols-[28px_1fr] items-baseline gap-3 border-b border-[rgba(232,221,201,0.15)] py-2.5"
                          >
                            <span className="font-eng text-[11px] tracking-[0.14em] text-accent-soft">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[14px] leading-[1.5]">
                              {song}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {concert.image && (
            <div className="bg-white p-2 md:p-3">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={concert.image.url}
                  alt={`${concert.title.replace(/\n/g, " ")} フライヤー`}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className={
                    concert.image.height >= concert.image.width
                      ? "object-contain"
                      : "object-cover"
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ExternalAccessLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-[rgba(232,221,201,0.3)] px-5 py-2.5 text-[12px] tracking-[0.12em] text-[#F5EFE6] transition-colors hover:border-accent-soft hover:text-accent-soft"
    >
      {children}
      <span className="font-eng" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
