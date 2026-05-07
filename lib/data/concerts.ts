export type ConcertInfoRow = {
  label: string;
  value: string;
};

export type Concert = {
  id: string;
  numberLabel: string;
  title: string;
  programTitle: string;
  isFeatured: boolean;
  isPast: boolean;
  rows: ConcertInfoRow[];
  flyer: {
    src: string;
    alt: string;
  };
  detailHref: string;
};

export const concerts: Concert[] = [
  {
    id: "1st-regular",
    numberLabel: "1st Regular Concert",
    title: "第1回\n定期演奏会",
    programTitle: "ユニバーサル・スタジオ・ジャパンの音楽",
    isFeatured: true,
    isPast: false,
    rows: [
      { label: "日時", value: "2026.06.20 (土)" },
      { label: "時間", value: "13:30 開場 / 14:00 開演" },
      { label: "会場", value: "池田市民文化会館 アゼリアホール" },
      { label: "入場料", value: "入場無料" },
    ],
    flyer: {
      src: "/assets/flyer-1st.png",
      alt: "第1回定期演奏会フライヤー",
    },
    detailHref: "/concerts",
  },
];

export function getFeaturedConcert(): Concert | undefined {
  return concerts.find((c) => c.isFeatured && !c.isPast);
}
