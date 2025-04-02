
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-200">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-gray-600 mt-2">
              Professional token modeling and simulation platform for Web3 founders and investors.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link></li>
              <li><Link to="/enterprise" className="text-sm text-gray-600 hover:text-gray-900">Enterprise</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link to="/integrations" className="text-sm text-gray-600 hover:text-gray-900">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-sm text-gray-600 hover:text-gray-900">Documentation</Link></li>
              <li><Link to="/guides" className="text-sm text-gray-600 hover:text-gray-900">Guides</Link></li>
              <li><Link to="/api" className="text-sm text-gray-600 hover:text-gray-900">API</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link to="/legal" className="text-sm text-gray-600 hover:text-gray-900">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-sm text-gray-500">© 2025 Tokenise. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Twitter</Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-gray-900">LinkedIn</Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Discord</Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-gray-900">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
