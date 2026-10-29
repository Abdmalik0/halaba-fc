import React from 'react';

interface HalabaCrestProps {
  className?: string;
  size?: number;
  showGlow?: boolean;
}

export const HalabaCrest: React.FC<HalabaCrestProps> = ({
  className = '',
  size = 64,
  showGlow = false,
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title="HALABA City FC (በርበሬዎቹ) - Official Club Crest"
    >
      {showGlow && (
        <div 
          className="absolute inset-0 rounded-full pointer-events-none scale-125"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.45) 0%, rgba(220, 38, 38, 0.18) 50%, rgba(220, 38, 38, 0) 75%)'
          }}
          aria-hidden="true"
        />
      )}
      
      <img
        src="/images/halaba-city-fc-logo.png"
        alt="HALABA City FC official crest"
        className="w-full h-full object-contain relative z-10 drop-shadow-md"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
