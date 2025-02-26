'use client';

import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousalShadcn';
import Image from 'next/image';

const steps = [
  {
    title: 'Research',
    description: [
      {
        imagePath: '/home/CarousalWithHeadingImg1.png',
        text: 'Identifying herbs with potential compounds',
      },
      {
        imagePath: '/home/CarousalWithHeadingImg2.png',
        text: 'Determining the potent activities',
      },
      {
        imagePath: '/home/CarousalWithHeadingImg3.png',
        text: 'Creating the product and its activities',
      },
    ],
  },
  {
    title: 'Clinical Validation',
    description: [
      {
        imagePath: '/home/CarousalWithHeadingImg1.png',
        text: 'Preclinical testing for safety & efficacy',
      },
      {
        imagePath: '/home/CarousalWithHeadingImg2.png',
        text: 'Human trials for effectiveness',
      },
      {
        imagePath: '/home/CarousalWithHeadingImg3.png',
        text: 'Regulatory approval process',
      },
    ],
  },
  {
    title: 'Manufacturing',
    description: [
      {
        imagePath: '/home/CarousalWithHeadingImg1.png',
        text: 'Ensuring GMP compliance',
      },
      {
        imagePath: '/home/CarousalWithHeadingImg2.png',
        text: 'Scaling production efficiently',
      },
      {
        imagePath: '/home/CarousalWithHeadingImg3.png',
        text: 'Packaging for distribution',
      },
    ],
  },
];

const CarousalWithHeadings = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className=" bg-[#FFF4DF] relative z-0">
      <div className="absolute h-full w-full left-0 top-1/2 -translate-y-1/2 bg-[url('/background/CarousalWithHeadingsCenterbg.png')] bg-contain bg-no-repeat bg-center -z-1"></div>
      {/* Tag */}
      <div className="flex flex-col items-center justify-center gap-10 py-10 z-10">
        <div className="text-[#545418]">Product Journey</div>
        {/* Title */}
        <div className="text-[#545418] font-[Tinos] text-4xl">
          Crafted with care & expertise
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 my-4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`px-4 py-2 ${
                activeStep === index
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500'
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <Carousel>
          <CarouselContent className="mx-auto">
            {steps[activeStep].description.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex basis-1/3 gap-2 bg-white flex-col items-center justify-around p-4 border rounded-lg shadow-sm"
              >
                <Image alt="" width={100} height={100} src={item.imagePath} />
                <p className="text-base max-w-3/4 text-center mt-2">{item.text}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CarousalWithHeadings;
