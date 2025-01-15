'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const CV = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Embed Solutions Ltd",
      period: "Oct 2024 - Dec 2024",
      responsibilities: [
        "Developed custom landing pages for marketing campaigns",
        "Developed IoT integrated Irrigation system using Flutter",
        "Advised on best practices for software development and architecture"
      ]
    },
    {
      title: "Mobile App Developer",
      company: "Geecko Ltd",
      period: "June 2024 - October 2024",
      responsibilities: [
        "Developed cross-platform mobile apps using Flutter",
        "Integrated RESTful APIs and implemented state management with Provider",
        "Collaborated with UX designers to create intuitive user interfaces"
      ]
    },
    {
      title: "Software Lead",
      company: "Giat Mobility",
      period: "Dec 2024 - Present",
      responsibilities: [
        "Developed cross-platform mobile apps using flutter",
        "Developed Next.js web applications",
        "Integrated RESTful APIs and implemented state management with Provider",
        "Played role of UI/UX designer in web and mobile development"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Enegineering in Electrical and Telecommunication Engineering",
      institution: "Moi University",
      year: "2020-2025"
    }
  ]

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Next.js",
     "REST APIs", "Git", "Agile Methodologies", "Django", "Python", "Flutter", "Figma", "Adobe XD", "UI/UX Design", "HTML/CSS", "C#", "Redux", "Provider"
  ]

  return (
    <section id="cv" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              MY <span className="gold-gradient">RESUME</span>
            </h2>
            <p className="text-muted-foreground">
              My professional journey and qualifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-secondary border-none">
              <CardHeader>
                <CardTitle className="gold-gradient">Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {experiences.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company} | {exp.period}</p>
                    <ul className="mt-2 space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-muted-foreground text-sm">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card className="bg-secondary border-none">
                <CardHeader>
                  <CardTitle className="gold-gradient">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  {education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}, {edu.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="bg-secondary border-none">
                <CardHeader>
                  <CardTitle className="gold-gradient">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border-primary text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="/cv/victor-kipkorir-0745663745-cv-june-2024.pdf" download="victor-kipkorir-0745663745-cv-june-2024.pdf">
              <Button className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" /> Download Full CV
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CV
