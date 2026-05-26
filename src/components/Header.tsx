import { lazy, Suspense } from 'react';
import { cvData } from '../data/cv-data';

const GlassSphereContainer = lazy(() => import('./GlassSphere'));

function Badge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 dark:bg-accent/10 text-accent text-xs font-medium mb-8 tracking-wide relative overflow-hidden">
      <span className="relative z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        B.Sc. Wirtschaftsuniversität Wien
      </span>
      {/* Shimmer effect */}
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

export default function Header() {
  const { name, title, subtitle } = cvData;

  return (
    <header className="min-h-screen flex items-center relative hero-pattern overflow-hidden">
      {/* Glass spheres via Three.js */}
      <Suspense fallback={
        <>
          <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-accent-glow blur-3xl opacity-70" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent-glow blur-3xl opacity-40" />
        </>
      }>
        <GlassSphereContainer
          className="absolute inset-0 z-0"
          count={2}
        />
      </Suspense>

      {/* Progressive blur at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
          maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Badge with shimmer */}
          <Badge />

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-balance">
            <span className="text-slate-900 dark:text-white">{name}</span>
          </h1>

          {/* Title line */}
          <p className="mt-5 text-xl md:text-2xl font-medium text-accent">
            {title}
          </p>

          {/* Subtitle with availability */}
          <p className="mt-2 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            {subtitle}
          </p>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">1,98</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">Notenschnitt</p>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 self-end" />
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">4</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">Sprachen</p>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 self-end" />
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">Praxis seit 2018</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">Arbeitserfahrung</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="group px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-[0.97]"
            >
              Erfahrung entdecken
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-xl border-2 border-accent text-accent font-medium hover:bg-accent/5 transition-all active:scale-[0.97] flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Lebenslauf (PDF)
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-[0.97]"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
}
