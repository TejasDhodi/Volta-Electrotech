'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Zap } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', description: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, description } = formData;

    // Read configured WhatsApp number from env (NEXT_PUBLIC_* is exposed to the client)
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

    // Normalize to digits only (strip +, spaces, semicolons, etc.) to avoid invalid wa.me URLs
    const normalizedNumber = whatsappNumber.replace(/\D/g, '');

    const message = `New Inquiry from Website:\nName: ${name}\nPhone: ${phone}\nProject Description: ${description}`;

    if (!normalizedNumber) {
      console.error('WhatsApp number is not configured or invalid. Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local');
      window.alert('WhatsApp number is not configured for this site. Please contact the site administrator.');
      return;
    }

    const url = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');

    // Rest of your UI logic
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', description: '' });
      setSubmitted(false);
    }, 3000);
  };


  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
      initial={false}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your industrial operations? Contact us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Technical Support Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Technical Support</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Need technical specifications, support, or want to discuss your project requirements? Our experienced team is ready to help you optimize your industrial automation systems.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Electrical Engineer</h4>
                  <p className="text-muted-foreground mb-2">Mr. Hardik Makwana</p>
                  <a href="tel:+919725325363" className="text-accent font-semibold hover:underline">
                    +91 9725325363
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Office Locations</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>Umbergaon:</strong> Plot No. 177, Krishna Signature Mall, Umbergaon Station Road, Gujarat – 396171
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Rajkot:</strong> Plot No. 74, Shree Khodiyar Park, Ruda Transport Nagar, Rajkot – 360003
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-lg"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Quick Response</h4>
                  <p className="text-muted-foreground text-sm">
                    Our team responds to inquiries within 24 hours
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">Thank you for reaching out!</p>
                  <p className="text-muted-foreground">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg transition-all"
                  >
                    Send Message
                  </motion.button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond to your inquiry within 24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
