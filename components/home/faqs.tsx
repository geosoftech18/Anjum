import { Mail } from 'lucide-react';
import { Card } from '../common/card';
import { Text } from '../ui/text';
import { Heading } from '../ui/heading';
import RedForest from '@/assets/patterns/red-forest';
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
    <section className="w-full bg-background-200">
      <div className="flex flex-col items-center justify-center container mx-auto p-20 px-40 gap-14">
        <div className="flex flex-col items-center justify-center gap-4">
          <Text className="!text-secondary-500 dark:!text-secondary-500">
            {FAQsData.tag}
          </Text>
          <Heading
            level={2}
            className="!text-secondary-500 dark:!text-secondary-500 sm:!text-4xl"
          >
            {FAQsData.title}
          </Heading>
        </div>
        {/* FAQS */}
        <div className="grid grid-cols-3 gap-10">
          {FAQsData.items.map((item, index) => (
            <Card
              key={index}
              className="p-5 flex flex-col justify-start gap-5 border-none shadow-none"
            >
              <Mail className="bg-[#A54427] p-2 rounded-full  h-8 w-8 text-white" />
              <div className="flex flex-col justify-start gap-1">
                <Text className="text-secondary-500 dark:!text-secondary-500 font-semibold">
                  {item.title}
                </Text>
                <Text className="sm:!text-sm text-secondary-500 dark:!text-secondary-500">
                  {item.text}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <RedForest />
    </section>
  );
};

export default FAQs;
