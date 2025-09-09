"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Hero Section */}
      <section className="py-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hi, I'm{" "}
          <span className="text-pink-500 dark:text-purple-500">
            Tafseer Anees
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          A passionate <span className="font-semibold">Graphics Designer</span>{" "}
          who loves turning imagination into visual art. ✨
        </p>

        {/* Images Showcase */}
        <div
          id="portfolio"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-12"
        >
          <Image
            src="/images/png/1.png"
            alt="Design 1"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg hover:scale-105 transition"
          />
          <Image
            src="/images/png/2.png"
            alt="Design 2"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg hover:scale-105 transition"
          />
          <Image
            src="/images/png/3.png"
            alt="Design 3"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg hover:scale-105 transition"
          />
          <Image
            src="/images/png/4.png"
            alt="Design 4"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg hover:scale-105 transition"
          />
        </div>

        {/* Contact Section */}
        <div
          id="contact"
          className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
          <p className="mb-2">📸 Instagram: 
            <a
              href="https://instagram.com/taf_seer_"
              target="_blank"
              className="underline ml-1"
            >
              @taf_seer_
            </a>
          </p>
          <p>📩 Email: 
            <a
              href="mailto:tafseermalik510@gmail.com"
              className="underline ml-1"
            >
              tafseermalik510@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}