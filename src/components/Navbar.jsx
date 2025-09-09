"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Tafseer
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-pink-400 transition">Home</Link>
          <Link href="/about" className="hover:text-pink-400 transition">About</Link>
          <Link href="/portfolio" className="hover:text-pink-400 transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-pink-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-pink-400 transition">Home</Link>
          <Link href="/about" className="block hover:text-pink-400 transition">About</Link>
          <Link href="/portfolio" className="block hover:text-pink-400 transition">Portfolio</Link>
          <Link href="/contact" className="block hover:text-pink-400 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}