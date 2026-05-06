type Props = {
  size?: number;
  className?: string;
};

export function ChameleonMark({ size = 28, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="15.5"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.6"
      />
      <path
        d="M7 18 Q9 15 12 15 Q14 15 15 13 Q16 11 18 11 Q22 11 23 14 Q24 17 22 18 L20 18 Q19 19 19 20 L20 22 M11 18 Q11 20 9 20 Q7 20 7 18 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="13.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
