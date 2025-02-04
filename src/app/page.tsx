"use client"; // Ensure this is a Client Component

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-light text-secondary font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="relative text-white py-16 px-4 sm:mx-8 sm:rounded-lg text-center overflow-hidden">
        {/* Background Image (Desktop Only) */}
        <div
          className="absolute inset-0 hidden sm:block bg-cover bg-center rounded-lg h-[500px] sm:h-[700px] w-full"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        ></div>

        {/* Mobile Hero Image */}
        <div className="relative sm:hidden flex justify-center">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={700}
            height={500}
            className="w-full max-w-xs object-cover rounded-lg"
          />
        </div>

        {/* Hero Text */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Ace Your Next Technical Interview
          </h1>
          <p className="text-base sm:text-lg mb-8">
            Equip yourself with curated questions, coding challenges, and tools to
            succeed in any interview.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/dashboard"
              className="px-6 py-3 bg-white text-secondary font-semibold rounded-full shadow-md hover:bg-light transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-white rounded-full hover:bg-accent hover:text-light transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
