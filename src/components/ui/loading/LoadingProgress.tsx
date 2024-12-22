import React, { useState, useEffect } from 'react';

interface LoadingProgressProps {
  duration?: number;
  onComplete?: () => void;
}

export function LoadingProgress({ duration = 2500, onComplete }: LoadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, onComplete]);

  return (
    <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}