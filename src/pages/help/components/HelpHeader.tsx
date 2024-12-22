import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { HelpCircle } from 'lucide-react';

export function HelpHeader() {
  return (
    <BackgroundPattern variant="primary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 text-primary mb-6">
          <HelpCircle className="h-6 w-6" />
          <div className="text-sm font-medium">Support Center</div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to BRiX Assets Support
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Learn about our upcoming platform launch in early 2025 and get answers to your pre-launch questions.
        </p>
      </div>
    </BackgroundPattern>
  );
}