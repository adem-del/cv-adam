interface KpiCardsProps {
  total: number;
  promising: number;
  filteredOut: number;
  noEmail: number;
}

const cards = [
  { label: 'Total Listings', key: 'total', color: 'from-indigo-500/20 to-indigo-600/10', border: 'border-indigo-500/20' },
  { label: '🟢 Promising', key: 'promising', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/20' },
  { label: '🔴 Gefiltert', key: 'filteredOut', color: 'from-red-500/20 to-red-600/10', border: 'border-red-500/20' },
  { label: '⚪ Keine Email', key: 'noEmail', color: 'from-gray-500/20 to-gray-600/10', border: 'border-gray-500/20' },
] as const;

export function KpiCards({ total, promising, filteredOut, noEmail }: KpiCardsProps) {
  const values: Record<string, number> = { total, promising, filteredOut, noEmail };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.key}
          className={`glass-card p-5 border-l-4 ${card.border}`}
        >
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
            {card.label}
          </p>
          <p className="text-3xl font-bold text-white">
            {values[card.key]}
          </p>
        </div>
      ))}
    </div>
  );
}
