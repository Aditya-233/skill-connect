'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: number;
  title: string;
  type: 'course' | 'tutorial' | 'story';
  description: string;
  url: string;
}

export default function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        // const data = await response.json();
        
        // Mock data for demonstration
        const mockResults: SearchResult[] = [
          {
            id: 1,
            title: 'JavaScript Web Development Bootcamp',
            type: 'course' as const,
            description: 'Comprehensive course covering modern JavaScript for web development',
            url: '/courses/javascript-bootcamp'
          },
          {
            id: 2,
            title: 'Building Web Apps with React',
            type: 'tutorial' as const,
            description: 'Step-by-step guide to building responsive web applications',
            url: '/tutorials/react-web-apps'
          },
          {
            id: 3,
            title: 'From Beginner to JavaScript Developer - Success Story',
            type: 'story' as const,
            description: 'How Sarah learned JavaScript and landed her first developer job',
            url: '/success-stories/sarah-javascript'
          }
        ].filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        );

        setResults(mockResults);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading) {
    return <div className="text-gray-400">Searching for "{query}"...</div>;
  }

  if (results.length === 0) {
    return (
      <div className="text-gray-400">
        No results found for "{query}". Try different keywords.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {results.map((result) => (
        <div key={result.id} className="bg-secondary-800 p-6 rounded-lg border border-secondary-700 hover:border-primary-500 transition-colors">
          <div className="flex items-start">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={result.url} className="hover:text-primary-400 transition-colors">
                  {result.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-3">{result.description}</p>
              <span className="inline-block bg-secondary-700 text-primary-400 text-xs px-2 py-1 rounded">
                {result.type}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
