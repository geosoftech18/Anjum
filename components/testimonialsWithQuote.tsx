import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

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
  return (
    <div className="grid grid-cols-2 ">
      <div className=" flex flex-col justify-start gap-10 bg-bgCream col-span-1 p-20">
        {/* tag */}
        <div className="text-headingOlive">{TestimonialsWithQuoteData.tag}</div>
        {/* Title */}
        <div className="text-headingOlive text-2xl">{TestimonialsWithQuoteData.title}</div>
        {/* Carousal */}
        <Carousel className="shadow-2xl">
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
        </Carousel>
      </div>
      <div className="flex flex-col items-center justify-center col-span-1 gap-10  bg-headingOrange">
        <div className="text-white text-2xl w-2/4"> &quot;{TestimonialsWithQuoteData.quote}&quot;</div>
        <Button className="bg-white text-headingOrange rounded-xl">{TestimonialsWithQuoteData.button}</Button>
      </div>
    </div>
  );
};

export default TestimonialsWithQuote;
