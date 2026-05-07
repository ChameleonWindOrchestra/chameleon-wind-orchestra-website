"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", jp: "TOP", en: "home" },
  { href: "/about", jp: "About", en: "about" },
  { href: "/concerts", jp: "Concerts", en: "concerts" },
  { href: "/news", jp: "News", en: "news" },
  { href: "/members", jp: "Members", en: "members" },
  { href: "/#contact", jp: "Contact", en: "contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/news") return pathname.startsWith("/news");
  if (href === "/#contact") return false;
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!drawerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "bg-bg/90 backdrop-blur-md",
        "border-b border-line",
        "px-6 py-4 md:px-14 md:py-6",
        "flex items-center justify-between",
      ].join(" ")}
    >
      <Link
        href="/"
        aria-label="カメレオン吹奏楽団 トップへ"
        className="flex items-center"
      >
        <Image
          src="/assets/logo-horizontal.png"
          alt="カメレオン吹奏楽団"
          width={170}
          height={40}
          priority
          className="h-8 w-auto md:h-10"
        />
      </Link>

      <nav
        aria-label="サイト全体のナビゲーション"
        className="hidden min-[900px]:block"
      >
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

      <button
        type="button"
        aria-label={drawerOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setDrawerOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] min-[900px]:hidden"
      >
        <span
          aria-hidden="true"
          className={`block h-px w-6 bg-ink transition-transform duration-200 ${drawerOpen ? "translate-y-[6px] rotate-45" : ""}`}
        />
        <span
          aria-hidden="true"
          className={`block h-px w-6 bg-ink transition-opacity duration-200 ${drawerOpen ? "opacity-0" : ""}`}
        />
        <span
          aria-hidden="true"
          className={`block h-px w-6 bg-ink transition-transform duration-200 ${drawerOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
        />
      </button>

      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="モバイルナビゲーション"
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-[60] min-[900px]:hidden ${drawerOpen ? "" : "pointer-events-none"}`}
      >
        <div
          aria-hidden="true"
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-ink/55 transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          aria-label="モバイルナビゲーション"
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-[360px] flex-col bg-bg shadow-2xl transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-[68px] shrink-0 items-center justify-end border-b border-line px-6">
            <span className="font-eng text-[11px] uppercase tracking-[0.22em] text-ink-mute">
              Menu
            </span>
          </div>
          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-6">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setDrawerOpen(false)}
                    className={[
                      "flex items-baseline justify-between gap-4 border-b border-line py-5",
                      "text-[15px] tracking-[0.08em]",
                      active ? "text-accent" : "text-ink hover:text-accent",
                      "transition-colors",
                    ].join(" ")}
                  >
                    <span>{item.jp}</span>
                    <span
                      className={[
                        "font-eng text-[10px] uppercase tracking-[0.18em]",
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
      </div>
    </header>
  );
}
