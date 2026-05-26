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
import MorphTransition from './components/PixelTransition';

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

      <MorphTransition />

      <main id="main-content">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-600 border-t border-slate-100 dark:border-slate-800">
        <p>© {new Date().getFullYear()} Adem Taleb · Gebaut mit React 19 ·{' '}
          <span className="text-slate-400 dark:text-slate-500">mit ❤️ in Wien</span>
        </p>
      </footer>
      <ChatWidget />
    </div>
  );
}
