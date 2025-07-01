import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/carousel1.webp",
    label: "New In: Handbags",
    link: "/shop",
  },
  {
    image: "/carousel2.webp",
    label: "Essentials Collection",
    link: "/shop",
  },
  {
    image: "/carousel3.webp",
    label: "Summer Drop ‘25",
    link: "/shop",
  },
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const current = slides[index]

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current.image}
          src={current.image}
          alt={current.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/10 z-10" />

      <div className="relative z-20 h-full flex items-end justify-center pb-24 text-center">
        <div className="text-white">
          <h2 className="uppercase text-sm tracking-widest mb-1">NXT WRLD</h2>
          <h1 className="text-3xl md:text-5xl font-medium mb-4">{current.label}</h1>
          <a
            href={current.link}
            className="text-white border-b border-white hover:text-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
