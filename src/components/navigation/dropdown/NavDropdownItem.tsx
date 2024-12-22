import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavDropdownItemProps {
  label: string;
  href: string;
  onClick: () => void;
}

export function NavDropdownItem({ label, href, onClick }: NavDropdownItemProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`block px-4 py-2 text-sm transition-colors ${
        isActive
          ? 'text-primary bg-primary/5'
          : 'text-gray-600 hover:text-primary hover:bg-gray-50'
      }`}
    >
      {label}
    </Link>
  );
}