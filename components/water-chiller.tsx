'use client'

import { motion } from 'framer-motion'
import { Droplet, Thermometer, Shield, Cpu } from 'lucide-react'
import Image from 'next/image'

const specs = [
  { icon: Droplet, label: 'Water Flow Switch Protection' },
  { icon: Thermometer, label: 'Temperature Sensors' },
  { icon: Shield, label: 'Pressure Protection Systems' },
  { icon: Cpu, label: 'PLC/Non-PLC Control' },
]

export default function WaterChiller() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Water Chiller Panel Solutions</h2>
          <p className="text-muted-foreground text-lg mb-2">Capacity Range: 2 TR to 100+ TR</p>
          <p className="text-muted-foreground text-lg">Scroll & Screw Compressor Based Systems</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative space-y-4"
          >
            {/* <div className="relative w-full h-80 rounded-xl overflow-hidden border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-16%20at%2011.49.17-ZGgzMUaChgkCzDC0sdiW4NAxGc5yeP.jpeg"
                alt="Water Chiller Control Panel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div> */}
            <div className="relative w-full h-75 rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/Water_chiller_system.jpeg"
                alt="Advanced PLC Panel System"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6 mb-8">
              {specs.map((spec, i) => {
                const Icon = spec.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card border border-border rounded-lg p-6 text-center group hover:border-accent/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="font-medium text-sm leading-relaxed">{spec.label}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Protection Systems</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ Water Inlet/Outlet Temperature Sensors</li>
                    <li>✓ Condenser Temperature Monitoring</li>
                    <li>✓ Anti-Freeze Protection</li>
                    <li>✓ High/Low Pressure Protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">System Options</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ Air-Cooled Systems</li>
                    <li>✓ Water-Cooled Systems</li>
                    <li>✓ Solenoid Valve Control</li>
                    <li>✓ Custom PLC Programming</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
