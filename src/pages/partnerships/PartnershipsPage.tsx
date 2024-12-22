import { SEO } from '@/components/seo/SEO';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { PartnershipTypes } from './components/PartnershipTypes';
import { PartnerBenefits } from './components/PartnerBenefits';
import { PartnershipProcess } from './components/PartnershipProcess';
import { ContactCTA } from '@/components/ContactCTA';

export function PartnershipsPage() {
  return (
    <>
      <SEO 
        title="Strategic Partnerships"
        description="Partner with BRiX Assets to expand your investment capabilities and reach."
      />
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic
              <span className="text-primary"> Partnerships</span>
            </h1>
            <p className="text-xl text-gray-600">
              Join forces with BRiX Assets to create innovative investment solutions. 
              We collaborate with financial institutions, technology providers, and investment firms 
              to enhance our platform capabilities.
            </p>
          </div>
        </div>
      </BackgroundPattern>
      <PartnershipTypes />
      <PartnerBenefits />
      <PartnershipProcess />
      <ContactCTA />
    </>
  );
}

export default PartnershipsPage;