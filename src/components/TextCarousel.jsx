import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const TextCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const contentWidth = track.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -contentWidth,
        duration: 1000,
        ease: "none",
        repeat: -1,
        onReverseComplete: () => {
          gsap.set(track, { x: 0 });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const text = "Crafted for the ones who don’t follow trends, they rewrite them with every step";

  return (
    <div 
      ref={containerRef} 
      className="w-full overflow-hidden py-20 flex"
    >
      <div 
        ref={trackRef} 
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...Array(6)].map((_, i) => (
          <span 
            key={i} 
            className="font-rosnoc text-[16vw] leading-none uppercase px-10 select-none"
            style={{
              WebkitTextStroke: "3px rgba(0,0,0,1)",
              color: "transparent",
              letterSpacing: "-0.02em"
            }}
          >
            {text}
          </span>
        ))}
        {[...Array(6)].map((_, i) => (
          <span 
            key={`dup-${i}`} 
            className="font-rosnoc text-[16vw] leading-none uppercase px-10 select-none"
            style={{
              WebkitTextStroke: "3px rgba(0,0,0,1)",
              color: "transparent",
              letterSpacing: "-0.02em"
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
