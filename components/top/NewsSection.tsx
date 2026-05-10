import Image from "next/image";
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

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
          {items.map((n) => (
            <article key={n.id} className="border border-line bg-bg-card">
              <div className="relative aspect-[3/2]">
                {n.imageSrc ? (
                  <Image
                    src={n.imageSrc}
                    alt={n.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-bg-soft">
                    <Image
                      src="/assets/logo-horizontal.png"
                      alt=""
                      width={340}
                      height={80}
                      sizes="(max-width: 640px) 60vw, (max-width: 768px) 30vw, 20vw"
                      className="h-14 w-auto opacity-50 md:h-20"
                    />
                  </div>
                )}
              </div>

              <div className="px-7 pb-8 pt-6">
                <div className="mb-3.5 flex items-center gap-3">
                  <span className="font-mono text-[11px] text-ink-mute">
                    {n.date}
                  </span>
                  <span className="border border-accent px-2.5 py-[3px] text-[10px] uppercase tracking-[0.12em] text-accent">
                    {n.category}
                  </span>
                </div>
                <h4 className="font-serif m-0 text-[16px] font-medium leading-[1.7] text-ink">
                  {n.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
