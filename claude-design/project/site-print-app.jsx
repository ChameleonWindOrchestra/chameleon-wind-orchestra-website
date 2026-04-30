// Print app — renders ALL pages stacked, each starting a new printed page.

const PRINT_PAGES = [
  { id: 'top',         label: '01 TOP',         Component: (nav) => <TopPage navigate={nav} /> },
  { id: 'about',       label: '02 About',       Component: (nav) => <AboutPage navigate={nav} /> },
  { id: 'concerts',    label: '03 Concerts',    Component: (nav) => <ConcertsPage navigate={nav} /> },
  { id: 'news',        label: '04 News',        Component: (nav) => <NewsListPage navigate={nav} /> },
  { id: 'news-detail', label: '05 News Detail', Component: (nav) => <NewsDetailPage navigate={nav} params={{ id: 'n-001' }} /> },
  { id: 'members',     label: '06 Members',     Component: (nav) => <MembersPage navigate={nav} /> },
  { id: 'contact',     label: '07 Contact',     Component: (nav) => <ContactPage navigate={nav} /> },
];

const PrintApp = () => {
  const noNav = () => {}; // navigate is a no-op in print
  return (
    <div className="print-root">
      {PRINT_PAGES.map((p, idx) => (
        <section key={p.id} className="print-page" data-page-id={p.id} style={{ pageBreakBefore: idx === 0 ? 'auto' : 'always', breakBefore: idx === 0 ? 'auto' : 'page' }}>
          <div className="print-page-label">— {p.label}</div>
          <Header current={p.id} navigate={noNav} />
          <main>
            {p.Component(noNav)}
          </main>
          <Footer navigate={noNav} />
        </section>
      ))}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<PrintApp />);

// Auto-print: wait for fonts + a settling delay before triggering the dialog.
(async () => {
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch (e) { /* ignore */ }
  // give React + images a beat to settle
  await new Promise((r) => setTimeout(r, 700));
  window.print();
})();
