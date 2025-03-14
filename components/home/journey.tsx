'use client';

import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface JourneyProps {
  className?: string;
}

interface StatProps {
  number: string;
  label: string;
  sublabel?: string;
}

const Stat = ({ number, label, sublabel }: StatProps) => (
  <div className="flex items-center gap-5">
    <div className="flex items-baseline gap-2">
      <Heading className="text-4xl text-gold dark:text-gold sm:text-5xl">
        {number}
      </Heading>
    </div>
    <div className="mt-1">
      <p className="text-sm font-medium text-zinc-700 md:text-base">{label}</p>
      {sublabel && <p className="text-sm text-zinc-600">{sublabel}</p>}
    </div>
  </div>
);

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 py-1.5">
    <CheckCircleIcon className="h-6 w-h-6 text-secondary-2" />
    <Text className="text-base text-text dark:text-text">{children}</Text>
  </div>
);

export const Journey = ({ className = '' }: JourneyProps) => {
  return (
    <section
      className={`relative overflow-hidden bg-tertiary ${className}`}
      style={{
        backgroundImage: 'url(/background/pattern-2.png)',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
      }}
    >
      <div className="container py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image with Card */}
          <div className="relative h-[380px] md:h-[402px] rounded-lg overflow-hidden">
            {/* Manufacturing Image */}
            <Image
              src="/home/manufacturing.jpg"
              alt="Ayurvedic manufacturing facility"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay Card */}
            <div className="absolute bottom-[20%] right-0 max-w-[260px] w-full rounded-l-lg bg-white p-7 shadow-lg">
              <div className="mb-2 flex justify-center">
                <Image
                  src="/brand-assets/leaf-icon.svg"
                  alt="Leaf icon"
                  width={80}
                  height={45}
                />
              </div>
              <h3 className="mb-2 text-center text-sm sm:text-base font-semibold text-secondary-2">
                Ayurvedic practices, ethics at core
              </h3>
              <p className="text-center text-xs sm:text-xs text-text dark:text-text">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum.
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <Text className="mb-1 text-lg !text-secondary-2 dark:!text-secondary-2">
              Our Journey
            </Text>

            <Heading
              level={2}
              className="mb-4 text-3xl !text-secondary-2 dark:!text-secondary-2 md:text-4xl"
            >
              Innovation & Ayurveda at core
            </Heading>

            <Text className="mb-8 text-lg text-text dark:text-text">
              Blending ancient wisdom with modern solutions & delivering
              high-quality products for enhanced holistic well-being.
            </Text>

            {/* Feature List */}
            <div className="mb-12 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <FeatureItem>100% botanical extracts</FeatureItem>
              <FeatureItem>10+ quality checks conducted</FeatureItem>
              <FeatureItem>In-house manufacturing unit</FeatureItem>
              <FeatureItem>Competitive market price</FeatureItem>
            </div>

            {/* Stats Section */}
          </div>

          <div className="col-span-full pb-10 flex flex-col gap-4 sm:flex-row sm:gap-16">
            <div className="flex items-center gap-4">
              <div className="h-16 w-2 bg-secondary-2"></div>
              <div>
                <Text className="!text-2xl text-secondary-2 dark:text-secondary-2 font-medium whitespace-nowrap">
                  Our achievements
                </Text>
                <Text className="!text-2xl text-secondary-2 dark:text-secondary-2 font-medium">
                  so far
                </Text>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Stat number="300+" label="Botanical Extracts" />
              <Stat number="200+" label="Formulations" />
              <Stat number="500k+" label="Happy Customers" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
