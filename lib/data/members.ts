export type MemberPart = "Conductor" | "Woodwind" | "Brass" | "Percussion";

export type Member = {
  id: string;
  part: MemberPart;
  name: string;
  kana?: string;
  role?: string;
  instrument?: string;
  portraitSrc: string | null;
  order?: number;
};

export const placeholderMembers: Member[] = [
  {
    id: "placeholder-director",
    role: "団長",
    name: "Coming Soon",
    part: "Brass",
    instrument: "Coming Soon",
    portraitSrc: null,
    order: 1,
  },
  {
    id: "placeholder-conductor",
    role: "指揮者",
    name: "Coming Soon",
    part: "Conductor",
    instrument: "—",
    portraitSrc: null,
    order: 2,
  },
];

export function getFeaturedMembers(): Member[] {
  return [...placeholderMembers].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999),
  );
}

export function getAllMembers(): Member[] {
  return [...placeholderMembers].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999),
  );
}
