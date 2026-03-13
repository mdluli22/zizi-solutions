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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="font-display text-2xl font-black tracking-widest text-white">
          <img src="/whiteLogo.png" alt="Zizi Solutions Logo" className="inline-block h-8 w-auto mr-3" />
          ZIZI <span style={{ color: 'var(--yellow-neon)' }}>SOLUTIONS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Services', href: pathname === '/' ? '#services' : '/#services' },
            { label: 'About', href: '/about' },
            { label: 'Work', href: '/work' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="nav-link font-display text-sm font-semibold tracking-widest text-white/70 hover:text-white transition-colors uppercase"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:block font-display text-sm font-bold tracking-widest uppercase px-6 py-3 border border-[#f4f53c] text-[#f4f53c] hover:bg-[#f4f53c] hover:text-black transition-all duration-300"
        >
          Get in Touch
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

        {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-8 flex flex-col gap-6">
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
