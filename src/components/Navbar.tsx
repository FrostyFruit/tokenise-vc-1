
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="py-6 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-purple-800 text-white font-bold w-8 h-8 flex items-center justify-center rounded mr-2">TF</div>
        <span className="font-bold text-black tracking-wide">TOKENISE</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link to="/features" className="font-medium text-black">Features</Link>
        <Link to="/enterprise" className="font-medium text-black">Enterprise</Link>
        <Link to="/resources" className="font-medium text-black">Resources</Link>
      </div>

      <Button asChild className="bg-white hover:bg-gray-100 text-tokenise-purple rounded-full px-6">
        <Link to="/book">Launch</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
