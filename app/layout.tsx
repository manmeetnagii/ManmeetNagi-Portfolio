"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "./_components/Navbar";
import Footer from "./_components/Footer";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (bodyClass.contains('dark-theme')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  return (

    <html lang="en">
      <head>
        <title>Manmeet Nagi | Portfolio</title>
        <link rel="icon" href="dark.svg" />
        {theme === 'dark' && <link rel="icon" href="light.svg" />}
      </head>
      <body className={inter.className}>
        <FloatingNavDemo />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
