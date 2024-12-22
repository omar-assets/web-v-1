import { Calendar, Tag } from 'lucide-react';

export function InsightsFilters() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </label>
          <select className="w-full rounded-lg border-gray-200 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
            <option>Custom range</option>
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Tag className="h-4 w-4" />
            Categories
          </label>
          <div className="space-y-2">
            {['Market Trends', 'Performance', 'Risk Analysis', 'Opportunities'].map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}