import { cvData } from '../data/cv-data';
import Section from './Section';

const COMPANY_LOGOS: Record<string, string> = {
  'Banque Nationale Agricole de Tunisie (BNA)': '🏦',
  'Tralalobe — Verein zur Förderung und Hilfe von Bedürftigen': '🤝',
  'SPAR AG & SPAR DAKIC E.U.': '🏪',
};

export default function Experience() {
  return (
    <Section id="experience" title="Erfahrung">
      <div className="grid gap-5">
        {cvData.experience.map((exp, i) => (
          <div
            key={i}
            className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="hidden sm:flex w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/15 items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                {COMPANY_LOGOS[exp.company] || '💼'}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-accent font-medium text-sm mb-3">{exp.role}</p>
                {exp.description && (
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{exp.description}</p>
                )}
                {exp.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="text-accent mt-1 shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
