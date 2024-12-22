import React from 'react';
import { BookOpen, Search } from 'lucide-react';
import { BackgroundPattern } from '../ui/BackgroundPattern';
import { ScrollReveal } from '../ui/ScrollReveal';

export function ResourcesHero() {
  return (
    <BackgroundPattern variant="primary">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Knowledge Center</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Investment Resources &
              <span className="text-primary"> Market Insights</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Access our comprehensive library of investment guides, market analysis, 
              and educational resources to enhance your investment strategy.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 
                         focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </BackgroundPattern>
  );
}