import React from 'react';
import { Shield, TrendingUp, Users, Wallet } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BenefitsHeader } from './BenefitsHeader';
import { BenefitCard } from './BenefitCard';

const benefits = [
  {
    icon: Shield,
    title: 'Secure Asset Protection',
    description: 'Bank-grade security protocols and regulatory compliance safeguard your investments with institutional-level protection.'
  },
  {
    icon: TrendingUp,
    title: 'Strategic Growth',
    description: 'Professional portfolio management optimizes returns through data-driven investment strategies and market analysis.'
  },
  {
    icon: Users,
    title: 'Expert Management',
    description: 'Seasoned investment professionals actively manage your portfolio to maximize potential returns and minimize risks.'
  },
  {
    icon: Wallet,
    title: 'Flexible Investment',
    description: 'Start with as little as $100 and build your portfolio through strategic fractional positions in premium assets.'
  }
];

export function KeyBenefits() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <BenefitsHeader />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 200}>
              <BenefitCard {...benefit} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}