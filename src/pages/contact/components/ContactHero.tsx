import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ContactHero() {
  return (
    <BackgroundPattern variant="primary">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Contact Us</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with
              <span className="text-primary"> Our Team</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Have questions about our investment platform? Our team is here to help you 
              understand our offerings and get started with institutional-grade investments.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </BackgroundPattern>
  );
}