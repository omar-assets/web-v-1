import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LogoIcon({ className = '', size = 'md' }: LogoIconProps) {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <img
      src="/brix-icon.svg"
      alt="BRiX Assets Icon"
      className={`${sizes[size]} ${className}`}
      width="32"
      height="32"
    />
  );
}