import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureTabProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function FeatureTab({ icon: Icon, label, isActive, onClick }: FeatureTabProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-6 py-4 rounded-lg transition-all relative
        ${isActive 
          ? 'bg-primary text-white font-semibold shadow-md shadow-primary/20' 
          : 'bg-white text-gray-600 hover:bg-gray-50'
        }
      `}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary-light rounded-b-lg" />
      )}
    </button>
  );
}