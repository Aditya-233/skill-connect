import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SubtleHeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Simplified background with subtle gradient instead of texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-secondary-950 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary-900/40 via-primary-900/10 to-secondary-950/30 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-24 sm:pb-24">
        {/* Subtle gradient on right side instead of texture */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 z-0 pointer-events-none bg-gradient-to-bl from-primary-700/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-8 py-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-primary-900/30 border border-primary-500 text-primary-400 text-sm font-medium mb-4">
              Skill-based Community Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Share Your Skills. 
              <span className="text-primary-500">Connect</span> With Others.
            </h1>
            <p className="mt-4 text-xl text-gray-300 mb-8">
              Unlike LinkedIn or Upwork, SkillConnect is a <span className="text-primary-400 font-semibold">community-first platform</span> focused on meaningful skill exchanges rather than just hiring or networking.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Skill bartering</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">No platform fees</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Local community focus</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Knowledge sharing</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/skills" className="btn-primary text-center w-full sm:w-auto">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary-800 to-primary-900/30 rounded-lg p-8 h-auto flex items-center justify-center">
              {/* Remove texture overlay */}
              <div className="relative z-10 text-center">
                <Image 
                  src="/mockup-dashboard.svg" 
                  alt="SkillConnect Dashboard showing skill categories, available local skills, and user profile interface" 
                  width={500} 
                  height={350}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="absolute -z-10 -right-5 -left-5 -top-5 -bottom-5">
              <div className="w-full h-full bg-primary-500/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubtleHeroSection; 