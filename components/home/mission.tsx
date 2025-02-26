'use client';

import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="flex h-full flex-col rounded-3xl bg-secondary-100 p-6">
    <div className="mb-4 flex items-center gap-4">
      <Image src={icon} alt={title} width={48} height={48} />
      <Text className="text-xl font-medium !text-secondary-800 dark:!text-secondary-800">
        {title}
      </Text>
    </div>
    <Text className="text-zinc-700 dark:text-zinc-700">{description}</Text>
  </div>
);

interface MissionProps {
  className?: string;
}

export const Mission = ({ className = '' }: MissionProps) => {
  // Sample placeholder text - replace with actual content
  const placeholderText =
    'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Curabitur tempus urna at turpis condimentum lobortis.';

  const services = [
    {
      icon: '/brand-assets/private-labelling-icon.svg',
      title: 'Private Labelling',
      description: placeholderText,
    },
    {
      icon: '/brand-assets/custom-formulations-icon.svg',
      title: 'Custom Formulations',
      description: placeholderText,
    },
    {
      icon: '/brand-assets/gmp-certified-icon.svg',
      title: 'GMP-Certified',
      description: placeholderText,
    },
    {
      icon: '/brand-assets/qc-checks-icon.svg',
      title: 'QC Checks',
      description: placeholderText,
    },
  ];

  return (
    <section className={`py-16 bg-[#FFFBF2] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <Text className="mb-2 text-lg font-medium !text-secondary-500 dark:!text-secondary-500">
            Our mission
          </Text>

          <Heading
            level={2}
            className="mx-auto max-w-4xl text-2xl !text-secondary-600 dark:!text-secondary-600"
          >
            &ldquo;We are committed to empowering our customers through reliable
            high-quality herbal extracts and formulations that bridge tradition
            and modernity.&rdquo;
          </Heading>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
