export function formatFee(fee: number | null | undefined): string {
  if (fee == null) return "—";
  if (fee === 0) return "入場無料";
  return `${fee.toLocaleString("ja-JP")}円`;
}
