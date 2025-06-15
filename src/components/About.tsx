import { Code, Brain, Users, Lightbulb } from "lucide-react"

export default function About() {
  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Tailwind CSS",
    "Next.js",
    "Express.js",
    "LangChain",
    "TensorFlow",
    "PyTorch",
    "Redis",
    "GraphQL",
    "REST APIs",
  ]

  const traits = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Passionate about clean code, scalable architecture, and cutting-edge technologies.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Innovation",
      description: "Leveraging artificial intelligence to solve complex problems and enhance user experiences.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Strong believer in agile methodologies and cross-functional team collaboration.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Analytical mindset with a knack for breaking down complex challenges into manageable solutions.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer and AI Engineer with a love for creating innovative solutions that
              make a real impact. My journey began with curiosity about how things work, which led me to explore the
              fascinating world of software development and artificial intelligence.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With expertise spanning from frontend frameworks like React to backend technologies like Node.js and
              Python, I enjoy building end-to-end solutions. My recent focus on AI and machine learning has opened up
              exciting possibilities for creating intelligent applications that can learn and adapt.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community. I believe in continuous learning and the power of
              collaboration to drive innovation.
            </p>
          </div>

          {/* Right: Traits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{trait.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{trait.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technologies & Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
