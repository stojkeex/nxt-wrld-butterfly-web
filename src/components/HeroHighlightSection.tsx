"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroHighlightSection() {
  return (
    <section className="relative overflow-hidden h-[100vh] bg-black text-white flex items-center justify-center px-6">
      {/* Gradient animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/40 via-black to-black animate-pulse-slow" />

      {/* Glow blob */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-purple-600 blur-3xl opacity-30 rounded-full animate-blob" />
      <div className="absolute top-40 right-[-100px] w-[400px] h-[400px] bg-fuchsia-500 blur-2xl opacity-20 rounded-full animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-5xl text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NXT WRLD is not just a brand.
          <br />
          <span className="text-white drop-shadow-glow">It’s a movement.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Digital-native streetwear built for rebels, creators, and visionaries.
          Own the culture. Wear the future.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl transition-transform hover:scale-105"
          >
            Enter the NXT WRLD
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
