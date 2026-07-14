import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TextLink } from "@/components/ui/TextLink";
import { getAllNews, getNewsById } from "@/lib/data/news";

type Params = { id: string };

// 全お知らせ記事をビルド時に静的生成する（既存ページと同じく静的出力）。
// ここに含まれない ID は dynamicParams のデフォルト(true)によりリクエスト時に生成される。
export async function generateStaticParams(): Promise<Params[]> {
  const items = await getAllNews();
  return items.map((n) => ({ id: n.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = await getNewsById(id);
  if (!item) return { title: "お知らせ" };
  return {
    title: item.title,
    description: `${item.date} ${item.title}`,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const item = await getNewsById(id);
  if (!item) notFound();

  return (
    <article className="px-8 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[760px]">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "お知らせ", href: "/news" },
            { label: item.title },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[12px] text-ink-mute">
            {item.date}
          </span>
          <span className="border border-accent px-2 py-[2px] text-[10px] uppercase tracking-[0.12em] text-accent">
            {item.category}
          </span>
        </div>

        <h1 className="font-serif mt-4 text-[28px] font-medium leading-[1.4] text-ink md:text-[40px]">
          {item.title}
        </h1>

        {item.imageSrc && (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden bg-bg-soft">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              sizes="(max-width: 760px) 100vw, 760px"
              priority
              className="object-cover"
            />
          </div>
        )}

        {item.body ? (
          <div
            className="mt-10 text-[15px] leading-[1.9] text-ink-2 [&_a]:text-accent [&_a]:underline [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:text-ink-3 [&_h2]:font-serif [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:text-ink [&_h3]:font-serif [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[18px] [&_h3]:font-medium [&_h3]:text-ink [&_img]:my-6 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded [&_li]:my-1 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-5 [&_strong]:font-medium [&_strong]:text-ink [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6"
            // microCMS リッチエディタが返す本文 HTML を描画する
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        ) : (
          <p className="mt-10 text-[15px] leading-[1.9] text-ink-3">
            本文はありません。
          </p>
        )}

        <div className="mt-16 border-t border-line pt-8">
          <TextLink href="/news" arrow={false}>
            ← お知らせ一覧へ戻る
          </TextLink>
        </div>
      </div>
    </article>
  );
}
