import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <div className="relative bg-[url('/home/aboutus.jpg')] h-screen bg-cover bg-center">
      {/* Overlay for readability */}
      <div className="absolute inset-0"></div>

      {/* Content Box */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col justify-start items-center rounded-xl">
        <div className="bg-[#FFF4DF] p-6 md:p-12 rounded-r-xl shadow-lg max-w-4xl relative">
          {/* Pattern Image Background */}
          <div className="absolute h-3/4 w-2/4 left-0 top-1/2 -translate-y-1/2 bg-[url('/background/aboutus-cardpattern.png')] bg-cover bg-center opacity-40"></div>

          {/* Pattern Image Background */}
          <div className="absolute bg-[url('/background/3-camels.png')] h-10 w-1/4 bg-cover bg-center bottom-0 right-1/12"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-xl md:text-xl font-[Montserrat] text-[#545418]">
              About Us
            </h2>
            <p className="mt-2 text-3xl w-4/5 font-[Tinos] text-[#545418]">
              We craft extracts straight from our ancient literature.
            </p>
            <p className="mt-4 text-gray-600 text-xs md:text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
              efficitur neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis.
            </p>
            <Button
              color="green"
              className="mt-6 p-5 w-60 text-white rounded-xl"
            >
              <div className="text-sm">Know More</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
