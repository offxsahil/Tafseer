"use client"; // <- ADD THIS AT THE TOP

import "./globals.css";
import { useEffect } from "react";

export const metadata = {
  title: "A Special Confession",
  description:
    "This website was made with love to express something truly special. Dive in and feel every moment made just for you 💖",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    // Simple promo effect: fade in the content
    const body = document.body;
    body.style.opacity = 0;
    body.style.transition = "opacity 1.2s ease-in-out";
    requestAnimationFrame(() => {
      body.style.opacity = 1;
    });
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative antialiased bg-[var(--background)] text-[var(--foreground)] font-sans overflow-x-hidden">
        {/* Background animation: floating hearts */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute w-full h-full">
            {[...Array(15)].map((_, i) => (
              <span
                key={i}
                className="absolute w-6 h-6 bg-pink-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main site content */}
        {children}

        {/* Optional: subtle bottom sparkle */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-30 animate-pulse rounded-full" />
      </body>
    </html>
  );
}