'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';

export const PurityGuaranteed = () => {
  return (
    <section
      className={`w-full relative overflow-hidden bg-tertiary bg-no-repeat bg-contain bg-[url('/background/TopicWithPhotoandQuestionbg.png')]`}
    >
      <div className="container py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Left content */}
          <div className="lg:w-1/2 z-10 space-y-6">
            <Heading
              level={2}
              className="text-4xl md:text-5xl !text-secondary-2 dark:!text-secondary-2"
            >
              Purity Guaranteed
            </Heading>
            <Text className="text-text dark:text-text">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
            </Text>
            <Heading
              level={3}
              className="text-lg sm:text-xl font-bold !text-text dark:!text-text mb-4"
            >
              Why Anjum Extractions?
            </Heading>

            <Text className="text-text dark:text-text">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
            </Text>

            <Link href="/shop" className="no-underline">
              <button className="!px-5 !py-2.5 bg-primary rounded-xl text-white font-body font-medium text-lg">
                Explore shop
              </button>
            </Link>
          </div>

          {/* Right content with manufacturing image and feature points */}
          <div className="lg:w-1/2 z-10">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <Image
                src="/home/purity.png"
                alt="Manufacturing facility"
                width={600}
                height={400}
                className="w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
