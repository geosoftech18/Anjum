'use client';

import React from 'react';
import { Carousel } from '@/components/ui/carousel';
import { CarouselSlide } from '@/components/home/carousel-slide';

const slides = [
  {
    id: 'slide-1',
    component: (
      <CarouselSlide
        image="/home/hero.webp"
        title="Sourcing Premium Botanical Extracts, for over 25 Years"
        description="Blending ancient wisdom with modern solutions & delivering high-quality products for enhanced well-being. Explore our 300 unique herbal extracts and formulations."
        ctaButtons={{
          primary: {
            label: 'About Us',
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

export default function HomePage() {
  return (
    <main>
      <Carousel slides={slides} />
      {/* Add other homepage content here */}
    </main>
  );
}
