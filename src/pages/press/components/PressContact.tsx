import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Mail } from 'lucide-react';
import { APP_CONFIG } from '@/utils/constants';

export function PressContact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Press Contact
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              For press inquiries and interview requests, please contact our media relations team.
            </p>
            <a
              href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
            >
              Contact Press Team
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}