import React, { useState } from 'react';
import halabaLogoPng from '../assets/images/halaba-city-fc-logo.png';

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
  const [hasError, setHasError] = useState(false);

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
      
      {!hasError ? (
        <img
          src={halabaLogoPng}
          alt="HALABA City FC official crest"
          className="w-full h-full object-contain relative z-10 drop-shadow-md transition-opacity duration-200"
          loading="eager"
          decoding="async"
          onError={() => setHasError(true)}
        />
      ) : (
        /* Zero-latency Vector SVG Crest Fallback if PNG fails */
        <svg
          viewBox="0 0 500 540"
          className="w-full h-full drop-shadow-md overflow-visible relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shieldRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e51821" />
              <stop offset="45%" stopColor="#c80815" />
              <stop offset="100%" stopColor="#96000a" />
            </linearGradient>
            <linearGradient id="shieldRim" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="50%" stopColor="#b3000b" />
              <stop offset="100%" stopColor="#550005" />
            </linearGradient>
            <linearGradient id="ribbonGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#088c3a" />
              <stop offset="50%" stopColor="#056b2b" />
              <stop offset="100%" stopColor="#02431a" />
            </linearGradient>
            <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffd857" />
              <stop offset="40%" stopColor="#f5b800" />
              <stop offset="70%" stopColor="#e09e00" />
              <stop offset="100%" stopColor="#ffd857" />
            </linearGradient>
            <radialGradient id="chiliGlow" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ff4538" />
              <stop offset="60%" stopColor="#d30909" />
              <stop offset="100%" stopColor="#7a0000" />
            </radialGradient>
            <linearGradient id="gloss" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Red Shield */}
          <path
            d="M 140 40 Q 250 65 360 40 C 430 70 470 190 420 350 C 380 435 290 495 250 515 C 210 495 120 435 80 350 C 30 190 70 70 140 40 Z"
            fill="url(#shieldRed)"
            stroke="url(#shieldRim)"
            strokeWidth="6"
          />

          {/* Shield Specular Highlight */}
          <path
            d="M 145 48 Q 250 70 355 48 C 410 80 440 180 410 280 C 330 240 200 160 145 48 Z"
            fill="url(#gloss)"
          />

          {/* Inner White Field */}
          <path
            d="M 140 200 Q 250 205 360 200 C 400 280 380 375 250 430 C 120 375 100 280 140 200 Z"
            fill="#ffffff"
          />

          {/* Club Name: HALABA CITY FC */}
          <text
            x="250"
            y="112"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="44"
            letterSpacing="4"
          >
            HALABA
          </text>
          <text
            x="250"
            y="156"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="38"
            letterSpacing="5"
          >
            CITY FC
          </text>

          {/* Founded Year: 1966 */}
          <path
            d="M 200 172 Q 250 178 300 172 L 310 200 Q 250 208 190 200 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          <text
            x="250"
            y="194"
            textAnchor="middle"
            fill="#111827"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="24"
            letterSpacing="3"
          >
            1966
          </text>

          {/* Traditional Conical Hat */}
          <path d="M 230 270 C 232 230 240 215 250 215 C 260 215 268 230 270 270 Z" fill="#e2ca9b" stroke="#a67c3b" strokeWidth="2" />
          <path d="M 232 260 Q 250 263 268 260 L 269 269 Q 250 272 231 269 Z" fill="#e6007e" />
          <ellipse cx="250" cy="275" rx="46" ry="14" fill="#ecd8b3" stroke="#b08a4c" strokeWidth="2.5" />

          {/* Dual Red Chili Peppers */}
          <path
            d="M 240 218 C 215 220 185 245 188 285 C 190 325 210 365 235 375 C 220 365 210 330 212 285 C 214 248 230 228 240 218 Z"
            fill="url(#chiliGlow)"
            stroke="#990000"
            strokeWidth="1.5"
          />
          <path
            d="M 260 218 C 285 220 315 245 312 285 C 310 325 290 365 265 375 C 280 365 290 330 288 285 C 286 248 270 228 260 218 Z"
            fill="url(#chiliGlow)"
            stroke="#990000"
            strokeWidth="1.5"
          />

          {/* Soccer Ball */}
          <circle cx="250" cy="370" r="32" fill="#ffffff" stroke="#1f2937" strokeWidth="2.5" />
          <polygon points="250,358 261,366 257,380 243,380 239,366" fill="#111827" />

          {/* Emerald Green Ribbon */}
          <path
            d="M 85 405 Q 250 490 415 405 L 415 445 Q 250 535 85 445 Z"
            fill="url(#ribbonGreen)"
            stroke="url(#goldTrim)"
            strokeWidth="4"
          />
          <text
            x="250"
            y="450"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="'Noto Sans Ethiopic', system-ui, sans-serif"
            fontWeight="bold"
            fontSize="26"
            letterSpacing="2"
          >
            ሀላባ ከተማ እግርኳስ ክለብ
          </text>
        </svg>
      )}
    </div>
  );
};

export default HalabaCrest;
