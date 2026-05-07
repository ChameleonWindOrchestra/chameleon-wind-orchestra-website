type Props = {
  en: string;
  jp: string;
  lead?: string;
};

export function PageIntro({ en, jp, lead }: Props) {
  return (
    <section className="px-6 pt-20 pb-16 md:px-20 md:pt-30 md:pb-20 border-b border-line">
      <div className="max-w-[1280px] mx-auto">
        <div className="font-eng text-[12px] sm:text-[14px] text-accent uppercase mb-3 md:mb-4 tracking-[0.22em]">
          {en}
        </div>
        <h1 className="font-serif text-[clamp(40px,8vw,64px)] m-0 font-medium leading-[1.3] md:leading-[1.4] text-ink">
          {jp}
        </h1>
        {lead && (
          <p className="text-[14px] md:text-[15px] text-ink-2 leading-[2] mt-7 md:mt-9 max-w-[640px]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
