export interface DigitalEuroEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'ecb' | 'legislative' | 'market' | 'technical';
  importance: 'high' | 'medium' | 'low';
}

export const digitalEuroEvents: DigitalEuroEvent[] = [
  {
    id: 'e1',
    date: '2020-10-02',
    title: 'ECB Publishes Report on a Digital Euro',
    description: 'The ECB published a comprehensive report outlining the case for a digital euro, exploring design options and potential implications for the financial system.',
    category: 'ecb',
    importance: 'high',
  },
  {
    id: 'e2',
    date: '2021-07-14',
    title: 'ECB Launches Digital Euro Investigation Phase',
    description: 'The ECB Governing Council approved the launch of a 24-month investigation phase to explore the design and potential issuance of a digital euro.',
    category: 'ecb',
    importance: 'high',
  },
  {
    id: 'e3',
    date: '2022-02-28',
    title: 'ECB Publishes Design Progress Update',
    description: 'First major update on the investigation phase, including preliminary design choices and stakeholder consultation results.',
    category: 'ecb',
    importance: 'medium',
  },
  {
    id: 'e4',
    date: '2022-09-15',
    title: 'European Commission Proposes Digital Euro Framework',
    description: 'The European Commission published a legislative proposal establishing a legal framework for a potential digital euro, including privacy and financial stability provisions.',
    category: 'legislative',
    importance: 'high',
  },
  {
    id: 'e5',
    date: '2023-04-24',
    title: 'ECB Completes Investigation Phase',
    description: 'ECB concluded the 24-month investigation phase, confirming that a digital euro is feasible and presenting detailed design options.',
    category: 'ecb',
    importance: 'high',
  },
  {
    id: 'e6',
    date: '2023-06-28',
    title: 'ECB Digital Euro Prototype Presented',
    description: 'ECB presented a functional prototype of the digital euro infrastructure, demonstrating offline payment capabilities and privacy features.',
    category: 'technical',
    importance: 'medium',
  },
  {
    id: 'e7',
    date: '2023-10-18',
    title: 'ECB Announces Realization Phase',
    description: 'European Central Bank announced the start of the preparation/realization phase for the digital euro, moving beyond investigation into development.',
    category: 'ecb',
    importance: 'high',
  },
  {
    id: 'e8',
    date: '2024-03-14',
    title: 'European Parliament Advances Digital Euro Legislation',
    description: 'The European Parliament committees voted to advance the digital euro legislative framework, with amendments addressing privacy and programmability concerns.',
    category: 'legislative',
    importance: 'high',
  },
  {
    id: 'e9',
    date: '2024-06-27',
    title: 'ECB Releases Rulebook for Digital Euro',
    description: 'First draft of the digital euro rulebook published, detailing participant requirements, transaction limits, and interoperability standards.',
    category: 'technical',
    importance: 'medium',
  },
  {
    id: 'e10',
    date: '2025-01-29',
    title: 'Market Impact Report: Bank Disintermediation Concerns',
    description: 'Industry reports and academic analyses highlight potential disintermediation risks for commercial banks, causing significant market discussion.',
    category: 'market',
    importance: 'medium',
  },
  {
    id: 'e11',
    date: '2025-05-15',
    title: 'ECB Digital Euro Progress & Technical Specifications',
    description: 'Detailed technical specifications released including holding limits, offline functionality, and integration with existing payment infrastructure.',
    category: 'ecb',
    importance: 'high',
  },
  {
    id: 'e12',
    date: '2025-09-22',
    title: 'EU Council Adopts Digital Euro Regulation',
    description: 'The Council of the European Union formally adopted the regulatory framework for the digital euro, setting the stage for potential issuance.',
    category: 'legislative',
    importance: 'high',
  },
  {
    id: 'e13',
    date: '2026-02-10',
    title: 'ECB Confirms 2027 Launch Timeline',
    description: 'Governor Christine Lagarde confirmed the digital euro is on track for a 2027 launch, with the final decision expected in late 2026.',
    category: 'ecb',
    importance: 'high',
  },
];
