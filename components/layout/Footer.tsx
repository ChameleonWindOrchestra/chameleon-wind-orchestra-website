import Image from "next/image";
import Link from "next/link";

type FooterLink = { label: string; href?: string };
type FooterColumn = { heading: string; items: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    heading: "Menu",
    items: [
      { label: "TOP", href: "/" },
      { label: "About", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Members", href: "/members" },
      { label: "Concerts", href: "/concerts" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    heading: "Concerts",
    items: [
      { label: "第1回定期演奏会", href: "/concerts" },
      { label: "出演履歴", href: "/concerts" },
      { label: "次回出演予定", href: "/concerts" },
    ],
  },
  {
    heading: "Follow",
    items: [
      { label: "X (Twitter)" },
      { label: "Instagram" },
      { label: "YouTube" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brown-deep text-[#e8ddc9] mt-30 px-6 pt-16 pb-9 md:px-20 md:pt-22">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 sm:gap-12 md:gap-16 mb-12 md:mb-18">
          <div>
            <Image
              src="/assets/logo-horizontal.png"
              alt="カメレオン吹奏楽団"
              width={237}
              height={56}
              className="h-14 w-auto mb-6 brightness-105 saturate-[0.92]"
            />
            <p className="text-[12px] text-[#e8ddc9]/70 leading-loose max-w-80 m-0">
              大阪・池田を拠点に活動するアマチュア吹奏楽団。
              <br />
              色彩豊かな音楽を、丁寧にお届けします。
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="font-eng text-[11px] text-accent-soft uppercase mb-5 tracking-[0.16em]">
                {col.heading}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-[12px] text-[#e8ddc9]/85 hover:text-[#e8ddc9] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[12px] text-[#e8ddc9]/85 cursor-default">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-[#e8ddc9]/20 mb-6" />

        <div className="flex justify-between text-[10px] text-[#e8ddc9]/50">
          <span className="font-mono tracking-wider">© 2026 Chameleon Wind Orchestra</span>
          <span className="font-mono tracking-wider">PRIVACY · TERMS</span>
        </div>
      </div>
    </footer>
  );
}
