// Main app — arranges everything on the design canvas.

const { DesignCanvas, DCSection, DCArtboard } = window;

// ====== Three palette options ======
const PALETTE_A = {
  label: 'OPTION 01',
  jp: '柿渋 — 標準案',
  tone: 'Persimmon · Standard',
  base: [
    { name: 'bg', role: 'BASE / 地', value: '#FAF7F2' },
    { name: 'bg-soft', role: 'SOFT', value: '#F5EFE6' },
    { name: 'bg-card', role: 'CARD', value: '#FFFEFB' },
  ],
  ink: [
    { name: 'ink', role: 'PRIMARY / 墨', value: '#1F1A14' },
    { name: 'ink-2', role: 'BODY', value: '#3B342A' },
    { name: 'ink-mute', role: 'MUTED', value: '#8A7F6E' },
  ],
  accents: [
    { name: 'accent', role: 'BRAND / 柿渋', value: '#C8631F' },
    { name: 'accent-deep', role: 'HOVER', value: '#A24F18' },
    { name: 'brown', role: 'DEEP / 焦茶', value: '#4A3525' },
  ],
  lines: [
    { name: 'line', role: 'DIVIDER', value: '#E5DCCB' },
    { name: 'line-soft', role: 'SOFT', value: '#EFE7D6' },
  ],
};

const PALETTE_B = {
  label: 'OPTION 02',
  jp: '琥珀 — 静謐案',
  tone: 'Amber · Quiet',
  base: [
    { name: 'bg', role: 'BASE / 地', value: '#FBF9F5' },
    { name: 'bg-soft', role: 'SOFT', value: '#F2EDE3' },
    { name: 'bg-card', role: 'CARD', value: '#FFFFFF' },
  ],
  ink: [
    { name: 'ink', role: 'PRIMARY / 墨', value: '#1A1814' },
    { name: 'ink-2', role: 'BODY', value: '#2E2A22' },
    { name: 'ink-mute', role: 'MUTED', value: '#9C9384' },
  ],
  accents: [
    { name: 'accent', role: 'BRAND / 琥珀', value: '#B07215' },
    { name: 'accent-deep', role: 'HOVER', value: '#8A580E' },
    { name: 'brown', role: 'DEEP / 焦茶', value: '#3D2A1B' },
  ],
  lines: [
    { name: 'line', role: 'DIVIDER', value: '#E0D6C2' },
    { name: 'line-soft', role: 'SOFT', value: '#EDE5D2' },
  ],
};

const PALETTE_C = {
  label: 'OPTION 03',
  jp: '弁柄 — 温色案',
  tone: 'Bengara · Warm',
  base: [
    { name: 'bg', role: 'BASE / 地', value: '#F8F2E8' },
    { name: 'bg-soft', role: 'SOFT', value: '#EFE6D4' },
    { name: 'bg-card', role: 'CARD', value: '#FDFAF3' },
  ],
  ink: [
    { name: 'ink', role: 'PRIMARY / 墨', value: '#241B12' },
    { name: 'ink-2', role: 'BODY', value: '#42352A' },
    { name: 'ink-mute', role: 'MUTED', value: '#8B7A65' },
  ],
  accents: [
    { name: 'accent', role: 'BRAND / 弁柄', value: '#B8553A' },
    { name: 'accent-deep', role: 'HOVER', value: '#923F28' },
    { name: 'brown', role: 'DEEP / 焦茶', value: '#3A2418' },
  ],
  lines: [
    { name: 'line', role: 'DIVIDER', value: '#DBCFB8' },
    { name: 'line-soft', role: 'SOFT', value: '#E8DEC8' },
  ],
};

