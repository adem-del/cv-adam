import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { cvData } from '../data/cv-data';

const GlassSphereContainer = lazy(() => import('./GlassSphere'));

function Badge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 dark:bg-accent/10 text-accent text-xs font-medium mb-8 tracking-wide relative overflow-hidden">
      <span className="relative z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        B.Sc. Wirtschaftsuniversität Wien
      </span>
      <span
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(99,102,241,0.08), transparent)',
        }}
      />
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 min-w-[100px]">
      <span className="text-xl font-bold text-slate-900 dark:text-white">{number}</span>
      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 text-center leading-tight">{label}</span>
    </div>
  );
}

export default function Header() {
  const { name, title, subtitle } = cvData;
  const headerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="min-h-screen flex items-center relative hero-pattern overflow-hidden"
    >
      {/* Glass spheres via Three.js */}
      <Suspense
        fallback={
          <>
            <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-accent-glow blur-3xl opacity-70" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent-glow blur-3xl opacity-40" />
          </>
        }
      >
        <GlassSphereContainer className="absolute inset-0 z-0" count={2} />
      </Suspense>

      {/* Progressive blur at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitMaskImage:
            'linear-gradient(to top, black 40%, transparent 100%)',
          maskImage:
            'linear-gradient(to top, black 40%, transparent 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div
              className={`transition-all duration-700 ease-out ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <Badge />
            </div>

            {/* Name */}
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-balance transition-all duration-700 ease-out delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="text-slate-900 dark:text-white">{name}</span>
            </h1>

            {/* Title */}
            <p
              className={`mt-5 text-xl md:text-2xl font-medium text-accent transition-all duration-700 ease-out delay-150 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {title}
            </p>

            {/* Description */}
            <p
              className={`mt-3 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed transition-all duration-700 ease-out delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ease-out delay-250 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#experience"
                className="group px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-[0.97]"
              >
                Erfahrung entdecken
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-xl border-2 border-accent text-accent font-medium hover:bg-accent/5 transition-all active:scale-[0.97] flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Lebenslauf (PDF)
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-[0.97] flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Kontakt
              </a>
            </div>

            {/* Stats row */}
            <div
              className={`mt-10 flex flex-wrap gap-3 transition-all duration-700 ease-out delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <StatCard number="1,98" label="Notenschnitt" />
              <StatCard number="4" label="Sprachen" />
              <StatCard number="Fall 2026" label="Exchange @ UIUC" />
              <StatCard number="seit 2018" label="Arbeitserfahrung" />
            </div>
          </div>

          {/* Right decorative element */}
          <div
            className={`hidden lg:flex items-center justify-center w-64 h-64 shrink-0 transition-all duration-800 ease-out delay-400 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-48 h-48">
              {/* Decorative concentric circles */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-2 border-accent/15 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border-2 border-accent/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full bg-accent/5 backdrop-blur-sm flex items-center justify-center">
                <span className="text-3xl font-bold text-accent/80">
                  AT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs font-medium tracking-wider uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </header>
  );
}
