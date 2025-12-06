"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Cpu, Eye, Network, Smartphone, Brain, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "skills", "services", "portfolio", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)

    
  }

  function ContactForm() {
    return (
      <form action="https://formspree.io/f/xpwvlnbn" method="POST" className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            placeholder="Internship / Collaboration"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
            placeholder="Hello Billy, I saw your portfolio..."
          />
        </div>

        <Button type="submit" size="lg" className="w-full md:w-auto">
          Send Message
        </Button>
      </form>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold hover:text-accent transition-colors"
            >
              Billy<span className="text-accent">.Dev</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === item.toLowerCase() ? "text-accent" : "text-foreground/80"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/10 ${activeSection === item.toLowerCase() ? "text-accent" : "text-foreground/80"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Aspiring IT Professional
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Hello, I'm <span className="text-accent">Billy S. Terante</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
              AI Enthusiast & Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              4th-year BSIT student at Caraga State University specializing in Computer Vision, NLP, and Intelligent Edge Systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={() => scrollToSection("portfolio")} size="lg" className="gap-2">
                View My Projects
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
            <button
              onClick={() => scrollToSection("about")}
              className="mt-16 text-muted-foreground hover:text-accent transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a final-year Bachelor of Science in Information Technology student at the College of Computing and Information Sciences, Caraga State University.
                </p>
                <p>
                  My passion lies in <strong>Artificial Intelligence</strong>, specifically in Computer Vision and Natural Language Processing. I love bridging the gap between software and hardware, working on projects that involve edge computing with devices like the Jetson Orin Nano and Raspberry Pi.
                </p>
                <p>
                  Currently, I am preparing for my OJT/Internship and working on advanced projects like hybrid edge-cloud assistant systems and AI-powered vehicle safety solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-6xl font-bold text-accent mb-2">4th</p>
                  <p className="text-xl text-muted-foreground">Year BSIT Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A blend of modern software development and AI technologies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "AI & Computer Vision", skills: ["YOLOv8", "OpenCV", "CNNs", "PyTorch"] },
              { category: "NLP & APIs", skills: ["SBERT/DistilBERT", "OpenAI API", "Hugging Face"] },
              { category: "Hardware & Edge", skills: ["Jetson Orin Nano", "Raspberry Pi 5", "Edge Computing"] },
              { category: "Web Development", skills: ["React", "Next.js", "Tailwind CSS", "Zoom SDK"] },
              { category: "HCI & Design", skills: ["WCAG Standards", "Accessibility Audit", "UI/UX Redesign"] },
              { category: "Professional Skills", skills: ["Technical Writing", "Project Management", "Agile Methodology", "Requirements Analysis"] },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-accent">{item.category}</h3>
                <ul className="space-y-2">
                  {item.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Combining technical skill with innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI System Development",
                description:
                  "Building custom models for computer vision and object detection using tools like YOLOv8.",
                icon: <Brain className="w-12 h-12 text-foreground mb-4" />,
              },
              {
                title: "Edge Computing",
                description: "Deploying intelligent applications on edge devices like Jetson Nano and Raspberry Pi.",
                icon: <Cpu className="w-12 h-12 text-foreground mb-4" />,
              },
              {
                title: "Web App Development",
                description: "Creating modern web applications with integrated SDKs (Zoom, OpenAI).",
                icon: <Code className="w-12 h-12 text-foreground mb-4" />,
              },
              {
                title: "IoT Solutions",
                description: "Developing smart systems like attendance trackers and safety monitors.",
                icon: <Network className="w-12 h-12 text-foreground mb-4" />,
              },
              {
                title: "HCI & Accessibility",
                description: "Evaluating and redesigning interfaces to meet WCAG accessibility standards.",
                icon: <Eye className="w-12 h-12 text-foreground mb-4" />,
              },
              {
                title: "Technical Consultation",
                description: "Providing insights on technical feasibility, system architecture, and project roadmaps.",
                icon: <Smartphone className="w-12 h-12 text-foreground mb-4" />,
              },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 hover:border-accent/50 transition-all hover:shadow-lg">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Recent work from my academic career</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "VisionDrive",
                description:
                  "An AI-powered vehicle safety system utilizing a Jetson Orin Nano and Raspberry Pi 5. Implements YOLOv8 for real-time hazard detection.",
                tags: ["YOLOv8", "Jetson Orin", "Python", "IoT"],
                // FIXED: Changed .png to .jpg to match your file
                image: "/VisionDrive.png",
              },
              {
                title: "Intelligent Assistant Moderator",
                description:
                  "A hybrid edge-cloud system using Zoom SDK and OpenAI. Provides real-time presentation management and moderation assistance.",
                tags: ["Zoom SDK", "OpenAI", "React", "Cloud"],
                image: "/Intelligent_Assistant_Moderator.png",
              },
              {
                title: "WiCheck Attendance System",
                description:
                  "A smart attendance tracking system designed to streamline record-keeping and improve efficiency in academic settings.",
                tags: ["IoT", "Web App", "Database"],
                image: "/WiCheck.png",
              },
              {
                title: "SentriWiz",
                description:
                  "An automated vehicle license plate recognition (ALPR) system designed for streamlined security monitoring and access control using optical character recognition.",
                tags: ["YOLOv8", "EasyOCR", "Python", "OpenCV"],
                image: "/SentriWiz.png",
              },
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:border-accent/50 transition-all hover:shadow-xl group">
                {/* Changed background to white for logos to pop, and added p-8 padding so logos aren't too big */}
                <div className="aspect-video overflow-hidden bg-white p-8 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    // Added object-contain so logos don't get cut off
                    className="w-full h-full object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in my work or looking for an intern?
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <ContactForm />
          </Card>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/10 hover:bg-accent/20 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-accent" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/10 hover:bg-accent/20 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-accent" />
            </a>
            <a
              href="mailto:billlyterante77@outlook.com"
              className="p-3 bg-accent/10 hover:bg-accent/20 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-accent" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Billy S. Terante. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}