import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "./_components/Navbar";
import Footer from "./_components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manmeet Nagi | Portfolio",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        <link rel="icon" href="dark.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="light.svg" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={inter.className}>
        <FloatingNavDemo />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
