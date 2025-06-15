"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, Eye } from "lucide-react"

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0)
  const subtitles = [
    "Turning ideas into products",
    "AI-first development mindset",
    "Building scalable solutions",
    "Crafting digital experiences",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Abhishek
                <span className="block text-blue-600 dark:text-blue-400">Adiga</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Full Stack Developer | AI Engineer | Problem Solver
              </p>

              <div className="h-8">
                <p className="text-lg text-gray-500 dark:text-gray-400 animate-fade-in">{subtitles[currentSubtitle]}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Eye className="mr-2" size={20} />
                Explore Projects
                <ArrowRight className="ml-2" size={20} />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" size={20} />
                View Resume
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Abhishek Adiga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
