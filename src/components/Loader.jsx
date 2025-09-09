"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Heart, Sparkles } from "lucide-react"

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 800)
          return 100
        }
        return prev + 1.5
      })
    }, 50)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-8 bg-gradient-to-br from-pink-950/35 via-black/40 to-fuchsia-950/35"
    >
      <div className="text-center max-w-md w-full">
        {/* Animated Heart */}
        <div className="relative mb-12">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto"
          >
            <Heart className="w-24 h-24 text-pink-400 fill-current drop-shadow-2xl" />
          </motion.div>

          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
              className="absolute inset-0"
              style={{ transformOrigin: "center" }}
            >
              <Sparkles
                className="w-3 h-3 text-yellow-300 absolute"
                style={{
                  left: `${50 + 35 * Math.cos((i * 90 * Math.PI) / 180)}%`,
                  top: `${50 + 35 * Math.sin((i * 90 * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Tafseer Anees Portfolio
          </h1>
          <p className="text-pink-200 text-lg tracking-wide">
            Creative Graphics & Branding Designer loading… <span className="text-pink-100">✨</span>
          </p>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/20">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
              </motion.div>
            </div>
            <p className="text-pink-300 text-lg font-medium tracking-wider mt-2">
              {Math.round(progress)}%
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}