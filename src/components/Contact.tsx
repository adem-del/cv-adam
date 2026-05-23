import { cvData } from '../data/cv-data';
import Section from './Section';

export default function Contact() {
  const { contact } = cvData;

  return (
    <Section id="contact" title="Kontakt" alt>
      <div className="max-w-2xl">
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
          Ich freue mich über Nachrichten — ob zu beruflichen Möglichkeiten, Austausch oder einfach so.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${contact.email}`}
            className="glass-card rounded-xl p-5 flex items-center gap-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-medium">E-Mail</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 truncate">{contact.email}</p>
            </div>
          </a>

          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-medium">LinkedIn</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">/in/adem-taleb</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
