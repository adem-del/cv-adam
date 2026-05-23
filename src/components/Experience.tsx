import { cvData } from '../data/cv-data';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Erfahrung">
      <div className="space-y-10">
        {cvData.experience.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l-2 border-accent/30 dark:border-accent/20">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-accent" />
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {exp.company}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-accent font-medium">{exp.role}</p>
              {exp.highlights.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
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
