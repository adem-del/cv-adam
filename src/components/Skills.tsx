import { BarChart3, Wrench, Code2, Brain, Globe, Award, Laptop } from 'lucide-react';
import { cvData } from '../data/cv-data';
import Section from './Section';

const CATEGORY_ICONS: Record<string, typeof BarChart3> = {
  'Finance & Controlling': BarChart3,
  'Technisch': Wrench,
  'Programmierung': Code2,
  'Tools': Laptop,
  'Soft Skills': Brain,
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      {/* Category cards — 3x2 grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cvData.skills.map((group, i) => {
          const Icon = CATEGORY_ICONS[group.category] || Code2;
          return (
            <div
              key={i}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-5 hover:-translate-y-1 hover:shadow-md hover:border-accent/20 dark:hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 dark:bg-accent/[0.15] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 text-[12px] rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50 hover:bg-accent/10 hover:border-accent/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Languages */}
      <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Sprachen</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {cvData.languages.map((lang, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm rounded-full bg-accent/8 dark:bg-accent/12 text-accent dark:text-accent-light border border-accent/10 font-medium"
            >
              {lang.language}{' '}
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                · {lang.level}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="mt-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Zertifikate</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 text-sm rounded-full bg-amber-50 dark:bg-amber-900/15 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/30 font-medium">
            🎓 CS50 Harvard — Introduction to Computer Science
          </span>
          <span className="px-3 py-1.5 text-sm rounded-full bg-sky-50 dark:bg-sky-900/15 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/30 font-medium">
            📘 SAP S/4HANA — Basics of Business ERP Systems
          </span>
        </div>
      </div>
    </Section>
  );
}
