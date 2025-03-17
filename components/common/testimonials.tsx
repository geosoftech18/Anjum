'use client';
import React, { useState } from 'react';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import { Button } from '../ui/button';
import AsanaIcon from '@/assets/asana';
import Image from 'next/image';

type TestimonialType = {
  id: number;
  name: string;
  image: string;
  quote: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Anna Zi Hui',
    image: '/home/testimonials/user.png',
    quote:
      'They are extremely serious and professional with their quality. The herbs are finely crafted and tested.',
  },
  {
    id: 1,
    name: 'Anna Zi Hui',
    image: '/home/testimonials/user.png',
    quote:
      'They are extremely serious and professional with their quality. The herbs are finely crafted and tested.',
  },
  {
    id: 1,
    name: 'Anna Zi Hui',
    image: '/home/testimonials/user.png',
    quote:
      'They are extremely serious and professional with their quality. The herbs are finely crafted and tested.',
  },
  {
    id: 1,
    name: 'Anna Zi Hui',
    image: '/home/testimonials/user.png',
    quote:
      'They are extremely serious and professional with their quality. The herbs are finely crafted and tested.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-primary-2 w-full">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-12 md:mb-0 bg-tertiary pt-16 pb-40 px-16 flex flex-col items-center bg-[url('/background/pattern-8.svg')] bg-no-repeat bg-contain bg-left-bottom">
          <Text className="text-secondary-2 dark:text-secondary-2 mb-4 text-left w-full">
            Testimonials
          </Text>
          <Heading
            level={1}
            className="text-3xl sm:text-4xl mb-10 font-normal text-secondary-2 dark:text-secondary-2 text-left w-full"
          >
            Loved by Brands, Cherished by People
          </Heading>
          <div className="flex flex-row justify-center items-center w-full gap-8">
            <button
              onClick={handlePrevious}
              className="bg-secondary-2 hover:bg-secondary-2/90 text-white rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Previous testimonial"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="bg-white rounded-2xl p-10 shadow-lg relative max-w-md">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row items-center">
                  <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-full">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Text className="font-semibold text-lg">
                    {currentTestimonial.name}
                  </Text>
                </div>
                <div>
                  <Text className="text-xl italic">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </Text>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="bg-secondary-2 hover:bg-secondary-2/90 text-white rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Next testimonial"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center py-16 px-16">
          <AsanaIcon className="w-24 h-24 mb-6" />
          <Heading level={2} className="text-3xl sm:text-4xl mb-8 text-center">
            &ldquo;Anjum is the most authentic platform to source
            extracts&rdquo;
          </Heading>
          <Button color="white" className="px-8 py-4 text-lg">
            Go to Shop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
