type Props = {
  ratio?: string;
  height?: string;
  label?: string;
  className?: string;
};

const STRIPE_BG =
  "bg-[repeating-linear-gradient(135deg,_var(--bg-soft)_0_8px,_var(--line-soft)_8px_9px)]";

export function Placeholder({
  ratio = "3/2",
  height,
  label = "image",
  className = "",
}: Props) {
  const sizingStyle: React.CSSProperties = height
    ? { height }
    : { aspectRatio: ratio };
  return (
    <div
      style={sizingStyle}
      className={[
        "w-full flex items-center justify-center",
        "text-ink-mute font-mono text-[10px] tracking-[0.14em]",
        STRIPE_BG,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      [ {label} ]
    </div>
  );
}
