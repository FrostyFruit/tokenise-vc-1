
import React from 'react';
import { Code, X, Check } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="why-tokenise">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-tokenise-black">Why Tokenise?</h2>
        
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-10 mb-16 shadow-sm">
          <div className="flex flex-col space-y-8">
            <div className="mb-6 flex justify-center items-center">
              <h3 className="text-2xl font-bold text-tokenise-black">Built by token engineers, for VC portfolios.</h3>
              <Code size={32} className="text-tokenise-purple ml-3" />
            </div>
            
            <p className="text-lg italic text-tokenise-deep-purple/90 mb-8 border-l-4 border-tokenise-purple pl-4 text-left mx-auto max-w-2xl">
              "We stopped wasting diligence time on token models we couldn't properly assess. Now we're funding projects we can confidently take to market"
            </p>
            
            <div className="space-y-6 max-w-2xl mx-auto text-center py-2">
              <div className="flex items-center justify-center gap-3">
                <span className="text-red-500 text-2xl font-bold">❌</span>
                <span className="text-tokenise-deep-blue text-lg">Wasting diligence time on flawed models <span className="text-green-600 font-medium">→ <span className="inline-flex items-center"><span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-1">✓</span> Standardized evaluation metrics that identify winners</span></span></span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <span className="text-red-500 text-2xl font-bold">❌</span>
                <span className="text-tokenise-deep-blue text-lg">Portfolio tokens crashing post-launch <span className="text-green-600 font-medium">→ <span className="inline-flex items-center"><span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-1">✓</span> Sustainable designs with predictable performance</span></span></span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <span className="text-red-500 text-2xl font-bold">❌</span>
                <span className="text-tokenise-deep-blue text-lg">Founders focused on token price not product <span className="text-green-600 font-medium">→ <span className="inline-flex items-center"><span className="bg-green-500 text-white rounded-md w-5 h-5 inline-flex justify-center items-center mr-1">✓</span> Projects built on stability that attract institutional capital</span></span></span>
              </div>
            </div>
            
            <div className="mt-12 py-8 px-6 bg-gradient-to-br from-tokenise-purple to-tokenise-deep-purple rounded-xl text-center mx-auto max-w-2xl text-white">
              <h4 className="text-xl font-bold mb-4">You only get one shot at your TGE.</h4>
              <p className="mb-4">
                While most write off token failures as "market conditions," you'll be backing projects with mathematical certainty. The average crypto fund loses 68% of value to failed token launches—yours won't.
              </p>
              <p className="italic font-medium">
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
