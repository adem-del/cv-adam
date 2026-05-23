import type { ListingStatus } from '../types';

interface FilterBarProps {
  statusFilter: ListingStatus | 'all';
  onStatusFilterChange: (status: ListingStatus | 'all') => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

const filters: { value: ListingStatus | 'all'; label: string; color: string }[] = [
  { value: 'all', label: 'Alle', color: 'text-white' },
  { value: 'promising', label: '🟢 Promising', color: 'text-emerald-400' },
  { value: 'filtered_out', label: '🔴 Gefiltert', color: 'text-red-400' },
  { value: 'no_email', label: '⚪ Keine Email', color: 'text-gray-400' },
];

export function FilterBar({
  statusFilter,
  onStatusFilterChange,
  searchQuery,
  onSearchQueryChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
      {/* Search */}
      <div className="relative w-full sm:w-80">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Suche nach Titel oder Details..."
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all"
        />
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onStatusFilterChange(f.value)}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              statusFilter === f.value
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-gray-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
