import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import SkillQuiz from './SkillQuiz';
import EnhancedTestimonials from './EnhancedTestimonials';
import BlogSection from './BlogSection';
import VideoTeasers from './VideoTeasers';
import MobileOptimizations from './MobileOptimizations';

const FeatureIntegration: React.FC = () => {
  // State hooks for feature controls
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleQuiz = () => setIsQuizOpen(!isQuizOpen);
  const closeBanner = () => setShowBanner(false);
  
  return (
    <MobileOptimizations>
      {/* Quiz Banner */}
      {showBanner && (
        <div className="sticky top-0 z-50 bg-primary-600 text-white px-4 py-3 shadow-md animate-fadeIn">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              <p className="text-sm md:text-base font-medium">Discover your perfect skill path! Take our quick quiz</p>
            </div>
            <div className="flex items-center">
              <button 
                onClick={toggleQuiz}
                className="text-xs md:text-sm bg-white text-primary-600 px-3 py-1 rounded-full font-medium mr-2 hover:bg-opacity-90 transition-all"
              >
                Start Quiz
              </button>
              <button 
                onClick={closeBanner}
                className="text-white hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Interactive Quiz Component (when active) */}
      {isQuizOpen && <SkillQuiz onClose={() => setIsQuizOpen(false)} />}
      
      {/* Quick access floating button for mobile */}
      <div className="fixed bottom-6 left-6 md:hidden z-40">
        <button
          onClick={toggleQuiz}
          className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Take skill quiz"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </button>
      </div>
      
      {/* Quiz trigger button for desktop - make sticky and more prominent */}
      <div className="fixed right-0 top-1/3 transform -translate-y-1/2 hidden md:block z-40">
        <button
          onClick={toggleQuiz}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-l-lg shadow-lg flex items-center group transition-all duration-300 hover:px-5"
          aria-label="Take skill quiz"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
          <span className="text-sm font-medium whitespace-nowrap">Find Your Path</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-0 h-5 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      
      {/* Components to integrate in the main page */}
      <div className="enhanced-components">
        {/* Enhanced Testimonials Section (to be inserted in the page) */}
        <EnhancedTestimonials />
        
        {/* Blog/Tips Section (to be inserted in the page) */}
        <BlogSection />
        
        {/* Video Teasers Section (to be inserted in the page) */}
        <VideoTeasers />
      </div>
      
      {/* Mobile navigation helper for touch devices */}
      <div className="fixed bottom-0 left-0 right-0 bg-secondary-900/90 border-t border-secondary-700 md:hidden backdrop-blur-md z-40">
        <div className="flex justify-around items-center p-3">
          <a href="/" className="flex flex-col items-center text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </a>
          <a href="/skills" className="flex flex-col items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <span className="text-xs mt-1">Skills</span>
          </a>
          <button onClick={toggleQuiz} className="flex flex-col items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            <span className="text-xs mt-1">Quiz</span>
          </button>
          <a href="/requests" className="flex flex-col items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <span className="text-xs mt-1">Requests</span>
          </a>
          <a href="/profile" className="flex flex-col items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </a>
        </div>
      </div>
    </MobileOptimizations>
  );
};

export default FeatureIntegration; 