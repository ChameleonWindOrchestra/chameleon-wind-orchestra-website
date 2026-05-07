import { TextLink } from "@/components/ui/TextLink";

export function ConceptSection() {
  return (
    <section className="bg-bg pt-22 pb-24 px-20 border-b border-line">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-20 items-start">
        <div className="font-eng text-[14px] text-accent uppercase tracking-[0.22em] pt-2">
          — Concept
        </div>
        <div>
          <p className="font-serif text-[17px] text-ink leading-[2.1] tracking-[0.04em] font-medium m-0 mb-6">
            大阪・池田を拠点に活動する、私たちカメレオン吹奏楽団。
            <br />
            ひとりひとりの音色が重なり合い、ステージごとに新しい景色を描きます。
          </p>
          <p className="text-[14px] text-ink-3 leading-[2.1] m-0 mb-9">
            「カメレオン」のように、曲ごと・場面ごとに音色を変えながら、聴いてくださる方の心に寄り添う演奏を目指しています。
          </p>
          <TextLink href="/about">私たちについて</TextLink>
        </div>
      </div>
    </section>
  );
}
