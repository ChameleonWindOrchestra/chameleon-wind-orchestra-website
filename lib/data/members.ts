import { getMicroCmsClient, type MicroCmsImage } from "@/lib/microcms";

export type MemberRole = "団長" | "指揮者" | "メンバー";

export type Member = {
  id: string;
  name: string;
  kana?: string;
  role: MemberRole;
  instrument?: string;
  image?: MicroCmsImage;
};

const ROLE_ORDER: readonly MemberRole[] = ["団長", "指揮者", "メンバー"];

type CmsMember = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  kana?: string;
  role: string[];
  instrument?: string;
  image?: MicroCmsImage;
};

const ENDPOINT = "members";

function pickPrimaryRole(roles: string[] | undefined): MemberRole {
  if (!roles) return "メンバー";
  for (const candidate of ROLE_ORDER) {
    if (roles.includes(candidate)) return candidate;
  }
  return "メンバー";
}

function mapCmsToMember(cms: CmsMember): Member {
  return {
    id: cms.id,
    name: cms.name,
    kana: cms.kana,
    role: pickPrimaryRole(cms.role),
    instrument: cms.instrument,
    image: cms.image,
  };
}

function sortByRole(members: Member[]): Member[] {
  return [...members].sort(
    (a, b) => ROLE_ORDER.indexOf(a.role) - ROLE_ORDER.indexOf(b.role),
  );
}

export async function getFeaturedMembers(): Promise<Member[]> {
  const client = getMicroCmsClient();
  const res = await client.getList<CmsMember>({
    endpoint: ENDPOINT,
    queries: {
      filters: "role[contains]団長[or]role[contains]指揮者",
      limit: 10,
    },
  });
  return sortByRole(res.contents.map(mapCmsToMember));
}

export async function getAllMembers(): Promise<Member[]> {
  const client = getMicroCmsClient();
  const res = await client.getList<CmsMember>({
    endpoint: ENDPOINT,
    queries: { limit: 100 },
  });
  return sortByRole(res.contents.map(mapCmsToMember));
}
