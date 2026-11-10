import React from 'react';

interface UyolLogoProps {
  variant?: 'horizontal' | 'vertical';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const UyolLogo: React.FC<UyolLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const yolColor = isLight ? '#1E1E1E' : '#FFFFFF';

  if (variant === 'vertical') {
    // 90 degrees vertical splash variant as described in Figma splash screen
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <div className="flex flex-col items-center tracking-tight font-extrabold leading-none">
          <span className="text-[#DDF32C] text-5xl md:text-6xl drop-shadow-[0_2px_12px_rgba(221,243,44,0.35)]">
            U
          </span>
          <div className="flex flex-col items-center font-bold text-2xl md:text-3xl tracking-widest mt-1" style={{ color: yolColor }}>
            <span>Y</span>
            <span>O</span>
            <span>L</span>
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-0.5 select-none font-extrabold tracking-tight ${sizeClasses} ${className}`}>
      <span className="text-[#DDF32C] font-black inline-block transform hover:scale-105 transition-transform duration-200">
        U
      </span>
      <span className="font-bold tracking-tight" style={{ color: yolColor }}>
        YOL
      </span>
    </div>
  );
};
