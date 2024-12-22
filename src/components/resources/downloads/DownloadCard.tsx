import React from 'react';
import { Download, FileText } from 'lucide-react';

interface DownloadCardProps {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  image: string;
}

export function DownloadCard({
  title,
  description,
  fileType,
  fileSize,
  image
}: DownloadCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
      {/* Preview Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
              <Download className="h-4 w-4" />
              <span>Download Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* File Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>{fileType}</span>
          </div>
          <span>{fileSize}</span>
        </div>
      </div>
    </div>
  );
}