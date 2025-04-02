
import React from 'react';
import { Code, X, Check } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

const WhySection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="why-tokenise">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-tokenise-black">Why Tokenise?</h2>
        
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-10 mb-16 shadow-sm">
          <div className="flex flex-col space-y-8">
            <div className="mb-6 flex justify-center items-center">
              <h3 className="text-2xl font-bold text-tokenise-black">Built by founders, for founders.</h3>
              <Code size={32} className="text-tokenise-purple ml-3" />
            </div>
            
            {/* Brand photos image box */}
            <div className="w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Brand showcase" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            
            <p className="text-lg italic text-tokenise-deep-purple/90 mb-8 border-l-4 border-tokenise-purple pl-4 text-left mx-auto max-w-2xl">
              "The moment we presented our tokenomics to investors, their entire demeanor changed. Skepticism transformed into confidence within minutes."
            </p>
            
            <div className="space-y-6 max-w-2xl mx-auto text-center py-2">
              <div className="flex items-center justify-center gap-3">
                <span className="text-red-500 text-2xl font-bold">✕</span>
                <span className="text-tokenise-deep-blue text-lg">Outdated spreadsheets <span className="text-green-600 font-medium">→ <span className="inline-flex items-center"><span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-1">✓</span> Institutional models</span></span></span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <span className="text-red-500 text-2xl font-bold">✕</span>
                <span className="text-tokenise-deep-blue text-lg">Weeks of revisions <span className="text-green-600 font-medium">→ <span className="inline-flex items-center"><span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-1">✓</span> Launch-ready in hours</span></span></span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <span className="text-red-500 text-2xl font-bold">✕</span>
                <span className="text-tokenise-deep-blue text-lg">Price collapse <span className="text-green-600 font-medium">→ <span className="inline-flex items-center"><span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-1">✓</span> Simulated long-term sustainability</span></span></span>
              </div>
            </div>
            
            <div className="mt-12 py-8 px-6 bg-gradient-to-br from-tokenise-purple to-tokenise-deep-purple rounded-xl text-center mx-auto max-w-2xl text-white">
              <h4 className="text-xl font-bold mb-4">You only get one shot at your TGE.</h4>
              <p className="mb-4">
                While 94% of founders saw why their token failed, you'll be focused on your actual product and expanding to new chains.
              </p>
              <p className="italic font-medium">
                The difference isn't luck, it's professional infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
