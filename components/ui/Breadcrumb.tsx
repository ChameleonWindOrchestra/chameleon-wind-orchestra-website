import Link from "next/link";
import { Fragment } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: Props) {
  return (
    <nav
      aria-label="パンくずリスト"
      className="flex items-center gap-3 text-[11px] text-ink-mute tracking-[0.1em]"
    >
      {items.map((it, i) => (
        <Fragment key={`${it.label}-${i}`}>
          {it.href ? (
            <Link
              href={it.href}
              className="hover:text-ink transition-colors"
            >
              {it.label}
            </Link>
          ) : (
            <span className="text-ink">{it.label}</span>
          )}
          {i < items.length - 1 && (
            <span className="font-eng" aria-hidden="true">
              /
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
