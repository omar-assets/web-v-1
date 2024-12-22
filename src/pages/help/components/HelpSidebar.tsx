import { ChevronRight } from 'lucide-react';
import { sidebarTopics } from '../data/helpContent';

export function HelpSidebar() {
  return (
    <nav className="bg-white rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-900 px-2 mb-4">Topics</h2>
      <ul className="space-y-1">
        {sidebarTopics.map((topic) => (
          <li key={topic}>
            <a
              href="#"
              className="flex items-center justify-between px-2 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <span>{topic}</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}