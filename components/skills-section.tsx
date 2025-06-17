"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, Gamepad2, Palette, BrainCircuit } from "lucide-react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-black/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              My{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          </div>

          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto bg-background/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
              <TabsTrigger
                value="programming"
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-500 rounded-md py-2"
              >
                <Code className="mr-2 h-4 w-4" />
                Programming
              </TabsTrigger>
              <TabsTrigger
                value="gamedev"
                className="data-[state=active]:bg-cyan-400/20 data-[state=active]:text-cyan-400 rounded-md py-2"
              >
                <Gamepad2 className="mr-2 h-4 w-4" />
                Game Dev
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-500 rounded-md py-2"
              >
                <Palette className="mr-2 h-4 w-4" />
                Design
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-cyan-400/20 data-[state=active]:text-cyan-400 rounded-md py-2"
              >
                <BrainCircuit className="mr-2 h-4 w-4" />
                AI
              </TabsTrigger>
            </TabsList>

            <TabsContent value="programming" className="mt-6">
              <Card className="bg-background/5 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                  >
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "HTML5",
                      "CSS3",
                      "Tailwind CSS",
                      "Node.js",
                      "Python",
                      "C#",
                      "C++",
                      "Git",
                      "RESTful APIs",
                      "GraphQL",
                      "SQL",
                      "NoSQL",
                    ].map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <Badge
                          variant="outline"
                          className="w-full justify-center py-2 border-purple-500/20 hover:bg-purple-500/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gamedev" className="mt-6">
              <Card className="bg-background/5 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                  >
                    {[
                      "Unity",
                      "Unreal Engine",
                      "Godot",
                      "GameMaker Studio",
                      "3D Modeling",
                      "Animation",
                      "Level Design",
                      "Game Physics",
                      "Shader Programming",
                      "VFX",
                      "Multiplayer Networking",
                      "Game AI",
                    ].map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <Badge
                          variant="outline"
                          className="w-full justify-center py-2 border-cyan-400/20 hover:bg-cyan-400/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="design" className="mt-6">
              <Card className="bg-background/5 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                  >
                    {[
                      "UI/UX Design",
                      "Figma",
                      "Adobe Photoshop",
                      "Adobe Illustrator",
                      "Blender",
                      "3D Modeling",
                      "Texture Design",
                      "Character Design",
                      "Environment Art",
                      "Motion Graphics",
                      "Typography",
                      "Color Theory",
                    ].map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <Badge
                          variant="outline"
                          className="w-full justify-center py-2 border-purple-500/20 hover:bg-purple-500/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai" className="mt-6">
              <Card className="bg-background/5 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                  >
                    {[
                      "Machine Learning",
                      "Deep Learning",
                      "NLP",
                      "Computer Vision",
                      "TensorFlow",
                      "PyTorch",
                      "Generative AI",
                      "Stable Diffusion",
                      "Midjourney",
                      "DALL-E",
                      "GPT Integration",
                      "AI Game NPCs",
                    ].map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <Badge
                          variant="outline"
                          className="w-full justify-center py-2 border-cyan-400/20 hover:bg-cyan-400/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
