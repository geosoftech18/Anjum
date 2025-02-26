import { useState } from 'react';
import { Button } from '../ui/buttonShadcn';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousalShadcn';
import Image from 'next/image';

interface OpenRightCarousalComponentProps {
  OpenRightCarousalComponentData: {
    tag: string;
    title: string;
    items: {
      imagePath: string;
      title: string;
      description: string;
    }[];
    button1: string;
    button2: string;
  };
}

const OpenRightCarousalComponent: React.FC<OpenRightCarousalComponentProps> = ({
  OpenRightCarousalComponentData,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-20  bg-[#FFF9EF]">
      {/* tag */}
      <div className="text-[#545418] ">
        {OpenRightCarousalComponentData.tag}
      </div>
      {/* title */}
      <div className=" text-[#545418] font-[Tinos] text-4xl">
        {OpenRightCarousalComponentData.title}
      </div>
      {/* Carousal */}
      <Carousel>
        <CarouselContent className="mx-auto ">
          {OpenRightCarousalComponentData.items.map((item, index) => (
            <div className="p-1 flex items-center justify-center">
              <CarouselItem className='flex' key={index}>
                <Image src={item.imagePath} alt="" height={500} width={500} />
                <div className="flex basis-1/4  flex-col items-center justify-around p-4 border rounded-lg shadow-sm">
                  <div className="text-4xl ">{item.title}</div>
                  <p className="text-lg text-center mt-2">{item.description}</p>
                </div>
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
      </Carousel>
      {/* buttons */}
      <div className="flex items-center justify-center gap-10">
        <Button className="bg-[#545418] text-white rounded-xl" size={'lg'}>
          {OpenRightCarousalComponentData.button1}
        </Button>
        <Button
          className="border border-lightOlive text-lightOlive rounded-xl"
          size={'lg'}
        >
          {OpenRightCarousalComponentData.button2}
        </Button>
        {/* <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
      </div>
    </div>
  );
};

export default OpenRightCarousalComponent;
