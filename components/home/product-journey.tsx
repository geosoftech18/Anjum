'use client';

import React, { useState } from 'react';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import Image from 'next/image';

interface JourneyStep {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface ProductJourneyProps {
  className?: string;
}

export const ProductJourney = ({ className = '' }: ProductJourneyProps) => {
  const [activeStep, setActiveStep] = useState('research');

  const journeySteps: JourneyStep[] = [
    {
      id: 'research',
      title: 'Research',
      icon: '/home/herb.png',
      description: 'Identifying herbs with potential compounds',
    },
    {
      id: 'validation',
      title: 'Clinical Validation',
      icon: '/home/magnifying-glass.png.png',
      description: 'Determining the potent activities',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: '/home/factory.png.png',
      description: 'Creating the product and its activities',
    },
    {
      id: 'quality',
      title: 'Quality Control',
      icon: '/icons/quality-check.svg',
      description: 'Ensuring the highest quality standards',
    },
    {
      id: 'delivery',
      title: 'Global Delivery',
      icon: '/icons/delivery.svg',
      description: 'Shipping to customers worldwide',
    },
  ];

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId);
  };

  return (
    <section
      className={`w-full relative overflow-hidden bg-no-repeat bg-cover ${className}`}
      style={{
        backgroundImage: 'url(/background/pattern-6.png)',
      }}
    >
      <div className="container py-20">
        <div className="text-center mb-12">
          <Text className="text-secondary-2 dark:text-secondary-2 mb-2">
            Product Journey
          </Text>
          <Heading
            level={2}
            className="text-3xl sm:text-4xl text-secondary-2 dark:text-secondary-2 font-serif"
          >
            Crafted with care & expertise
          </Heading>
        </div>

        {/* Journey steps navigation */}
        <div className="w-max mx-auto flex flex-wrap justify-center mb-16 border-b border-zinc-400 dark:border-zinc-400">
          {journeySteps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`px-4 py-3 text-base font-medium transition-colors relative ${
                activeStep === step.id
                  ? 'text-primary dark:text-primary'
                  : 'text-zinc-400 dark:text-zinc-400 hover:text-primary dark:hover:text-primary'
              }`}
              aria-label={`View ${step.title} step`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleStepClick(step.id);
                }
              }}
            >
              {step.title}
              {activeStep === step.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-2 dark:bg-secondary-2" />
              )}
            </button>
          ))}
        </div>

        {/* Journey cards */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          {journeySteps.slice(0, 3).map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md flex flex-col items-center text-center max-w-80"
            >
              <div className="w-24 h-24 mb-6 relative">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={88}
                    height={88}
                  />
                </div>
              </div>
              <Text className="text-xl font-medium text-zinc-900 dark:text-zinc-900 mb-2">
                {step.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
