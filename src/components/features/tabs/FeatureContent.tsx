import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureContentProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
}

export function FeatureContent({ 
  icon: Icon, 
  title, 
  description, 
  image, 
  isActive 
}: FeatureContentProps) {
  return (
    <div 
      className={`
        transition-all duration-500 
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}
      `}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg group">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[16/9] object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-3 text-white mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}