import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-secondary-950 text-white">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-secondary-950/90 backdrop-blur-lg border-b border-gray-800 shadow-md transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/logo.svg" 
                    alt="SkillConnect Logo" 
                    width={32} 
                    height={32} 
                    className="h-8 w-auto" 
                  />
                  <span className="ml-2 text-white font-semibold text-lg">SkillConnect</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/skills" className="text-gray-300 hover:text-primary-400 transition-all duration-200">
                Browse Skills
              </Link>
              <Link href="/requests" className="text-gray-300 hover:text-primary-400 transition-all duration-200">
                Requests
              </Link>
              <Link href="/profile" className="btn-primary">
                Sign In
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md border border-gray-700 bg-secondary-900 shadow-lg"
                aria-label="Open menu"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-secondary-950 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-30 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-24 sm:pb-24">
          
          {/* Texture background on right side */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 z-0 pointer-events-none">
            <Image 
              src="/texture-bg.svg" 
              alt="Background texture" 
              width={800} 
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          
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
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-20"></div>
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

      {/* Featured Categories */}
      <section className="section bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Popular Skill Categories</h2>
            <p className="mt-4 text-lg text-gray-400">Discover skills across a variety of categories</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                href={`/skills?category=${category.name}`}
                className="group relative rounded-lg overflow-hidden bg-secondary-800 border border-secondary-700 hover:border-primary-500 shadow-custom transition-all duration-200 hover:shadow-custom-hover h-32"
                tabIndex={0}
                aria-label={`Browse ${category.name} skills`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 group-hover:from-primary-900/80 transition-all duration-200"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                  <div>
                    <div className="flex justify-center mb-2">
                      <span className="text-primary-400 text-3xl group-hover:scale-110 transition-transform duration-200">{category.icon}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">{category.name}</h3>
                    <p className="mt-1 text-xs text-gray-400">{category.count} skills</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/skills" 
              className="inline-flex items-center justify-center text-primary-400 hover:text-primary-300 font-medium transition-all duration-200 hover:underline"
            >
              View all categories
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="mt-4 text-lg text-gray-400">Simple steps to start sharing or finding skills</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-900 text-primary-400 mb-6 mx-auto animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:scale-110 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-3">Create Your Profile</h3>
              <p className="text-gray-400 text-center">Sign up and create a profile showcasing your skills, experience, and availability.</p>
            </div>
            
            <div className="card hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-900 text-primary-400 mb-6 mx-auto animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:scale-110 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-3">Find or List Skills</h3>
              <p className="text-gray-400 text-center">Browse skills or create a listing to share your expertise with the community.</p>
            </div>
            
            <div className="card hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-900 text-primary-400 mb-6 mx-auto animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:scale-110 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-3">Connect & Collaborate</h3>
              <p className="text-gray-400 text-center">Message, schedule sessions, and exchange skills with other members in the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What Our Community Says</h2>
            <p className="mt-4 text-lg text-gray-400">Hear from people who have shared and learned skills on our platform</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <div className="h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center text-primary-100">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section bg-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-400">Real people achieving real results through skill exchange</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-secondary-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 border border-secondary-700 hover:border-primary-500/50">
                <div className="h-48 overflow-hidden relative">
                  <Image 
                    src={story.image} 
                    alt={story.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-gray-400 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image 
                          src={story.authorImage} 
                          alt={story.author}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-white font-medium text-sm">{story.author}</p>
                        <p className="text-gray-500 text-xs">{story.location}</p>
                      </div>
                    </div>
                    <Link href={story.link} className="text-primary-400 hover:text-primary-300 font-medium text-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/success-stories" 
              className="btn-outline"
            >
              View All Success Stories
            </Link>
            <div className="mt-6">
              <Link 
                href="/case-studies/videos" 
                className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                Watch Video Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Using SkillConnect */}
      <section className="section bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Trusted By Organizations</h2>
            <p className="mt-4 text-lg text-gray-400">These organizations use SkillConnect to find talent and share knowledge</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-secondary-800 rounded-lg hover:bg-secondary-750 transition-all duration-300">
                <Image 
                  src={company.logo} 
                  alt={company.name}
                  width={160}
                  height={60}
                  className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="section bg-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">See SkillConnect in Action</h2>
            <p className="mt-4 text-lg text-gray-400">Explore our platform with this interactive preview</p>
          </div>
          
          <div className="bg-secondary-900 rounded-xl overflow-hidden border border-secondary-700 shadow-xl">
            <div className="p-4 bg-secondary-800 border-b border-secondary-700 flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="px-4 py-1 rounded-full bg-secondary-700 text-sm text-gray-400">skillconnect.com/demo</div>
              <div></div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              {/* Sidebar Navigation */}
              <div className="w-full md:w-64 bg-secondary-800 border-r border-secondary-700 p-4">
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-secondary-700 flex items-center justify-center text-primary-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">Guest User</p>
                      <p className="text-xs text-gray-400">Try demo features</p>
                    </div>
                  </div>
                </div>
                
                <nav className="space-y-1">
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary-900/20 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Dashboard
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-secondary-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Explore Skills
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-secondary-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-secondary-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    Messages
                  </a>
                </nav>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-6">
                <h3 className="text-lg font-medium text-white mb-4">Recommended Skills Near You</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {demoSkills.slice(0, 4).map((skill, index) => (
                    <div key={index} className="bg-secondary-800 rounded-lg p-4 border border-secondary-700 hover:border-primary-500/50 transition-all duration-200">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-primary-900/20 flex items-center justify-center text-primary-400 mr-3">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{skill.name}</h4>
                          <p className="text-sm text-gray-400">{skill.provider}</p>
                          <div className="flex items-center mt-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${i < skill.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-gray-400">{skill.reviews} reviews</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-4">Try the Skill Matching Quiz</h3>
                  <div className="bg-secondary-800 rounded-lg p-6 border border-secondary-700">
                    <p className="text-gray-400 mb-4">Find the perfect skill match based on your interests and needs</p>
                    <div className="space-y-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">What are you interested in learning?</label>
                        <select className="w-full bg-secondary-900 border border-secondary-600 rounded-md py-2 px-3 text-white">
                          <option>Web Development</option>
                          <option>Graphic Design</option>
                          <option>Language Learning</option>
                          <option>Music</option>
                          <option>Cooking</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">What skill can you offer in return?</label>
                        <select className="w-full bg-secondary-900 border border-secondary-600 rounded-md py-2 px-3 text-white">
                          <option>Photography</option>
                          <option>Writing</option>
                          <option>Fitness Training</option>
                          <option>Financial Advice</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <button className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-200">
                      Find Matches
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-400 mb-4">This is just a preview. Sign up to unlock all features!</p>
                  <Link href="/signup" className="btn-primary">
                    Try the Full Experience
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Targeting Section */}
      <section className="section bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Who is SkillConnect For?</h2>
            <p className="mt-4 text-lg text-gray-400">Find your place in our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700 hover:border-primary-500/50 transition-all duration-300">
              <div className="mb-4 h-16 w-16 rounded-full bg-teal-900/30 flex items-center justify-center text-teal-400 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m0-1.5h.75a.75.75 0 01.75.75v.75m0 0H21.75v-.75a.75.75 0 01.75-.75H21v-.75m0 0h-.75a.75.75 0 01-.75-.75V11.25a.75.75 0 01.75-.75H21v-.75m0 0h.75a.75.75 0 01.75.75v.75m0 0h.75m-1.5-1.5h-.375c-.621 0-1.125.504-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Freelancers</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exchange services to save costs</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build your portfolio with real projects</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Network with other professionals</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gain client testimonials</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/signup?type=freelancer" className="inline-block px-4 py-2 bg-teal-900/30 hover:bg-teal-900/50 text-teal-400 font-medium rounded-md transition-colors duration-200">
                  Perfect for Freelancers →
                </Link>
              </div>
            </div>
            
            <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700 hover:border-primary-500/50 transition-all duration-300">
              <div className="mb-4 h-16 w-16 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Students</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learn practical skills from experts</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exchange your knowledge for other skills</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build real-world experience</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connect with mentors in your field</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/signup?type=student" className="inline-block px-4 py-2 bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 font-medium rounded-md transition-colors duration-200">
                  Perfect for Students →
                </Link>
              </div>
            </div>
            
            <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700 hover:border-primary-500/50 transition-all duration-300">
              <div className="mb-4 h-16 w-16 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Startups</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access talent without large budgets</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Offer your expertise as payment</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Find co-founders with complementary skills</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build your network in the startup ecosystem</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/signup?type=startup" className="inline-block px-4 py-2 bg-blue-900/30 hover:bg-blue-900/50 text-blue-400 font-medium rounded-md transition-colors duration-200">
                  Perfect for Startups →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
                Ready to join SkillConnect?
              </h2>
              <p className="text-xl text-primary-100 mb-6">
                Here's exactly what happens when you sign up:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-primary-700 font-bold text-lg mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Create your profile</p>
                    <p className="text-primary-200 text-sm">Build your public profile with your skills, experience, and availability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-primary-700 font-bold text-lg mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Get matched with skill providers</p>
                    <p className="text-primary-200 text-sm">Our algorithm finds the perfect skill matches based on your interests.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-primary-700 font-bold text-lg mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">Connect and arrange exchanges</p>
                    <p className="text-primary-200 text-sm">Message directly to arrange skill exchanges, set up meetings, or share resources.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-primary-700 font-bold text-lg mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="text-white font-medium">Grow your skill network</p>
                    <p className="text-primary-200 text-sm">Build long-term relationships and continue expanding your skills over time.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup" 
                  className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
                >
                  Create Free Account
                </Link>
                <Link 
                  href="/how-it-works" 
                  className="btn-outline border-white text-white hover:bg-primary-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <div className="bg-primary-800 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">Free Account</h3>
                    <p className="text-primary-200">No credit card required</p>
                  </div>
                </div>
                
                <ul className="space-y-3 text-primary-100 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to skill exchange platform</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Up to 5 active skill listings</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Direct messaging with members</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community forum access</span>
                  </li>
                </ul>
                
                <Link 
                  href="/signup" 
                  className="w-full btn-primary bg-white text-primary-700 hover:bg-gray-100 flex items-center justify-center"
                >
                  <span>Sign Up Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary-900 border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-primary-400 transition-all duration-200">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Careers</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Blog</Link></li>
                <li><Link href="/press" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><Link href="/guidelines" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Guidelines</Link></li>
                <li><Link href="/discussions" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Discussions</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Events</Link></li>
                <li><Link href="/ambassadors" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Ambassadors</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Help Center</Link></li>
                <li><Link href="/safety" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Safety Center</Link></li>
                <li><Link href="/guides" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Skill Guides</Link></li>
                <li><Link href="/tutorials" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Tutorials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Cookie Policy</Link></li>
                <li><Link href="/accessibility" className="text-gray-400 hover:text-primary-400 transition-all duration-200">Accessibility</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
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
            
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-200 transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-200 transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-all duration-200 transform hover:scale-110">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SkillConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sample Data
const categories = [
  { name: 'Programming', icon: '👨‍💻', count: 156 },
  { name: 'Design', icon: '🎨', count: 132 },
  { name: 'Music', icon: '🎸', count: 94 },
  { name: 'Fitness', icon: '💪', count: 87 },
  { name: 'Cooking', icon: '👨‍🍳', count: 76 },
  { name: 'Languages', icon: '🌎', count: 68 },
  { name: 'Photography', icon: '📷', count: 62 },
  { name: 'Finance', icon: '💰', count: 58 },
];

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Guitar Teacher',
    quote: 'SkillConnect has helped me find students who are genuinely interested in learning guitar. The platform is easy to use and I can manage my schedule effectively.'
  },
  {
    name: 'Sophia Martinez',
    role: 'Language Learner',
    quote: 'I found an amazing Spanish tutor through SkillConnect. We meet weekly and my conversational skills have improved dramatically over the past few months.'
  },
  {
    name: 'Michael Chen',
    role: 'Coding Mentor',
    quote: 'As a software developer, I wanted to give back to the community. SkillConnect made it easy to connect with beginners who needed guidance with programming.'
  }
];

// Success Stories Data
const successStories = [
  {
    title: "From Student to Skilled Developer",
    description: "How Mike learned React and built a portfolio through skill exchanges with designers",
    image: "/story-placeholder.svg",
    author: "Mike Johnson",
    authorImage: "/user-placeholder.svg",
    location: "Toronto, Canada",
    category: "Programming",
    link: "/success-stories/mike-johnson"
  },
  {
    title: "Language Exchange Success",
    description: "Sarah improved her Spanish by teaching English to native speakers",
    image: "/story-placeholder.svg",
    author: "Sarah Chen",
    authorImage: "/user-placeholder.svg",
    location: "New York, USA",
    category: "Languages",
    link: "/success-stories/sarah-chen"
  },
  {
    title: "Photography Skills for Website Design",
    description: "How David exchanged photography sessions for a professional website",
    image: "/story-placeholder.svg",
    author: "David Rodriguez",
    authorImage: "/user-placeholder.svg",
    location: "Madrid, Spain",
    category: "Photography",
    link: "/success-stories/david-rodriguez"
  }
];

// Companies Data
const companies = [
  {
    name: "TechStart Inc",
    logo: "/company-logo-1.svg"
  },
  {
    name: "Creative Studios",
    logo: "/company-logo-1.svg"
  },
  {
    name: "Learn Together",
    logo: "/company-logo-1.svg"
  },
  {
    name: "Community Hub",
    logo: "/company-logo-1.svg"
  }
];

// Demo Skills Data
const demoSkills = [
  {
    name: "Web Development",
    provider: "Alex Johnson",
    rating: 5,
    reviews: 24,
    icon: "👨‍💻"
  },
  {
    name: "Graphic Design",
    provider: "Sophia Williams",
    rating: 4,
    reviews: 18,
    icon: "🎨"
  },
  {
    name: "Spanish Lessons",
    provider: "Miguel Hernandez",
    rating: 5,
    reviews: 31,
    icon: "🌎"
  },
  {
    name: "Photography",
    provider: "Emma Davis",
    rating: 4,
    reviews: 15,
    icon: "📷"
  },
  {
    name: "Yoga Instruction",
    provider: "Lily Chen",
    rating: 5,
    reviews: 28,
    icon: "🧘‍♀️"
  },
  {
    name: "Financial Planning",
    provider: "James Wilson",
    rating: 4,
    reviews: 12,
    icon: "💰"
  }
]; 