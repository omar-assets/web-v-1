import { SEO } from '@/components/seo/SEO';
import { ResourcesHero } from '@/components/resources/ResourcesHero';
import { FeaturedArticles } from '@/components/resources/articles/FeaturedArticles';
import { ResourceCategories } from '@/components/resources/categories/ResourceCategories';
import { SuccessStories } from '@/components/resources/stories/SuccessStories';
import { DownloadableResources } from '@/components/resources/downloads/DownloadableResources';
import { ResourcesFAQ } from '@/components/resources/faq/ResourcesFAQ';
import { ContactCTA } from '@/components/ContactCTA';

export function ResourcesPage() {
  return (
    <>
      <SEO 
        title="Resources & Insights"
        description="Access our comprehensive library of investment resources, guides, and market insights."
      />
      <ResourcesHero />
      <FeaturedArticles />
      <ResourceCategories />
      <SuccessStories />
      <DownloadableResources />
      <ResourcesFAQ />
      <ContactCTA />
    </>
  );
}

export default ResourcesPage;