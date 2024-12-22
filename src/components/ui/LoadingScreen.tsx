import React, { useState, useEffect } from 'react';
import { LoadingLogo } from './loading/LoadingLogo';
import { LoadingProgress } from './loading/LoadingProgress';
import { LoadingMessage } from './loading/LoadingMessage';

interface LoadingScreenProps {
  minimumDuration?: number;
}

export function LoadingScreen({ minimumDuration = 2500 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleComplete = () => {
    // Add a small delay before hiding to ensure smooth transition
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-white transition-opacity duration-500 ${
        !isVisible ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#2E7D3208_1px,transparent_1px),linear-gradient(-45deg,#2E7D3208_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center">
          <LoadingLogo />
          <div className="mt-12">
            <LoadingProgress duration={minimumDuration} onComplete={handleComplete} />
          </div>
          <LoadingMessage />
        </div>
      </div>
    </div>
  );
}