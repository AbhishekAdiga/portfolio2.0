import { Award, Star, Users, Code } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "AWS Certified Solutions Architect",
      description: "Professional level certification in cloud architecture and deployment.",
      date: "2024",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "500+ contributions to various open-source projects on GitHub.",
      date: "2023-2024",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tech Conference Speaker",
      description: 'Presented on "AI in Modern Web Development" at DevCon 2024.',
      date: "2024",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Hackathon Winner",
      description: "First place in AI/ML category at TechHack 2023.",
      date: "2023",
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "500+", label: "GitHub Contributions" },
    { number: "10+", label: "Technologies Mastered" },
  ]

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Milestones and recognitions that reflect my commitment to excellence and continuous growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                {achievement.icon}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{achievement.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
