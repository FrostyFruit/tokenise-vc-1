
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-tokenise-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-tokenise-black">
          Start Building Smarter
        </h2>
        
        <p className="text-lg text-tokenise-deep-purple/90 mb-8 max-w-2xl mx-auto">
          Join the leading Web3 founders, VCs, and institutional allocators already using Tokenise for strategic token model development.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-tokenise-purple hover:bg-tokenise-dark-purple text-white"
            asChild
          >
            <Link to="/book">Book a Free Strategy Session</Link>
          </Button>
        </div>
        
        <div className="bg-white/30 backdrop-blur-sm rounded-lg py-3 px-6 inline-block">
          <p className="text-tokenise-deep-purple font-medium">
            Join 100+ Web3 founders already using Tokenise
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
