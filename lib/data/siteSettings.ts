import type { SnsKind } from "@/components/ui/SnsIcon";

export type SnsLink = {
  kind: SnsKind;
  name: string;
  handle: string;
  description: string;
  href: string;
};

export type YoutubeLatest = {
  embedUrl: string | null;
  title: string;
  publishedAt: string;
};

export type SiteSettings = {
  youtubeLatest: YoutubeLatest;
  snsLinks: SnsLink[];
};

export const siteSettings: SiteSettings = {
  youtubeLatest: {
    embedUrl: null,
    title: "第1回定期演奏会 リハーサル風景",
    publishedAt: "2026.04.12",
  },
  snsLinks: [
    {
      kind: "x",
      name: "X (Twitter)",
      handle: "@chameleon_wind",
      description: "日々の練習・お知らせ",
      href: "#",
    },
    {
      kind: "instagram",
      name: "Instagram",
      handle: "@chameleon_wind_orchestra",
      description: "写真・楽屋の様子",
      href: "#",
    },
    {
      kind: "youtube",
      name: "YouTube",
      handle: "Chameleon Wind Orchestra",
      description: "演奏動画・リハーサル",
      href: "#",
    },
  ],
};

export function getSiteSettings(): SiteSettings {
  return siteSettings;
}
