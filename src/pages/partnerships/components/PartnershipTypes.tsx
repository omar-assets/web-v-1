import { Building2, Code, Shield, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const partnershipTypes = [
  {
    icon: Building2,
    title: 'Financial Institutions',
    description: 'Partner with banks, investment firms, and wealth managers to expand investment offerings.',
    benefits: [
      'Access to our fractionalization technology',
      'White-label platform solutions',
      'Integrated compliance framework'
    ]
  },
  {
    icon: Code,
    title: 'Technology Partners',
    description: 'Collaborate with fintech providers to enhance platform capabilities.',
    benefits: [
      'API integration opportunities',
      'Enhanced data analytics',
      'Automated reporting solutions'
    ]
  },
  {
    icon: Shield,
    title: 'Investment Partners',
    description: 'Join forces with asset managers and investment specialists.',
    benefits: [
      'Co-investment opportunities',
      'Portfolio diversification',
      'Risk management expertise'
    ]
  },
  {
    icon: Users,
    title: 'Distribution Partners',
    description: 'Expand reach through strategic distribution partnerships.',
    benefits: [
      'Revenue sharing model',
      'Marketing support',
      'Client onboarding assistance'
    ]
  }
];

export function PartnershipTypes() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our range of strategic partnership opportunities
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {partnershipTypes.map((type, index) => (
            <ScrollReveal key={type.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}