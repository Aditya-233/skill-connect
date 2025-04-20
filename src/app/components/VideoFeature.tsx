"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VideoFeature = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // For this example, we'll use a placeholder for the video
  // In a real implementation, you would use a real video player like react-player
  
  return (
    <section className="section bg-secondary-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-4">See How SkillConnect Works</h2>
            <p className="text-gray-300 mb-6">Watch our quick video guide to learn how SkillConnect helps you connect with others to share and learn new skills.</p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/how-it-works" 
              className="btn-primary"
            >
              Learn More
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="aspect-video bg-secondary-800 rounded-xl overflow-hidden shadow-xl border border-secondary-700 relative group">
              {/* This would be a real video in production */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-primary-500/80 flex items-center justify-center shadow-lg backdrop-blur-sm cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Video thumbnail with overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary-700 flex items-center justify-center text-primary-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-2 text-xs text-white">2:45 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sample data
const features = [
  "Create a profile highlighting your skills and interests",
  "Browse and connect with teachers and learners",
  "Schedule sessions that work for your timeline",
  "Exchange feedback and build your reputation"
];

export default VideoFeature; 