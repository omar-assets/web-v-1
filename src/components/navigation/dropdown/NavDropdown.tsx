import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { NavDropdownItem } from './NavDropdownItem';

interface NavDropdownProps {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = items.some(item => item.href === location.pathname);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors
          ${isActive ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}
        `}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 py-2 bg-white rounded-lg shadow-lg border border-gray-100 animate-fade-in">
          {items.map((item) => (
            <NavDropdownItem
              key={item.href}
              {...item}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </div>
  );
}