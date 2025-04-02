
import React from 'react';

const CalendlySection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Reserve Your Private Session with Tokenise</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Pick a time that works for you. We'll walk you through how Tokenise can replace weeks of tokenomics guesswork with simulations, liquidity insights, and investor-ready modeling.
        </p>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="aspect-[4/3] md:aspect-[16/9] w-full">
            {/* Calendly inline widget */}
            <iframe
              src="https://calendly.com/d/mrf-3jk-v56/15-minute-intro-call"
              title="Calendly Scheduling"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
