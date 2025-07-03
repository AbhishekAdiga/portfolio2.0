"use client"

import { motion } from "framer-motion"
import { Code, Brain, Users, Zap } from "lucide-react"

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 95 },
    { name: "JavaScript", level: 88 },
    { name: "Python", level: 85 },
    { name: "SQL", level: 82 },
    { name: "AWS", level: 60 },
    { name: "LangChain", level: 75 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Prompt Engg", level: 72 },
  ]

  const traits = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about clean code, best practices, and continuous learning",
    },
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Exploring the frontiers of AI and machine learning applications",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong believer in teamwork and knowledge sharing",
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions",
    },
  ]

  return (
    <section id="about" className="py-16 lg:py-32 section-padding section-bg-gradient">
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 lg:px-0">
            Passionate developer with a curiosity-driven approach to technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-6 space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert ml-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a Full Stack Developer and AI Engineer who believes in the power of technology to solve real-world
                problems. With a strong foundation in modern web technologies and a growing expertise in artificial
                intelligence, I enjoy building products that make a difference.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in tech has been driven by curiosity and a passion for continuous learning. I thrive in
                collaborative environments where I can contribute to innovative solutions while growing alongside
                talented teams. Proven track record through freelance work, hackathons, and impactful academic projects. Passionate about building intelligent systems that solve real-world problems using both web and AI technologies.
              </p>
            </div>

            {/* Traits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 card-swiss card-gradient"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <trait.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 text-gradient">{trait.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{trait.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="card-swiss card-gradient p-8 shadow-xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Technical Skills</h3>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
