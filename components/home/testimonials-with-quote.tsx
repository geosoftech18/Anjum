import Image from 'next/image';
import { Button } from '../ui/button';
import { Carousel } from '../ui/carousel';
import TestimonialCarousalSlide from '../ui/testimonial-carousalslide';
import { CarouselSlide } from './carousel-slide';

interface TestimonialsWithQuoteProps {
  TestimonialsWithQuoteData: {
    tag: string;
    title: string;
    items: {
      imageUrl: string;
      name: string;
      text: string;
    }[];
    quote: string;
    button: string;
  };
}

const TestimonialsWithQuote: React.FC<TestimonialsWithQuoteProps> = ({
  TestimonialsWithQuoteData,
}) => {
  const slides = TestimonialsWithQuoteData.items.map((item, index) => ({
    id: `slide-${index}`,
    component: (
      <TestimonialCarousalSlide
        image={item.imageUrl || "/home/testimonial.png"}
        title={item.name || 'Default Title'} // Ensuring title is not empty
        description={item.text || 'Default Description'}
      />
    ),
  }));

  return (
    <div className="grid grid-cols-2 ">
      <div className=" flex flex-col justify-start gap-5 bg-[#FFF9EF] col-span-1 p-20">
        {/* tag */}
        <div className="text-[#545418] ">{TestimonialsWithQuoteData.tag}</div>
        {/* Title */}
        <div className="text-[#545418] text-2xl font-light font-[Tinos]">
          {TestimonialsWithQuoteData.title}
        </div>
        <Carousel className='flex items-center justify-center' slides={slides}></Carousel>
        {/* Carousal */}
        {/* <Carousel className="shadow-2xl">
          <CarouselContent className="mx-auto">
            {TestimonialsWithQuoteData.items.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex mr-5 aspect-square h-96 bg-white flex-col items-center justify-around p-4 border rounded-lg "
              > 
                <div className="text-4xl font-semibold">{item.name}</div>
                <p className="text-lg text-center mt-2">&quot;{item.text}&quot;</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-headingOlive text-white"/>
          <CarouselNext className="bg-headingOlive text-white"/>
        </Carousel> */}
      </div>
      <div className="flex flex-col items-center justify-center col-span-1 gap-10  bg-[#A54427]">
        <Image src={"/home/testimonialquoteman.png"} width={100} height={100} alt=''/>
        <div className="text-white text-3xl text-center w-2/4 font-[Tinos]">
          {' '}
          {TestimonialsWithQuoteData.quote}
        </div>
        <Button color="white" className="bg-white rounded-xl h-10 w-40">
          <div className="text-[#A54427] text-sm">
            {TestimonialsWithQuoteData.button}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsWithQuote;
