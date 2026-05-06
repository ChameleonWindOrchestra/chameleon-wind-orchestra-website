"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Placeholder } from "@/components/ui/Placeholder";

type Slide =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "placeholder"; label: string };

// Slide sources. 写真が用意できたら kind: "placeholder" を
// kind: "photo" + src/alt に差し替えるだけで切り替え可能。
const SLIDES: Slide[] = [
  { kind: "placeholder", label: "trumpet · close-up" },
  { kind: "placeholder", label: "ensemble · 集合写真" },
  { kind: "placeholder", label: "rehearsal · 練習風景" },
];

const AUTO_INTERVAL_MS = 5000;
const FADE_MS = 1200;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % SLIDES.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {SLIDES.map((s, i) => (
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
        {SLIDES.map((_, i) => (
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
        {String(SLIDES.length).padStart(2, "0")}
      </div>
    </div>
  );
}
