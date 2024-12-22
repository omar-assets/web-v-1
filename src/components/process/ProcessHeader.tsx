import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function ProcessHeader() {
  return (
    <ScrollReveal>
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Strategic Asset Fractionalization
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our innovative approach to asset fractionalization enables sophisticated investors to build 
          institutional-grade portfolios with precision and flexibility.
        </p>
      </div>
    </ScrollReveal>
  );
}