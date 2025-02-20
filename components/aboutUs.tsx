import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="relative aspect-video bg-[url('/hero.jpg')] bg-cover bg-center">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Box */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col justify-start items-center rounded-xl">
        <div className="bg-bgCream p-6 md:p-12 rounded-r-xl shadow-lg max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-headingOlive">
            About Us
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            We craft extracts straight from our ancient literature.
          </p>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed line-clamp-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <Button className="mt-6 px-6 py-3  bg-headingOlive text-white rounded-xl">
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
