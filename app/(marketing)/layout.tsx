import Footer from '@/components/common/footer';
import BaseLayout from '@/components/layout/base-layout';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: IProps) => {
  return <BaseLayout>
  {children}
  </BaseLayout>;
};

export default MarketingLayout;
