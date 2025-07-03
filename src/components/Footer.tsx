"use client"

import { motion } from "framer-motion"
import { Heart, Github } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-dark-900 text-white py-8 lg:py-12 section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-6"
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Abhishek Adiga</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Full Stack Developer and AI Engineer passionate about creating innovative solutions that make a
              difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 lg:col-span-3"
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 lg:col-span-3"
          >
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>abhishekadiga265@gmail.com</p>
              <p>+91 8106654265</p>
              <p>Hyderabad, Telengana - 500020.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} Abhishek Adiga. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Built with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React + Tailwind</span>
            </div>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="View source code"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
