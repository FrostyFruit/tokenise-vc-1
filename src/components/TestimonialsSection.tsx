
import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
      <div>
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Tokenise helped us model emissions that would've taken weeks — and saved our launch.",
      author: "Alex Chen",
      title: "Founder",
      company: "TechToken"
    },
    {
      quote: "We've cut our token due diligence time in half while improving accuracy.",
      author: "Sarah Williams",
      title: "Partner",
      company: "Blockchain Ventures"
    },
    {
      quote: "The simulation capabilities alone are worth 10x the price.",
      author: "Michael Johnson",
      title: "CTO",
      company: "DeFi Platform"
    }
  ];

  const partners = [
    { name: "VentureDAO", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop&auto=format" },
    { name: "TechFund", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop&auto=format" },
    { name: "BlockVentures", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format" },
    { name: "CryptoAlliance", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop&auto=format" },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-32 relative">
                <AspectRatio ratio={16/9} className="w-full h-full">
                  <img 
                    src={partner.image} 
                    alt={`${partner.name} logo`} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="py-4 px-6 text-center">
                <p className="font-medium text-tokenise-deep-blue">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
