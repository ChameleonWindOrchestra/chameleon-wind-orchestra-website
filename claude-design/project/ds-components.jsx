// UI components for the Chameleon Wind Orchestra design system.

// ---------- Buttons ----------
const Btn = ({ variant = 'primary', size = 'md', children, icon }) => {
  const sizes = {
    sm: { padding: '10px 20px', fontSize: 12 },
    md: { padding: '14px 28px', fontSize: 13 },
    lg: { padding: '18px 36px', fontSize: 14 },
  };
  const variants = {
    primary: { background: 'var(--accent)', color: '#fff', border: '1px solid var(--accent)' },
    secondary: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)' },
    ghost: { background: 'transparent', color: 'var(--accent)', border: '1px solid transparent' },
  };
  return (
    <button style={{
      ...sizes[size], ...variants[variant],
      letterSpacing: '0.12em', fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 500,
      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 12, transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-deep)';
      if (variant === 'secondary') { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bg)'; }
      if (variant === 'ghost') e.currentTarget.style.color = 'var(--accent-deep)';
    }}
    onMouseLeave={(e) => {
      Object.assign(e.currentTarget.style, variants[variant]);
    }}
    >
      {children}
      {icon && <span style={{ fontFamily: 'serif' }}>→</span>}
    </button>
  );
};

// ---------- Section heading (明朝大見出し + 英字サブ) ----------
const SectionHeading = ({ jp, en, num }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 32, marginBottom: 24 }}>
    {num && <span className="ds-mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.2em' }}>{num}</span>}
    <div>
      <div className="ds-eng" style={{ fontSize: 16, color: 'var(--ink-mute)', letterSpacing: '0.2em', marginBottom: 10, textTransform: 'uppercase', fontStyle: 'normal' }}>{en}</div>
      <h3 className="ds-serif" style={{ fontSize: 36, margin: 0, fontWeight: 500, letterSpacing: '0.06em', color: 'var(--ink)' }}>{jp}</h3>
    </div>
  </div>
);

// ---------- Link ----------
const TextLink = ({ children, arrow = true }) => (
  <a href="#" onClick={(e) => e.preventDefault()} style={{
    color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: 2,
    fontSize: 13, letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'baseline', gap: 10,
  }}>
    {children}
    {arrow && <span className="ds-eng" style={{ fontStyle: 'normal' }}>→</span>}
  </a>
);

// ---------- Nav (header) ----------
const Nav = () => {
  const items = [
    { jp: 'About', en: 'about' },
    { jp: 'News', en: 'news' },
    { jp: 'Members', en: 'members' },
    { jp: 'Concerts', en: 'concerts' },
    { jp: 'Contact', en: 'contact' },
  ];
  return (
    <header style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', padding: '28px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ChameleonMark size={28} />
        <div>
          <div className="ds-serif" style={{ fontSize: 16, letterSpacing: '0.08em', color: 'var(--ink)' }}>カメレオン吹奏楽団</div>
          <div className="ds-eng" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.22em', textTransform: 'uppercase', fontStyle: 'normal', marginTop: 2 }}>Chameleon Wind Orchestra</div>
        </div>
      </div>
      <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {items.map((it) => (
          <a key={it.en} href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, letterSpacing: '0.1em', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <span>{it.jp}</span>
            <span className="ds-eng" style={{ fontSize: 9, color: 'var(--ink-mute)', letterSpacing: '0.18em', fontStyle: 'normal' }}>{it.en}</span>
          </a>
        ))}
        <Btn variant="primary" size="sm">Tickets</Btn>
      </nav>
    </header>
  );
};

