import { Search } from 'lucide-react';

export function HelpSearch() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="search"
          placeholder="Search for help articles..."
          className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 
                   focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
      </div>
    </div>
  );
}