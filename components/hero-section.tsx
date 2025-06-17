"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[100px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500"
        >
          Hanaan Ahmed Jadran
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 text-lg md:text-xl text-muted-foreground"
        >
          <span className="relative after:content-['•'] after:mx-2 after:text-purple-500">Game Dev</span>
          <span className="relative after:content-['•'] after:mx-2 after:text-cyan-400">Designer</span>
          <span className="relative">Web Technologist</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-purple-500/20 hover:bg-purple-500/10 transition-colors"
          >
            <Mail className="h-5 w-5 text-purple-500" />
            <span className="sr-only">Email</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-cyan-400/20 hover:bg-cyan-400/10 transition-colors"
          >
            <Github className="h-5 w-5 text-cyan-400" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-purple-500/20 hover:bg-purple-500/10 transition-colors"
          >
            <Linkedin className="h-5 w-5 text-purple-500" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            asChild
            variant="default"
            className="mt-8 bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white rounded-full px-8"
          >
            <Link href="#about">Explore My Work</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce rounded-full text-muted-foreground hover:text-foreground"
          asChild
        >
          <Link href="#about">
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
