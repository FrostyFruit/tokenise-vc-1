
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-tokenise-black tracking-tight mb-4">
          Welcome to Tokenise.
        </h1>
        
        <p className="text-lg md:text-xl text-tokenise-deep-purple/90 mb-10 max-w-2xl mx-auto font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Separate red flags from opportunities, instantly
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-4xl w-full shadow-lg mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="aspect-video bg-tokenise-hero-purple/40 rounded-lg flex items-center justify-center relative overflow-hidden">
            {!videoLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-tokenise-purple/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-tokenise-purple transition-all">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <p className="text-center text-tokenise-deep-purple/90 mt-4">
                  Click to watch our personal message for founders
                </p>
              </div>
            )}
            <iframe 
              src="https://www.youtube.com/embed/ExGz_S6rPmY" 
              title="Tokenise Introduction" 
              className={`w-full h-full ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
            />
          </div>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button 
            size="lg" 
            className="bg-tokenise-purple hover:bg-tokenise-dark-purple text-white rounded-full py-6 px-10 text-base font-medium"
            asChild
          >
            <Link to="/book">Book a Free Strategy Session</Link>
          </Button>
          
          <p className="text-tokenise-deep-purple font-bold italic mt-6 mb-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Don't believe us? Try it out.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-tokenise-purple border border-tokenise-purple rounded-full py-6 px-10 text-base font-medium animate-fade-in"
            asChild
            style={{ animationDelay: "0.7s" }}
          >
            <a href="https://app.tokenise.tech/" target="_blank" rel="noopener noreferrer">
              Launch Tokenise
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
