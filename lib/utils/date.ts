const TIME_ZONE = "Asia/Tokyo";

function partsToMap(
  parts: Intl.DateTimeFormatPart[],
): Record<string, string> {
  return Object.fromEntries(parts.map((p) => [p.type, p.value]));
}

export function formatJapaneseDate(iso: string): string {
  const parts = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    timeZone: TIME_ZONE,
  }).formatToParts(new Date(iso));
  const map = partsToMap(parts);
  return `${map.year}.${map.month}.${map.day} (${map.weekday})`;
}

export function formatTime(iso: string): string {
  return new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: TIME_ZONE,
  }).format(new Date(iso));
}

export function isPast(iso: string, reference: Date = new Date()): boolean {
  return new Date(iso).getTime() < reference.getTime();
}
