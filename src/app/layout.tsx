"use client";  // ✅ Make this a client component

import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { useState } from "react";  // ✅ Now `useState` works
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
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Now it works

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light text-secondary`}>
        {/* Header */}
        <header className="bg-[#003049] text-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="DevPrepper Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h1 className="text-xl font-bold">
                Dev<span className="text-[#F77F00]">Prep</span>per
              </h1>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
              className="sm:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-8 h-8" // ⬅️ Increased size for better visibility
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>


            {/* Navigation */}
            <nav
              className={`absolute sm:static top-16 left-0 w-full bg-[#003049] sm:bg-transparent sm:flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 px-6 sm:px-0 py-4 sm:py-0 transition-all ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <a href="/dashboard" className="hover:underline hover:text-accent transition block sm:inline">Questions</a>
              <a href="/dashboard/questions" className="hover:underline hover:text-accent transition block sm:inline">Challenges</a>
              <a href="/dashboard/progress" className="hover:underline hover:text-accent transition block sm:inline">Progress</a>
              <a href="/contact" className="bg-accent text-white py-2 px-4 rounded text-center sm:text-left hover:bg-primary transition block sm:inline">Contact Us</a>
            </nav>
          </div>
        </header>

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
