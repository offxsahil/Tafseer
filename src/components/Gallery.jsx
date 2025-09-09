"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png"];

  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        My <span className="text-pink-400">Portfolio</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src}
              alt={`Portfolio ${i + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}