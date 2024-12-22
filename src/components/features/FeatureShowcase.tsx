import React, { useState } from 'react';
import { Shield, LineChart, Building2, Wallet } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { FeatureTab } from './tabs/FeatureTab';
import { FeatureContent } from './tabs/FeatureContent';

const features = [
  {
    id: 'security',
    icon: Shield,
    label: 'Bank-Grade Security',
    title: 'Enterprise-Level Security Infrastructure',
    description: 'Advanced encryption and multi-layer security protocols protect your investments with institutional-level safeguards.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'portfolio',
    icon: LineChart,
    label: 'Smart Portfolio Management',
    title: 'Data-Driven Investment Strategies',
    description: 'Professional portfolio optimization through advanced analytics and real-time market insights.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'assets',
    icon: Building2,
    label: 'Premium Asset Access',
    title: 'Institutional-Grade Investments',
    description: 'Access to exclusive investment opportunities through innovative fractionalization technology.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'investment',
    icon: Wallet,
    label: 'Flexible Investment',
    title: 'Customizable Investment Options',
    description: 'Start with as little as $100 and build your portfolio with professional management.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1200'
  }
];

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our comprehensive platform empowers investors through innovative technology.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Navigation */}
        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <div className="inline-flex gap-2 p-2 bg-gray-100 rounded-xl">
              {features.map((feature) => (
                <FeatureTab
                  key={feature.id}
                  icon={feature.icon}
                  label={feature.label}
                  isActive={activeFeature === feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Content */}
        <ScrollReveal>
          <div className="relative">
            {features.map((feature) => (
              <FeatureContent
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                isActive={activeFeature === feature.id}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}