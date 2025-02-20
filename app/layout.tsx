import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar_footer/navbar";

export const metadata: Metadata = {
  title: "Anjum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
