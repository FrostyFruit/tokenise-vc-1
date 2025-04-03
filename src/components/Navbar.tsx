
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="py-6 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/public/lovable-uploads/62e2f33c-ee03-40dd-b7da-02ba0d889a63.png" 
            alt="Tokenise Logo" 
            className="h-10 md:h-12"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="https://www.tokenise.tech/#feature-section" className="font-medium text-black" target="_blank" rel="noopener noreferrer">Features</a>
        <a href="https://www.tokenise.tech/#feature-section" className="font-medium text-black" target="_blank" rel="noopener noreferrer">Enterprise</a>
        <a href="https://www.tokenise.tech/resources" className="font-medium text-black" target="_blank" rel="noopener noreferrer">Resources</a>
      </div>

      <Button asChild className="bg-white hover:bg-gray-100 text-tokenise-purple rounded-full px-6">
        <a href="https://app.tokenise.tech/" target="_blank" rel="noopener noreferrer">Launch</a>
      </Button>
    </nav>
  );
};

export default Navbar;
