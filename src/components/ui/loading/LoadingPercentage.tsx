import React from 'react';

interface LoadingPercentageProps {
  progress: number;
}

export function LoadingPercentage({ progress }: LoadingPercentageProps) {
  return (
    <div className="mt-4 text-sm font-medium text-gray-600">
      {Math.round(progress)}%
    </div>
  );
}