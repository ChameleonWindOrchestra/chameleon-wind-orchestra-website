import { PageIntro } from "@/components/ui/PageIntro";
import { TextLink } from "@/components/ui/TextLink";

export const metadata = {
  title: "お知らせ | カメレオン吹奏楽団",
  description:
    "カメレオン吹奏楽団からのお知らせ。演奏会情報、メンバー募集、メディア掲載など。",
};

export default function NewsPage() {
  return (
    <>
      <PageIntro
        en="News"
        jp="お知らせ"
        lead="演奏会のご案内、メンバー募集、メディア掲載など、当団からのお知らせをまとめていきます。"
      />

      <section className="px-8 py-24 md:px-20 md:py-[140px]">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="font-eng mb-6 text-[14px] uppercase tracking-[0.22em] text-accent">
            Coming Soon
          </div>
          <p className="font-serif m-0 text-[28px] leading-[1.6] text-ink md:text-[36px]">
            お知らせは現在準備中です
          </p>
          <p className="mx-auto mt-8 max-w-md text-[14px] leading-[2.1] text-ink-3">
            順次、演奏会情報や活動報告などを掲載していきます。
            <br />
            もうしばらくお待ちください。
          </p>
          <div className="mt-12">
            <TextLink href="/">トップへ戻る</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
