'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

type Product = {
  name: string;
  description: string;
  image: string;
  bgImage: string;
  isClone?: boolean;
  originalIndex?: number;
};

const originalProducts: Product[] = [
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/product1.png',
    bgImage: '/products/leaves.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/product2.png',
    bgImage: '/products/flower.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/product3.png',
    bgImage: '/products/leaves.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/product1.png',
    bgImage: '/products/flower.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/product2.png',
    bgImage: '/products/flower.png',
  },
  {
    name: 'PRODUCT NAME',
    description:
      'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: '/products/product3.png',
    bgImage: '/products/leaves.png',
  },
];

// Create an enhanced products array with clones at both ends for seamless infinite scrolling
const createInfiniteProducts = (products: Product[]): Product[] => {
  // Clone THREE items instead of two for more buffer space
  const firstItems = products.slice(0, 3).map((item: Product, index: number) => ({
    ...item,
    isClone: true,
    originalIndex: index,
  }));
  
  const lastItems = products.slice(-3).map((item: Product, index: number) => ({
    ...item, 
    isClone: true,
    originalIndex: products.length - 3 + index,
  }));
  
  // Add isClone: false and originalIndex to original items
  const markedProducts = products.map((item: Product, index: number) => ({
    ...item,
    isClone: false,
    originalIndex: index,
  }));
  
  // Combine: last clones + original products + first clones
  return [...lastItems, ...markedProducts, ...firstItems];
};

const products = createInfiniteProducts(originalProducts);

