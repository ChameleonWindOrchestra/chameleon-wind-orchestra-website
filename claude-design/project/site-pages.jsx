// All page content modules.

// ====== Sample data ======
const NEWS = [
  { id: 1, date: '2026.04.18', cat: 'CONCERT', title: '第1回定期演奏会のチケット情報を公開しました', body: '来る2026年6月20日(土)、池田市民文化会館アゼリアホール大ホールにて、当団初となる定期演奏会を開催いたします。入場無料・全席自由。整理券の配布を開始しました。' },
  { id: 2, date: '2026.03.30', cat: 'MEMBER', title: '新メンバー募集を開始（クラリネット・打楽器）', body: 'クラリネット2名、打楽器1名を募集しています。経験不問・年齢不問。週末練習中心、見学随時受付中です。' },
  { id: 3, date: '2026.02.14', cat: 'MEDIA', title: '池田市広報にて当団の活動が紹介されました', body: '池田市広報誌2026年3月号にて、当団の練習風景と団員インタビューが掲載されました。' },
  { id: 4, date: '2026.01.20', cat: 'CONCERT', title: '春のミニコンサート、無事終演いたしました', body: 'ご来場いただいた皆さま、ありがとうございました。次回は6月の定期演奏会となります。' },
  { id: 5, date: '2025.12.18', cat: 'NOTICE', title: '年末年始の練習日程について', body: '12/28〜1/4は練習をお休みします。新年の練習は1/11(土)からの予定です。' },
  { id: 6, date: '2025.11.05', cat: 'MEDIA', title: 'YouTube公式チャンネルを開設しました', body: '練習風景や演奏動画を順次公開してまいります。チャンネル登録をお願いいたします。' },
];

const MEMBERS = [
  { part: 'Conductor', jp: '指揮', name: '田中 蒼', kana: 'TANAKA Aoi', role: '音楽監督・指揮' },
  { part: 'Flute', jp: 'フルート', name: '伊藤 結衣', kana: 'ITO Yui' },
  { part: 'Clarinet', jp: 'クラリネット', name: '佐藤 葵', kana: 'SATO Aoi', role: 'パートリーダー' },
  { part: 'Saxophone', jp: 'サクソフォン', name: '中村 陽', kana: 'NAKAMURA Hinata' },
  { part: 'Trumpet', jp: 'トランペット', name: '鈴木 凛', kana: 'SUZUKI Rin', role: '首席' },
  { part: 'Horn', jp: 'ホルン', name: '小林 充', kana: 'KOBAYASHI Mitsuru' },
  { part: 'Trombone', jp: 'トロンボーン', name: '渡辺 涼', kana: 'WATANABE Ryo' },
  { part: 'Tuba', jp: 'チューバ', name: '吉田 大地', kana: 'YOSHIDA Daichi' },
  { part: 'Percussion', jp: 'パーカッション', name: '高橋 翼', kana: 'TAKAHASHI Tsubasa', role: 'パートリーダー' },
];

const CONCERTS = [
  { no: '01', date: '2026.06.20 SAT', open: '13:30', start: '14:00', title: '第1回 定期演奏会', sub: 'ユニバーサル・スタジオ・ジャパンの音楽', venue: '池田市民文化会館 アゼリアホール 大ホール', fee: '入場無料', status: '受付中' },
  { no: '02', date: '2026.10.12 SUN', open: '13:30', start: '14:00', title: '秋のチャリティーコンサート', sub: '映画音楽特集', venue: '豊中市立文化芸術センター', fee: '一般 1,500円', status: '準備中' },
  { no: '03', date: '2026.12.23 WED', open: '18:30', start: '19:00', title: 'クリスマス・ファミリーコンサート', sub: '親子で楽しむ吹奏楽', venue: '池田市民文化会館 中ホール', fee: '一般 1,000円 / 高校生以下無料', status: '準備中' },
  { no: '04', date: '2027.04.05 SUN', open: '—', start: '—', title: '第2回 定期演奏会', sub: 'プログラム調整中', venue: '未定', fee: '未定', status: '調整中' },
];

