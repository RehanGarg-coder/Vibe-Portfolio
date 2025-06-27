"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Code,
  Database,
  Users,
  MessageSquare,
  ExternalLink,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = {
    languages: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 70 },
    ],
    tools: [
      { name: "VS Code", level: 90 },
      { name: "Git", level: 75 },
      { name: "Figma", level: 65 },
    ],
    softSkills: ["Communication", "Team Collaboration", "Problem-Solving", "Critical Thinking"],
  }

  const projects = [
    {
      title: "Personal Finance Tracker",
      description: "A web application to track expenses and manage personal budgets with interactive charts.",
      techStack: ["Python", "HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Arduino Weather Station",
      description: "IoT project that monitors temperature, humidity, and displays data on LCD screen.",
      techStack: ["C++", "Arduino", "Electronics"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Student Grade Calculator",
      description: "Console application that calculates GPA and generates academic performance reports.",
      techStack: ["C++", "Data Structures"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Rehan Garg</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block px-3 py-2 text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-slate-600 hover:text-teal-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block px-3 py-2 text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block px-3 py-2 text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                    Rehan Garg
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-slate-600 font-medium">
                  Engineering Student & Tech Enthusiast
                </h2>
                <p className="text-lg text-slate-500 max-w-2xl">
                  Aspiring engineer passionate about coding, innovation, and collaborative projects. Currently exploring
                  the fascinating world of software development and electronics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 absolute -top-4 -left-4"></div>
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Rehan Garg"
                  className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm a first-year engineering student with a deep passion for technology and innovation. My journey in
                  engineering has just begun, but I'm already fascinated by the endless possibilities that software
                  development and electronics offer.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  When I'm not studying or coding, you'll find me exploring the latest tech trends, writing about my
                  learning experiences, gaming with friends, or contributing to open-source projects. I believe in the
                  power of collaboration and continuous learning.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  My goal is to become a well-rounded engineer who can bridge the gap between theoretical knowledge and
                  practical applications, creating solutions that make a positive impact on society.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-teal-600">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-slate-800 mb-2">Current Focus</h3>
                    <p className="text-slate-600">
                      Building strong foundations in programming languages and exploring various engineering
                      disciplines.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-slate-800 mb-2">Interests</h3>
                    <p className="text-slate-600">
                      Software Development, IoT, Web Technologies, Electronics, and Artificial Intelligence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-slate-800 mb-2">Hobbies</h3>
                    <p className="text-slate-600">
                      Tech blogging, gaming, open-source contribution, and learning new technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Code className="mr-2 h-5 w-5 text-teal-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-teal-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Database className="mr-2 h-5 w-5 text-blue-600" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Users className="mr-2 h-5 w-5 text-orange-500" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-orange-100 text-orange-800 hover:bg-orange-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-slate-800 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-colors bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto"></div>
            <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-slate-300">rehan.garg@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-slate-300">linkedin.com/in/rehangarg</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gray-600 p-3 rounded-full">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-slate-300">github.com/rehangarg</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-300">I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Rehan Garg. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with passion and lots of coffee ☕</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
