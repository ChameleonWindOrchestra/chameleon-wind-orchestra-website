// Reusable presentation primitives for the design-system canvas.

const Frame = ({ title, eyebrow, children, style }) => (
  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', padding: '56px 56px 64px', ...style }}>
    {eyebrow && (
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'baseline', gap: 14 }}>
        <span className="ds-mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{eyebrow}</span>
        <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
      </div>
    )}
    {title && <h2 className="ds-serif" style={{ fontSize: 32, margin: '0 0 36px', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--ink)' }}>{title}</h2>}
    {children}
  </div>
);

// ---------- Color palette ----------
const Swatch = ({ name, role, value, dark }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <div style={{ height: 96, background: value, border: '1px solid var(--line)' }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="ds-serif" style={{ fontSize: 14, color: 'var(--ink)' }}>{name}</span>
        <span className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{value.toUpperCase()}</span>
      </div>
      <span className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em' }}>{role}</span>
    </div>
  </div>
);

const PaletteGroup = ({ heading, subhead, swatches }) => (
  <div>
    <div style={{ marginBottom: 18 }}>
      <div className="ds-serif" style={{ fontSize: 16, color: 'var(--ink)', marginBottom: 4 }}>{heading}</div>
      <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.1em' }}>{subhead}</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${swatches.length}, 1fr)`, gap: 16 }}>
      {swatches.map((s) => <Swatch key={s.name} {...s} />)}
    </div>
  </div>
);

const PaletteOption = ({ label, jp, tone, base, accents, ink, lines }) => (
  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', padding: 36 }}>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
      <div>
        <div className="ds-mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.18em' }}>{label}</div>
        <div className="ds-serif" style={{ fontSize: 22, marginTop: 6, color: 'var(--ink)' }}>{jp}</div>
      </div>
      <div className="ds-eng" style={{ fontSize: 18, color: 'var(--ink-mute)' }}>{tone}</div>
    </div>
    {/* Preview composition */}
    <div style={{ background: base[0].value, border: `1px solid ${lines[0].value}`, padding: '32px 28px', marginBottom: 24 }}>
      <div className="ds-eng" style={{ fontSize: 12, color: accents[0].value, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 8 }}>Concert / 2026.06.20</div>
      <div className="ds-serif" style={{ fontSize: 26, color: ink[0].value, lineHeight: 1.5, marginBottom: 14 }}>第一回 定期演奏会</div>
      <div style={{ height: 1, background: lines[0].value, margin: '14px 0' }} />
      <div style={{ fontSize: 11, color: ink[1].value, lineHeight: 1.9 }}>
        池田市民文化会館アゼリアホール大ホールにて。<br/>入場無料。13:30 開場 / 14:00 開演。
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
        <span style={{ background: accents[0].value, color: '#fff', fontSize: 11, padding: '8px 16px', letterSpacing: '0.1em' }}>詳細を見る</span>
        <span style={{ border: `1px solid ${ink[0].value}`, color: ink[0].value, fontSize: 11, padding: '7px 16px', letterSpacing: '0.1em' }}>News 一覧</span>
      </div>
    </div>
    {/* Tokens */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <PaletteGroup heading="Base / 地" subhead="BACKGROUND" swatches={base} />
      <PaletteGroup heading="Ink / 墨" subhead="FOREGROUND" swatches={ink} />
      <PaletteGroup heading="Accent / 差し色" subhead="BRAND" swatches={accents} />
      <PaletteGroup heading="Line / 罫" subhead="DIVIDER" swatches={lines} />
    </div>
  </div>
);

// ---------- Type specimen ----------
const TypeRow = ({ label, sample, font, size, weight, lh, ls, role }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 320px', gap: 32, padding: '28px 0', borderTop: '1px solid var(--line)' }}>
    <div>
      <div className="ds-mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.16em' }}>{label}</div>
      <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 6 }}>{role}</div>
    </div>
    <div style={{ fontFamily: font, fontSize: size, fontWeight: weight, lineHeight: lh, letterSpacing: ls, color: 'var(--ink)' }}>
      {sample}
    </div>
    <div className="ds-mono" style={{ fontSize: 10, color: 'var(--ink-mute)', lineHeight: 1.9, alignSelf: 'end' }}>
      <div>family: {font.split(',')[0].replace(/['"]/g, '')}</div>
      <div>size / lh: {size}px / {lh}</div>
      <div>weight: {weight}{ls ? ` · letter-spacing: ${ls}` : ''}</div>
    </div>
  </div>
);

// ---------- Spacing & radii ----------
const SpaceBar = ({ token, px }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '60px 80px 1fr', alignItems: 'center', gap: 16, padding: '10px 0' }}>
    <span className="ds-mono" style={{ fontSize: 11, color: 'var(--ink-2)' }}>{token}</span>
    <span className="ds-mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{px}px</span>
    <div style={{ height: 10, background: 'var(--accent)', width: px, maxWidth: '100%' }} />
  </div>
);

window.Frame = Frame;
window.Swatch = Swatch;
window.PaletteGroup = PaletteGroup;
window.PaletteOption = PaletteOption;
window.TypeRow = TypeRow;
window.SpaceBar = SpaceBar;
