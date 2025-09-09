"use client"

import { motion } from "framer-motion"

export default function ProjectCard({ title, img, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg"
    >
      <img src={img} alt={title} className="rounded-xl mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
    </motion.div>
  )
}