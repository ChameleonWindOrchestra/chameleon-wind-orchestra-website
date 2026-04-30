// Shell components — Header, Footer, common UI primitives.

const Btn = ({ variant = 'primary', size = 'md', children, icon, onClick, type = 'button' }) => {
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
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover ? (
    variant === 'primary' ? { background: 'var(--accent-deep)', borderColor: 'var(--accent-deep)' }
    : variant === 'secondary' ? { background: 'var(--ink)', color: 'var(--bg)' }
    : { color: 'var(--accent-deep)' }
  ) : {};
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        ...sizes[size], ...variants[variant], ...hoverStyle,
        letterSpacing: '0.12em', fontWeight: 500, cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 12, transition: 'all 0.2s ease',
      }}>
      {children}
      {icon && <span className="eng" style={{ fontSize: 14 }}>→</span>}
    </button>
  );
};

const ChameleonMark = ({ size = 28, color = 'var(--accent)', bg = 'transparent' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15.5" stroke={color} strokeWidth="0.7" fill={bg} opacity="0.6" />
    <path d="M7 18 Q9 15 12 15 Q14 15 15 13 Q16 11 18 11 Q22 11 23 14 Q24 17 22 18 L20 18 Q19 19 19 20 L20 22 M11 18 Q11 20 9 20 Q7 20 7 18 Z" stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="21" cy="13.5" r="0.6" fill={color} />
  </svg>
);

const Header = ({ current, navigate }) => {
  const items = [
    { id: 'about', jp: 'About', en: 'about' },
    { id: 'concerts', jp: 'Concerts', en: 'concerts' },
    { id: 'news', jp: 'News', en: 'news' },
    { id: 'members', jp: 'Members', en: 'members' },
    { id: 'contact', jp: 'Contact', en: 'contact' },
  ];
  return (
    <header style={{
      background: 'rgba(250, 247, 242, 0.92)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--line)', padding: '24px 56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <button onClick={() => navigate('top')} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
        <img src="assets/logo-horizontal.png" alt="カメレオン吹奏楽団" style={{ height: 40, width: 'auto', display: 'block' }} />
      </button>
      <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {items.map((it) => {
          const active = current === it.id || (it.id === 'news' && current === 'news-detail');
          return (
            <button key={it.id} onClick={() => navigate(it.id)} style={{
              background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
              color: active ? 'var(--accent)' : 'var(--ink-2)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              fontSize: 13, letterSpacing: '0.1em', fontFamily: 'inherit',
            }}>
              <span>{it.jp}</span>
              <span className="eng" style={{ fontSize: 9, color: active ? 'var(--accent)' : 'var(--ink-mute)', textTransform: 'uppercase' }}>{it.en}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};

const Footer = ({ navigate }) => (
  <footer style={{ background: 'var(--brown-deep)', color: '#E8DDC9', padding: '88px 80px 36px', marginTop: 120 }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 64, marginBottom: 72 }}>
        <div>
          <img src="assets/logo-horizontal.png" alt="カメレオン吹奏楽団" style={{ height: 56, width: 'auto', marginBottom: 24, filter: 'brightness(1.05) saturate(0.92)' }} />
          <p style={{ fontSize: 12, color: 'rgba(232,221,201,0.7)', lineHeight: 2, margin: 0, maxWidth: 320 }}>
            大阪・池田を拠点に活動するアマチュア吹奏楽団。<br />色彩豊かな音楽を、丁寧にお届けします。
          </p>
        </div>
        {[
          { h: 'Menu', items: [['About', 'about'], ['News', 'news'], ['Members', 'members'], ['Concerts', 'concerts'], ['Contact', 'contact']] },
          { h: 'Concerts', items: [['第1回定期演奏会', 'concerts'], ['出演履歴', 'concerts'], ['次回出演予定', 'concerts']] },
          { h: 'Follow', items: [['X (Twitter)', null], ['Instagram', null], ['YouTube', null]] },
        ].map((col) => (
          <div key={col.h}>
            <div className="eng" style={{ fontSize: 11, color: 'var(--accent-soft)', textTransform: 'uppercase', marginBottom: 20 }}>{col.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.items.map(([label, target]) => (
                <li key={label}>
                  <button onClick={() => target && navigate(target)} style={{ background: 'transparent', border: 'none', color: 'rgba(232,221,201,0.85)', fontSize: 12, padding: 0, cursor: target ? 'pointer' : 'default', fontFamily: 'inherit' }}>{label}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ height: 1, background: 'rgba(232,221,201,0.18)', marginBottom: 24 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(232,221,201,0.5)' }}>
        <span className="mono">© 2026 Chameleon Wind Orchestra</span>
        <span className="mono">PRIVACY · TERMS</span>
      </div>
    </div>
  </footer>
);

const Placeholder = ({ ratio = '3/2', label = 'image', height }) => (
  <div style={{
    aspectRatio: height ? undefined : ratio, height,
    width: '100%',
    background: 'repeating-linear-gradient(135deg, var(--bg-soft) 0 8px, var(--line-soft) 8px 9px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--ink-mute)', fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em',
  }}>
    [ {label} ]
  </div>
);

const SectionHeading = ({ jp, en, num, align = 'left' }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 32, marginBottom: 48, justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
    {num && <span className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>{num}</span>}
    <div>
      <div className="eng" style={{ fontSize: 14, color: 'var(--ink-mute)', textTransform: 'uppercase', marginBottom: 12 }}>{en}</div>
      <h2 className="serif" style={{ fontSize: 40, margin: 0, fontWeight: 500, color: 'var(--ink)' }}>{jp}</h2>
    </div>
  </div>
);

const TextLink = ({ children, onClick, arrow = true }) => (
  <button onClick={onClick} style={{
    background: 'transparent', border: 'none', borderBottom: '1px solid var(--ink)',
    padding: '4px 0', cursor: 'pointer', fontFamily: 'inherit', color: 'var(--ink)',
    fontSize: 13, letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'baseline', gap: 10,
  }}>
    {children}
    {arrow && <span className="eng">→</span>}
  </button>
);

const Breadcrumb = ({ items, navigate }) => (
  <nav style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.1em' }}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        {it.target ? (
          <button onClick={() => navigate(it.target)} style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--ink-mute)', fontSize: 11, letterSpacing: '0.1em', fontFamily: 'inherit' }}>{it.label}</button>
        ) : (
          <span style={{ color: 'var(--ink)' }}>{it.label}</span>
        )}
        {i < items.length - 1 && <span className="eng">/</span>}
      </React.Fragment>
    ))}
  </nav>
);

const PageIntro = ({ en, jp, lead }) => (
  <section style={{ padding: '120px 80px 80px', borderBottom: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="eng" style={{ fontSize: 14, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 18 }}>{en}</div>
      <h1 className="serif" style={{ fontSize: 64, margin: 0, fontWeight: 500, lineHeight: 1.4, color: 'var(--ink)' }}>{jp}</h1>
      {lead && <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 2, marginTop: 36, maxWidth: 640 }}>{lead}</p>}
    </div>
  </section>
);

Object.assign(window, { Btn, ChameleonMark, Header, Footer, Placeholder, SectionHeading, TextLink, Breadcrumb, PageIntro });
