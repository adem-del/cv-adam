import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'Über mich' },
  { id: 'education', label: 'Bildung' },
  { id: 'experience', label: 'Erfahrung' },
  { id: 'projects', label: 'Projekte' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]!;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        scrolled
          ? 'bg-white/75 dark:bg-slate-950/75 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
          : 'bg-transparent'
      }`}
      style={
        scrolled
          ? {
              backdropFilter: 'blur(20px)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 5px, black 20px)',
              maskImage: 'linear-gradient(to bottom, black 0%, transparent 5px, black 20px)',
            }
          : {}
      }
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-bold text-accent hover:text-accent-dark transition-colors tracking-tight"
            aria-current={active === '' ? 'page' : undefined}
          >
            AT<span className="text-accent-light">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                  active === item.id
                    ? 'text-accent font-medium bg-accent/8 dark:bg-accent/12'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Navigation öffnen"
            aria-expanded={mobileOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="sm:hidden pb-3 border-t border-slate-200/50 dark:border-slate-800/50 mt-1 pt-2">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all ${
                  active === item.id
                    ? 'text-accent font-medium bg-accent/8 dark:bg-accent/12'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
