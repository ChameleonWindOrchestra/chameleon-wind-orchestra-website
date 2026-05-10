import { HeroSlideshow } from "./HeroSlideshow";

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden h-[min(80vh,720px)] min-h-[480px]">
        <HeroSlideshow />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(31,26,20,0.65) 0%, rgba(31,26,20,0.35) 45%, rgba(31,26,20,0) 70%)",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-24 pointer-events-none">
          <div className="max-w-[560px] text-bg-card">
            <div className="font-mono text-[10px] sm:text-[11px] text-accent-soft tracking-[0.22em]">
              CHAMELEON WIND ORCHESTRA · EST. 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
