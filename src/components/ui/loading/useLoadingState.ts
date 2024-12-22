import { useState, useEffect } from 'react';

const MIN_DURATION = 2500; // 2.5 seconds minimum loading time

export function useLoadingState() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min((elapsed / MIN_DURATION) * 100, 100);
      
      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsVisible(false);
        }, 500); // Fade out duration
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return { progress, isVisible };
}