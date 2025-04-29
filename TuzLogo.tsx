import React from "react";

interface TuzLogoProps {
  className?: string;
}

const TuzLogo: React.FC<TuzLogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <svg 
      viewBox="0 0 250 250" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(10, 10)">
        {/* Square border */}
        <rect 
          x="10" 
          y="10" 
          width="220" 
          height="220" 
          rx="15" 
          ry="15" 
          fill="none" 
          stroke="#C0C0C0" 
          strokeWidth="10"
        />
        
        {/* Letter U */}
        <path 
          d="M60,70 L60,150 C60,165 70,175 85,175 L110,175 C125,175 135,165 135,150 L135,70" 
          fill="none" 
          stroke="#40E0D0" 
          strokeWidth="20" 
          strokeLinecap="round"
        />
        
        {/* Letter Z */}
        <path 
          d="M140,70 L190,70 L140,150 L190,150" 
          fill="none" 
          stroke="#C0C0C0" 
          strokeWidth="20" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default TuzLogo;
