import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Sample search data (replace with API call in production)
  const searchData = [
    'JavaScript web development',
    'React courses',
    'Node.js tutorials',
    'Frontend development',
    'Full-stack JavaScript',
    'Web design principles',
    'CSS frameworks',
    'TypeScript fundamentals'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 1) {
      const filtered = searchData.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  return (
    <div className="search-bar relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length > 1 && setShowSuggestions(true)}
          placeholder="Search for skills, courses, tutorials..."
          className="w-full bg-secondary-800 border border-secondary-700 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Search for skills"
        />
        <button 
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r-md transition-colors duration-200"
          aria-label="Submit search"
        >
          Search
        </button>
      </form>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-secondary-800 border border-secondary-700 rounded-md shadow-lg overflow-hidden">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li 
                key={index}
                className="px-4 py-2 text-white hover:bg-secondary-700 cursor-pointer transition-colors"
                onClick={() => selectSuggestion(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
