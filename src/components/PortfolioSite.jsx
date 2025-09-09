"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Loader from "./Loader"
import ConfessionIntro from "./ConfessionIntro"
import HeartReveal from "./HeartReveal"
import SpecialMessage from "./SpecialMessage"
import PhotoGallery from "./PhotoGallery"
import ContactForm from "./ContactForm"

export default function PortfolioSite() {
  const [screen, setScreen] = useState("loader")

  const handleNext = (next) => setScreen(next)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950/30 via-black/30 to-fuchsia-950/30 overflow-hidden relative">
      {/* Subtle radial backgrounds */}
      <div className="fixed inset-0 z-0 blur-xl opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 30%, rgba(236,72,153,0.7), transparent 40%)" }} />
      <div className="fixed inset-0 z-0 blur-xl opacity-10" style={{ backgroundImage: "radial-gradient(circle at 75% 75%, rgba(99,102,241,0.7), transparent 40%)" }} />
      <div className="fixed inset-0 z-0 blur-2xl opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(228,193,255,0.6), transparent 40%)" }} />

      <AnimatePresence mode="wait">
        {screen === "loader" && <Loader key="loader" onComplete={() => handleNext("intro")} />}
        {screen === "intro" && <ConfessionIntro key="intro" onComplete={() => handleNext("heart")} />}
        {screen === "heart" && <HeartReveal key="heart" onComplete={() => handleNext("message")} />}
        {screen === "message" && <SpecialMessage key="message" onComplete={() => handleNext("photos")} />}
        {screen === "photos" && <PhotoGallery key="photos" onComplete={() => handleNext("contact")} />}
        {screen === "contact" && <ContactForm key="contact" />}
      </AnimatePresence>

      {/* Branding watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed bottom-4 right-4 text-[13px] text-white/40 pointer-events-none z-50 font-light"
      >
        @offx.sahil
      </motion.div>
    </div>
  )
}