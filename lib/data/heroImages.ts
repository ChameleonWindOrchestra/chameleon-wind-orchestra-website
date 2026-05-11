import { getMicroCmsClient, type MicroCmsImage } from "@/lib/microcms";

const MAX_SLIDES = 3;
const ENDPOINT = "hero-images";

export type HeroImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

type CmsHeroImage = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  image: MicroCmsImage;
  alt: string;
  order?: number;
};

function mapCmsToHeroImage(cms: CmsHeroImage): HeroImage {
  return {
    id: cms.id,
    src: cms.image.url,
    width: cms.image.width,
    height: cms.image.height,
    alt: cms.alt,
  };
}

export async function getHeroImages(): Promise<HeroImage[]> {
  const client = getMicroCmsClient();
  const res = await client.getList<CmsHeroImage>({
    endpoint: ENDPOINT,
    queries: {
      orders: "order",
      limit: MAX_SLIDES,
    },
  });
  return res.contents.map(mapCmsToHeroImage);
}
