
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
      author: "Jay Pearce",
      title: "Founder",
      company: "Prime Mates Club"
    },
    {
      quote: "We've cut our token due diligence time in half while improving accuracy.",
      author: "Charlie Husats",
      title: "CoFounder",
      company: "Bitlayer"
    },
    {
      quote: "Tokenise positioned us best for successful investor conversations",
      author: "Chris Brady",
      title: "Founder",
      company: "Archipelago"
    }
  ];

  const partners = [
    { name: "RAK Dao", image: "/lovable-uploads/8ecaabfd-736a-49f2-a40d-1b4174b3b2d1.png" },
    { name: "Bitlayer", image: "/lovable-uploads/5dd985cb-c1c0-400d-8df4-eb5be47836c9.png" },
    { name: "Nozomi", image: "/lovable-uploads/61897188-a044-4e3b-af56-fe2390b19a95.png" },
    { name: "Archipelago", image: "/lovable-uploads/ade6a02e-9a29-4d00-9e02-341b4b4ba48a.png" },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-md overflow-hidden flex items-center justify-center p-2">
                <img 
                  src={partner.image} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-tokenise-deep-blue text-center">{partner.name}</p>
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
