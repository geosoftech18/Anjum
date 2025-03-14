'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/sample.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/sample.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/sample.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/sample.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/sample.png',
  },
];

const MostSellingProducts = () => {
  const [centerIndex, setCenterIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (direction: 'left' | 'right') => {
    if (isAnimating) return;

    const newIndex =
      direction === 'left'
        ? Math.max(0, centerIndex - 1)
        : Math.min(products.length - 1, centerIndex + 1);

    if (newIndex === centerIndex) return;

    setIsAnimating(true);

    // First change the center index
    setCenterIndex(newIndex);

    // Then scroll to the center after a small delay to allow width change to start
    setTimeout(() => {
      scrollToCenter(newIndex);

      // Reset animation state after transition completes
      setTimeout(() => setIsAnimating(false), 500);
    }, 50);
  };

  // Scroll to center the active product card
  const scrollToCenter = (index: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const element = document.getElementById(`product-${index}`);

    if (!element) return;

    const containerWidth = container.offsetWidth;
    const elementRect = element.getBoundingClientRect();

    const scrollLeft =
      element.offsetLeft - (containerWidth - elementRect.width) / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  };

  // Effect to scroll to center index on initial load
  useEffect(() => {
    scrollToCenter(centerIndex);
  }, []);

  return (
    <section className="bg-tertiary">
      <div className="container py-20 space-y-4">
        <Text className="text-center !text-secondary-2 dark:!text-secondary-2">
          Our Products
        </Text>
        <Heading className="sm:text-5xl !text-secondary-2 dark:!text-secondary-2 text-center mb-8">
          Our Most Popular Products
        </Heading>
        <div
          ref={containerRef}
          className="w-full flex flex-row overflow-x-auto scroll-smooth gap-10"
        >
          {products.map((item, index) => (
            <motion.div
              className="flex items-center justify-start gap-10"
              key={index}
              style={{
                minWidth: centerIndex === index ? '608px' : '280px',
              }}
              id={`product-${index}`}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              layout="position"
              layoutDependency={index === centerIndex}
            >
              <div
                className="relative flex-shrink-0 flex-grow-0 flex-basis-[280px]"
                style={{ width: '280px', height: '360px' }}
              >
                <Image
                  src={item.image}
                  width={280}
                  height={360}
                  priority={index === centerIndex}
                  className="rounded-3xl"
                  alt={item.name}
                  style={{
                    objectFit: 'cover',
                    width: '280px',
                    height: '360px',
                    flexShrink: 0,
                  }}
                />
              </div>
              {centerIndex === index && (
                <motion.div
                  className="w-2xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Text className="text-secondary-2 dark:!text-secondary-2 font-medium">
                    {item.name}
                  </Text>
                  <Text className="text-neutral-500 dark:!text-neutral-500">
                    {item.description}
                  </Text>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center gap-4 mt-4">
          <Button
            plain
            className="!text-secondary-2 dark:!text-secondary-2 sm:!text-sm"
            onClick={() => handleNavigation('left')}
            disabled={centerIndex <= 0 || isAnimating}
          >
            <ArrowLeftIcon className="w-5 h-5 !text-secondary-2 dark:!text-secondary-2" />
            Previous
          </Button>
          <Button
            plain
            className="!text-secondary-2 dark:!text-secondary-2 sm:!text-sm"
            onClick={() => handleNavigation('right')}
            disabled={centerIndex >= products.length - 1 || isAnimating}
          >
            Next
            <ArrowRightIcon className="w-5 h-5 !text-secondary-2 dark:!text-secondary-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MostSellingProducts;
