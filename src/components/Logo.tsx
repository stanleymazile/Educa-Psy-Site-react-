import React from 'react';
import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
  };

  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 64,
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative flex items-center justify-center rounded-full bg-[#0024ff] overflow-hidden shadow-sm", sizes[size])} style={{ width: iconSizes[size], height: iconSizes[size] }}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Book Shape - White */}
          <path 
            d="M50 82C50 82 32 76 18 82V28C32 22 50 28 50 28M50 82C50 82 68 76 82 82V28C68 22 50 28 50 28" 
            stroke="white" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M50 28V82" 
            stroke="white" 
            strokeWidth="2"
          />
          
          {/* Head Silhouette - White */}
          <path 
            d="M44 48C44 41 48 38 50 38C52 38 56 41 56 48C56 55 53 58 50 58C47 58 44 55 44 48Z" 
            fill="white"
          />
          <path 
            d="M50 58V68C50 68 46 71 46 75" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          
          {/* Psi Symbol - Blue (same as background) */}
          <path 
            d="M47 45C47 48 48 50 50 50C52 50 53 48 53 45M50 42V50M46 42H54" 
            stroke="#0024ff" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
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
