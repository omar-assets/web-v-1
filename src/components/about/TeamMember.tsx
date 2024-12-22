import React from "react";
import { User } from "lucide-react";
import { teamImages } from "./data/teamImages";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  isPreview?: boolean;
}

export function TeamMember({ name, role, description, isPreview = false }: TeamMemberProps) {
  const [imageError, setImageError] = React.useState(false);
  const imageKey = name.toLowerCase().replace(/\s+/g, '');
  const imageData = teamImages[imageKey as keyof typeof teamImages];

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-sm transition-all group ${
      isPreview ? "p-4 opacity-60 hover:opacity-80" : "p-8"
    }`}>
      <div className={`relative ${
        isPreview ? "aspect-[3/4]" : "h-[400px]"
      } overflow-hidden rounded-xl bg-gray-100`}>
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <User className="h-20 w-20 text-gray-400" />
          </div>
        ) : (
          <>
            <img
              src={imageData?.url}
              alt={imageData?.alt || `${name} - ${role}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </>
        )}
      </div>
      
      {!isPreview && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-primary font-medium text-lg mb-4">{role}</p>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
}