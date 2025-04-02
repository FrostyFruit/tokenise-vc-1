
import React from 'react';
import { X, Check, ArrowRight, ArrowLeft } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Tokenise?</h2>
        
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-16 shadow-sm">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Built by founders, for founders.</h3>
              <div className="flex space-x-2 text-tokenise-purple">
                <ArrowLeft className="h-5 w-5" />
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
            
            <div className="border-l-4 border-tokenise-purple pl-4 py-2 italic text-gray-600">
              "The moment we presented our tokenomics to investors, their entire demeanor changed. Skepticism transformed into confidence within minutes."
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-red-500 flex-shrink-0">
                  <X className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-gray-700">Outdated spreadsheets →</span>
                  <span className="ml-2 text-green-600 font-medium flex items-center">
                    <Check className="h-5 w-5 mr-1 text-green-600" />
                    Institutional models
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-red-500 flex-shrink-0">
                  <X className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-gray-700">Weeks of revisions →</span>
                  <span className="ml-2 text-green-600 font-medium flex items-center">
                    <Check className="h-5 w-5 mr-1 text-green-600" />
                    Launch-ready in hours
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-red-500 flex-shrink-0">
                  <X className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-gray-700">Price collapse →</span>
                  <span className="ml-2 text-green-600 font-medium flex items-center">
                    <Check className="h-5 w-5 mr-1 text-green-600" />
                    Simulated long-term sustainability
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-tokenise-light-purple rounded-lg p-6 mt-4">
              <h4 className="text-xl font-semibold text-center mb-4">You only get one shot at your TGE.</h4>
              <p className="text-center mb-2">
                While 94% of founders saw why their token failed, you'll be focused on your actual product and expanding to new chains.
              </p>
              <p className="text-center italic">
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
