'use client';

import React from 'react';
import { Carousel } from '@/components/ui/carousel';
import { CarouselSlide } from '@/components/home/carousel-slide';
import { Certificates } from '@/components/home/certificates';
import { Journey } from '@/components/home/journey';
import { Mission } from '@/components/home/mission';
import { CTA } from '@/components/home/cta';
import { Logo } from '@/components/home/logo-carousel';
import { MostSellingProducts } from '@/components/home/most-selling-products';
import { ProductJourney, PurityGuaranteed } from '@/components/home';

const slides = [
  {
    id: 'slide-1',
    component: (
      <CarouselSlide
        image="/home/hero.webp"
        title="Sourcing Premium Botanical Extracts, for over 25 Years"
        description="Blending ancient wisdom with modern solutions & delivering high-quality products for enhanced well-being. Explore our 300 unique herbal extracts and formulations."
        ctaButtons={{
          primary: {
            label: 'Explore Extracts',
            href: '/about',
          },
          secondary: {
            label: 'Our Products',
            href: '/products',
          },
        }}
      />
    ),
  },
];

// Certification logos with proper dimensions based on the screenshot
const certificationLogos: Logo[] = [
  {
    src: '/brand-assets/iso-certificate.png',
    alt: 'ISO Certification',
    width: 80,
    height: 80,
  },
  {
    src: '/brand-assets/gmp-certificate.png',
    alt: 'GMP Certification',
    width: 80,
    height: 80,
  },
  {
    src: '/brand-assets/haccp-certificate.png',
    alt: 'HACCP Certification',
    width: 80,
    height: 80,
  },
  {
    src: '/brand-assets/fssai-certificate.png',
    alt: 'FSSAI Certification',
    width: 80,
    height: 80,
  },
];

export default function HomePage() {
  return (
    <main>
      <Carousel slides={slides} />

      {/* Certificates Section */}
      <Certificates
        title="We are Certified"
        description="Understand value of each certification"
        knowMoreLink="/about/certifications"
        logos={certificationLogos}
      />

      {/* Journey Section */}
      <Journey />

      {/* Mission Section */}
      <Mission />

      {/* CTA Section */}
      <CTA />

      <PurityGuaranteed />
      <ProductJourney />
      <MostSellingProducts />

      {/* Add other homepage content here */}
    </main>
  );
}
