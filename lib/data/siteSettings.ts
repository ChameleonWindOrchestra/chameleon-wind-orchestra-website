import type { SnsKind } from "@/components/ui/SnsIcon";
import { getMicroCmsClient } from "@/lib/microcms";

export type SnsLink = {
  kind: SnsKind;
  name: string;
  handle: string;
  description: string;
  href: string;
};

export type YoutubeLatest = {
  embedUrl: string | null;
};

export type SiteSettings = {
  youtubeLatest: YoutubeLatest;
  snsLinks: SnsLink[];
};

export const siteSettings: SiteSettings = {
  youtubeLatest: {
    embedUrl: null,
  },
  snsLinks: [
    {
      kind: "x",
      name: "X (Twitter)",
      handle: "@chameleon_wind",
      description: "日々の練習・お知らせ",
      href: "https://x.com/chameleon_wind",
    },
    {
      kind: "instagram",
      name: "Instagram",
      handle: "@chameleon_wind",
      description: "写真・楽屋の様子",
      href: "https://www.instagram.com/chameleon_wind/",
    },
    {
      kind: "youtube",
      name: "YouTube",
      handle: "@chameleon_wind",
      description: "演奏動画・リハーサル",
      href: "https://www.youtube.com/@chameleon_wind",
    },
  ],
};

export function getSiteSettings(): SiteSettings {
  return siteSettings;
}

// --- 注目のYouTube動画（microCMS 手動入稿） ---

// microCMS のオブジェクト形式エンドポイント。フィールド videoUrl に通常の
// 共有URL（youtu.be / watch?v= など）を貼ってもらう想定。
const YOUTUBE_ENDPOINT = "youtube";

type CmsYoutube = {
  videoUrl?: string;
};

// 各種のYouTube URL（watch / youtu.be / embed / shorts）や生IDから
// 11桁の動画IDを取り出す。取り出せなければ null。
export function extractYoutubeId(input: string | undefined | null): string | null {
  if (!input) return null;
  const value = input.trim();
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /\/embed\/([a-zA-Z0-9_-]{11})/,
    /\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const re of patterns) {
    const m = value.match(re);
    if (m) return m[1];
  }
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;
  return null;
}

// 注目動画のIDを取得。エンドポイント未作成・未入稿・URL不正はすべて null を返し、
// 呼び出し側で「Coming Soon」表示にフォールバックできるようにする。
export async function getFeaturedYoutubeId(): Promise<string | null> {
  try {
    const client = getMicroCmsClient();
    const data = await client.get<CmsYoutube>({ endpoint: YOUTUBE_ENDPOINT });
    return extractYoutubeId(data.videoUrl);
  } catch {
    return null;
  }
}
