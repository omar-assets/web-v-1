import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { DownloadCard } from './DownloadCard';

const downloadableResources = [
  {
    title: 'Investment Strategy Guide 2024',
    description: 'Comprehensive guide to building a successful investment portfolio',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80'
  },
  {
    title: 'Market Analysis Report',
    description: 'In-depth analysis of current market trends and opportunities',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    title: 'Risk Management Toolkit',
    description: 'Essential tools and templates for managing investment risks',
    fileType: 'ZIP',
    fileSize: '3.2 MB',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80'
  }
];

export function DownloadableResources() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Free Resources
            </h2>
            <p className="text-xl text-gray-600">
              Download our comprehensive guides and tools to enhance your investment strategy
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {downloadableResources.map((resource, index) => (
            <ScrollReveal key={resource.title} delay={index * 200}>
              <DownloadCard {...resource} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}