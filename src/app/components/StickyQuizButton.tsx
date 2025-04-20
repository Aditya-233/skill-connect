import React from 'react';

interface StickyQuizButtonProps {
  onClick: () => void;
}

const StickyQuizButton: React.FC<StickyQuizButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow shadow-2xl">
      <button
        onClick={onClick}
        className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Take the skill matching quiz"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
        <span className="font-medium">Take Skill Quiz</span>
      </button>
    </div>
  );
};

export default StickyQuizButton; 