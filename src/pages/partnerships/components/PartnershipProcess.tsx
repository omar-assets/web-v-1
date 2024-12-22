import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ClipboardCheck, Handshake, Rocket } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Initial Consultation',
    description: 'Discuss partnership opportunities and evaluate mutual benefits.',
    details: [
      'Partnership model exploration',
      'Capability assessment',
      'Strategic alignment review'
    ]
  },
  {
    icon: Handshake,
    title: 'Partnership Agreement',
    description: 'Finalize terms and establish operational framework.',
    details: [
      'Terms negotiation',
      'Legal documentation',
      'Resource allocation planning'
    ]
  },
  {
    icon: Rocket,
    title: 'Integration & Launch',
    description: 'Seamless integration and partnership activation.',
    details: [
      'Technical integration',
      'Team onboarding',
      'Go-to-market execution'
    ]
  }
];

export function PartnershipProcess() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to establishing successful partnerships
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{detail}</span>
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