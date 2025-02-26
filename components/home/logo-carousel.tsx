'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
  href?: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  autoPlayInterval?: number;
  className?: string;
  itemsToShow?: number;
}

export const LogoCarousel = ({
  logos,
  autoPlayInterval = 3000,
  className = '',
  itemsToShow = 4,
}: LogoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate total number of slides needed
  const totalSlides = Math.ceil(logos.length / itemsToShow);

  // Handle auto-rotation
  useEffect(() => {
    if (isPaused || logos.length <= itemsToShow) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [
    autoPlayInterval,
    currentIndex,
    isPaused,
    logos.length,
    itemsToShow,
    totalSlides,
  ]);

  // Get visible logos based on current index
  const getVisibleLogos = () => {
    const start = (currentIndex * itemsToShow) % logos.length;
    const visibleLogos = [];

    for (let i = 0; i < itemsToShow; i++) {
      const index = (start + i) % logos.length;
      visibleLogos.push(logos[index]);
    }

    return visibleLogos;
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Logo carousel"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-around gap-4 px-4"
        >
          {getVisibleLogos().map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex items-center justify-center p-2"
            >
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                  aria-label={logo.alt}
                  tabIndex={0}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto max-h-20 w-auto"
                  />
                </a>
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-20 w-auto"
                />
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      {totalSlides > 1 && (
        <div className="mt-4 flex justify-center gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
};
