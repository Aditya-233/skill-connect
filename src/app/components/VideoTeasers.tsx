import React, { useState } from 'react';
import Image from 'next/image';

interface VideoProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
}

const videoData: VideoProps[] = [
  {
    id: "video1",
    title: "Introduction to Web Development with React",
    thumbnail: "/video-thumbnail-1.jpg", 
    duration: "2:45",
    category: "Programming"
  },
  {
    id: "video2",
    title: "Graphic Design Fundamentals: Color Theory",
    thumbnail: "/video-thumbnail-2.jpg",
    duration: "3:12",
    category: "Design"
  },
  {
    id: "video3",
    title: "How to Play Guitar: Beginner's First Lesson",
    thumbnail: "/video-thumbnail-3.jpg",
    duration: "4:18",
    category: "Music"
  },
  {
    id: "video4",
    title: "Spanish for Beginners: Basic Conversation",
    thumbnail: "/video-thumbnail-4.jpg",
    duration: "3:31",
    category: "Languages"
  }
];

const VideoTeasers: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const openVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };
  
  const closeVideo = () => {
    setActiveVideo(null);
  };
  
  return (
    <section className="py-12 bg-secondary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-900/30 rounded-full mb-3">PREVIEW LESSONS</span>
          <h2 className="text-3xl font-bold text-white">Watch Before You Learn</h2>
          <p className="mt-4 text-lg text-gray-400">Get a taste of different skills with these preview videos</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoData.map((video) => (
            <div key={video.id} className="video-teaser">
              <div 
                className="relative overflow-hidden rounded-lg cursor-pointer" 
                onClick={() => openVideo(video.id)}
              >
                <Image 
                  src={video.thumbnail || "/video-placeholder.jpg"} 
                  alt={video.title}
                  width={400}
                  height={225}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-500/80 flex items-center justify-center backdrop-blur-sm hover:bg-primary-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-white ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-primary-900/80 text-primary-300 text-xs font-medium px-2 py-1 rounded">
                    {video.category}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-white font-medium line-clamp-2">{video.title}</h3>
            </div>
          ))}
        </div>
        
        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative w-full max-w-4xl">
              <button 
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white hover:text-primary-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe 
                  src={`https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1`} 
                  title="Video player"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {videoData.find(v => v.id === activeVideo)?.title}
                </h3>
                <p className="text-gray-300">
                  This is a preview lesson from our full course. Sign up to access the complete learning experience.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <a 
            href="/courses" 
            className="btn-primary"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTeasers; 