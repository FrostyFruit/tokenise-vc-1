
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-tokenise-purple text-white flex items-center justify-center rounded">
          <span className="font-bold text-sm">TF</span>
        </div>
        <span className="font-bold text-lg tracking-tight">TOKENISE</span>
      </div>
    </Link>
  );
};

export default Logo;
