"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white"
    >
      {/* Floating BG animation */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[url('/images/bg-pattern.png')] opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
      >
        Hi, I’m Tafseer Anees 👋
      </motion.h1>

      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
        A passionate <span className="text-pink-400">Graphics Designer</span>, bringing ideas to life with creativity & modern design.
      </p>
    </section>
  );
}