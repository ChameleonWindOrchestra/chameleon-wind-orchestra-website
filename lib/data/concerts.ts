export type ConcertStatus = "受付中" | "準備中" | "調整中" | "終了";

export type Concert = {
  id: string;
  no?: string;
  numberLabel?: string;
  date: string;
  dateShort?: string;
  open?: string;
  start?: string;
  title: string;
  subtitle?: string;
  venue: string;
  fee?: string;
  status?: ConcertStatus;
  isFeatured?: boolean;
  isPast?: boolean;
  flyer?: { src: string; alt: string };
  detailHref?: string;
  applyHref?: string;
};

export const concerts: Concert[] = [
  {
    id: "1st-regular",
    no: "01",
    numberLabel: "1st Regular Concert",
    date: "2026.06.20 (土)",
    dateShort: "2026.06.20 SAT",
    open: "13:30",
    start: "14:00",
    title: "第1回\n定期演奏会",
    subtitle: "ユニバーサル・スタジオ・ジャパンの音楽",
    venue: "池田市民文化会館 アゼリアホール 大ホール",
    fee: "入場無料（整理券制）",
    status: "受付中",
    isFeatured: true,
    isPast: false,
    flyer: { src: "/assets/flyer-1st.png", alt: "第1回定期演奏会フライヤー" },
    detailHref: "/concerts",
    applyHref: "/#contact",
  },
  {
    id: "autumn-charity",
    no: "02",
    date: "2026.10.12 (日)",
    dateShort: "2026.10.12 SUN",
    open: "13:30",
    start: "14:00",
    title: "秋のチャリティーコンサート",
    subtitle: "映画音楽特集",
    venue: "豊中市立文化芸術センター",
    fee: "一般 1,500 円",
    status: "準備中",
    isFeatured: false,
    isPast: false,
  },
  {
    id: "christmas-family",
    no: "03",
    date: "2026.12.23 (水・祝)",
    dateShort: "2026.12.23 WED",
    open: "18:30",
    start: "19:00",
    title: "クリスマス・ファミリーコンサート",
    subtitle: "親子で楽しむ吹奏楽",
    venue: "池田市民文化会館 中ホール",
    fee: "一般 1,000 円 / 高校生以下無料",
    status: "準備中",
    isFeatured: false,
    isPast: false,
  },
  {
    id: "2nd-regular",
    no: "04",
    date: "2027.04.05 (日)",
    dateShort: "2027.04.05 SUN",
    open: "—",
    start: "—",
    title: "第2回 定期演奏会",
    subtitle: "プログラム調整中",
    venue: "未定",
    fee: "未定",
    status: "調整中",
    isFeatured: false,
    isPast: false,
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

export function getUpcomingConcerts(): Concert[] {
  return concerts.filter((c) => !c.isPast);
}

export function getPastConcerts(): Concert[] {
  return concerts.filter((c) => c.isPast);
}
