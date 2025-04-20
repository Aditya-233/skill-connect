import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import SkillQuiz from './SkillQuiz';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const SimplifiedFooter: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  
  // Effect to handle scroll-based visibility of floating button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 300; // When to show the button
      
      if (scrollPosition > threshold) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };
  
  const openQuiz = () => {
    setIsQuizOpen(true);
  };
  
  // Simplified footer sections - reduced from 5 to 3 main categories
  const footerSections: FooterSection[] = [
    {
      title: "About Us",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Press", href: "/press" },
        { label: "Success Stories", href: "/success-stories" }
      ]
    },
    {
      title: "Resources & Help",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Safety Center", href: "/safety" },
        { label: "Skill Guides", href: "/guides" },
        { label: "Tutorials", href: "/tutorials" },
        { label: "Contact Support", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Accessibility", href: "/accessibility" }
      ]
    }
  ];
  
  return (
    <>
      <footer className="bg-secondary-900 border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Logo and social links - always visible */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="mr-2 rounded-lg overflow-hidden">
                <Image 
                  src="/logo.svg" 
                  alt="SkillConnect Logo" 
                  width={32} 
                  height={32}
                />
              </div>
              <span className="text-xl font-bold text-white">SkillConnect</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={openQuiz}
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                Take Skill Quiz
              </button>
              <SocialLinks />
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-secondary-800 my-6"></div>
          
          {/* Mobile accordion view - simplified with fewer sections */}
          <div className="md:hidden space-y-2">
            {footerSections.map((section) => (
              <div key={section.title} className="border-b border-secondary-800 pb-2">
                <button 
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <h3 className="text-white font-semibold">{section.title}</h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className={`w-5 h-5 text-gray-400 transition-transform ${openSection === section.title ? 'transform rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                
                {openSection === section.title && (
                  <ul className="py-2 space-y-2 pl-2 grid grid-cols-2 gap-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-gray-400 hover:text-primary-400 transition-all duration-200">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          
          {/* Desktop view - simplified with fewer columns and grid layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-primary-400 transition-all duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Newsletter signup */}
            <div>
              <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-2 text-sm">Get the latest skill-sharing news and updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-secondary-800 border border-secondary-700 rounded-l-md px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 flex-grow"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-r-md text-sm transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="mt-4">
                <button
                  onClick={openQuiz} 
                  className="text-primary-400 hover:text-primary-300 text-sm flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                  Find your ideal skill match
                </button>
              </div>
            </div>
          </div>
          
          {/* Copyright - always visible */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SkillConnect. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Quiz Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showFloatingButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <button
          onClick={openQuiz}
          className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Find your skills match"
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            <span className="ml-2 font-medium hidden md:inline">Take Skill Quiz</span>
          </div>
        </button>
      </div>

      {/* Skill Quiz Modal */}
      {isQuizOpen && <SkillQuiz onClose={() => setIsQuizOpen(false)} />}
    </>
  );
};

export default SimplifiedFooter; 