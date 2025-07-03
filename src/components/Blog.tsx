// "use client"

// import { motion } from "framer-motion"
// import { Calendar, Clock, ArrowRight } from "lucide-react"
// import { blogData } from "../data/blog"

// const Blog = () => {
//   return (
//     <section id="blog" className="py-16 lg:py-32 section-padding">
//       <div className="container-width">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 lg:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//             Latest <span className="text-gradient">Insights</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 lg:px-0">
//             Thoughts on technology, development, and the future of AI
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
//           {blogData.map((post, index) => (
//             <motion.article
//               key={post.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -8 }}
//               className="card-swiss card-gradient overflow-hidden group cursor-pointer"
//             >
//               <div className="relative z-10">
//                 {/* Featured Image with gradient overlay */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={post.image || "/placeholder.svg"}
//                     alt={post.title}
//                     className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                   <div className="absolute top-3 lg:top-4 left-3 lg:left-4">
//                     <span className="px-2 lg:px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full font-medium shadow-lg">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 lg:p-6">
//                   <div className="flex items-center gap-3 lg:gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-400 mb-3">
//                     <div className="flex items-center gap-1">
//                       <Calendar size={12} className="lg:w-4 lg:h-4" />
//                       <span>{post.date}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock size={12} className="lg:w-4 lg:h-4" />
//                       <span>{post.readTime}</span>
//                     </div>
//                   </div>

//                   <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 group-hover:text-primary-500 transition-colors duration-300">
//                     {post.title}
//                   </h3>

//                   <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3 lg:mb-4">
//                     {post.excerpt}
//                   </p>

//                   <div className="flex items-center gap-2 text-primary-500 font-medium text-sm group-hover:gap-3 transition-all duration-300">
//                     <span>Read More</span>
//                     <ArrowRight size={14} />
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-8 lg:mt-12"
//         >
//           <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary">
//             <div>
//               <span>View All Articles</span>
//             </div>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Blog
