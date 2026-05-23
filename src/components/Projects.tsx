import { cvData } from '../data/cv-data';
import Section from './Section';

export default function Projects() {
  return (
    <Section id="projects" title="Projekte" alt>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cvData.projects.map((project, i) => (
          <div
            key={i}
            className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group flex flex-col"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-accent/8 dark:bg-accent/12 text-accent dark:text-accent-light border border-accent/10"
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
