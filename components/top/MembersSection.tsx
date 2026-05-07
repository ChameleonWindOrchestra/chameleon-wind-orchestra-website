import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

export function MembersSection() {
  return (
    <section className="bg-bg-soft px-8 py-24 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionHeading num="— 04" en="Members" jp="団員紹介" />
          <TextLink href="/members">Members 一覧</TextLink>
        </div>

        <div className="border border-line bg-bg-card px-8 py-20 text-center">
          <div className="font-eng mb-4 text-[12px] uppercase tracking-[0.22em] text-accent">
            Coming Soon
          </div>
          <p className="font-serif m-0 text-[18px] leading-[1.9] text-ink">
            団員紹介ページは現在準備中です
          </p>
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-[1.9] text-ink-3">
            指揮者・木管・金管・打楽器の各パートで活動するメンバーを、近日公開予定です。
          </p>
        </div>
      </div>
    </section>
  );
}
