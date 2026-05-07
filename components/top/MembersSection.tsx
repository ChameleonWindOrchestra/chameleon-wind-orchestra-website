import Image from "next/image";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { getPreviewMembers } from "@/lib/data/members";

export function MembersSection() {
  const items = getPreviewMembers(4);

  return (
    <section className="bg-bg-soft px-8 py-24 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionHeading num="— 04" en="Members" jp="団員紹介" />
          <TextLink href="/members">Members 一覧</TextLink>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((m) => (
            <article
              key={m.id}
              className="border border-line bg-bg-card"
            >
              {m.portraitSrc ? (
                <div className="relative aspect-[4/5]">
                  <Image
                    src={m.portraitSrc}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <Placeholder ratio="4/5" label="portrait" />
              )}

              <div className="px-6 pb-6 pt-5">
                <div className="font-eng mb-2.5 text-[11px] uppercase tracking-[0.18em] text-accent">
                  {m.part}
                </div>
                <div className="font-serif text-[15px] font-medium leading-[1.5] text-ink">
                  {m.name}
                </div>
                <div className="font-mono mt-1 text-[10px] text-ink-mute">
                  {m.kana}
                </div>
                {m.role && (
                  <div className="mt-2 text-[11px] text-ink-3">{m.role}</div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
