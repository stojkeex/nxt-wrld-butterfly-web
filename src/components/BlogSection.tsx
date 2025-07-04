"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "Step into the NXT WRLD. 🌍🦋",
    description: "#NXTWRLD #StreetwearDrop #NewArrival #GraphicTee",
    image: "/blog1.webp",
    date: "July 1, 2025",
  }
]

export default function BlogSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bebas mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          From The Blog
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-bebas mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
