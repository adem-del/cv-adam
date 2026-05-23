import type { ListingEntry } from '../types';

interface ListingDetailProps {
  entry: ListingEntry;
  onClose: () => void;
}

const statusLabels: Record<string, { icon: string; label: string; color: string }> = {
  promising: { icon: '🟢', label: 'Promising', color: 'text-emerald-300' },
  filtered_out: { icon: '🔴', label: 'Gefiltert', color: 'text-red-300' },
  no_email: { icon: '⚪', label: 'Keine Email', color: 'text-gray-400' },
};

export function ListingDetail({ entry, onClose }: ListingDetailProps) {
  const status = statusLabels[entry.status];
  const { data } = entry;
  const detailsPreview = 'details_preview' in data ? data.details_preview : undefined;
  const email = 'email' in data ? data.email : undefined;
  const url = 'url' in data ? data.url : undefined;
  const issues = 'issues' in data ? data.issues : undefined;
  const location = 'location' in data ? data.location : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card p-6 md:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
        >
          ✕
        </button>

        {/* Status badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-sm font-medium ${status.color}`}>
            {status.icon} {status.label}
          </span>
          <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">
            {data.platform}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-4 leading-snug">
          {data.title}
        </h2>

        {/* Location */}
        {location && (
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        )}

        {/* Issues */}
        {issues && issues.length > 0 && (
          <div className="mb-6 p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
            <h3 className="text-sm font-semibold text-red-300 mb-2">Issues</h3>
            <ul className="space-y-1">
              {issues.map((issue, i) => (
                <li key={i} className="text-sm text-red-200/80 flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">•</span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Details Preview */}
        {detailsPreview && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-2">
              Details
            </h3>
            <div className="text-sm text-gray-400 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto p-3 bg-white/3 rounded-xl border border-white/5">
              {detailsPreview}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Listing öffnen
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
