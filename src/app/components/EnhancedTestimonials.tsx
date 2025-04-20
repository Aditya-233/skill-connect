import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
  rating: number;
  success: string;
}

const testimonialData: TestimonialProps[] = [
  {
    name: 'Alex Johnson',
    role: 'Guitar Teacher',
    quote: 'SkillConnect has helped me find students who are genuinely interested in learning guitar. The platform is easy to use and I can manage my schedule effectively.',
    imageSrc: '/user-1.jpg',
    rating: 5,
    success: 'Taught over 50 students and built a sustainable income from his passion'
  },
  {
    name: 'Sophia Martinez',
    role: 'Language Learner',
    quote: 'I found an amazing Spanish tutor through SkillConnect. We meet weekly and my conversational skills have improved dramatically over the past few months.',
    imageSrc: '/user-2.jpg',
    rating: 5,
    success: 'Became fluent in Spanish within 6 months through skill exchanges'
  },
  {
    name: 'Michael Chen',
    role: 'Coding Mentor',
    quote: 'As a software developer, I wanted to give back to the community. SkillConnect made it easy to connect with beginners who needed guidance with programming.',
    imageSrc: '/user-3.jpg',
    rating: 4,
    success: 'Helped 20+ beginners launch their programming careers'
  },
  {
    name: 'Emily Taylor',
    role: 'Yoga Instructor',
    quote: 'The platform allowed me to connect with people in my neighborhood who were interested in yoga. I traded yoga lessons for cooking classes which was a win-win!',
    imageSrc: '/user-4.jpg',
    rating: 5,
    success: 'Built a local community of wellness enthusiasts through skill bartering'
  },
];

const EnhancedTestimonials: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-900/30 rounded-full mb-3">REAL STORIES</span>
          <h2 className="text-3xl font-bold text-white">Success Stories From Our Community</h2>
          <p className="mt-4 text-lg text-gray-400">See how people are transforming their lives through skill exchanges</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-secondary-800 rounded-lg overflow-hidden border border-secondary-700 hover:border-primary-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    >
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center text-primary-100">
                    {testimonial.imageSrc ? (
                      <Image 
                        src={testimonial.imageSrc} 
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary-900/20 border-t border-primary-800/30">
                <p className="text-primary-300 text-sm font-medium">Success: {testimonial.success}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <div className="inline-block bg-secondary-800 rounded-lg p-4 border border-secondary-700 max-w-2xl">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-primary-400 opacity-75">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
                </svg>
              </div>
              <div className="text-left flex-1">
                <p className="text-lg text-white mb-2">
                  SkillConnect has completely changed how I approach learning new skills. Instead of expensive courses, I trade my expertise for knowledge. It's brilliant!
                </p>
                <div className="flex items-center mt-4">
                  <div className="h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center text-primary-100">
                    <span>J</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">James Wilson</p>
                    <p className="text-gray-400 text-sm">Full-stack Developer & Piano Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTestimonials; 