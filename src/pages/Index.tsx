
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
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-b from-tokenise-hero-purple to-tokenise-hero-light">
        <Navbar />
        <VideoSection />
      </div>
      
      <main>
        <CalendlySection />
        <WhySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
