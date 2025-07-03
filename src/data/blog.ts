export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  slug: string
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.",
    image: "/placeholder.svg?height=300&width=400",
    category: "AI/ML",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    slug: "future-of-ai-web-development",
  },
  {
    id: "2",
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating maintainable and scalable React applications in 2024.",
    image: "/placeholder.svg?height=300&width=400",
    category: "React",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    slug: "scalable-react-applications",
  },
  {
    id: "3",
    title: "Microservices Architecture with Node.js",
    excerpt:
      "A comprehensive guide to implementing microservices architecture using Node.js and modern deployment strategies.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Backend",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    slug: "microservices-nodejs",
  },
  {
    id: "4",
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns and practices that every developer should know for better code quality.",
    image: "/placeholder.svg?height=300&width=400",
    category: "TypeScript",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    slug: "typescript-best-practices",
  },
  {
    id: "5",
    title: "Optimizing Web Performance",
    excerpt: "Techniques and tools for improving web application performance and user experience.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Performance",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    slug: "optimizing-web-performance",
  },
  {
    id: "6",
    title: "Getting Started with Machine Learning",
    excerpt: "A beginner-friendly introduction to machine learning concepts and practical applications.",
    image: "/placeholder.svg?height=300&width=400",
    category: "AI/ML",
    date: "Nov 15, 2024",
    readTime: "15 min read",
    slug: "getting-started-machine-learning",
  },
]
