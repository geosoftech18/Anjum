import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

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
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-20">
      {/* tag */}
      <div className="text-headingOlive">
        {OpenRightCarousalComponentData.tag}
      </div>
      {/* title */}
      <div className=" text-headingOlive font-[Tinos] text-4xl">
        {OpenRightCarousalComponentData.title}
      </div>
      {/* Carousal */}
      <Carousel>
        <CarouselContent className="mx-auto">
          {OpenRightCarousalComponentData.items.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex basis-1/4 mr-5 aspect-square flex-col items-center justify-around p-4 border rounded-lg shadow-sm"
            >
              <div className="text-4xl ">{item.title}</div>
              <p className="text-lg text-center mt-2">{item.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* buttons */}
      <div className="flex items-center justify-center gap-10">
        <Button className="bg-headingOlive text-white rounded-xl" size={"lg"}>
          {OpenRightCarousalComponentData.button1}
        </Button>
        <Button
          className="border border-lightOlive text-lightOlive rounded-xl"
          size={"lg"}
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
