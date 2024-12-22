import React from 'react';
import { Shield } from 'lucide-react';

export function HeroHeading() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
        <Shield className="h-5 w-5 text-primary" />
        <span className="text-primary font-medium">SEC-Regulated Investment Platform</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
        Institutional Investing,
        <span className="text-primary"> Made Accessible</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
        Access premium investment opportunities through secure fractional ownership, 
        backed by professional portfolio management.
      </p>
    </div>
  );
}