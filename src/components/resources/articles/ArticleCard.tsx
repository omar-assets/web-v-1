import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export function ArticleCard({
  slug,
  title,
  description,
  image,
  category,
  date,
  readTime
}: ArticleCardProps) {
  return (
    <Link 
      to={`/resources/articles/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}