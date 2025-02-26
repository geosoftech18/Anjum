import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Ribbon from '../common/ribbon';
import { Text, TextLink } from '../ui/text';

interface IProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: IProps) => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50">
        <Ribbon
          end={
            <div className="flex items-center gap-2 text-sm">
              <TextLink href="tel:+917891600000" className="!no-underline">
                +91 78916 00000
              </TextLink>
              <Text className="text-white dark:text-white">|</Text>
              <TextLink href="mailto:connect@anjumextraction.in">
                connect@anjumextraction.in
              </TextLink>
            </div>
          }
        />
        <Header />
      </header>
      <main className="pt-6">{children}</main>
    </>
  );
};

export default BaseLayout;
