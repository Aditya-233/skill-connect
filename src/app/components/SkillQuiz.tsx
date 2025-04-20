"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface SkillQuizProps {
  onClose: () => void;
}

const SkillQuiz: React.FC<SkillQuizProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Record<string, string>>({});
  
  const handleSelect = (question: string, answer: string) => {
    setSelections({...selections, [question]: answer});
    if (step < 3) {
      setStep(step + 1);
    }
  };
  
  const getRecommendation = () => {
    // Simple recommendation logic based on selections
    if (selections.interest === 'Teaching' && selections.experience === 'Beginner') {
      return 'Mentoring';
    } else if (selections.interest === 'Learning' && selections.experience === 'Expert') {
      return 'Skill Showcase';
    } else {
      return 'Skill Exchange';
    }
  };
  
  return (
    <div className="fixed inset-0 bg-secondary-900/95 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-secondary-800 rounded-xl p-6 max-w-md w-full border border-secondary-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Find Your Perfect Skill Path</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map(i => (
              <div 
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= i ? 'bg-primary-500 text-white' : 'bg-secondary-700 text-gray-400'
                }`}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="w-full bg-secondary-700 h-2 rounded-full">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-3">What brings you to SkillConnect?</h4>
            <div 
              className={`quiz-option ${selections.interest === 'Teaching' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('interest', 'Teaching')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">I want to teach & share my skills</p>
                <p className="text-sm text-gray-400">Help others learn what you're good at</p>
              </div>
            </div>
            <div 
              className={`quiz-option ${selections.interest === 'Learning' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('interest', 'Learning')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">I want to learn new skills</p>
                <p className="text-sm text-gray-400">Find experts to teach you</p>
              </div>
            </div>
            <div 
              className={`quiz-option ${selections.interest === 'Both' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('interest', 'Both')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Both teaching & learning</p>
                <p className="text-sm text-gray-400">Exchange skills with others</p>
              </div>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-3">What's your experience level?</h4>
            <div 
              className={`quiz-option ${selections.experience === 'Beginner' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('experience', 'Beginner')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Beginner</p>
                <p className="text-sm text-gray-400">Just starting out</p>
              </div>
            </div>
            <div 
              className={`quiz-option ${selections.experience === 'Intermediate' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('experience', 'Intermediate')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Intermediate</p>
                <p className="text-sm text-gray-400">Have some experience</p>
              </div>
            </div>
            <div 
              className={`quiz-option ${selections.experience === 'Expert' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('experience', 'Expert')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Expert</p>
                <p className="text-sm text-gray-400">Advanced knowledge</p>
              </div>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-3">What's your preferred learning style?</h4>
            <div 
              className={`quiz-option ${selections.style === 'Visual' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('style', 'Visual')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Visual learner</p>
                <p className="text-sm text-gray-400">I learn best by watching</p>
              </div>
            </div>
            <div 
              className={`quiz-option ${selections.style === 'Practical' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('style', 'Practical')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Hands-on</p>
                <p className="text-sm text-gray-400">I prefer practical exercises</p>
              </div>
            </div>
            <div 
              className={`quiz-option ${selections.style === 'Reading' ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect('style', 'Reading')}
            >
              <div className="rounded-full bg-primary-900/20 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Reading & Research</p>
                <p className="text-sm text-gray-400">I like to read and study</p>
              </div>
            </div>
          </div>
        )}
        
        {Object.keys(selections).length >= 3 && (
          <div className="mt-8 p-4 bg-primary-900/30 rounded-lg border border-primary-500">
            <h4 className="font-bold text-white mb-2">Your Recommended Path: {getRecommendation()}</h4>
            <p className="text-gray-300 mb-4">Based on your answers, we think this is the best fit for you.</p>
            <Link 
              href={`/skills?path=${getRecommendation()}`}
              className="btn-primary w-full block text-center"
              onClick={onClose}
            >
              Explore Your Path
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillQuiz; 