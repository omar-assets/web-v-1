import React from 'react';

interface LoadingBarProps {
  progress: number;
}

export function LoadingBar({ progress }: LoadingBarProps) {
  return (
    <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}