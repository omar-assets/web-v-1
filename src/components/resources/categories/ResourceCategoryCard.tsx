import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceCategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: number;
  color: string;
}

export function ResourceCategoryCard({
  icon: Icon,
  title,
  description,
  count,
  color
}: ResourceCategoryCardProps) {
  return (
    <Link 
      to={`/resources/category/${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
    >
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{count} resources</span>
        <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}