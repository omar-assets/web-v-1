import { SEO } from '@/components/seo/SEO';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Users, Shield, TrendingUp, Globe, Mail } from 'lucide-react';
import { APP_CONFIG } from '@/utils/constants';

const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of security and regulatory compliance.'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: "Our clients' success drives every decision we make."
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We continuously innovate to provide cutting-edge solutions.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: "We're building a platform that transforms investing worldwide."
  }
];

export function CareersPage() {
  return (
    <>
      <SEO 
        title="Careers at BRiX Assets"
        description="Join our mission to transform institutional-grade investments. Stay connected for future opportunities."
      />
      
      {/* Hero Section */}
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">Join Our Team</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building the Future of
                <span className="text-primary"> Investment Management</span>
              </h1>
              
              <p className="text-xl text-gray-600">
                While we&apos;re not actively hiring at the moment, we&apos;re always interested in 
                connecting with talented individuals who share our vision for transforming 
                institutional-grade investments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </BackgroundPattern>

      {/* Values Section */}
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

      {/* Talent Network Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Join Our Talent Network
                </h2>
                <p className="text-xl text-gray-600">
                  Stay connected for future opportunities at BRiX Assets
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary">
                    <option value="">Select an area</option>
                    <option value="engineering">Engineering</option>
                    <option value="investment">Investment</option>
                    <option value="client-success">Client Success</option>
                    <option value="legal">Legal & Compliance</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
                >
                  Join Network
                </button>

                <p className="text-sm text-gray-500 text-center">
                  You can email us directly at{' '}
                  <a href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:text-primary-medium">
                    {APP_CONFIG.CONTACT_EMAIL}
                  </a>
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default CareersPage;