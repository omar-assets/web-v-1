import React from 'react';
import { privacyPolicyContent } from './content/privacyPolicyContent';
import { termsOfServiceContent } from './content/termsOfServiceContent';

interface LegalContentProps {
  type: 'privacy-policy' | 'terms-of-service';
}

export function LegalContent({ type }: LegalContentProps) {
  const content = type === 'privacy-policy' ? privacyPolicyContent : termsOfServiceContent;

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-green">
        {content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
            {section.subsections?.map((subsection, sIndex) => (
              <div key={sIndex} className="ml-6 mt-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {subsection.title}
                </h3>
                {subsection.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}