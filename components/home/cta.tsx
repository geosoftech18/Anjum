'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '../ui/heading';

interface CTAProps {
  className?: string;
}

export const CTA = ({ className = '' }: CTAProps) => {
  return (
    <section className={`w-full py-8 md:py-5 ${className}`}>
      <div className="container mx-auto px-5">
        <div className="relative overflow-hidden rounded-3xl bg-primary-2 text-white">
          {/* Background pattern on the right */}
          <div className="absolute inset-0">
            <Image
              src="/background/pattern-3.png"
              alt=""
              fill
              aria-hidden="true"
            />
          </div>

          <div className="relative flex flex-col md:flex-row items-center">
            {/* Left side with doctor image */}
            <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 mb-8 md:mb-0 md:mr-8">
              <div className="relative w-[200px] h-[250px] sm:w-[220px] sm:h-[280px] md:w-[240px] md:h-[300px]">
                <Image
                  src="/home/ayurvedic-doctor.png"
                  alt="Ayurvedic Doctor"
                  fill
                  className="rounded-xl object-cover z-10"
                />
              </div>
            </div>

            {/* Middle with quote */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <Heading className="text-xl md:text-2xl mb-5 leading-relaxed font-light text-center md:text-left">
                &ldquo;In the harmony of Ayurveda and modern science, we find
                the timeless wisdom of herbal extracts, where nature&apos;s
                ancient secrets are unveiled through the lens of
                innovation.&rdquo;
              </Heading>

              <Link href="/contact" className="no-underline">
                <button className="!px-6 !py-1 bg-gold rounded-xl text-white font-body font-medium text-lg">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
