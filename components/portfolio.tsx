'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  {
    image: '/images/Professional_PCC_Panel_Assembly.jpeg',
    title: 'Professional PCC Panel Assembly',
    category: 'Control Panels',
    description: 'High-quality electrical panel with organized components and circuit breakers',
  },
  {
    image: '/images/MCC_Systems.jpeg',
    title: 'Motor Control Center Installation',
    description: 'Complete MCC panel with VFD drives and professional wiring',
    category: 'MCC Systems',
  },
  {
    image: '/images/Advanced_Control_System.jpeg',
    title: 'Advanced Control System',
    description: 'Complex automation panel with multiple VFDs and control interfaces',
    category: 'Automation',
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of completed industrial automation projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="relative w-full h-64 overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              <div className="relative z-10 p-6">
                <p className="text-accent text-sm font-semibold mb-2">{item.category}</p>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
