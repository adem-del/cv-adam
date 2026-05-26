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
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-700 ${
        scrolled ? '' : 'bg-transparent'
      }`}
    >
      {/* Glass layer */}
      <div
        className={`glass-noise absolute inset-0 transition-all duration-700 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
          background: scrolled
            ? 'linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.85) 100%)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(99,102,241,0.08)' : '1px solid transparent',
          boxShadow: scrolled
            ? '0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(99,102,241,0.06)'
            : 'none',
          maskImage: scrolled
            ? 'linear-gradient(to bottom, black 0%, transparent 3px, black 12px)'
            : 'none',
          WebkitMaskImage: scrolled
            ? 'linear-gradient(to bottom, black 0%, transparent 3px, black 12px)'
            : 'none',
        }}
      >
        {/* Glass highlight — top edge reflection */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
          }}
        />
        {/* Subtle bottom glow */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-700 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.15) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* Dark mode glass overlay */}
      <div
        className={`glass-noise absolute inset-0 transition-all duration-700 hidden dark:block ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(180deg, rgba(2,6,23,0.75) 0%, rgba(2,6,23,0.88) 100%)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(99,102,241,0.06)' : '1px solid transparent',
          maskImage: scrolled
            ? 'linear-gradient(to bottom, black 0%, transparent 3px, black 12px)'
            : 'none',
          WebkitMaskImage: scrolled
            ? 'linear-gradient(to bottom, black 0%, transparent 3px, black 12px)'
            : 'none',
        }}
      />

      {/* Content (above glass) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    ? 'text-accent font-medium bg-accent/10 dark:bg-accent/15 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
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
          <div className="sm:hidden pb-3 mt-1 pt-2">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all ${
                  active === item.id
                    ? 'text-accent font-medium bg-accent/10 dark:bg-accent/15'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-white/5'
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
