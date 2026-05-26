import { ExternalLink } from 'lucide-react';
import { cvData } from '../data/cv-data';
import DirectionHoverCard from './DirectionHoverCard';
import Section from './Section';

export default function Projects() {
  return (
    <Section id="projects" title="Projekte" alt>
      <div className="grid gap-5 md:grid-cols-2">
        {cvData.projects.map((project, i) => {
          return (
            <DirectionHoverCard
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full"
              overlayContent={
                <span className="text-white font-medium flex items-center gap-2">
                  Zum Projekt
                  <ExternalLink className="w-4 h-4" />
                </span>
              }
            >
              <div className="glass-card rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                  {project.link && (
                    <span className="text-slate-400 shrink-0 ml-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
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
            </DirectionHoverCard>
          );
        })}
      </div>
    </Section>
  );
}
