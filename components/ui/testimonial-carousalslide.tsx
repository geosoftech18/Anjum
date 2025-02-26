import Image from 'next/image';

interface TestimonialCarousalSlideProps {
  image: string;
  title: string;
  description: string;
}

const TestimonialCarousalSlide: React.FC<TestimonialCarousalSlideProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex mr-5 h-64 aspect-[4/3] bg-white flex-col items-center justify-center gap-5 p-4 rounded-xl ">
      <div className="text-xl font-semibold flex gap-2 items-center justify-start">
        <Image
          src={image || '/home/testimonial.png'}
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
        {title}
      </div>
      <div className="text-base text-justify px-5 relative py-5">
        <div className="text-2xl font-bold text-[#545418] font-[Tinos] absolute left-0 top-0 ">“</div>
        {description}
        <div className="text-2xl font-bold text-[#545418] font-[Tinos] absolute right-0 bottom-0">”</div>
      </div>
    </div>
  );
};

export default TestimonialCarousalSlide;
