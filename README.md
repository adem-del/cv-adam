# cv-adam

Interaktiver CV von **Adem Taleb** — React 19, TypeScript, Tailwind v4.

## Features

- 📄 **Vollständiger Lebenslauf** — Studium, Erfahrung, Projekte, Skills
- 🌗 **Dark Mode** — per Klick umschaltbar
- 💬 **Chat Widget** — KI-Assistent beantwortet Fragen über Adem
- 📱 **Responsive** — läuft auf Handy, Tablet, Desktop

## Quick Start

```bash
npm install
npm run dev
```

## Deploy (kostenlos)

### 1. GitHub

Repo auf [github.com/new](https://github.com/new) anlegen (Name: `cv-adam`, public), dann:

```bash
git remote add origin https://github.com/DEIN-USERNAME/cv-adam.git
git branch -M main
git push -u origin main
```

### 2. Vercel (empfohlen)

1. Auf [vercel.com/new](https://vercel.com/new) mit GitHub anmelden
2. `cv-adam` Repository importieren
3. Framework: **Vite** — Build: `npm run build` — Output: `dist`
4. Fertig → `https://cv-adam.vercel.app`

### 3. Oder GitHub Pages

```bash
npm run build
# dist/ Ordner als GitHub Pages Source setzen
```

## Projekt-Struktur

```
src/
├── App.tsx              # Root-Komponente
├── main.tsx             # Einstiegspunkt
├── index.css            # Tailwind + Theme
├── data/cv-data.ts      # Deine CV-Daten
├── types/index.ts       # TypeScript-Typen
└── components/
    ├── Header.tsx       # Hero-Section
    ├── About.tsx        # Über mich
    ├── Education.tsx    # Bildung
    ├── Experience.tsx   # Erfahrung
    ├── Projects.tsx     # Projekte
    ├── Skills.tsx       # Skills + Sprachen
    ├── Contact.tsx      # Kontakt
    ├── Navbar.tsx       # Navigation
    ├── ThemeToggle.tsx  # Dark Mode Switch
    ├── Section.tsx      # Fade-In Wrapper
    └── ChatWidget.tsx   # Floating Chat
```

## Daten anpassen

Einfach `src/data/cv-data.ts` editieren — alle Inhalte (Studium, Erfahrung, Skills, etc.) sind dort zentral.

## Lizenz

MIT
