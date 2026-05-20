import Image from "next/image";

export function AboutUsSection() {
  return (
    <section className="bg-bg pt-16 pb-20 px-6 md:pt-22 md:pb-24 md:px-20 border-b border-line">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-start">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="font-eng text-[14px] text-accent uppercase tracking-[0.22em] pt-2">
            — About us
          </div>
          <Image
            src="/assets/logo_center.svg"
            alt="カメレオン吹奏楽団 ロゴ"
            width={284}
            height={284}
            unoptimized
            className="w-full max-w-[200px] h-auto md:max-w-[240px]"
          />
        </div>
        <div className="md:self-center">
          <p className="font-serif italic text-[18px] md:text-[20px] text-ink leading-[1.7] tracking-[0.04em] font-medium m-0 mb-7">
            ―吹奏楽の可能性を感動体験に―
          </p>
          <p className="text-[15px] text-ink-2 leading-[2.1] m-0">
            カメレオン吹奏楽団は、舞台芸術としての吹奏楽を追求する大阪の楽団です。毎回異なるテーマに合わせて色を変え、心揺さぶる演奏をお届けします。
          </p>
        </div>
      </div>
    </section>
  );
}
