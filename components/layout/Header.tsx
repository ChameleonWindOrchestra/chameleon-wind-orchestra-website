"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/about", jp: "About", en: "about" },
  { href: "/concerts", jp: "Concerts", en: "concerts" },
  { href: "/news", jp: "News", en: "news" },
  { href: "/members", jp: "Members", en: "members" },
  { href: "/#contact", jp: "Contact", en: "contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/news") return pathname.startsWith("/news");
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "bg-bg/90 backdrop-blur-md",
        "border-b border-line",
        "px-14 py-6",
        "flex items-center justify-between",
      ].join(" ")}
    >
      <Link href="/" aria-label="カメレオン吹奏楽団 トップへ" className="flex items-center">
        <Image
          src="/assets/logo-horizontal.png"
          alt="カメレオン吹奏楽団"
          width={170}
          height={40}
          priority
          className="h-10 w-auto"
        />
      </Link>

      <nav aria-label="サイト全体のナビゲーション">
        <ul className="flex items-center gap-9">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "flex flex-col items-center gap-1",
                    "text-[13px] tracking-[0.1em]",
                    active ? "text-accent" : "text-ink-2 hover:text-ink",
                    "transition-colors",
                  ].join(" ")}
                >
                  <span>{item.jp}</span>
                  <span
                    className={[
                      "font-eng text-[9px] uppercase",
                      active ? "text-accent" : "text-ink-mute",
                    ].join(" ")}
                  >
                    {item.en}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
