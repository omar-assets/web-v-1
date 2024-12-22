import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { ArticleCard } from './ArticleCard';

const featuredArticles = [
  {
    slug: 'understanding-fractional-investing',
    title: 'Understanding Fractional Investment: A Complete Guide',
    description: 'Learn how fractional investing is revolutionizing access to premium assets and creating new opportunities for investors.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    category: 'Education',
    date: 'Mar 15, 2024',
    readTime: '8 min read'
  },
  {
    slug: 'portfolio-diversification-strategies',
    title: 'Advanced Portfolio Diversification Strategies',
    description: 'Discover how to build a resilient investment portfolio through strategic asset allocation and risk management.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80',
    category: 'Strategy',
    date: 'Mar 12, 2024',
    readTime: '10 min read'
  },
  {
    slug: 'market-analysis-2024',
    title: '2024 Market Analysis and Investment Opportunities',
    description: 'Expert insights into current market trends and emerging investment opportunities across different asset classes.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80',
    category: 'Analysis',
    date: 'Mar 10, 2024',
    readTime: '12 min read'
  }
];

export function FeaturedArticles() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Latest insights and analysis from our investment experts
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <ScrollReveal key={article.slug} delay={index * 200}>
              <ArticleCard {...article} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}