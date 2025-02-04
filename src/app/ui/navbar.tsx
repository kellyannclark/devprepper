"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-darkBlue text-white shadow-md p-4">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="DevPrepper Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-bold flex items-center">
            <span className="mr-1">Dev</span>
            <span className="text-[#F77F00]">Prep</span>per
          </h1>
        </div>

        {/* ✅ Desktop Navigation - Pushes Items Closer to Contact Button */}
        <nav className="hidden md:flex flex-1 justify-end space-x-6">
          <a href="/dashboard" className="hover:underline hover:text-accent transition">Questions</a>
          <a href="/dashboard/questions" className="hover:underline hover:text-accent transition">Challenges</a>
          <a href="/dashboard/progress" className="hover:underline hover:text-accent transition">Progress</a>
        </nav>

        {/* ✅ Contact Button - Aligned to Right */}
        <div className="hidden md:flex ml-4">
          <a href="/dashboard/contact" className="bg-accent text-white py-2 px-4 rounded hover:bg-primary transition">
            Contact Us
          </a>
        </div>

        {/* ✅ Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-darkBlue text-white flex flex-col items-center absolute top-full left-0 w-full shadow-lg py-4">
          <a href="/dashboard" className="py-2 px-6 w-full text-center hover:bg-primary transition">Questions</a>
          <a href="/dashboard/questions" className="py-2 px-6 w-full text-center hover:bg-primary transition">Challenges</a>
          <a href="/dashboard/progress" className="py-2 px-6 w-full text-center hover:bg-primary transition">Progress</a>
          <a href="/dashboard/contact" className="bg-accent text-white py-2 px-6 rounded hover:bg-primary transition w-full text-center">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
