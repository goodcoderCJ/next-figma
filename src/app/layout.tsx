"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Overlay from "@/components/over:Lay";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar =()=>{
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex py-[1.5em] flex-1">
          {/* Sidebar toggled with the state */}
          {isSidebarOpen && <Sidebar />}
          <div className="p-4 flex-1">
            {/* Hamburger menu */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-2xl p-2 rounded-md focus:outline-none"
            >
              <RxHamburgerMenu />
            </button>
            {children}
          </div>
          {isSidebarOpen && <Overlay toggleSidebar={ toggleSidebar} />}
        </main>
        <footer className="px-[1em] sm:px-[2em] shadow-lg flex justify-between">
          <Image width={40} height={40} alt="logo" src="/3c-logo.png" />
          <p>Worked by CJay</p>
        </footer>
        </div>
        
      </body>
    </html>
  );
}
