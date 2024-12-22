import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { Users } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function CareersHero() {
  return (
    <BackgroundPattern variant="primary">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building the Future of
              <span className="text-primary"> Investment Management</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              While we're not actively hiring at the moment, we're always interested in 
              connecting with talented individuals who share our vision for transforming 
              institutional-grade investments.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </BackgroundPattern>
  );
}