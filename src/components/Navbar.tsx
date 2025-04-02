
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex justify-between items-center">
      <Logo />

      <div className="hidden md:flex items-center space-x-8">
        <Link to="/features" className="font-medium">Features</Link>
        <Link to="/enterprise" className="font-medium">Enterprise</Link>
        <Link to="/resources" className="font-medium">Resources</Link>
      </div>

      <Button asChild className="bg-tokenise-purple hover:bg-tokenise-dark-purple text-white rounded-full px-6">
        <Link to="/book">Launch</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
