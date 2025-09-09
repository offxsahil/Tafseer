"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
      document.documentElement.classList.add(localStorage.getItem("theme"));
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 dark:bg-white/20 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-white/10 dark:border-black/20 transition-colors">
      <h1 className="text-xl font-bold text-pink-400 dark:text-purple-600">
        Tafseer Anees
      </h1>

      <div className="flex items-center space-x-6">
        <Link href="#home" className="hover:text-pink-400 dark:hover:text-purple-600">
          Home
        </Link>
        <Link href="#portfolio" className="hover:text-pink-400 dark:hover:text-purple-600">
          Portfolio
        </Link>
        <Link href="#contact" className="hover:text-pink-400 dark:hover:text-purple-600">
          Contact
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 dark:bg-black/10 hover:scale-110 transition"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
    </nav>
  );
}