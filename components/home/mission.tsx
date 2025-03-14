import React from 'react';
import { Text } from '../ui/text';
import { Heading } from '../ui/heading';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '../ui/tabs';
import Image from 'next/image';
import { Button } from '../ui/button';

export const Mission = () => {
  return (
    <section className="w-full bg-tertiary-2 bg-[url('/background/pattern-7.svg')] bg-contain bg-no-repeat bg-right-bottom">
      <div className='container py-20'>
        <div className='space-y-12'>
          <div className='space-y-3'>
            <Text className='text-secondary-2 dark:text-secondary-2'>Why us?</Text>
            <Heading className='text-secondary-2 dark:text-secondary-2 sm:text-4xl'>From Manufacturing to Branding</Heading>
          </div>
            <TabGroup defaultIndex={0}>
              <TabList className="flex justify-start flex-wrap gap-2 mb-8 border-0">
                <Tab className="bg-secondary-2 text-tertiary rounded-full py-2.5 px-6 hover:bg-secondary hover:text-white" activeClassName="bg-secondary text-white dark:text-white" inactiveClassName="bg-secondary-2 text-tertiary hover:bg-secondary">
                  Private Labelling
                </Tab>
                <Tab className="bg-secondary-2 text-tertiary rounded-full py-2.5 px-6 hover:bg-secondary hover:text-white" activeClassName="bg-gold text-white dark:text-white" inactiveClassName="bg-secondary-2 text-tertiary hover:bg-secondary">
                  Custom Formulations
                </Tab>
                <Tab className="bg-secondary-2 text-tertiary rounded-full py-2.5 px-6 hover:bg-secondary hover:text-white" activeClassName="bg-gold text-white dark:text-white" inactiveClassName="bg-secondary-2 text-tertiary hover:bg-secondary">
                  GMP Certified
                </Tab>
                <Tab className="bg-secondary-2 text-tertiary rounded-full py-2.5 px-6 hover:bg-secondary hover:text-white" activeClassName="bg-gold text-white dark:text-white" inactiveClassName="bg-secondary-2 text-tertiary hover:bg-secondary">
                  QC Testing
                </Tab>
              </TabList>
              
              <TabPanels>
                <TabPanel className="flex flex-col md:flex-row gap-16 items-center">
                  <div className="w-full max-w-lg">
                    <Image 
                      src="/home/mission/mission.jpg"
                      alt="Private Labelling" 
                      width={500} 
                      height={500}
                      className="rounded-md object-cover w-full h-auto aspect-square"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-6">
                    <Heading level={3} className="text-secondary-2 dark:text-secondary-2 sm:text-3xl">Our products your label</Heading>
                    <div>
                    <Text>
                      Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                    </Text>
                    <Text>
                      Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </Text>
                    </div>
                    <Button color='green' className='sm:text-lg sm:!py-2 sm:!px-9'>
                        Know more
                    </Button>
                  </div>
                </TabPanel>
                
                <TabPanel className="flex flex-col md:flex-row gap-16 items-start">
                  <div className="w-full max-w-lg">
                    <Image 
                      src="/home/mission/mission.jpg"
                      alt="Custom Formulations" 
                      width={500} 
                      height={500}
                      className="rounded-md object-cover w-full h-auto aspect-square"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <Heading level={3} className="text-secondary-2 text-2xl">Custom Formulations</Heading>
                    <Text >
                      Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                    </Text>
                    <Text >
                      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                    </Text>
                    <div className="pt-4">
                      <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-secondary-2 text-tertiary rounded-full hover:bg-secondary transition-colors">
                        Know more
                      </a>
                    </div>
                  </div>
                </TabPanel>
                
                <TabPanel className="flex flex-col md:flex-row gap-16 items-start">
                  <div className="w-full max-w-lg">
                    <Image 
                      src="/home/mission/mission.jpg"
                      alt="GMP Certified" 
                      width={500} 
                      height={500}
                      className="rounded-md object-cover w-full h-auto aspect-square"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <Heading level={3} className="text-secondary-2 text-2xl">GMP Certified</Heading>
                    <Text >
                      Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. 
                    </Text>
                    <Text >
                      Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
                    </Text>
                    <div className="pt-4">
                      <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-secondary-2 text-tertiary rounded-full hover:bg-secondary transition-colors">
                        Know more
                      </a>
                    </div>
                  </div>
                </TabPanel>
                
                <TabPanel className="flex flex-col md:flex-row gap-16 items-start">
                  <div className="w-full max-w-lg">
                    <Image 
                      src="/home/mission/mission.jpg"
                      alt="QC Testing" 
                      width={500} 
                      height={500}
                      className="rounded-md object-cover w-full h-auto aspect-square"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <Heading level={3} className="text-secondary-2 text-2xl">QC Testing</Heading>
                    <Text >
                      Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                    </Text>
                    <Text >
                      Risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                    </Text>
                    <div className="pt-4">
                      <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-secondary-2 text-tertiary rounded-full hover:bg-secondary transition-colors">
                        Know more
                      </a>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
        </div>
      </div>
    </section>
  );
};
