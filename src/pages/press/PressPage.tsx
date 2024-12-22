import { SEO } from '@/components/seo/SEO';
import { PressHero } from './components/PressHero';
import { PressReleases } from './components/PressReleases';
import { MediaKit } from './components/MediaKit';
import { PressContact } from './components/PressContact';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

export function PressPage() {
  return (
    <>
      <SEO 
        title="Press & Media"
        description="Latest news, press releases, and media resources from BRiX Assets."
      />
      <ErrorBoundary>
        <PressHero />
        <PressReleases />
        <MediaKit />
        <PressContact />
      </ErrorBoundary>
    </>
  );
}

export default PressPage;