import { SectionHeading } from "@/components/ui/SectionHeading";
import { SnsIcon } from "@/components/ui/SnsIcon";
import { getSiteSettings } from "@/lib/data/siteSettings";

export function FollowSection() {
  const { youtubeLatest, snsLinks } = getSiteSettings();

  return (
    <section className="bg-bg-soft px-8 py-24 md:px-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading num="— 02" en="SNS" jp="ソーシャルメディア" />

        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="relative w-full overflow-hidden border border-line bg-brown-deep aspect-video">
              {youtubeLatest.embedUrl ? (
                <iframe
                  src={youtubeLatest.embedUrl}
                  title="最新動画"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="#fff"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3">
              {snsLinks.map((s) => (
                <a
                  key={s.kind}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center gap-[18px] border border-line bg-bg-card px-6 py-5 text-ink no-underline transition-all duration-200 hover:translate-x-1 hover:border-accent"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink text-bg">
                    <SnsIcon kind={s.kind} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif mb-[2px] text-[14px] text-ink">
                      {s.name}
                    </div>
                    <div className="font-mono truncate text-[10px] text-ink-mute">
                      {s.handle}
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-eng text-[16px] text-accent"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
