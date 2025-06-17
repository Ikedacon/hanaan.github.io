"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a versatile and creative professional passionate about game development, art/design, and web
            technologies. With a background spanning multiple disciplines, I bring a unique perspective to every
            project, combining technical expertise with artistic vision to create engaging digital experiences.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in the digital realm has equipped me with a diverse skill set that allows me to approach problems
            from multiple angles. Whether I'm coding a complex game mechanic, designing an intuitive user interface, or
            developing a responsive website, I strive for excellence and innovation in everything I create.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe in the power of technology to transform ideas into reality, and I'm constantly exploring new tools
            and techniques to push the boundaries of what's possible. My goal is to create meaningful digital
            experiences that engage, inspire, and delight users.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
