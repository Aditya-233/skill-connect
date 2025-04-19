'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for skill requests
const requests = [
  {
    id: 1,
    title: 'Guitar Lessons for Beginner',
    description: 'Looking for someone who can teach basic guitar chords and simple songs. I can meet anywhere in downtown.',
    budget: '$20-30/hr',
    category: 'Music',
    deadline: '2 weeks',
    status: 'Open',
    user: {
      name: 'Alex Johnson',
      rating: 4.8,
      reviews: 12
    }
  },
  {
    id: 2,
    title: 'Need Help with Python Programming',
    description: 'Working on a data analysis project and need help with pandas and matplotlib. Prefer remote sessions via Zoom.',
    budget: '$40-50/hr',
    category: 'Programming',
    deadline: '3 days',
    status: 'Open',
    user: {
      name: 'Jamie Smith',
      rating: 4.9,
      reviews: 27
    }
  },
  {
    id: 3,
    title: 'Spanish Conversation Partner',
    description: 'Intermediate Spanish speaker looking for someone to practice conversation with 1-2 times per week.',
    budget: '$15-25/hr',
    category: 'Languages',
    deadline: 'Ongoing',
    status: 'Open',
    user: {
      name: 'Taylor Wilson',
      rating: 4.7,
      reviews: 8
    }
  },
  {
    id: 4,
    title: 'Fitness Coach for Home Workouts',
    description: 'Looking for a personal trainer who can create a home workout plan and provide weekly check-ins.',
    budget: '$30-40/hr',
    category: 'Fitness',
    deadline: '1 week',
    status: 'Open',
    user: {
      name: 'Morgan Lee',
      rating: 4.6,
      reviews: 15
    }
  },
  {
    id: 5,
    title: 'Photography for Small Event',
    description: 'Need a photographer for a small family gathering, approximately 3 hours of shooting time needed.',
    budget: '$100-200 total',
    category: 'Photography',
    deadline: '2 weeks',
    status: 'Open',
    user: {
      name: 'Casey Brown',
      rating: 5.0,
      reviews: 31
    }
  },
  {
    id: 6,
    title: 'Math Tutoring for High School Student',
    description: 'Need help with calculus and trigonometry. Prefer in-person sessions twice a week.',
    budget: '$25-35/hr',
    category: 'Education',
    deadline: 'Ongoing',
    status: 'Open',
    user: {
      name: 'Riley Parker',
      rating: 4.8,
      reviews: 19
    }
  }
];

const categories = [
  'All Categories',
  'Education',
  'Fitness',
  'Programming',
  'Design',
  'Music',
  'Languages',
  'Photography',
  'Cooking',
  'Finance',
  'Other'
];

