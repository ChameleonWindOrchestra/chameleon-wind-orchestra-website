import { HeroSlideshow } from "./HeroSlideshow";
import { getHeroImages } from "@/lib/data/heroImages";

export async function HeroSection() {
  const heroImages = await getHeroImages();

  // 1枚目の画像の縦横比に枠の高さを合わせ、画像全体が見切れず収まるようにする。
  // CMS 未連携時(プレースホルダー)は 3:2 をフォールバックとして使う。
  const first = heroImages[0];
  const aspectRatio =
    first && first.width > 0 && first.height > 0
      ? `${first.width} / ${first.height}`
      : "3 / 2";

  return (
    <section className="relative w-full">
      <div
        className="relative w-full overflow-hidden bg-brown-deep max-h-[80vh] md:max-h-[720px]"
        style={{ aspectRatio }}
      >
        <HeroSlideshow heroImages={heroImages} />
        {/* 左側の白文字を読ませるための暗幕。右へ透明に抜けて写真の色味を保つ */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/45 via-black/20 to-transparent"
        />
        <div className="pointer-events-none absolute left-6 top-1/2 z-[2] max-w-[70%] -translate-y-1/2 text-white md:left-12 md:max-w-[46%]">
          <p className="m-0 font-serif italic font-medium text-[15px] md:text-[22px] leading-[1.7] tracking-[0.04em] [text-shadow:0_1px_16px_rgba(0,0,0,0.55)]">
            ―吹奏楽の可能性を感動体験に―
          </p>
          <p className="m-0 mt-3 text-[11px] md:mt-5 md:text-[14px] leading-[1.9] md:leading-[2.1] [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
            カメレオン吹奏楽団は、舞台芸術としての吹奏楽を追求する大阪の楽団です。
            <br />
            毎回異なるテーマに合わせて色を変え、心揺さぶる演奏をお届けします。
          </p>
        </div>
      </div>
    </section>
  );
}
