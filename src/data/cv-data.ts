import type { CvData } from '../types';

export const cvData: CvData = {
  name: "Adem Taleb",
  title: "Wirtschaftsuniversität Wien (WU)",
  subtitle: "B.Sc. Wirtschaft & Sozialwissenschaften · Exchange Student @ UIUC Gies College · Fall 2026",
  about: [
    "Wirtschaftsstudent an der WU Wien mit Studienzweig Internationale Betriebswirtschaft und Spezialisierung in Information Management Control. Aktueller Notenschnitt: 1,98.",
    "Ab Herbst 2026 als Exchange Student am Gies College of Business der University of Illinois at Urbana-Champaign mit Fokus auf Corporate Finance, Investment & Portfolio Management, Data Analytics und Logistics Management.",
    "Praktische Erfahrung in Projektfinanzierung, Marktanalyse und administrativem Projektcontrolling bei der Banque Nationale Agricole de Tunisie (BNA) sowie jahrelange Erfahrung in Führungs- und Transformationsprozessen im Einzelhandel bei SPAR. Zudem aktives Dolmetschen (Arabisch, Französisch, Deutsch) für soziale Einrichtungen.",
    "Bachelorarbeit als Event Study zu den Kapitalmarkteffekten des Digital Euro auf europäische Bankaktien. Zertifikate in Informatik (CS50, Harvard) und SAP S/4HANA."
  ],
  education: [
    {
      institution: "University of Illinois at Urbana-Champaign — Gies College of Business",
      degree: "Geplantes Auslandssemester",
      period: "08/2026 – 12/2026",
      description: "Austauschsemester im Rahmen des WU Exchange Programs.",
      highlights: [
        "Geplante Kurse: Corporate Finance, Investment and Portfolio Management, Intro to Data Analytics, Logistics Management"
      ]
    },
    {
      institution: "Wirtschaftsuniversität Wien (WU)",
      degree: "B.Sc. in Wirtschafts- und Sozialwissenschaften",
      period: "02/2024 – heute",
      description: "Studienzweig: Internationale Betriebswirtschaft · Spezialisierung: Information Management Control · Notenschnitt: 1,98",
      highlights: [
        "Bachelorarbeit: Market Reactions to Digital Euro Announcements: An Event Study of European Banking Stocks",
        "Absolvierte Kurse: Mikro- & Makroökonomie, IT-Governance (ITIL-COBIT), Controlling, Jahresabschluss"
      ]
    },
    {
      institution: "Vienna Business School – Schönborngasse",
      degree: "Handelsakademie (HAK) mit Schwerpunkt Digital Business",
      period: "09/2018 – 06/2023",
      description: "",
      highlights: [
        "Diplomarbeit: Sharing Economy – Analyse der 'Ökonomie des Teilens' bei ausgewählten Unternehmen und Initiativen"
      ]
    }
  ],
  experience: [
    {
      company: "Banque Nationale Agricole de Tunisie (BNA)",
      role: "Praktikant Projektfinanzierung & Marktanalyse — ELMED-Projekt",
      period: "06/2026 – 07/2026",
      description: "Geplantes Praktikum im Bereich Projektfinanzierung und Marktanalyse.",
      highlights: [
        "Eigenständige Identifikation und Aufbereitung marktrelevanter Daten zu Förderinstrumenten im tunesischen Sektor als Entscheidungsgrundlage",
        "Strukturierte, visuelle Aufbereitung komplexer Analyseergebnisse zur effizienten Abstimmung mit internationalen Projektpartnern",
        "Mitarbeit im administrativen Projektcontrolling und Reporting"
      ]
    },
    {
      company: "Tralalobe — Verein zur Förderung und Hilfe von Bedürftigen",
      role: "Dolmetscher (Arabisch, Französisch, Deutsch)",
      period: "04/2024 – heute",
      description: "Professionelles Dolmetschen zur Überbrückung sprachlicher Barrieren in administrativen und sozialen Kontexten.",
      highlights: [
        "Erfolgreiches Dolmetschen in über 100 Gesprächen",
        "Gewährleistung eines reibungslosen und kultursensiblen Informationsaustauschs",
        "Unterstützung für ein Team von 10 Sozialarbeitern und 2 Rechtsanwälten"
      ]
    },
    {
      company: "SPAR AG & SPAR DAKIC E.U.",
      role: "Einzelhandelskaufmann & Geschäftsführerassistent",
      period: "08/2018 – 09/2025",
      description: "",
      highlights: [
        "Aktive Beteiligung am Transformationsprojekt zweier Filialen (SPAR AG zu Franchisesystem) inkl. Implementierung neuer Standards",
        "Übernahme administrativer Tätigkeiten und effiziente Kommunikation mit internen Abteilungen sowie 10 Hauptlieferanten",
        "Entwicklung zielgerichteter Verkaufsstrategien zur Steigerung des Cross-Selling-Umsatzes um 15%"
      ]
    },
    {
      company: "Tralalobe — Verein zur Förderung und Hilfe von Bedürftigen",
      role: "Zivildiener",
      period: "08/2023 – 04/2024",
      description: "",
      highlights: [
        "Klientenbetreuung & Übersetzungen im Tagesbetrieb",
        "Organisation und Verteilung von Sachspenden im Wert von 2.000 EUR",
        "Administrative Unterstützung, Instandhaltung, Behördenwege"
      ]
    }
  ],
  projects: [
    {
      name: "Digital Euro — Event Study & Dashboard",
      description: "Bachelorarbeit zu den Kapitalmarkteffekten von Digital-Euro-Ankündigungen auf europäische Bankaktien inkl. interaktivem Dashboard mit CAR-Charts, Ereignis-Timeline und Methodik.",
      tags: ["Finance", "Event Study", "React", "Recharts", "Dashboard"]
    },
    {
      name: "CS50 — Introduction to Computer Science",
      description: "Harvard University (edX) Zertifikatskurs mit Fokus auf algorithmisches Denken und Programmierung in C, Python, SQL und JavaScript.",
      tags: ["C", "Python", "SQL", "JavaScript", "Algorithmen"]
    },
    {
      name: "Interactive CV",
      description: "Ein interaktiver, KI-gestützter Lebenslauf, gebaut mit React 19, TypeScript und Tailwind.",
      tags: ["React", "TypeScript", "Tailwind", "AI"]
    },
    {
      name: "Consulting Case: Profitability Analysis",
      description: "Python-gestützte Strategieanalyse einer europäischen Retail Bank. Segmentanalyse, Competitive Benchmarking, What-If-Szenarien und automatisierter HTML-Report.",
      tags: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Consulting"]
    }
  ],
  skills: [
    {
      category: "Finance & Controlling",
      items: ["Projektfinanzierung", "Marktanalyse", "Projektcontrolling", "Jahresabschluss", "IT-Governance (ITIL-COBIT)"]
    },
    {
      category: "Technisch",
      items: ["Linux", "AI-Tools (Ollama, Claude Code, OpenClaw)", "VPS-Management", "MS Excel (Advanced)", "SAP S/4HANA"]
    },
    {
      category: "Programmierung",
      items: ["Python", "SQL", "JavaScript", "C", "React/TypeScript"]
    },
    {
      category: "Soft Skills",
      items: ["Change-Management", "Interkulturelle Kommunikation", "Strategische Verhandlungsführung", "Dolmetschen"]
    }
  ],
  languages: [
    { language: "Deutsch", level: "Muttersprache" },
    { language: "Arabisch", level: "Muttersprache" },
    { language: "Englisch", level: "Verhandlungssicher" },
    { language: "Französisch", level: "Fortgeschritten" }
  ],
  contact: {
    email: "ademttaleb@gmail.com",
    linkedin: "https://www.linkedin.com/in/adem-taleb"
  }
};
