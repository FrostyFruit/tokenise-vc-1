
import React from 'react';
import Navbar from '../components/Navbar';
import VideoSection from '../components/VideoSection';
import CalendlySection from '../components/CalendlySection';
import WhySection from '../components/WhySection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Grid overlay background that spans full page */}
      <div className="fixed inset-0 bg-gradient-tech bg-grid-overlay bg-100 z-0 pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navbar />
        <VideoSection />
      </div>
      
      <main className="relative z-10">
        <CalendlySection />
        <WhySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer className="relative z-10" />
    </div>
  );
};

export default Index;
