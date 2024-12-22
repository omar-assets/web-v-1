import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, LogoProps } from './LogoSystem';

interface LogoLinkProps extends LogoProps {
  href?: string;
}

export function LogoLink({ href = '/', ...props }: LogoLinkProps) {
  return (
    <Link 
      to={href}
      className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg hover:opacity-90 transition-opacity"
    >
      <Logo {...props} />
    </Link>
  );
}