import HeroSubsection from "@/components/HeroSubsection";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import HeroSubsectionJSON from "@/data/homepage/herosubsection.json";
import CardsWithQuote from "@/components/CardsWithQuote";

import CardsWithQuoteJSON from "@/data/homepage/CardsWithQuote.json";
import QuoteCTA from "@/components/QuoteCTA";
import TopicWithPhotoandQuestion from "@/components/TopicWithPhotoandQuestion";
import CarousalComponent from "@/components/CarousalComponent";

import OpenRightCarousalComponent from "@/components/OpenRightCarousalComponent";
import OpenRightCarousalComponentJSON from "@/data/homepage/OpenRightCarousalComponent.json";

import AboutUs from "@/components/aboutUs";

import TestimonialsWithQuote from "@/components/testimonialsWithQuote";
import TestimonialsWithQuoteJSON from "@/data/homepage/TestimonialsWithQuote.json";

import FAQs from "@/components/FAQs";
import FAQsJSON from "@/data/homepage/FAQs.json";

import PhotoGallery from "@/components/photoGallery";
import PhotoGalleryJSON from "@/data/homepage/PhotoGallery.json";

export default function Home() {
  const HeroSubsectionData = HeroSubsectionJSON.HeroSubsectionData;
  const CardsWithQuoteData = CardsWithQuoteJSON.CardsWithQuoteData;
  const OpenRightCarousalComponentData =
    OpenRightCarousalComponentJSON.OpenRightCarousalComponentData;
  const TestimonialsWithQuoteData =
    TestimonialsWithQuoteJSON.TestimonialsWithQuoteData;

  const FAQsData = FAQsJSON.FAQsData;

  const PhotoGalleryData = PhotoGalleryJSON.PhotoGalleryData;

  return (
    <>
      {/* absolute  */}
      <div className="top-10 ">
        <div className="bg-[url('/hero.jpg')] bg-cover bg-center h-[90vh]  px-10">
          <div className=" flex items-start justify-center flex-col h-full w-2/4 gap-10 ">
            <div className="text-5xl headingfontclass  text-white">
              Sourcing Premium Botanical Extracts, for over 25 Years
            </div>
            <div className="subheadingfontclass  text-white">
              Blending ancient wisdom with modern solutions & delivering
              high-quality products for enhanced well-being. Explore our 300
              unique herbal extracts and formulations.
            </div>
            <div className=" flex items-center justify-center gap-10">
              <Button className="bg-white text-black rounded-xl" size={"lg"}>
                Explore Extracts
              </Button>
              <Button
                className="bg-transparent border border-white rounded-xl"
                size={"lg"}
              >
                Request a quote
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-headingOlive flex items-center justify-around border border-b-8 border-buttonbgbrown">
          <div className="p-5 text-white">
            <div className="text-xl font-semibold">We are Certified!</div>
            <div className="flex items-center justify-center gap-5">
              Understand value of each certification{" "}
              <Link className="underline underline-offset-2 flex items-center justify-center" href={"/"}>
                <div>Know More</div>
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
      <div className="h-20"></div>
      <HeroSubsection HeroSubsectionData={HeroSubsectionData} />
      <div className="h-20"></div>
      <CardsWithQuote CardsWithQuoteData={CardsWithQuoteData} />
      <div className="h-20"></div>
      <QuoteCTA />
      <div className="h-20"></div>
      <TopicWithPhotoandQuestion />
      <div className="h-20"></div>
      <CarousalComponent />
      <div className="h-20"></div>
      <OpenRightCarousalComponent
        OpenRightCarousalComponentData={OpenRightCarousalComponentData}
      />
      <div className="h-20"></div>
      <AboutUs />
      <div className="h-20"></div>
      <TestimonialsWithQuote
        TestimonialsWithQuoteData={TestimonialsWithQuoteData}
      />
      <FAQs FAQsData={FAQsData} />

      <PhotoGallery PhotoGalleryData={PhotoGalleryData} />
    </>
  );
}
