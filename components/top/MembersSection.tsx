import Image from "next/image";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { getFeaturedMembers } from "@/lib/data/members";

export async function MembersSection() {
  const items = await getFeaturedMembers();

  return (
    <section className="bg-bg-soft px-8 py-24 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionHeading num="— 04" en="Members" jp="団員紹介" />
          <TextLink href="/members">Members 一覧</TextLink>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {items.map((m) => (
            <article key={m.id} className="border border-line bg-bg-card">
              {m.image ? (
                <div className="relative aspect-square">
                  <Image
                    src={m.image.url}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <Placeholder ratio="1/1" label="portrait" />
              )}

              <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5 lg:px-3 lg:pb-4 lg:pt-3">
                <div className="font-eng mb-2 text-[10px] uppercase tracking-[0.18em] text-accent sm:mb-2.5 sm:text-[11px] lg:mb-1.5 lg:text-[9px]">
                  {m.role}
                </div>
                <div className="font-serif text-[14px] font-medium leading-[1.5] text-ink sm:text-[16px] lg:text-[13px]">
                  {m.name}
                </div>
                {m.kana && (
                  <div className="font-mono mt-1 text-[9px] text-ink-mute sm:text-[10px] lg:text-[8px]">
                    {m.kana}
                  </div>
                )}
                {m.instrument && (
                  <div className="mt-2 text-[11px] text-ink-3 sm:mt-3 sm:text-[12px] lg:mt-2 lg:text-[10px]">
                    担当: {m.instrument}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
