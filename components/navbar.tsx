'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const navItems = ['Solutions', 'About', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="font-bold text-accent-foreground">V</span>
          </div>
          <span className="font-bold text-xl">Volta Electrotech</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: 'var(--accent)' }}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs cursor-pointer">
          Get Started
        </Button>
      </div>
    </motion.nav>
  )
}
