import { Facebook } from "lucide-react";
import Image from "next/image";

interface PhotoGalleryProps{
    PhotoGalleryData:{
        tag:string,
        title:string,
        logoWithLinks:{
            logo:string,
            link:string
        }[],
        photos:{
            imageUrl:string
        }[]
    }
}

const PhotoGallery:React.FC<PhotoGalleryProps> = ({
    PhotoGalleryData
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-headingOrange text-white gap-10 p-20">
      {/* tag */}
      <div>{PhotoGalleryData.tag}</div>
      {/* title */}
      <div className="text-2xl ">{PhotoGalleryData.title}</div>
      {/* logo with social media links */}
      <div className="grid grid-cols-3 gap-5">
        {PhotoGalleryData.logoWithLinks.map((item,index)=>(
            <div key={index}>
                <Facebook className="h-5 w-5"/>
            </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-10">
        {PhotoGalleryData.photos.map((item,index)=>(
            <Image className="aspect-[3/4] object-cover rounded-xl" key={index} src={item.imageUrl} width={1000} height={1000} alt=""/>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
