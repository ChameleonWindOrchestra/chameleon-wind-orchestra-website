// Design tokens for Chameleon Wind Orchestra
// 3 palette options to compare. Type & spacing are shared.

const PALETTES = {
  A: {
    id: "A",
    label: "Palette A — 琥珀メイン（標準案）",
    desc: "オフホワイト × 落ち着いた琥珀（柿色寄り） × 焦茶。視認性とブランド印象のバランス型。",
    base:    { name: "Base / 生成り",   hex: "#FAF7F2", role: "背景" },
    surface: { name: "Surface / 紙白", hex: "#FFFEFB", role: "カード・面" },
    sub:     { name: "Subtle / 砂",    hex: "#F1ECE2", role: "セクション仕切り" },
    line:    { name: "Line / 罫",      hex: "#E5DED1", role: "罫線" },
    main:    { name: "Main / 琥珀",    hex: "#C8631F", role: "アクション・強調" },
    mainDeep:{ name: "Deep / 燻し琥珀", hex: "#A24E16", role: "Hover・押下" },
    accent:  { name: "Accent / 焦茶",  hex: "#3A2A1F", role: "見出し・本文濃" },
    ink:     { name: "Ink / 墨",       hex: "#2A2520", role: "本文" },
    inkSub:  { name: "Ink Sub / 鈍墨",  hex: "#6B6258", role: "補足" },
    inkMute: { name: "Ink Mute / 鼠",  hex: "#9A9189", role: "キャプション" },
  },
  B: {
    id: "B",
    label: "Palette B — 静謐（落ち着き重視）",
    desc: "より明度差を抑えた静的トーン。琥珀をやや抑え、余白の白を主役に。shion.jp 寄りの上品な静けさ。",
    base:    { name: "Base / 生成り",   hex: "#FBF9F4", role: "背景" },
    surface: { name: "Surface / 紙白", hex: "#FFFFFF", role: "カード・面" },
    sub:     { name: "Subtle / 霞",    hex: "#F4F0E8", role: "セクション仕切り" },
    line:    { name: "Line / 罫",      hex: "#E8E2D5", role: "罫線" },
    main:    { name: "Main / 燻琥珀",  hex: "#B25E25", role: "アクション・強調" },
    mainDeep:{ name: "Deep / 古琥珀",  hex: "#8C481A", role: "Hover・押下" },
    accent:  { name: "Accent / 黒檀",  hex: "#2C2520", role: "見出し・本文濃" },
    ink:     { name: "Ink / 墨",       hex: "#1F1B17", role: "本文" },
    inkSub:  { name: "Ink Sub / 鈍墨",  hex: "#7A7268", role: "補足" },
    inkMute: { name: "Ink Mute / 霞墨",  hex: "#A8A199", role: "キャプション" },
  },
  C: {
    id: "C",
    label: "Palette C — 和紙寄り（温度感+）",
    desc: "ベースに微かな黄味を含ませた、より温度感のある和紙トーン。柿色を少し明るく、焦茶を深めに。親しみやすさ重視。",
    base:    { name: "Base / 生成り",   hex: "#F8F2E6", role: "背景" },
    surface: { name: "Surface / 紙白", hex: "#FDFAF2", role: "カード・面" },
    sub:     { name: "Subtle / 麻",    hex: "#EFE6D2", role: "セクション仕切り" },
    line:    { name: "Line / 罫",      hex: "#DCD2BC", role: "罫線" },
    main:    { name: "Main / 柿",      hex: "#D2691E", role: "アクション・強調" },
    mainDeep:{ name: "Deep / 朱柿",    hex: "#A8501A", role: "Hover・押下" },
    accent:  { name: "Accent / 焦茶",  hex: "#3D2817", role: "見出し・本文濃" },
    ink:     { name: "Ink / 墨",       hex: "#2A1F15", role: "本文" },
    inkSub:  { name: "Ink Sub / 鈍墨",  hex: "#6F6354", role: "補足" },
    inkMute: { name: "Ink Mute / 鼠",  hex: "#9C9080", role: "キャプション" },
  },
};

const TYPE_SCALE = [
  { token: "display",  size: 64, line: 1.25, weight: 500, family: "serif",  jp: "Display / 表紙",     en: "Noto Serif JP 500", usage: "TOPメインビジュアル・大型タイトル" },
  { token: "h1",       size: 44, line: 1.35, weight: 500, family: "serif",  jp: "H1 / ページタイトル", en: "Noto Serif JP 500", usage: "下層ページの主見出し" },
  { token: "h2",       size: 32, line: 1.4,  weight: 500, family: "serif",  jp: "H2 / セクション",     en: "Noto Serif JP 500", usage: "セクション大見出し（英字サブ併用）" },
  { token: "h3",       size: 22, line: 1.5,  weight: 600, family: "serif",  jp: "H3 / 小見出し",       en: "Noto Serif JP 600", usage: "カード見出し・記事内小見出し" },
  { token: "lead",     size: 18, line: 1.85, weight: 400, family: "sans",   jp: "Lead / リード文",    en: "Noto Sans JP 400",  usage: "概要文・導入" },
  { token: "body",     size: 16, line: 1.95, weight: 400, family: "sans",   jp: "Body / 本文",        en: "Noto Sans JP 400",  usage: "標準本文" },
  { token: "small",    size: 14, line: 1.7,  weight: 400, family: "sans",   jp: "Small / 補足",       en: "Noto Sans JP 400",  usage: "メタ情報・キャプション" },
  { token: "caption",  size: 12, line: 1.6,  weight: 500, family: "sans",   jp: "Caption / 注記",     en: "Noto Sans JP 500",  usage: "ラベル・タグ・最小注記" },
  { token: "eyebrow",  size: 12, line: 1.4,  weight: 500, family: "mono",   jp: "Eyebrow / 英字サブ", en: "JetBrains Mono 500", usage: "見出し上の英字サブタイトル（tracking広め）" },
];

const SPACE_SCALE = [
  { token: "2xs", px: 4,   usage: "アイコンと文字の間" },
  { token: "xs",  px: 8,   usage: "細かなインライン要素" },
  { token: "sm",  px: 12,  usage: "タグ内padding等" },
  { token: "md",  px: 16,  usage: "カード内padding基準" },
  { token: "lg",  px: 24,  usage: "要素間の標準ギャップ" },
  { token: "xl",  px: 40,  usage: "ブロック間" },
  { token: "2xl", px: 64,  usage: "セクション内の大きな間" },
  { token: "3xl", px: 96,  usage: "セクション間（PC）" },
  { token: "4xl", px: 144, usage: "セクション間（広めPC）" },
  { token: "5xl", px: 200, usage: "TOPの呼吸用余白" },
];

const RADIUS_SCALE = [
  { token: "none", px: 0,  usage: "罫・写真・テーブル" },
  { token: "sm",   px: 2,  usage: "タグ・小要素" },
  { token: "md",   px: 4,  usage: "ボタン・入力" },
  { token: "lg",   px: 8,  usage: "カード（控えめ）" },
];

window.PALETTES = PALETTES;
window.TYPE_SCALE = TYPE_SCALE;
window.SPACE_SCALE = SPACE_SCALE;
window.RADIUS_SCALE = RADIUS_SCALE;
