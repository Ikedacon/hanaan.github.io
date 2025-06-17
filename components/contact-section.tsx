"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-black/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />

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
              Get In{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Send a Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-background/10 border-white/10 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-background/10 border-white/10 focus-visible:ring-cyan-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Subject"
                      className="bg-background/10 border-white/10 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[120px] bg-background/10 border-white/10 focus-visible:ring-cyan-400"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-background/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">hanaan.jadran@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">linkedin.com/in/hanaanjadran</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Github className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium">github.com/hanaanjadran</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      <Twitter className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Twitter</p>
                      <p className="font-medium">twitter.com/hanaanjadran</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Connect with me on social media</p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-purple-500/20 hover:bg-purple-500/10 transition-colors"
                    >
                      <Github className="h-5 w-5 text-purple-500" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-cyan-400/20 hover:bg-cyan-400/10 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-cyan-400" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-purple-500/20 hover:bg-purple-500/10 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-purple-500" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-cyan-400/20 hover:bg-cyan-400/10 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-cyan-400" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Hanaan Ahmed Jadran. All rights reserved.</p>
      </div>
    </section>
  )
}
