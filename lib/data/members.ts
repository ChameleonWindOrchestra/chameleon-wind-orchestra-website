export type MemberPart = "Conductor" | "Woodwind" | "Brass" | "Percussion";

export type Member = {
  id: string;
  part: MemberPart;
  name: string;
  kana: string;
  role?: string;
  portraitSrc: string | null;
};

export const placeholderMembers: Member[] = [
  {
    id: "placeholder-conductor",
    part: "Conductor",
    name: "Coming Soon",
    kana: "近日公開",
    portraitSrc: null,
  },
  {
    id: "placeholder-woodwind",
    part: "Woodwind",
    name: "Coming Soon",
    kana: "近日公開",
    portraitSrc: null,
  },
  {
    id: "placeholder-brass",
    part: "Brass",
    name: "Coming Soon",
    kana: "近日公開",
    portraitSrc: null,
  },
  {
    id: "placeholder-percussion",
    part: "Percussion",
    name: "Coming Soon",
    kana: "近日公開",
    portraitSrc: null,
  },
];

export function getPreviewMembers(n: number): Member[] {
  return placeholderMembers.slice(0, n);
}

export function getAllMembers(): Member[] {
  return placeholderMembers;
}
