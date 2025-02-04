"use client";  

import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar"; 

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700", "700"], 
});


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${oswald.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased bg-background text-secondary">

        
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
