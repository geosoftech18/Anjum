import { Mail } from "lucide-react";
import { Card } from "./ui/card";

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
    <div className="flex flex-col items-center justify-center gap-10 bg-bgCream p-20">
      {/* tag */}
      <div className="text-headingOlive">{FAQsData.tag}</div>
      {/* title */}
      <div className="text-headingOlive text-2xl">{FAQsData.title}</div>
      {/* FAQS */}
      <div className="grid grid-cols-3 gap-10">
        {FAQsData.items.map((item, index) => (
          <Card key={index} className="p-5 flex flex-col justify-start gap-5 border-none">
            <Mail className="bg-headingOrange p-2 rounded-full  h-8 w-8 text-white" />

            <div className="text-textCharcoal font-semibold">{item.title}</div>
            <div className="font-light">{item.text}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
