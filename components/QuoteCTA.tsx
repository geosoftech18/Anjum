import Image from "next/image";
import { Button } from "./ui/button";

// interface QuoteCTAProps{
//     QuoteCTAData:{
//         quote:string,
//         button:string
//     } 
// }
const QuoteCTA = () => {
    return ( 
        <div className="grid grid-cols-12 mx-20 rounded-xl px-10 py-20 gap-10 bg-lightBrown">
            <Image className="col-span-2 h-full" src={"/hero.jpg"} height={1000} width={1000} alt=""/>
            <div className="col-span-10 flex flex-col items-start justify-around gap-5">
                {/* quote */}
                <div className="text-textGrayLight font-[Tinos] text-2xl">&quot;In the harmony of Ayurveda and modern science, we find the timeless wisdom of herbal extracts, where nature&apos;s ancient secrets are unveiled through the lens of innovation.&quot; </div>
                {/* button */}
                <Button size={"lg"} className="text-textGrayLight bg-buttonbgbrown rounded-xl">
                    Contact Us
                </Button>
            </div>
        </div>
     );
}
 
export default QuoteCTA;