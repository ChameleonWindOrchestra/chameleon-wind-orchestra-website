// Main app — page router and screen labels.

const PAGES = [
  { id: 'top', jp: 'TOP', en: 'home' },
  { id: 'about', jp: 'About', en: 'about' },
  { id: 'news', jp: 'News', en: 'news' },
  { id: 'news-detail', jp: 'News 詳細', en: 'article' },
  { id: 'members', jp: 'Members', en: 'members' },
  { id: 'concerts', jp: 'Concerts', en: 'concerts' },
  { id: 'contact', jp: 'Contact', en: 'contact' },
];

const PAGE_LABELS = {
  'top': '01 TOP',
  'about': '02 About',
  'news': '03 News',
  'news-detail': '04 News Detail',
  'members': '05 Members',
  'concerts': '06 Concerts',
  'contact': '07 Contact',
};

const App = () => {
  const [route, setRoute] = React.useState({ page: 'top', params: {} });
  const navigate = (page, params = {}) => {
    setRoute({ page, params });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const Page = ({ page, params }) => {
    switch (page) {
      case 'top': return <TopPage navigate={navigate} />;
      case 'about': return <AboutPage navigate={navigate} />;
      case 'news': return <NewsListPage navigate={navigate} />;
      case 'news-detail': return <NewsDetailPage navigate={navigate} params={params} />;
      case 'members': return <MembersPage navigate={navigate} />;
      case 'concerts': return <ConcertsPage navigate={navigate} />;
      case 'contact': return <ContactPage navigate={navigate} />;
      default: return <TopPage navigate={navigate} />;
    }
  };

  return (
    <>
      {/* Page rail (designer aid only) */}
      <aside className="rail">
        <div className="eng" style={{ fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 16, padding: '0 14px' }}>Pages</div>
        {PAGES.map((p) => (
          <button key={p.id} onClick={() => navigate(p.id)} className={`rail-item ${route.page === p.id ? 'active' : ''}`}>
            <span>{p.jp}</span>
            <span className="eng" style={{ fontSize: 9, opacity: 0.6 }}>{p.en}</span>
          </button>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid var(--line)', fontSize: 10, color: 'var(--ink-mute)', lineHeight: 1.8, padding: '24px 14px 0' }}>
          <div className="mono" style={{ marginBottom: 6 }}>MOCKUP v1</div>
          サイドバーは確認用。<br/>本番は表示されません。
        </div>
      </aside>

      <div className="stage" data-screen-label={PAGE_LABELS[route.page]}>
        <Header current={route.page} navigate={navigate} />
        <main>
          <Page page={route.page} params={route.params} />
        </main>
        <Footer navigate={navigate} />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
