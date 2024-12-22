import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const insights = [
  {
    title: 'Market Performance',
    metric: '12.5%',
    trend: 'up',
    change: '+2.3%',
    description: 'Overall market performance across all asset classes'
  },
  {
    title: 'Investment Volume',
    metric: '$2.5M',
    trend: 'up',
    change: '+15.8%',
    description: 'Total investment volume in the last 30 days'
  },
  {
    title: 'Average Returns',
    metric: '8.7%',
    trend: 'down',
    change: '-1.2%',
    description: 'Average returns across all portfolios'
  }
];

export function InsightsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {insights.map((insight) => (
        <div key={insight.title} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium">{insight.title}</span>
            </div>
            <div className={`flex items-center gap-1 ${
              insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {insight.trend === 'up' ? (
                <ArrowUpRight className="h-4 w-4" />
              ) : (
                <ArrowDownRight className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">{insight.change}</span>
            </div>
          </div>
          <div className="mb-2">
            <div className="text-3xl font-bold text-gray-900">{insight.metric}</div>
          </div>
          <p className="text-sm text-gray-600">{insight.description}</p>
        </div>
      ))}
    </div>
  );
}