import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { LineChart } from 'lucide-react';

export function InsightsHeader() {
  return (
    <BackgroundPattern variant="primary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 text-primary mb-6">
          <LineChart className="h-6 w-6" />
          <div className="text-sm font-medium">Market Analytics</div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Investment Insights & Analysis
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Access detailed market analysis, performance metrics, and investment trends to make informed decisions.
        </p>
      </div>
    </BackgroundPattern>
  );
}