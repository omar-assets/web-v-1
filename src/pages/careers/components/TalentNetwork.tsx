import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Mail } from 'lucide-react';
import { APP_CONFIG } from '@/utils/constants';

export function TalentNetwork() {
  return (
    <section className="py-20 px-4">
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
  );
}