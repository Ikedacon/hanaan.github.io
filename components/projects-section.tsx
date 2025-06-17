"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projects = [
    {
      title: "Neon Horizon",
      description: "A cyberpunk-themed action RPG game built with Unity featuring dynamic combat and a rich narrative.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Unity", "C#", "Game Design", "3D Modeling"],
      demoLink: "#",
      codeLink: "#",
      color: "purple",
    },
    {
      title: "Pixel Dreamscape",
      description: "A retro-style 2D platformer with procedurally generated levels and unique pixel art aesthetics.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Godot", "GDScript", "Pixel Art", "Level Design"],
      demoLink: "#",
      codeLink: "#",
      color: "cyan",
    },
    {
      title: "Immersive Portfolio",
      description: "An interactive 3D web portfolio showcasing creative projects with WebGL and Three.js.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Three.js", "WebGL", "GSAP"],
      demoLink: "#",
      codeLink: "#",
      color: "purple",
    },
    {
      title: "AI Art Generator",
      description: "A web application that uses machine learning to generate unique artwork based on text prompts.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "TensorFlow.js", "Stable Diffusion", "API Integration"],
      demoLink: "#",
      codeLink: "#",
      color: "cyan",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
      <div className="absolute bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Featured{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Projects
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden bg-background/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle
                      className={`text-xl font-bold ${project.color === "purple" ? "text-purple-500" : "text-cyan-400"}`}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`border-${project.color === "purple" ? "purple" : "cyan"}-500/20 bg-${project.color === "purple" ? "purple" : "cyan"}-500/10`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" className="gap-1 flex-1" asChild>
                      <Link href={project.demoLink}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1 flex-1" asChild>
                      <Link href={project.codeLink}>
                        <Github className="h-4 w-4 mr-1" />
                        Source Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
