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
  startAt?: string | null;
  isFeaturedOverride?: boolean;
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
    // startAt 未入力の公演(手動フラグ経由でのみ選ばれ得る)は openAt を日時として扱う
    startAt: cms.startAt ?? cms.openAt ?? cms.publishedAt,
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

// 公演の実効日時: startAt と openAt のうち大きい(遅い)方。どちらも未入力なら null。
function effectiveAt(cms: CmsConcert): number | null {
  const times = [cms.startAt, cms.openAt]
    .filter((v): v is string => Boolean(v))
    .map((v) => new Date(v).getTime())
    .filter((t) => !Number.isNaN(t));
  return times.length > 0 ? Math.max(...times) : null;
}

// isFeaturedOverride が付いた公演を最優先で選ぶ。
// 複数ある場合は実効日時が最も新しいもの。日時が全く入っていないものは対象外。
// microCMS 側にフィールドが無い等でクエリが失敗した場合は undefined(自動選定へフォールバック)。
async function getOverrideConcert(): Promise<FeaturedConcert | undefined> {
  const client = getMicroCmsClient();
  try {
    const res = await client.getList<CmsConcert>({
      endpoint: ENDPOINT,
      queries: {
        filters: "isFeaturedOverride[equals]true",
        limit: 100,
      },
    });
    const candidates = res.contents
      .map((cms) => ({ cms, at: effectiveAt(cms) }))
      .filter((c): c is { cms: CmsConcert; at: number } => c.at !== null)
      .sort((a, b) => b.at - a.at);
    if (candidates.length === 0) return undefined;
    const { cms, at } = candidates[0];
    return { ...mapCmsToConcert(cms), isUpcoming: at > Date.now() };
  } catch {
    return undefined;
  }
}

// TOP に出す公演: 手動フラグ(isFeaturedOverride)があればそれを最優先。
// なければ未来の公演のうち最も近いもの、それも無ければ直近に終わった公演。
export async function getFeaturedConcert(): Promise<
  FeaturedConcert | undefined
> {
  const override = await getOverrideConcert();
  if (override) return override;

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

// 詳細ページの静的生成用。日付での絞り込みはせず全公演を返す。
export async function getAllConcerts(): Promise<Concert[]> {
  const client = getMicroCmsClient();
  const res = await client.getList<CmsConcert>({
    endpoint: ENDPOINT,
    queries: { limit: 100 },
  });
  return res.contents.map(mapCmsToConcert);
}

export async function getConcertById(id: string): Promise<Concert | null> {
  const client = getMicroCmsClient();
  try {
    const cms = await client.getListDetail<CmsConcert>({
      endpoint: ENDPOINT,
      contentId: id,
    });
    return mapCmsToConcert(cms);
  } catch {
    // 存在しない ID(404)は呼び出し側で notFound() にする
    return null;
  }
}