const MostSellingProducts = () => {
  // Start at index 3 (after the cloned items at the start)
  const [centerIndex, setCenterIndex] = useState(4);
  const [prevCenterIndex, setPrevCenterIndex] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // To track when we need to reset position
  const resetRef = useRef(false);

  // Use requestAnimationFrame for smoother reset
  const silentlyResetPosition = (targetIndex: number) => {
    window.requestAnimationFrame(() => {
      setCenterIndex(targetIndex);
      scrollToCenter(targetIndex, false);
    });
  };

  const handleNavigation = (direction: 'left' | 'right') => {
    if (isAnimating) return;

    const newIndex = direction === 'left' ? centerIndex - 1 : centerIndex + 1;
    
    if (newIndex === centerIndex) return;

    setIsAnimating(true);
    setPrevCenterIndex(centerIndex);

    // First change the center index
    setCenterIndex(newIndex);

    // Then scroll to the center after a small delay to allow width change to start
    setTimeout(() => {
      scrollToCenter(newIndex);

      // Check if we've reached a clone and need to reset
      const isLeftClone = newIndex < 3;
      const isRightClone = newIndex >= products.length - 3;
      
      if (isLeftClone || isRightClone) {
        resetRef.current = true;
      }

      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false);
        
        // If we've reached a clone, silently jump to the real item
        if (resetRef.current) {
          resetRef.current = false;
          
          if (isLeftClone) {
            // If at first clone, jump to the real item (near the end)
            const realIndex = products.length - 3 - (3 - newIndex);
            silentlyResetPosition(realIndex);
          } else if (isRightClone) {
            // If at last clone, jump to the real item (near the start)
            const realIndex = 3 + (newIndex - (products.length - 3));
            silentlyResetPosition(realIndex);
          }
        }
      }, 900);
    }, 50);
  };

  const handleSlideClick = (index: number) => {
    if (isAnimating || index === centerIndex) return;
    
    setIsAnimating(true);
    setPrevCenterIndex(centerIndex);
    setCenterIndex(index);
    
    setTimeout(() => {
      scrollToCenter(index);
      
      // Check if we've reached a clone and need to reset
      const isLeftClone = index < 3;
      const isRightClone = index >= products.length - 3;
      
      if (isLeftClone || isRightClone) {
        resetRef.current = true;
      }
      
      setTimeout(() => {
        setIsAnimating(false);
        
        // If we've reached a clone, silently jump to the real item
        if (resetRef.current) {
          resetRef.current = false;
          
          if (isLeftClone) {
            // If at first clone, jump to the real item (near the end)
            const realIndex = products.length - 3 - (3 - index);
            silentlyResetPosition(realIndex);
          } else if (isRightClone) {
            // If at last clone, jump to the real item (near the start)
            const realIndex = 3 + (index - (products.length - 3));
            silentlyResetPosition(realIndex);
          }
        }
      }, 900);
    }, 50);
  };

  // Scroll to center the active product card
  const scrollToCenter = (index: number, smooth = true) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const element = document.getElementById(`product-${index}`);

    if (!element) return;

    const containerWidth = container.offsetWidth;
    const elementRect = element.getBoundingClientRect();

    const scrollLeft =
      element.offsetLeft - (containerWidth - elementRect.width) / 2;

    // Use transform instead of scrollTo for smoother animation when not smooth scrolling
    if (!smooth) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = scrollLeft;
      // Reset scroll behavior after the frame renders
      window.requestAnimationFrame(() => {
        container.style.scrollBehavior = 'smooth';
      });
    } else {
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  // Effect to scroll to center index on initial load
  useEffect(() => {
    // Add a tiny delay before initial scroll to ensure all layout calculations are complete
    const timer = setTimeout(() => {
      scrollToCenter(centerIndex, false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const isCenterIndex = (index: number) => centerIndex === index;
  const wasCenterIndex = (index: number) => prevCenterIndex === index;
  
  const getAnimationState = (index: number) => {
    if (isCenterIndex(index)) return "enterCenter";
    if (wasCenterIndex(index)) return "leaveCenter";
    return "idle";
  };

  const bgVariants = {
    idle: { 
      rotate: 0, 
      scale: 0.7,
      opacity: 1
    },
    enterCenter: { 
      rotate: [15, 0], 
      scale: [0.8, 1],
      opacity: [0.5, 1],
      transition: { 
        duration: 0.9, 
        ease: "easeOut" 
      }
    },
    leaveCenter: { 
      rotate: [0, -15], 
      scale: [1, 0.7],
      opacity: [1, 0.5],
      transition: { 
        duration: 0.9, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <section className="bg-tertiary">
      <div className="py-20 space-y-4">
        <Text className="text-center !text-secondary-2 dark:!text-secondary-2">
          Our Products
        </Text>
        <Heading className="sm:text-5xl !text-secondary-2 dark:!text-secondary-2 text-center mb-8">
          Our Most Popular Products
        </Heading>
        <div
          ref={containerRef}
          className="w-full flex flex-row overflow-x-auto scrollbar-hidden scroll-smooth gap-10"
        >
          {products.map((item, index) => (
            <motion.div
              className="flex items-center justify-start gap-10"
              key={index}
              style={{
                minWidth: isCenterIndex(index) ? '807px' : '280px',
              }}
              id={`product-${index}`}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              layout="position"
              layoutDependency={index === centerIndex}
            >
              <div
                className={`flex-shrink-0 flex-grow-0 flex-basis-[${
                  isCenterIndex(index) ? '807px' : '280px'
                }]${!isCenterIndex(index) ? " cursor-pointer" : ""}`}
                onClick={() => !isCenterIndex(index) && handleSlideClick(index)}
                role="button"
                tabIndex={!isCenterIndex(index) ? 0 : -1}
                aria-label={!isCenterIndex(index) ? `View ${item.name} details` : undefined}
                onKeyDown={(e) => {
                  if (!isCenterIndex(index) && (e.key === 'Enter' || e.key === ' ')) {
                    handleSlideClick(index);
                  }
                }}
              >
                {isCenterIndex(index) ? (
                  <motion.div
                    className="bg-gradient-to-b from-secondary-2/50 to-secondary-2/0 rounded-full flex justify-center items-center relative"
                    style={{
                      width: '370px',
                      height: '540px',
                    }}
                    animate={getAnimationState(index)}
                    variants={{
                      idle: { scale: 1 },
                      enterCenter: { 
                        scale: [0.9, 1],
                        transition: { duration: 0.9, ease: "easeOut" }
                      },
                      leaveCenter: { 
                        scale: [1, 0.9],
                        transition: { duration: 0.9, ease: "easeIn" }
                      }
                    }}
                  >
                    <Image
                      src={item.image}
                      width={isCenterIndex(index) ? 280 : 235}
                      height={360}
                      priority={index === centerIndex}
                      className="rounded-3xl z-10 relative"
                      alt={item.name}
                      style={{
                        objectFit: 'cover',
                        width: isCenterIndex(index) ? '280px' : '235px',
                        height: 'auto',
                        flexShrink: 0,
                      }}
                    />
                    <motion.div
                      className='absolute inset-0 bg-cover bg-center z-0'
                      style={{
                        backgroundImage: `url(${item.bgImage})`,
                      }}
                      animate={getAnimationState(index)}
                      variants={bgVariants}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={getAnimationState(index)}
                    variants={{
                      idle: { rotate: 0, scale: 1 },
                      enterCenter: { 
                        rotate: [0, 0],
                        scale: [0.85, 1],
                        transition: { duration: 0.9 }
                      },
                      leaveCenter: { 
                        rotate: 0,
                        scale: [1, 1],
                        transition: { duration: 0.9, ease: "easeInOut" }
                      }
                    }}
                    className='relative'
                  >
                    <Image
                      src={item.image}
                      width={isCenterIndex(index) ? 280 : 235}
                      height={360}
                      priority={index === centerIndex}
                      className="rounded-3xl z-10 relative"
                      alt={item.name}
                      style={{
                        objectFit: 'cover',
                        width: isCenterIndex(index) ? '280px' : '235px',
                        height: 'auto',
                        flexShrink: 0,
                        transition: 'width 0.9s ease-in-out'
                      }}
                    />
                    <motion.div
                      className='absolute inset-0 bg-cover bg-center z-0'
                      style={{
                        backgroundImage: `url(${item.bgImage})`,
                      }}
                      animate={getAnimationState(index)}
                      variants={bgVariants}
                    />
                  </motion.div>
                )}
              </div>
              {isCenterIndex(index) && (
                <motion.div
                  className="w-2xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
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
            disabled={isAnimating}
            aria-label="Previous product"
          >
            <ArrowLeftIcon className="w-5 h-5 !text-secondary-2 dark:!text-secondary-2" />
            Previous
          </Button>
          <Button
            plain
            className="!text-secondary-2 dark:!text-secondary-2 sm:!text-sm"
            onClick={() => handleNavigation('right')}
            disabled={isAnimating}
            aria-label="Next product"
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
