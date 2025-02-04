"use client";  

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar"; 

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
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased bg-light text-secondary">
        
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto mt-8 p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-[#003049] text-white text-center p-4 mt-8">
          <p>© {new Date().getFullYear()} DevPrepper. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
