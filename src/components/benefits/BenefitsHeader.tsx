import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function BenefitsHeader() {
  return (
    <ScrollReveal>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Choose Our Platform?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the core benefits of investing on our platform
        </p>
      </div>
    </ScrollReveal>
  );
}