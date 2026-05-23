# UIUC Housing Dashboard

Ein interaktives Dashboard zur Verwaltung und Analyse gescrapter UIUC-Housing-Listings. Entwickelt für Adems Austauschsemester am Gies College of Business (Fall 2026).

## Features

- **Dashboard-Übersicht** — KPI-Karten: Total Listings, Promising, Gefiltert, Keine Email
- **Listing-Karten** — Alle Listings mit Status, Plattform, Standort, Details
- **Filter** — Nach Status filtern (Promising / Gefiltert / Keine Email / Alle)
- **Volltext-Suche** — Durchsucht Titel, Details, Plattform, Email, Location und Issues
- **Detail-Ansicht** — Klick auf Karte öffnet Modal mit voller Vorschau
- **Dark Mode** — Modernes Design mit Indigo-Akzenten und Glass-Card-Effekt

## Technologie

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (@tailwindcss/vite)
- Inter Font

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Daten

Die Daten stammen aus dem UIUC Housing Scraper (`uiuc_housing_report.json`) und werden automatisch in `src/data/` importiert.

## Projektstruktur

```
src/
├── data/report.json       # Gescrapte Housing-Daten
├── types.ts                # TypeScript-Typen
├── components/
│   ├── Dashboard.tsx       # Haupt-Dashboard
│   ├── KpiCards.tsx        # KPI-Übersichtskarten
│   ├── FilterBar.tsx       # Filter + Suche
│   ├── ListingCard.tsx     # Listing-Karte
│   └── ListingDetail.tsx   # Detail-Modal
├── App.tsx                 # App-Einstieg
├── main.tsx                # Entry Point
└── index.css               # Tailwind + Custom Styles
```
