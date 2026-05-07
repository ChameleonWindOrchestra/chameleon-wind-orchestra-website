import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutConcept() {
  return (
    <div className="mb-24 grid grid-cols-1 items-start gap-12 md:mb-[120px] md:grid-cols-[1fr_1.2fr] md:gap-24">
      <Placeholder ratio="4/5" label="ensemble" />

      <div>
        <SectionHeading
          num="— 01"
          en="Concept"
          jp="私たちが大切にしていること"
        />
        <p className="m-0 mb-8 text-[15px] leading-[2.2] text-ink-2">
          吹奏楽は、一人では成り立たない音楽です。木管・金管・打楽器、それぞれの音色が重なって、はじめて一つの景色が立ち現れます。
        </p>
        <p className="m-0 mb-8 text-[15px] leading-[2.2] text-ink-2">
          私たちは、技術の高さよりも「ひとつの音楽を、皆で作る喜び」を大切にしています。背景も世代も異なる仲間が集まり、それぞれの色を持ち寄って、毎週土曜日の練習場で混ざり合っていく。その過程そのものが、私たちの音楽です。
        </p>
        <p className="m-0 text-[15px] leading-[2.2] text-ink-2">
          聴いてくださる方の、その日その時の気分に寄り添えるように。曲ごとに、場面ごとに、自由に音色を変えていけるように——「カメレオン」と名乗りました。
        </p>
      </div>
    </div>
  );
}
