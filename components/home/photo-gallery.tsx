import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Text } from '../ui/text';
import { Heading } from '../ui/heading';

const PhotoGallery: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white bg-primary-500 gap-10 p-20 pt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <Text className="text-white dark:text-white">Memorable moments</Text>
        <Heading level={2} className="sm:!text-4xl">
          Our team, our Journey
        </Heading>
      </div>
      {/* logo with social media links */}
      <div className="grid grid-cols-3 gap-5">
        <Facebook className="h-8 w-8" />
        <Instagram className="h-8 w-8" />
        <Twitter className="h-8 w-8" />
      </div>
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <Image
            className="aspect-[3/4] object-cover rounded-xl"
            key={index}
            src={'/home/hero.webp'}
            width={1000}
            height={1000}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
