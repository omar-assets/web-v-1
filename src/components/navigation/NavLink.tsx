import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function NavLink({ href, children, external }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  const baseClasses = "flex items-center gap-1 px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50";
  const activeClasses = isActive 
    ? "text-primary bg-primary/10 font-medium" 
    : "text-gray-600 hover:text-primary hover:bg-gray-50";

  if (external) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${activeClasses}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <ExternalLink className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={`${baseClasses} ${activeClasses}`}
    >
      {children}
    </Link>
  );
}