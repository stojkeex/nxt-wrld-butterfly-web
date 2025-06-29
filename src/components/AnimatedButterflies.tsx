
import React, { useEffect, useState } from 'react';

const AnimatedButterflies = () => {
  const [butterflies, setButterflies] = useState<Array<{ id: number; delay: number; color: 'pink' | 'blue' }>>([]);

  useEffect(() => {
    const butterflyData = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 2.5,
      color: i % 2 === 0 ? 'pink' : 'blue' as 'pink' | 'blue'
    }));
    setButterflies(butterflyData);
  }, []);

  const ButterflyIcon = ({ color }: { color: 'pink' | 'blue' }) => (
    <svg
      width="40"
      height="30"
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60"
    >
      <path
        d="M20 15C20 15 12 8 8 12C4 16 8 20 12 16C16 12 20 15 20 15Z"
        fill={color === 'pink' ? '#FF69B4' : '#4169E1'}
        fillOpacity="0.8"
      />
      <path
        d="M20 15C20 15 28 8 32 12C36 16 32 20 28 16C24 12 20 15 20 15Z"
        fill={color === 'pink' ? '#FF1493' : '#0047AB'}
        fillOpacity="0.8"
      />
      <path
        d="M20 15C20 15 12 22 8 18C4 14 8 10 12 14C16 18 20 15 20 15Z"
        fill={color === 'pink' ? '#FF69B4' : '#4169E1'}
        fillOpacity="0.6"
      />
      <path
        d="M20 15C20 15 28 22 32 18C36 14 32 10 28 14C24 18 20 15 20 15Z"
        fill={color === 'pink' ? '#FF1493' : '#0047AB'}
        fillOpacity="0.6"
      />
      <line x1="20" y1="8" x2="20" y2="22" stroke="white" strokeWidth="1" opacity="0.8"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="butterfly animate-butterfly-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        >
          <ButterflyIcon color={butterfly.color} />
        </div>
      ))}
      <div className="stars absolute inset-0 opacity-30"></div>
    </div>
  );
};

export default AnimatedButterflies;
