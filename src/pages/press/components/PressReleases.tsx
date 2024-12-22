import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Calendar } from 'lucide-react';

const pressReleases = [
  {
    date: '2024-03-15',
    title: 'BRiX Assets Announces Platform Launch Plans',
    description: 'Revolutionary investment platform set to launch in early 2025, democratizing access to institutional-grade investments.',
    category: 'Company News'
  },
  {
    date: '2024-02-28',
    title: 'Strategic Partnership with Leading Financial Institutions',
    description: 'BRiX Assets forms key partnerships to enhance platform capabilities and expand market reach.',
    category: 'Partnerships'
  },
  {
    date: '2024-02-15',
    title: 'Investment Technology Innovation Award',
    description: 'BRiX Assets recognized for innovative approach to fractional investment technology.',
    category: 'Awards'
  }
];

export function PressReleases() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest announcements and updates from BRiX Assets
            </p>
          </div>

          <div className="space-y-8">
            {pressReleases.map((release) => (
              <div 
                key={release.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <time className="text-sm text-gray-500">{release.date}</time>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600">
                      {release.description}
                    </p>
                    <button className="mt-4 text-primary hover:text-primary-medium font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}