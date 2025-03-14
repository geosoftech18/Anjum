import { Montserrat, Tinos } from 'next/font/google';

export const heading = Tinos({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
});

export const body = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});
