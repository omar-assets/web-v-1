import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  label: string;
}

export function ProcessCard({ icon: Icon, title, description, metric, label }: ProcessCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary/10">
      {/* Icon Container */}
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 leading-relaxed">
        {description}
      </p>
      
      {/* Metric Display */}
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-primary">
          {metric}
        </span>
        <span className="text-gray-600 mb-1">
          {label}
        </span>
      </div>
    </div>
  );
}