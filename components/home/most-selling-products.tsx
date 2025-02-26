'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import { Button } from '../ui/button';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface MostSellingProductsProps {
  className?: string;
}

export const MostSellingProducts = ({
  className = '',
}: MostSellingProductsProps) => {
  const products: Product[] = [
    {
      id: 'ashwagandha-extract',
      name: 'Ashwagandha Extract',
      image: '/home/ashwagandha-extract.jpg',
      description:
        'Traditional herbal extract with proven benefits for stress relief and immunity.',
    },
    {
      id: 'turmeric-extract',
      name: 'Turmeric Extract',
      image: '/home/ashwagandha-extract.jpg', // Using same image as placeholder
      description:
        'Potent anti-inflammatory and antioxidant properties for overall wellness.',
    },
    {
      id: 'amla-extract',
      name: 'Amla Extract',
      image: '/home/ashwagandha-extract.jpg', // Using same image as placeholder
      description:
        'Rich in vitamin C and antioxidants to support immune health and digestion.',
    },
  ];

  return (
    <section className={`w-full py-16 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        {/* Background pattern - using div with background image instead of absolute image */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div
            className="w-full h-full bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(/background/pattern-3.png)' }}
            aria-hidden="true"
          />
        </div>

        <div className="text-center mb-12">
          <Text className="text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
            Our Products
          </Text>
          <Heading
            level={2}
            className="text-4xl md:text-5xl text-[#783F04] dark:text-[#783F04] font-serif"
          >
            Most selling products
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-square rounded-[28px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}

          {/* Product description column */}
          <div className="lg:col-span-1 flex flex-col justify-center px-4 md:px-8">
            <Heading
              level={3}
              className="text-2xl md:text-3xl text-[#783F04] dark:text-[#783F04] font-serif mb-4"
            >
              PRODUCT NAME
            </Heading>
            <Text className="text-zinc-700 dark:text-zinc-300">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </Text>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/all-products" className="no-underline">
            <Button className="bg-[#783F04] hover:bg-[#5F3304] text-white font-medium rounded-full px-10 py-3">
              View All Products
            </Button>
          </Link>
          <Link href="/contact" className="no-underline">
            <Button className="border border-[#783F04] text-[#783F04] hover:bg-[#783F04]/5 font-medium rounded-full px-10 py-3">
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