// ====== Type scale ======
const typeRows = [
  { label: 'display', sample: '色彩豊かな響き、ここに。', font: '"Noto Serif JP", serif', size: 60, weight: 500, lh: 1.4, ls: '0.06em', role: 'ヒーロー / トップ大見出し' },
  { label: 'h1', sample: '第一回 定期演奏会', font: '"Noto Serif JP", serif', size: 44, weight: 500, lh: 1.5, ls: '0.06em', role: 'ページ大見出し（明朝）' },
  { label: 'h2', sample: 'About / 私たちについて', font: '"Noto Serif JP", serif', size: 32, weight: 500, lh: 1.5, ls: '0.05em', role: 'セクション見出し' },
  { label: 'h3', sample: 'お知らせ / News Update', font: '"Noto Serif JP", serif', size: 22, weight: 500, lh: 1.6, ls: '0.04em', role: 'カード・記事見出し' },
  { label: 'eyebrow', sample: 'CHAMELEON WIND ORCHESTRA', font: '"Cormorant Garamond", serif', size: 14, weight: 400, lh: 1.4, ls: '0.22em', role: '英字サブ（小見出し上）' },
  { label: 'body-lg', sample: '池田を拠点に活動するアマチュア吹奏楽団です。色彩豊かな音楽をお届けします。', font: '"Noto Sans JP", sans-serif', size: 17, weight: 400, lh: 1.95, ls: '0.04em', role: 'リード文 / 本文（強）' },
  { label: 'body', sample: '入場無料。13:30開場 / 14:00開演。お気軽にご来場ください。', font: '"Noto Sans JP", sans-serif', size: 14, weight: 400, lh: 1.9, ls: '0.04em', role: '標準本文' },
  { label: 'caption', sample: '2026.06.20 (土) — 池田市民文化会館 アゼリアホール', font: '"Noto Sans JP", sans-serif', size: 12, weight: 400, lh: 1.8, ls: '0.05em', role: 'キャプション・補足' },
  { label: 'mono', sample: '2026 · ISSUE 01 / VENUE_AZALEA', font: '"JetBrains Mono", monospace', size: 11, weight: 400, lh: 1.6, ls: '0.16em', role: '英数字ラベル / 日付' },
];

// ====== Spacing scale ======
const spacing = [
  { token: '--s-1', px: 4 }, { token: '--s-2', px: 8 }, { token: '--s-3', px: 12 },
  { token: '--s-4', px: 16 }, { token: '--s-5', px: 24 }, { token: '--s-6', px: 32 },
  { token: '--s-7', px: 48 }, { token: '--s-8', px: 64 }, { token: '--s-9', px: 96 },
  { token: '--s-10', px: 128 }, { token: '--s-11', px: 192 },
];

// ====== Cover ======
const Cover = () => (
  <div style={{ background: 'var(--bg)', padding: '88px 80px', height: '100%' }}>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 96 }}>
      <span className="ds-mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em' }}>DESIGN SYSTEM · v1.0 · 2026</span>
      <span className="ds-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.22em' }}>FOR REVIEW</span>
    </div>
    <div className="ds-eng" style={{ fontSize: 18, color: 'var(--ink-mute)', letterSpacing: '0.28em', textTransform: 'uppercase', fontStyle: 'normal', marginBottom: 28 }}>Chameleon Wind Orchestra</div>
    <h1 className="ds-serif" style={{ fontSize: 96, lineHeight: 1.25, margin: 0, fontWeight: 400, letterSpacing: '0.04em', color: 'var(--ink)' }}>
      色彩豊かな響き、<br />
      その<span style={{ color: 'var(--accent)' }}>礎</span>となる設計言語。
    </h1>
    <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingTop: 36, borderTop: '1px solid var(--line)' }}>
      {[
        { n: '01', t: 'Foundations', d: 'カラー / タイポグラフィ / 余白' },
        { n: '02', t: 'Components', d: 'Button / Form / Card / Table' },
        { n: '03', t: 'Navigation', d: 'Header / Footer / Breadcrumb' },
        { n: '04', t: 'Patterns', d: 'News / Members / Concerts' },
      ].map((s) => (
        <div key={s.n}>
          <div className="ds-mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: 14 }}>{s.n}</div>
          <div className="ds-serif" style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>{s.t}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-mute)', lineHeight: 1.8 }}>{s.d}</div>
        </div>
      ))}
    </div>
  </div>
);

