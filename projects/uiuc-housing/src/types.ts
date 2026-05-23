export interface PromisingListing {
  platform: string;
  title: string;
  email: string;
  url: string;
  location: string;
  details_preview: string;
}

export interface FilteredOutListing {
  platform: string;
  title: string;
  email: string;
  issues: string[];
  location: string;
  details_preview: string;
}

export interface NoEmailListing {
  platform: string;
  title: string;
  url: string;
  location?: string;
}

export interface Summary {
  total: number;
  pass: number;
  fail: number;
  no_email: number;
  already_contacted: number;
}

export interface HousingReport {
  timestamp: string;
  summary: Summary;
  promising: PromisingListing[];
  filtered_out: FilteredOutListing[];
  no_email: NoEmailListing[];
}

export type ListingStatus = 'promising' | 'filtered_out' | 'no_email';

export type ListingEntry =
  | { status: 'promising'; data: PromisingListing }
  | { status: 'filtered_out'; data: FilteredOutListing }
  | { status: 'no_email'; data: NoEmailListing };
