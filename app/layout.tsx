import type { Metadata } from 'next';
import { heading, body } from '@/lib/font';
import './globals.css';

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
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
