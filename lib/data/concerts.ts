export type ConcertProgramSection = {
  title: string;
  songs: string[];
};

export type ConcertImage = {
  url: string;
  width: number;
  height: number;
};

export type Concert = {
  id: string;
  title: string;
  subtitle?: string;
  openAt: string | null;
  startAt: string;
  place: string;
  placeUrl?: string;
  mapUrl?: string;
  fee?: number;
  note?: string;
  image?: ConcertImage;
  programs?: ConcertProgramSection[];
  isFeaturedOverride?: boolean;
};

const FLYER_1ST: ConcertImage = {
  url: "/assets/flyer-1st.png",
  width: 1080,
  height: 1528,
};

export const concerts: Concert[] = [
  {
    id: "1st-regular",
    title: "第1回\n定期演奏会",
    subtitle: "ユニバーサル・スタジオ・ジャパンの音楽",
    openAt: "2026-06-20T13:30:00+09:00",
    startAt: "2026-06-20T14:00:00+09:00",
    place: "池田市民文化会館 アゼリアホール 大ホール",
    placeUrl: "https://www.azaleahall.jp/",
    mapUrl: "https://www.google.com/maps?q=池田市民文化会館+アゼリアホール",
    fee: 0,
    note: "入場無料・整理券は不要です。当日直接お越しください。",
    image: FLYER_1ST,
    programs: [
      { title: "第1部", songs: ["Coming Soon"] },
      { title: "第2部", songs: ["Coming Soon"] },
    ],
  },
  {
    id: "past-spring-mini-2026",
    title: "春のミニコンサート",
    openAt: null,
    startAt: "2026-01-18T14:00:00+09:00",
    place: "池田市民会館",
  },
  {
    id: "past-founding",
    title: "結成記念演奏会",
    openAt: null,
    startAt: "2025-10-05T14:00:00+09:00",
    place: "池田市文化交流センター",
  },
];

export function getFeaturedConcert(): Concert | undefined {
  const override = concerts.find((c) => c.isFeaturedOverride);
  if (override) return override;
  const now = Date.now();
  const upcoming = concerts
    .filter((c) => new Date(c.startAt).getTime() >= now)
    .sort(
      (a, b) =>
        new Date(a.startAt).getTime() - new Date(b.startAt).getTime(),
    );
  return upcoming[0];
}

export function getPastConcerts(): Concert[] {
  const now = Date.now();
  return concerts
    .filter((c) => new Date(c.startAt).getTime() < now)
    .sort(
      (a, b) =>
        new Date(b.startAt).getTime() - new Date(a.startAt).getTime(),
    );
}
