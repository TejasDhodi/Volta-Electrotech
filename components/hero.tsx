'use client'

import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    // use a numeric cubic-bezier easing which is type-safe for framer-motion
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Innovative Automation Solutions</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-pretty"
        >
          Industrial Automation{' '}
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Redefined
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Harness the power of cutting-edge automation technology to enhance efficiency,
          productivity, and reliability across your industrial operations.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            Explore Solutions <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card cursor-pointer"
          >
            View Demo
          </Button>
        </motion.div>

        {/* Floating cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {['PLC Programming', 'IoT Integration', 'Control Panels'].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg p-4"
            >
              <p className="text-sm font-medium text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
