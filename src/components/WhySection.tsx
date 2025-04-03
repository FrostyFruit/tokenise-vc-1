
import React from 'react';
import { ChevronLeft, ChevronRight, X, Check } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="why-tokenise">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-tokenise-black">Why Tokenise?</h2>
        
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-10 mb-16 shadow-sm">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <h3 className="text-2xl font-bold text-tokenise-black">Built by token engineers, for VC portfolios.</h3>
              <div className="flex space-x-2">
                <ChevronLeft className="text-tokenise-purple opacity-50 cursor-pointer hover:opacity-100" />
                <ChevronRight className="text-tokenise-purple cursor-pointer" />
              </div>
            </div>
            
            <div className="border-l-4 border-tokenise-purple pl-4 py-2 mb-8">
              <p className="text-lg italic text-purple-400">
                "We stopped wasting diligence time on token models we couldn't properly assess. Now we're funding projects we can confidently take to market"
              </p>
            </div>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <X size={24} className="text-red-500" />
                </div>
                <p className="text-lg text-gray-700">Wasting diligence time on flawed models</p>
              </div>
              
              <div className="flex items-start space-x-4 ml-12">
                <div className="flex-shrink-0 mt-1 bg-green-500 rounded-full p-1">
                  <Check size={18} className="text-white" />
                </div>
                <p className="text-lg text-green-600">Standardized evaluation metrics that identify winners</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <X size={24} className="text-red-500" />
                </div>
                <p className="text-lg text-gray-700">Portfolio tokens crashing post-launch</p>
              </div>
              
              <div className="flex items-start space-x-4 ml-12">
                <div className="flex-shrink-0 mt-1 bg-green-500 rounded-full p-1">
                  <Check size={18} className="text-white" />
                </div>
                <p className="text-lg text-green-600">Sustainable designs with predictable performance</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <X size={24} className="text-red-500" />
                </div>
                <p className="text-lg text-gray-700">Founders focused on token price not product</p>
              </div>
              
              <div className="flex items-start space-x-4 ml-12">
                <div className="flex-shrink-0 mt-1 bg-green-500 rounded-full p-1">
                  <Check size={18} className="text-white" />
                </div>
                <p className="text-lg text-green-600">Projects built on stability that attract institutional capital</p>
              </div>
            </div>
            
            <div className="mt-10 py-8 px-6 bg-purple-100 rounded-xl text-center mx-auto max-w-2xl">
              <h4 className="text-xl font-bold mb-4">You only get one shot at your TGE.</h4>
              <p className="mb-4">
                While most write off token failures as "market conditions," you'll be backing projects with mathematical certainty. The average crypto fund loses 68% of value to failed token launches—yours won't.
              </p>
              <p className="italic font-medium text-gray-700">
                The tokenomics quality gap is your competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
