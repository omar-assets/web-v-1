import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Shield, Users, TrendingUp, Globe } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of security and regulatory compliance to protect our investors.'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Our clients' success drives every decision we make and every feature we develop.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We continuously innovate to provide cutting-edge investment solutions.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We're building a platform that transforms how people invest worldwide.'
  }
];

export function CompanyValues() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at BRiX Assets
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}