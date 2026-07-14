import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { getLatestNews } from "@/lib/data/news";

export async function NewsSection() {
  const items = await getLatestNews(6);
  if (items.length === 0) return null;

  return (
    <section className="px-8 py-24 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionHeading num="— 03" en="News" jp="お知らせ" />
          <TextLink href="/news">News 一覧</TextLink>
        </div>

        <ul className="m-0 list-none border-t border-line p-0">
          {items.map((n) => (
            <li key={n.id} className="border-b border-line">
              <Link
                href={n.href}
                className="group grid grid-cols-[72px_1fr] items-center gap-4 py-4 transition-colors md:grid-cols-[96px_1fr] md:gap-6 md:py-5"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-bg-soft">
                  {n.imageSrc ? (
                    <Image
                      src={n.imageSrc}
                      alt={n.title}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/assets/logo_top.svg"
                        alt=""
                        width={457}
                        height={170}
                        unoptimized
                        className="h-6 w-auto opacity-30 md:h-7"
                      />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-[11px] text-ink-mute">
                      {n.date}
                    </span>
                    <span className="border border-accent px-2 py-[2px] text-[9px] uppercase tracking-[0.12em] text-accent md:text-[10px]">
                      {n.category}
                    </span>
                  </div>
                  <h4 className="font-serif m-0 text-[13px] font-medium leading-[1.55] text-ink transition-colors group-hover:text-accent md:text-[15px]">
                    {n.title}
                  </h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
