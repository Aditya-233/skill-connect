import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SubtleHeroSection from './components/SubtleHeroSection';
import ImprovedHowItWorks from './components/ImprovedHowItWorks';
import SimplifiedFooter from './components/SimplifiedFooter';
import StickyQuizButton from './components/StickyQuizButton';
import SkillQuiz from './components/SkillQuiz';

export default function HomePage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-secondary-950 text-white">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-secondary-950/90 backdrop-blur-lg border-b border-gray-800 shadow-md transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/logo.svg" 
                    alt="SkillConnect Logo" 
                    width={32} 
                    height={32} 
                    className="h-8 w-auto" 
                  />
                  <span className="ml-2 text-white font-semibold text-lg">SkillConnect</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/skills" className="text-gray-300 hover:text-primary-400 transition-all duration-200">
                Browse Skills
              </Link>
              <Link href="/requests" className="text-gray-300 hover:text-primary-400 transition-all duration-200">
                Requests
              </Link>
              <Link href="/profile" className="btn-primary">
                Sign In
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md border border-gray-700 bg-secondary-900 shadow-lg"
                aria-label="Open menu"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with subtler textures */}
      <SubtleHeroSection />

      {/* Featured Categories */}
      <section className="section bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Popular Skill Categories</h2>
            <p className="mt-4 text-lg text-gray-400">Discover skills across a variety of categories</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                href={`/skills?category=${category.name}`}
                className="group relative rounded-lg overflow-hidden bg-secondary-800 border border-secondary-700 hover:border-primary-500 shadow-custom transition-all duration-200 hover:shadow-custom-hover h-32"
                tabIndex={0}
                aria-label={`Browse ${category.name} skills`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 group-hover:from-primary-900/80 transition-all duration-200"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                  <div>
                    <div className="flex justify-center mb-2">
                      <span className="text-primary-400 text-3xl group-hover:scale-110 transition-transform duration-200">{category.icon}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">{category.name}</h3>
                    <p className="mt-1 text-xs text-gray-400">{category.count} skills</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/skills" 
              className="inline-flex items-center justify-center text-primary-400 hover:text-primary-300 font-medium transition-all duration-200 hover:underline"
            >
              View all categories
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Improved with card-based layout */}
      <ImprovedHowItWorks />

      {/* Testimonials and other sections remain the same */}
      {/* ... */}

      {/* Footer - using simplified footer */}
      <SimplifiedFooter />
      
      {/* Sticky Quiz Button */}
      <StickyQuizButton onClick={() => setIsQuizOpen(true)} />
      
      {/* Skill Quiz Modal */}
      {isQuizOpen && <SkillQuiz onClose={() => setIsQuizOpen(false)} />}
    </div>
  );
}

// Sample Data
const categories = [
  { name: 'Programming', icon: '👨‍💻', count: 156 },
  { name: 'Design', icon: '🎨', count: 132 },
  { name: 'Music', icon: '🎸', count: 94 },
  { name: 'Fitness', icon: '💪', count: 87 },
  { name: 'Cooking', icon: '👨‍🍳', count: 76 },
  { name: 'Languages', icon: '🌎', count: 68 },
  { name: 'Photography', icon: '📷', count: 62 },
  { name: 'Finance', icon: '💰', count: 58 },
]; 