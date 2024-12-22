import React from 'react';
import { Shield, Wallet, LineChart } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ProcessCard } from './ProcessCard';

const processCards = [
  {
    icon: Shield,
    title: 'Secure Fractionalization',
    description: 'Our proprietary fractionalization technology ensures secure, regulated, and transparent asset division.',
    metric: '256-bit',
    label: 'Encryption'
  },
  {
    icon: Wallet,
    title: 'Strategic Investment',
    description: 'Access institutional-grade investments through strategic fractional positions.',
    metric: '$100',
    label: 'Minimum Investment'
  },
  {
    icon: LineChart,
    title: 'Optimized Returns',
    description: 'Professional portfolio management maximizing returns through fractional diversification.',
    metric: '12.5%',
    label: 'Avg. Annual Returns'
  }
];

export function ProcessGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {processCards.map((card, index) => (
        <ScrollReveal key={card.title} delay={index * 200}>
          <ProcessCard {...card} />
        </ScrollReveal>
      ))}
    </div>
  );
}