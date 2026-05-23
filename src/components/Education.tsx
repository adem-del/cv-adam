import { cvData } from '../data/cv-data';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" title="Bildung" alt>
      <div className="space-y-0">
        {cvData.education.map((edu, i) => (
          <div key={i} className="relative pl-10 pb-12 last:pb-0">
            {/* Timeline line */}
            {i < cvData.education.length - 1 && (
              <div className="absolute left-[11px] top-5 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/15 to-transparent" />
            )}

            {/* Timeline dot */}
            <div className="timeline-dot absolute left-0 top-[6px] w-[23px] h-[23px] rounded-full bg-white dark:bg-slate-900 border-[3px] border-accent flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>

            {/* Content card */}
            <div className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {edu.institution}
                </h3>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-accent font-medium text-sm mb-2">{edu.degree}</p>
              {edu.description && (
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{edu.description}</p>
              )}
              {edu.highlights.length > 0 && (
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="text-accent mt-1 shrink-0">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
