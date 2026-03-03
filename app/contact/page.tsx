'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const contactDetails = [
  {
    label: 'Email',
    value: 'admin@zizisolutions.co.za',
    href: 'mailto:admin@zizisolutions.co.za',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+27 68 154 5803',
    href: 'tel:+27681545803',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    value: '@zizisolutions',
    href: 'https://www.tiktok.com/@zizisolutions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: 'Zizi Solutions',
    href: 'https://www.facebook.com/zizisolutions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
]

const services = [
  'Custom Web Design & Development',
  'Brand Identity & Strategy',
  'Data & Business Analytics',
  'AI Integration Processing',
  'Other / Not sure yet',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up to your backend / email service
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-6 lg:px-12">
        <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(244,245,60,0.07) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#f4f53c' }}>
            Let&apos;s Talk
          </p>
          <h1
            className="font-display font-black leading-none tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', lineHeight: '0.92' }}
          >
            GET IN<br />
            <span style={{ color: 'var(--yellow-neon)' }}>TOUCH_</span>
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-lg">
            Whether you have a project in mind, a question about our services, or just want to explore what&apos;s possible — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 pb-32 grid grid-cols-1 lg:grid-cols-5 gap-16">

        {/* Left — contact details */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div>
            <h2 className="font-display font-black text-white text-2xl uppercase tracking-widest mb-6">
              Contact <span style={{ color: 'var(--yellow-neon)' }}>Info</span>
            </h2>
            <div className="flex flex-col gap-5">
              {contactDetails.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white/10 text-white/40 group-hover:border-[#f4f53c]/40 group-hover:text-[#f4f53c] transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-display text-xs tracking-widest uppercase text-white/30 mb-0.5">{c.label}</p>
                    <p className="text-white/70 text-sm group-hover:text-white transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5" />

          <div>
            <h3 className="font-display font-black text-white text-lg uppercase tracking-widest mb-3">
              Response Time
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              We typically respond within <span className="text-white/70">24 hours</span> on business days. For urgent matters, give us a call directly.
            </p>
          </div>

          <div>
            <h3 className="font-display font-black text-white text-lg uppercase tracking-widest mb-3">
              Based In
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Durban, South Africa — serving clients <span className="text-white/70">locally and globally.</span>
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div
              className="rounded-2xl p-14 flex flex-col items-center justify-center text-center h-full min-h-[500px] border border-white/5"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'rgba(244,245,60,0.1)', border: '1px solid rgba(244,245,60,0.3)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f4f53c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display font-black text-white text-3xl uppercase tracking-widest mb-3">
                Message Sent!
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
                Thanks for reaching out. We&apos;ll review your message and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-display text-xs font-black tracking-widest uppercase px-8 py-4 border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 rounded-full"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-10 border border-white/5 flex flex-col gap-6"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-display text-xs tracking-widest uppercase text-white/30">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#f4f53c]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-display text-xs tracking-widest uppercase text-white/30">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#f4f53c]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-xs tracking-widest uppercase text-white/30">Company / Organisation</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name (optional)"
                  className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#f4f53c]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-xs tracking-widest uppercase text-white/30">Service of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-[#f4f53c]/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-xs tracking-widest uppercase text-white/30">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, or any questions you have..."
                  className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#f4f53c]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start font-display text-sm font-black tracking-widest uppercase px-10 py-4 bg-[#f4f53c] text-black rounded-full hover:scale-105 transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
