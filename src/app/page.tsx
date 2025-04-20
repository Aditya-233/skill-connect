"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SubtleHeroSection from './components/SubtleHeroSection';
import ImprovedHowItWorks from './components/ImprovedHowItWorks';
import SimplifiedFooter from './components/SimplifiedFooter';
import SkillQuiz from './components/SkillQuiz';
import StickyQuizButton from './components/StickyQuizButton';

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
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Discover skills across a variety of categories</p>
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

      {/* Testimonials */}
      <section className="section bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What Our Community Says</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Hear from people who have shared and learned skills on our platform</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <div className="h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center text-primary-100">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section bg-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Real people achieving real results through skill exchange</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-secondary-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 border border-secondary-700 hover:border-primary-500/50">
                <div className="h-48 overflow-hidden relative">
                  <Image 
                    src={story.image} 
                    alt={story.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-gray-400 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image 
                          src={story.authorImage} 
                          alt={story.author}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-white font-medium text-sm">{story.author}</p>
                        <p className="text-gray-500 text-xs">{story.location}</p>
                      </div>
                    </div>
                    <Link href={story.link} className="text-primary-400 hover:text-primary-300 font-medium text-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/success-stories" 
              className="btn-outline"
            >
              View All Success Stories
            </Link>
          </div>
        </div>
      </section>

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

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Guitar Teacher',
    quote: 'SkillConnect has helped me find students who are genuinely interested in learning guitar. The platform is easy to use and I can manage my schedule effectively.'
  },
  {
    name: 'Sophia Martinez',
    role: 'Language Learner',
    quote: 'I found an amazing Spanish tutor through SkillConnect. We meet weekly and my conversational skills have improved dramatically over the past few months.'
  },
  {
    name: 'Michael Chen',
    role: 'Coding Mentor',
    quote: 'As a software developer, I wanted to give back to the community. SkillConnect made it easy to connect with beginners who needed guidance with programming.'
  }
];

// Success Stories Data
const successStories = [
  {
    title: "From Student to Skilled Developer",
    description: "How Mike learned React and built a portfolio through skill exchanges with designers",
    image: "/story-placeholder.svg",
    author: "Mike Johnson",
    authorImage: "/user-placeholder.svg",
    location: "Toronto, Canada",
    category: "Programming",
    link: "/success-stories/mike-johnson"
  },
  {
    title: "Language Exchange Success",
    description: "Sarah improved her Spanish by teaching English to native speakers",
    image: "/story-placeholder.svg",
    author: "Sarah Chen",
    authorImage: "/user-placeholder.svg",
    location: "New York, USA",
    category: "Languages",
    link: "/success-stories/sarah-chen"
  },
  {
    title: "Photography Skills for Website Design",
    description: "How David exchanged photography sessions for a professional website",
    image: "/story-placeholder.svg",
    author: "David Rodriguez",
    authorImage: "/user-placeholder.svg",
    location: "Madrid, Spain",
    category: "Photography",
    link: "/success-stories/david-rodriguez"
  }
]; 