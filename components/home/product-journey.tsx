'use client';

import React, { useState } from 'react';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';

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
      icon: '/icons/mortar-pestle.svg',
      description: 'Identifying herbs with potential compounds',
    },
    {
      id: 'validation',
      title: 'Clinical Validation',
      icon: '/icons/magnifying-glass.svg',
      description: 'Determining the potent activities',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: '/icons/factory.svg',
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
    <section className={`w-full py-16 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        {/* Background pattern - using div with background image instead of absolute image */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div
            className="w-full h-full bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(/background/pattern-2.png)' }}
            aria-hidden="true"
          />
        </div>

        <div className="text-center mb-12">
          <Text className="text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
            Product Journey
          </Text>
          <Heading
            level={2}
            className="text-4xl md:text-5xl text-[#783F04] dark:text-[#783F04] font-serif"
          >
            Crafted with care & expertise
          </Heading>
        </div>

        {/* Journey steps navigation */}
        <div className="flex flex-wrap justify-center mb-16 border-b border-zinc-200 dark:border-zinc-700">
          {journeySteps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`px-4 py-3 text-lg font-medium transition-colors relative ${
                activeStep === step.id
                  ? 'text-[#783F04] dark:text-[#783F04]'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-[#783F04] dark:hover:text-[#783F04]'
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
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm p-8 transition-all hover:shadow-md flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-6 relative">
                {/* This would ideally be an SVG icon but using a placeholder for now */}
                <div className="w-full h-full flex items-center justify-center text-[#B88746] dark:text-[#B88746]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-12 h-12"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={
                        step.id === 'research'
                          ? 'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
                          : step.id === 'validation'
                          ? 'M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          : 'M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64'
                      }
                    />
                  </svg>
                </div>
              </div>
              <Heading
                level={3}
                className="text-xl font-medium text-zinc-900 dark:text-white mb-2"
              >
                {step.description}
              </Heading>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
