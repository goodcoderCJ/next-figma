"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Overlay from "@/components/over:Lay";

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
        <Navbar />
        <div className="flex">
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
        </div>
      </body>
    </html>
  );
}
