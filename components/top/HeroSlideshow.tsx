"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Placeholder } from "@/components/ui/Placeholder";
import type { HeroImage } from "@/lib/data/heroImages";

type Slide =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "placeholder"; label: string };

const FALLBACK_SLIDES: Slide[] = [
  { kind: "placeholder", label: "trumpet · close-up" },
  { kind: "placeholder", label: "ensemble · 集合写真" },
  { kind: "placeholder", label: "rehearsal · 練習風景" },
];

const AUTO_INTERVAL_MS = 5000;
const FADE_MS = 1200;

type Props = {
  heroImages: HeroImage[];
};

export function HeroSlideshow({ heroImages }: Props) {
  const slides: Slide[] =
    heroImages.length > 0
      ? heroImages.map((h) => ({ kind: "photo", src: h.src, alt: h.alt }))
      : FALLBACK_SLIDES;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === index ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease`,
          }}
          aria-hidden={i !== index}
        >
          {s.kind === "photo" ? (
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <Placeholder height="100%" label={s.label} />
          )}
        </div>
      ))}

      <div className="absolute bottom-6 left-6 z-[2] flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`スライド ${i + 1} を表示`}
            aria-current={i === index ? "true" : undefined}
            className={[
              "h-0.5 cursor-pointer p-0 border-0 transition-all duration-300",
              i === index ? "w-8 bg-accent" : "w-2 bg-white/60",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 z-[2] font-mono text-[10px] text-white/85 tracking-[0.18em]">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}