// ====== Sample TOP composition ======
const TopSample = () => (
  <div style={{ background: 'var(--bg)' }}>
    <Nav />
    {/* Hero */}
    <section style={{ padding: '120px 80px 100px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
      <div>
        <div className="ds-mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em', marginBottom: 28 }}>1ST REGULAR CONCERT · 2026.06.20</div>
        <h1 className="ds-serif" style={{ fontSize: 64, lineHeight: 1.4, margin: 0, fontWeight: 500, letterSpacing: '0.04em', color: 'var(--ink)' }}>
          色彩豊かに、<br />響きを<span style={{ color: 'var(--accent)' }}>纏う</span>。
        </h1>
        <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 2, margin: '40px 0 48px', letterSpacing: '0.04em', maxWidth: 480 }}>
          大阪・池田を拠点に活動する、私たちカメレオン吹奏楽団。<br/>ひとりひとりの音色が重なり合い、ステージごとに新しい景色を描きます。
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          <Btn variant="primary" size="lg" icon>第1回演奏会の詳細</Btn>
          <Btn variant="ghost" size="lg">私たちについて</Btn>
        </div>
      </div>
      <Placeholder ratio="4/5" label="hero / ensemble photo" />
    </section>
    {/* News strip */}
    <section style={{ padding: '80px 80px 120px', background: 'var(--bg-soft)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
        <SectionHeading num="— 02" en="News" jp="お知らせ" />
        <TextLink>News 一覧</TextLink>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        <NewsCard date="2026.04.18" cat="CONCERT" title="第1回定期演奏会のチケット情報を公開しました" />
        <NewsCard date="2026.03.30" cat="MEMBER" title="新メンバー募集を開始（クラリネット・打楽器）" />
        <NewsCard date="2026.02.14" cat="MEDIA" title="池田市広報にて当団の活動が紹介されました" />
      </div>
    </section>
  </div>
);

// ====== Components showcases ======
const ButtonsShowcase = () => (
  <Frame eyebrow="04 · COMPONENTS" title="Buttons">
    <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: 36, columnGap: 32, alignItems: 'center' }}>
      <div className="ds-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.14em' }}>PRIMARY</div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <Btn variant="primary" size="sm">小サイズ</Btn>
        <Btn variant="primary" size="md" icon>標準サイズ</Btn>
        <Btn variant="primary" size="lg" icon>大サイズ・主要動線</Btn>
      </div>
      <div className="ds-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.14em' }}>SECONDARY</div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <Btn variant="secondary" size="sm">詳細</Btn>
        <Btn variant="secondary" size="md" icon>About</Btn>
        <Btn variant="secondary" size="lg" icon>News 一覧へ</Btn>
      </div>
      <div className="ds-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.14em' }}>GHOST</div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <Btn variant="ghost" size="sm" icon>もっと見る</Btn>
        <Btn variant="ghost" size="md" icon>続きを読む</Btn>
        <Btn variant="ghost" size="lg" icon>すべてのお知らせ</Btn>
      </div>
    </div>
  </Frame>
);

const LinksShowcase = () => (
  <Frame eyebrow="05 · COMPONENTS" title="Links / Breadcrumb / Pagination">
    <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
      <div>
        <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 18 }}>TEXT LINK</div>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          <TextLink>News 一覧</TextLink>
          <TextLink>すべての出演履歴</TextLink>
          <TextLink arrow={false}>X (Twitter) ↗</TextLink>
        </div>
      </div>
      <div>
        <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 18 }}>BREADCRUMB</div>
        <Breadcrumb items={['Home', 'News', '第1回定期演奏会のチケット情報']} />
      </div>
      <div>
        <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 18 }}>PAGINATION</div>
        <Pagination current={2} total={6} />
      </div>
    </div>
  </Frame>
);

const FormShowcase = () => (
  <Frame eyebrow="06 · COMPONENTS" title="Form / Contact">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 36 }}>
      <Field label="お名前" placeholder="山田 太郎" required />
      <Field label="フリガナ" placeholder="ヤマダ タロウ" />
      <Field label="メールアドレス" type="email" placeholder="example@email.com" required />
      <Field label="お問い合わせ種別" value="演奏依頼について" />
    </div>
    <div style={{ marginBottom: 36 }}>
      <Field label="お問い合わせ内容" textarea placeholder="ご記入ください…" required />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, borderTop: '1px solid var(--line)' }}>
      <span style={{ fontSize: 11, color: 'var(--ink-mute)' }}>※ 通常2〜3営業日以内にご返信いたします。</span>
      <Btn variant="primary" size="lg" icon>送信する</Btn>
    </div>
  </Frame>
);

