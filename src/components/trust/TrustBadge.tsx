import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
}

export function TrustBadge({ icon: Icon, label }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-4 px-8 py-6 bg-gray-50 rounded-xl">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="text-lg font-medium text-gray-900">{label}</span>
    </div>
  );
}