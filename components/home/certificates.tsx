'use client';

import React from 'react';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { LogoCarousel, Logo } from '@/components/home/logo-carousel';

interface CertificatesProps {
  title?: string;
  description?: string;
  knowMoreLink?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  {
    src: '/brand-assets/iso-certificate.png',
    alt: 'ISO Certification',
    width: 100,
    height: 100,
  },
  {
    src: '/brand-assets/gmp-certificate.png',
    alt: 'GMP Certification',
    width: 100,
    height: 100,
  },
  {
    src: '/brand-assets/haccp-certificate.png',
    alt: 'HACCP Certification',
    width: 100,
    height: 100,
  },
  {
    src: '/brand-assets/fssai-certificate.png',
    alt: 'FSSAI Certification',
    width: 100,
    height: 100,
  },
];

export const Certificates = ({
  title = 'We are Certified',
  description = 'Understand value of each certification',
  knowMoreLink = '/certifications',
  logos = defaultLogos,
  className = '',
}: CertificatesProps) => {
  return (
    <section
      className={`relative pt-6 pb-4 border-b-8 border-gold ${className}`}
      style={{
        backgroundImage: 'url(/background/pattern-1.png)',
        backgroundColor: '#65582C',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto container px-5">
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <Heading
                level={2}
                className="text-3xl font-medium text-white md:text-4xl"
              >
                {title}
              </Heading>

              <div className="mt-2 flex items-center">
                <Text className="text-lg sm:text-xl text-white dark:text-white">
                  {description}
                </Text>

                <Link
                  href={knowMoreLink}
                  className="ml-2 flex items-center text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white/50"
                  tabIndex={0}
                  aria-label="Learn more about our certifications"
                >
                  <span className="text-base">Know more</span>
                  <span className="ml-1">&#8250;</span>
                </Link>
              </div>
            </div>
          </div>

          <LogoCarousel logos={logos} autoPlayInterval={4000} itemsToShow={4} />
        </div>
      </div>
    </section>
  );
};
