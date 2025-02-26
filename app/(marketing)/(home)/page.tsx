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
import AboutUs from '@/components/home/about-us';
import TestimonialsWithQuote from '@/components/home/testimonials-with-quote';
import FAQs from '@/components/home/faqs';
import PhotoGallery from '@/components/home/photo-gallery';
import OpenRightCarousalComponent from '@/components/home/open-right-carousal';

import { TestimonialsWithQuoteData } from '@/data/home/testimonialWithQuote.json';
import { FAQsData } from '@/data/home/faqs.json';
import { PhotoGalleryData } from '@/data/home/photo-gallery.json';
import { OpenRightCarousalComponentData } from '@/data/home/OpenRightCarousal.json';
import TopicWithPhotoandQuestion from '@/components/home/TopicWithPhotoandQuestion';
import CarousalWithHeadings from '@/components/home/carousal-with-headings';

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

      {/* mehul's component which I have commented out 
       <PurityGuaranteed />
      <ProductJourney /> 
     <MostSellingProducts /> */}

      {/* my component */}

      <TopicWithPhotoandQuestion />
      <CarousalWithHeadings />
      {/* <OpenRightCarousalComponent
        OpenRightCarousalComponentData={OpenRightCarousalComponentData}
      /> */}
      {/* Add other homepage content here */}

      {/* about us */}

      <AboutUs />

      <TestimonialsWithQuote
        TestimonialsWithQuoteData={TestimonialsWithQuoteData}
      />

      <FAQs FAQsData={FAQsData} />

      <PhotoGallery PhotoGalleryData={PhotoGalleryData} />
    </main>
  );
}
