import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componts/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maruti Petroleum - Premium Indian Oil Services",
  description: "Maruti Petroleum - Your trusted partner for high-quality petrol and diesel. 24×7 service with modern infrastructure and transparent operations across Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${inter.variable} antialiased bg-white`}
      > 
        <div className="relative w-full flex items-center justify-center bg-white">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
