import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  children: React.ReactNode;
  className?: string;
};

type AsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type AsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export type ButtonProps = AsLink | AsButton;

const SIZE_CLASS: Record<Size, string> = {
  sm: "py-[10px] px-[20px] text-[12px]",
  md: "py-[14px] px-[28px] text-[13px]",
  lg: "py-[18px] px-[36px] text-[14px]",
};

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    "bg-accent text-white border border-accent hover:bg-accent-deep hover:border-accent-deep",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-bg",
  ghost:
    "bg-transparent text-accent border border-transparent hover:text-accent-deep",
};

const BASE_CLASS =
  "inline-flex items-center gap-3 tracking-[0.12em] font-medium cursor-pointer transition-colors duration-200";

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, children, className = "" } = props;
  const cls = [BASE_CLASS, SIZE_CLASS[size], VARIANT_CLASS[variant], className]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {children}
      {icon && (
        <span className="font-eng text-[14px]" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <Link href={props.href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={cls}>
      {inner}
    </button>
  );
}
