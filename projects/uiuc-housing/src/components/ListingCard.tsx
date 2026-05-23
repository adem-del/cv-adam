import type { ListingEntry } from '../types';

interface ListingCardProps {
  entry: ListingEntry;
  onClick: () => void;
}

const statusConfig: Record<string, { icon: string; badge: string; border: string }> = {
  promising: {
    icon: '🟢',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    border: 'hover:border-emerald-500/20',
  },
  filtered_out: {
    icon: '🔴',
    badge: 'bg-red-500/10 text-red-300 border-red-500/20',
    border: 'hover:border-red-500/20',
  },
  no_email: {
    icon: '⚪',
    badge: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    border: 'hover:border-gray-500/20',
  },
};

export function ListingCard({ entry, onClick }: ListingCardProps) {
  const config = statusConfig[entry.status];
  const title = entry.data.title;
  const platform = entry.data.platform;
  const location = 'location' in entry.data ? entry.data.location : undefined;
  const detailsPreview = 'details_preview' in entry.data ? entry.data.details_preview : undefined;
  const email = 'email' in entry.data ? entry.data.email : undefined;
  const url = 'url' in entry.data ? entry.data.url : undefined;
  const issues = 'issues' in entry.data ? entry.data.issues : undefined;

  return (
    <div
      onClick={onClick}
      className={`glass-card p-5 cursor-pointer ${config.border}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-sm font-semibold text-gray-100 line-clamp-2 leading-snug">
          {title}
        </h3>
        <span
          className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-md border ${config.badge}`}
        >
          {config.icon} {entry.status === 'filtered_out' ? 'Gefiltert' : entry.status === 'promising' ? 'Promising' : 'Keine Email'}
        </span>
      </div>

      {/* Meta: Platform + Location */}
      <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-white/5 rounded">{platform}</span>
        {location && <span className="px-2 py-0.5 bg-white/5 rounded">{location}</span>}
      </div>

      {/* Issues for filtered_out */}
      {issues && issues.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1">Issues:</p>
          <ul className="space-y-0.5">
            {issues.map((issue, i) => (
              <li key={i} className="text-xs text-red-300/80 flex items-start gap-1.5">
                <span className="mt-0.5 shrink-0">•</span>
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Details preview */}
      {detailsPreview && (
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {detailsPreview.slice(0, 150)}...
        </p>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-white/5">
        {email && (
          <a
            href={`mailto:${email}`}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </a>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Öffnen
          </a>
        )}
      </div>
    </div>
  );
}
