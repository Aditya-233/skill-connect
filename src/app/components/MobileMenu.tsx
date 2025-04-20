import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="mobile-menu animate-fadeIn">
      <button 
        className="absolute top-4 right-4 text-white p-2"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="flex flex-col items-center space-y-6 w-full px-6">
        <Link 
          href="/skills" 
          className="mobile-nav-item"
          onClick={onClose}
        >
          Browse Skills
        </Link>
        <Link 
          href="/requests" 
          className="mobile-nav-item"
          onClick={onClose}
        >
          Requests
        </Link>
        <Link 
          href="/profile" 
          className="btn-primary w-3/4 text-center mt-4"
          onClick={onClose}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu; 