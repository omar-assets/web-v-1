import { SEO } from '@/components/seo/SEO';
import { HelpHeader } from './components/HelpHeader';
import { HelpSearch } from './components/HelpSearch';
import { HelpCategories } from './components/HelpCategories';
import { HelpSidebar } from './components/HelpSidebar';
import { ContactSupport } from './components/ContactSupport';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

export function HelpCenterPage() {
  return (
    <>
      <SEO 
        title="Help Center"
        description="Find answers to common questions and get support for your investment journey."
      />
      <ErrorBoundary>
        <HelpHeader />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <HelpSearch />
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            <aside className="w-full lg:w-64 flex-shrink-0">
              <HelpSidebar />
            </aside>
            <main className="flex-grow">
              <HelpCategories />
            </main>
          </div>
          <ContactSupport />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default HelpCenterPage;