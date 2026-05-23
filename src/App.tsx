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
      <Navbar />
      <ThemeToggle />
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-slate-400 dark:text-slate-600 border-t border-slate-100 dark:border-slate-800">
        <p>© {new Date().getFullYear()} Adem Taleb · Gebaut mit React 19</p>
      </footer>
      <ChatWidget />
    </div>
  );
}
