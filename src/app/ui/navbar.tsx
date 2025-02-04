"use client"; // ✅ Only the Navbar needs to be a client component

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#003049] text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image src="/images/logo.png" alt="DevPrepper Logo" width={30} height={30} />
          <h1 className="text-xl font-bold">
            Dev<span className="text-[#F77F00]">Prep</span>per
          </h1>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`sm:flex ${menuOpen ? "block" : "hidden"} space-x-6`}>
          <a href="/dashboard" className="hover:underline hover:text-accent transition">Questions</a>
          <a href="/dashboard/questions" className="hover:underline hover:text-accent transition">Challenges</a>
          <a href="/dashboard/progress" className="hover:underline hover:text-accent transition">Progress</a>
          <a href="/contact" className="bg-accent text-white py-2 px-4 rounded hover:bg-secondary transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
