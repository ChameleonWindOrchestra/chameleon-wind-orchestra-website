import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
};

export function TextLink({ href, children, arrow = true, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-baseline gap-2.5",
        "border-b border-ink py-1",
        "text-[13px] text-ink tracking-[0.06em]",
        "hover:text-accent hover:border-accent transition-colors",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      {arrow && (
        <span className="font-eng" aria-hidden="true">
          →
        </span>
      )}
    </Link>
  );
}
