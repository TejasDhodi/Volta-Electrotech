'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Features from '@/components/features'
import Portfolio from '@/components/portfolio'
import WaterChiller from '@/components/water-chiller'
import Stats from '@/components/stats'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <WaterChiller />
      {/* <Stats /> */}
      <Contact />
      <Footer />
    </main>
  )
}
