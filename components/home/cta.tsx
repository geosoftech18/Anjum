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
    <section className={`w-full bg-tertiary-2 ${className}`}>
      <div className="container py-20">
        <div className="relative rounded-3xl bg-primary-2 text-white">
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
            <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                <Image
                  src="/home/cta/ayurvedic-doctor.png"
                  alt="Ayurvedic Doctor"
                  width={230}
                  height={295}
                  className="rounded-xl object-cover z-10 w-[230px] h-[295px]"
                />
            </div>

            {/* Middle with quote */}
            <div className="flex-1 flex flex-col items-center md:items-start pr-10 pl-5">
              <Heading className="text-xl md:text-2xl mb-5 font-light text-center md:text-left">
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
