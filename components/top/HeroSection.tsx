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
      </div>
    </section>
  );
}
