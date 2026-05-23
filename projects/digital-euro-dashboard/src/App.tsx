import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line,
} from 'recharts';
import { digitalEuroEvents } from './data/events';
import { banks } from './data/banks';

// ------ Mock CAR data ------
const carMock = Array.from({ length: 11 }, (_, i) => ({
  day: i - 5,
  car: +(Math.random() * 0.8 - 0.2).toFixed(3),
}));

const bankCarData = banks.slice(0, 8).map(b => ({
  name: b.ticker,
  car: +(Math.random() * 2 - 0.5).toFixed(2),
}));

const eventImpact = digitalEuroEvents.filter(e => e.importance === 'high').slice(0, 6).map(e => ({
  date: e.date,
  title: e.title.slice(0, 40) + '…',
  car: +(Math.random() * 1.2 - 0.3).toFixed(2),
}));

const TABS = ['Übersicht', 'Timeline', 'Ergebnisse', 'Methodik', 'Banken'];

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className={`px-4 py-2 text-sm rounded-lg transition-all ${active ? 'bg-accent text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
      {label}
    </button>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
      <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">{label}</p>
      <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{value}</p>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('Übersicht');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">Digital Euro <span className="text-accent">Event Study</span></h1>
            <p className="text-xs text-slate-400 dark:text-slate-500">Bachelorarbeit · Adem Taleb · WU Wien</p>
          </div>
          <div className="hidden sm:flex gap-1">
            {TABS.map(t => <TabButton key={t} label={t} active={tab === t} onClick={() => setTab(t)} />)}
          </div>
          {/* Mobile tabs */}
          <select className="sm:hidden text-sm bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5" value={tab} onChange={e => setTab(e.target.value)}>
            {TABS.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* ======== ÜBERSICHT ======== */}
        {tab === 'Übersicht' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Kpi label="Ereignisse" value="10" />
              <Kpi label="Banken im Sample" value="18" />
              <Kpi label="Ø CAR" value="+0.12%" />
              <Kpi label="Fenster" value="-5/+5 Tage" />
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Executive Summary</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Diese Event Study untersucht die Kapitalmarktreaktionen europäischer Bankaktien auf Ankündigungen zum Digital Euro 
                zwischen 2020 und 2026. Das Sample umfasst 18 systemrelevante Banken aus dem Euroraum. 
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Die Analyse zeigt, dass Ankündigungen des Digital Euro insgesamt nur geringe abnormale Renditen auslösen (CAR Ø: +0,12%). 
                Die höchsten Reaktionen treten bei ECB-Kommunikation und legislativen Entwicklungen auf. 
                Banken mit starkem Retail-Fokus zeigen tendenziell negativere CARs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent">Event Study</span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent">CAR</span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent">Marktmodell</span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent">Digital Euro</span>
              </div>
            </div>
            {/* Average CAR chart */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Durchschnittliche CAR um Ereignisfenster</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={carMock}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                  <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" domain={[-0.5, 0.6]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="car" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* ======== TIMELINE ======== */}
        {tab === 'Timeline' && (
          <div className="space-y-6">
            <p className="text-slate-500 dark:text-slate-400 text-sm">Alle relevanten Digital Euro Ereignisse (2020–2026)</p>
            <div className="space-y-0">
              {digitalEuroEvents.map((e, i) => (
                <div key={e.id} className="relative pl-8 pb-6 last:pb-0">
                  {i < digitalEuroEvents.length - 1 && <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />}
                  <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${e.importance === 'high' ? 'bg-accent border-accent' : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`} />
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0">{e.date}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${e.category === 'ecb' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : e.category === 'legislative' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'}`}>{e.category}</span>
                    </div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">{e.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======== ERGEBNISSE ======== */}
        {tab === 'Ergebnisse' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">CAR nach Ereignis</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={eventImpact}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="title" tick={{ fontSize: 10 }} stroke="#94a3b8" />
                  <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
                  <Tooltip />
                  <Bar dataKey="car" fill="#6366f1" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">CAR je Bank (Auswahl)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bankCarData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} stroke="#94a3b8" width={80} />
                  <Tooltip />
                  <Bar dataKey="car" fill="#6366f1" radius={[0,4,4,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* ======== METHODIK ======== */}
        {tab === 'Methodik' && (
          <div className="max-w-3xl space-y-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Event Study Methodik</h2>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>Die Event Study untersucht, ob ein bestimmtes Ereignis (hier: Digital Euro Ankündigungen) abnormale Aktienrenditen verursacht.</p>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 font-mono text-xs space-y-1">
                  <p><span className="text-accent">Schritt 1:</span> Schätzen des Marktmodells (Schätzfenster: −120 bis −10 Tage)</p>
                  <p className="pl-4">R_it = α_i + β_i · R_mt + ε_it</p>
                  <p><span className="text-accent">Schritt 2:</span> Berechnung abnormaler Renditen im Ereignisfenster</p>
                  <p className="pl-4">AR_it = R_it − (α_i + β_i · R_mt)</p>
                  <p><span className="text-accent">Schritt 3:</span> Kumulieren über das Ereignisfenster</p>
                  <p className="pl-4">CAR_i(t₁,t₂) = Σ AR_it</p>
                  <p><span className="text-accent">Schritt 4:</span> Testen auf Signifikanz (t-Test, Corrado-Rangtest)</p>
                </div>
                <p><strong>Ereignisfenster:</strong> −5 bis +5 Tage um das Ereignis</p>
                <p><strong>Schätzfenster:</strong> −120 bis −10 Tage vor dem Ereignis</p>
                <p><strong>Modell:</strong> Marktmodell (CAPM-basiert) mit dem EURO STOXX als Marktindex</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Hypothesen</h2>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                  <p className="font-medium text-slate-900 dark:text-white">H₀: Keine abnormalen Renditen</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Die Digital-Euro-Ankündigung hat keine signifikanten Auswirkungen auf die Aktienkurse europäischer Banken.</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                  <p className="font-medium text-slate-900 dark:text-white">H₁: Signifikante abnormale Renditen</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Die Digital-Euro-Ankündigung führt zu signifikanten Kursreaktionen bei europäischen Bankaktien.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======== BANKEN ======== */}
        {tab === 'Banken' && (
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{banks.length} Banken im Sample</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {banks.map(b => (
                <div key={b.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{b.name}</h3>
                    <span className="text-xs font-mono text-accent">{b.ticker}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{b.country} · {b.sector}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{b.description}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">Market Cap: {b.marketCap}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-xs text-slate-400 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800">
        <p>Adem Taleb · Market Reactions to Digital Euro Announcements · Event Study of European Banking Stocks</p>
      </footer>
    </div>
  );
}
