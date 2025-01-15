'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

interface ProjectPageProps {
  title: string
  description: string
  type: string
  technologies: string[]
  screenshots: string[]
  link?: string
}

const ProjectPage: React.FC<ProjectPageProps> = ({ title, description, type, technologies, screenshots, link }) => {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-secondary border-none overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl mb-2">
                    <span className="gold-gradient">{title}</span>
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">{type}</CardDescription>
                </div>
                {link && (
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                      Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">{description}</p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="border-primary text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Screenshots:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={screenshot || "/wave-pattern.svg"}
                      alt={`${title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectPage