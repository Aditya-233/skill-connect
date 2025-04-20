"use client";

import React from 'react';

const ImprovedHowItWorks: React.FC = () => {
  return (
    <section className="section bg-secondary-950 relative overflow-hidden">
      {/* Visual enhancement - adding subtle patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary-900/30 border border-primary-500/30 text-primary-400 text-sm font-medium mb-3">
            Simple Process
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How SkillConnect Works</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Our platform is designed to make skill sharing and learning as simple as possible.
            Follow these steps to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 relative">
          {/* Connection lines between steps (desktop only) */}
          <div className="absolute top-24 left-0 w-full hidden md:block pointer-events-none">
            <div className="h-0.5 bg-gradient-to-r from-primary-500/30 via-primary-400/50 to-primary-500/30 w-3/4 mx-auto"></div>
          </div>
          
          {/* Card 1: Create Your Profile */}
          <div className="bg-secondary-900/50 rounded-xl p-6 md:p-7 border border-secondary-800 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-900/20 relative">
            <div className="absolute -top-4 -left-2 md:left-1/2 md:-top-5 md:transform md:-translate-x-1/2 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-4 border-secondary-950 shadow-md">
              1
            </div>
            <div className="flex flex-col items-center text-center pt-7 mb-4">
              <div className="flex-shrink-0 mb-5">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-900/50 text-primary-400 transform transition-transform hover:rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Create Your Profile</h3>
              <p className="text-gray-400 mb-5">Set up your profile with your skills, interests, and availability.</p>
            </div>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sign up in less than 2 minutes</span>
              </li>
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Add your skills and expertise</span>
              </li>
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Set your availability preferences</span>
              </li>
            </ul>
          </div>
          
          {/* Card 2: Find or List Skills */}
          <div className="bg-secondary-900/50 rounded-xl p-6 md:p-7 border border-secondary-800 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-900/20 relative">
            <div className="absolute -top-4 -left-2 md:left-1/2 md:-top-5 md:transform md:-translate-x-1/2 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-4 border-secondary-950 shadow-md">
              2
            </div>
            <div className="flex flex-col items-center text-center pt-7 mb-4">
              <div className="flex-shrink-0 mb-5">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-900/50 text-primary-400 transform transition-transform hover:rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Find or List Skills</h3>
              <p className="text-gray-400 mb-5">Browse available skills or share what you can teach.</p>
            </div>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Browse skills in your neighborhood</span>
              </li>
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Post your skill offerings</span>
              </li>
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Request specific skills you need</span>
              </li>
            </ul>
          </div>
          
          {/* Card 3: Connect & Collaborate */}
          <div className="bg-secondary-900/50 rounded-xl p-6 md:p-7 border border-secondary-800 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-900/20 relative">
            <div className="absolute -top-4 -left-2 md:left-1/2 md:-top-5 md:transform md:-translate-x-1/2 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-4 border-secondary-950 shadow-md">
              3
            </div>
            <div className="flex flex-col items-center text-center pt-7 mb-4">
              <div className="flex-shrink-0 mb-5">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-900/50 text-primary-400 transform transition-transform hover:rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Connect & Collaborate</h3>
              <p className="text-gray-400 mb-5">Meet and learn with others in your community.</p>
            </div>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Message community members</span>
              </li>
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Schedule in-person or virtual sessions</span>
              </li>
              <li className="flex items-start bg-secondary-800/50 p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Exchange and build on skills together</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedHowItWorks; 