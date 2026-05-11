import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { getLatestNews } from "@/lib/data/news";

export function NewsSection() {
  const items = getLatestNews(6);

  return (
    <section className="px-8 py-24 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionHeading num="— 03" en="News" jp="お知らせ" />
          <TextLink href="/news">News 一覧</TextLink>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {items.map((n) => (
            <article
              key={n.id}
              className="border border-line bg-bg-card px-6 py-6 md:px-7 md:py-7"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[11px] text-ink-mute">
                  {n.date}
                </span>
                <span className="border border-accent px-2.5 py-[3px] text-[10px] uppercase tracking-[0.12em] text-accent">
                  {n.category}
                </span>
              </div>
              <h4 className="font-serif m-0 text-[15px] font-medium leading-[1.7] text-ink md:text-[16px]">
                {n.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
