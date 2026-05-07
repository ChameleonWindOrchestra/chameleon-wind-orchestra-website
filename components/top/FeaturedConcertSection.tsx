import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedConcert } from "@/lib/data/concerts";

export function FeaturedConcertSection() {
  const concert = getFeaturedConcert();
  if (!concert) return null;

  const rows: { label: string; value: string }[] = [
    { label: "日時", value: concert.date },
    {
      label: "時間",
      value: `${concert.open ?? "—"} 開場 / ${concert.start ?? "—"} 開演`,
    },
    { label: "会場", value: concert.venue },
    { label: "入場料", value: concert.fee ?? "" },
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

        <div className="grid grid-cols-1 items-stretch bg-brown-deep text-[#F5EFE6] md:grid-cols-2">
          <div className="px-8 py-12 md:px-16 md:py-16">
            {concert.numberLabel && (
              <div className="font-eng mb-[14px] text-[14px] uppercase tracking-[0.18em] text-accent-soft">
                {concert.numberLabel}
              </div>
            )}
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
                  className="grid grid-cols-[80px_1fr] gap-5 border-b border-[rgba(232,221,201,0.2)] py-4 md:grid-cols-[90px_1fr]"
                >
                  <dt className="font-eng text-[11px] uppercase tracking-[0.14em] text-accent-soft">
                    {row.label}
                  </dt>
                  <dd className="m-0 text-[14px]">{row.value}</dd>
                </div>
              ))}
            </dl>

            {concert.detailHref && (
              <div className="mt-8 flex gap-3">
                <Button variant="primary" size="lg" icon href={concert.detailHref}>
                  詳細を見る
                </Button>
              </div>
            )}
          </div>

          <div className="relative min-h-[320px] md:min-h-0">
            {concert.flyer && (
              <Image
                src={concert.flyer.src}
                alt={concert.flyer.alt}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover object-center"
                priority={false}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
