'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: "mobile-app-1",
    title: "ContraAid",
    description: "A mobile app that helps people seeking contraceptive assitance.",
    type: "Mobile App",
    technologies: ["Flutter", "Firebase", "LLMs"],
    image: "/images/contraaid-home.jpeg?height=400&width=600"
  },
  {
    id: "mobile-app-2",
    title: "Giat Bikes",
    description: "Giat Bikes is a mobile app used for opening and closig leases for bikes.",
    type: "Mobile App",
    technologies: ["Flutter", "RestAPIs", "Provider", "Appwrite"],
    image: "/images/giat/giat-home.jpeg?height=400&width=600"
  },
  {
    id: "web-project-1",
    title: "Embed IoT Landing Page",
    description: "This is a landing page for Embed IoT, a company that provides IoT solutions.",
    type: "Web App",
    technologies: ["NextJS", "NodeMailer", "MongoDB"],
    image: "/images/embed/hero.png?height=400&width=600"
  },
  {
    id: "web-project-2",
    title: "Geecko Holdings Limited",
    description: "Geecko Holdings Limited is a company that provides a wide range of services, mostly Software as a Service.",
    type: "Web App",
    technologies: ["Django", "Bootstrap", "PostgreSQL"],
    image: "/images/geecko/home.png?height=400&width=600"
  },
  {
    id: "keeg-site",
    title: "Kiptenden Education Empowerment Program",
    description: "This is a website for KEEG to enhance visibility to the good work they are doing for the students of Kipkelion East Constituencey, specificaly Chepseon ward.",
    type: "Web App",
    technologies: ["NextJs", "Tailwind", "ReactDOM"],
    image: "/images/keeg/home.png?height=400&width=600"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            MY <span className="gold-gradient">PROJECTS</span>
          </motion.h2>
          <p className="text-muted-foreground">
            Explore my latest web and mobile development projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-secondary border-none overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href={`/projects/${project.id}`}>
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

