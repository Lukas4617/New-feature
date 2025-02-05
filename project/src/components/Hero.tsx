import React, { useEffect, useState } from 'react';
import { Gamepad2 } from 'lucide-react';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      </div>
      
      <div 
        className="z-10 text-center px-4 transform transition-transform duration-300 hover:scale-105"
        style={{
          transform: `translateY(${-offset * 0.2}px)`,
        }}
      >
        <div className="flex justify-center mb-6 animate-float">
          <Gamepad2 className="h-16 w-16 text-purple-500 transform hover:rotate-12 transition-transform duration-300" />
        </div>
        <h1 
          className="text-5xl md:text-6xl font-bold mb-6 relative"
          style={{
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          Your Gateway to Gaming Excellence
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
          Discover, play, and connect with gamers worldwide. Join our community today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-4px] hover:shadow-lg">
            Browse Games
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-4px] hover:shadow-lg">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
}