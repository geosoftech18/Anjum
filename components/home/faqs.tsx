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
    <section className="w-full bg-tertiary-2">
      <div className="flex flex-col items-center justify-center container mx-auto p-20 px-40 gap-14">
        <div className="flex flex-col items-center justify-center gap-4">
          <Text className="!text-secondary-2 dark:!text-secondary-2">
            {FAQsData.tag}
          </Text>
          <Heading
            level={2}
            className="!text-secondary-2 dark:!text-secondary-2 sm:!text-4xl"
          >
            {FAQsData.title}
          </Heading>
        </div>
        {/* FAQS */}
        <div className="grid grid-cols-3 gap-10">
          {FAQsData.items.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col justify-start gap-5 border-none shadow-none"
            >
              <Mail className="bg-[#A54427] p-2 rounded-full  h-9 w-9 text-white" />
              <div className="flex flex-col justify-start gap-1">
                <Text className="text-secondary-2 dark:!text-secondary-2 font-semibold">
                  {item.title}
                </Text>
                <Text className="sm:!text-xs text-secondary-2 dark:!text-secondary-2">
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