export default function RequestsPage() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedBudget, setSelectedBudget] = useState('Any Budget');
  const [selectedDeadline, setSelectedDeadline] = useState('Any Deadline');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('Most Recent');

  // Filter the requests based on selected filters
  const filteredRequests = requests.filter(request => {
    // Category filter
    if (selectedCategory !== 'All Categories' && request.category !== selectedCategory) {
      return false;
    }
    
    // Budget filter (simplified for demo purposes)
    if (selectedBudget === 'Under $20/hr') {
      const maxBudget = parseInt(request.budget.replace(/[^\d-]/g, '').split('-').pop() || '0');
      if (maxBudget >= 20) {
        return false;
      }
    } else if (selectedBudget === '$20 - $50/hr') {
      const minBudget = parseInt(request.budget.replace(/[^\d-]/g, '').split('-')[0] || '0');
      const maxBudget = parseInt(request.budget.replace(/[^\d-]/g, '').split('-').pop() || '0');
      if (minBudget > 50 || maxBudget < 20) {
        return false;
      }
    } else if (selectedBudget === '$50+/hr') {
      const minBudget = parseInt(request.budget.replace(/[^\d-]/g, '').split('-')[0] || '0');
      if (minBudget < 50) {
        return false;
      }
    }
    
    // Deadline filter
    if (selectedDeadline === 'Within 24 hours' && request.deadline !== '1 day') {
      return false;
    } else if (selectedDeadline === 'Within 1 week' && 
              !['1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '1 week'].includes(request.deadline)) {
      return false;
    } else if (selectedDeadline === 'Ongoing/Long term' && request.deadline !== 'Ongoing') {
      return false;
    }
    
    // Search query filter
    if (searchQuery && !request.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !request.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.category.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Sort the filtered requests
  const sortedRequests = [...filteredRequests].sort((a, b) => {
    if (sortOption === 'Budget: High to Low') {
      const aMaxBudget = parseInt(a.budget.replace(/[^\d-]/g, '').split('-').pop() || '0');
      const bMaxBudget = parseInt(b.budget.replace(/[^\d-]/g, '').split('-').pop() || '0');
      return bMaxBudget - aMaxBudget;
    } else if (sortOption === 'Budget: Low to High') {
      const aMinBudget = parseInt(a.budget.replace(/[^\d-]/g, '').split('-')[0] || '0');
      const bMinBudget = parseInt(b.budget.replace(/[^\d-]/g, '').split('-')[0] || '0');
      return aMinBudget - bMinBudget;
    } else if (sortOption === 'Deadline: Soonest') {
      // Simplified deadline sorting for demo
      const deadlineOrder = {
        '1 day': 1, 
        '2 days': 2, 
        '3 days': 3, 
        '4 days': 4, 
        '5 days': 5, 
        '6 days': 6, 
        '1 week': 7, 
        '2 weeks': 14, 
        'Ongoing': 999
      };
      return (deadlineOrder[a.deadline] || 0) - (deadlineOrder[b.deadline] || 0);
    }
    // Default to 'Most Recent' - for demo purposes, using the id as proxy for recency
    return b.id - a.id;
  });

  // Handler for applying filters
  const handleApplyFilters = () => {
    // This function would be needed in a real app, but for our demo
    // the filtering happens automatically with state changes
    console.log('Filters applied');
  };
  
  // Handle reset filters
  const handleResetFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedBudget('Any Budget');
    setSelectedDeadline('Any Deadline');
    setSearchQuery('');
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
              <Link href="/skills" className="text-gray-300 hover:text-primary-400 transition-all duration-200">
                Browse Skills
              </Link>
              <Link href="/requests" className="text-primary-400 font-medium">
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
            <div className="mb-8">
              <Link href="/create-request" className="w-full flex justify-center items-center btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Create New Request
              </Link>
            </div>
            
            <div className="bg-secondary-800 p-6 rounded-lg shadow-custom border border-secondary-700">
              <h2 className="text-lg font-semibold text-white mb-4">Filter Requests</h2>
              
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
              
              {/* Budget Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary-400 mb-2">Budget Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="budget-any"
                      name="budget"
                      type="radio"
                      checked={selectedBudget === 'Any Budget'}
                      onChange={() => setSelectedBudget('Any Budget')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="budget-any" className="ml-3 text-sm text-gray-300">
                      Any Budget
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-under-20"
                      name="budget"
                      type="radio"
                      checked={selectedBudget === 'Under $20/hr'}
                      onChange={() => setSelectedBudget('Under $20/hr')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="budget-under-20" className="ml-3 text-sm text-gray-300">
                      Under $20/hr
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-20-50"
                      name="budget"
                      type="radio"
                      checked={selectedBudget === '$20 - $50/hr'}
                      onChange={() => setSelectedBudget('$20 - $50/hr')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="budget-20-50" className="ml-3 text-sm text-gray-300">
                      $20 - $50/hr
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-50-plus"
                      name="budget"
                      type="radio"
                      checked={selectedBudget === '$50+/hr'}
                      onChange={() => setSelectedBudget('$50+/hr')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="budget-50-plus" className="ml-3 text-sm text-gray-300">
                      $50+/hr
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Deadline */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary-400 mb-2">Deadline</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="deadline-any"
                      name="deadline"
                      type="radio"
                      checked={selectedDeadline === 'Any Deadline'}
                      onChange={() => setSelectedDeadline('Any Deadline')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="deadline-any" className="ml-3 text-sm text-gray-300">
                      Any Deadline
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="deadline-1day"
                      name="deadline"
                      type="radio"
                      checked={selectedDeadline === 'Within 24 hours'}
                      onChange={() => setSelectedDeadline('Within 24 hours')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="deadline-1day" className="ml-3 text-sm text-gray-300">
                      Within 24 hours
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="deadline-1week"
                      name="deadline"
                      type="radio"
                      checked={selectedDeadline === 'Within 1 week'}
                      onChange={() => setSelectedDeadline('Within 1 week')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="deadline-1week" className="ml-3 text-sm text-gray-300">
                      Within 1 week
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="deadline-long"
                      name="deadline"
                      type="radio"
                      checked={selectedDeadline === 'Ongoing/Long term'}
                      onChange={() => setSelectedDeadline('Ongoing/Long term')}
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-600 bg-secondary-700"
                    />
                    <label htmlFor="deadline-long" className="ml-3 text-sm text-gray-300">
                      Ongoing/Long term
                    </label>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleApplyFilters}
                className="w-full btn-primary mb-2"
              >
                Apply Filters
              </button>
              
              <button 
                onClick={handleResetFilters}
                className="w-full btn-outline"
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h1 className="text-2xl font-bold text-white">Skill Requests</h1>
              <div className="mt-4 sm:mt-0 flex items-center">
                <span className="mr-2 text-sm text-gray-300">Sort by:</span>
                <select 
                  className="bg-secondary-800 border-secondary-700 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500 text-white"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option>Most Recent</option>
                  <option>Budget: High to Low</option>
                  <option>Budget: Low to High</option>
                  <option>Deadline: Soonest</option>
                </select>
              </div>
            </div>
            
            {/* Search Box */}
            <div className="mb-6">
              <div className="relative rounded-md shadow-custom">
                <input
                  type="text"
                  className="block w-full rounded-md bg-secondary-800 border-secondary-700 pl-10 pr-12 focus:border-primary-500 focus:ring-primary-500 sm:text-sm text-white"
                  placeholder="Search requests, keywords, or categories..."
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
                    onClick={() => console.log('Search requests')}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            
            {/* Requests List */}
            <div className="space-y-6">
              {sortedRequests.length > 0 ? (
                sortedRequests.map((request) => (
                  <div key={request.id} className="bg-secondary-800 rounded-lg shadow-custom overflow-hidden hover:shadow-custom-hover transition-all duration-200 border border-secondary-700 p-6">
                    <div className="sm:flex sm:items-start sm:justify-between">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-1 sm:mt-0 sm:ml-0">
                          <div className="flex items-center mb-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-900/60 text-primary-300">
                              {request.category}
                            </span>
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/60 text-green-300">
                              {request.status}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            <Link href={`/requests/${request.id}`} className="hover:text-primary-400">
                              {request.title}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-400 line-clamp-2">
                            {request.description}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-3">
                            <div className="flex items-center text-sm text-gray-300">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                              </svg>
                              Deadline: {request.deadline}
                            </div>
                            <div className="flex items-center text-sm text-primary-400 font-medium">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-primary-400">
                                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                              </svg>
                              Budget: {request.budget}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 flex flex-col items-end justify-between h-full">
                        <div className="flex items-center">
                          <div className="ml-2 text-right">
                            <p className="text-sm font-medium text-white">{request.user.name}</p>
                            <div className="flex items-center justify-end">
                              <span className="text-xs text-gray-400 mr-1">{request.user.rating} ({request.user.reviews})</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <Link href={`/requests/${request.id}`} className="mt-4 btn-outline inline-flex items-center px-4 py-2">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 bg-secondary-800 rounded-lg border border-secondary-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-white">No matching requests found</h3>
                  <p className="mt-1 text-gray-400">Try adjusting your filters or search term</p>
                  <div className="mt-6">
                    <button 
                      onClick={handleResetFilters}
                      className="btn-primary"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {sortedRequests.length > 0 && (
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