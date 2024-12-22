import { Download } from 'lucide-react';

export function InsightsExport() {
  return (
    <div className="mt-8 flex justify-end">
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors">
        <Download className="h-4 w-4" />
        Export Data
      </button>
    </div>
  );
}