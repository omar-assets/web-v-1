import { MapPin, Phone, Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { COMPANY_INFO } from '@/utils/constants';

export function ContactOffices() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Visit our headquarters in New York City
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    {COMPANY_INFO.ADDRESS.STREET}<br />
                    {COMPANY_INFO.ADDRESS.SUITE}<br />
                    {COMPANY_INFO.ADDRESS.CITY}, {COMPANY_INFO.ADDRESS.STATE} {COMPANY_INFO.ADDRESS.ZIP}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">{COMPANY_INFO.PHONE}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">{COMPANY_INFO.EMAIL}</p>
                </div>
              </div>
            </div>

            {/* Office Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1582647509711-c8aa8eb7e24c?auto=format&fit=crop&q=80"
                alt="BRiX Assets Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}