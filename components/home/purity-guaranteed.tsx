'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import { Button } from '../ui/button';

export const PurityGuaranteed = () => {
  return (
    <section
      className={`w-full py-16 relative overflow-hidden bg-background-100 bg-no-repeat bg-contain bg-[url('/background/TopicWithPhotoandQuestionbg.png')]`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Left content */}
          <div className="lg:w-1/2 z-10 space-y-6">
            <Heading
              level={2}
              className="text-4xl md:text-5xl !text-secondary-500 dark:!text-secondary-500"
            >
              Purity Guaranteed
            </Heading>
            <Text className="text-zinc-700 dark:text-zinc-700">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
            </Text>
            <Heading
              level={3}
              className="text-2xl md:text-3xl !text-secondary-500 dark:!text-secondary-500 mb-4"
            >
              Why Anjum Extractions?
            </Heading>

            <Text className="text-neutral-700 dark:text-neutral-700">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
            </Text>

            <Link href="/shop" className="no-underline">
              <Button className="!px-3 !py-1 !bg-primary-400">
                Explore shop
              </Button>
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
