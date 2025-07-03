"use client"

import { motion } from "framer-motion"
import { Award, Star, Users, Code } from "lucide-react"
import { achievementsData } from "../data/achievements"

const Achievements = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Star, label: "Problems solved in 2024", value: "3025" },
    { icon: Users, label: "Hackathons", value: "6+" },
    { icon: Award, label: "Certifications", value: "40+" },
  ]

  return (
    <section id="achievements" className="py-16 lg:py-32 section-padding section-bg-gradient">
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 lg:px-0">
            Milestones and recognitions that mark my journey in tech
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 xl:gap-10 mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center card-swiss card-gradient p-4 lg:p-6"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-3 lg:mb-4">
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1 lg:mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium text-sm lg:text-base">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Timeline */}
        <div className="space-y-6 lg:space-y-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center gap-4 lg:gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-4 h-4 bg-primary-500 rounded-full relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Achievement Card */}
              <motion.div whileHover={{ scale: 1.02 }} className="flex-1 card-swiss card-gradient p-4 lg:p-6 max-w-2xl">
                <div className="relative z-10">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-3 mb-2">
                        <h3 className="text-base lg:text-lg font-bold">{achievement.title}</h3>
                        <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">{achievement.date}</span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-2 lg:mb-3 text-sm lg:text-base">
                        {achievement.description}
                      </p>

                      {achievement.organization && (
                        <div className="text-xs lg:text-sm font-medium text-primary-500">
                          {achievement.organization}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
