'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for skills
const skillsList = [
  {
    id: 1,
    title: 'Piano Lessons',
    category: 'Music',
    description: 'Experienced piano teacher offering lessons for beginners to intermediate players.',
    price: '$30/hour',
    location: 'Downtown',
    user: {
      name: 'Sarah Miller',
      rating: 4.8,
      reviews: 23
    }
  },
  {
    id: 2,
    title: 'Handyman Services',
    category: 'Home Improvement',
    description: 'General repairs, furniture assembly, and minor electrical work.',
    price: '$25/hour',
    location: 'Westside',
    user: {
      name: 'Michael Johnson',
      rating: 4.9,
      reviews: 47
    }
  },
  {
    id: 3,
    title: 'Dog Walking',
    category: 'Pets',
    description: 'Available for daily walks and pet sitting. Experienced with all dog breeds and sizes.',
    price: '$15/walk',
    location: 'North Hills',
    user: {
      name: 'Emma Wilson',
      rating: 4.7,
      reviews: 18
    }
  },
  {
    id: 4,
    title: 'Math Tutoring',
    category: 'Education',
    description: 'Math tutor specializing in algebra, calculus, and statistics for high school and college students.',
    price: '$40/hour',
    location: 'University Area',
    user: {
      name: 'David Chen',
      rating: 5.0,
      reviews: 31
    }
  },
  {
    id: 5,
    title: 'Web Development',
    category: 'Technology',
    description: 'Front-end development, WordPress customization, and general website troubleshooting.',
    price: '$50/hour',
    location: 'Tech District',
    user: {
      name: 'Alex Rivera',
      rating: 4.6,
      reviews: 14
    }
  },
  {
    id: 6,
    title: 'Garden Maintenance',
    category: 'Outdoors',
    description: 'Garden cleanup, planting, and maintenance. Bringing gardens back to life!',
    price: '$35/hour',
    location: 'Green Valley',
    user: {
      name: 'Olivia Gardner',
      rating: 4.9,
      reviews: 27
    }
  }
];

// Filter categories
const categories = [
  'All Categories',
  'Music',
  'Home Improvement',
  'Pets',
  'Education',
  'Technology',
  'Outdoors',
  'Cooking',
  'Arts & Crafts',
  'Health & Fitness'
];

