import React from 'react';
import { LineChart, Shield } from 'lucide-react';

export function HeroMetrics() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-primary/20 transition-colors shadow-sm">
        <LineChart className="h-6 w-6 text-primary mb-2" />
        <p className="text-sm text-gray-500">Average Annual Return</p>
        <p className="text-2xl font-bold text-primary">12.5%</p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-primary/20 transition-colors shadow-sm">
        <Shield className="h-6 w-6 text-primary mb-2" />
        <p className="text-sm text-gray-500">Minimum Investment</p>
        <p className="text-2xl font-bold text-primary">$100</p>
      </div>
    </div>
  );
}