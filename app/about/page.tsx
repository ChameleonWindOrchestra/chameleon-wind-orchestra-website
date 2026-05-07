import { AboutConcept } from "@/components/about/AboutConcept";
import { AboutHistory } from "@/components/about/AboutHistory";
import { AboutStats } from "@/components/about/AboutStats";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata = {
  title: "私たちについて | カメレオン吹奏楽団",
  description:
    "2025年秋、池田で結成。指揮者1名、団員約30名。「カメレオン」のように、曲ごとに音色を変えながら、聴いてくださる方の心に寄り添う演奏を目指しています。",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        en="About"
        jp="私たちについて"
        lead="2025年秋、池田で結成。指揮者1名、団員約30名。「カメレオン」のように、曲ごとに音色を変えながら、聴いてくださる方の心に寄り添う演奏を目指しています。"
      />

      <section className="px-8 py-24 md:px-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px]">
          <AboutConcept />
          <AboutStats />
          <AboutHistory />
        </div>
      </section>
    </>
  );
}
