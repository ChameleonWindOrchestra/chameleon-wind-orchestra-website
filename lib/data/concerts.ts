export type Concert = {
  id: string;
  numberLabel?: string;
  date: string;
  open?: string;
  start?: string;
  title: string;
  subtitle?: string;
  venue: string;
  fee?: string;
  isFeatured?: boolean;
  isPast?: boolean;
  flyer?: { src: string; alt: string };
  detailHref?: string;
};

export const concerts: Concert[] = [
  {
    id: "1st-regular",
    numberLabel: "1st Regular Concert",
    date: "2026.06.20 (土)",
    open: "13:30",
    start: "14:00",
    title: "第1回\n定期演奏会",
    subtitle: "ユニバーサル・スタジオ・ジャパンの音楽",
    venue: "池田市民文化会館 アゼリアホール 大ホール",
    fee: "入場無料",
    isFeatured: true,
    isPast: false,
    flyer: { src: "/assets/flyer-1st.png", alt: "第1回定期演奏会フライヤー" },
    detailHref: "/concerts",
  },
  {
    id: "past-spring-mini-2026",
    date: "2026.01.18",
    title: "春のミニコンサート",
    venue: "池田市民会館",
    isPast: true,
  },
  {
    id: "past-founding",
    date: "2025.10.05",
    title: "結成記念演奏会",
    venue: "池田市文化交流センター",
    isPast: true,
  },
];

export function getFeaturedConcert(): Concert | undefined {
  return concerts.find((c) => c.isFeatured && !c.isPast);
}

export function getPastConcerts(): Concert[] {
  return concerts.filter((c) => c.isPast);
}
