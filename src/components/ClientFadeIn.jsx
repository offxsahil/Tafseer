"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Heart } from "lucide-react"

export default function HeartReveal({ onComplete }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Normally, here you’d integrate EmailJS, Netlify, or another service
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-8 bg-gradient-to-br from-pink-950/35 via-black/40 to-fuchsia-950/35"
    >
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl w-full max-w-md text-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <Heart className="w-16 h-16 text-pink-400 mx-auto" />
        </motion.div>

        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-4">
          Tafseer Anees
        </h2>
        <p className="text-pink-200 mb-6">
          Branding & Graphics Designer | Reach out to me below! 💖
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name / Nickname"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-300 mt-4 font-medium text-center"
          >
            🎉 Message sent! I’ll get back to you soon.
          </motion.p>
        )}

        {/* Direct Contact */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-white/70">Or reach me directly:</p>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/taf_seer_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 underline"
            >
              @taf_seer_
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:tafseermalik510@gmail.com"
              className="text-pink-400 underline"
            >
              tafseermalik510@gmail.com
            </a>
          </p>
        </div>

        <button
          onClick={onComplete}
          className="mt-8 text-sm text-white/50 hover:text-pink-400 transition"
        >
          Skip & Continue
        </button>
      </div>
    </motion.div>
  )
}