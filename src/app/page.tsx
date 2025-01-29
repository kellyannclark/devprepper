import Image from "next/image";

export default function Home() {
  return (
      <div className="min-h-screen bg-light text-secondary font-[family-name:var(--font-geist-sans)]">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-4 sm:mx-8 sm:rounded-lg text-center relative mr-8">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    ></div>
    <div className="relative">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Ace Your Next Technical Interview
      </h1>
      <p className="text-base sm:text-lg mb-8">
        Equip yourself with curated questions, coding challenges, and tools to
        succeed in any interview.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/dashboard"
          className="px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-md hover:bg-light transition"
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


      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-8 md:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Features
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <Image
              src="/images/question-bank.png"
              alt="Question Bank"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-primary">
              Curated Question Bank
            </h3>
            <p className="text-sm sm:text-base text-secondary">
              Access categorized questions for behavioral and technical
              interviews.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/coding-challenges.png"
              alt="Coding Challenges"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-primary">
              Coding Challenges
            </h3>
            <p className="text-sm sm:text-base text-secondary">
              Solve real-world problems with interactive practice tools.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/progress.png"
              alt="Progress Tracker"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-primary">
              Progress Tracker
            </h3>
            <p className="text-sm sm:text-base text-secondary">
              Visualize your preparation journey with detailed analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-light py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-secondary">
          Start Your Journey Today
        </h2>
        <p className="text-sm sm:text-base text-secondary mb-10">
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
