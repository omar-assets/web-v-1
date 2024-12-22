import React from 'react';
import { ProcessHeader } from './process/ProcessHeader';
import { ProcessGrid } from './process/ProcessGrid';

export function Process() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E7D3210_1px,transparent_1px),linear-gradient(to_bottom,#2E7D3210_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <ProcessHeader />
        <ProcessGrid />
      </div>
    </section>
  );
}