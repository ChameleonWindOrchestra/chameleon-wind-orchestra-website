import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { getLatestNews } from "@/lib/data/news";

export function NewsSection() {
  const items = getLatestNews(6);
  if (items.length === 0) return null;

  const [featured, ...rest] = items;

  return (
    <section className="px-8 py-24 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionHeading num="— 03" en="News" jp="お知らせ" />
          <TextLink href="/news">News 一覧</TextLink>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr] md:gap-12">
          <article className="border border-line bg-bg-card">
            <div className="relative aspect-[3/2]">
              {featured.imageSrc ? (
                <Image
                  src={featured.imageSrc}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-bg-soft">
                  <Image
                    src="/assets/logo_top.svg"
                    alt=""
                    width={457}
                    height={170}
                    unoptimized
                    className="h-16 w-auto opacity-50 md:h-24"
                  />
                </div>
              )}
            </div>
            <div className="px-6 py-6 md:px-7 md:py-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[11px] text-ink-mute">
                  {featured.date}
                </span>
                <span className="border border-accent px-2.5 py-[3px] text-[10px] uppercase tracking-[0.12em] text-accent">
                  {featured.category}
                </span>
              </div>
              <h4 className="font-serif m-0 text-[16px] font-medium leading-[1.6] text-ink md:text-[18px]">
                {featured.title}
              </h4>
            </div>
          </article>

          {rest.length > 0 && (
            <ul className="m-0 list-none border-b border-line p-0">
              {rest.map((n) => (
                <li
                  key={n.id}
                  className="grid grid-cols-1 gap-2 border-t border-line py-5 md:grid-cols-[auto_1fr] md:items-baseline md:gap-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-ink-mute">
                      {n.date}
                    </span>
                    <span className="border border-accent px-2 py-[2px] text-[10px] uppercase tracking-[0.12em] text-accent">
                      {n.category}
                    </span>
                  </div>
                  <h4 className="font-serif m-0 text-[14px] font-medium leading-[1.6] text-ink md:text-[15px]">
                    {n.title}
                  </h4>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
