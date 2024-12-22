import React from 'react';

// Types
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LogoVariant = 'full' | 'icon' | 'wordmark';
export type LogoTheme = 'light' | 'dark';

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
  'aria-label'?: string;
}

// Size configurations for proper scaling
const sizes: Record<LogoSize, { height: string; width: string }> = {
  xs: { height: 'h-4', width: 'w-auto' },
  sm: { height: 'h-6', width: 'w-auto' },
  md: { height: 'h-8', width: 'w-auto' },
  lg: { height: 'h-10', width: 'w-auto' },
  xl: { height: 'h-12', width: 'w-auto' }
};

export function Logo({
  size = 'md',
  variant = 'full',
  theme = 'light',
  className = '',
  'aria-label': ariaLabel = 'BRiX Assets'
}: LogoProps) {
  const { height, width } = sizes[size];
  
  // Construct logo parts for full variant
  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center gap-1 ${className}`}>
        {/* Icon */}
        <div className={`${height} aspect-square flex-shrink-0`}>
          <img
            src="/brix-icon.svg"
            alt=""
            className="h-full w-full"
            width="32"
            height="32"
            loading="eager"
            decoding="async"
          />
        </div>
        
        {/* Text */}
        <div className="flex items-center">
          <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            BRiX
          </span>
          <span className="text-[#4CAF50] ml-1">Asset</span>
        </div>
      </div>
    );
  }

  // Single image variants
  const imagePath = variant === 'icon' ? '/brix-icon.svg' : '/brix-wordmark.svg';
  
  return (
    <img
      src={imagePath}
      alt={ariaLabel}
      className={`${height} ${width} ${className}`}
      width={variant === 'icon' ? '32' : '160'}
      height={variant === 'icon' ? '32' : '40'}
      loading="eager"
      decoding="async"
    />
  );
}