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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((m) => (
            <article key={m.id} className="border border-line bg-bg-card">
              {m.image ? (
                <div className="relative aspect-square">
                  <Image
                    src={m.image.url}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <Placeholder ratio="1/1" label="portrait" />
              )}

              <div className="px-6 pb-6 pt-5">
                <div className="font-eng mb-2.5 text-[11px] uppercase tracking-[0.18em] text-accent">
                  {m.role}
                </div>
                <div className="font-serif text-[16px] font-medium leading-[1.5] text-ink">
                  {m.name}
                </div>
                {m.kana && (
                  <div className="font-mono mt-1 text-[10px] text-ink-mute">
                    {m.kana}
                  </div>
                )}
                {m.instrument && (
                  <div className="mt-3 text-[12px] text-ink-3">
                    担当: {m.instrument}
                  </div>
                )}
              </div>
            </article>
          ))}

          <article
            aria-hidden="true"
            className="flex min-h-[280px] items-center justify-center border border-dashed border-line bg-bg px-6 py-12 sm:col-span-2 md:col-span-1"
          >
            <div className="text-center">
              <div className="font-eng mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">
                More coming soon
              </div>
              <p className="font-serif m-0 text-[14px] leading-[1.8] text-ink">
                他のメンバーも
                <br />
                順次ご紹介します
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
