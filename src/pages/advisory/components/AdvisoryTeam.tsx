import { ScrollReveal } from '@/components/ui/ScrollReveal';

const advisors = [
  {
    name: 'James Fellus',
    role: 'President',
    expertise: 'Investment Strategy & Portfolio Management',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
  },
  {
    name: 'Jonathan Paz',
    role: 'Executive Vice President',
    expertise: 'International Markets & Business Development',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
  },
  {
    name: 'Juan Del Sol',
    role: 'Senior Vice President of Acquisitions',
    expertise: 'Asset Acquisition & Investment Analysis',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  }
];

export function AdvisoryTeam() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Advisory Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert guidance from our senior leadership team
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <ScrollReveal key={advisor.name} delay={index * 200}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{advisor.role}</p>
                  <p className="text-gray-600 text-sm">{advisor.expertise}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}