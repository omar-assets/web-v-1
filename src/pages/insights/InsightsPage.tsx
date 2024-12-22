import { SEO } from '@/components/seo/SEO';
import { InsightsHeader } from './components/InsightsHeader';
import { InsightsFilters } from './components/InsightsFilters';
import { InsightsGrid } from './components/InsightsGrid';
import { InsightsExport } from './components/InsightsExport';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

export function InsightsPage() {
  return (
    <>
      <SEO 
        title="Market Insights & Analytics"
        description="Access detailed market insights, analytics, and investment performance data."
      />
      <ErrorBoundary>
        <InsightsHeader />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-64 flex-shrink-0">
              <InsightsFilters />
            </div>
            <div className="flex-grow">
              <InsightsGrid />
            </div>
          </div>
          <InsightsExport />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default InsightsPage;