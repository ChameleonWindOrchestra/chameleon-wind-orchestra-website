export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  imageSrc: string | null;
  href: string;
};

export const placeholderNews: NewsItem[] = [
  {
    id: "placeholder-1",
    date: "—.—.—",
    category: "Coming Soon",
    title: "お知らせは現在準備中です",
    imageSrc: null,
    href: "/news",
  },
  {
    id: "placeholder-2",
    date: "—.—.—",
    category: "Coming Soon",
    title: "お知らせは現在準備中です",
    imageSrc: null,
    href: "/news",
  },
  {
    id: "placeholder-3",
    date: "—.—.—",
    category: "Coming Soon",
    title: "お知らせは現在準備中です",
    imageSrc: null,
    href: "/news",
  },
  {
    id: "placeholder-4",
    date: "—.—.—",
    category: "Coming Soon",
    title: "お知らせは現在準備中です",
    imageSrc: null,
    href: "/news",
  },
  {
    id: "placeholder-5",
    date: "—.—.—",
    category: "Coming Soon",
    title: "お知らせは現在準備中です",
    imageSrc: null,
    href: "/news",
  },
  {
    id: "placeholder-6",
    date: "—.—.—",
    category: "Coming Soon",
    title: "お知らせは現在準備中です",
    imageSrc: null,
    href: "/news",
  },
];

export function getLatestNews(n: number): NewsItem[] {
  return placeholderNews.slice(0, n);
}
