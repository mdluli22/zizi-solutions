'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { services } from '../../lib/services'

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
    value: '+27 78 189 7780',
    href: 'tel:+27781897780',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },

]

const serviceOptions = [...services.map((service) => service.title), 'Other / Not sure yet']

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    website: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
      } else {
        setSubmitted(true)
        setFormData({ name: '', email: '', company: '', service: '', message: '', website: '' })
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-xs tracking-widest uppercase text-white/40 hover:text-[#f4f53c] transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 3L3 13M3 13H11M3 13V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Back to Home
          </Link>
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
            Whether you have a project in mind, a question about our services, or just want to explore what&apos;s possible, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 pb-32 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

        {/* Left: contact details */}
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
              Service Area
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Serving clients <span className="text-white/70">locally and globally.</span>
            </p>
          </div>
        </div>

        {/* Right: form */}
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
              className="rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/5 flex flex-col gap-6"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input id="contact-website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="font-display text-xs tracking-widest uppercase text-white/90">Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    maxLength={120}
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-transparent border border-white/25 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-[#f4f53c]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="font-display text-xs tracking-widest uppercase text-white/90">Email *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    maxLength={254}
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-transparent border border-white/25 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-[#f4f53c]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-company" className="font-display text-xs tracking-widest uppercase text-white/90">Company / Organisation</label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                    maxLength={150}
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name (optional)"
                  className="bg-transparent border border-white/25 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-[#f4f53c]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-service" className="font-display text-xs tracking-widest uppercase text-white/90">Service of Interest</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-[#0a0a0a] border border-white/25 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f4f53c]/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-display text-xs tracking-widest uppercase text-white/90">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                    maxLength={5000}
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, or any questions you have..."
                  className="bg-transparent border border-white/25 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-[#f4f53c]/50 transition-colors resize-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-red-400 text-sm border border-red-400/20 bg-red-400/5 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="self-start font-display text-sm font-black tracking-widest uppercase px-10 py-4 bg-[#f4f53c] text-black rounded-full hover:scale-105 transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
