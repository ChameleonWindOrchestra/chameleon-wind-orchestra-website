import { HeroSection } from "@/components/top/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="px-8 py-32 max-w-[1280px] mx-auto text-center">
        <div className="font-eng text-[14px] text-accent uppercase tracking-[0.22em] mb-5">
          — Coming Soon
        </div>
        <p className="text-sm text-ink-3 leading-loose max-w-md mx-auto">
          以降のセクション（Concept / 演奏会 / SNS / お知らせ / 団員紹介 / Contact）は
          <br />
          T-02 〜 T-07 で順次実装予定です。
        </p>
        <p className="font-mono text-[10px] text-ink-mute uppercase tracking-[0.18em] mt-12">
          chameleon wind orchestra · est. 2025
        </p>
      </section>
    </>
  );
}
