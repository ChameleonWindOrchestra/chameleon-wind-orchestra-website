import { FeaturedHero } from "@/components/concerts/FeaturedHero";
import { PastList } from "@/components/concerts/PastList";
import { PageIntro } from "@/components/ui/PageIntro";
import {
  getFeaturedConcert,
  getPastConcerts,
} from "@/lib/data/concerts";

export const metadata = {
  title: "演奏会情報",
  description:
    "カメレオン吹奏楽団の次回公演および過去の出演履歴をご案内しています。",
};

export default async function ConcertsPage() {
  const [featured, past] = await Promise.all([
    getFeaturedConcert(),
    getPastConcerts(),
  ]);

  return (
    <>
      <PageIntro en="Concerts" jp="演奏会情報" />

      <section className="px-8 pt-20 md:px-20 md:pt-[80px]">
        <div className="mx-auto max-w-[1280px]">
          {featured && <FeaturedHero concert={featured} />}
          <PastList concerts={past} />
        </div>
      </section>
    </>
  );
}
