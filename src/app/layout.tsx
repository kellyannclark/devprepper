import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO and branding
export const metadata: Metadata = {
  title: "DevPrepper: Interview Prep App",
  description:
    "An app designed to help job seekers ace their interviews with curated questions, coding challenges, and progress tracking.",
};

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light text-secondary`}
      >
        {/* Updated Header */}
        <header className="bg-secondary text-white shadow-md p-4">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-xl font-bold mb-4 sm:mb-0">DevPrepper</h1>
            <nav className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <a
                href="/dashboard"
                className="hover:underline hover:text-accent transition"
              >
                Questions
              </a>
              <a
                href="/dashboard/questions"
                className="hover:underline hover:text-accent transition"
              >
                Challenges
              </a>
              <a
                href="/dashboard/progress"
                className="hover:underline hover:text-accent transition"
              >
                Progress
              </a>
              <a
                href="/dashboard/progress"
                className="bg-accent text-white py-2 px-4 rounded text-center sm:text-left hover:bg-primary transition"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto mt-8 p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-secondary text-white text-center p-4 mt-8">
          <p>© {new Date().getFullYear()} DevPrepper. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
