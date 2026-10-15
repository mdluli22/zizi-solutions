'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 gap-4">
        {/* Logo */}
        <a href="/" className="font-display text-xl lg:text-2xl font-black tracking-wide shrink-0 text-white">
          <img src="/whiteLogo.png" alt="Zizi Solutions Logo" className="inline-block h-8 w-auto mr-2" />
          ZIZI <span style={{ color: 'var(--yellow-neon)' }}>SOLUTIONS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {[
            { label: 'Services', href: pathname === '/' ? '#services' : '/#services' },
            { label: 'About', href: '/about' },
            { label: 'Work', href: '/work' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="rounded-full px-4 py-2 font-display text-sm font-semibold tracking-widest text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f4f53c] transition-colors uppercase"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="button-primary hidden lg:inline-flex text-sm"
        >
          Get in Touch
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

        {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-black/95 border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {[
            { label: 'Services', href: pathname === '/' ? '#services' : '/#services' },
            { label: 'About', href: '/about' },
            { label: 'Work', href: '/work' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-display text-xl font-bold tracking-widest uppercase text-white/80 hover:text-[#f4f53c] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
