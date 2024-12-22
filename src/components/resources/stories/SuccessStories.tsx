import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { SuccessStoryCard } from './SuccessStoryCard';

const successStories = [
  {
    title: 'Portfolio Transformation',
    description: 'How strategic asset allocation helped achieve a 15% annual return',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    author: {
      name: 'Sarah Chen',
      role: 'Investment Director',
      company: 'Global Ventures Ltd'
    },
    metrics: {
      returns: '+15%',
      period: '12 months',
      growth: '$2.5M'
    }
  },
  {
    title: 'Diversification Success',
    description: 'Building a resilient portfolio through fractional investments',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80',
    author: {
      name: 'Michael Rodriguez',
      role: 'Portfolio Manager',
      company: 'Quantum Capital'
    },
    metrics: {
      returns: '+12%',
      period: '24 months',
      growth: '$1.8M'
    }
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our platform users
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <ScrollReveal key={story.title} delay={index * 200}>
              <SuccessStoryCard {...story} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}