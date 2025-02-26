'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';

interface CarouselSlideProps {
  image: string;
  title: string;
  description: string;
  ctaButtons?: {
    primary?: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
}

export const CarouselSlide = ({
  image,
  title,
  description,
  ctaButtons,
}: CarouselSlideProps) => {
  return (
    <div className="relative h-[calc(100vh-6rem)] w-full select-text">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-16">
        <div className="flex h-full items-center">
          <div className="max-w-3xl">
            <Heading className="text-4xl font-bold text-white dark:!text-white md:text-5xl lg:text-6xl">
              {title}
            </Heading>
            <Text className="mt-4 text-xl text-white dark:!text-white">
              {description}
            </Text>
            {ctaButtons && (
              <div className="mt-8 flex items-center gap-4">
                {ctaButtons.primary && (
                  <Button
                    href={ctaButtons.primary.href}
                    color="white"
                    className="relative text-secondary-500 dark:!text-secondary-500 hover:scale-105 active:scale-95"
                  >
                    {ctaButtons.primary.label}
                  </Button>
                )}
                {ctaButtons.secondary && (
                  <Button
                    href={ctaButtons.secondary.href}
                    outline
                    className="relative !border-white dark:!border-white !text-white dark:!text-white hover:scale-105 hover:bg-white/10 active:scale-95"
                  >
                    {ctaButtons.secondary.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
