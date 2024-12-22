import { helpCategories } from '../data/helpContent';

export function HelpCategories() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {helpCategories.map((category) => (
        <div key={category.title} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <category.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </div>
          <ul className="space-y-3">
            {category.articles.map((article) => (
              <li key={article}>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  {article}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}