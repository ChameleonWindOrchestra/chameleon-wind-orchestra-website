import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

export function NewsSection() {
  return (
    <section className="px-8 py-24 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionHeading num="— 03" en="News" jp="お知らせ" />
          <TextLink href="/news">News 一覧</TextLink>
        </div>

        <div className="border border-line bg-bg-card px-8 py-20 text-center">
          <div className="font-eng mb-4 text-[12px] uppercase tracking-[0.22em] text-accent">
            Coming Soon
          </div>
          <p className="font-serif m-0 text-[18px] leading-[1.9] text-ink">
            お知らせは現在準備中です
          </p>
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-[1.9] text-ink-3">
            演奏会情報や練習風景など、これから随時お届けしていきます。
          </p>
        </div>
      </div>
    </section>
  );
}
