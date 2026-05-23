import { cvData } from '../data/cv-data';

export default function Header() {
  const { name, title, subtitle } = cvData;

  return (
    <header className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
              {name}
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-accent font-medium">
              {title}
            </p>
            <p className="mt-2 text-base md:text-lg text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#about"
              className="px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
            >
              Über mich
            </a>
            <a
              href="#experience"
              className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Erfahrung
            </a>
            <a
              href={`mailto:${cvData.contact.email}`}
              className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
}
