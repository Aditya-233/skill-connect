import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  image: string;
  readTime: string;
}

const blogPosts: BlogPostProps[] = [
  {
    title: "5 Tips for Effective Skill Sharing in a Digital World",
    excerpt: "Learn how to effectively share your skills online and make meaningful connections with learners.",
    date: "June 15, 2023",
    category: "Teaching",
    slug: "effective-skill-sharing-tips",
    image: "/blog-1.jpg",
    readTime: "4 min read"
  },
  {
    title: "How to Barter Skills Without Awkward Conversations",
    excerpt: "Master the art of skill bartering with these straightforward communication techniques.",
    date: "July 3, 2023",
    category: "Bartering",
    slug: "skill-bartering-guide",
    image: "/blog-2.jpg",
    readTime: "6 min read"
  },
  {
    title: "The Power of Learning in Community vs. Solo Study",
    excerpt: "Discover why learning skills in a community setting can accelerate your progress dramatically.",
    date: "July 28, 2023",
    category: "Learning",
    slug: "community-learning-benefits",
    image: "/blog-3.jpg",
    readTime: "5 min read"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-900/30 rounded-full mb-3">RESOURCES</span>
          <h2 className="text-3xl font-bold text-white">Skill Sharing Tips & Guides</h2>
          <p className="mt-4 text-lg text-gray-400">Free resources to help you get the most out of your skill sharing journey</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={post.image || '/blog-placeholder.jpg'} 
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 hover:text-primary-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium mt-auto"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="btn-outline"
          >
            Browse All Articles
          </Link>
        </div>
        
        <div className="mt-16 bg-secondary-800 rounded-lg p-6 border border-secondary-700">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-bold text-white mb-3">Get Weekly Skill Tips</h3>
              <p className="text-gray-300 mb-4">Join our newsletter for the latest skill-sharing techniques, community stories, and exclusive opportunities.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input-field flex-grow"
                  required
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 