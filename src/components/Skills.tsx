import {
  BarChart3,
  Wrench,
  Code2,
  Brain,
  Globe,
  Lightbulb,
} from 'lucide-react';
import { cvData } from '../data/cv-data';
import Section from './Section';

const CATEGORY_ICONS: Record<string, typeof BarChart3> = {
  'Finance & Controlling': BarChart3,
  'Technisch': Wrench,
  'Programmierung': Code2,
  'Soft Skills': Brain,
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      {/* Technical Skills */}
      <div className="grid gap-6 sm:grid-cols-2">
        {cvData.skills.map((group, i) => {
          const Icon = CATEGORY_ICONS[group.category] || Code2;
          return (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-4 h-4 text-accent" />
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="skill-tag px-3 py-1.5 text-sm rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50 hover:shadow-sm hover:shadow-accent/10"
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
      <div className="mt-8 glass-card rounded-xl p-6">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-accent" /> Sprachen
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cvData.languages.map((lang, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50"
            >
              <span className="font-medium text-slate-900 dark:text-white text-sm">{lang.language}</span>
              <span className="text-xs text-slate-500 dark:text-slate-500">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications note */}
      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1.5">
          <Lightbulb className="w-3.5 h-3.5 text-accent" />
          Zertifikate: <span className="text-slate-700 dark:text-slate-300">CS50 Harvard · SAP S/4HANA</span>
        </p>
      </div>
    </Section>
  );
}
