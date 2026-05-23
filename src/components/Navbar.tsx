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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Find active section
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]!;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
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
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
          >
            AT
          </button>
          <div className="hidden sm:flex gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  active === item.id
                    ? 'text-accent font-medium bg-accent/10'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
