import React from 'react';
import { Logo } from '../logo/LogoSystem';

export function LoadingLogo() {
  return (
    <div className="relative transform scale-150">
      <Logo 
        variant="icon"
        size="xl"
        className="animate-pulse"
        aria-label="Loading..."
      />
      <div className="absolute -inset-4">
        <div className="w-full h-full animate-ping rounded-full bg-primary/20" />
      </div>
    </div>
  );
}