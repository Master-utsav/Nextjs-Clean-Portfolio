import React from 'react';

interface CloudTooltipProps {
  text: string;
  size?: number; 
  className?: string;
}

const CloudTooltip: React.FC<CloudTooltipProps> = ({ text, size = 100, className = '' }) => {
  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      style={{ width: size, height: size * 0.6 }} 
    >
      <div
        className="absolute bg-blue-300 dark:bg-blue-600 rounded-full"
        style={{
          width: size,
          height: size * 0.6,
          top: 0,
          left: 0,
          transform: 'scale(1.2)',
        }}
      ></div>
      <div
        className="absolute bg-blue-300 dark:bg-blue-600 rounded-full"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          top: -size * 0.15,
          left: size * 0.15,
        }}
      ></div>
      <div
        className="absolute bg-blue-300 dark:bg-blue-600 rounded-full"
        style={{
          width: size * 0.4,
          height: size * 0.4,
          top: size * 0.2,
          right: size * 0.1,
        }}
      ></div>
      <div
        className="absolute bg-blue-300 dark:bg-blue-600 rounded-full"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          bottom: -size * 0.1,
          left: size * 0.3,
        }}
      ></div>
  
      <div
        className="absolute text-center text-white font-semibold"
        style={{
          width: size * 0.8,
          top: size * 0.25,
          left: size * 0.1,
        }}
      >
        {text}
      </div>
    
      <div
        className="absolute bg-blue-300 dark:bg-blue-600"
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size * 0.12}px solid transparent`,
          borderRight: `${size * 0.12}px solid transparent`,
          borderTop: `${size * 0.12}px solid #93c5fd`,
          bottom: -size * 0.12,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      ></div>
    </div>
  );
};

export default CloudTooltip;
