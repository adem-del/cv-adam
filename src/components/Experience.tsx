import { Building2 } from 'lucide-react';
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
      <div className="space-y-0">
        {cvData.experience.map((exp, i) => (
          <div key={i} className="relative pl-10 pb-10 last:pb-0">
            {/* Timeline line */}
            {i < cvData.experience.length - 1 && (
              <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/15 to-transparent" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-[9px] w-[23px] h-[23px] rounded-full bg-white dark:bg-slate-900 border-[3px] border-accent flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>

            {/* Card */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-6 hover:-translate-y-0.5 hover:shadow-lg hover:border-accent/20 dark:hover:border-accent/20 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Left: company + period */}
                <div className="sm:w-1/3 shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{COMPANY_LOGOS[exp.company] || <Building2 className="w-4 h-4 text-accent" />}</span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mt-1">{exp.period}</p>
                </div>

                {/* Right: role + description + highlights */}
                <div className="flex-1 min-w-0">
                  <p className="text-accent font-semibold text-sm mb-2">{exp.role}</p>
                  {exp.description && (
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                  {exp.highlights.length > 0 && (
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span className="text-accent mt-1 shrink-0">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
