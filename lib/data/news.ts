import { getMicroCmsClient, type MicroCmsImage } from "@/lib/microcms";

export type NewsCategory = "CONCERT" | "MEMBER" | "MEDIA" | "NOTICE";

export type NewsItem = {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  imageSrc: string | null;
  href: string;
};

type CmsNews = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  date: string;
  category: string[] | string;
  title: string;
  body?: string;
  // MicroCMS 側の画像フィールド名が他エンドポイント(image)と異なる可能性があるため両対応
  eyecatch?: MicroCmsImage;
  image?: MicroCmsImage;
};

const ENDPOINT = "news";

const KNOWN_CATEGORIES: readonly NewsCategory[] = [
  "CONCERT",
  "MEMBER",
  "MEDIA",
  "NOTICE",
];

function normalizeCategory(raw: string[] | string | undefined): NewsCategory {
  const candidate = Array.isArray(raw) ? raw[0] : raw;
  if (candidate && (KNOWN_CATEGORIES as readonly string[]).includes(candidate)) {
    return candidate as NewsCategory;
  }
  return "NOTICE";
}

function formatNewsDate(isoDate: string): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}

function mapCmsToNewsItem(cms: CmsNews): NewsItem {
  return {
    id: cms.id,
    date: formatNewsDate(cms.date),
    category: normalizeCategory(cms.category),
    title: cms.title,
    imageSrc: cms.eyecatch?.url ?? cms.image?.url ?? null,
    href: `/news/${cms.id}`,
  };
}

export async function getLatestNews(limit: number): Promise<NewsItem[]> {
  const client = getMicroCmsClient();
  const res = await client.getList<CmsNews>({
    endpoint: ENDPOINT,
    queries: {
      orders: "-date",
      limit,
    },
  });
  return res.contents.map(mapCmsToNewsItem);
}

export async function getAllNews(): Promise<NewsItem[]> {
  const client = getMicroCmsClient();
  const res = await client.getList<CmsNews>({
    endpoint: ENDPOINT,
    queries: {
      orders: "-date",
      limit: 100,
    },
  });
  return res.contents.map(mapCmsToNewsItem);
}
