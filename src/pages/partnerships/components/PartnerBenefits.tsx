import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TrendingUp, Shield, Users, Globe } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description: 'Access new revenue streams through our partnership program with competitive revenue sharing models.'
  },
  {
    icon: Shield,
    title: 'Technology Access',
    description: 'Leverage our proprietary fractionalization technology and investment infrastructure.'
  },
  {
    icon: Users,
    title: 'Market Expansion',
    description: 'Reach new customer segments and markets through our established platform.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Join our network of international partners and access global investment opportunities.'
  }
];

export function PartnerBenefits() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock value and growth opportunities through strategic collaboration
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}