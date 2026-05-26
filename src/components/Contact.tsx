import { Mail, MessageSquare } from 'lucide-react';
import { cvData } from '../data/cv-data';
import Section from './Section';

export default function Contact() {
  const { contact } = cvData;

  return (
    <Section id="contact" title="Kontakt" alt>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Ich freue mich über Nachrichten — ob zu beruflichen Möglichkeiten,
          Austausch oder einfach so. Schreib mir einfach!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-medium hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-[0.97] text-lg"
          >
            <Mail className="w-5 h-5" />
            {contact.email}
          </a>

          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-accent text-accent font-medium hover:bg-accent/5 transition-all active:scale-[0.97] text-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
              LinkedIn
            </a>
          )}
        </div>

        <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5" />
          Oder schreib mir direkt:{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-accent hover:underline"
          >
            {contact.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
