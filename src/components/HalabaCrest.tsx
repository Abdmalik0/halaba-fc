import React from 'react';

interface HalabaCrestProps {
  className?: string;
  size?: number;
  showGlow?: boolean;
}

export const HalabaCrest: React.FC<HalabaCrestProps> = ({
  className = '',
  size = 64,
  showGlow = false
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 1.08 }}
      title="HALABA City FC (በርበሬዎቹ) - Official Club Crest"
    >
      {showGlow && (
        <div 
          className="absolute inset-0 rounded-full pointer-events-none scale-125"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.35) 0%, rgba(220, 38, 38, 0.12) 45%, rgba(220, 38, 38, 0) 70%)'
          }}
          aria-hidden="true"
        />
      )}
      
      <svg
        viewBox="0 0 500 540"
        className="w-full h-full drop-shadow-md overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Shield Gradient */}
          <linearGradient id="shieldRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e51821" />
            <stop offset="45%" stopColor="#c80815" />
            <stop offset="100%" stopColor="#96000a" />
          </linearGradient>

          {/* Shield 3D Rim Gradient */}
          <linearGradient id="shieldRim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="50%" stopColor="#b3000b" />
            <stop offset="100%" stopColor="#550005" />
          </linearGradient>

          {/* Green Ribbon Gradient */}
          <linearGradient id="ribbonGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#088c3a" />
            <stop offset="50%" stopColor="#056b2b" />
            <stop offset="100%" stopColor="#02431a" />
          </linearGradient>

          {/* Gold Trim Gradient */}
          <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd857" />
            <stop offset="40%" stopColor="#f5b800" />
            <stop offset="70%" stopColor="#e09e00" />
            <stop offset="100%" stopColor="#ffd857" />
          </linearGradient>

          {/* Chili Gradient */}
          <radialGradient id="chiliGlow" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff4538" />
            <stop offset="60%" stopColor="#d30909" />
            <stop offset="100%" stopColor="#7a0000" />
          </radialGradient>

          {/* Sunburst Rays Pattern */}
          <linearGradient id="rayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>

          {/* Gloss overlay */}
          <linearGradient id="gloss" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Red Shield */}
        <path
          d="M 140 40 
             Q 250 65 360 40 
             C 430 70 470 190 420 350 
             C 380 435 290 495 250 515 
             C 210 495 120 435 80 350 
             C 30 190 70 70 140 40 Z"
          fill="url(#shieldRed)"
          stroke="url(#shieldRim)"
          strokeWidth="6"
        />

        {/* Shield Specular Highlight / Gloss */}
        <path
          d="M 145 48 
             Q 250 70 355 48 
             C 410 80 440 180 410 280 
             C 330 240 200 160 145 48 Z"
          fill="url(#gloss)"
        />

        {/* Inner White Field with Sunburst Rays */}
        <g id="inner-field">
          <clipPath id="innerShieldClip">
            <path d="M 140 200 
                     Q 250 205 360 200 
                     C 400 280 380 375 250 430 
                     C 120 375 100 280 140 200 Z" />
          </clipPath>
          
          {/* White back */}
          <path
            d="M 140 200 
               Q 250 205 360 200 
               C 400 280 380 375 250 430 
               C 120 375 100 280 140 200 Z"
            fill="#ffffff"
          />

          {/* Sunburst rays */}
          <g clipPath="url(#innerShieldClip)" opacity="0.6">
            <line x1="250" y1="290" x2="100" y2="170" stroke="url(#rayGrad)" strokeWidth="14" />
            <line x1="250" y1="290" x2="140" y2="150" stroke="url(#rayGrad)" strokeWidth="12" />
            <line x1="250" y1="290" x2="190" y2="140" stroke="url(#rayGrad)" strokeWidth="12" />
            <line x1="250" y1="290" x2="250" y2="135" stroke="url(#rayGrad)" strokeWidth="14" />
            <line x1="250" y1="290" x2="310" y2="140" stroke="url(#rayGrad)" strokeWidth="12" />
            <line x1="250" y1="290" x2="360" y2="150" stroke="url(#rayGrad)" strokeWidth="12" />
            <line x1="250" y1="290" x2="400" y2="170" stroke="url(#rayGrad)" strokeWidth="14" />
            <line x1="250" y1="290" x2="420" y2="230" stroke="url(#rayGrad)" strokeWidth="12" />
            <line x1="250" y1="290" x2="80" y2="230" stroke="url(#rayGrad)" strokeWidth="12" />
          </g>
        </g>

        {/* Club Name: HALABA CITY FC (Red field header) */}
        <text
          x="250"
          y="112"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="44"
          letterSpacing="4"
          filter="drop-shadow(0px 2px 3px rgba(0,0,0,0.45))"
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
          filter="drop-shadow(0px 2px 3px rgba(0,0,0,0.45))"
        >
          CITY FC
        </text>

        {/* Founded Year: 1966 on white banner */}
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

        {/* Traditional Halaba Straw Hat (Top center inside sunburst) */}
        <g id="traditional-hat" transform="translate(0, 5)">
          {/* Hat Crown / Conical body */}
          <path
            d="M 230 270 C 232 230 240 215 250 215 C 260 215 268 230 270 270 Z"
            fill="#e2ca9b"
            stroke="#a67c3b"
            strokeWidth="2"
          />
          {/* Hat Decorative Pattern Band (Pink & Cyan) */}
          <path
            d="M 232 260 Q 250 263 268 260 L 269 269 Q 250 272 231 269 Z"
            fill="#e6007e"
          />
          <path
            d="M 233 253 Q 250 256 267 253 L 268 259 Q 250 262 232 259 Z"
            fill="#00b4d8"
          />
          {/* Hat Brim */}
          <ellipse
            cx="250"
            cy="275"
            rx="46"
            ry="14"
            fill="#ecd8b3"
            stroke="#b08a4c"
            strokeWidth="2.5"
          />
          <ellipse
            cx="250"
            cy="274"
            rx="36"
            ry="9"
            fill="#d8b982"
          />
        </g>

        {/* Dual Red Chili Peppers ("Berbere" - iconic club symbol) */}
        {/* Left Chili Pepper */}
        <g id="left-chili">
          {/* Stem & Calyx */}
          <path
            d="M 238 215 C 230 200 236 190 242 186 C 244 192 238 204 242 216 Z"
            fill="#2d8a4e"
          />
          <ellipse cx="239" cy="216" rx="6" ry="3" fill="#2d8a4e" />
          
          {/* Curved Pepper Body */}
          <path
            d="M 240 218 
               C 215 220 185 245 188 285 
               C 190 325 210 365 235 375 
               C 220 365 210 330 212 285 
               C 214 248 230 228 240 218 Z"
            fill="url(#chiliGlow)"
            stroke="#990000"
            strokeWidth="1.5"
          />
        </g>

        {/* Right Chili Pepper */}
        <g id="right-chili">
          {/* Stem & Calyx */}
          <path
            d="M 262 215 C 270 200 264 190 258 186 C 256 192 262 204 258 216 Z"
            fill="#2d8a4e"
          />
          <ellipse cx="261" cy="216" rx="6" ry="3" fill="#2d8a4e" />

          {/* Curved Pepper Body */}
          <path
            d="M 260 218 
               C 285 220 315 245 312 285 
               C 310 325 290 365 265 375 
               C 280 365 290 330 288 285 
               C 286 248 270 228 260 218 Z"
            fill="url(#chiliGlow)"
            stroke="#990000"
            strokeWidth="1.5"
          />
        </g>

        {/* Green sprigs/leaves cradling the ball */}
        <path
          d="M 215 365 C 205 380 220 395 235 385 C 225 380 220 370 215 365 Z"
          fill="#1b8a47"
        />
        <path
          d="M 285 365 C 295 380 280 395 265 385 C 275 380 280 370 285 365 Z"
          fill="#1b8a47"
        />

        {/* Soccer Ball (Football) */}
        <g id="football" transform="translate(250, 370)">
          {/* Ball Base */}
          <circle cx="0" cy="0" r="32" fill="#ffffff" stroke="#1f2937" strokeWidth="2.5" />
          
          {/* Pentagons & Seams */}
          {/* Center pentagon */}
          <polygon points="0,-12 11,-4 7,10 -7,10 -11,-4" fill="#111827" />
          
          {/* Corner patches & seams */}
          <line x1="0" y1="-12" x2="0" y2="-28" stroke="#1f2937" strokeWidth="2" />
          <line x1="11" y1="-4" x2="26" y2="-10" stroke="#1f2937" strokeWidth="2" />
          <line x1="7" y1="10" x2="22" y2="22" stroke="#1f2937" strokeWidth="2" />
          <line x1="-7" y1="10" x2="-22" y2="22" stroke="#1f2937" strokeWidth="2" />
          <line x1="-11" y1="-4" x2="-26" y2="-10" stroke="#1f2937" strokeWidth="2" />

          {/* Outer edge black patches */}
          <path d="M -6 -29 C 0 -32 6 -32 6 -29 L 0 -22 Z" fill="#111827" />
          <path d="M 27 -8 C 31 -2 31 4 27 9 L 20 2 Z" fill="#111827" />
          <path d="M -27 -8 C -31 -2 -31 4 -27 9 L -20 2 Z" fill="#111827" />
          <path d="M 12 28 C 6 32 -6 32 -12 28 L 0 24 Z" fill="#111827" />
        </g>

        {/* Lower Banner / Ribbon with "ሀላባ ከተማ እግርኳስ ክለብ" */}
        <g id="bottom-banner">
          {/* Ribbon Tails / Wings behind */}
          <path
            d="M 60 375 L 110 370 L 95 440 L 45 425 L 65 400 Z"
            fill="#045622"
            stroke="url(#goldTrim)"
            strokeWidth="3"
          />
          <path
            d="M 440 375 L 390 370 L 405 440 L 455 425 L 435 400 Z"
            fill="#045622"
            stroke="url(#goldTrim)"
            strokeWidth="3"
          />

          {/* Main Curved Banner Body */}
          <path
            id="bannerCurve"
            d="M 85 405 
               Q 250 490 415 405 
               L 415 445 
               Q 250 535 85 445 Z"
            fill="url(#ribbonGreen)"
            stroke="url(#goldTrim)"
            strokeWidth="4"
            filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.5))"
          />

          {/* Text on banner: ሀላባ ከተማ እግርኳስ ክለብ (Ge'ez Script) */}
          <path
            id="textPathArc"
            d="M 98 432 Q 250 514 402 432"
            fill="none"
          />
          
          <text
            fill="#ffffff"
            fontFamily="'Noto Sans Ethiopic', 'Ethiopic WashRa', system-ui, sans-serif"
            fontWeight="bold"
            fontSize="26"
            letterSpacing="2"
          >
            <textPath
              href="#textPathArc"
              startOffset="50%"
              textAnchor="middle"
            >
              ሀላባ ከተማ እግርኳስ ክለብ
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};
