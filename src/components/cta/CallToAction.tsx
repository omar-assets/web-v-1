import React from 'react';
import { CallToActionHeader } from './CallToActionHeader';
import { CallToActionButtons } from './CallToActionButtons';
import { CallToActionBenefits } from './CallToActionBenefits';

export function CallToAction() {
  return (
    <section className="relative py-24 px-4">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#2E7D3208_1px,transparent_1px),linear-gradient(-45deg,#2E7D3208_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-gray-100">
          <CallToActionHeader />
          <CallToActionButtons />
          <CallToActionBenefits />
        </div>
      </div>
    </section>
  );
}