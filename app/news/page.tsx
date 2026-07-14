import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { TextLink } from "@/components/ui/TextLink";
import { getAllNews } from "@/lib/data/news";

export const metadata = {
  title: "お知らせ",
  description:
    "カメレオン吹奏楽団からのお知らせ。演奏会情報、メディア掲載など。",
};

export default async function NewsPage() {
  const items = await getAllNews();

  return (
    <>
      <PageIntro
        en="News"
        jp="お知らせ"
        lead="演奏会のご案内、メディア掲載など、当団からのお知らせをまとめています。"
      />

      <section className="px-8 py-20 md:px-20 md:py-[100px]">
        <div className="mx-auto max-w-[960px]">
          {items.length === 0 ? (
            <div className="py-20 text-center">
              <div className="font-eng mb-6 text-[14px] uppercase tracking-[0.22em] text-accent">
                Coming Soon
              </div>
              <p className="font-serif m-0 text-[20px] leading-[1.6] text-ink md:text-[24px]">
                お知らせは現在準備中です
              </p>
              <div className="mt-12">
                <TextLink href="/">トップへ戻る</TextLink>
              </div>
            </div>
          ) : (
            <ul className="m-0 list-none border-t border-line p-0">
              {items.map((n) => (
                <li
                  key={n.id}
                  className="grid grid-cols-[80px_1fr] items-center gap-4 border-b border-line py-5 md:grid-cols-[112px_1fr] md:gap-6 md:py-6"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-bg-soft">
                    {n.imageSrc ? (
                      <Image
                        src={n.imageSrc}
                        alt={n.title}
                        fill
                        sizes="112px"
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
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-[11px] text-ink-mute md:text-[12px]">
                        {n.date}
                      </span>
                      <span className="border border-accent px-2 py-[2px] text-[9px] uppercase tracking-[0.12em] text-accent md:text-[10px]">
                        {n.category}
                      </span>
                    </div>
                    <h2 className="font-serif m-0 text-[14px] font-medium leading-[1.6] text-ink md:text-[16px]">
                      {n.title}
                    </h2>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
