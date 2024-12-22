import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/brix-logo.svg"
      alt="BRiX Assets - Institutional-Grade Investment Platform"
      className={`h-8 w-auto ${className}`}
      width="160"
      height="40"
    />
  );
}