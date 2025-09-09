"use client"

import { motion } from "motion/react"
import { Sparkles, Code, PenTool } from "lucide-react"

export default function ConfessionIntro({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-8"
    >
      <div className="w-full max-w-3xl">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            
            {/* Animated Icons */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative flex items-center justify-center gap-6"
            >
              <Code className="w-12 h-12 text-blue-400" />
              <PenTool className="w-12 h-12 text-pink-400" />
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </motion.div>

            {/* Intro Text */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Welcome to Tafseer Anees Portfolio
              </h2>

              <motion.p
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-base md:text-lg text-pink-200 leading-relaxed"
              >
                Developer • Graphics Designer • Visual Storyteller  
                Crafting visuals & code that connect people and ideas.
              </motion.p>
            </div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 md:px-12 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Show My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}