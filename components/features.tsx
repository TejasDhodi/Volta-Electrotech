'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    category: 'Industrial Excellence',
    items: [
      'Advanced Automation Technology',
      'Real-time Monitoring & Control',
      'Predictive Maintenance',
      'Data-Driven Analytics',
    ],
  },
  {
    category: 'Support & Integration',
    items: [
      'Multi-Brand Compatibility',
      'Custom Solutions',
      'Technical Support',
      'Seamless Integration',
    ],
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Volta Electrotech</h2>
          <p className="text-muted-foreground text-lg">
            Industry-leading solutions backed by expertise and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:w-[55%] mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6">{feature.category}</h3>
              <div className="space-y-4">
                {feature.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: j * 0.1 }}
                    className="flex items-center gap-3 justify-start"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-lg text-foreground/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
