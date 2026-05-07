import { PageIntro } from "@/components/ui/PageIntro";
import { TextLink } from "@/components/ui/TextLink";

export const metadata = {
  title: "団員紹介 | カメレオン吹奏楽団",
  description:
    "カメレオン吹奏楽団のメンバー紹介。指揮者・木管・金管・打楽器の各パートで活動するメンバーをご紹介します。",
};

export default function MembersPage() {
  return (
    <>
      <PageIntro
        en="Members"
        jp="団員紹介"
        lead="指揮者・木管・金管・打楽器の各パートで活動するメンバーをご紹介していきます。"
      />

      <section className="px-8 py-24 md:px-20 md:py-[140px]">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="font-eng mb-6 text-[14px] uppercase tracking-[0.22em] text-accent">
            Coming Soon
          </div>
          <p className="font-serif m-0 text-[28px] leading-[1.6] text-ink md:text-[36px]">
            メンバー紹介は現在準備中です
          </p>
          <p className="mx-auto mt-8 max-w-md text-[14px] leading-[2.1] text-ink-3">
            プロフィール写真や担当パートなど、各メンバーの紹介を順次公開していきます。
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
