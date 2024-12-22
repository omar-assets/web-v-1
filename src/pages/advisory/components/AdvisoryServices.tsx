import { Shield, TrendingUp, LineChart, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const services = [
  {
    icon: Shield,
    title: 'Portfolio Strategy',
    description: 'Develop comprehensive investment strategies aligned with your objectives and risk tolerance.'
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'Implement sophisticated risk management frameworks to protect and optimize your investments.'
  },
  {
    icon: LineChart,
    title: 'Performance Analysis',
    description: 'Regular portfolio analysis and optimization recommendations based on market conditions.'
  },
  {
    icon: Users,
    title: 'Institutional Consulting',
    description: 'Specialized advisory services for institutional investors and family offices.'
  }
];

export function AdvisoryServices() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Advisory Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive investment advisory services tailored for sophisticated investors
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}