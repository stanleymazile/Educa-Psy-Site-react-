import React from 'react';
import { cn } from '@/src/lib/utils';

import { imageConfig } from '../data/imageConfig';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
  };

  const logoSrc = imageConfig.logo;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative flex items-center justify-center rounded-full overflow-hidden shadow-sm bg-slate-100", sizes[size])}>
        <img 
          src={logoSrc} 
          alt="Educa-Psy Logo" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <span className={cn(
          "font-bold text-slate-900 tracking-tight",
          size === 'sm' ? "text-base" : size === 'md' ? "text-lg" : "text-2xl"
        )}>
          Educa-Psy
        </span>
      )}
    </div>
  );
}
