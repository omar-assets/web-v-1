import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Code, LineChart, Users, Shield } from 'lucide-react';

const futureDepartments = [
  {
    icon: Code,
    title: 'Engineering',
    roles: [
      'Full Stack Engineers',
      'Frontend Engineers',
      'Backend Engineers',
      'DevOps Engineers'
    ]
  },
  {
    icon: LineChart,
    title: 'Investment',
    roles: [
      'Investment Analysts',
      'Portfolio Managers',
      'Risk Analysts',
      'Investment Strategists'
    ]
  },
  {
    icon: Users,
    title: 'Client Success',
    roles: [
      'Account Managers',
      'Client Success Managers',
      'Investment Advisors',
      'Support Specialists'
    ]
  },
  {
    icon: Shield,
    title: 'Legal & Compliance',
    roles: [
      'Compliance Officers',
      'Legal Counsel',
      'Risk Managers',
      'Regulatory Specialists'
    ]
  }
];

export function FutureCareers() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Future Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              While we're not currently hiring, these are the types of roles we'll be looking for as we grow
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureDepartments.map((dept, index) => (
            <ScrollReveal key={dept.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <dept.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {dept.title}
                </h3>
                <ul className="space-y-2">
                  {dept.roles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{role}</span>
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