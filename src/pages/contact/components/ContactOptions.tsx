import { Mail, MessageCircle, Calendar } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { APP_CONFIG } from '@/utils/constants';

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get a response within 24 hours',
    action: {
      text: 'Send Email',
      href: `mailto:${APP_CONFIG.CONTACT_EMAIL}`
    },
    availability: '24/7 Support'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our investment team',
    action: {
      text: 'Start Chat',
      onClick: () => window.open('#chat', '_blank')
    },
    availability: 'Available 9am-6pm EST'
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Book a consultation with our experts',
    action: {
      text: 'Schedule Now',
      href: 'https://calendly.com/brixassets'
    },
    availability: 'Available Mon-Fri'
  }
];

export function ContactOptions() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option) => (
              <div 
                key={option.title} 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary/10"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  
                  {option.action.href ? (
                    <a
                      href={option.action.href}
                      className="block w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors mb-4"
                    >
                      {option.action.text}
                    </a>
                  ) : (
                    <button
                      onClick={option.action.onClick}
                      className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors mb-4"
                    >
                      {option.action.text}
                    </button>
                  )}

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    {option.availability}
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