// ---------- Footer ----------
const Footer = () => (
  <footer style={{ background: 'var(--brown-deep)', color: '#E8DDC9', padding: '64px 56px 36px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <ChameleonMark size={24} color="var(--accent-soft)" bg="transparent" />
          <div>
            <div className="ds-serif" style={{ fontSize: 16, letterSpacing: '0.08em' }}>カメレオン吹奏楽団</div>
            <div className="ds-eng" style={{ fontSize: 10, color: 'rgba(232,221,201,0.6)', letterSpacing: '0.22em', textTransform: 'uppercase', fontStyle: 'normal', marginTop: 2 }}>Chameleon Wind Orchestra</div>
          </div>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(232,221,201,0.7)', lineHeight: 1.9, margin: 0 }}>
          大阪・池田を拠点に活動するアマチュア吹奏楽団。<br />
          色彩豊かな響きをお届けします。
        </p>
      </div>
      {[
        { h: 'Menu', items: ['About', 'News', 'Members', 'Concerts', 'Contact'] },
        { h: 'Concerts', items: ['第一回定期演奏会', '出演履歴', '次回出演予定'] },
        { h: 'Follow', items: ['X (Twitter)', 'Instagram', 'YouTube'] },
      ].map((col) => (
        <div key={col.h}>
          <div className="ds-eng" style={{ fontSize: 11, color: 'var(--accent-soft)', letterSpacing: '0.22em', textTransform: 'uppercase', fontStyle: 'normal', marginBottom: 18 }}>{col.h}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col.items.map((i) => <li key={i} style={{ fontSize: 12, color: 'rgba(232,221,201,0.85)' }}>{i}</li>)}
          </ul>
        </div>
      ))}
    </div>
    <div style={{ height: 1, background: 'rgba(232,221,201,0.18)', marginBottom: 24 }} />
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(232,221,201,0.5)', letterSpacing: '0.14em' }}>
      <span>© 2026 Chameleon Wind Orchestra</span>
      <span className="ds-mono">PRIVACY · TERMS</span>
    </div>
  </footer>
);

// ---------- Chameleon mark (subtle, footer-sized) ----------
const ChameleonMark = ({ size = 24, color = 'var(--accent)', bg = 'transparent' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15.5" stroke={color} strokeWidth="0.7" fill={bg} opacity="0.5" />
    {/* Stylized minimal chameleon silhouette */}
    <path d="M7 18 Q9 15 12 15 Q14 15 15 13 Q16 11 18 11 Q22 11 23 14 Q24 17 22 18 L20 18 Q19 19 19 20 L20 22 M11 18 Q11 20 9 20 Q7 20 7 18 Z" stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="21" cy="13.5" r="0.6" fill={color} />
  </svg>
);

// ---------- News card ----------
const NewsCard = ({ date, cat, title, hasImage = true }) => (
  <article style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
    {hasImage && <Placeholder ratio="3/2" label="news photo" />}
    <div style={{ padding: '24px 24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <span className="ds-mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.1em' }}>{date}</span>
        <span style={{ fontSize: 10, padding: '3px 10px', border: '1px solid var(--accent)', color: 'var(--accent)', letterSpacing: '0.12em' }}>{cat}</span>
      </div>
      <h4 className="ds-serif" style={{ fontSize: 17, margin: 0, fontWeight: 500, lineHeight: 1.7, color: 'var(--ink)' }}>{title}</h4>
    </div>
  </article>
);

// ---------- Member card ----------
const MemberCard = ({ name, kana, part, role }) => (
  <article style={{ background: 'var(--bg-card)', border: '1px solid var(--line)' }}>
    <Placeholder ratio="4/5" label="portrait" />
    <div style={{ padding: '20px 22px 24px' }}>
      <div className="ds-eng" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', fontStyle: 'normal', marginBottom: 8 }}>{part}</div>
      <div className="ds-serif" style={{ fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>{name}</div>
      <div style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.14em' }}>{kana}</div>
      {role && <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--line)', fontSize: 11, color: 'var(--ink-3)' }}>{role}</div>}
    </div>
  </article>
);

// ---------- Placeholder ----------
const Placeholder = ({ ratio = '3/2', label = 'image' }) => (
  <div style={{
    aspectRatio: ratio, width: '100%',
    background: 'repeating-linear-gradient(135deg, var(--bg-soft) 0 8px, var(--line-soft) 8px 9px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--ink-mute)', fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em',
  }}>
    [ {label} ]
  </div>
);

// ---------- Form ----------
const Field = ({ label, type = 'text', placeholder, required, value, textarea }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <span style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
      <span className="ds-serif" style={{ fontSize: 13, color: 'var(--ink)' }}>{label}</span>
      {required && <span className="ds-mono" style={{ fontSize: 9, color: 'var(--accent)', letterSpacing: '0.18em' }}>REQUIRED</span>}
    </span>
    {textarea ? (
      <textarea defaultValue={value} placeholder={placeholder} rows={4} style={fieldStyle} />
    ) : (
      <input type={type} defaultValue={value} placeholder={placeholder} style={fieldStyle} />
    )}
  </label>
);
const fieldStyle = {
  border: 'none', borderBottom: '1px solid var(--ink-mute)', padding: '12px 2px', background: 'transparent',
  fontSize: 14, fontFamily: '"Noto Sans JP", sans-serif', color: 'var(--ink)', outline: 'none', resize: 'vertical',
};

// ---------- Concert / table row ----------
const ConcertRow = ({ no, date, title, venue, status }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '60px 140px 1fr 1fr 110px', gap: 24, padding: '24px 0', borderTop: '1px solid var(--line)', alignItems: 'center' }}>
    <span className="ds-eng" style={{ fontSize: 18, color: 'var(--accent)', fontStyle: 'normal' }}>{no}</span>
    <div>
      <div className="ds-mono" style={{ fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.08em' }}>{date}</div>
    </div>
    <div className="ds-serif" style={{ fontSize: 16, color: 'var(--ink)' }}>{title}</div>
    <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{venue}</div>
    <span style={{ fontSize: 10, padding: '6px 12px', border: status === '受付中' ? '1px solid var(--accent)' : '1px solid var(--ink-mute)', color: status === '受付中' ? 'var(--accent)' : 'var(--ink-mute)', letterSpacing: '0.12em', justifySelf: 'end' }}>{status}</span>
  </div>
);

// ---------- Pagination & breadcrumb ----------
const Pagination = ({ current = 2, total = 6 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
    <button style={pageBtn(false)}>← Prev</button>
    {Array.from({ length: total }).map((_, i) => {
      const active = i + 1 === current;
      return (
        <button key={i} style={{
          width: 36, height: 36, border: active ? '1px solid var(--accent)' : '1px solid transparent',
          background: 'transparent', color: active ? 'var(--accent)' : 'var(--ink-2)',
          fontFamily: '"Cormorant Garamond", serif', fontSize: 15, cursor: 'pointer',
        }}>{String(i + 1).padStart(2, '0')}</button>
      );
    })}
    <button style={pageBtn(true)}>Next →</button>
  </div>
);
const pageBtn = (right) => ({
  border: 'none', background: 'transparent', fontFamily: '"Noto Sans JP", sans-serif',
  fontSize: 12, color: 'var(--ink-2)', cursor: 'pointer', letterSpacing: '0.1em',
  padding: '0 14px', height: 36,
});

const Breadcrumb = ({ items }) => (
  <nav style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.1em' }}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        <span style={{ color: i === items.length - 1 ? 'var(--ink)' : 'var(--ink-mute)' }}>{it}</span>
        {i < items.length - 1 && <span className="ds-eng" style={{ fontStyle: 'normal' }}>/</span>}
      </React.Fragment>
    ))}
  </nav>
);

Object.assign(window, {
  Btn, SectionHeading, TextLink, Nav, Footer, ChameleonMark,
  NewsCard, MemberCard, Placeholder, Field, ConcertRow, Pagination, Breadcrumb,
});