const NewsCardsShowcase = () => (
  <Frame eyebrow="07 · COMPONENTS" title="News Cards">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
      <NewsCard date="2026.04.18" cat="CONCERT" title="第1回定期演奏会のチケット情報を公開しました" />
      <NewsCard date="2026.03.30" cat="MEMBER" title="新メンバー募集を開始（クラリネット・打楽器）" />
      <NewsCard date="2026.02.14" cat="MEDIA" title="池田市広報にて当団の活動が紹介されました" />
    </div>
  </Frame>
);

const MembersShowcase = () => (
  <Frame eyebrow="08 · COMPONENTS" title="Member Cards">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <MemberCard part="Conductor" name="田中 蒼" kana="TANAKA Aoi" role="音楽監督・指揮" />
      <MemberCard part="Trumpet" name="鈴木 凛" kana="SUZUKI Rin" role="トランペット主席" />
      <MemberCard part="Clarinet" name="佐藤 葵" kana="SATO Aoi" />
      <MemberCard part="Percussion" name="高橋 翼" kana="TAKAHASHI Tsubasa" />
    </div>
  </Frame>
);

const ConcertsShowcase = () => (
  <Frame eyebrow="09 · COMPONENTS" title="Concerts / Schedule Table">
    <ConcertRow no="No.01" date="2026.06.20 SAT" title="第1回 定期演奏会" venue="池田市民文化会館 アゼリアホール" status="受付中" />
    <ConcertRow no="No.02" date="2026.10.12 SUN" title="秋のチャリティーコンサート" venue="豊中市立文化芸術センター" status="準備中" />
    <ConcertRow no="No.03" date="2026.12.23 WED" title="クリスマス・ファミリーコンサート" venue="池田市民文化会館 中ホール" status="準備中" />
    <ConcertRow no="No.04" date="2027.04.05 SUN" title="第2回 定期演奏会" venue="未定" status="調整中" />
    <div style={{ borderTop: '1px solid var(--line)', height: 0 }} />
  </Frame>
);

const HeaderFooterShowcase = () => (
  <Frame eyebrow="10 · COMPONENTS" title="Header / Footer">
    <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 18 }}>GLOBAL HEADER</div>
    <div style={{ marginBottom: 56 }}>
      <Nav />
    </div>
    <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 18 }}>GLOBAL FOOTER</div>
    <Footer />
  </Frame>
);

const SectionHeadingsShowcase = () => (
  <Frame eyebrow="11 · COMPONENTS" title="Section Headings (明朝大見出し + 英字サブ)">
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
      <SectionHeading num="— 01" en="About" jp="私たちについて" />
      <SectionHeading num="— 02" en="News" jp="お知らせ" />
      <SectionHeading num="— 03" en="Members" jp="団員紹介" />
      <SectionHeading num="— 04" en="Concerts" jp="演奏会情報" />
    </div>
  </Frame>
);

// ====== Foundations frames ======
const TypographyFrame = () => (
  <Frame eyebrow="02 · FOUNDATIONS" title="Typography / 書体設計">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, marginBottom: 56 }}>
      <div style={{ background: 'var(--bg-soft)', padding: 36 }}>
        <div className="ds-mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.18em', marginBottom: 14 }}>HEADING / 見出し</div>
        <div className="ds-serif" style={{ fontSize: 56, color: 'var(--ink)', lineHeight: 1.4, fontWeight: 500 }}>明朝で、品格を。</div>
        <div style={{ marginTop: 20, fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.9 }}>
          Noto Serif JP · weight 400/500/600<br />
          字間 0.04em〜0.06em / 行間 1.4〜1.6
        </div>
      </div>
      <div style={{ background: 'var(--bg-soft)', padding: 36 }}>
        <div className="ds-mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.18em', marginBottom: 14 }}>BODY / 本文</div>
        <div style={{ fontSize: 32, color: 'var(--ink)', lineHeight: 1.6, fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 400 }}>ゴシックで、読みやすく。</div>
        <div style={{ marginTop: 20, fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.9 }}>
          Noto Sans JP · weight 300/400/500<br />
          字間 0.04em〜0.05em / 行間 1.8〜2.0
        </div>
      </div>
    </div>
    <div>
      {typeRows.map((r) => <TypeRow key={r.label} {...r} />)}
    </div>
  </Frame>
);

