import { getMicroCmsClient, type MicroCmsImage } from "@/lib/microcms";

export type ConcertSong = {
  title: string;
  note?: string;
};

export type ConcertProgramSection = {
  title: string;
  songs: ConcertSong[];
};

export type ConcertImage = MicroCmsImage;

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
};

type CmsSong = {
  fieldId?: string;
  title: string;
  note?: string;
};

type CmsProgramSection = {
  fieldId?: string;
  title: string;
  songs?: CmsSong[];
};

type CmsConcert = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  subTitle?: string;
  openAt?: string | null;
  startAt: string;
  place: string;
  placeUrl?: string;
  mapUrl?: string;
  fee?: number;
  note?: string;
  image?: MicroCmsImage;
  programs?: CmsProgramSection[];
};

const ENDPOINT = "concerts";

function mapCmsToConcert(cms: CmsConcert): Concert {
  return {
    id: cms.id,
    title: cms.title,
    subtitle: cms.subTitle,
    openAt: cms.openAt ?? null,
    startAt: cms.startAt,
    place: cms.place,
    placeUrl: cms.placeUrl,
    mapUrl: cms.mapUrl,
    fee: cms.fee,
    note: cms.note,
    image: cms.image,
    programs: cms.programs?.map((section) => ({
      title: section.title,
      songs: (section.songs ?? []).map((song) => ({
        title: song.title,
        note: song.note,
      })),
    })),
  };
}

export type FeaturedConcert = Concert & { isUpcoming: boolean };

// TOP に出す公演: 未来の公演があれば最も近いもの、なければ直近に終わった公演。
// startAt が未入力のコンテンツはどの条件にも一致しないため表示されない
// (microCMS 側で startAt を必須項目にしておくこと)。
export async function getFeaturedConcert(): Promise<
  FeaturedConcert | undefined
> {
  const client = getMicroCmsClient();
  const nowIso = new Date().toISOString();

  const upcomingRes = await client.getList<CmsConcert>({
    endpoint: ENDPOINT,
    queries: {
      filters: `startAt[greater_than]${nowIso}`,
      orders: "startAt",
      limit: 1,
    },
  });
  if (upcomingRes.contents.length > 0) {
    return { ...mapCmsToConcert(upcomingRes.contents[0]), isUpcoming: true };
  }

  const latestPastRes = await client.getList<CmsConcert>({
    endpoint: ENDPOINT,
    queries: {
      filters: `startAt[less_than]${nowIso}`,
      orders: "-startAt",
      limit: 1,
    },
  });
  if (latestPastRes.contents.length > 0) {
    return {
      ...mapCmsToConcert(latestPastRes.contents[0]),
      isUpcoming: false,
    };
  }

  return undefined;
}

export async function getPastConcerts(): Promise<Concert[]> {
  const client = getMicroCmsClient();
  const nowIso = new Date().toISOString();
  const res = await client.getList<CmsConcert>({
    endpoint: ENDPOINT,
    queries: {
      filters: `startAt[less_than]${nowIso}`,
      orders: "-startAt",
      limit: 100,
    },
  });
  return res.contents.map(mapCmsToConcert);
}
