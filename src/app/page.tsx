"use client";

import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-light text-secondary font-sans">
      {/* Hero Section - Mobile First */}
      <header className="relative py-2 px-4 text-center overflow-hidden">
        {/* Opaque Overlay (Covers Mobile & Desktop) */}
        <div className="absolute inset-0 bg-white opacity-50 z-10"></div>

        {/* Background Image for Desktop (Hidden in Mobile) */}
        <div
          className="absolute inset-0 hidden sm:block w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        ></div>

        {/* Mobile Hero Image (Visible in Mobile) */}
        <div className="relative sm:hidden flex justify-center w-full">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={800}
            height={400}
            className="w-full max-h-[300px] object-cover rounded-lg"
          />
        </div>

        {/* Hero Text (Ensures it appears above overlay) */}
        <div className="relative z-20 max-w-3xl mx-auto text-center text-[#003049]">
        <h1 className="text-5xl sm:text-5xl py-4 mb-4 font-heading font-extrabold">
          <span className="text-[#003049] text-5xl sm:text-5xl">Master</span> Your Next Technical Interview
        </h1>


        <p className="text-lg sm:text-xl mb-6">

            Get ahead with curated questions, coding challenges, and expert strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/dashboard"
              className="px-6 py-3 bg-secondary text-white font-semibold rounded-full shadow-md hover:bg-light transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-[#003049] bg-white rounded-full hover:bg-accent hover:text-light transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 px-4 sm:px-8 md:px-20 bg-background">
        <h2 className="text-4xl text-[#003049] sm:text-3xl text-center mb-10 font-heading font-bold">
          Features
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 - Curated Question Bank */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition duration-300">
            <Image
              src="/images/question-bank.png"
              alt="Question Bank"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl sm:text-xl font-semibold text-foreground">
              Curated Question Bank
            </h3>
            <p className="text-md sm:text-base text-secondary">
              Access categorized questions for behavioral and technical interviews.
            </p>
          </div>

          {/* Feature Card 2 - Coding Challenges */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition duration-300">
            <Image
              src="/images/coding-challenges.png"
              alt="Coding Challenges"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl sm:text-xl font-semibold text-foreground">
              Coding Challenges
            </h3>
            <p className="text-md sm:text-base text-secondary">
              Solve real-world problems with interactive practice tools.
            </p>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="bg-light py-12 px-4 text-center">
        <h2 className="text-4xl sm:text-3xl mb-6 text-[#003049] font-heading font-bold">
          Start Your Journey Today
        </h2>
        <p className="text-m sm:text-base text-foreground mb-6">
          Join thousands of developers honing their skills with DevPrepper.
        </p>
        <a
          href="/dashboard"
          className="px-6 py-3 sm:px-8 sm:py-4 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-secondary transition"
        >
          Sign Up for Free
        </a>
      </section>
    </div>
  );
}
