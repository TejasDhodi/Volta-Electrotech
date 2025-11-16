'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '2+', label: 'Offices Across India' },
  { number: '100+', label: 'Successful Projects' },
  { number: '50+', label: 'Industrial Clients' },
  { number: '24/7', label: 'Technical Support' },
]

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center">
              <motion.p
                className="text-5xl md:text-6xl font-bold text-accent mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {stat.number}
              </motion.p>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