const PAST_CONCERTS = [
  { date: '2026.01.18', title: '春のミニコンサート', venue: '池田市民会館' },
  { date: '2025.10.05', title: '結成記念演奏会', venue: '池田市文化交流センター' },
];

// ====== Hero slideshow ======
const HERO_SLIDES = [
  { src: 'assets/hero-trumpet.png', label: 'trumpet · close-up', kind: 'photo' },
  { src: null, label: 'ensemble · 集合写真', kind: 'placeholder' },
  { src: null, label: 'rehearsal · 練習風景', kind: 'placeholder' },
];

const HeroSlideshow = () => {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {HERO_SLIDES.map((s, idx) => (
        <div key={idx} style={{ position: 'absolute', inset: 0, opacity: i === idx ? 1 : 0, transition: 'opacity 1.2s ease' }}>
          {s.kind === 'photo' ? (
            <img src={s.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Placeholder height="100%" label={s.label} />
          )}
        </div>
      ))}
      {/* dots */}
      <div style={{ position: 'absolute', bottom: 24, left: 24, display: 'flex', gap: 8, zIndex: 2 }}>
        {HERO_SLIDES.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} style={{
            width: i === idx ? 32 : 8, height: 2, background: i === idx ? 'var(--accent)' : 'rgba(255,255,255,0.6)',
            border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s',
          }} />
        ))}
      </div>
      <div className="mono" style={{ position: 'absolute', bottom: 24, right: 24, fontSize: 10, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.18em', zIndex: 2 }}>
        {String(i + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
      </div>
    </div>
  );
};

const SnsIcon = ({ kind }) => {
  const paths = {
    x: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
    youtube: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0 -3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">{paths[kind]}</svg>;
};

// ====== TOP ======
const TopPage = ({ navigate }) => (
  <>
    {/* 1. Hero — full-width main visual slideshow with concept overlay */}
    <section style={{ position: 'relative', width: '100%' }}>
      <div style={{ position: 'relative', width: '100%', height: 'min(80vh, 720px)', minHeight: 480, overflow: 'hidden' }}>
        <HeroSlideshow />
        {/* gradient scrim */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(31,26,20,0.65) 0%, rgba(31,26,20,0.35) 45%, rgba(31,26,20,0) 70%)', pointerEvents: 'none' }} />
        {/* Overlay copy */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 96px', pointerEvents: 'none' }}>
          <div style={{ maxWidth: 560, color: '#FAF7F2' }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--accent-soft)', marginBottom: 28, letterSpacing: '0.22em' }}>CHAMELEON WIND ORCHESTRA · EST. 2025</div>
            <h1 className="serif" style={{ fontSize: 'clamp(40px, 5.2vw, 72px)', lineHeight: 1.4, margin: 0, fontWeight: 500, letterSpacing: '0.05em', color: '#FFFEFB' }}>
              色彩豊かに、<br/>響きを<span style={{ color: 'var(--accent-soft)' }}>纏う</span>。
            </h1>
          </div>
        </div>
      </div>

      {/* Concept block — flows below the visual */}
      <div style={{ background: 'var(--bg)', padding: '88px 80px 96px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div className="eng" style={{ fontSize: 14, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.22em', paddingTop: 8 }}>
            — Concept
          </div>
          <div>
            <p style={{ fontSize: 17, color: 'var(--ink)', lineHeight: 2.1, margin: '0 0 24px', fontFamily: '"Noto Serif JP", serif', fontWeight: 500, letterSpacing: '0.04em' }}>
              大阪・池田を拠点に活動する、私たちカメレオン吹奏楽団。<br/>ひとりひとりの音色が重なり合い、ステージごとに新しい景色を描きます。
            </p>
            <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 2.1, margin: '0 0 36px' }}>
              「カメレオン」のように、曲ごと・場面ごとに音色を変えながら、聴いてくださる方の心に寄り添う演奏を目指しています。
            </p>
            <TextLink onClick={() => navigate('about')}>私たちについて</TextLink>
          </div>
        </div>
      </div>
    </section>

    {/* 2. Concert info — microCMS-driven */}
    <section style={{ padding: '140px 80px', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--line)' }}>
      <div className="eng" style={{ position: 'absolute', top: 60, right: -20, fontSize: 220, color: 'var(--line-soft)', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1, pointerEvents: 'none' }}>Concert</div>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <SectionHeading num="— 01" en="Concerts" jp="演奏会のご案内" />
        <div style={{ background: 'var(--brown-deep)', color: '#F5EFE6', padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
          <div style={{ padding: '64px 64px' }}>
            <div className="eng" style={{ fontSize: 14, color: 'var(--accent-soft)', textTransform: 'uppercase', marginBottom: 14 }}>1st Regular Concert</div>
            <h3 className="serif" style={{ fontSize: 44, lineHeight: 1.4, margin: 0, fontWeight: 500 }}>第1回<br/>定期演奏会</h3>
            <p style={{ fontSize: 14, color: 'rgba(245,239,230,0.7)', marginTop: 20, fontStyle: 'italic' }}>"ユニバーサル・スタジオ・ジャパンの音楽"</p>
            <div style={{ marginTop: 32, borderTop: '1px solid rgba(232,221,201,0.2)' }}>
              {[
                ['日時', '2026.06.20 (土)'],
                ['時間', '13:30 開場 / 14:00 開演'],
                ['会場', '池田市民文化会館 アゼリアホール'],
                ['入場料', '入場無料'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 20, padding: '16px 0', borderBottom: '1px solid rgba(232,221,201,0.2)' }}>
                  <span className="eng" style={{ fontSize: 11, color: 'var(--accent-soft)', textTransform: 'uppercase' }}>{k}</span>
                  <span style={{ fontSize: 14 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <Btn variant="primary" size="lg" icon onClick={() => navigate('concerts')}>詳細を見る</Btn>
            </div>
          </div>
          <img src="assets/flyer-1st.png" alt="第1回定期演奏会フライヤー" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
      </div>
    </section>

    {/* 3. Follow / SNS + YouTube embed */}
    <section style={{ padding: '120px 80px', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeading num="— 02" en="Follow" jp="活動の様子をお届け" />
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* YouTube */}
          <div>
            <div className="eng" style={{ fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 }}>Latest video</div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: 'var(--brown-deep)', overflow: 'hidden', border: '1px solid var(--line)' }}>
              <Placeholder height="100%" label="YouTube embed · 練習風景動画" />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="serif" style={{ fontSize: 14, color: 'var(--ink)' }}>第1回定期演奏会 リハーサル風景</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>2026.04.12</span>
            </div>
          </div>
          {/* SNS */}
          <div>
            <div className="eng" style={{ fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 }}>Social</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { kind: 'x', name: 'X (Twitter)', handle: '@chameleon_wind', desc: '日々の練習・お知らせ' },
                { kind: 'instagram', name: 'Instagram', handle: '@chameleon_wind_orchestra', desc: '写真・楽屋の様子' },
                { kind: 'youtube', name: 'YouTube', handle: 'Chameleon Wind Orchestra', desc: '演奏動画・リハーサル' },
              ].map((s) => (
                <a key={s.kind} href="#" onClick={(e) => e.preventDefault()} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--line)', padding: '20px 24px',
                  display: 'flex', alignItems: 'center', gap: 18, textDecoration: 'none', color: 'var(--ink)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  <span style={{ width: 40, height: 40, background: 'var(--ink)', color: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <SnsIcon kind={s.kind} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="serif" style={{ fontSize: 14, color: 'var(--ink)', marginBottom: 2 }}>{s.name}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.handle}</div>
                  </div>
                  <span className="eng" style={{ fontSize: 16, color: 'var(--accent)' }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 4. News */}
    <section style={{ padding: '120px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <SectionHeading num="— 03" en="News" jp="お知らせ" />
          <TextLink onClick={() => navigate('news')}>News 一覧</TextLink>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {NEWS.slice(0, 3).map((n) => (
            <article key={n.id} onClick={() => navigate('news-detail', { id: n.id })}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <Placeholder ratio="3/2" label="news photo" />
              <div style={{ padding: '24px 28px 32px' }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{n.date}</span>
                  <span style={{ fontSize: 10, padding: '3px 10px', border: '1px solid var(--accent)', color: 'var(--accent)', letterSpacing: '0.12em' }}>{n.cat}</span>
                </div>
                <h4 className="serif" style={{ fontSize: 16, margin: 0, fontWeight: 500, lineHeight: 1.7, color: 'var(--ink)' }}>{n.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 5. Members preview */}
    <section style={{ padding: '120px 80px', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <SectionHeading num="— 04" en="Members" jp="団員紹介" />
          <TextLink onClick={() => navigate('members')}>Members 一覧</TextLink>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {MEMBERS.slice(0, 4).map((m) => (
            <article key={m.name} style={{ background: 'var(--bg-card)', border: '1px solid var(--line)' }}>
              <Placeholder ratio="4/5" label="portrait" />
              <div style={{ padding: '20px 22px 24px' }}>
                <div className="eng" style={{ fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 10 }}>{m.part}</div>
                <div className="serif" style={{ fontSize: 18, color: 'var(--ink)', marginBottom: 4 }}>{m.name}</div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{m.kana}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 6. Contact CTA */}
    <section style={{ padding: '140px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'center' }}>
        <div>
          <div className="eng" style={{ fontSize: 14, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 18 }}>Contact</div>
          <h2 className="serif" style={{ fontSize: 48, margin: 0, fontWeight: 500, lineHeight: 1.5, color: 'var(--ink)' }}>
            お気軽に<br />お問い合わせください
          </h2>
        </div>
        <div>
          <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 2.1, marginBottom: 36 }}>
            演奏依頼、メディア取材、メンバー応募、その他ご質問など、どのようなご用件でもお気軽にどうぞ。<br/>通常2〜3営業日以内にご返信いたします。
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Btn variant="primary" size="lg" icon onClick={() => navigate('contact')}>お問い合わせフォーム</Btn>
            <Btn variant="secondary" size="lg" onClick={() => navigate('members')}>メンバー応募</Btn>
          </div>
        </div>
      </div>
    </section>
  </>
);

// ====== About ======
const AboutPage = () => (
  <>
    <PageIntro en="About" jp="私たちについて" lead="2025年秋、池田で結成。指揮者1名、団員約30名。「カメレオン」のように、曲ごとに音色を変えながら、聴いてくださる方の心に寄り添う演奏を目指しています。" />
    <section style={{ padding: '120px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, marginBottom: 120, alignItems: 'start' }}>
          <Placeholder ratio="4/5" label="ensemble" />
          <div>
            <SectionHeading num="— 01" en="Concept" jp="私たちが大切にしていること" />
            <p style={{ fontSize: 15, lineHeight: 2.2, color: 'var(--ink-2)', marginBottom: 32 }}>
              吹奏楽は、一人では成り立たない音楽です。木管・金管・打楽器、それぞれの音色が重なって、はじめて一つの景色が立ち現れます。
            </p>
            <p style={{ fontSize: 15, lineHeight: 2.2, color: 'var(--ink-2)', marginBottom: 32 }}>
              私たちは、技術の高さよりも「ひとつの音楽を、皆で作る喜び」を大切にしています。背景も世代も異なる仲間が集まり、それぞれの色を持ち寄って、毎週土曜日の練習場で混ざり合っていく。その過程そのものが、私たちの音楽です。
            </p>
            <p style={{ fontSize: 15, lineHeight: 2.2, color: 'var(--ink-2)' }}>
              聴いてくださる方の、その日その時の気分に寄り添えるように。曲ごとに、場面ごとに、自由に音色を変えていけるように——「カメレオン」と名乗りました。
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '48px 0', marginBottom: 120 }}>
          {[
            { n: '2025', l: 'Founded', s: '結成年' },
            { n: '30+', l: 'Members', s: '団員数' },
            { n: '8', l: 'Sections', s: 'パート' },
            { n: '池田', l: 'Based in', s: '活動拠点' },
          ].map((s, i) => (
            <div key={s.l} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid var(--line)' : 'none', padding: '0 24px' }}>
              <div className="serif" style={{ fontSize: 56, color: 'var(--accent)', fontWeight: 400, lineHeight: 1 }}>{s.n}</div>
              <div className="eng" style={{ fontSize: 11, color: 'var(--ink-mute)', textTransform: 'uppercase', marginTop: 14 }}>{s.l}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>{s.s}</div>
            </div>
          ))}
        </div>

        {/* History */}
        <SectionHeading num="— 02" en="History" jp="これまでのあゆみ" />
        <div style={{ maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          {[
            { y: '2025', m: '09', t: '結成', d: '池田市内の吹奏楽愛好家が集まり、有志10名で活動開始。' },
            { y: '2025', m: '10', t: '結成記念演奏会', d: '池田市文化交流センターにて、初の演奏披露。' },
            { y: '2026', m: '01', t: '春のミニコンサート', d: '池田市民会館にて。来場者100名超。' },
            { y: '2026', m: '06', t: '第1回 定期演奏会', d: '池田市民文化会館アゼリアホール大ホールにて開催予定。' },
          ].map((h, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, padding: '32px 0', borderTop: '1px solid var(--line)' }}>
              <div>
                <div className="eng" style={{ fontSize: 28, color: 'var(--accent)', fontWeight: 400 }}>{h.y}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>/ {h.m}</div>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 18, color: 'var(--ink)', marginBottom: 8 }}>{h.t}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 2 }}>{h.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

// ====== News list ======
const NewsListPage = ({ navigate }) => {
  const [filter, setFilter] = React.useState('ALL');
  const cats = ['ALL', 'CONCERT', 'MEMBER', 'MEDIA', 'NOTICE'];
  const filtered = filter === 'ALL' ? NEWS : NEWS.filter((n) => n.cat === filter);
  return (
    <>
      <PageIntro en="News" jp="お知らせ" lead="演奏会のご案内、メンバー募集、メディア掲載など、当団からのお知らせをまとめています。" />
      <section style={{ padding: '80px 80px 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Filters */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 48, borderBottom: '1px solid var(--line)' }}>
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} style={{
                padding: '14px 20px', background: 'transparent', border: 'none',
                borderBottom: filter === c ? '2px solid var(--accent)' : '2px solid transparent',
                color: filter === c ? 'var(--accent)' : 'var(--ink-3)',
                fontSize: 12, letterSpacing: '0.16em', cursor: 'pointer', fontFamily: 'inherit', marginBottom: -1,
              }}>{c}</button>
            ))}
          </div>
          {/* List */}
          <div>
            {filtered.map((n) => (
              <button key={n.id} onClick={() => navigate('news-detail', { id: n.id })}
                style={{ display: 'grid', gridTemplateColumns: '140px 110px 1fr 60px', gap: 32, alignItems: 'center', padding: '32px 0', borderTop: '1px solid var(--line)', background: 'transparent', border: 'none', borderTop: '1px solid var(--line)', width: '100%', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }}>
                <span className="mono" style={{ fontSize: 12, color: 'var(--ink-2)' }}>{n.date}</span>
                <span style={{ fontSize: 10, padding: '5px 12px', border: '1px solid var(--accent)', color: 'var(--accent)', letterSpacing: '0.12em', justifySelf: 'start' }}>{n.cat}</span>
                <span className="serif" style={{ fontSize: 16, color: 'var(--ink)' }}>{n.title}</span>
                <span className="eng" style={{ fontSize: 16, color: 'var(--accent)', justifySelf: 'end' }}>→</span>
              </button>
            ))}
            <div style={{ borderTop: '1px solid var(--line)' }} />
          </div>
          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 64, gap: 4, alignItems: 'center' }}>
            <button style={{ padding: '0 14px', height: 36, background: 'transparent', border: 'none', fontSize: 12, color: 'var(--ink-2)', cursor: 'pointer', letterSpacing: '0.1em', fontFamily: 'inherit' }}>← Prev</button>
            {[1, 2, 3].map((p) => (
              <button key={p} style={{ width: 36, height: 36, border: p === 1 ? '1px solid var(--accent)' : '1px solid transparent', background: 'transparent', color: p === 1 ? 'var(--accent)' : 'var(--ink-2)', fontFamily: '"Cormorant Garamond", serif', fontSize: 15, cursor: 'pointer' }}>{String(p).padStart(2, '0')}</button>
            ))}
            <button style={{ padding: '0 14px', height: 36, background: 'transparent', border: 'none', fontSize: 12, color: 'var(--ink-2)', cursor: 'pointer', letterSpacing: '0.1em', fontFamily: 'inherit' }}>Next →</button>
          </div>
        </div>
      </section>
    </>
  );
};

// ====== News detail ======
const NewsDetailPage = ({ navigate, params }) => {
  const id = params?.id || 1;
  const item = NEWS.find((n) => n.id === id) || NEWS[0];
  return (
    <article style={{ padding: '80px 80px 120px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Breadcrumb items={[{ label: 'Home', target: 'top' }, { label: 'News', target: 'news' }, { label: item.title }]} navigate={navigate} />
        </div>
        <div style={{ display: 'flex', gap: 14, marginBottom: 24 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--ink-mute)' }}>{item.date}</span>
          <span style={{ fontSize: 10, padding: '4px 12px', border: '1px solid var(--accent)', color: 'var(--accent)', letterSpacing: '0.12em' }}>{item.cat}</span>
        </div>
        <h1 className="serif" style={{ fontSize: 36, lineHeight: 1.6, margin: '0 0 56px', fontWeight: 500, color: 'var(--ink)' }}>{item.title}</h1>
        <Placeholder ratio="16/9" label="article photo" />
        <div style={{ marginTop: 56, fontSize: 15, lineHeight: 2.2, color: 'var(--ink-2)' }}>
          <p>{item.body}</p>
          <p style={{ marginTop: 24 }}>本件に関するお問い合わせは、当サイトのContactページよりお気軽にご連絡ください。皆さまのご来場・ご応募を、団員一同心よりお待ちしております。</p>
          <h3 className="serif" style={{ fontSize: 22, marginTop: 56, marginBottom: 20, color: 'var(--ink)' }}>開催概要</h3>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {[
              ['日時', '2026年6月20日(土) 13:30開場 / 14:00開演'],
              ['会場', '池田市民文化会館 アゼリアホール 大ホール'],
              ['入場料', '入場無料（整理券制）'],
              ['主催', 'カメレオン吹奏楽団'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, padding: '20px 0', borderBottom: '1px solid var(--line)' }}>
                <span className="serif" style={{ fontSize: 13, color: 'var(--ink-3)' }}>{k}</span>
                <span style={{ fontSize: 14, color: 'var(--ink)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between' }}>
          <TextLink onClick={() => navigate('news')}>← News 一覧へ</TextLink>
          <TextLink onClick={() => navigate('contact')}>お問い合わせ</TextLink>
        </div>
      </div>
    </article>
  );
};

// ====== Members ======
const MembersPage = () => {
  const groups = [
    { label: 'Conductor', members: MEMBERS.filter((m) => m.part === 'Conductor') },
    { label: 'Woodwind', members: MEMBERS.filter((m) => ['Flute', 'Clarinet', 'Saxophone'].includes(m.part)) },
    { label: 'Brass', members: MEMBERS.filter((m) => ['Trumpet', 'Horn', 'Trombone', 'Tuba'].includes(m.part)) },
    { label: 'Percussion', members: MEMBERS.filter((m) => m.part === 'Percussion') },
  ];
  return (
    <>
      <PageIntro en="Members" jp="団員紹介" lead="指揮者1名、団員約30名。10代から60代まで、年齢も背景もさまざまな仲間が集まっています。代表的なメンバーをご紹介します。" />
      <section style={{ padding: '80px 80px 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {groups.map((g, gi) => (
            <div key={g.label} style={{ marginBottom: gi < groups.length - 1 ? 96 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 32, paddingBottom: 16, borderBottom: '1px solid var(--line)' }}>
                <h2 className="eng" style={{ fontSize: 22, color: 'var(--accent)', textTransform: 'uppercase', margin: 0 }}>{g.label}</h2>
                <span className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{String(g.members.length).padStart(2, '0')} members</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
                {g.members.map((m) => (
                  <article key={m.name} style={{ background: 'var(--bg-card)', border: '1px solid var(--line)' }}>
                    <Placeholder ratio="4/5" label="portrait" />
                    <div style={{ padding: '20px 22px 24px' }}>
                      <div className="eng" style={{ fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 10 }}>{m.part}</div>
                      <div className="serif" style={{ fontSize: 18, color: 'var(--ink)', marginBottom: 4 }}>{m.name}</div>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{m.kana}</div>
                      {m.role && <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--line)', fontSize: 11, color: 'var(--ink-3)' }}>{m.role}</div>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 96, padding: '64px 56px', background: 'var(--bg-soft)', textAlign: 'center' }}>
            <div className="eng" style={{ fontSize: 14, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 }}>Recruiting</div>
            <h3 className="serif" style={{ fontSize: 28, margin: '0 0 20px', fontWeight: 500, color: 'var(--ink)' }}>新メンバー募集中</h3>
            <p style={{ fontSize: 14, lineHeight: 2, color: 'var(--ink-2)', maxWidth: 520, margin: '0 auto 28px' }}>
              クラリネット・打楽器を中心に、新メンバーを募集しています。経験不問・年齢不問。見学随時受付中です。
            </p>
            <Btn variant="primary" size="lg" icon>応募・お問い合わせ</Btn>
          </div>
        </div>
      </section>
    </>
  );
};

// ====== Concerts ======
const ConcertsPage = () => (
  <>
    <PageIntro en="Concerts" jp="演奏会情報" lead="今後の演奏会、過去の出演履歴をご案内しています。お近くの会場で演奏する機会がありましたら、ぜひ足をお運びください。" />
    <section style={{ padding: '80px 80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeading num="— 01" en="Featured" jp="次回公演" />
        <div style={{ background: 'var(--brown-deep)', color: '#F5EFE6', padding: '72px 80px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'center', marginBottom: 120 }}>
          <div>
            <div className="eng" style={{ fontSize: 14, color: 'var(--accent-soft)', textTransform: 'uppercase', marginBottom: 16 }}>1st Regular Concert</div>
            <h3 className="serif" style={{ fontSize: 52, lineHeight: 1.4, margin: 0, fontWeight: 500 }}>第1回<br/>定期演奏会</h3>
            <p style={{ fontSize: 14, color: 'rgba(245,239,230,0.8)', marginTop: 20, fontStyle: 'italic' }}>"ユニバーサル・スタジオ・ジャパンの音楽"</p>
            <div style={{ marginTop: 40, borderTop: '1px solid rgba(232,221,201,0.2)' }}>
              {[
                ['日時', '2026.06.20 (土)'],
                ['開場 / 開演', '13:30 / 14:00'],
                ['会場', '池田市民文化会館 アゼリアホール 大ホール'],
                ['入場料', '入場無料（整理券制）'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 24, padding: '18px 0', borderBottom: '1px solid rgba(232,221,201,0.2)' }}>
                  <span className="eng" style={{ fontSize: 12, color: 'var(--accent-soft)', textTransform: 'uppercase' }}>{k}</span>
                  <span style={{ fontSize: 14 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <Btn variant="primary" size="lg" icon>整理券を申し込む</Btn>
            </div>
          </div>
          <img src="assets/flyer-1st.png" alt="第1回定期演奏会フライヤー" style={{ width: '100%', height: 460, objectFit: 'contain', background: '#fff', padding: 8, display: 'block' }} />
        </div>

        <SectionHeading num="— 02" en="Upcoming" jp="今後のスケジュール" />
        <div style={{ marginBottom: 120 }}>
          {CONCERTS.map((c) => (
            <div key={c.no} style={{ display: 'grid', gridTemplateColumns: '80px 160px 1fr 1fr 120px', gap: 24, padding: '32px 0', borderTop: '1px solid var(--line)', alignItems: 'center' }}>
              <span className="eng" style={{ fontSize: 24, color: 'var(--accent)' }}>No.{c.no}</span>
              <div>
                <div className="mono" style={{ fontSize: 12, color: 'var(--ink-2)' }}>{c.date}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 4 }}>{c.open} OPEN / {c.start} START</div>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 17, color: 'var(--ink)' }}>{c.title}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 4, fontStyle: 'italic' }}>{c.sub}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{c.venue}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 4 }}>{c.fee}</div>
              </div>
              <span style={{ fontSize: 10, padding: '6px 14px', border: c.status === '受付中' ? '1px solid var(--accent)' : '1px solid var(--ink-mute)', color: c.status === '受付中' ? 'var(--accent)' : 'var(--ink-mute)', letterSpacing: '0.12em', justifySelf: 'end' }}>{c.status}</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>

        <SectionHeading num="— 03" en="Past" jp="過去の出演" />
        <div style={{ marginBottom: 80 }}>
          {PAST_CONCERTS.map((p) => (
            <div key={p.title} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 32, padding: '24px 0', borderTop: '1px solid var(--line)', alignItems: 'center' }}>
              <span className="mono" style={{ fontSize: 12, color: 'var(--ink-mute)' }}>{p.date}</span>
              <span className="serif" style={{ fontSize: 15, color: 'var(--ink)' }}>{p.title}</span>
              <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{p.venue}</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  </>
);

// ====== Contact ======
const ContactPage = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [kind, setKind] = React.useState('概要');
  const fieldStyle = { border: 'none', borderBottom: '1px solid var(--ink-mute)', padding: '12px 2px', background: 'transparent', fontSize: 14, fontFamily: 'inherit', color: 'var(--ink)', outline: 'none', resize: 'vertical', width: '100%' };

  if (submitted) {
    return (
      <section style={{ padding: '180px 80px', textAlign: 'center' }}>
        <div className="eng" style={{ fontSize: 14, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 18 }}>Thank you</div>
        <h1 className="serif" style={{ fontSize: 44, margin: '0 0 28px', fontWeight: 500 }}>お問い合わせを<br/>受け付けました</h1>
        <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 2, maxWidth: 480, margin: '0 auto 40px' }}>
          通常2〜3営業日以内にご返信いたします。<br/>しばらくお待ちください。
        </p>
        <Btn variant="ghost" size="md" icon onClick={() => setSubmitted(false)}>もう一度送る</Btn>
      </section>
    );
  }

  return (
    <>
      <PageIntro en="Contact" jp="お問い合わせ" lead="演奏依頼、メディア取材、メンバー応募、その他ご質問など、お気軽にお問い合わせください。" />
      <section style={{ padding: '80px 80px 120px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64 }}>
          {/* Info */}
          <aside>
            <div className="eng" style={{ fontSize: 12, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 }}>Direct</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 2.2, marginBottom: 32 }}>
              info@<br/>chameleon-wind.jp
            </div>
            <div className="eng" style={{ fontSize: 12, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 }}>Response</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 2 }}>
              通常2〜3営業日<br/>以内に返信いたします
            </div>
          </aside>
          {/* Form */}
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
              <div>
                <div className="serif" style={{ fontSize: 13, color: 'var(--ink)', marginBottom: 14 }}>お問い合わせ種別 <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', marginLeft: 8 }}>REQUIRED</span></div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['演奏依頼', 'メディア取材', 'メンバー応募', 'その他'].map((k) => (
                    <button type="button" key={k} onClick={() => setKind(k)} style={{
                      padding: '8px 16px', fontSize: 12, fontFamily: 'inherit', cursor: 'pointer', letterSpacing: '0.08em',
                      border: kind === k ? '1px solid var(--accent)' : '1px solid var(--line)',
                      background: kind === k ? 'var(--accent)' : 'transparent', color: kind === k ? '#fff' : 'var(--ink-2)',
                    }}>{k}</button>
                  ))}
                </div>
              </div>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 13 }} className="serif">お名前 <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', marginLeft: 8 }}>REQUIRED</span></span>
                <input style={fieldStyle} placeholder="山田 太郎" required />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 13 }} className="serif">メールアドレス <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', marginLeft: 8 }}>REQUIRED</span></span>
                <input type="email" style={fieldStyle} placeholder="example@email.com" required />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 13 }} className="serif">お問い合わせ内容 <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', marginLeft: 8 }}>REQUIRED</span></span>
                <textarea rows={5} style={fieldStyle} placeholder="ご記入ください…" required />
              </label>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 24, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                <span style={{ fontSize: 11, color: 'var(--ink-mute)' }}>※ 内容を確認して送信されます</span>
                <Btn variant="primary" size="lg" icon type="submit">送信する</Btn>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { TopPage, AboutPage, NewsListPage, NewsDetailPage, MembersPage, ConcertsPage, ContactPage });
