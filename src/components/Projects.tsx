import { ExternalLink, BarChart3, BookOpen, Monitor, TrendingUp } from 'lucide-react';
import { cvData } from '../data/cv-data';
import Section from './Section';

const PROJECT_ICONS: Record<string, typeof BarChart3> = {
  'Digital Euro — Event Study & Dashboard': BarChart3,
  'CS50 — Introduction to Computer Science': BookOpen,
  'Interactive CV': Monitor,
  'Consulting Case: Profitability Analysis': TrendingUp,
};

export default function Projects() {
  return (
    <Section id="projects" title="Projekte" alt>
      <div className="grid gap-6 md:grid-cols-2">
        {cvData.projects.map((project, i) => {
          const Icon = PROJECT_ICONS[project.name] || Monitor;
          return (
            <div
              key={i}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-accent/20 dark:hover:border-accent/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/[0.15] flex items-center justify-center mb-4 shrink-0">
                <Icon className="w-5 h-5 text-accent" />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-accent/8 dark:bg-accent/12 text-accent dark:text-accent-light border border-accent/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-dark transition-colors group"
                >
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  Zum Projekt
                </a>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
