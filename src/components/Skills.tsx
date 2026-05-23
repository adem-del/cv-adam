import { cvData } from '../data/cv-data';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cvData.skills.map((group, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className="px-3 py-1.5 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="mt-12">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
          Sprachen
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {cvData.languages.map((lang, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              <span className="font-medium text-slate-900 dark:text-white">{lang.language}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
