import React from 'react';

interface MobileOptimizationProps {
  children: React.ReactNode;
}

const MobileOptimizations: React.FC<MobileOptimizationProps> = ({ children }) => {
  return (
    <div className="mobile-optimization-wrapper">
      {/* Mobile-specific CSS */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
          
          .hero-title {
            font-size: 2.25rem !important;
            line-height: 1.2 !important;
          }
          
          .hero-description {
            font-size: 1rem !important;
          }
          
          .grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
          
          .mobile-py-4 {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          
          .mobile-stack {
            flex-direction: column !important;
          }
          
          .mobile-w-full {
            width: 100% !important;
          }
          
          .mobile-text-center {
            text-align: center !important;
          }
          
          .mobile-text-sm {
            font-size: 0.875rem !important;
          }
          
          .mobile-mt-4 {
            margin-top: 1rem !important;
          }
          
          .mobile-mb-4 {
            margin-bottom: 1rem !important;
          }
          
          .mobile-p-4 {
            padding: 1rem !important;
          }
          
          .mobile-hidden {
            display: none !important;
          }
          
          .mobile-visible {
            display: block !important;
          }
          
          .mobile-gap-2 {
            gap: 0.5rem !important;
          }
          
          /* Adjust button sizes */
          .btn-primary, .btn-secondary, .btn-outline {
            font-size: 0.875rem !important;
            padding: 0.5rem 1rem !important;
          }
          
          /* Fix touch targets */
          button, 
          a.btn-primary, 
          a.btn-secondary, 
          a.btn-outline, 
          .nav-link {
            min-height: 44px !important;
            min-width: 44px !important;
          }
          
          /* Improve readability */
          body {
            font-size: 16px !important;
          }
          
          /* Adjust spacing */
          .testimonial-card,
          .success-story-card,
          .blog-card,
          .video-teaser {
            margin-bottom: 1.5rem !important;
          }
        }
      `}</style>
      
      {/* SafeArea padding for notched phones */}
      <div className="safe-area-top h-env-safe-area-inset-top"></div>
      
      {/* Children components */}
      {children}
      
      {/* SafeArea padding for bottom */}
      <div className="safe-area-bottom h-env-safe-area-inset-bottom"></div>
      
      {/* Mobile scroll-to-top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-primary-500 text-white p-3 rounded-full shadow-lg z-40 hover:bg-primary-600 transition-colors md:hidden"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default MobileOptimizations; 