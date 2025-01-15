'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 wave-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-5xl font-bold mb-4">
              Hi, I&apos;m <span className="gold-gradient">Victor Kipkorir</span>
            </h1>
            <h2 className="text-3xl mb-6">Web & Mobile Developer</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Crafting beautiful and functional digital experiences with modern technologies
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View My Work
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-[300px] h-[300px] mx-auto md:w-[400px] md:h-[400px]">
              <Image
                src="/images/victor-portfolio-photo.jpeg"
                alt="Victor Kipkorir"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

