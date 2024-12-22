import { MessageCircle, Mail, Bell } from 'lucide-react';
import { supportInfo } from '../data/helpContent';

export function ContactSupport() {
  return (
    <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pre-Launch Support</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-primary/5">
          <Mail className="h-6 w-6 text-primary mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{supportInfo.email.title}</h3>
          <p className="text-gray-600 mb-2">{supportInfo.email.description}</p>
          <p className="text-sm text-gray-500 mb-4">{supportInfo.email.availability}</p>
          <a href={`mailto:${supportInfo.email.action}`} className="text-primary hover:text-primary-medium font-medium">
            Contact Support →
          </a>
        </div>
        <div className="p-6 rounded-xl bg-primary/5">
          <MessageCircle className="h-6 w-6 text-primary mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{supportInfo.waitlist.title}</h3>
          <p className="text-gray-600 mb-2">{supportInfo.waitlist.description}</p>
          <p className="text-sm text-gray-500 mb-4">{supportInfo.waitlist.availability}</p>
          <button className="text-primary hover:text-primary-medium font-medium">
            {supportInfo.waitlist.action} →
          </button>
        </div>
        <div className="p-6 rounded-xl bg-primary/5">
          <Bell className="h-6 w-6 text-primary mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{supportInfo.updates.title}</h3>
          <p className="text-gray-600 mb-2">{supportInfo.updates.description}</p>
          <p className="text-sm text-gray-500 mb-4">{supportInfo.updates.availability}</p>
          <button className="text-primary hover:text-primary-medium font-medium">
            {supportInfo.updates.action} →
          </button>
        </div>
      </div>
    </div>
  );
}