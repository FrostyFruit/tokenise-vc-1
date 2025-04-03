
import React from 'react';
import { Code } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="why-tokenise">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-tokenise-black">Why Tokenise?</h2>
        
        <div className="glass-card p-8 md:p-10 animate-fade-in-right text-center">
          <div className="mb-6 flex justify-center items-center">
            <h3 className="text-2xl font-bold text-tokenise-black">Built by token engineers, for VC portfolios.</h3>
            <Code size={32} className="text-tokenise-purple ml-3" />
          </div>
          
          <p className="text-lg italic text-tokenise-deep-purple/90 mb-8 border-l-4 border-tokenise-purple pl-4 text-left mx-auto max-w-2xl">
            "We stopped wasting diligence time on token models we couldn't properly assess. Now we're funding projects we can confidently take to market"
          </p>
          
          <div className="space-y-6 max-w-2xl mx-auto text-center py-2">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-1 w-full">
                <span className="text-red-500 text-2xl font-bold mr-3">❌</span>
                <span className="text-gray-700 text-lg">Wasting diligence time on flawed models</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-green-600 font-medium flex items-center">
                  <span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-2">✓</span> 
                  Standardized evaluation metrics that identify winners
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-1 w-full">
                <span className="text-red-500 text-2xl font-bold mr-3">❌</span>
                <span className="text-gray-700 text-lg">Portfolio tokens crashing post-launch</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-green-600 font-medium flex items-center">
                  <span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-2">✓</span> 
                  Sustainable designs with predictable performance
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-1 w-full">
                <span className="text-red-500 text-2xl font-bold mr-3">❌</span>
                <span className="text-gray-700 text-lg">Founders focused on token price not product</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-green-600 font-medium flex items-center">
                  <span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-2">✓</span> 
                  Projects built on stability that attract institutional capital
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 py-8 px-6 bg-tokenise-gradient rounded-xl text-center mx-auto max-w-2xl text-tokenise-black">
            <h4 className="text-xl font-bold mb-4 text-center">You only get one shot at your TGE.</h4>
            <p className="mb-4 text-center">
              While most write off token failures as "market conditions," you'll be backing projects with mathematical certainty. The average crypto fund loses 68% of value to failed token launches—yours won't.
            </p>
            <p className="italic font-medium text-center">
              The tokenomics quality gap is your competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
