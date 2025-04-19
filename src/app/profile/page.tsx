import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock user data
const userData = {
  name: "Alex Johnson",
  location: "Downtown, Smithville",
  joined: "January 2023",
  about: "I'm a skilled carpenter with over 10 years of experience. I also enjoy gardening and teaching math to high school students. Always looking to help out in my neighborhood!",
  skills: [
    {
      id: 1,
      title: "Carpentry Services",
      category: "Home Improvement",
      price: "$35/hour",
      rating: 4.9,
      reviews: 27
    },
    {
      id: 2,
      title: "Garden Design",
      category: "Outdoors",
      price: "$40/hour",
      rating: 4.7,
      reviews: 12
    },
    {
      id: 3,
      title: "Math Tutoring",
      category: "Education",
      price: "$25/hour",
      rating: 4.8,
      reviews: 19
    }
  ],
  reviews: [
    {
      id: 1,
      user: "Sarah M.",
      date: "March 15, 2023",
      rating: 5,
      comment: "Alex helped me build a custom bookshelf for my living room. Excellent craftsmanship and very professional. Would definitely hire again!"
    },
    {
      id: 2,
      user: "David L.",
      date: "February 2, 2023",
      rating: 5,
      comment: "My daughter's math grades improved significantly after just a few tutoring sessions with Alex. Very patient and explains concepts clearly."
    },
    {
      id: 3,
      user: "Melissa R.",
      date: "April 10, 2023",
      rating: 4,
      comment: "Alex redesigned my front yard garden and it looks amazing! Took a bit longer than expected, but the results were worth it."
    }
  ]
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-secondary-950 text-white">
      {/* Navigation */}
      <nav className="bg-secondary-900 border-b border-secondary-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="mr-2 rounded-lg overflow-hidden">
                  <Image 
                    src="/logo.svg" 
                    alt="SkillConnect Logo" 
                    width={36} 
                    height={36}
                  />
                </div>
                <span className="text-2xl font-bold text-white">SkillConnect</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/skills" className="text-gray-300 hover:text-primary-400 transition-all duration-200">
                Browse Skills
              </Link>
              <Link href="/requests" className="text-gray-300 hover:text-primary-400 transition-all duration-200">
                Requests
              </Link>
              <Link href="/profile" className="text-primary-400 font-medium">
                My Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-secondary-800 rounded-lg shadow-custom overflow-hidden border border-secondary-700">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="h-32 w-32 rounded-full bg-secondary-900 flex items-center justify-center text-primary-400 text-4xl font-bold border-4 border-secondary-800">
                {userData.name.charAt(0)}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-white">{userData.name}</h1>
                <div className="mt-2 text-primary-100 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="flex items-center justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {userData.location}
                  </span>
                  <span className="flex items-center justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Joined {userData.joined}
                  </span>
                </div>
              </div>
              <div className="md:ml-auto">
                <button className="btn-outline">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-secondary-700 bg-secondary-900">
            <nav className="flex -mb-px">
              <button className="text-primary-500 border-primary-500 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm">
                Profile
              </button>
              <button className="text-gray-400 hover:text-gray-300 whitespace-nowrap py-4 px-6 border-b-2 border-transparent font-medium text-sm">
                My Skills
              </button>
              <button className="text-gray-400 hover:text-gray-300 whitespace-nowrap py-4 px-6 border-b-2 border-transparent font-medium text-sm">
                Requests
              </button>
              <button className="text-gray-400 hover:text-gray-300 whitespace-nowrap py-4 px-6 border-b-2 border-transparent font-medium text-sm">
                Messages
              </button>
            </nav>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About */}
              <div className="md:col-span-1">
                <h2 className="text-xl font-semibold text-white mb-4">About</h2>
                <p className="text-gray-300">{userData.about}</p>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white mb-3">Contact</h3>
                  <button className="w-full btn-primary mb-2">
                    Send Message
                  </button>
                  <button className="w-full btn-outline">
                    Request Skill
                  </button>
                </div>
              </div>

              {/* Skills & Reviews */}
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-white mb-4">Skills Offered</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {userData.skills.map((skill) => (
                    <div key={skill.id} className="bg-secondary-800 border border-secondary-700 rounded-lg p-4 hover:shadow-custom-hover transition-all duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary-900/60 text-primary-300 rounded-full mb-1">
                            {skill.category}
                          </span>
                          <h3 className="text-lg font-medium text-white">{skill.title}</h3>
                        </div>
                        <span className="text-lg font-bold text-primary-500">{skill.price}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-400 ml-1">{skill.rating} ({skill.reviews} reviews)</span>
                      </div>
                    </div>
                  ))}
                  <div className="border border-dashed border-secondary-700 rounded-lg p-4 flex items-center justify-center hover:bg-secondary-700 transition-colors">
                    <Link href="/skills/new" className="text-primary-400 hover:text-primary-300 flex items-center transition-all duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      Add New Skill
                    </Link>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-white mb-4">Reviews ({userData.reviews.length})</h2>
                <div className="space-y-4">
                  {userData.reviews.map((review) => (
                    <div key={review.id} className="border-b border-secondary-700 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 font-medium">
                            {review.user.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white">{review.user}</p>
                            <p className="text-xs text-gray-400">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 24 24" 
                              fill="currentColor" 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                            >
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 