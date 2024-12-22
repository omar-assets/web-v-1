import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Download, Image, FileText, Users } from 'lucide-react';

const mediaResources = [
  {
    icon: Image,
    title: 'Brand Assets',
    description: 'Download our logo, brand guidelines, and visual assets.',
    downloadUrl: '#'
  },
  {
    icon: FileText,
    title: 'Fact Sheet',
    description: 'Company overview, mission, and key statistics.',
    downloadUrl: '#'
  },
  {
    icon: Users,
    title: 'Leadership Bios',
    description: 'Profiles and photos of our executive team.',
    downloadUrl: '#'
  }
];

export function MediaKit() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download official BRiX Assets media resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mediaResources.map((resource) => (
              <div 
                key={resource.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {resource.description}
                </p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-medium font-medium"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}