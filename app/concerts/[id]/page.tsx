import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TextLink } from "@/components/ui/TextLink";
import { getAllConcerts, getConcertById } from "@/lib/data/concerts";
import { formatJapaneseDate, formatTime } from "@/lib/utils/date";
import { formatFee } from "@/lib/utils/fee";

type Params = { id: string };

// 全公演をビルド時に静的生成する(ニュース詳細と同じ方式)。
// ここに含まれない ID は dynamicParams のデフォルト(true)によりリクエスト時に生成される。
export async function generateStaticParams(): Promise<Params[]> {
  const items = await getAllConcerts();
  return items.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const concert = await getConcertById(id);
  if (!concert) return { title: "演奏会情報" };
  const title = concert.title.replace(/\n/g, " ");
  return {
    title,
    description: `${formatJapaneseDate(concert.startAt)} ${concert.place}`,
  };
}

function ExternalTextLink({
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
      className="inline-flex items-baseline gap-2.5 border-b border-ink py-1 text-[13px] tracking-[0.06em] text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      <span className="font-eng" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default async function ConcertDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const concert = await getConcertById(id);
  if (!concert) notFound();

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
    <article className="px-8 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[900px]">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "演奏会情報", href: "/concerts" },
            { label: concert.title.replace(/\n/g, " ") },
          ]}
        />

        <div className="mt-8 font-mono text-[12px] text-ink-mute">
          {formatJapaneseDate(concert.startAt)}
        </div>
        <h1 className="font-serif m-0 mt-3 whitespace-pre-line text-[28px] font-medium leading-[1.4] text-ink md:text-[44px] [word-break:auto-phrase]">
          {concert.title}
        </h1>
        {concert.subtitle && (
          <p className="m-0 mt-4 text-[14px] italic text-ink-3">
            &ldquo;{concert.subtitle}&rdquo;
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14">
          {concert.image && (
            <div className="relative aspect-[3/4] w-full max-w-[480px] bg-bg-soft">
              <Image
                src={concert.image.url}
                alt={`${concert.title.replace(/\n/g, " ")} フライヤー`}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                priority
                className="object-contain"
              />
            </div>
          )}

          <div>
            <dl className="m-0 border-t border-line">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[90px_1fr] gap-5 border-b border-line py-4 md:grid-cols-[110px_1fr]"
                >
                  <dt className="font-eng text-[11px] uppercase tracking-[0.14em] text-accent">
                    {row.label}
                  </dt>
                  <dd className="m-0 text-[14px] leading-[1.7] text-ink-2">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            {(concert.placeUrl || concert.mapUrl) && (
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {concert.placeUrl && (
                  <ExternalTextLink href={concert.placeUrl}>
                    会場 公式サイト
                  </ExternalTextLink>
                )}
                {concert.mapUrl && (
                  <ExternalTextLink href={concert.mapUrl}>
                    Google マップ
                  </ExternalTextLink>
                )}
              </div>
            )}

            {concert.note && (
              <p className="m-0 mt-6 text-[12px] leading-[1.9] text-ink-3">
                {concert.note}
              </p>
            )}
          </div>
        </div>

        {concert.programs && concert.programs.length > 0 && (
          <div className="mt-14 border-t border-line pt-10 md:mt-20">
            <div className="font-eng mb-6 text-[12px] uppercase tracking-[0.18em] text-accent">
              Program / 演奏曲目
            </div>
            <div className="flex flex-col gap-8">
              {concert.programs.map((section, i) => (
                <div key={`${i}-${section.title}`}>
                  <div className="font-serif mb-3 text-[15px] tracking-[0.06em] text-ink">
                    {section.title}
                  </div>
                  <ol className="m-0 list-none p-0">
                    {section.songs.map((song, j) => (
                      <li
                        key={`${j}-${song.title}`}
                        className="grid grid-cols-[28px_1fr] items-baseline gap-3 border-b border-line py-2.5"
                      >
                        <span className="font-eng text-[12px] tracking-[0.14em] text-accent">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="text-[14px] leading-[1.6] text-ink-2">
                            {song.title}
                          </div>
                          {song.note && (
                            <div className="mt-1 text-[10px] leading-[1.6] text-ink-mute">
                              {song.note}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-line pt-8">
          <TextLink href="/concerts" arrow={false}>
            ← 演奏会情報へ戻る
          </TextLink>
        </div>
      </div>
    </article>
  );
}
