import Link from 'next/link'
import { services } from '../lib/services'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="font-display text-3xl font-black tracking-widest text-white mb-4 block">
              ZIZI<span style={{ color: 'var(--yellow-neon)' }}> SOLUTIONS</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Websites, business automation and data analytics for small and medium businesses in South Africa and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-black tracking-widest uppercase text-white/50 mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}><Link href={service.path} className="text-white/70 hover:text-[#f4f53c] text-sm transition-colors">{service.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xs font-black tracking-widest uppercase text-white/30 mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/#services' },
                { label: 'Our Work', href: '/work' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/50 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-black tracking-widest uppercase text-white/30 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:admin@zizisolutions.co.za" className="text-white/50 hover:text-[#f4f53c] text-sm transition-colors">admin@zizisolutions.co.za</a>
              </li>
              <li>
                <a href="tel:+27781897780" className="text-white/50 hover:text-[#f4f53c] text-sm transition-colors">+27 78 189 7780</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-white/20 text-xs">© 2026 Zizi Solutions. All rights reserved.</p>
          <p className="text-white/20 text-xs">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            {' · '}
            <Link href="/terms-of-service" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
