'use client'
import * as Headless from '@headlessui/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type TabGroupProps = {
  className?: string;
  defaultIndex?: number;
  selectedIndex?: number;
  onChange?: (index: number) => void;
  vertical?: boolean;
  children: ReactNode;
} & Omit<Headless.TabGroupProps, 'as' | 'className' | 'defaultIndex' | 'selectedIndex' | 'onChange' | 'vertical'>;

export const TabGroup = ({
  className,
  defaultIndex,
  selectedIndex,
  onChange,
  vertical = false,
  children,
  ...props
}: TabGroupProps) => {
  return (
    <Headless.TabGroup
      as="div"
      defaultIndex={defaultIndex}
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical={vertical}
      {...props}
      className={cn(
        'w-full',
        className
      )}
    >
      {children}
    </Headless.TabGroup>
  );
};

type TabListProps = {
  className?: string;
  children: ReactNode;
} & Omit<Headless.TabListProps, 'as' | 'className'>;

export const TabList = ({ className, children, ...props }: TabListProps) => {
  return (
    <Headless.TabList
      as="div"
      {...props}
      className={cn(
        'flex flex-wrap border-b border-secondary-2/20 dark:border-primary/30',
        className
      )}
    >
      {children}
    </Headless.TabList>
  );
};

type TabProps = {
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  children: ReactNode;
} & Omit<Headless.TabProps, 'as' | 'className'>;

export const Tab = ({
  className,
  activeClassName,
  inactiveClassName,
  children,
  ...props
}: TabProps) => {
  return (
    <Headless.Tab
      as="button"
      {...props}
      className={({ selected }) =>  cn(
          'relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium outline-none transition-colors',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          className,
          selected
            ? cn(
                'text-primary border-b-2 border-primary dark:text-primary dark:border-primary',
                activeClassName
              )
            : cn(
                'text-secondary-2 hover:text-primary-2 dark:text-tertiary dark:hover:text-primary',
                inactiveClassName
              ),
          
        )
      }
    >
      {children}
    </Headless.Tab>
  );
};

type TabPanelsProps = {
  className?: string;
  children: ReactNode;
} & Omit<Headless.TabPanelsProps, 'as' | 'className'>;

export const TabPanels = ({ className, children, ...props }: TabPanelsProps) => {
  return (
    <Headless.TabPanels
      as="div"
      {...props}
      className={cn(
        'mt-4',
        className
      )}
    >
      {children}
    </Headless.TabPanels>
  );
};

type TabPanelProps = {
  className?: string;
  children: ReactNode;
} & Omit<Headless.TabPanelProps, 'as' | 'className'>;

export const TabPanel = ({ className, children, ...props }: TabPanelProps) => {
  return (
    <Headless.TabPanel
      as="div"
      {...props}
      className={cn(
        'p-4',
        className
      )}
    >
      {children}
    </Headless.TabPanel>
  );
}; 