import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ClipboardCheck, LineChart, Users, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Initial Assessment',
    description: 'Comprehensive evaluation of your investment objectives, risk tolerance, and constraints.'
  },
  {
    icon: LineChart,
    title: 'Strategy Development',
    description: 'Creation of tailored investment strategies aligned with your goals and market conditions.'
  },
  {
    icon: Users,
    title: 'Implementation & Monitoring',
    description: 'Execution of strategies with ongoing performance monitoring and adjustments.'
  }
];

export function AdvisoryProcess() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Advisory Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to achieving your investment objectives
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 200}>
              <div className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}