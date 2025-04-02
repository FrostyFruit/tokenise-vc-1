
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black max-w-3xl">
        Welcome to Tokenise.
      </h1>
      <p className="text-center text-lg md:text-xl text-gray-800 mb-10 max-w-2xl">
        Build institutional-grade token models that investors recognize instantly
      </p>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-4xl w-full shadow-lg mb-12">
        <div className="aspect-video bg-tokenise-hero-purple/40 rounded-lg flex items-center justify-center relative overflow-hidden">
          {!videoLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-all">
                <Play className="h-8 w-8 text-white fill-current" />
              </div>
              <p className="text-center text-gray-600 mt-4">Click to watch our personal message for founders</p>
            </div>
          )}
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Tokenise Introduction" 
            className={`w-full h-full ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            onLoad={() => setVideoLoaded(true)}
          />
        </div>
      </div>
      
      <Button asChild className="bg-tokenise-purple hover:bg-tokenise-dark-purple text-white rounded-full py-6 px-10 text-base font-medium">
        <Link to="/book">Book a Free Strategy Session</Link>
      </Button>
    </section>
  );
};

export default VideoSection;
