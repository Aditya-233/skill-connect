import { Suspense } from 'react';
import SearchResults from './SearchResults';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  return (
    <div className="min-h-screen bg-secondary-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">
          Search Results for: <span className="text-primary-400">{searchParams.q}</span>
        </h1>
        
        <Suspense fallback={<div className="text-gray-400">Loading results...</div>}>
          <SearchResults query={searchParams.q} />
        </Suspense>
      </div>
    </div>
  );
}
