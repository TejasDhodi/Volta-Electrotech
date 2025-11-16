'use client'

import { motion } from 'framer-motion'
import { Activity, Cpu, Zap, Waves } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Cpu,
    title: 'PLC & HMI Programming',
    description:
      'Expertise in industry-leading brands like Mitsubishi, Delta, Siemens, Schneider, and Fatek. Deliver customized programming solutions that streamline operations.',
    image: '/images/PLC_HMI_programming.jpeg',
  },
  {
    icon: Activity,
    title: 'PCC & MCC Panels',
    description:
      'Reliable power distribution and motor control centers. Enhance the stability and efficiency of your electrical systems with our expertly designed panels.',
    image: '/images/PCC_MCC_panel.jpeg',
  },
  {
    icon: Waves,
    title: 'Water Chiller Systems',
    description:
      'Advanced water chiller control panels from 2 TR to 100+ TR capacity. PLC-based and transmission-based solutions with comprehensive protection systems.',
    image: '/images/Water_chiller_system.jpeg',
  },
  {
    icon: Zap,
    title: 'IoT Integration',
    description:
      'Connect your machines to the internet of things. Enable real-time monitoring, predictive maintenance, and data-driven decision making.',
    image: '/images/IOT-integration.jpeg',
  },
]

export default function Services() {
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
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive automation solutions tailored to your industrial needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
