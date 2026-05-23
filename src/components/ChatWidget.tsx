import { useState, useRef, useEffect } from 'react';

const QUICK_PROMPTS = [
  "Was studierst du?",
  "Welche Praktika hattest du?",
  "Warum UIUC?",
  "Was ist deine Bachelorarbeit?",
  "Welche Sprachen sprichst du?"
];

function generateResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes('studier') || lower.includes('studium') || lower.includes('uni')) {
    return "Ich studiere Wirtschafts- und Sozialwissenschaften an der WU Wien (B.Sc.) mit Studienzweig Internationale Betriebswirtschaft und Spezialisierung in Information Management Control. Mein aktueller Notenschnitt ist 1,98.";
  }

  if (lower.includes('uiuc') || lower.includes('illinois') || lower.includes('austausch') || lower.includes('auslands')) {
    return "Ab August 2026 gehe ich für ein Austauschsemester an die UIUC — genauer gesagt ans Gies College of Business. Dort plane ich Kurse in Corporate Finance, Investment and Portfolio Management, Data Analytics und Logistics Management.";
  }

  if (lower.includes('praktikum') || lower.includes('erfahrung') || lower.includes('arbeit') || lower.includes('bna')) {
    return "Meine Praktikumserfahrung umfasst:\n• Banque Nationale Agricole de Tunisie (BNA) — Projektfinanzierung & Marktanalyse für das ELMED-Projekt (ab Juni 2026)\n• SPAR AG — 7 Jahre als Einzelhandelskaufmann & Geschäftsführerassistent, inklusive Filialtransformationsprojekt und Steigerung des Cross-Selling-Umsatzes um 15%\n• Tralalobe — Dolmetscher (Arabisch, Französisch, Deutsch) mit über 100 Gesprächen";
  }

  if (lower.includes('bachelor') || lower.includes('thesis') || lower.includes('arbeit') || lower.includes('digital euro') || lower.includes('event study')) {
    return "Meine Bachelorarbeit trägt den Titel 'Market Reactions to Digital Euro Announcements: An Event Study of European Banking Stocks'. Ich untersuche darin, wie europäische Bankaktien auf Ankündigungen zur digitalen Zentralbankwährung reagiert haben.";
  }

  if (lower.includes('sprach') || lower.includes('englisch') || lower.includes('französisch') || lower.includes('arabisch')) {
    return "Ich spreche vier Sprachen:\n• Deutsch — Muttersprache\n• Arabisch — Muttersprache\n• Englisch — Verhandlungssicher\n• Französisch — Fortgeschritten";
  }

  if (lower.includes('cs50') || lower.includes('harvard') || lower.includes('informatik') || lower.includes('programm')) {
    return "Ich hab den CS50-Kurs der Harvard University (edX) absolviert — eine Einführung in Computer Science mit Fokus auf algorithmisches Denken und Programmierung in C, Python, SQL und JavaScript.";
  }

  if (lower.includes('sap')) {
    return "Ich habe einen SAP-Zertifikatskurs abgeschlossen (Basics of Business ERP Systems) mit Einführung in SAP S/4HANA, FI (Finanzwesen), CO (Controlling) und Materialwirtschaft/SCM.";
  }

  if (lower.includes('spar') || lower.includes('einzelhandel')) {
    return "Bei SPAR war ich von 2018 bis 2025 als Einzelhandelskaufmann & Geschäftsführerassistent tätig. Ein Highlight war die aktive Beteiligung am Transformationsprojekt zweier SPAG-AG-Filialen zu einem Franchisesystem. Ich konnte den Cross-Selling-Umsatz um 15% steigern.";
  }

  if (lower.includes('hobby') || lower.includes('interesse') || lower.includes('freizeit')) {
    return "Neben Finance und Technologie interessiere ich mich für Fußball, Reisen, Sprachen lernen, Poker und Backgammon. Außerdem betreibe ich einen eigenen VPS und arbeite gerne mit AI-Tools wie Ollama und Claude Code.";
  }

  if (lower.includes('zertifikat') || lower.includes('weiterbildung')) {
    return "Ich habe folgende Zertifikate:\n• CS50's Introduction to Computer Science — Harvard University (edX)\n• SAP Certification Course — Basics of Business ERP Systems\nAußerdem kenne ich mich mit Linux, AI-Tools (Ollama, Claude Code, OpenClaw), VPS-Management und MS Excel (Advanced) aus.";
  }

  return "Gute Frage! Am besten schreibst du mir direkt eine E-Mail an ademttaleb@gmail.com — dann kann ich dir ausführlich antworten. Oder stöber einfach auf der Seite weiter!";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: '👋 Hey! Frag mich einfach, was du über Adem wissen willst.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true);

    setTimeout(() => {
      const reply = generateResponse(text);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
      setLoading(false);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent text-white shadow-lg hover:bg-accent-dark transition-all hover:scale-105 flex items-center justify-center"
        aria-label="Chat öffnen"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
            <p className="font-semibold text-slate-900 dark:text-white">Frag mich was, Jeff! 🤝</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">KI-gestützter Assistent</p>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-accent text-white rounded-br-sm'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-sm rounded-bl-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
            {QUICK_PROMPTS.map((q, i) => (
              <button
                key={i}
                onClick={() => setInput(q)}
                className="shrink-0 px-3 py-1.5 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Schreib mir..."
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="px-3 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
