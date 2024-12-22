import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { FAQAccordion } from '../../faq/FAQAccordion';

const resourcesFAQs = [
  {
    question: 'How often are resources updated?',
    answer: 'Our resources are updated regularly, with new content added weekly and market analysis updated daily to ensure you have access to the latest insights and information.'
  },
  {
    question: 'Can I download the resources for offline use?',
    answer: 'Yes, most of our resources are available for download in PDF format. Look for the download button on eligible resources to save them for offline reference.'
  },
  {
    question: 'Are the educational materials suitable for beginners?',
    answer: 'We offer resources for all experience levels, from beginner guides to advanced investment strategies. Each resource clearly indicates the intended audience level.'
  }
];

export function ResourcesFAQ() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our resources
            </p>
          </div>
          <FAQAccordion items={resourcesFAQs} />
        </ScrollReveal>
      </div>
    </section>
  );
}