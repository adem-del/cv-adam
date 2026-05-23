import { cvData } from '../data/cv-data';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="Über mich">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {cvData.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
