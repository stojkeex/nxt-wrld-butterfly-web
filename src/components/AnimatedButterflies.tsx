
import React, { useEffect, useState } from 'react';

const AnimatedButterflies = () => {
  const [butterflies, setButterflies] = useState<Array<{ 
    id: number; 
    delay: number; 
    color: 'pink' | 'blue' | 'purple' | 'orange';
    size: number;
    startX: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const butterflyData = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 3,
      color: (['pink', 'blue', 'purple', 'orange'] as const)[i % 4],
      size: 60 + Math.random() * 40, // 60-100px
      startX: Math.random() * 100,
      duration: 20 + Math.random() * 15 // 20-35s
    }));
    setButterflies(butterflyData);
  }, []);

  const ButterflyIcon = ({ color, size }: { color: 'pink' | 'blue' | 'purple' | 'orange'; size: number }) => {
    const colors = {
      pink: { primary: '#FF69B4', secondary: '#FF1493', accent: '#FFB6C1' },
      blue: { primary: '#4169E1', secondary: '#0047AB', accent: '#87CEEB' },
      purple: { primary: '#9370DB', secondary: '#8A2BE2', accent: '#DDA0DD' },
      orange: { primary: '#FF6347', secondary: '#FF4500', accent: '#FFA07A' }
    };

    const colorScheme = colors[color];

    return (
      <svg
        width={size}
        height={size * 0.8}
        viewBox="0 0 80 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80 animate-pulse"
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
        }}
      >
        {/* Upper wings */}
        <ellipse cx="25" cy="20" rx="18" ry="15" fill={colorScheme.primary} fillOpacity="0.9" transform="rotate(-20 25 20)" />
        <ellipse cx="55" cy="20" rx="18" ry="15" fill={colorScheme.primary} fillOpacity="0.9" transform="rotate(20 55 20)" />
        
        {/* Lower wings */}
        <ellipse cx="25" cy="40" rx="12" ry="20" fill={colorScheme.secondary} fillOpacity="0.8" transform="rotate(-10 25 40)" />
        <ellipse cx="55" cy="40" rx="12" ry="20" fill={colorScheme.secondary} fillOpacity="0.8" transform="rotate(10 55 40)" />
        
        {/* Wing patterns */}
        <ellipse cx="22" cy="18" rx="6" ry="8" fill={colorScheme.accent} fillOpacity="0.6" transform="rotate(-20 22 18)" />
        <ellipse cx="58" cy="18" rx="6" ry="8" fill={colorScheme.accent} fillOpacity="0.6" transform="rotate(20 58 18)" />
        
        {/* Wing spots */}
        <circle cx="30" cy="25" r="3" fill="white" fillOpacity="0.8" />
        <circle cx="50" cy="25" r="3" fill="white" fillOpacity="0.8" />
        <circle cx="25" cy="35" r="2" fill="white" fillOpacity="0.6" />
        <circle cx="55" cy="35" r="2" fill="white" fillOpacity="0.6" />
        
        {/* Body */}
        <ellipse cx="40" cy="32" rx="2" ry="25" fill="#4A4A4A" />
        <ellipse cx="40" cy="20" rx="1.5" ry="6" fill="#2A2A2A" />
        
        {/* Antennae */}
        <path d="M38 15 Q35 10 33 8" stroke="#2A2A2A" strokeWidth="1" fill="none" />
        <path d="M42 15 Q45 10 47 8" stroke="#2A2A2A" strokeWidth="1" fill="none" />
        <circle cx="33" cy="8" r="1" fill="#2A2A2A" />
        <circle cx="47" cy="8" r="1" fill="#2A2A2A" />
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="butterfly animate-butterfly-float"
          style={{
            left: `${butterfly.startX}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`
          }}
        >
          <ButterflyIcon color={butterfly.color} size={butterfly.size} />
        </div>
      ))}
      <div className="stars absolute inset-0 opacity-20"></div>
    </div>
  );
};

export default AnimatedButterflies;
