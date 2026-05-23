import { cvData } from '../data/cv-data';
import Section from './Section';

export default function Projects() {
  return (
    <Section id="projects" title="Projekte" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid gap-6 md:grid-cols-2">
        {cvData.projects.map((project, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {project.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
