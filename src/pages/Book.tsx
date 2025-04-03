
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Book = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-tokenise-purple">
        <Navbar />
      </div>
      
      <main className="flex-grow">
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Book Your Session</h1>
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="aspect-auto min-h-[800px]">
                <iframe
                  src="https://calendly.com/daniel-tokenise/30min"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[800px]"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Book;
