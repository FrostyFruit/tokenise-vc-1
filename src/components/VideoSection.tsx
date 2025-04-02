
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-tokenise-purple py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black max-w-3xl">
        Welcome to Tokenise.
      </h1>
      <p className="text-center text-lg md:text-xl text-gray-800 mb-10 max-w-2xl">
        Build institutional-grade token models that investors recognize instantly
      </p>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-4xl w-full shadow-lg mb-12">
        <div className="aspect-video bg-tokenise-light-purple/60 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Tokenise Introduction" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            {/* Fallback if iframe doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
              <div className="w-16 h-16 bg-tokenise-purple/80 rounded-full flex items-center justify-center cursor-pointer">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
              <p className="text-center text-gray-600 mt-4">Click to watch our personal message for founders</p>
            </div>
          </div>
        </div>
      </div>
      
      <Button asChild className="bg-tokenise-purple text-white border-2 border-white hover:bg-tokenise-dark-purple rounded-full py-6 px-10 text-base font-medium">
        <Link to="/book">Book a Free Strategy Session</Link>
      </Button>
    </section>
  );
};

export default VideoSection;
