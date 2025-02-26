'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import { Button } from '../ui/button';

interface FeaturePoint {
  title: string;
  description: string;
}

interface PurityGuaranteedProps {
  className?: string;
}

export const PurityGuaranteed = ({ className = '' }: PurityGuaranteedProps) => {
  const featurePoints: FeaturePoint[] = [
    {
      title: 'Chemical free and plant based',
      description:
        'Our products are entirely herbal, plant-based, and free from chemicals.',
    },
    {
      title: 'Strict Quality Control',
      description:
        'We implement rigorous quality control measures while manufacturing',
    },
    {
      title: 'Custom Formulations',
      description:
        'We offer fully customizable formulations to meet the specific needs',
    },
  ];

  return (
    <section className={`w-full py-16 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 relative">
          {/* Background pattern - using div with background image instead of absolute image */}
          <div className="absolute left-0 top-0 w-full h-full -z-10 opacity-10">
            <div
              className="w-full h-full bg-no-repeat bg-contain"
              style={{ backgroundImage: 'url(/background/pattern-1.png)' }}
              aria-hidden="true"
            />
          </div>

          {/* Left content */}
          <div className="lg:w-1/2 z-10">
            <Heading
              level={2}
              className="text-4xl md:text-5xl text-[#783F04] dark:text-[#783F04] font-serif mb-4"
            >
              Purity Guaranteed
            </Heading>

            <Text className="text-zinc-700 dark:text-zinc-300 mb-6">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
            </Text>

            <div className="mb-8">
              <Heading
                level={3}
                className="text-2xl md:text-3xl text-[#783F04] dark:text-[#783F04] font-serif mb-4"
              >
                Why Anjum Extractions?
              </Heading>

              <Text className="text-zinc-700 dark:text-zinc-300">
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.Morem ipsum dolor sit amet, consectetur
                adipiscing eli.
              </Text>
            </div>

            <Link href="/shop" className="no-underline">
              <Button className="bg-[#B88746] hover:bg-[#9D6B33] text-white rounded-full px-8 py-2">
                Explore shop
              </Button>
            </Link>
          </div>

          {/* Right content with manufacturing image and feature points */}
          <div className="lg:w-1/2 z-10">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <Image
                src="/home/manufacturing.jpg"
                alt="Manufacturing facility"
                width={600}
                height={400}
                className="w-full object-cover rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              {featurePoints.map((point, index) => (
                <div key={index} className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-2 md:mb-0">
                    <Heading
                      level={4}
                      className="text-xl md:text-2xl text-[#783F04] dark:text-[#783F04] font-serif"
                    >
                      {point.title}
                    </Heading>
                  </div>
                  <div className="md:w-1/2">
                    <Text className="text-zinc-700 dark:text-zinc-300">
                      {point.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
