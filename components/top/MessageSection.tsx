import { Placeholder } from "@/components/ui/Placeholder";

export function MessageSection() {
  return (
    <section className="bg-bg-soft px-6 py-16 md:px-20 md:py-[100px] border-b border-line">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-[220px_1fr] md:gap-20">
        <div className="mx-auto w-44 md:mx-0 md:w-[220px]">
          <Placeholder
            ratio="1/1"
            label="conductor"
            className="rounded-full"
          />
        </div>

        <div>
          <div className="font-eng mb-3 text-[12px] uppercase tracking-[0.22em] text-accent">
            — Message
          </div>
          <h2 className="font-serif m-0 text-[26px] font-medium leading-[1.4] text-ink md:text-[34px]">
            団長からの挨拶
          </h2>

          <p className="mt-7 text-[14px] leading-[2.1] text-ink-2 md:text-[15px]">
            ご挨拶文は現在準備中です。
            <br />
            私たちがどのような想いで音を重ねているか、近日この場所からお伝えします。
          </p>

          <div className="mt-8 flex items-baseline gap-3 border-t border-line pt-5">
            <span className="font-eng text-[11px] uppercase tracking-[0.18em] text-ink-mute">
              Conductor
            </span>
            <span className="font-serif text-[15px] text-ink">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
