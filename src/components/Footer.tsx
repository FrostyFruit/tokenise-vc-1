
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-200">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-gray-600 mt-2">
              Professional token modeling and simulation platform for Web3 founders and investors.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="https://app.tokenise.tech/home" className="text-sm text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Features</a></li>
              <li><a href="https://app.tokenise.tech/home" className="text-sm text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Enterprise</a></li>
              <li><a href="https://app.tokenise.tech/home" className="text-sm text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Pricing</a></li>
              <li><a href="https://app.tokenise.tech/home" className="text-sm text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://www.tokenise.tech/" className="text-sm text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">About</a></li>
              <li><a href="https://www.tokenise.tech/" className="text-sm text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Careers</a></li>
              <li><a href="https://www.tokenise.tech/" className="text-sm text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Contact</a></li>
              <li><a href="https://www.tokenise.tech/" className="text-sm text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-sm text-gray-500">© 2025 Tokenise. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://x.com/tokenise_tech" className="text-sm text-gray-500 hover:text-gray-900" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.linkedin.com/company/tokenisetech" className="text-sm text-gray-500 hover:text-gray-900" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@Tokenise_Tech" className="text-sm text-gray-500 hover:text-gray-900" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
