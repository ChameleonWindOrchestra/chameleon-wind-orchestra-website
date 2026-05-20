import { HeroSlideshow } from "./HeroSlideshow";
import { getHeroImages } from "@/lib/data/heroImages";

export async function HeroSection() {
  const heroImages = await getHeroImages();

  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden bg-brown-deep aspect-[4/5] sm:aspect-[16/10] md:aspect-auto md:h-[min(80vh,720px)] md:min-h-[480px]">
        <HeroSlideshow heroImages={heroImages} />
      </div>
    </section>
  );
}
