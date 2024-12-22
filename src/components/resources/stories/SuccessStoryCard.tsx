import React from 'react';
import { TrendingUp, Calendar, DollarSign } from 'lucide-react';

interface SuccessStoryCardProps {
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
  metrics: {
    returns: string;
    period: string;
    growth: string;
  };
}

export function SuccessStoryCard({
  title,
  description,
  image,
  author,
  metrics
}: SuccessStoryCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      {/* Image */}
      <div className="relative aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg bg-green-50">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div className="font-semibold text-green-600">{metrics.returns}</div>
            <div className="text-sm text-gray-500">Returns</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-50">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div className="font-semibold text-gray-900">{metrics.period}</div>
            <div className="text-sm text-gray-500">Period</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg bg-purple-50">
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>
            <div className="font-semibold text-gray-900">{metrics.growth}</div>
            <div className="text-sm text-gray-500">Growth</div>
          </div>
        </div>

        {/* Author */}
        <div className="border-t pt-6">
          <div className="text-center">
            <div className="font-semibold text-gray-900">{author.name}</div>
            <div className="text-sm text-gray-500">{author.role}</div>
            <div className="text-sm text-primary">{author.company}</div>
          </div>
        </div>
      </div>
    </div>
  );
}