/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
// import { Button } from './button';
import FlowerIcon from '@/assets/flower';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export interface CarouselSlide {
  id: string;
  component: React.ReactNode;
}

export interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
  animationDuration?: number;
  className?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export const Carousel = ({
  slides,
  // autoPlayInterval = 5000,
  animationDuration = 0.5,
  className = '',
}: CarouselProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  // const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([currentPage]) => {
        const nextPage = currentPage + newDirection;
        if (nextPage < 0) return [slides.length - 1, newDirection];
        if (nextPage >= slides.length) return [0, newDirection];
        return [nextPage, newDirection];
      });
    },
    [slides.length],
  );

  const handleDragStart = (_: any, info: PanInfo) => {
    setDragStart(info.point.x);
    // setIsPaused(true);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const dragDistance = info.point.x - dragStart;
    const dragThreshold = window.innerWidth * 0.2; // 20% of screen width

    if (Math.abs(dragDistance) > dragThreshold) {
      paginate(dragDistance > 0 ? -1 : 1);
    }
    // setIsPaused(false);
  };

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        paginate(-1);
      } else if (event.key === 'ArrowRight') {
        paginate(1);
      }
    },
    [paginate],
  );

  // useEffect(() => {
  //   if (!isPaused) {
  //     const timer = setInterval(() => {
  //       paginate(1);
  //     }, autoPlayInterval);
  //     return () => clearInterval(timer);
  //   }
  // }, [paginate, autoPlayInterval, isPaused]);

  return (
    <div
      className={`group relative w-full overflow-hidden ${className}`}
      // onMouseEnter={() => setIsPaused(true)}
      // onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
    >
      {/* Navigation Buttons - Positioned on sides */}
      <div className="pointer-events-none absolute inset-x-4 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between">
        {/* <Button
          onClick={() => paginate(-1)}
          className="pointer-events-auto !rounded-full after:!rounded-full dark:after:!rounded-full !bg-white/20 p-2 hover:!bg-white/30 dark:bg-white/20 dark:hover:!bg-white/30 max-sm:hidden"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </Button>
        <Button
          onClick={() => paginate(1)}
          className="pointer-events-auto !rounded-full after:!rounded-full dark:after:!rounded-full !bg-white/20 p-2 hover:!bg-white/30 dark:bg-white/20 dark:hover:!bg-white/30 max-sm:hidden"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </Button> */}
      </div>

      {/* Slides Container */}
      <div className="relative">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: animationDuration,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className="relative touch-pan-y"
          >
            {slides[page].component}
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index > page ? 1 : -1])}
              className="pointer-events-auto group relative h-8 w-8 rounded-full focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === page ? 'true' : 'false'}
            >
              {index === page ? (
                <FlowerIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-white" />
              ) : (
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 transition-all group-hover:bg-white/75" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
