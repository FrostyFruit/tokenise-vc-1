
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="bg-tokenise-purple py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Start Building Smarter</h2>
        <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
          Join the leading Web3 founders, VCs, and institutional allocators already using Tokenise for strategic token model development.
        </p>
        
        <Button asChild className="bg-tokenise-purple text-white border-2 border-white hover:bg-tokenise-dark-purple rounded-full py-6 px-10 text-base font-medium mb-8">
          <Link to="/book">Book a Free Strategy Session</Link>
        </Button>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-full py-3 px-6 inline-block">
          <p className="text-gray-800">Join 100+ Web3 founders already using Tokenise</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
