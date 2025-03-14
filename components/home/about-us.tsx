import { Button } from '@/components/ui/button';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';

const AboutUs = () => {
  return (
    <div className="bg-[url('/home/aboutus.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-start py-20">
        <div className="bg-tertiary-2 py-14 px-16 rounded-r-xl shadow-lg max-w-4xl relative bg-[url('/background/pattern-4.png')] bg-contain bg-no-repeat space-y-4">
          <Text className="text-secondary-2 dark:text-secondary-2">
            About Us
          </Text>
          <Heading
            level={2}
            className="text-secondary-2 dark:text-secondary-2 sm:text-3xl"
          >
            We craft extracts straight from our ancient literature.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
            efficitur neque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
          <Button color="green" className="mt-6">
            <div className="text-sm">Know More</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
