'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="font-bold text-accent-foreground text-sm">V</span>
            </div>
            <span className="font-bold">Volta Electrotech</span>
          </div>

          <p className="text-muted-foreground mb-2">
            Innovation-based automation solutions for the industrial sector
          </p>

          <p className="text-muted-foreground text-sm">
            © 2025 Volta Electrotech. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
