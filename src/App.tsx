import { Mail, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Skip-to-content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-xl focus:shadow-lg focus:outline-none"
      >
        Zum Inhalt springen
      </a>

      <Navbar />
      <ThemeToggle />
      <Header />

      <main id="main-content">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg font-bold text-accent hover:text-accent-dark transition-colors tracking-tight"
            >
              AT<span className="text-accent-light">.</span>
            </button>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:ademttaleb@gmail.com"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all"
                aria-label="E-Mail"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/adem-taleb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </a>
              <a
                href="https://github.com/adem-del"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} Adem Taleb</span>
            <span className="mx-1">·</span>
            <span className="flex items-center gap-1">
              Gebaut mit <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Wien
            </span>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
