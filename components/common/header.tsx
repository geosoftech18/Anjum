import Image from 'next/image';
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from '@/components/ui/dropdown';
import { Link } from '@/components/ui/link';
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import { Text, TextLink } from '../ui/text';

const Header = () => {
  return (
    <nav className="w-full">
      <div className="container bg-white mx-auto rounded-b-4xl shadow-lg px-14 py-1">
        <div className="flex items-center justify-between gap-4">
          {/* start - Navigation Menu */}
          <div className="flex items-center gap-10">
            <Dropdown>
              <DropdownButton
                plain
                className="flex items-center gap-1 data-[active]:border-b border-0 rounded-none border-solid border-secondary-2 dark:!border-secondary-2 !px-0 sm:!px-0"
              >
                <Text className="text-secondary-2 dark:text-secondary-2 font-normal">
                  Shop
                </Text>
                <ChevronDownIcon className="h-5 w-5 text-secondary-2 dark:text-secondary-2" />
              </DropdownButton>
              <DropdownMenu>
                <DropdownItem href="/">Home</DropdownItem>
                <DropdownItem href="/products">Products</DropdownItem>
                <DropdownItem href="/about">About</DropdownItem>
                <DropdownItem href="/contact">Contact</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownButton
                plain
                className="flex items-center gap-1 data-[active]:border-b border-0 rounded-none border-solid border-secondary-2 dark:!border-secondary-2 !px-0 sm:!px-0"
              >
                <Text className="text-secondary-2 dark:text-secondary-2 font-normal">
                  About us
                </Text>
                <ChevronDownIcon className="h-5 w-5 text-secondary-2 dark:text-secondary-2" />
              </DropdownButton>
              <DropdownMenu>
                <DropdownItem href="/">Home</DropdownItem>
                <DropdownItem href="/products">Products</DropdownItem>
                <DropdownItem href="/about">About</DropdownItem>
                <DropdownItem href="/contact">Contact</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <TextLink
              href="/contact-us"
              className="!text-secondary-2 dark:!text-secondary-2"
            >
              Contact us
            </TextLink>
          </div>

          {/* center - Logo */}
          <div className="flex justify-center">
            <Link href="/" aria-label="Home">
              <Image
                src="/brand-assets/logo.png"
                alt="Anjum Logo"
                width={96}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* end - Search */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search here..."
                className="rounded-l-lg rounded-r-none overflow-hidden"
                aria-label="Search"
              />
              <Button
                color="green"
                aria-label="Search"
                className="rounded-l-none after:rounded-l-none dark:after:rounded-l-none before:rounded-l-none dark:before:rounded-l-none px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </Button>
            </div>
            <Button plain aria-label="Search">
              <ShoppingCartIcon className="h-5 w-5 !text-secondary-700 dark:!text-secondary-700" />
            </Button>
            <Button plain aria-label="Search">
              <UserIcon className="h-5 w-5 !text-secondary-700 dark:!text-secondary-700" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
