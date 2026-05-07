import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Concert } from "@/lib/data/concerts";

type Props = {
  concert: Concert;
};

export function FeaturedHero({ concert }: Props) {
  const rows: { label: string; value: string }[] = [
    { label: "日時", value: concert.date },
    {
      label: "開場 / 開演",
      value: `${concert.open ?? "—"} / ${concert.start ?? "—"}`,
    },
    { label: "会場", value: concert.venue },
    { label: "入場料", value: concert.fee ?? "" },
  ];

  return (
    <div className="mb-24 md:mb-[120px]">
      <SectionHeading num="— 01" en="Featured" jp="次回公演" />

      <div className="grid grid-cols-1 items-center gap-10 bg-brown-deep px-8 py-12 text-[#F5EFE6] md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-20 md:py-[72px]">
        <div>
          {concert.numberLabel && (
            <div className="font-eng mb-4 text-[14px] uppercase tracking-[0.18em] text-accent-soft">
              {concert.numberLabel}
            </div>
          )}
          <h2 className="font-serif m-0 whitespace-pre-line text-[40px] font-medium leading-[1.4] md:text-[52px]">
            {concert.title}
          </h2>
          {concert.subtitle && (
            <p className="mt-5 text-[14px] italic text-[rgba(245,239,230,0.8)]">
              &ldquo;{concert.subtitle}&rdquo;
            </p>
          )}

          <dl className="mt-10 border-t border-[rgba(232,221,201,0.2)]">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[100px_1fr] gap-5 border-b border-[rgba(232,221,201,0.2)] py-[18px] md:grid-cols-[110px_1fr] md:gap-6"
              >
                <dt className="font-eng text-[12px] uppercase tracking-[0.14em] text-accent-soft">
                  {row.label}
                </dt>
                <dd className="m-0 text-[14px] leading-[1.7]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {concert.flyer && (
          <div className="bg-white p-2">
            <div className="relative aspect-[3/4] w-full md:h-[460px] md:aspect-auto">
              <Image
                src={concert.flyer.src}
                alt={concert.flyer.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
