import Image from "next/image";
import { Button } from "./ui/button";

const TopicWithPhotoandQuestion = () => {
  return (
    <div className="mx-20 grid grid-cols-12 gap-20">
      <div className="col-span-5 flex flex-col items-start gap-10 justify-between">
        <div className="text-headingOrange font-[Tinos] text-3xl">
          Purity Guaranteed
        </div>
        <div>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
        </div>
        <div className="font-semibold">Why Anjum Extractions?</div>
        <div>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.Morem ipsum dolor sit amet, consectetur adipiscing eli.
        </div>
        <Button size={"lg"} className="bg-buttonbgbrown text-white rounded-xl">
          Explore Shop
        </Button>
      </div>
      <Image className="col-span-7 h-full" src={"/hero.jpg"} height={1000} width={1000} alt="" />
    </div>
  );
};

export default TopicWithPhotoandQuestion;
