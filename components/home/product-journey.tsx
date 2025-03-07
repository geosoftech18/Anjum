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
      icon: '/home/magnifying-glass.png',
      description: 'Determining the potent activities',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: '/home/factory.png',
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
      className={`w-full py-20 relative overflow-hidden bg-no-repeat bg-cover ${className}`}
      style={{
        backgroundImage: 'url(/background/pattern-6.png)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Text className="!text-secondary-500 dark:!text-secondary-500 mb-2">
            Product Journey
          </Text>
          <Heading
            level={2}
            className="text-4xl md:text-5xl !text-secondary-500 dark:!text-secondary-500 font-serif"
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
              className={`px-4 py-3 text-lg font-medium transition-colors relative ${
                activeStep === step.id
                  ? 'text-secondary-500 dark:text-secondary-500'
                  : 'text-zinc-400 dark:text-zinc-400 hover:text-secondary-500 dark:hover:text-secondary-500'
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
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#783F04] dark:bg-[#783F04]" />
              )}
            </button>
          ))}
        </div>

        {/* Journey cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journeySteps.slice(0, 3).map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-6 relative">
                <div className="w-full h-full flex items-center justify-center text-[#B88746] dark:text-[#B88746]">
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