export default function SkillsPage() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPrice, setSelectedPrice] = useState('Any Price');
  const [selectedDistance, setSelectedDistance] = useState('Within 5 miles');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('Relevance');

  // Filter the skills list based on selected filters
  const filteredSkills = skillsList.filter(skill => {
    // Category filter
    if (selectedCategory !== 'All Categories' && skill.category !== selectedCategory) {
      return false;
    }
    
    // Price filter (simplified for demo purposes)
    if (selectedPrice === 'Free' && skill.price !== 'Free') {
      return false;
    } else if (selectedPrice === 'Under $20' && parseInt(skill.price.replace(/\D/g, '')) >= 20) {
      return false;
    } else if (selectedPrice === '$20 - $50' && 
              (parseInt(skill.price.replace(/\D/g, '')) < 20 || parseInt(skill.price.replace(/\D/g, '')) > 50)) {
      return false;
    } else if (selectedPrice === '$50+' && parseInt(skill.price.replace(/\D/g, '')) < 50) {
      return false;
    }
    
    // Search query filter
    if (searchQuery && !skill.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !skill.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !skill.category.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Sort the filtered skills
  const sortedSkills = [...filteredSkills].sort((a, b) => {
    if (sortOption === 'Newest') {
      return -1; // For demo purposes, assuming they're already in newest order
    } else if (sortOption === 'Price: Low to High') {
      return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
    } else if (sortOption === 'Price: High to Low') {
      return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
    } else if (sortOption === 'Rating') {
      return b.user.rating - a.user.rating;
    }
    return 0; // Default for 'Relevance'
  });

  // Handler for applying filters
  const handleApplyFilters = () => {
    // This function would be needed in a real app, but for our demo
    // the filtering happens automatically with state changes
    console.log('Filters applied');
  };
  
  return (
    <div className="min-h-screen bg-secondary-950 text-white">
      {/* Navigation */}
      <nav className="bg-secondary-900 border-b border-secondary-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="mr-2 rounded-lg overflow-hidden">
                  <Image 
                    src="/logo.svg" 
                    alt="SkillConnect Logo" 
                    width={36} 
                    height={36}
                  />
                </div>
                <span className="text-2xl font-bold text-white">SkillConnect</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/skills" className="text-primary-400 font-medium">
                Browse Skills
              </Link>
              <Link href="/requests" className="text-gray-300 hover:text-primary-400 transition-all duration-200">
                Requests
              </Link>
              <Link href="/profile" className="btn-primary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-secondary-800 p-6 rounded-lg shadow-custom border border-secondary-700">
              <h2 className="text-lg font-semibold text-white mb-4">Filter Skills</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary-400 mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`category-${index}`}
                        name="category"
                        type="radio"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                      />
                      <label htmlFor={`category-${index}`} className="ml-3 text-sm text-gray-300">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary-400 mb-2">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="price-any"
                      name="price"
                      type="radio"
                      checked={selectedPrice === 'Any Price'}
                      onChange={() => setSelectedPrice('Any Price')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="price-any" className="ml-3 text-sm text-gray-300">
                      Any Price
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-free"
                      name="price"
                      type="radio"
                      checked={selectedPrice === 'Free'}
                      onChange={() => setSelectedPrice('Free')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="price-free" className="ml-3 text-sm text-gray-300">
                      Free
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-under-20"
                      name="price"
                      type="radio"
                      checked={selectedPrice === 'Under $20'}
                      onChange={() => setSelectedPrice('Under $20')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="price-under-20" className="ml-3 text-sm text-gray-300">
                      Under $20
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-20-50"
                      name="price"
                      type="radio"
                      checked={selectedPrice === '$20 - $50'}
                      onChange={() => setSelectedPrice('$20 - $50')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="price-20-50" className="ml-3 text-sm text-gray-300">
                      $20 - $50
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-50-plus"
                      name="price"
                      type="radio"
                      checked={selectedPrice === '$50+'}
                      onChange={() => setSelectedPrice('$50+')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="price-50-plus" className="ml-3 text-sm text-gray-300">
                      $50+
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Distance */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary-400 mb-2">Distance</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="distance-1"
                      name="distance"
                      type="radio"
                      checked={selectedDistance === 'Within 1 mile'}
                      onChange={() => setSelectedDistance('Within 1 mile')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="distance-1" className="ml-3 text-sm text-gray-300">
                      Within 1 mile
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="distance-5"
                      name="distance"
                      type="radio"
                      checked={selectedDistance === 'Within 5 miles'}
                      onChange={() => setSelectedDistance('Within 5 miles')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="distance-5" className="ml-3 text-sm text-gray-300">
                      Within 5 miles
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="distance-10"
                      name="distance"
                      type="radio"
                      checked={selectedDistance === 'Within 10 miles'}
                      onChange={() => setSelectedDistance('Within 10 miles')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="distance-10" className="ml-3 text-sm text-gray-300">
                      Within 10 miles
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="distance-any"
                      name="distance"
                      type="radio"
                      checked={selectedDistance === 'Any distance'}
                      onChange={() => setSelectedDistance('Any distance')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="distance-any" className="ml-3 text-sm text-gray-300">
                      Any distance
                    </label>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleApplyFilters}
                className="w-full btn-primary"
              >
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h1 className="text-2xl font-bold text-white">Available Skills Near You</h1>
              <div className="mt-4 sm:mt-0 flex items-center">
                <span className="mr-2 text-sm text-gray-300">Sort by:</span>
                <select 
                  className="bg-secondary-800 border-secondary-700 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500 text-white"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option>Relevance</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
            
            {/* Search Box */}
            <div className="mb-6">
              <div className="relative rounded-md shadow-custom">
                <input
                  type="text"
                  className="block w-full rounded-md bg-secondary-800 border-secondary-700 pl-10 pr-12 focus:border-primary-500 focus:ring-primary-500 sm:text-sm text-white"
                  placeholder="Search skills, keywords, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button 
                    className="text-primary-500 hover:text-primary-400 font-medium text-sm"
                    onClick={() => console.log('Search clicked')}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedSkills.length > 0 ? (
                sortedSkills.map((skill) => (
                  <div key={skill.id} className="bg-secondary-800 rounded-lg shadow-custom overflow-hidden hover:shadow-custom-hover transition-shadow border border-secondary-700">
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary-900/60 text-primary-300 rounded-full mb-2">
                            {skill.category}
                          </span>
                          <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                        </div>
                        <span className="text-lg font-bold text-primary-500">{skill.price}</span>
                      </div>
                      <p className="mt-2 text-gray-400 text-sm line-clamp-2">{skill.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-primary-800 flex items-center justify-center text-white">
                            {skill.user.name.charAt(0)}
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium text-white">{skill.user.name}</p>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                              </svg>
                              <span className="text-xs text-gray-400 ml-1">{skill.user.rating} ({skill.user.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                          {skill.location}
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link href={`/skills/${skill.id}`} className="block w-full text-center bg-secondary-800 border border-primary-500 text-primary-500 py-2 px-4 rounded-md hover:bg-primary-500 hover:text-white transition-colors">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-400 text-lg">No skills found matching your filters.</p>
                  <button 
                    className="mt-4 btn-outline"
                    onClick={() => {
                      setSelectedCategory('All Categories');
                      setSelectedPrice('Any Price');
                      setSelectedDistance('Within 5 miles');
                      setSearchQuery('');
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {sortedSkills.length > 0 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center">
                  <button className="mx-1 px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:bg-secondary-800 transition-colors">
                    Previous
                  </button>
                  <button className="mx-1 px-3 py-2 rounded-md text-sm font-medium bg-primary-500 text-white">
                    1
                  </button>
                  <button className="mx-1 px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:bg-secondary-800 transition-colors">
                    2
                  </button>
                  <button className="mx-1 px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:bg-secondary-800 transition-colors">
                    3
                  </button>
                  <span className="mx-1 text-gray-500">...</span>
                  <button className="mx-1 px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:bg-secondary-800 transition-colors">
                    10
                  </button>
                  <button className="mx-1 px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:bg-secondary-800 transition-colors">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 