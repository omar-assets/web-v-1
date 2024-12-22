import React from 'react';
import { BookOpen, TrendingUp, Lightbulb, Target } from 'lucide-react';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { ResourceCategoryCard } from './ResourceCategoryCard';

const categories = [
  {
    icon: BookOpen,
    title: 'Educational Guides',
    description: 'Comprehensive guides covering investment fundamentals and advanced strategies.',
    count: 24,
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Market Analysis',
    description: 'In-depth analysis of market trends, opportunities, and expert insights.',
    count: 18,
    color: 'bg-green-500/10 text-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Investment Strategies',
    description: 'Proven strategies for portfolio optimization and risk management.',
    count: 15,
    color: 'bg-purple-500/10 text-purple-600'
  },
  {
    icon: Target,
    title: 'Case Studies',
    description: 'Real-world examples of successful investment strategies and outcomes.',
    count: 12,
    color: 'bg-amber-500/10 text-amber-600'
  }
];

export function ResourceCategories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-600">
              Browse our collection of investment resources by category
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 200}>
              <ResourceCategoryCard {...category} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}