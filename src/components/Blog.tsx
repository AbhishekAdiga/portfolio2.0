import { Calendar, ArrowRight, Clock } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn best practices for structuring large-scale React applications with TypeScript for better maintainability and developer experience.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt:
        "Exploring how artificial intelligence is transforming the way we build web applications and what developers need to know.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "AI",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Optimizing Node.js Performance for Production",
      excerpt:
        "Practical tips and techniques for improving Node.js application performance in production environments.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Backend",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Latest Insights</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights about web development, AI, and technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.date)}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {post.readTime}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Posts
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
