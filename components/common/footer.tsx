import Image from 'next/image';
import { footerData } from '@/data/footer.json';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '../ui/shadcnInput';
import ForsetPattern from '@/assets/patterns/forest';

const Footer = () => {
  return (
    <div className="flex bg-[#FFF4DF] flex-col h-full text-white">
      <ForsetPattern className="w-full h-full" />
      <div className="w-full bg-secondary-500">
        <div className="container mx-auto grid grid-cols-12 justify-start pt-10 p-20 gap-20">
          <div className="col-span-5 h-4/5 flex flex-col items-start justify-between">
            <div className="flex items-center justify-center gap-5 text-lg">
              <MapPin className="h-6 w-6" />
              <div className="flex flex-col items-start justify-start">
                <div>{footerData.contact.address.number}</div>
                <div>{footerData.contact.address.tehsil}</div>
                <div>{footerData.contact.address.state}</div>
                <div>{footerData.contact.address.pin}</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-lg gap-5">
              <Phone className="h-6 w-6" />
              {footerData.contact.phone}
            </div>
            <div className="flex items-center justify-center text-lg gap-5">
              <Mail className="h-6 w-6" />
              {footerData.contact.email}
            </div>
            <div className="flex items-center justify-start gap-4">
              {footerData.certifications.map((item, index) => (
                <Image src={item} key={index} height={44} width={44} alt="" />
              ))}
            </div>
          </div>
          <div className="col-span-7 grid grid-rows-3">
            {/* links and newsletter */}
            <div className="row-span-2 grid grid-cols-3">
              {/* Company */}
              <div className="col-span-1 flex flex-col items-start justify-start gap-5">
                <div className="text-base font-semibold">Company</div>
                {footerData.company.map((item, index) => (
                  <div className="text-sm" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              {/* Store */}
              <div className="col-span-1 flex flex-col items-start justify-start gap-5">
                <div className="text-base font-semibold">Store</div>
                {footerData.store.map((item, index) => (
                  <div className="text-sm" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              {/* newsletter */}
              <div className="col-span-1 text-base flex flex-col items-start gap-5">
                <div className="font-semibold ">Subscribe to Newsletter</div>
                <div className="flex items-center justify-between bg-white rounded-lg p-1">
                  <Input
                    placeholder="Enter mail..."
                    className="bg-white text-[#828282] p-2 border-none shadow-none"
                  ></Input>
                  <ArrowRight className="h-full w-2/12 text-white bg-[#545418] rounded-lg" />
                </div>
              </div>
            </div>
            <div className="row-span-1 flex items-center justify-around border border-white m-4 relative p-4 rounded-lg py-10">
              <div className="absolute flex items-center justify-center -top-4 left-5 rounded-full bg-white text-[#545418] text-xs p-1 px-2 w-32 font-medium">
                {footerData.availableOn.label}
              </div>
              {footerData.availableOn.items.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  height={100}
                  width={400}
                  className="h-9 w-fit"
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
