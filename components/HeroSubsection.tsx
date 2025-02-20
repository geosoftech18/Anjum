import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface HeroSubsectionProps {
  HeroSubsectionData: {
    tag: string;
    title: string;
    subtitle: string;
    rightPoints: { point: string }[];
    image: {
      logoPath: string;
      title: string;
      subtitle: string;
    };
    bottomPoints: {
      tag: string;
      points: { number: string; text: string }[];
    };
  };
}

const HeroSubsection: React.FC<HeroSubsectionProps> = ({
  HeroSubsectionData,
}) => {
  return (
    <div className="px-20 py-10 bg-[#FAF5E4]">
      {/* Top section: Image and content */}
      <div className="grid grid-cols-12 items-center gap-16">
        {/* Image section with overlay card */}
        <div className="relative col-span-5">
          <Image
            alt="Hero"
            height={500}
            width={1000}
            src="/heroSubsection.jpg"
            className="h-[50vh] w-full object-cover rounded-lg shadow-lg"
          />
          {/* Floating Info Card */}
          <div className="absolute top-1/2  right-0 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 w-[260px]">
            <div className="flex items-center gap-2">
              {/* <Image
                alt="Logo"
                src={HeroSubsectionData.image.logoPath}
                width={24}
                height={24}
              /> */}
              <h3 className="text-lg font-semibold text-green-700">
                {HeroSubsectionData.image.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {HeroSubsectionData.image.subtitle}
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="col-span-7">
          <h3 className="text-sm font-semibold text-green-700">
            {HeroSubsectionData.tag}
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            {HeroSubsectionData.title}
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            {HeroSubsectionData.subtitle}
          </p>
          {/* Bullet Points */}
          <div className="mt-6 space-y-3">
            {HeroSubsectionData.rightPoints.map((item, index) => (
              <div className="flex items-center gap-3" key={index}>
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{item.point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Key Numbers */}
      <div className="flex items-center justify-between mt-12">
        <h3 className=" text-2xl font-semibold w-1/4 h-16 text-green-700 p-4 border-l-4 border-green-700">
          {HeroSubsectionData.bottomPoints.tag}
        </h3>
        <div className="grid grid-cols-3 gap-8 mt-4 w-3/4">
          {HeroSubsectionData.bottomPoints.points.map((item, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl font-bold text-green-700">{item.number}</h4>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSubsection;
