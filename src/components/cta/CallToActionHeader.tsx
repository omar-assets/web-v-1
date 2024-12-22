import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function CallToActionHeader() {
  return (
    <ScrollReveal>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Start Building Your Portfolio Today
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Invest in fractionalized assets with as little as $100 and start growing your wealth.
        </p>
      </div>
    </ScrollReveal>
  );
}