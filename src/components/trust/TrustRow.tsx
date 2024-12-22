import React from 'react';
import { Building2, Award, Shield } from 'lucide-react';
import { TrustBadge } from './TrustBadge';
import { ScrollReveal } from '../ui/ScrollReveal';

const trustBadges = [
  {
    icon: Shield,
    label: 'SEC Regulated'
  },
  {
    icon: Award,
    label: 'ISO 27001 Certified'
  },
  {
    icon: Building2,
    label: 'Licensed Investment Firm'
  }
];

export function TrustRow() {
  return (
    <section className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {trustBadges.map((badge, index) => (
            <ScrollReveal key={badge.label} delay={index * 200}>
              <TrustBadge {...badge} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}