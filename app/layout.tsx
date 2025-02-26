import type { Metadata } from 'next';
import { heading, body } from '@/lib/font';
import './globals.css';
import Footer from '@/components/common/footer';

export const metadata: Metadata = {
  title: 'Anjum',
  description: 'Anjum',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${heading.variable} ${body.variable} antialiased font-body`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
