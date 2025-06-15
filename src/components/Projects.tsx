"use client"

import { useState } from "react"
import { ExternalLink, Github, Filter } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "Intelligent task management system with natural language processing and smart scheduling.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      category: "AI",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      category: "Web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Scalable chat application with WebSocket support and message encryption.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Socket.io", "Express", "Redis"],
      category: "Web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 4,
      title: "Machine Learning Pipeline",
      description: "Automated ML pipeline for data preprocessing, model training, and deployment.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "TensorFlow", "Docker", "AWS"],
      category: "AI",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Node.js", "JWT", "MongoDB"],
      category: "Mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 6,
      title: "DevOps Dashboard",
      description: "Comprehensive dashboard for monitoring and managing cloud infrastructure.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Vue.js", "Python", "Kubernetes", "Grafana"],
      category: "Backend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
  ]

  const categories = ["All", "AI", "Web", "Mobile", "Backend"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600"
              }`}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? "ring-2 ring-blue-500 ring-opacity-50" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
