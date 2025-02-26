import { Mail } from "lucide-react";
import { Card } from "../common/card";
interface FAQsInterface {
  FAQsData: {
    tag: string;
    title: string;
    items: {
      logo: string;
      title: string;
      text: string;
    }[];
  };
}

const FAQs: React.FC<FAQsInterface> = ({ FAQsData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#FFF4DF] p-20 px-40">
      {/* tag */}
      <div className="text-[#545418]">{FAQsData.tag}</div>
      {/* title */}
      <div className="text-[#545418] font-[Tinos] text-4xl">{FAQsData.title}</div>
      {/* FAQS */}
      <div className="grid grid-cols-3 gap-10">
        {FAQsData.items.map((item, index) => (
          <Card key={index} className="p-5 flex flex-col justify-start gap-5 border-none shadow-none">
            <Mail className="bg-[#A54427] p-2 rounded-full  h-8 w-8 text-white" />

            <div className="text-[#414435] font-semibold">{item.title}</div>
            <div className="text-[#414435] font-light">{item.text}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQs;