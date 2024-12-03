"use client";
import { PropsWithChildren, useEffect, useState } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  margin = 100,
  duration = 30,
  childDuration = 5,
}: PropsWithChildren<{ 
  size: number;
  rotation: number;
  margin?: number;
  duration?: number;
  childDuration?: number;
}>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [childRotationOffset] = useState(() => Math.random() * 360);
  const [initialScale] = useState(() => 0.1 + Math.random() * 0.9);
  const [initialOpacity] = useState(() => 0.3 + Math.random() * 0.7);

  useEffect(() => {
    const getRandomPosition = () => {
      const viewportWidth = window.innerWidth - size - margin;
      const viewportHeight = window.innerHeight - size - margin;
      
      return {
        x: Math.random() * (viewportWidth - margin) + margin,
        y: Math.random() * (viewportHeight - margin) + margin,
      };
    };

    setPosition(getRandomPosition());

    const handleResize = () => {
      setPosition(getRandomPosition());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size, margin]);

  return (
    <div 
      className="absolute transition-all duration-1000 ease-in-out animate-float"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: initialOpacity,
        transform: `scale(${initialScale})`,
      }}
    >
      <div
        className="relative group"
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="[animation:orbit_linear_infinite] group-hover:animation-pause"
          style={{
            animationDuration: `${duration}s`,
            transform: `rotate(${rotation}deg)`,
            willChange: 'transform',
          }}
        >
          <div
            className="inline-flex [animation:counter-orbit_linear_infinite] 
                       hover:scale-110 transition-transform duration-300
                       group-hover:animate-twinkle"
            style={{
              animationDuration: `${childDuration}s`,
              transform: `rotate(${rotation * -1}deg)`,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(${rotation}deg); }
          to { transform: rotate(${rotation + 360}deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(${(rotation * -1) + childRotationOffset}deg); }
          to { transform: rotate(${(rotation * -1) + childRotationOffset - 360}deg); }
        }
      `}</style>
    </div>
  );
};