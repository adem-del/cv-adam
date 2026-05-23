import { useState, useMemo } from 'react';
import report from '../data/report.json';
import type { HousingReport, ListingEntry, ListingStatus } from '../types';
import { KpiCards } from './KpiCards';
import { FilterBar } from './FilterBar';
import { ListingCard } from './ListingCard';
import { ListingDetail } from './ListingDetail';

const data = report as HousingReport;

function getAllListings(): ListingEntry[] {
  const entries: ListingEntry[] = [];

  for (const item of data.promising) {
    entries.push({ status: 'promising', data: item });
  }
  for (const item of data.filtered_out) {
    entries.push({ status: 'filtered_out', data: item });
  }
  for (const item of data.no_email) {
    entries.push({ status: 'no_email', data: item as any });
  }

  return entries;
}

export function Dashboard() {
  const [statusFilter, setStatusFilter] = useState<ListingStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<ListingEntry | null>(null);

  const allListings = useMemo(() => getAllListings(), []);

  const filteredListings = useMemo(() => {
    return allListings.filter((entry) => {
      // Status filter
      if (statusFilter !== 'all' && entry.status !== statusFilter) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const title = entry.data.title.toLowerCase();
        const details = 'details_preview' in entry.data
          ? (entry.data.details_preview || '').toLowerCase()
          : '';
        const platform = entry.data.platform.toLowerCase();
        const email = 'email' in entry.data ? (entry.data.email || '').toLowerCase() : '';
        const location = 'location' in entry.data ? (entry.data.location || '').toLowerCase() : '';
        const issues = 'issues' in entry.data
          ? (entry.data.issues || []).join(' ').toLowerCase()
          : '';

        return (
          title.includes(q) ||
          details.includes(q) ||
          platform.includes(q) ||
          email.includes(q) ||
          location.includes(q) ||
          issues.includes(q)
        );
      }

      return true;
    });
  }, [allListings, statusFilter, searchQuery]);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">UIUC Housing</h1>
              <p className="text-sm text-gray-500">
                Dashboard · {new Date(data.timestamp).toLocaleDateString('de-DE', {
                  day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </header>

        {/* KPI Cards */}
        <KpiCards
          total={data.summary.total}
          promising={data.summary.pass}
          filteredOut={data.summary.fail}
          noEmail={data.summary.no_email}
        />

        {/* Filter + Search */}
        <FilterBar
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
        />

        {/* Listing Grid */}
        {filteredListings.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Keine Listings gefunden.</p>
            <p className="text-gray-600 text-sm mt-1">
              Versuche andere Filter oder einen anderen Suchbegriff.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4">
              {filteredListings.length} von {allListings.length} Listings angezeigt
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredListings.map((entry, index) => (
                <ListingCard
                  key={`${entry.status}-${index}`}
                  entry={entry}
                  onClick={() => setSelectedEntry(entry)}
                />
              ))}
            </div>
          </>
        )}

        {/* Recently contacted */}
        {data.summary.already_contacted > 0 && (
          <div className="mt-8 p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
            <p className="text-sm text-blue-300/80 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {data.summary.already_contacted} Listings wurden bereits kontaktiert (nicht im Dashboard).
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-gray-600 pb-8">
          <p>UIUC Housing Dashboard · Letzter Scrape: {data.timestamp}</p>
        </footer>
      </div>

      {/* Detail Modal */}
      {selectedEntry && (
        <ListingDetail
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </div>
  );
}