const SpacingFrame = () => (
  <Frame eyebrow="03 · FOUNDATIONS" title="Spacing & Layout / 余白スケール">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
      <div>
        <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 18 }}>SPACING TOKENS</div>
        {spacing.map((s) => <SpaceBar key={s.token} {...s} />)}
      </div>
      <div>
        <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 18 }}>SECTION RHYTHM</div>
        <div style={{ background: 'var(--bg-soft)', padding: 32 }}>
          <div style={{ borderTop: '2px solid var(--accent)', paddingTop: 20 }}>
            <div className="ds-eng" style={{ fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.22em' }}>SECTION TOP — 96 / 128px</div>
            <div className="ds-serif" style={{ fontSize: 22, marginTop: 14, marginBottom: 24 }}>セクション見出し</div>
            <div style={{ height: 1, background: 'var(--line)', marginBottom: 24 }} />
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.95 }}>
              本文ブロック。段落間 24px。<br />
              段落 - ブロック間 48px。<br />
              セクション間 96 〜 128px。<br />
              ページ最大幅は 1280px、左右余白 80px を基準とします。
            </div>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: 24, border: '1px dashed var(--line)' }}>
          <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.14em', marginBottom: 10 }}>RADII / シェイプ</div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 56, height: 56, background: 'var(--accent)', borderRadius: 0 }} />
            <div style={{ width: 56, height: 56, background: 'var(--accent)', borderRadius: 2 }} />
            <div style={{ width: 56, height: 56, background: 'var(--accent)', borderRadius: 999 }} />
            <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.14em' }}>0 / 2 / pill のみ<br/>角丸は控えめに。</div>
          </div>
        </div>
      </div>
    </div>
  </Frame>
);

// ====== App ======
const App = () => (
  <DesignCanvas title="Chameleon Wind Orchestra — Design System">
    <DCSection id="cover" title="00 / Cover">
      <DCArtboard id="cover" label="Cover" width={1440} height={900}>
        <Cover />
      </DCArtboard>
    </DCSection>

    <DCSection id="palette" title="01 / Color Palette — 3 options">
      <DCArtboard id="pal-a" label="A: 柿渋（標準・推奨）" width={680} height={1280}>
        <PaletteOption {...PALETTE_A} />
      </DCArtboard>
      <DCArtboard id="pal-b" label="B: 琥珀（静謐）" width={680} height={1280}>
        <PaletteOption {...PALETTE_B} />
      </DCArtboard>
      <DCArtboard id="pal-c" label="C: 弁柄（温色）" width={680} height={1280}>
        <PaletteOption {...PALETTE_C} />
      </DCArtboard>
    </DCSection>

    <DCSection id="foundations" title="02 / Foundations — Type & Spacing">
      <DCArtboard id="type" label="Typography" width={1440} height={1500}>
        <TypographyFrame />
      </DCArtboard>
      <DCArtboard id="spacing" label="Spacing & Layout" width={1440} height={900}>
        <SpacingFrame />
      </DCArtboard>
    </DCSection>

    <DCSection id="components" title="03 / Components">
      <DCArtboard id="headings" label="Section Headings" width={1440} height={780}>
        <SectionHeadingsShowcase />
      </DCArtboard>
      <DCArtboard id="buttons" label="Buttons" width={1440} height={620}>
        <ButtonsShowcase />
      </DCArtboard>
      <DCArtboard id="links" label="Links / Breadcrumb / Pagination" width={1440} height={620}>
        <LinksShowcase />
      </DCArtboard>
      <DCArtboard id="form" label="Contact Form" width={1440} height={780}>
        <FormShowcase />
      </DCArtboard>
      <DCArtboard id="news-cards" label="News Cards" width={1440} height={620}>
        <NewsCardsShowcase />
      </DCArtboard>
      <DCArtboard id="member-cards" label="Member Cards" width={1440} height={760}>
        <MembersShowcase />
      </DCArtboard>
      <DCArtboard id="concerts" label="Concerts / Schedule Table" width={1440} height={620}>
        <ConcertsShowcase />
      </DCArtboard>
      <DCArtboard id="header-footer" label="Header / Footer" width={1440} height={920}>
        <HeaderFooterShowcase />
      </DCArtboard>
    </DCSection>

    <DCSection id="sample" title="04 / Sample Composition — TOP page (excerpt)">
      <DCArtboard id="top-sample" label="TOP — Hero + News (snippet)" width={1440} height={1500}>
        <TopSample />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
