import Image from 'next/image';
import { Button } from '../ui/buttonShadcn';

const TopicWithPhotoandQuestion = () => {
  return (
    <div className="px-20 grid grid-cols-12 gap-20 bg-[#FFF9EF]">
      <div className="col-span-5 flex flex-col items-start gap-5 justify-center relative  py-10">
        <div className="absolute h-full w-full left-0 top-1/2 -translate-y-1/2 bg-[url('/background/TopicWithPhotoandQuestionbg.png')] bg-contain bg-no-repeat bg-center "></div>
        <div className="text-[#A54427] font-[Tinos] text-4xl">
          Purity Guaranteed
        </div>
        <div>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
        </div>
        <div className="font-semibold font-[Tinos] text-lg">Why Anjum Extractions?</div>
        <div>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
        </div>
        <Button size={'lg'} className="bg-[#B58B42] text-white rounded-xl">
          Explore Shop
        </Button>
      </div>
      <div className="col-span-7 flex items-center justify-center ">
        <Image
          src={'/home/TopicWithPhotoandQuestionarrow.png'}
          height={500}
          width={500}
          alt=""
        />
        <Image
          src={'/home/TopicWithPhotoandQuestion.png'}
          className='h-10/12'
          height={500}
          width={500}
          alt=""
        />
      </div>
    </div>
  );
};

export default TopicWithPhotoandQuestion;
