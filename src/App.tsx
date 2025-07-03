"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
//import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  return (
    <div
      className={`min-h-screen bg-white dark:bg-dark-900 text-dark-900 dark:text-white transition-colors duration-300`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        {/* <Blog /> */}
        <Contact />
      </motion.main>

      <Footer />
    </div>
  )
}

export default App
