"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StickyQuizButtonProps {
  onClick: () => void;
}

const StickyQuizButton: React.FC<StickyQuizButtonProps> = ({ onClick }) => {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 quiz-button-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={onClick}
        className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-primary-500/50"
        aria-label="Take the skill matching quiz"
      >
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <span className="animate-ping absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white opacity-75"></span>
            <span className="absolute -top-1 -right-1 rounded-full h-3 w-3 bg-white"></span>
          </div>
          <span className="font-medium text-sm sm:text-base whitespace-nowrap">Take Skill Quiz</span>
        </div>
      </button>
    </motion.div>
  );
};

export default StickyQuizButton; 