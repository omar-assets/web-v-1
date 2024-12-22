import { SEO } from '@/components/seo/SEO';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { AdvisoryServices } from './components/AdvisoryServices';
import { AdvisoryTeam } from './components/AdvisoryTeam';
import { AdvisoryProcess } from './components/AdvisoryProcess';
import { ContactCTA } from '@/components/ContactCTA';

export function AdvisoryPage() {
  return (
    <>
      <SEO 
        title="Investment Advisory Services"
        description="Expert investment advisory services for institutional and sophisticated investors."
      />
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Investment
              <span className="text-primary"> Advisory Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Access institutional-grade investment expertise through our comprehensive advisory services. 
              Our team of seasoned professionals provides strategic guidance for optimal portfolio performance.
            </p>
          </div>
        </div>
      </BackgroundPattern>
      <AdvisoryServices />
      <AdvisoryTeam />
      <AdvisoryProcess />
      <ContactCTA />
    </>
  );
}

export default AdvisoryPage;