import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { Newspaper } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function PressHero() {
  return (
    <BackgroundPattern variant="primary">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Newspaper className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Press & Media</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest News from
              <span className="text-primary"> BRiX Assets</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Stay up to date with our latest announcements, press releases, and media coverage. 
              Find everything you need to know about our mission to transform institutional-grade investments.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </BackgroundPattern>
  );
}